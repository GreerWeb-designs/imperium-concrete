// Post-build prerender (SSG) for this client-rendered React Router SPA.
//
// Why this exists: the app renders client-side, so the HTML a crawler or social
// scraper receives is an empty shell until JS runs. This script loads each route
// in a headless browser, lets React render and <Seo> populate <head>, then writes
// the fully-rendered HTML to disk so each URL ships real content + correct
// title/description/canonical/OG/JSON-LD.
//
// Routes are read from public/sitemap.xml so this stays in sync automatically.
// Run after `vite build` (see the "build:ssg" npm script).
import { createServer } from "node:http";
import { readFile, writeFile, mkdir, stat } from "node:fs/promises";
import { join, extname, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import puppeteer from "puppeteer";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const DIST = join(ROOT, "dist");
const PORT = 4319;

const MIME = {
  ".html": "text/html",
  ".js": "text/javascript",
  ".css": "text/css",
  ".json": "application/json",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".ico": "image/x-icon",
  ".xml": "application/xml",
  ".txt": "text/plain",
};

async function getRoutes() {
  const xml = await readFile(join(ROOT, "public", "sitemap.xml"), "utf8");
  const locs = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  // Reduce absolute URLs to path-only, normalized without a trailing slash.
  return locs.map((u) => {
    const path = u.replace(/^https?:\/\/[^/]+/, "");
    const trimmed = path.replace(/\/$/, "");
    return trimmed === "" ? "/" : trimmed;
  });
}

// Minimal static server for dist with SPA fallback to index.html.
function startServer() {
  const server = createServer(async (req, res) => {
    try {
      const urlPath = decodeURIComponent(req.url.split("?")[0]);
      let filePath = join(DIST, urlPath);
      let isFile = false;
      try {
        isFile = (await stat(filePath)).isFile();
      } catch {
        isFile = false;
      }
      if (!isFile) filePath = join(DIST, "index.html"); // SPA fallback
      const body = await readFile(filePath);
      res.writeHead(200, { "Content-Type": MIME[extname(filePath)] || "application/octet-stream" });
      res.end(body);
    } catch (e) {
      res.writeHead(500);
      res.end(String(e));
    }
  });
  return new Promise((resolve) => server.listen(PORT, () => resolve(server)));
}

async function run() {
  const routes = await getRoutes();
  const server = await startServer();
  const browser = await puppeteer.launch({ headless: "new", args: ["--no-sandbox"] });
  const page = await browser.newPage();

  let ok = 0;
  for (const route of routes) {
    const url = `http://localhost:${PORT}${route}`;
    try {
      // domcontentloaded is reliable; we then wait for the app's <h1> to render
      // rather than for full network idle (third-party embeds can keep
      // connections open indefinitely).
      await page.goto(url, { waitUntil: "domcontentloaded", timeout: 30000 });
      await page.waitForSelector("h1", { timeout: 15000 }).catch(() => {});
      // Let <Seo> effects flush into <head>.
      await new Promise((r) => setTimeout(r, 500));

      const html = "<!doctype html>\n" + (await page.evaluate(() => document.documentElement.outerHTML));

      const outPath =
        route === "/"
          ? join(DIST, "index.html")
          : join(DIST, route, "index.html");
      await mkdir(dirname(outPath), { recursive: true });
      await writeFile(outPath, html, "utf8");
      ok += 1;
      console.log(`prerendered ${route} -> ${outPath.replace(DIST, "dist")}`);
    } catch (e) {
      console.error(`FAILED ${route}: ${e.message}`);
    }
  }

  await browser.close();
  server.close();
  console.log(`\nPrerendered ${ok}/${routes.length} routes.`);
  if (ok < routes.length) process.exitCode = 1;
}

run();

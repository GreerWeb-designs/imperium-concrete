import { useEffect } from "react";
import { SITE_URL, SITE_NAME, DEFAULT_OG_IMAGE } from "../config/site";

/**
 * Per-page <head> manager for this client-rendered SPA.
 *
 * Sets a unique title, meta description, self-referencing canonical, Open Graph
 * / Twitter tags, and optional page-specific JSON-LD. Every page should render
 * one <Seo /> so each URL has its own metadata instead of inheriting the static
 * tags from index.html.
 *
 * Pass `path` (e.g. "/service-area/greenville") and the canonical is built from
 * SITE_URL; or pass an explicit `canonical`.
 */
function upsertMeta(selector, attr, attrValue, content) {
  let el = document.head.querySelector(selector);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, attrValue);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

export default function Seo({
  title,
  description,
  path,
  canonical,
  image,
  type = "website",
  jsonLd,
}) {
  const url = canonical || (path != null ? `${SITE_URL}${path}` : undefined);
  const ogImage = image || DEFAULT_OG_IMAGE;
  const jsonLdKey = jsonLd ? JSON.stringify(jsonLd) : null;

  useEffect(() => {
    if (title) document.title = title;
    if (description)
      upsertMeta('meta[name="description"]', "name", "description", description);

    if (url) {
      let link = document.head.querySelector('link[rel="canonical"]');
      if (!link) {
        link = document.createElement("link");
        link.setAttribute("rel", "canonical");
        document.head.appendChild(link);
      }
      link.setAttribute("href", url);
    }

    // Open Graph
    if (title) upsertMeta('meta[property="og:title"]', "property", "og:title", title);
    if (description)
      upsertMeta('meta[property="og:description"]', "property", "og:description", description);
    upsertMeta('meta[property="og:type"]', "property", "og:type", type);
    upsertMeta('meta[property="og:site_name"]', "property", "og:site_name", SITE_NAME);
    if (url) upsertMeta('meta[property="og:url"]', "property", "og:url", url);
    if (ogImage) upsertMeta('meta[property="og:image"]', "property", "og:image", ogImage);

    // Twitter
    upsertMeta('meta[name="twitter:card"]', "name", "twitter:card", "summary_large_image");
    if (title) upsertMeta('meta[name="twitter:title"]', "name", "twitter:title", title);
    if (description)
      upsertMeta('meta[name="twitter:description"]', "name", "twitter:description", description);
    if (ogImage) upsertMeta('meta[name="twitter:image"]', "name", "twitter:image", ogImage);

    // Page-specific JSON-LD: clear any previous block, then add this page's.
    document.head
      .querySelectorAll('script[data-seo="page"]')
      .forEach((s) => s.remove());
    let script;
    if (jsonLdKey) {
      script = document.createElement("script");
      script.type = "application/ld+json";
      script.setAttribute("data-seo", "page");
      script.textContent = jsonLdKey;
      document.head.appendChild(script);
    }

    return () => {
      if (script) script.remove();
    };
  }, [title, description, url, type, ogImage, jsonLdKey]);

  return null;
}

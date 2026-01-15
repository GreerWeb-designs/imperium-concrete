import React, { useEffect } from "react";

export default function ContactPage() {
  useEffect(() => {
    const CSS_ID = "jobber-work-request-embed-css";
    const SCRIPT_ID = "jobber-work-request-embed-script-contact";

    // ✅ Your Contact Page form embed (2145933)
    const TARGET_ID = "72d04a94-9db5-4715-89d7-284bd0755b1f-2145933";
    const FORM_URL =
      "https://clienthub.getjobber.com/client_hubs/72d04a94-9db5-4715-89d7-284bd0755b1f/public/work_request/embedded_work_request_form?form_id=2145933";
    const SCRIPT_SRC =
      "https://d3ey4dbjkt2f6s.cloudfront.net/assets/static_link/work_request_embed_snippet.js";
    const CSS_HREF =
      "https://d3ey4dbjkt2f6s.cloudfront.net/assets/external/work_request_embed.css";

    let cancelled = false;
    let retryTimer = null;

    const ensureCss = () => {
      if (document.getElementById(CSS_ID)) return;
      const link = document.createElement("link");
      link.id = CSS_ID;
      link.rel = "stylesheet";
      link.href = CSS_HREF;
      link.media = "screen";
      document.head.appendChild(link);
    };

    const removeExistingScript = () => {
      const existing = document.getElementById(SCRIPT_ID);
      if (existing) existing.remove();
    };

    const injectScript = () => {
      removeExistingScript();

      const script = document.createElement("script");
      script.id = SCRIPT_ID;
      script.src = SCRIPT_SRC;
      script.async = true;

      // Jobber reads these attributes from the script tag
      script.setAttribute("clienthub_id", TARGET_ID);
      script.setAttribute("form_url", FORM_URL);

      document.body.appendChild(script);
      return script;
    };

    const initEmbed = (attempt = 0) => {
      if (cancelled) return;

      const target = document.getElementById(TARGET_ID);

      // If React hasn't painted the div yet, retry briefly
      if (!target) {
        if (attempt < 30) {
          retryTimer = setTimeout(() => initEmbed(attempt + 1), 50);
        }
        return;
      }

      // Clear any previous embed markup before re-init
      target.innerHTML = "";

      ensureCss();
      injectScript();
    };

    // Run after paint (helps with first-load via SPA navigation)
    requestAnimationFrame(() => initEmbed(0));

    return () => {
      cancelled = true;
      if (retryTimer) clearTimeout(retryTimer);

      // Remove script so returning to the page always re-initializes cleanly
      removeExistingScript();
      // Leave CSS in place (fine to keep)
    };
  }, []);

  return (
    <main className="bg-white">
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
            Contact
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Request a Quote
          </h1>
          <p className="mt-4 max-w-2xl text-sm text-slate-600 md:text-base">
            Tell us a little about your project and we’ll follow up quickly.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-10 md:py-14">
          <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm md:p-6">
            {/* Jobber embed renders into this div */}
            <div id="72d04a94-9db5-4715-89d7-284bd0755b1f-2145933" />
          </div>

          <div className="mt-6 text-sm text-slate-600">
            Prefer to call?{" "}
            <a
              href="tel:18644476200"
              className="font-semibold text-slate-900 underline-offset-4 hover:underline"
            >
              (864) 447-6200
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

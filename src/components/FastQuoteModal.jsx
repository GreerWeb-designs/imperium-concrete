import { useEffect, useRef } from "react";

/**
 * Jobber "Work Request" embed modal
 */
export default function FastQuoteModal({ open, onClose }) {
  const TARGET_ID = "72d04a94-9db5-4715-89d7-284bd0755b1f-2105819";
  const CSS_ID = "jobber-work-request-embed-css";
  const SCRIPT_ID = "jobber-work-request-embed-script";

  // ESC to close
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose?.();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  // Inject Jobber embed
  useEffect(() => {
    if (!open) return;

    const target = document.getElementById(TARGET_ID);
    if (!target) return;

    target.innerHTML = "";

    // CSS (load once)
    if (!document.getElementById(CSS_ID)) {
      const link = document.createElement("link");
      link.id = CSS_ID;
      link.rel = "stylesheet";
      link.href =
        "https://d3ey4dbjkt2f6s.cloudfront.net/assets/external/work_request_embed.css";
      document.head.appendChild(link);
    }

    // Script (re-inject every open)
    const existing = document.getElementById(SCRIPT_ID);
    if (existing) existing.remove();

    const script = document.createElement("script");
    script.id = SCRIPT_ID;
    script.src =
      "https://d3ey4dbjkt2f6s.cloudfront.net/assets/static_link/work_request_embed_snippet.js";
    script.async = true;

    script.setAttribute("clienthub_id", TARGET_ID);
    script.setAttribute(
      "form_url",
      "https://clienthub.getjobber.com/client_hubs/72d04a94-9db5-4715-89d7-284bd0755b1f/public/work_request/embedded_work_request_form?form_id=2105819"
    );

    document.body.appendChild(script);

    return () => {
      script.remove();
      if (target) target.innerHTML = "";
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-60 flex items-center justify-center bg-black/60 px-4"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose?.();
      }}
    >
      <div className="w-full max-w-2xl rounded-2xl bg-white shadow-xl">
        <div className="flex items-start justify-between border-b px-5 py-4">
          <div>
            <h2 className="text-lg font-bold text-slate-900">
              Request a Fast Quote
            </h2>
            <p className="text-sm text-slate-600">
              Share your project details and we’ll reach out quickly.
            </p>
          </div>

          <button
            onClick={onClose}
            className="rounded-lg p-2 text-slate-500 hover:bg-slate-100"
          >
            ✕
          </button>
        </div>

        <div className="p-5">
          <div id={TARGET_ID} />
        </div>
      </div>
    </div>
  );
}

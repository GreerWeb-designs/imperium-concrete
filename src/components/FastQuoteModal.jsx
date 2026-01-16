import { useEffect } from "react";

/**
 * Jobber "Work Request" embed modal
 * - Locks background scroll when open
 * - Re-injects embed script on each open (reliable)
 * - Keeps modal header fixed and makes form area scrollable on mobile
 */
export default function FastQuoteModal({ open, onClose }) {
  const TARGET_ID = "72d04a94-9db5-4715-89d7-284bd0755b1f-2105819";
  const CSS_ID = "jobber-work-request-embed-css";
  const SCRIPT_ID = "jobber-work-request-embed-script";
  const FORM_URL =
    "https://clienthub.getjobber.com/client_hubs/72d04a94-9db5-4715-89d7-284bd0755b1f/public/work_request/embedded_work_request_form?form_id=2105819";

  // Lock background scroll while modal is open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev || "";
    };
  }, [open]);

  // ESC to close
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose?.();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  // Inject Jobber embed assets when open
  useEffect(() => {
    if (!open) return;

    const target = document.getElementById(TARGET_ID);
    if (!target) return;

    // Clear old embed DOM so we start clean each open
    target.innerHTML = "";

    // Load CSS once
    if (!document.getElementById(CSS_ID)) {
      const link = document.createElement("link");
      link.id = CSS_ID;
      link.rel = "stylesheet";
      link.href =
        "https://d3ey4dbjkt2f6s.cloudfront.net/assets/external/work_request_embed.css";
      link.media = "screen";
      document.head.appendChild(link);
    }

    // Re-inject script each open (ensures Jobber re-inits)
    const existing = document.getElementById(SCRIPT_ID);
    if (existing) existing.remove();

    const script = document.createElement("script");
    script.id = SCRIPT_ID;
    script.src =
      "https://d3ey4dbjkt2f6s.cloudfront.net/assets/static_link/work_request_embed_snippet.js";
    script.async = true;

    // Jobber reads these attributes off the script tag
    script.setAttribute("clienthub_id", TARGET_ID);
    script.setAttribute("form_url", FORM_URL);

    document.body.appendChild(script);

    return () => {
      script.remove();
      target.innerHTML = "";
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 px-4"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose?.();
      }}
    >
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-hidden rounded-2xl bg-white shadow-xl flex flex-col">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 border-b border-slate-200 px-5 py-4">
          <div>
            <h2 className="text-lg font-bold tracking-tight text-slate-900">
              Request a Fast Quote
            </h2>
            <p className="mt-1 text-sm text-slate-600">
              Share your project details and we’ll reach out quickly.
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-700"
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto p-5 overscroll-contain">
          {/* IMPORTANT: this ID must match TARGET_ID exactly */}
          <div id={TARGET_ID} />
        </div>
      </div>
    </div>
  );
}

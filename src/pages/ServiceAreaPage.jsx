import React from "react";
import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import { cities } from "../data/cities";
import { SITE_URL, SITE_NAME, PHONE_E164 } from "../config/site";

const SERVICE_AREA_JSONLD = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: SITE_NAME,
  url: `${SITE_URL}/service-area`,
  telephone: PHONE_E164,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Greenville",
    addressRegion: "SC",
    addressCountry: "US",
  },
  areaServed: cities.map((c) => ({ "@type": "City", name: `${c.name}, SC` })),
};

export default function ServiceAreaPage({ onFastQuoteOpen }) {
  return (
    <main className="bg-white">
      <Seo
        title="Service Area | Concrete Contractor in Greenville & Upstate SC"
        description="Imperium Concrete pours driveways, patios, slabs, sidewalks, and retaining walls across Greenville and the Upstate of South Carolina. See the cities we serve."
        path="/service-area"
        jsonLd={SERVICE_AREA_JSONLD}
      />
      {/* INTRO */}
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-500">
            Service Area
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Concrete Contractor Serving Upstate South Carolina
          </h1>
          <p className="mt-4 max-w-3xl text-sm text-slate-600 md:text-base">
            Imperium Concrete pours driveways, patios, monolithic slabs,
            foundations, sidewalks, and retaining walls across Greenville and
            the surrounding Upstate. Use the map below to explore our service
            area, or pick a city for local details and recent projects.
          </p>
        </div>
      </section>

      {/* MAP + CITY LIST */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
          <div className="grid gap-10 md:grid-cols-2">
            {/* LEFT — MAP */}
            <div>
              <div className="relative w-full overflow-hidden rounded-3xl border border-amber-300 shadow-[0_0_25px_rgba(251,191,36,0.25)]">
                <div className="h-87.5 w-full md:h-112.5">
                  <iframe
                    src="https://www.google.com/maps/d/u/4/embed?mid=1f9fRrcALXyozMReziTwlf8GWTvIvTIE&ehbc=2E312F&ll=34.8526,-82.3940&z=9"
                    className="h-full w-full"
                    style={{ border: 0 }}
                    loading="lazy"
                    allowFullScreen
                    title="Imperium Concrete Service Area Map"
                  ></iframe>
                </div>

                <div className="border-t border-slate-300 bg-white/95 px-5 py-4 text-sm">
                  <p className="font-semibold text-slate-900">
                    Interactive Service Area Map
                  </p>
                  <p className="text-slate-600">
                    See where we pour driveways, patios, slabs, monolithic
                    foundations, and retaining walls across the Upstate.
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT — CITY LINKS */}
            <div>
              <h2 className="text-xl font-bold tracking-tight text-slate-900">
                Cities We Serve
              </h2>

              <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                {cities.map((c) => (
                  <Link
                    key={c.slug}
                    to={`/service-area/${c.slug}`}
                    className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 font-semibold text-slate-700 hover:border-amber-300 hover:bg-amber-50"
                  >
                    {c.name}, SC
                  </Link>
                ))}
              </div>

              <button
                onClick={onFastQuoteOpen}
                className="mt-6 rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold text-slate-900 shadow hover:bg-amber-400"
              >
                Request a Fast Quote
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

import React from "react";
import { Link, useParams } from "react-router-dom";

const CITY_SERVICE_AREAS = [
  {
    slug: "greenville",
    name: "Greenville, SC",
    blurb:
      "Our home base and primary service area for driveway replacements, patios, slabs, and retaining walls.",
  },
  {
    slug: "greer",
    name: "Greer, SC",
    blurb:
      "Serving Greer neighborhoods with driveway tear-outs, new pours, and shop slabs.",
  },
  {
    slug: "simpsonville",
    name: "Simpsonville, SC",
    blurb:
      "Patios, pool decks, and driveway projects across Simpsonville and surrounding communities.",
  },
  {
    slug: "mauldin",
    name: "Mauldin, SC",
    blurb:
      "Residential concrete for driveways, walkways, and backyard patios in Mauldin.",
  },
  {
    slug: "taylors",
    name: "Taylors, SC",
    blurb:
      "Driveways, steps, and small retaining walls for homes across Taylors and nearby areas.",
  },
  {
    slug: "anderson",
    name: "Anderson, SC",
    blurb:
      "Concrete slabs, driveways, and shop floors for homeowners and small businesses in Anderson.",
  },
  {
    slug: "seneca",
    name: "Seneca, SC",
    blurb:
      "Driveways, patios, and lake-area projects around Seneca and the surrounding Upstate region.",
  },
  {
    slug: "easley",
    name: "Easley, SC",
    blurb:
      "Driveways, sidewalks, and general flatwork throughout Easley and nearby neighborhoods.",
  },
  {
    slug: "piedmont",
    name: "Piedmont, SC",
    blurb:
      "Driveways, sidewalks, and general flatwork throughout Piedmont and nearby neighborhoods.",
  },
  {
    slug: "Pelzer",
    name: "Pelzer, SC",
    blurb:
      "Driveways, sidewalks, and general flatwork throughout Pelzer and nearby neighborhoods.",
  },
  {
    slug: "inman",
    name: "Inman, SC",
    blurb:
      "Driveways, sidewalks, and general flatwork throughout Inman and nearby neighborhoods.",
  },{
    slug: "boilingsprings",
    name: "Boiling Springs, SC",
    blurb:
      "Driveways, sidewalks, and general flatwork throughout Boiling Springs and nearby neighborhoods.",
  },
  {
    slug: "central",
    name: "Central, SC",
    blurb:
      "Driveways, sidewalks, and general flatwork throughout Central and nearby neighborhoods.",
  },{
    slug: "clemson",
    name: "Clemson, SC",
    blurb:
      "Driveways, sidewalks, and general flatwork throughout Easley and nearby neighborhoods.",
  },{
    slug: "fountaininn",
    name: "Fountain Inn, SC",
    blurb:
      "Driveways, sidewalks, and general flatwork throughout Fountain Inn and nearby neighborhoods.",
  },{
    slug: "williamston",
    name: "Williamston, SC",
    blurb:
      "Driveways, sidewalks, and general flatwork throughout Williamston and nearby neighborhoods.",
  },
];

export default function ServiceAreaPage({ onFastQuoteOpen }) {
  const { citySlug } = useParams();
  const city = CITY_SERVICE_AREAS.find((c) => c.slug === citySlug);

  return (
    <main className="bg-white">
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
            area and click a city for details.
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
                {CITY_SERVICE_AREAS.map((c) => (
                  <Link
                    key={c.slug}
                    to={`/service-area/${c.slug}`}
                    className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 font-semibold text-slate-700 hover:border-amber-300 hover:bg-amber-50"
                  >
                    {c.name}
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

      {/* CITY DETAILS (ONLY WHEN SELECTED) */}
      {city && (
        <section className="bg-slate-50 border-b border-slate-200">
          <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-500">
              {city.name}
            </p>

            <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
              Concrete Services in {city.name}
            </h2>

            <p className="mt-4 max-w-3xl text-sm text-slate-600 md:text-base">
              {city.blurb}
            </p>

            <ul className="mt-6 list-disc pl-6 text-sm text-slate-700 space-y-1">
              <li>Driveway replacement and extensions</li>
              <li>Concrete patios and outdoor living areas</li>
              <li>Monolithic slabs and shop foundations</li>
              <li>Sidewalks, steps, and retaining walls</li>
            </ul>

            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800"
              >
                Request a Quote in {city.name}
              </Link>

              <a
                href="tel:18644476200"
                className="text-sm font-semibold text-amber-600 underline-offset-4 hover:underline"
              >
                Call (864) 447-6200
              </a>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}

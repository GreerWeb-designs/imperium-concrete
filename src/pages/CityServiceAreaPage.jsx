import React from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import Seo from "../components/Seo";
import { getCity } from "../data/cities";
import { getService } from "../data/services";
import { SITE_URL, SITE_NAME, PHONE_TEL, PHONE_DISPLAY, PHONE_E164 } from "../config/site";

function buildJsonLd(city) {
  const pageUrl = `${SITE_URL}/service-area/${city.slug}`;
  return [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "Service Area", item: `${SITE_URL}/service-area` },
        { "@type": "ListItem", position: 3, name: `${city.name}, SC`, item: pageUrl },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: `Concrete Contractor in ${city.name}, SC`,
      serviceType: "Concrete contractor",
      url: pageUrl,
      areaServed: { "@type": "City", name: `${city.name}, SC` },
      provider: {
        "@type": "LocalBusiness",
        name: SITE_NAME,
        telephone: PHONE_E164,
        url: SITE_URL,
        address: { "@type": "PostalAddress", addressLocality: "Greenville", addressRegion: "SC", addressCountry: "US" },
      },
    },
  ];
}

export default function CityServiceAreaPage() {
  const { citySlug } = useParams();
  const city = getCity(citySlug);

  // Unknown city slug → send back to the service-area hub.
  if (!city) return <Navigate to="/service-area" replace />;

  const cityServices = city.services
    .map((slug) => getService(slug))
    .filter(Boolean);

  return (
    <main className="bg-white">
      <Seo
        title={city.title}
        description={city.description}
        path={`/service-area/${city.slug}`}
        jsonLd={buildJsonLd(city)}
      />

      {/* HERO */}
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-500">
            {city.name}, South Carolina
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Concrete Contractor in {city.name}, SC — Driveways, Patios &amp; Slabs
          </h1>
          <p className="mt-4 max-w-3xl text-sm text-slate-600 md:text-base">
            {city.intro}
          </p>
          <p className="mt-3 max-w-3xl text-sm text-slate-600 md:text-base">
            {city.name} is in {city.county}. {city.context}
          </p>
        </div>
      </section>

      {/* PROJECT IMAGE BLOCK (real, owner-supplied project) */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
          <div className="grid gap-8 md:grid-cols-2 md:items-start">
            <div className="overflow-hidden rounded-3xl border border-slate-300 bg-slate-100 shadow-sm">
              <img
                src={city.image}
                alt={city.imageAlt}
                width="640"
                height="480"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>

            <div>
              <h2 className="text-xl font-bold tracking-tight text-slate-900 md:text-2xl">
                {city.projectTitle}
              </h2>
              <p className="mt-3 text-sm text-slate-600 md:text-base">{city.project}</p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES — now cross-linked to the matching service pages */}
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
          <h2 className="mb-6 text-2xl font-bold tracking-tight text-slate-900">
            Concrete Services We Provide in {city.name}, SC
          </h2>

          <div className="grid gap-6 md:grid-cols-2 text-sm md:text-base text-slate-600">
            {cityServices.map((s) => (
              <div
                key={s.slug}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <h3 className="mb-2 text-lg font-semibold text-slate-900">
                  <Link to={`/services/${s.slug}`} className="hover:text-amber-600">
                    {s.label}
                  </Link>
                </h3>
                <p>{s.short}</p>
                <Link
                  to={`/services/${s.slug}`}
                  className="mt-3 inline-flex text-sm font-semibold text-amber-600 underline-offset-4 hover:underline"
                >
                  Learn about {s.label.toLowerCase()} →
                </Link>
              </div>
            ))}
          </div>

          <p className="mt-6 text-sm text-slate-600">
            Serving a nearby town?{" "}
            <Link
              to="/service-area"
              className="font-semibold text-amber-600 underline-offset-4 hover:underline"
            >
              See all of our Upstate SC service areas
            </Link>
            .
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-900 px-4 py-12 text-slate-50 md:py-16">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
            Need Concrete Work in {city.name}, SC?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-slate-200 md:text-base">
            Whether you're replacing a driveway, adding a patio, building a shop, or
            pouring a slab foundation, Imperium Concrete is ready to help in {city.name}.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <a
              href={PHONE_TEL}
              className="rounded-full bg-amber-300 px-6 py-3 text-sm font-semibold text-slate-900 shadow hover:bg-amber-200"
            >
              Call {PHONE_DISPLAY}
            </a>

            <Link
              to="/contact"
              className="text-sm font-semibold text-amber-300 underline-offset-4 hover:underline"
            >
              Request a Quote Online
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

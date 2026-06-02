// Service catalog — used by the navbar, footer, city pages, and service pages
// so service names, slugs, descriptions, and per-page SEO stay consistent in
// one place.
import { SITE_URL, SITE_NAME, PHONE_E164 } from "../config/site";

export const services = [
  {
    slug: "driveways",
    label: "Concrete Driveways",
    short:
      "New driveways, tear-out and replacement, extensions, and long or sloped drives — graded, reinforced, and finished to last.",
    seoTitle: "Concrete Driveways in Greenville & Upstate SC | Imperium Concrete",
    seoDescription:
      "New concrete driveways, tear-out & replacement, and extensions across Greenville and the Upstate of South Carolina. Request a driveway quote.",
  },
  {
    slug: "monolithic-slabs",
    label: "Monolithic Slabs & Foundations",
    short:
      "Monolithic slabs, shop and garage slabs, footings, and vapor-barrier reinforced foundations for homeowners and builders.",
    seoTitle: "Monolithic Slabs & Foundations in Upstate SC | Imperium Concrete",
    seoDescription:
      "Monolithic slabs, shop and garage slabs, footings, and engineered foundations poured across Greenville and the Upstate of South Carolina.",
  },
  {
    slug: "patios",
    label: "Patios & Outdoor Spaces",
    short:
      "Backyard patios, stamped concrete, pool decks, and outdoor living areas with proper drainage and grading.",
    seoTitle: "Concrete Patios & Outdoor Living in Upstate SC | Imperium Concrete",
    seoDescription:
      "Concrete patios, stamped concrete, pool decks, and outdoor living spaces across Greenville and the Upstate of South Carolina.",
  },
  {
    slug: "sidewalks",
    label: "Sidewalks & Steps",
    short:
      "Sidewalks, walkways, steps, and ADA-friendly flatwork for homes and businesses across the Upstate.",
    seoTitle: "Concrete Sidewalks & Walkways in Upstate SC | Imperium Concrete",
    seoDescription:
      "Concrete sidewalks, walkways, and steps for homes and businesses across Greenville and the Upstate of South Carolina.",
  },
  {
    slug: "retaining-walls",
    label: "Retaining Walls",
    short:
      "Concrete retaining walls that manage grade and drainage on sloped lots and protect your property.",
    seoTitle: "Retaining Walls & Grade Solutions in Upstate SC | Imperium Concrete",
    seoDescription:
      "Concrete retaining walls, steps, and grade and drainage solutions for sloped lots across Greenville and the Upstate of South Carolina.",
  },
];

export function getService(slug) {
  return services.find((s) => s.slug === slug);
}

// BreadcrumbList + Service JSON-LD for a service page.
export function buildServiceJsonLd(service) {
  const url = `${SITE_URL}/services/${service.slug}`;
  return [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: service.label, item: url },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: service.label,
      serviceType: service.label,
      url,
      areaServed: { "@type": "AdministrativeArea", name: "Upstate South Carolina" },
      provider: {
        "@type": "LocalBusiness",
        name: SITE_NAME,
        telephone: PHONE_E164,
        url: SITE_URL,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Greenville",
          addressRegion: "SC",
          addressCountry: "US",
        },
      },
    },
  ];
}

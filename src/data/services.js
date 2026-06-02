// Service catalog — used by the navbar, footer, and city pages so service
// names, slugs, and short descriptions stay consistent in one place.
export const services = [
  {
    slug: "driveways",
    label: "Concrete Driveways",
    short:
      "New driveways, tear-out and replacement, extensions, and long or sloped drives — graded, reinforced, and finished to last.",
  },
  {
    slug: "monolithic-slabs",
    label: "Monolithic Slabs & Foundations",
    short:
      "Monolithic slabs, shop and garage slabs, footings, and vapor-barrier reinforced foundations for homeowners and builders.",
  },
  {
    slug: "patios",
    label: "Patios & Outdoor Spaces",
    short:
      "Backyard patios, stamped concrete, pool decks, and outdoor living areas with proper drainage and grading.",
  },
  {
    slug: "sidewalks",
    label: "Sidewalks & Steps",
    short:
      "Sidewalks, walkways, steps, and ADA-friendly flatwork for homes and businesses across the Upstate.",
  },
  {
    slug: "retaining-walls",
    label: "Retaining Walls",
    short:
      "Concrete retaining walls that manage grade and drainage on sloped lots and protect your property.",
  },
];

export function getService(slug) {
  return services.find((s) => s.slug === slug);
}

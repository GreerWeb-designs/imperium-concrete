// Single source of truth for every city service-area page.
//
// Each entry drives one /service-area/<slug> page (rendered by
// CityServiceAreaPage) AND the "Cities We Serve" list on the hub and footer.
//
// Content rules followed here:
//  - `project` text + `image` are the owner's real, previously-published
//    project descriptions, preserved verbatim from the original per-city files.
//  - `county` and `context` use verifiable public geography only (county,
//    rivers, well-known landmarks/areas). No invented projects, stats, reviews,
//    neighborhoods, or claims of a local office (the business is Greenville-based
//    and travels to these areas).
//
// Images are imported statically so Vite fingerprints and bundles them.
import imperiumGreenville from "../assets/Imperiumpic2.jpg";
import imperiumGreer from "../assets/ImperiumGreer.jpg";
import imperiumSimpsonville from "../assets/ImperiumSimpsonville.jpg";
import imperiumMauldin from "../assets/ImperiumMauldin.jpg";
import imperiumTaylors from "../assets/ImperiumTaylors.jpg";
import imperiumAnderson from "../assets/ImperiumAnderson.jpg";
import imperiumSeneca from "../assets/ImperiumSeneca.jpg";
import imperiumEasley from "../assets/ImperiumEasley.jpg";
import imperiumPiedmont from "../assets/imperiumpiedmont.jpg";
import imperiumPelzer from "../assets/ImperiumPelzer.jpg";
import imperiumInman from "../assets/ImperiumInman.jpg";
import imperiumBoilingSprings from "../assets/ImperiumBoilingSprings.jpg";
import imperiumCentral from "../assets/ImperiumCentral.jpg";
import imperiumClemson from "../assets/ImperiumClemson.jpg";
import imperiumFountainInn from "../assets/ImperiumFountainInn.jpg";
import imperiumWilliamston from "../assets/ImperiumWilliamston.jpg";

export const cities = [
  {
    slug: "greenville",
    name: "Greenville",
    county: "Greenville County",
    // Greenville is the company's home base.
    base: true,
    image: imperiumGreenville,
    imageAlt: "Concrete driveway and walkway poured by Imperium Concrete in Greenville, SC",
    projectTitle: "Greenville Driveway & Walkway",
    project:
      "This driveway and walkway project was poured in Greenville, SC and included grading, reinforcement, a patio, and a clean broom finish.",
    title: "Concrete Contractor in Greenville, SC | Driveways, Patios & Slabs",
    description:
      "Greenville-based concrete contractor pouring driveways, patios, monolithic slabs, sidewalks, and retaining walls across Greenville County, SC. Request a fast quote.",
    intro:
      "Imperium Concrete is based right here in Greenville, South Carolina, which lets us respond quickly, walk the site in person, and pour high-quality residential and commercial concrete throughout Greenville County and the wider Upstate.",
    context:
      "From established neighborhoods near downtown Greenville to newer construction on the edges of the county, we handle driveway replacements, backyard patios, and slab foundations of every size. As our home market, Greenville is where we do the most work — and where we can usually be on-site fastest.",
    services: ["driveways", "patios", "monolithic-slabs", "sidewalks", "retaining-walls"],
  },
  {
    slug: "greer",
    name: "Greer",
    county: "Greenville and Spartanburg counties",
    image: imperiumGreer,
    imageAlt: "Concrete driveway extension poured by Imperium Concrete in Greer, SC",
    projectTitle: "Greer Driveway Extension",
    project:
      "This concrete driveway extension was poured in the Greer, SC area and was 4 inches thick. Our team graded, compacted, formed, and poured this project in 1 day.",
    title: "Concrete Contractor in Greer, SC | Driveways, Patios & Slabs",
    description:
      "Concrete driveways, patios, and slabs in Greer, SC. Imperium Concrete serves Greer across Greenville and Spartanburg counties — new pours, replacements, and shop slabs.",
    intro:
      "Imperium Concrete serves Greer, SC — a fast-growing community that straddles the Greenville and Spartanburg county line. We pour driveways, patios, and slabs for Greer homeowners and businesses, traveling out from our Greenville base.",
    context:
      "Greer's growth around the BMW Manufacturing campus and the GSP airport corridor has brought a steady mix of new homes and light-commercial work. We handle everything from residential driveway tear-outs and extensions to monolithic shop and equipment slabs.",
    services: ["driveways", "monolithic-slabs", "patios", "sidewalks"],
  },
  {
    slug: "simpsonville",
    name: "Simpsonville",
    county: "Greenville County",
    image: imperiumSimpsonville,
    imageAlt: "Large concrete driveway poured by Imperium Concrete in Simpsonville, SC",
    projectTitle: "Simpsonville Driveway",
    project:
      "This 8,000+ square foot driveway project was poured in Simpsonville, SC and was 6 inches thick with fibermesh reinforcement. Our team graded, formed, and poured this project over 2 days.",
    title: "Concrete Contractor in Simpsonville, SC | Driveways & Patios",
    description:
      "Concrete driveways, patios, and pool decks in Simpsonville, SC. Imperium Concrete pours residential and commercial flatwork across the Golden Strip in Greenville County.",
    intro:
      "Imperium Concrete pours driveways, patios, and slabs throughout Simpsonville, SC, one of the Golden Strip communities in southern Greenville County. We travel out from Greenville to handle projects large and small.",
    context:
      "Simpsonville's many established subdivisions mean a lot of aging driveways due for replacement, along with backyard patios and pool decks. Larger residential pours like the one above are well within our wheelhouse.",
    services: ["driveways", "patios", "monolithic-slabs", "sidewalks"],
  },
  {
    slug: "mauldin",
    name: "Mauldin",
    county: "Greenville County",
    image: imperiumMauldin,
    imageAlt: "Concrete driveway replacement poured by Imperium Concrete in Mauldin, SC",
    projectTitle: "Mauldin Driveway Replacement",
    project:
      "This concrete driveway was poured in the Mauldin, SC area and was 4 inches thick. Our team demoed the existing driveway, graded, compacted, formed, and poured this project in 2 days.",
    title: "Concrete Contractor in Mauldin, SC | Driveways & Patios",
    description:
      "Concrete driveways, walkways, and patios in Mauldin, SC. Imperium Concrete pours residential flatwork across the Golden Strip in Greenville County. Request a quote.",
    intro:
      "Imperium Concrete serves Mauldin, SC — a Golden Strip community in Greenville County just south of the city. We handle driveways, walkways, and backyard patios for Mauldin homes.",
    context:
      "Many Mauldin driveways date to the area's earlier growth and are now cracking or settling. Demo-and-replace work like the project above, plus new patios and walkways, makes up much of what we pour here.",
    services: ["driveways", "patios", "sidewalks", "retaining-walls"],
  },
  {
    slug: "taylors",
    name: "Taylors",
    county: "Greenville County",
    image: imperiumTaylors,
    imageAlt: "Concrete driveway with stamped entrance poured by Imperium Concrete in Taylors, SC",
    projectTitle: "Taylors Driveway with Stamped Entrance",
    project:
      "This 2,000+ square foot driveway project with a stamped entrance was poured in Taylors, SC and was 4 inches thick. Our team demoed the existing drive, graded, formed, and poured this project over 2 days.",
    title: "Concrete Contractor in Taylors, SC | Driveways & Flatwork",
    description:
      "Concrete driveways, steps, and flatwork in Taylors, SC. Imperium Concrete pours and replaces residential concrete across northeastern Greenville County.",
    intro:
      "Imperium Concrete serves Taylors, SC, a community in northeastern Greenville County. We pour driveways, steps, and flatwork — including decorative touches like the stamped entrance shown above.",
    context:
      "Taylors blends established homes with larger wooded lots, so we see everything from straightforward driveway replacements to longer drives and stamped accents that add curb appeal.",
    services: ["driveways", "sidewalks", "patios", "retaining-walls"],
  },
  {
    slug: "anderson",
    name: "Anderson",
    county: "Anderson County",
    image: imperiumAnderson,
    imageAlt: "Concrete driveway poured by Imperium Concrete in Anderson, SC",
    projectTitle: "Anderson Concrete Driveway",
    project:
      "This concrete driveway was poured in the Anderson, SC area and was 4 inches thick. Our team graded, compacted, formed, and poured this project in 1 day.",
    title: "Concrete Contractor in Anderson, SC | Driveways & Slabs",
    description:
      "Concrete driveways, slabs, and shop floors in Anderson, SC. Imperium Concrete serves homeowners and small businesses across Anderson County near Lake Hartwell.",
    intro:
      "Imperium Concrete serves Anderson, SC — the seat of Anderson County, near Lake Hartwell in the western Upstate. We pour driveways, slabs, and shop floors for homeowners and small businesses here.",
    context:
      'Known as "The Electric City," Anderson has a strong mix of residential and light-commercial demand. Larger lots in and around town often call for longer driveways and detached garage or shop slabs.',
    services: ["driveways", "monolithic-slabs", "patios", "sidewalks"],
  },
  {
    slug: "seneca",
    name: "Seneca",
    county: "Oconee County",
    image: imperiumSeneca,
    imageAlt: "Large concrete driveway with steps and cart path poured by Imperium Concrete in Seneca, SC",
    projectTitle: "Seneca Driveway, Steps & Cart Path",
    project:
      "This large driveway with concrete steps and a cart path was poured in Seneca, SC and was 4 inches thick. Our team graded, formed, and poured this project over 2 days.",
    title: "Concrete Contractor in Seneca, SC | Driveways & Patios",
    description:
      "Concrete driveways, patios, and steps in Seneca, SC. Imperium Concrete serves the Lake Keowee and Lake Hartwell area across Oconee County in the western Upstate.",
    intro:
      "Imperium Concrete serves Seneca, SC, in Oconee County near Lake Keowee and Lake Hartwell. We pour driveways, patios, steps, and lake-area flatwork throughout the western Upstate.",
    context:
      "Seneca's lake communities often mean sloped lots and longer drives, where grading and drainage matter most. Projects like the driveway, steps, and cart path above are typical of the terrain here.",
    services: ["driveways", "patios", "sidewalks", "retaining-walls"],
  },
  {
    slug: "easley",
    name: "Easley",
    county: "Pickens County",
    image: imperiumEasley,
    imageAlt: "Monolithic concrete slab poured by Imperium Concrete in Easley, SC",
    projectTitle: "Easley Monolithic Slab",
    project:
      'This 1,400+ square foot monolithic slab was poured in Easley, SC and was 4 inches thick, with 16"x12" footings. Our team graded, formed, and poured this project over 2 days.',
    title: "Concrete Contractor in Easley, SC | Slabs & Driveways",
    description:
      "Monolithic slabs, driveways, and flatwork in Easley, SC. Imperium Concrete serves Pickens County along the US-123 corridor between Greenville and the lakes.",
    intro:
      "Imperium Concrete serves Easley, SC, in Pickens County along the US-123 corridor west of Greenville. We pour monolithic slabs, driveways, sidewalks, and general flatwork here.",
    context:
      "Easley's steady growth brings a lot of new-build slab work — garages, additions, and shops — alongside everyday driveway and sidewalk projects like the monolithic slab shown above.",
    services: ["monolithic-slabs", "driveways", "sidewalks", "patios"],
  },
  {
    slug: "piedmont",
    name: "Piedmont",
    county: "the Greenville–Anderson county line",
    image: imperiumPiedmont,
    imageAlt: "New-build concrete driveway poured by Imperium Concrete in Piedmont, SC",
    projectTitle: "Piedmont New-Build Driveway",
    project:
      "This concrete driveway for a new build was poured in the Piedmont, SC area and was 4 inches thick. Our team graded, compacted, formed, and poured this project in 2 days.",
    title: "Concrete Contractor in Piedmont, SC | Driveways & Flatwork",
    description:
      "Concrete driveways, slabs, and flatwork in Piedmont, SC. Imperium Concrete serves the Saluda River communities along the Greenville–Anderson county line.",
    intro:
      "Imperium Concrete serves Piedmont, SC, a Saluda River community that sits along the Greenville–Anderson county line. We pour driveways, slabs, and flatwork for homes throughout the area.",
    context:
      "Piedmont has seen steady new residential construction, so new-build driveways and slabs — like the one above — are common here, along with replacements for older mill-village homes.",
    services: ["driveways", "monolithic-slabs", "sidewalks", "patios"],
  },
  {
    slug: "pelzer",
    name: "Pelzer",
    county: "Anderson County",
    image: imperiumPelzer,
    imageAlt: "Monolithic slab and driveway poured by Imperium Concrete in Pelzer, SC",
    projectTitle: "Pelzer Slab & Driveway",
    project:
      "This monolithic slab and driveway was poured in the Pelzer, SC area and was 4 inches thick with footings. Our team graded, compacted, formed, set rebar/vapor barrier, and poured this project over 2 days.",
    title: "Concrete Contractor in Pelzer, SC | Slabs & Driveways",
    description:
      "Concrete slabs, driveways, and flatwork in Pelzer, SC. Imperium Concrete serves the Saluda River communities of Anderson County in the Upstate.",
    intro:
      "Imperium Concrete serves Pelzer, SC, a small Saluda River community in Anderson County. We pour monolithic slabs, driveways, and flatwork for homes and properties throughout the area.",
    context:
      "Rural and large-lot properties around Pelzer often call for longer driveways and shop or garage slabs with proper footings and vapor barrier, like the project shown above.",
    services: ["monolithic-slabs", "driveways", "sidewalks", "retaining-walls"],
  },
  {
    slug: "inman",
    name: "Inman",
    county: "Spartanburg County",
    image: imperiumInman,
    imageAlt: "Concrete patio with fire-pit area poured by Imperium Concrete in Inman, SC",
    projectTitle: "Inman Patio with Fire-Pit Area",
    project:
      "This patio with fire-pit area was poured in Inman, SC and was 4 inches thick. Our team graded, compacted, formed, and poured this project in 1 day.",
    title: "Concrete Contractor in Inman, SC | Patios & Driveways",
    description:
      "Concrete patios, driveways, and flatwork in Inman, SC. Imperium Concrete serves northern Spartanburg County and the wider Upstate. Request a fast quote.",
    intro:
      "Imperium Concrete serves Inman, SC, in northern Spartanburg County. We pour patios, driveways, and outdoor living areas for homeowners across the area.",
    context:
      "Backyard living projects — patios, fire-pit areas, and outdoor spaces like the one above — are popular with Inman homeowners, alongside everyday driveway and walkway work.",
    services: ["patios", "driveways", "sidewalks", "retaining-walls"],
  },
  {
    slug: "boilingsprings",
    name: "Boiling Springs",
    county: "Spartanburg County",
    image: imperiumBoilingSprings,
    imageAlt: "Stamped concrete patio with fire-pit area poured by Imperium Concrete in Boiling Springs, SC",
    projectTitle: "Boiling Springs Stamped Patio",
    project:
      "This patio with fire-pit area was poured in Boiling Springs, SC and was 4 inches thick. Our team graded, compacted, formed, poured, and stamped this project in 1 day.",
    title: "Concrete Contractor in Boiling Springs, SC | Patios & Driveways",
    description:
      "Stamped patios, driveways, and flatwork in Boiling Springs, SC. Imperium Concrete serves Spartanburg County with decorative and standard concrete work.",
    intro:
      "Imperium Concrete serves Boiling Springs, SC, a growing community in Spartanburg County. We pour stamped patios, driveways, and flatwork for homes throughout the area.",
    context:
      "Decorative work such as the stamped patio shown above is popular with Boiling Springs homeowners, along with new driveways and outdoor living spaces as the area continues to grow.",
    services: ["patios", "driveways", "sidewalks", "monolithic-slabs"],
  },
  {
    slug: "central",
    name: "Central",
    county: "Pickens County",
    image: imperiumCentral,
    imageAlt: "Concrete pool deck poured by Imperium Concrete in Central, SC",
    projectTitle: "Central Concrete Pool Deck",
    project:
      "This concrete pool deck was poured in Central, SC and was 4 inches thick. Our team graded, compacted, formed, and poured this project in 2 days.",
    title: "Concrete Contractor in Central, SC | Pool Decks & Driveways",
    description:
      "Concrete pool decks, patios, and driveways in Central, SC. Imperium Concrete serves Pickens County between Clemson and Easley along the US-123 corridor.",
    intro:
      "Imperium Concrete serves Central, SC, in Pickens County between Clemson and Easley. We pour pool decks, patios, driveways, and flatwork for homes throughout the area.",
    context:
      "Outdoor living projects like the pool deck above are popular around Central, along with driveways and slabs for the area's mix of established and newer homes.",
    services: ["patios", "driveways", "sidewalks", "monolithic-slabs"],
  },
  {
    slug: "clemson",
    name: "Clemson",
    county: "Pickens County",
    image: imperiumClemson,
    imageAlt: "Stamped concrete sidewalk poured by Imperium Concrete in Clemson, SC",
    projectTitle: "Clemson Stamped Sidewalk",
    project:
      "This stamped concrete sidewalk was poured in Clemson, SC and was 4 inches thick. Our team graded, compacted, formed, poured, and stamped this project in 1 day.",
    title: "Concrete Contractor in Clemson, SC | Sidewalks & Driveways",
    description:
      "Concrete sidewalks, driveways, and patios in Clemson, SC. Imperium Concrete serves Pickens County and the Clemson University area in the western Upstate.",
    intro:
      "Imperium Concrete serves Clemson, SC, in Pickens County and home to Clemson University. We pour sidewalks, driveways, patios, and decorative flatwork throughout the area.",
    context:
      "The Clemson area's mix of homes, rentals, and small commercial properties brings demand for both standard and decorative work — like the stamped sidewalk shown above — plus driveways and slabs.",
    services: ["sidewalks", "driveways", "patios", "monolithic-slabs"],
  },
  {
    slug: "fountaininn",
    name: "Fountain Inn",
    county: "Greenville and Laurens counties",
    image: imperiumFountainInn,
    imageAlt: "Concrete driveway and slab poured by Imperium Concrete in Fountain Inn, SC",
    projectTitle: "Fountain Inn Driveway & Slab",
    project:
      "This 2,400+ square foot driveway and slab was poured in Fountain Inn, SC and was 4 inches thick. Our team graded, compacted, formed, and poured this project over 2 days.",
    title: "Concrete Contractor in Fountain Inn, SC | Driveways & Slabs",
    description:
      "Concrete driveways, slabs, and flatwork in Fountain Inn, SC. Imperium Concrete serves the Golden Strip across Greenville and Laurens counties.",
    intro:
      "Imperium Concrete serves Fountain Inn, SC, a Golden Strip community that spans the Greenville and Laurens county line. We pour driveways, slabs, and flatwork throughout the area.",
    context:
      "Fountain Inn's rapid residential growth means plenty of new-build driveways and slabs, like the 2,400+ square foot project above, alongside replacements and additions.",
    services: ["driveways", "monolithic-slabs", "sidewalks", "patios"],
  },
  {
    slug: "williamston",
    name: "Williamston",
    county: "Anderson County",
    image: imperiumWilliamston,
    imageAlt: "Patio foundation with planter boxes poured by Imperium Concrete in Williamston, SC",
    projectTitle: "Williamston Patio Foundation",
    project:
      "This home patio foundation with planter boxes was poured in the Williamston, SC area and was 4 inches thick with footings. Our team graded, compacted, formed, set rebar/vapor barrier, and poured this project over 2 days.",
    title: "Concrete Contractor in Williamston, SC | Patios & Foundations",
    description:
      "Concrete patios, foundations, and driveways in Williamston, SC. Imperium Concrete serves Anderson County and the surrounding Upstate. Request a fast quote.",
    intro:
      "Imperium Concrete serves Williamston, SC, in Anderson County. We pour patios, foundations, driveways, and flatwork for homes throughout the area.",
    context:
      "Williamston's larger residential lots are well suited to patio and foundation work like the planter-box patio above, along with driveways and slabs with proper footings.",
    services: ["patios", "monolithic-slabs", "driveways", "sidewalks"],
  },
];

export function getCity(slug) {
  if (!slug) return undefined;
  const key = String(slug).toLowerCase();
  return cities.find((c) => c.slug === key);
}

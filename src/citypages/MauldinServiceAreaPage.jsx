import React from "react";
import { Link } from "react-router-dom";
import imperiummauldin from "../assets/ImperiumMauldin.jpg";

export default function MauldinServiceAreaPage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-500">
            Mauldin, South Carolina
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Mauldin Concrete Contractor for Driveways, Patios & Slabs
          </h1>
          <p className="mt-4 max-w-3xl text-sm text-slate-600 md:text-base">
            Imperium Concrete is proud to serve Mauldin, SC as a full-service
            <span className="font-semibold"> Mauldin concrete contractor</span>.
            Our office can help respond quickly,
            provide detailed on-site assessments, and deliver high-quality residential
            and commercial concrete work throughout the Upstate.
          </p>
        </div>
      </section>

      {/* Greer IMAGE BLOCK */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
          <div className="grid gap-8 md:grid-cols-2 md:items-start">
            
            {/* Image Placeholder */}
            <div className="rounded-3xl overflow-hidden border border-slate-300 bg-slate-100 shadow-sm h-90 md:h-320px flex items-center justify-center">
              {/* DROP A REAL IMAGE HERE */}
              <span className="text-slate-400 text-sm">
                <img
                  src={imperiummauldin}
                  alt="Broom-finished concrete driveway"></img>
              </span>
            </div>

            {/* Caption / Description */}
            <div>
              <h2 className="text-xl font-bold tracking-tight text-slate-900 md:text-2xl">
                Mauldin Concrete Driveways
              </h2>
              <p className="mt-3 text-sm text-slate-600 md:text-base">
                This concrete driveway was poured in the Mauldin, SC area and was 4 inches thick.  Our team demoed the existing driveay, graded, compacted, formed and poured this project in 2 days. 
              </p>
            </div>
          </div>
        </div>
      </section>

      

      {/* SERVICES SECTION */}
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">

          <h2 className="text-2xl font-bold tracking-tight text-slate-900 mb-6">
            Concrete Services We Provide in Mauldin, SC
          </h2>

          <div className="grid gap-6 md:grid-cols-2 text-sm md:text-base text-slate-600">

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Concrete Driveways</h3>
              <p>
                As a Mauldin concrete driveway specialist, we pour new driveways, replace
                cracked or aging driveways, add extensions, and build long rural or sloped
                driveways. All pours meet or exceed PSI and reinforcement
                standards, as well as ACI Guidlines on expansion cuts.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Patios & Outdoor Spaces</h3>
              <p>
                We install backyard patios, stamped concrete, lifestyle spaces, borders,
                and outdoor living areas around Mauldin homes. Drainage and grading
                are handled properly to protect your foundation.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                Slabs, Foundations & Monolithic Pours
              </h3>
              <p>
                We pour monolithic slabs, shop slabs, garage slabs, foundations, footings,
                and vapor-barrier reinforced concrete for builders and homeowners in Mauldin.
                We can examine your engineered plans and make your project a reality.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                Commercial Concrete
              </h3>
              <p>
                We serve Mauldin businesses, churches, apartment communities, and contractors
                with sidewalks, ADA parking areas, commercial pads, retaining walls, equipment
                slabs, and more.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-900 px-4 py-12 text-slate-50 md:py-16">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
            Concrete Services in Mauldin, SC?
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-sm text-slate-200 md:text-base">
            Whether you're replacing a driveway, adding a patio, building a shop,
            or pouring a slab foundation, our Greer serving team is ready to help.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <a
              href="tel:18644476200"
              className="rounded-full bg-amber-300 px-6 py-3 text-sm font-semibold text-slate-900 shadow hover:bg-amber-200"
            >
              Call (864) 447-6200
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
import React from "react";
import { Link } from "react-router-dom";

// Optional: swap these imports to match whatever images you actually have.
// If you don’t have them yet, you can comment them out and keep placeholders.
import imperiumpic1 from "../assets/Imperium-Driveway-pic1.jpg";
// import imperiumpic2 from "../assets/Imperiumpic2.jpg";
// import imperiumLogo from "../assets/imperium-logo.png";

export default function AboutPage() {
  return (
    <main className="bg-white">
      {/* TOP HERO / INTRO */}
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
            About Imperium Concrete
          </p>

          <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            A Concrete Contractor You Can Trust in Upstate South Carolina
          </h1>

          <p className="mt-4 max-w-3xl text-sm text-slate-600 md:text-base">
            Imperium Concrete is a locally owned concrete company serving the
            Upstate of South Carolina. We pour{" "}
            <span className="font-semibold">
              driveways, patios, monolithic slabs, retaining walls, and sidewalks
            </span>{" "}
            for homeowners, homebuilders, pool companies, and general contractors
            across Greenville, Greer, Simpsonville, Anderson, Seneca, and nearby
            areas.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <a
              href="tel:18644476200"
              className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow hover:bg-slate-800"
            >
              Call (864) 447-6200
            </a>
            <Link
              to="/contact"
              className="text-sm font-semibold text-amber-600 underline-offset-4 hover:underline"
            >
              Request a Quote Online
            </Link>
          </div>
        </div>
      </section>

      {/* STORY + VALUES */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
          <div className="grid gap-10 md:grid-cols-[1.4fr,1fr] md:items-start">
            {/* Story */}
            <div>
              <h2 className="text-xl font-semibold tracking-tight text-slate-900 md:text-2xl">
                Built on Doing the Job Right the First Time
              </h2>

              <p className="mt-4 text-sm text-slate-600 md:text-base">
                If you&apos;ve ever had a bad experience with a contractor,
                you&apos;re not alone. Missed calls, no-shows, surprise
                change-orders, and sloppy work have become far too common.
              </p>

              <p className="mt-3 text-sm text-slate-600 md:text-base">
                Imperium Concrete exists to be the opposite of that. We show up
                when we say we will, we walk your project in detail, and we pour
                concrete we&apos;re proud to put our name on. From 100+ yard
                driveways and monolithic slabs to patios, steps, and sidewalks,
                every project gets the same level of attention.
              </p>

              <p className="mt-3 text-sm text-slate-600 md:text-base">
                Our crew is comfortable working with{" "}
                <span className="font-semibold">
                  homeowners, builders, and commercial clients
                </span>
                . We coordinate with other trades, engineers, and inspectors to
                keep your project moving smoothly and aligned with the required
                specifications.
              </p>

              <div className="mt-6 grid gap-4 text-sm md:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <h3 className="text-sm font-semibold text-slate-900">
                    Local & Hands-On
                  </h3>
                  <p className="mt-2 text-slate-600">
                    You&apos;re dealing with a local contractor—not a call
                    center. We look at grade, drainage, access, and real-world
                    details that affect your final result.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <h3 className="text-sm font-semibold text-slate-900">
                    Clear Expectations
                  </h3>
                  <p className="mt-2 text-slate-600">
                    We explain the plan, the pricing, and what to expect at each
                    step so there are no surprises.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <h3 className="text-sm font-semibold text-slate-900">
                    Engineered Specs
                  </h3>
                  <p className="mt-2 text-slate-600">
                    Proper thickness, PSI, base prep, reinforcement, and layout—
                    whether it&apos;s a driveway or an engineered foundation.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <h3 className="text-sm font-semibold text-slate-900">
                    Respect for Your Property
                  </h3>
                  <p className="mt-2 text-slate-600">
                    We manage access, protect landscaping where we can, and keep
                    the jobsite clean when the concrete is finished.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick stats / highlights */}
            <aside className="space-y-4 rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <h3 className="text-sm font-semibold text-slate-900">At a Glance</h3>

              <dl className="space-y-3 text-sm text-slate-700">
                <div className="flex items-start justify-between gap-3">
                  <dt className="text-slate-500">Primary Services</dt>
                  <dd className="text-right">
                    Driveways, patios, monolithic slabs, retaining walls, sidewalks, foundations, decorative concrete
                  </dd>
                </div>

                <div className="flex items-start justify-between gap-3">
                  <dt className="text-slate-500">Clients We Serve</dt>
                  <dd className="text-right">
                    Homeowners, homebuilders, pool companies, general contractors, businesses, HOA's
                  </dd>
                </div>

      

                <div className="flex items-start justify-between gap-3">
                  <dt className="text-slate-500">Coverage</dt>
                  <dd className="text-right">
                    Greenville, Greer, Easley, Simpsonville, Anderson, Seneca, Spartanburg & nearby areas
                  </dd>
                </div>
              </dl>

              <p className="mt-3 text-xs text-slate-500">
                Ask about senior and military discounts on qualifying projects.
              </p>

              <div className="pt-2">
                <Link
                  to="/service-area"
                  className="inline-flex items-center text-sm font-semibold text-amber-600 hover:underline underline-offset-4"
                >
                  View our service area →
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* PHOTO STRIP / GALLERY */}
      <section className="border-b border-slate-200 bg-slate-100/70">
        <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-xl font-semibold tracking-tight text-slate-900 md:text-2xl">
                A Few Looks at Our Work & Crew
              </h2>
              <p className="mt-3 max-w-xl text-sm text-slate-600 md:text-base">
                When you hire Imperium Concrete, you&apos;re getting a crew that
                shows up prepared, communicates clearly, and takes pride in the
                finished product.
              </p>
            </div>

            
          </div>

          {/* 3-photo layout */}
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {/* Card 1 */}
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="aspect-4/3 bg-slate-200">
                <img
                  src={imperiumpic1}
                  alt="Broom-finished concrete driveway"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="px-4 py-3 text-xs text-slate-700">
                <p className="font-semibold">Driveway Replacement</p>
                <p className="mt-1 text-slate-600">
                  Broom-finished driveway with proper base prep and drainage.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="aspect-4/3 bg-slate-200 flex items-center justify-center text-xs text-slate-500">
                <img src="./images/IMG_0350.jpg" alt="" />
              </div>
              <div className="px-4 py-3 text-xs text-slate-700">
                <p className="font-semibold">Stamped Patio w/color</p>
                <p className="mt-1 text-slate-600">
                  Patios poured with design in mind. We focus on clean transitions and durable outdoor spaces.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="aspect-4/3 bg-slate-200 items-center justify-center text-xs text-slate-500">
                <img src="./images/IMG_1872_asp.jpg" alt="" />
              </div>
              <div className="px-4 py-3 text-xs text-slate-700">
                <p className="font-semibold">Monolithic Slab Prep</p>
                <p className="mt-1 text-slate-600">
                  Forms, reinforcement, and vapor barrier ready for an engineered monolithic pour.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <Link
              to="/reviews"
              className="text-sm font-semibold text-slate-900 underline-offset-4 hover:underline"
            >
              Read what customers are saying →
            </Link>
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="bg-slate-900 px-4 py-12 text-slate-50 md:py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
            Let&apos;s Talk About Your Concrete Project
          </h2>

          <p className="mt-4 max-w-2xl text-sm text-slate-200 md:text-base">
            Whether you&apos;re replacing a driveway, adding a backyard patio,
            or pouring a slab for a new shop, we&apos;d love to walk the project
            with you and give clear next steps and pricing.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <a
              href="tel:18644476200"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-100"
            >
              Call (864) 447-6200
            </a>

            <Link
              to="/contact"
              className="text-sm font-semibold text-amber-300 underline-offset-4 hover:underline"
            >
              Or send us a message through our contact page
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

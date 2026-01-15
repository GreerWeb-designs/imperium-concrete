import React from "react";
import { Link } from "react-router-dom";


export default function DrivewaysPage() {
  return (
    <main className="bg-white">
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
            Services
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Concrete Driveways in Greenville & Upstate SC
          </h1>
          <p className="mt-4 max-w-3xl text-sm text-slate-600 md:text-base">
            Imperium Concrete installs and replaces concrete driveways built for
            durability, drainage, and curb appeal. If you’re dealing with cracks,
            settling, or a worn-out surface, we can help with demo, base prep, and
            a clean finish that lasts.
          </p>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12 md:py-16 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-xl font-semibold tracking-tight text-slate-900 md:text-2xl">
              What We Do
            </h2>
            <ul className="mt-4 list-disc pl-5 text-sm text-slate-600 space-y-2">
              <li>Driveway tear-out & replacement</li>
              <li>Widening / expansions and new layouts</li>
              <li>Proper base prep, grading, and drainage attention</li>
              <li>Reinforcement options (mesh/fiber) based on job needs</li>
              <li>Broom finish or upgraded finish options (as selected)</li>
            </ul>

            <h3 className="mt-8 text-sm font-semibold text-slate-900">
              Cities We Commonly Serve
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Greenville, Greer, Simpsonville, Mauldin, Taylors, Easley, Anderson,
              Seneca, and surrounding Upstate communities.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white hover:bg-slate-800"
              >
                Request a Quote
              </Link>
              <Link
                to="/service-area"
                className="text-sm font-semibold text-amber-600 underline-offset-4 hover:underline"
              >
                View Service Area
              </Link>
            </div>
          </div>

          {/* Photo placeholders */}
<div className="grid gap-4">
  <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-100">
    <img
      src= "/images/driveway-1.jpg" 
      alt="Concrete driveway project by Imperium Concrete"
      className="h-full w-full object-cover"
    />
  </div>

  <div className="rounded-3xl border border-slate-200 bg-slate-100 aspect-4/3 flex items-center justify-center text-slate-400">
    <img
      src= "/images/Imperiumpic3.jpg" 
      alt="Concrete driveway project by Imperium Concrete"
      className="h-full w-full object-cover"
    />
  </div>
</div>

        </div>
      </section>

      <section className="bg-amber-50">
        <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
          <h2 className="text-xl font-semibold tracking-tight text-slate-900 md:text-2xl">
            Driveway Replacement Done Right
          </h2>
          <p className="mt-3 max-w-4xl text-sm text-slate-700 md:text-base">
            The difference is in the prep. We focus on base, grade, and clean
            finishing so your driveway drains correctly, feels solid under vehicle
            load, and looks sharp from the street.
          </p>
        </div>
      </section>
    </main>
  );
}

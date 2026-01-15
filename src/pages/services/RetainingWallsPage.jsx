import React from "react";
import { Link } from "react-router-dom";

export default function RetainingWallsPage() {
  return (
    <main className="bg-white">
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
            Services
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Retaining Walls, Steps & Grade Solutions
          </h1>
          <p className="mt-4 max-w-3xl text-sm text-slate-600 md:text-base">
            When elevation changes are working against you, a retaining wall can
            create usable space, manage runoff, and improve safety. We build
            retaining wall solutions and steps across the Upstate with solid prep
            and clean workmanship.
          </p>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12 md:py-16 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-xl font-semibold tracking-tight text-slate-900 md:text-2xl">
              Common Retaining Wall Projects
            </h2>
            <ul className="mt-4 list-disc pl-5 text-sm text-slate-600 space-y-2">
              <li>Yard grading and erosion control solutions</li>
              <li>Retaining walls for elevation changes</li>
              <li>Steps and transitions between levels</li>
              <li>Drainage considerations and site prep</li>
              
            </ul>

            <h3 className="mt-8 text-sm font-semibold text-slate-900">
              Areas We Serve
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Greenville, Greer, Simpsonville, Mauldin, Taylors, Easley, Anderson,
              Seneca, and nearby Upstate cities.
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

          <div className="grid gap-4">
  <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 aspect-4/3 flex items-center justify-center text-slate-400">
    <img
      src= "/images/IMG_3846.jpg" 
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
            Turn Slopes Into Usable Space
          </h2>
          <p className="mt-3 max-w-4xl text-sm text-slate-700 md:text-base">
            If you’ve got a steep yard, pooling water, or erosion, we can help
            evaluate options and build something that looks good and performs.
          </p>
        </div>
      </section>
    </main>
  );
}

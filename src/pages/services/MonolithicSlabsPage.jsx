import React from "react";
import { Link } from "react-router-dom";

export default function MonolithicSlabsPage() {
  return (
    <main className="bg-white">
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
            Services
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Monolithic Slabs & Foundations in Upstate SC
          </h1>
          <p className="mt-4 max-w-3xl text-sm text-slate-600 md:text-base">
            From shop slabs to additions and engineered foundations, Imperium
            Concrete pours monolithic slabs with attention to layout, reinforcement,
            vapor barrier, and clean execution.
          </p>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12 md:py-16 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-xl font-semibold tracking-tight text-slate-900 md:text-2xl">
              Typical Monolithic Slab Projects
            </h2>
            <ul className="mt-4 list-disc pl-5 text-sm text-slate-600 space-y-2">
              <li>Shop slabs / garage slabs</li>
              <li>Home additions and outbuildings</li>
              <li>Engineered monolithic foundations (per plans/specs)</li>
              <li>Footings + slab pours</li>
            
            </ul>

            <h3 className="mt-10 text-sm font-semibold text-slate-900">
              Areas We Serve
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Greenville County and across the Upstate: Greer, Simpsonville,
              Mauldin, Taylors, Easley, Anderson, Seneca, and more.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white hover:bg-slate-800"
              >
                Request a Slab Quote
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
      src= "/images/ImperiumEasley.jpg" 
      alt="Concrete driveway project by Imperium Concrete"
      className="h-full w-full object-cover"
    />
  </div>

  <div className="rounded-3xl border border-slate-200 bg-slate-100 aspect-4/3 flex items-center justify-center text-slate-400">
    <img
      src= "/images/ImperiumPickens.jpg" 
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
            Built to Spec. Built to Last.
          </h2>
          <p className="mt-3 max-w-4xl text-sm text-slate-700 md:text-base">
            We coordinate with builders and engineers when plans are required, and
            we keep communication clear so your schedule stays on track.
          </p>
        </div>
      </section>
    </main>
  );
}

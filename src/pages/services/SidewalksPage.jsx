import React from "react";
import { Link } from "react-router-dom";

export default function SidewalksPage() {
  return (
    <main className="bg-white">
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
            Services
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Concrete Sidewalks & Walkways
          </h1>
          <p className="mt-4 max-w-3xl text-sm text-slate-600 md:text-base">
            From front entry walkways to backyard paths, we pour concrete sidewalks
            that improve safety, drainage, and curb appeal. Ideal for homeowners,
            builders, and light commercial needs.
          </p>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12 md:py-16 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-xl font-semibold tracking-tight text-slate-900 md:text-2xl">
              Sidewalk & Walkway Work
            </h2>
            <ul className="mt-4 list-disc pl-5 text-sm text-slate-600 space-y-2">
              <li>New sidewalks and walkways</li>
              <li>Replacement of cracked or settled concrete</li>
              <li>Connections to patios, driveways, and steps</li>
              <li>Grading attention to reduce pooling</li>
              <li>Clean, consistent finish</li>
            </ul>

            <h3 className="mt-8 text-sm font-semibold text-slate-900">
              Cities We Serve
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Greenville, Greer, Simpsonville, Mauldin, Taylors, Easley, Anderson,
              Seneca, and surrounding Upstate areas.
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
      src= "/images/IMG_1727.jpg" 
      alt="Concrete driveway project by Imperium Concrete"
      className="h-full w-full object-cover"
    />
  </div>

  <div className="rounded-3xl border border-slate-200 bg-slate-100 aspect-4/3 flex items-center justify-center text-slate-400">
    <img
      src= "/images/IMG_3340.jpg" 
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
            Safer Access + Cleaner Curb Appeal
          </h2>
          <p className="mt-3 max-w-4xl text-sm text-slate-700 md:text-base">
            A good walkway isn’t just convenience—it helps manage traffic patterns
            and makes your property feel polished and intentional.
          </p>
        </div>
      </section>
    </main>
  );
}

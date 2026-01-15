import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Column 1: Brand / Summary */}
          <div className="space-y-3">
            <p className="text-sm font-semibold tracking-tight text-slate-900">
              Imperium Concrete
            </p>
            <p className="text-sm text-slate-600">
              Concrete driveways, patios, slabs, and retaining walls across
              Greenville & Upstate South Carolina.
            </p>
            <p className="text-xs text-slate-500">
              Licensed & insured • Senior & military discounts available
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
              Quick Links
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link to="/about" className="text-slate-600 hover:text-amber-600">
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/service-area"
                  className="text-slate-600 hover:text-amber-600"
                >
                  Service Area
                </Link>
              </li>
              <li>
                <Link to="/reviews" className="text-slate-600 hover:text-amber-600">
                  Reviews
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-600 hover:text-amber-600">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
              Services
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link
                  to="/services/driveways"
                  className="text-slate-600 hover:text-amber-600"
                >
                  Driveways
                </Link>
              </li>
              <li>
                <Link
                  to="/services/monolithic-slabs"
                  className="text-slate-600 hover:text-amber-600"
                >
                  Monolithic Slabs
                </Link>
              </li>
              <li>
                <Link
                  to="/services/patios"
                  className="text-slate-600 hover:text-amber-600"
                >
                  Patios
                </Link>
              </li>
              <li>
                <Link
                  to="/services/sidewalks"
                  className="text-slate-600 hover:text-amber-600"
                >
                  Sidewalks
                </Link>
              </li>
              <li>
                <Link
                  to="/services/retaining-walls"
                  className="text-slate-600 hover:text-amber-600"
                >
                  Retaining Walls
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
              Contact
            </p>

            <div className="text-sm text-slate-600">
              <p className="font-semibold text-slate-900">Greenville, SC</p>
              <p className="mt-1">Serving the Upstate & nearby communities</p>
            </div>

            <div className="space-y-2 text-sm">
              <a
                href="tel:18644476200"
                className="block text-slate-600 hover:text-amber-600"
              >
                (864) 447-6200
              </a>
              {/* Add your email if you want */}
              {/* <a href="mailto:info@imperiumconcrete.com" className="block text-slate-600 hover:text-amber-600">
                info@imperiumconcrete.com
              </a> */}
              <Link to="/contact" className="inline-flex text-slate-600 hover:text-amber-600">
                Send a message →
              </Link>
            </div>

            <div className="mt-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-xs text-slate-600">
              <p className="font-semibold text-slate-900">Business Hours</p>
              <p className="mt-1">Mon–Fri: 8am–6pm</p>
              <p>Sat: By appointment</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 border-t border-slate-200 pt-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <p className="text-xs text-slate-500">
              © {year} Imperium Concrete. All rights reserved.
            </p>

            <div className="flex items-center justify-between gap-4 md:justify-end">
              <div className="flex flex-wrap gap-4 text-xs">
                <Link to="/privacy" className="text-slate-500 hover:text-amber-600">
                  Privacy
                </Link>
                <Link to="/terms" className="text-slate-500 hover:text-amber-600">
                  Terms
                </Link>
                <a
                  href="tel:18644476200"
                  className="text-slate-500 hover:text-amber-600"
                >
                  Call Now
                </a>
              </div>

              {/* Social icons bottom-right */}
              <div className="ml-2 flex items-center gap-3">
                <a
                  href="https://facebook.com/profile.php?id=100063489911089"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  className="rounded-full border border-slate-200 bg-white p-2 text-slate-600 shadow-sm hover:text-amber-600"
                >
                   <img src="./images/facebook.png"
                   width="32" height="32" alt="" />
                </a>
                <a
                  href="https://instagram.com/imperium_concrete"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="rounded-full border border-slate-200 bg-white p-2 text-slate-600 shadow-sm hover:text-amber-600"
                >
                  <img src="./images/instagram.jpg"
                    width="32" height="32"
                    alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import imperiumLogo from "../assets/imperium-logo.png";

const services = [
  { label: "Driveways", to: "/services/driveways" },
  { label: "Monolithic Slabs", to: "/services/monolithic-slabs" },
  { label: "Patios", to: "/services/patios" },
  { label: "Sidewalks", to: "/services/sidewalks" },
  { label: "Retaining Walls", to: "/services/retaining-walls" },
];

export default function Navbar({ onFastQuoteOpen }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const closeTimer = useRef(null);
  const rafId = useRef(null);

  // IMPORTANT: use hysteresis AND avoid layout shift
  const SHRINK_AT = 40;
  const EXPAND_AT = 10;

  useEffect(() => {
    const handleScroll = () => {
      if (rafId.current) return;
      rafId.current = requestAnimationFrame(() => {
        const y = window.scrollY || 0;

        setScrolled((prev) => {
          if (prev) return y > EXPAND_AT;
          return y > SHRINK_AT;
        });

        rafId.current = null;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  const onServicesEnter = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setServicesOpen(true);
  };

  const onServicesLeave = () => {
    closeTimer.current = setTimeout(() => setServicesOpen(false), 140);
  };

  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      {/* Keep header height stable */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex h-[92px] max-w-6xl items-center justify-between px-4">
          {/* LOGO BLOCK (scale instead of resizing layout) */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src={imperiumLogo}
              alt="Imperium Concrete"
              className={`h-20 w-20 object-contain transition-transform duration-300 ${
                scrolled ? "scale-[0.50]" : "scale-115"
              }`}
            />

            <div className="leading-tight">
              <p
                className={`font-semibold uppercase tracking-[0.22em] text-slate-700 transition-all duration-300 ${
                  scrolled ? "text-[16px]" : "text-[18px]"
                }`}
              >
                Imperium Concrete
              </p>
              <p
                className={`text-slate-500 transition-all duration-300 ${
                  scrolled ? "text-[11px]" : "text-[12px]"
                }`}
              >
                Greenville & Upstate SC
              </p>
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/about" className="text-sm text-slate-600 hover:text-amber-500">
              About
            </Link>

            {/* SERVICES DROPDOWN */}
            <div className="relative" onMouseEnter={onServicesEnter} onMouseLeave={onServicesLeave}>
              <button
                type="button"
                className="flex items-center gap-1 text-sm text-slate-600 hover:text-amber-500"
              >
                Services <span className="text-[10px]">▾</span>
              </button>

              {servicesOpen && (
                <div className="absolute left-0 mt-2 w-60 rounded-2xl border border-slate-200 bg-white py-2 shadow-lg">
                  {services.map((s) => (
                    <NavLink
                      key={s.to}
                      to={s.to}
                      className={({ isActive }) =>
                        `block px-4 py-2 text-sm hover:bg-amber-50 ${
                          isActive ? "font-semibold text-amber-700" : "text-slate-700"
                        }`
                      }
                    >
                      {s.label}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>

            <Link to="/service-area" className="text-sm text-slate-600 hover:text-amber-500">
              Service Area
            </Link>

            <Link to="/reviews" className="text-sm text-slate-600 hover:text-amber-500">
              Reviews
            </Link>

            <Link to="/contact" className="text-sm text-slate-600 hover:text-amber-500">
              Contact
            </Link>

            <button
              type="button"
              onClick={onFastQuoteOpen}
              className="rounded-full bg-amber-300 px-4 py-2 text-sm font-semibold text-slate-900 shadow hover:bg-amber-200"
            >
              Fast Quote
            </button>
          </nav>

          {/* MOBILE HAMBURGER */}
          <button
            type="button"
            className="md:hidden rounded-lg p-2 text-slate-700"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            ☰
          </button>
        </div>
      </header>

      {/* MOBILE OVERLAY */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm md:hidden"
          onClick={closeMobile}
        />
      )}

      {/* MOBILE MENU */}
      <aside
        className={`fixed top-0 right-0 z-50 h-full w-80 max-w-[85vw] bg-white shadow-xl transition-transform duration-300 md:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          type="button"
          className="absolute right-3 top-3 text-2xl text-slate-600"
          onClick={closeMobile}
          aria-label="Close menu"
        >
          ✕
        </button>

        <nav className="flex flex-col gap-5 px-6 py-14 text-slate-700">
          <NavLink to="/" onClick={closeMobile} className="font-semibold">
            Home
          </NavLink>

          <NavLink to="/about" onClick={closeMobile}>
            About
          </NavLink>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 mb-2">
              Services
            </p>
            <div className="flex flex-col gap-2">
              {services.map((s) => (
                <NavLink
                  key={s.to}
                  to={s.to}
                  onClick={closeMobile}
                  className="text-sm hover:text-amber-500"
                >
                  {s.label}
                </NavLink>
              ))}
            </div>
          </div>

          <NavLink to="/service-area" onClick={closeMobile}>
            Service Area
          </NavLink>

          <NavLink to="/reviews" onClick={closeMobile}>
            Reviews
          </NavLink>

          <NavLink to="/contact" onClick={closeMobile}>
            Contact
          </NavLink>

          <button
            type="button"
            onClick={() => {
              closeMobile();
              onFastQuoteOpen?.();
            }}
            className="mt-2 rounded-full bg-amber-300 px-4 py-2 text-sm font-semibold text-slate-900 shadow hover:bg-amber-200"
          >
            Fast Quote
          </button>
        </nav>
      </aside>
    </>
  );
}

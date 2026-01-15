import React from "react";
import { useNavigate } from "react-router-dom";

// If you have these assets in your new project, import them.
// If you don’t yet, comment them out and replace with a placeholder image.
import heroCover from "../assets/Cover2.jpg";
import Seo from "../components/Seo";


const HOME_REVIEWS = [
  {
    name: "John D.",
    location: "Williamston, SC",
    text:
      "Excellent company! Excellent work! I highly recommend Imperium Concrete. Their price is very competitive, but the quality of work, attention to detail, clean-up ---and drainage (knowledge of) is excellent. We had an elevated back porch (big project) and an entire backyard (multiple elevation) project / concrete pour around our swimming pool. Both were very big projects and they were the best ---we are so glad we hired Imperium.",
  },
  {
    name: "Debbie S.",
    location: "Seneca, SC",
    text:
      "[Imperium Concrete was] very friendly and professional throughout the whole process and walked us through what was going to be done and our driveway turned out great!",
  },
  {
    name: "Mark S.",
    location: "Townville, SC",
    text:
      "Bob and Andres and crew did an outstanding job on a slab for a garage and driveway leading to it. Bob was at my location the day after I initially contacted him and I had a very competitive quote on the job the day after that.",
  },
  {
    name: "Rob W.",
    location: "Taylors, SC",
    text:
      "Imperium Concrete did a complete demolition and replacement of my driveway. Excellent communication, great attention to detail, and completed as promised. Highly recommend.",
  },
  {
    name: "Stephanie T.",
    location: "Anderson, SC",
    text:
      "The Imperium team did a great job replacing and re-configuring our driveway and back patio! They communicated clearly and professionally, always showed up on time, finished quickly and went above and beyond.",
  },
  {
    name: "True Air Technologies",
    location: "Greer, SC",
    text:
      "Imperium Concrete poured a monolithic slab and driveway for us and did a wonderful job. Andres and his crew made sure everything was perfect before the pour.",
  },
];

export default function HomePage({ onFastQuoteOpen }) {
  const navigate = useNavigate();

  // Reviews carousel
  const [currentReview, setCurrentReview] = React.useState(0);
  const googleRating = 4.6;

  React.useEffect(() => {
    const id = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % HOME_REVIEWS.length);
    }, 10000);
    return () => clearInterval(id);
  }, []);

  return (
    <main id="top">
      {/* HERO WITH BACKGROUND IMAGE */}
      <Seo
        title="Imperium Concrete | Driveways, Patios & Slabs | Upstate SC"
        description="Imperium Concrete pours driveways, patios, slabs, and retaining walls across Greenville and the Upstate of South Carolina. Request a fast quote today."
      />
      <section
        className="relative border-b border-slate-200"
        style={{
          backgroundImage: `url(${heroCover})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-linear-to-br from-black/60 via-black/35 to-black/20" />

        <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-4 py-14 text-white md:flex-row md:items-center md:py-20">
          {/* LEFT: TEXT */}
          <div className="flex-1 space-y-8">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-black/30 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-white/80">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
              Concrete Contractor • Greenville, SC
            </p>

            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
              Concrete Driveways, Patios & Slabs
              <span className="block text-amber-400">
                Poured in Greenville & Upstate South Carolina
              </span>
            </h1>

            <p className="max-w-xl text-sm text-white/90 md:text-base">
              Imperium Concrete pours{" "}
              <span className="font-semibold">
                driveways, patios, slabs, and retaining walls
              </span>{" "}
              across Greenville, Greer, Simpsonville, Anderson, Seneca, and nearby
              areas — poured with clean communication from start to finish.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={onFastQuoteOpen}
                className="rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-amber-500/30 hover:bg-amber-300"
              >
                Request a Fast Quote
              </button>

              <a
                href="tel:18644476200"
                className="text-sm font-semibold text-white underline-offset-4 hover:underline"
              >
                Call (864) 447-6200
              </a>

              <button
                type="button"
                onClick={() => navigate("/contact")}
                className="rounded-full border border-white/60 bg-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-white/15"
              >
                Request a Quote Online
              </button>
            </div>

            <p className="text-[18px] text-white/70">
              Licensed & insured • 20+ years of experience • Senior & military discounts available
            </p>
          </div>

          {/* RIGHT: Optional card / image block (leave blank for now) */}
          <div className="hidden md:block md:w-85" />
        </div>
      </section>

      {/* ⭐ GOOGLE REVIEWS SECTION */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-12 md:flex-row md:items-start md:py-16">
          {/* LEFT: GOOGLE BADGE */}
          <div className="w-full max-w-sm space-y-4 md:w-1/3">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white shadow-sm">
                <span className="text-[14px] font-bold text-sky-500">G</span>
              </div>
              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                Google Reviews
              </span>
            </div>

            <h2 className="text-xl font-semibold tracking-tight text-slate-900 md:text-2xl">
              What Imperium Concrete Customers Say
            </h2>

            <p className="text-sm text-slate-600">
              Real feedback from homeowners and contractors across the Upstate who trusted
              Imperium Concrete with their projects.
            </p>

            {/* Rating + stars */}
            <div className="mt-2 flex items-center gap-3">
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <div className="relative inline-block text-lg leading-none">
                    <div className="text-slate-300">★★★★★</div>
                    <div
                      className="absolute left-0 top-0 overflow-hidden text-amber-400"
                      style={{ width: `${(googleRating / 5) * 100}%` }}
                    >
                      ★★★★★
                    </div>
                  </div>
                  <span className="text-sm font-semibold text-slate-900">
                    {googleRating.toFixed(1)} out of 5
                  </span>
                </div>
                <span className="text-xs text-slate-500">
                  Based on recent customer feedback
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT: REVIEW CARD */}
          <div className="w-full md:w-2/3">
            <div className="relative h-full rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm md:p-7">
              <div className="space-y-3">
                <p className="text-sm text-slate-700">
                  “{HOME_REVIEWS[currentReview].text}”
                </p>
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      {HOME_REVIEWS[currentReview].name}
                    </p>
                    <p className="text-xs text-slate-500">
                      {HOME_REVIEWS[currentReview].location}
                    </p>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-xs font-semibold text-slate-500">
                      Google Review
                    </span>
                    <span className="text-amber-400 text-sm">★★★★★</span>
                  </div>
                </div>
              </div>

              {/* Controls */}
              <div className="mt-6 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() =>
                      setCurrentReview((prev) =>
                        prev === 0 ? HOME_REVIEWS.length - 1 : prev - 1
                      )
                    }
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-300 bg-white text-xs font-semibold text-slate-700 hover:bg-slate-100"
                  >
                    ‹
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      setCurrentReview((prev) => (prev + 1) % HOME_REVIEWS.length)
                    }
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-300 bg-white text-xs font-semibold text-slate-700 hover:bg-slate-100"
                  >
                    ›
                  </button>
                </div>

                {/* Dots */}
                <div className="flex flex-wrap items-center gap-1.5">
                  {HOME_REVIEWS.map((_, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setCurrentReview(idx)}
                      className={`h-2.5 w-2.5 rounded-full transition ${
                        idx === currentReview
                          ? "bg-slate-900"
                          : "bg-slate-300 hover:bg-slate-400"
                      }`}
                      aria-label={`Go to review ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-end">
              <button
                type="button"
                onClick={() => navigate("/reviews")}
                className="text-sm font-semibold text-amber-600 hover:underline underline-offset-4"
              >
                Read more reviews →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* WHY IMPERIUM CONCRETE */}
      <section className="border-b border-slate-200 bg-amber-50">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-2 md:items-center md:py-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-600">
              Why Imperium Concrete?
            </p>

            <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
              Experience • Quality • A Team You Can Trust
            </h2>

            <p className="mt-4 text-sm leading-relaxed text-slate-700 md:text-base">
              With years of hands-on experience in residential and commercial concrete,
              Imperium Concrete delivers workmanship that lasts. Our team pours driveways,
              patios, monolithic slabs, and retaining walls with precision, clear communication,
              and respect for your property.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => navigate("/about")}
                className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800"
              >
                About Imperium
              </button>
              <button
                type="button"
                onClick={onFastQuoteOpen}
                className="rounded-full border border-slate-900 px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-white"
              >
                Get a Fast Quote
              </button>
            </div>
          </div>

          <div className="flex h-65 items-center justify-center overflow-hidden rounded-3xl border border-amber-200 bg-white shadow-sm md:h-80">
            <span className="text-sm text-slate-400"><img src="./images/Imperium-cover.jpg" alt="" /></span>
          </div>
        </div>
      </section>

      {/* VIDEO SECTION */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
          <h2 className="mb-6 text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
            Watch Our Crew in Action
          </h2>

          <div className="aspect-video overflow-hidden rounded-3xl border border-slate-200 shadow-lg">
            <iframe
              className="h-full w-full"
              src="https://www.youtube.com/embed/q9LtA3GxYNg"
              title="Imperium Concrete Promo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </main>
  );
}

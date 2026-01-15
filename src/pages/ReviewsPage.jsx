import { useEffect, useMemo, useState } from "react";

const REVIEWS = [
  {
    name: "Dave M.",
    location: "Easley, SC",
    rating: 5,
    text:
      "Bob was good on explaining the specs and what would happen. They were professional and efficient and did a great job! Highly recommend! Plan on having them do more for us.",
  },
  {
    name: "Evan S.",
    location: "Hendersonville, NC",
    rating: 5,
    text:
      "Bob and his crew at Imperium Concrete did a great job on a concrete driveway pad. He did it in a timely manner and within budget. Very professional company.",
  },
  {
    name: "Mark S.",
    location: "Townville, SC",
    rating: 5,
    text:
      "Bob and Andres and crew did an outstanding job on a slab for a garage and driveway leading to it. Bob was at my location the day after I initially contacted him and I had a very competitive quote on the job the day after that... The result shows what fine craftsmen the Imperium guys are...",
  },
  {
    name: "Debbie S.",
    location: "Seneca, SC",
    rating: 5,
    text:
      "Bob and his crew were very friendly and professional throughout the whole process and walked us through what was going to be done and our driveway turned out great!",
  },
  {
    name: "Brandon P.",
    location: "Easley, SC",
    rating: 5,
    text:
      "Bob, Andres, and crew did an outstanding job on our patio and driveway extension. Bob came out to give a quote the day after I called and the job was completed quickly. Andres and crew were very professional and attentive to details especially with the stamping on our patio, it looks amazing. I would highly recommend them to anyone.",
  },
  {
    name: "John D.",
    location: "Williamston, SC",
    rating: 5,
    text:
      "Excellent company! Excellent work! I 'highly' recommend Imperium Concrete. Their price is very competitive, but the quality of work, attention to detail, clean-up ---and drainage (knowledge of) is excellent... we are so glad we hired Imperium. We've had bad luck with contractors before----but not this time. Also: on time, good communication, did what they said they would do (exceeded expectations), reliable, good clean-up, great all-around!",
  },
  {
    name: "Breck I.",
    location: "Fountain Inn, SC",
    rating: 5,
    text:
      "Outstanding work... even after two years since they did our driveway...it looks amazing. And their pricing can't be beat.",
  },
  {
    name: "Tom B.",
    location: "Spartanburg, SC",
    rating: 5,
    text:
      "Andres was very responsive to my requests for a building pad and driveway they constructed. Part of my driveway had to be regraded to allow a smooth and gradual incline to my building pad. Andres took control of the situation and completed the project quickly and successfully. I highly recommend Imperium Concrete!",
  },
  {
    name: "Lindsay G.",
    location: "Greenville, SC",
    rating: 5,
    text:
      "I am a big fan of Imperium Concrete. The driveway and sidewalk are even better than I expected. Highly recommended!",
  },
];

function Stars({ value = 5 }) {
  const full = Math.max(0, Math.min(5, Number(value) || 0));
  return (
    <div className="inline-flex items-center gap-1" aria-label={`${full} out of 5 stars`}>
      <span className="text-amber-400 text-lg leading-none">
        {"★★★★★".slice(0, full)}
      </span>
      <span className="text-white/40 text-lg leading-none">
        {"★★★★★".slice(0, 5 - full)}
      </span>
    </div>
  );
}

export default function ReviewsPage() {
  const reviews = useMemo(() => REVIEWS, []);
  const [idx, setIdx] = useState(0);

  const current = reviews[idx] ?? reviews[0];

  // Auto-cycle every 8 seconds
  useEffect(() => {
    if (reviews.length <= 1) return;
    const id = window.setInterval(() => {
      setIdx((i) => (i + 1) % reviews.length);
    }, 12000);
    return () => window.clearInterval(id);
  }, [reviews.length]);

  return (
    <main className="bg-white">
      {/* HERO */}
      <section
        className="relative border-b border-slate-200"
        style={{
          backgroundImage: `url(/images/Imperium-cover.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative mx-auto max-w-6xl px-4 py-14 md:py-20 text-white">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-black/30 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.18em]">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
            Reviews
          </p>

          <h1 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            Real Feedback From
            <span className="block text-amber-400">
              Greenville & Upstate South Carolina
            </span>
          </h1>

          <p className="mt-4 max-w-2xl text-sm text-white/90 md:text-base">
            These are real customer experiences from driveway replacements, patios,
            slabs, and concrete work across the Upstate. Reviews rotate automatically.
          </p>

          <div className="mt-6 flex items-center gap-3">
            <div className="relative inline-block text-xl leading-none">
              <div className="text-white/35">★★★★★</div>
              <div
                className="absolute left-0 top-0 overflow-hidden text-amber-400"
                style={{ width: "92%" }} // 4.6/5
              >
                ★★★★★
              </div>
            </div>
            <span className="text-sm font-semibold">4.6 out of 5 on Google</span>
          </div>
        </div>
      </section>

      {/* FEATURED REVIEW (auto-cycles) */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-10">
            <div className="grid gap-10 md:grid-cols-[1.2fr,0.8fr] md:items-start">
              {/* Review text */}
              <div>
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-amber-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-amber-700">
                    Featured Review
                  </div>
                  
                </div>

                <p className="mt-5 text-lg leading-relaxed text-slate-800 md:text-xl">
                  “{current?.text ?? "Add review text here."}”
                </p>

                <div className="mt-6 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      {current?.name ?? "Customer Name"}
                    </p>
                    <p className="text-xs text-slate-500">
                      {current?.location ?? "Upstate, SC"}
                    </p>
                  </div>

                  {/* stars on right */}
                  <div className="shrink-0 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-2">
                    <Stars value={current?.rating ?? 5} />
                    <p className="mt-1 text-[11px] font-semibold text-slate-600">
                      {current?.rating ?? 5}.0 / 5
                    </p>
                  </div>
                </div>
              </div>

              {/* Dots panel */}
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <h2 className="text-sm font-semibold text-slate-900">
                  Browse Reviews
                </h2>
                <p className="mt-2 text-xs text-slate-600">
                  Tap any dot to jump to a review.
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {reviews.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setIdx(i)}
                      className={`h-3 w-3 rounded-full transition ${
                        i === idx
                          ? "bg-slate-900"
                          : "bg-slate-300 hover:bg-slate-400"
                      }`}
                      aria-label={`Go to review ${i + 1}`}
                    />
                  ))}
                </div>

                <div className="mt-6 rounded-2xl bg-white p-4 text-xs text-slate-600 border border-slate-200">
      
                </div>
              </div>
            </div>
          </div>

          {/* Optional: add a simple grid of review snippets later */}
        </div>
      </section>
    </main>
  );
}


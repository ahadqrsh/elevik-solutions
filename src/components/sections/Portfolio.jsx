import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { FiArrowUpRight, FiX } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";
import { PORTFOLIO } from "../../utils/data.js";
import { portfolioAnimation } from "../../animations/portfolioAnimation.js";
import SectionHeading from "../ui/SectionHeading.jsx";

export default function Portfolio() {
  const scope = useRef(null);
  const [active, setActive] = useState(null);

  useEffect(() => {
    const ctx = gsap.context(() => portfolioAnimation(scope.current), scope);
    return () => ctx.revert();
  }, []);

  return (
    <section id="portfolio" ref={scope} className="relative px-5 py-16 md:px-8 md:py-24">
      <SectionHeading
        eyebrow="Selected Work"
        title="Results we're proud to show"
        subtitle="A snapshot of brands we've helped design, rank and scale."
      />

      <div className="mx-auto mt-12 grid max-w-7xl auto-rows-[240px] grid-cols-1 gap-5 md:grid-cols-3">
        {PORTFOLIO.map((p) => (
          <button
            key={p.title}
            onClick={() => setActive(p)}
            className={`portfolio-item group relative flex flex-col justify-end overflow-hidden rounded-3xl border border-light-line bg-light-card p-7 text-left transition-all duration-500 hover:border-brand/40 dark:border-dark-line dark:bg-dark-card ${p.span === "lg" ? "md:col-span-2" : ""}`}
          >
            <div className="absolute inset-0 bg-brand-gradient opacity-0 transition-opacity duration-500 group-hover:opacity-10" />
            <span className="absolute right-6 top-6 grid h-11 w-11 place-items-center rounded-full border border-light-line text-light-text transition-all duration-500 group-hover:border-brand group-hover:bg-brand group-hover:text-white dark:border-dark-line dark:text-white">
              <FiArrowUpRight />
            </span>
            <span className="font-display text-xs font-semibold uppercase tracking-wider text-brand">{p.tag}</span>
            <h3 className="mt-2 font-display text-2xl font-bold">{p.title}</h3>
            <p className="mt-1 text-sm text-light-muted dark:text-dark-muted">{p.metric}</p>
          </button>
        ))}
      </div>

      {/* Case study popup */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[95] grid place-items-center bg-black/60 p-5 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, y: 30 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 30 }}
              transition={{ type: "spring", damping: 22 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-lg rounded-3xl border border-light-line bg-light-bg p-8 dark:border-dark-line dark:bg-dark-card"
            >
              <button onClick={() => setActive(null)} aria-label="Close" className="absolute right-5 top-5 text-light-muted hover:text-brand dark:text-dark-muted">
                <FiX size={22} />
              </button>
              <span className="font-display text-xs font-semibold uppercase tracking-wider text-brand">{active.tag}</span>
              <h3 className="mt-2 font-display text-3xl font-bold">{active.title}</h3>
              <div className="mt-6 rounded-2xl bg-brand/5 p-6">
                <p className="font-display text-2xl font-bold text-gradient">{active.metric}</p>
                <p className="mt-1 text-sm text-light-muted dark:text-dark-muted">Headline result</p>
              </div>
              <p className="mt-6 text-sm leading-relaxed text-light-muted dark:text-dark-muted">
                We partnered with {active.title} across strategy, design and growth — rebuilding the experience end-to-end and running iterative campaigns until the numbers moved. Full case study available on request.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
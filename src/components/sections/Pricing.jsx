import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { FiCheck } from "react-icons/fi";
import { PRICING } from "../../utils/data.js";
import { fadeUp } from "../../animations/scrollAnimation.js";
import SectionHeading from "../ui/SectionHeading.jsx";
import MagneticButton from "../ui/MagneticButton.jsx";

export default function Pricing() {
  const scope = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => fadeUp(".price-card", scope.current), scope);
    return () => ctx.revert();
  }, []);

  return (
    <section id="pricing" ref={scope} className="relative px-5 py-16 md:px-8 md:py-24">
      <div className="pointer-events-none absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-brand/10 blur-[120px]" />
      <SectionHeading
        eyebrow="Pricing"
        title="Plans that scale with you"
        subtitle="Transparent packages, no surprises. Ad spend is billed separately from management."
      />

      <div className="mx-auto mt-12 grid max-w-4xl items-stretch gap-6 md:grid-cols-2">
        {PRICING.map((p) => (
          <div
            key={p.name}
            className={`price-card relative flex flex-col rounded-3xl p-8 transition-transform duration-500 ${
              p.featured
                ? "bg-brand-gradient text-white shadow-[0_30px_70px_-25px_rgba(37,99,235,0.7)] md:-translate-y-4"
                : "border border-light-line bg-light-card dark:border-dark-line dark:bg-dark-card"
            }`}
          >
            {p.featured && (
              <span className="absolute right-6 top-6 rounded-full bg-white/20 px-3 py-1 font-display text-[11px] font-bold uppercase tracking-wider">
                Most Popular
              </span>
            )}
            <h3 className={`font-display text-sm font-semibold uppercase tracking-wider ${p.featured ? "text-white/80" : "text-brand"}`}>{p.name}</h3>
            <p className={`mt-1 text-sm ${p.featured ? "text-white/70" : "text-light-muted dark:text-dark-muted"}`}>{p.tagline}</p>
            <div className="mt-6 flex items-baseline gap-1">
              <span className="font-display text-4xl font-bold">₹{p.price}</span>
              <span className={`text-sm ${p.featured ? "text-white/70" : "text-light-muted dark:text-dark-muted"}`}>{p.cadence}</span>
            </div>
            <ul className="mt-7 flex-1 space-y-3">
              {p.features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm">
                  <FiCheck className={`mt-0.5 flex-none ${p.featured ? "text-white" : "text-brand"}`} />
                  <span className={p.featured ? "text-white/90" : ""}>{f}</span>
                </li>
              ))}
            </ul>
            {p.featured ? (
              <a href="#contact" className="magnetic mt-8 inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5 font-display text-sm font-semibold text-brand transition-transform hover:scale-[1.02]">
                {p.cta}
              </a>
            ) : (
              <MagneticButton as="a" href="#contact" variant="ghost" className="mt-8 w-full">
                {p.cta}
              </MagneticButton>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
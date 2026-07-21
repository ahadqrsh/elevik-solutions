import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { SERVICES } from "../../utils/data.js";
import { servicesAnimation } from "../../animations/servicesAnimation.js";
import SectionHeading from "../ui/SectionHeading.jsx";

export default function Services() {
  const scope = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => servicesAnimation(scope.current), scope);
    return () => ctx.revert();
  }, []);

  return (
    <section id="services" ref={scope} className="relative px-5 py-16 md:px-8 md:py-24">
      <div className="pointer-events-none absolute right-0 top-40 h-72 w-72 rounded-full bg-brand/10 blur-[120px]" />
      <SectionHeading
        eyebrow="What We Do"
        title="Everything your brand needs to grow"
        subtitle="One team, one roadmap — from the first pixel to the last conversion."
      />

      <div className="mx-auto mt-12 grid max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {SERVICES.map((s) => (
          <article
            key={s.title}
            className="service-card group relative overflow-hidden rounded-3xl border border-light-line bg-light-card p-7 transition-all duration-500 hover:-translate-y-2 hover:border-brand/40 hover:shadow-[0_20px_60px_-20px_rgba(37,99,235,0.4)] dark:border-dark-line dark:bg-dark-card"
          >
            <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-brand/0 blur-2xl transition-all duration-500 group-hover:bg-brand/20" />
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand/10 text-brand transition-colors duration-500 group-hover:bg-brand-gradient group-hover:text-white">
              <s.icon size={22} />
            </span>
            <h3 className="mt-6 font-display text-lg font-semibold">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-light-muted dark:text-dark-muted">{s.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
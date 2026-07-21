import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { WHY_US } from "../../utils/data.js";
import { fadeUp } from "../../animations/scrollAnimation.js";
import SectionHeading from "../ui/SectionHeading.jsx";

export default function WhyChooseUs() {
  const scope = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => fadeUp(".why-card", scope.current), scope);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={scope} className="relative px-5 py-16 md:px-8 md:py-24">
      <SectionHeading
        eyebrow="Why Elevik"
        title="Built different, on purpose"
        subtitle="The reasons brands stay with us long after launch."
      />
      <div className="mx-auto mt-12 grid max-w-6xl gap-px overflow-hidden rounded-3xl border border-light-line bg-light-line dark:border-dark-line dark:bg-dark-line sm:grid-cols-2 lg:grid-cols-3">
        {WHY_US.map((w) => (
          <div key={w.title} className="why-card group bg-light-bg p-8 transition-colors duration-500 hover:bg-light-card dark:bg-dark-bg dark:hover:bg-dark-card">
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand/10 text-brand transition-transform duration-500 group-hover:scale-110">
              <w.icon size={20} />
            </span>
            <h3 className="mt-5 font-display text-lg font-semibold">{w.title}</h3>
            <p className="mt-2 text-sm text-light-muted dark:text-dark-muted">{w.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
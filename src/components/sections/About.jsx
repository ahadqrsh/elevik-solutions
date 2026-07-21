import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { FiTarget, FiEye, FiAward } from "react-icons/fi";
import { STATS } from "../../utils/data.js";
import { countUp } from "../../animations/scrollAnimation.js";
import { fadeIn } from "../../animations/scrollAnimation.js";
import SectionHeading from "../ui/SectionHeading.jsx";

const PILLARS = [
  { icon: FiTarget, title: "Mission", text: "To make world-class design and growth marketing accessible to ambitious brands, wherever they are." },
  { icon: FiEye, title: "Vision", text: "A web where every brand we touch is fast, beautiful and impossible to ignore." },
  { icon: FiAward, title: "Experience", text: "Years of shipping D2C stores, SaaS sites and campaigns that convert at scale." },
];

export default function About() {
  const scope = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      fadeIn(".about-pillar", "up", scope.current);
      scope.current.querySelectorAll("[data-count]").forEach((el) =>
        countUp(el, Number(el.dataset.count), el.dataset.suffix || "")
      );
    }, scope);
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={scope} className="relative px-5 py-16 md:px-8 md:py-24">
      <SectionHeading
        eyebrow="Who We Are"
        title="A studio obsessed with growth"
        subtitle="We pair award-worthy design with performance marketing so your brand doesn't just look good — it sells."
      />

      <div className="mx-auto mt-12 grid max-w-6xl gap-6 md:grid-cols-3">
        {PILLARS.map((p) => (
          <div key={p.title} className="about-pillar glass rounded-3xl p-8">
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-gradient text-white">
              <p.icon size={20} />
            </span>
            <h3 className="mt-6 font-display text-xl font-semibold">{p.title}</h3>
            <p className="mt-3 text-sm text-light-muted dark:text-dark-muted">{p.text}</p>
          </div>
        ))}
      </div>

      <div className="mx-auto mt-12 grid max-w-5xl grid-cols-2 gap-6 rounded-3xl border border-light-line bg-light-card p-8 dark:border-dark-line dark:bg-dark-card md:grid-cols-4 md:p-12">
        {STATS.map((s) => (
          <div key={s.label} className="text-center">
            <p className="font-display text-4xl font-bold text-gradient md:text-5xl" data-count={s.value} data-suffix={s.suffix}>0{s.suffix}</p>
            <p className="mt-2 text-xs font-medium uppercase tracking-wider text-light-muted dark:text-dark-muted md:text-sm">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
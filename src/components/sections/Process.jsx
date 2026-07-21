import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PROCESS } from "../../utils/data.js";
import SectionHeading from "../ui/SectionHeading.jsx";

gsap.registerPlugin(ScrollTrigger);

export default function Process() {
  const scope = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".process-step", {
        y: 50, opacity: 0, stagger: 0.12, duration: 0.8, ease: "power3.out",
        immediateRender: false,
        scrollTrigger: { trigger: scope.current, start: "top 80%", once: true },
      });
      // Animated progress line
      gsap.fromTo(".process-line-fill", { scaleY: 0 }, {
        scaleY: 1, transformOrigin: "top", ease: "none",
        scrollTrigger: { trigger: ".process-timeline", start: "top 60%", end: "bottom 70%", scrub: true },
      });
    }, scope);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={scope} className="relative px-5 py-16 md:px-8 md:py-24">
      <SectionHeading
        eyebrow="How We Work"
        title="A process that removes the guesswork"
        subtitle="Seven deliberate stages that take you from idea to sustained growth."
      />
      <div className="process-timeline relative mx-auto mt-12 max-w-3xl">
        <div className="absolute left-[27px] top-2 h-full w-px bg-light-line dark:bg-dark-line md:left-1/2" />
        <div className="process-line-fill absolute left-[27px] top-2 h-full w-px bg-brand md:left-1/2" />
        <div className="space-y-10">
          {PROCESS.map((p, i) => (
            <div key={p.step} className={`process-step relative flex items-start gap-6 md:w-1/2 ${i % 2 ? "md:ml-auto md:pl-12" : "md:pr-12 md:text-right md:flex-row-reverse"}`}>
              <span className="z-10 grid h-14 w-14 flex-none place-items-center rounded-full border-2 border-brand bg-light-bg font-display text-sm font-bold text-brand dark:bg-dark-bg">
                {p.step}
              </span>
              <div>
                <h3 className="font-display text-lg font-semibold">{p.title}</h3>
                <p className="mt-1 text-sm text-light-muted dark:text-dark-muted">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
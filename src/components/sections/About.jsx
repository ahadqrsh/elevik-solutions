import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { FiTarget, FiEye, FiUsers, FiVideo, FiScissors } from "react-icons/fi";
import {
  SiShopify, SiReact, SiNextdotjs, SiTailwindcss,
  SiMeta, SiGoogleanalytics,
} from "react-icons/si";
import { countUp, fadeIn, fadeUp } from "../../animations/scrollAnimation.js";
import SectionHeading from "../ui/SectionHeading.jsx";

const PILLARS = [
  {
    icon: FiTarget,
    title: "Mission",
    text: "To make world-class design and growth marketing accessible to ambitious brands — not just the ones with enterprise budgets.",
  },
  {
    icon: FiEye,
    title: "Vision",
    text: "A web where every brand we touch is fast, beautiful and impossible to scroll past.",
  },
  {
    icon: FiUsers,
    title: "Our approach",
    text: "A small, senior team by design. You work directly with the people building your project — no juniors, no handoffs, no telephone game.",
  },
];

/* Honest, forward-looking commitments — every one of these is something
   you control and can actually keep. Update them if your process changes. */
const COMMITMENTS = [
  { count: 24, suffix: "h", label: "Reply time" },
  { display: "2–4", suffix: " wk", label: "Typical build" },
  { count: 100, suffix: "%", label: "Custom, zero templates" }
];

const STACK = [
  { icon: SiShopify, name: "Shopify" },
  { icon: SiReact, name: "React" },
  { icon: SiNextdotjs, name: "Next.js" },
  { icon: SiTailwindcss, name: "Tailwind" },
  { icon: SiMeta, name: "Meta Ads" },
  { icon: SiGoogleanalytics, name: "GA4" },
  { icon: FiScissors, name: "CapCut" },
  { icon: FiVideo, name: "Premiere Pro" },
];

export default function About() {
  const scope = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      fadeIn(".about-pillar", "up", scope.current);
      fadeUp(".stack-item", ".stack-grid");
      scope.current.querySelectorAll("[data-count]").forEach((el) =>
        countUp(el, Number(el.dataset.count), el.dataset.suffix || "")
      );
    }, scope);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={scope}
      className="relative overflow-hidden px-4 py-16 sm:px-5 md:px-8 md:py-24"
    >
      <SectionHeading
        eyebrow="Who we are"
        title="A new studio, built on modern craft"
        subtitle="Elevik Solutions is a young agency — and we treat that as an advantage. Fewer clients, more attention, and none of the bloat that slows bigger shops down."
      />

      {/* ── Pillars ── */}
      <div className="mx-auto mt-12 grid w-full max-w-6xl gap-4 sm:gap-6 md:grid-cols-3">
        {PILLARS.map((p) => (
          <div key={p.title} className="about-pillar glass min-w-0 rounded-3xl p-6 sm:p-8">
            <span className="grid h-11 w-11 flex-none place-items-center rounded-2xl bg-brand-gradient text-white sm:h-12 sm:w-12">
              <p.icon size={20} />
            </span>
            <h3 className="mt-5 break-words font-display text-lg font-semibold sm:mt-6 sm:text-xl">
              {p.title}
            </h3>
            <p className="mt-3 break-words text-sm leading-relaxed text-light-muted dark:text-dark-muted">
              {p.text}
            </p>
          </div>
        ))}
      </div>

      {/* ── What we commit to ── */}
      <div className="mx-auto mt-10 w-full max-w-5xl sm:mt-12">
        <p className="mb-4 text-center font-display text-xs font-semibold uppercase tracking-wider text-light-muted dark:text-dark-muted">
          What we commit to
        </p>
        <div className="grid grid-cols-3 gap-3 rounded-3xl border border-light-line bg-light-card p-5 dark:border-dark-line dark:bg-dark-card sm:gap-6 sm:p-8 md:p-10">
          {COMMITMENTS.map((c) => (
            <div key={c.label} className="min-w-0 text-center">
              {c.count != null ? (
                <p
                  className="text-gradient font-display text-3xl font-bold sm:text-4xl md:text-5xl"
                  data-count={c.count}
                  data-suffix={c.suffix}
                >
                  0{c.suffix}
                </p>
              ) : (
                <p className="text-gradient font-display text-3xl font-bold sm:text-4xl md:text-5xl">
                  {c.display}
                  <span className="text-xl sm:text-2xl md:text-3xl">{c.suffix}</span>
                </p>
              )}
              <p className="mt-2 break-words text-[11px] font-medium uppercase leading-tight tracking-wider text-light-muted dark:text-dark-muted sm:text-xs md:text-sm">
                {c.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Tech stack ── */}
      <div className="stack-grid mx-auto mt-10 w-full max-w-5xl sm:mt-12">
        <p className="mb-5 text-center font-display text-xs font-semibold uppercase tracking-wider text-light-muted dark:text-dark-muted">
          The tools we build with
        </p>
        <div className="grid grid-cols-2 gap-3 min-[420px]:grid-cols-3 sm:grid-cols-4 sm:gap-4">
          {STACK.map((s) => (
            <div
              key={s.name}
              className="stack-item group flex min-w-0 items-center gap-2.5 rounded-2xl border border-light-line bg-light-card px-3 py-3 transition-all duration-500 hover:-translate-y-1 hover:border-brand/40 dark:border-dark-line dark:bg-dark-card sm:gap-3 sm:px-4"
            >
              <s.icon className="h-5 w-5 flex-none text-brand transition-transform duration-500 group-hover:scale-110" />
              <span className="min-w-0 truncate font-display text-xs font-semibold sm:text-sm">
                {s.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
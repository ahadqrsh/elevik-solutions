import { useEffect, useRef } from "react";
import { FiArrowRight, FiArrowUpRight } from "react-icons/fi";
import { gsap } from "gsap";
import { heroAnimation } from "../../animations/heroAnimation.js";
import { HERO_CARDS } from "../../utils/data.js";
import MagneticButton from "../ui/MagneticButton.jsx";

export default function Hero() {
  const scope = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      heroAnimation(scope.current);

      // Parallax glow follows the pointer
      const glow = scope.current.querySelector(".hero-glow");
      const onMove = (e) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 40;
        const y = (e.clientY / window.innerHeight - 0.5) * 40;
        gsap.to(glow, { x, y, duration: 1, ease: "power2.out" });
        gsap.to(scope.current.querySelectorAll(".floating-card"), {
          x: (i) => x * (0.2 + i * 0.05),
          y: (i) => y * (0.2 + i * 0.05),
          duration: 1.2,
          ease: "power2.out",
        });
      };
      window.addEventListener("mousemove", onMove);
      return () => window.removeEventListener("mousemove", onMove);
    }, scope);
    return () => ctx.revert();
  }, []);

  const line = (words) => (
    <span className="hero-line block overflow-hidden">
      <span className="block">{words}</span>
    </span>
  );

  return (
    <section id="home" ref={scope} className="relative flex min-h-screen items-center overflow-hidden px-5 pt-32 pb-12 md:px-8">
      {/* Background glow */}
      <div className="hero-glow pointer-events-none absolute left-1/2 top-1/4 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-brand/25 blur-[130px]" />
      <div className="pointer-events-none absolute inset-0 bg-glow-radial opacity-70 dark:opacity-100" />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <span className="hero-cta mb-6 inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/5 px-4 py-1.5 font-display text-xs font-semibold uppercase tracking-wider text-brand">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" /> Premium Digital Agency
          </span>
          <h1 className="font-display text-4xl font-bold leading-[1.05] sm:text-5xl md:text-6xl lg:text-7xl">
            {line("We Build Digital")}
            {line(<>Experiences That</>)}
            {line(<span className="text-gradient">Drive Growth.</span>)}
          </h1>
          <p className="hero-sub mt-7 max-w-xl text-base text-light-muted dark:text-dark-muted md:text-lg">
            Helping businesses grow with stunning websites, Shopify stores, SEO, content creation and performance marketing.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <MagneticButton as="a" href="#contact" className="hero-cta">
              Book Free Consultation <FiArrowRight />
            </MagneticButton>
            <MagneticButton as="a" href="#portfolio" variant="ghost" className="hero-cta">
              Explore Our Work <FiArrowUpRight />
            </MagneticButton>
          </div>
        </div>

        {/* Floating glass service cards */}
        <div className="relative h-[420px] hidden lg:block">
          {HERO_CARDS.map((c, i) => {
            const positions = [
              "top-0 left-4", "top-24 right-0", "top-48 left-0",
              "top-64 right-8", "bottom-0 left-16",
            ];
            return (
              <div
                key={c.label}
                className={`floating-card glass absolute ${positions[i]} flex items-center gap-3 rounded-2xl px-5 py-4 shadow-xl`}
              >
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-gradient text-white">
                  <c.icon />
                </span>
                <span className="font-display text-sm font-semibold">{c.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
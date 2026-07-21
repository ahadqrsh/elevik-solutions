import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Cursor() {
  const dot = useRef(null);
  const ring = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const xTo = gsap.quickTo(ring.current, "x", { duration: 0.5, ease: "power3" });
    const yTo = gsap.quickTo(ring.current, "y", { duration: 0.5, ease: "power3" });
    const xDot = gsap.quickTo(dot.current, "x", { duration: 0.15, ease: "power3" });
    const yDot = gsap.quickTo(dot.current, "y", { duration: 0.15, ease: "power3" });

    const move = (e) => {
      xTo(e.clientX); yTo(e.clientY);
      xDot(e.clientX); yDot(e.clientY);
    };
    const grow = () => gsap.to(ring.current, { scale: 1.8, opacity: 0.5, duration: 0.3 });
    const shrink = () => gsap.to(ring.current, { scale: 1, opacity: 1, duration: 0.3 });

    window.addEventListener("mousemove", move);
    document.querySelectorAll("a,button,.magnetic").forEach((el) => {
      el.addEventListener("mouseenter", grow);
      el.addEventListener("mouseleave", shrink);
    });
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      <div ref={ring} className="pointer-events-none fixed left-0 top-0 z-[90] hidden h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-brand md:block" />
      <div ref={dot} className="pointer-events-none fixed left-0 top-0 z-[90] hidden h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand md:block" />
    </>
  );
}

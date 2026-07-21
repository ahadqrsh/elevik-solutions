import { useRef, useEffect } from "react";
import { gsap } from "gsap";

/** Attaches a magnetic pull effect to any element ref. */
export default function useMagnetic(strength = 0.35) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(pointer: coarse)").matches) return;

    const move = (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - (rect.left + rect.width / 2);
      const y = e.clientY - (rect.top + rect.height / 2);
      gsap.to(el, { x: x * strength, y: y * strength, duration: 0.6, ease: "power3.out" });
    };
    const reset = () => gsap.to(el, { x: 0, y: 0, duration: 0.6, ease: "elastic.out(1,0.4)" });

    el.addEventListener("mousemove", move);
    el.addEventListener("mouseleave", reset);
    return () => {
      el.removeEventListener("mousemove", move);
      el.removeEventListener("mouseleave", reset);
    };
  }, [strength]);

  return ref;
}

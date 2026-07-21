import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * immediateRender:false is critical — it means elements stay in their natural
 * (visible) state until the trigger actually fires, so content can never get
 * "stuck" invisible if a ScrollTrigger position is miscalculated.
 */
export const fadeUp = (targets, scope) =>
  gsap.from(targets, {
    y: 60,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    stagger: 0.12,
    immediateRender: false,
    scrollTrigger: { trigger: scope, start: "top 85%", once: true },
  });

export const fadeIn = (target, dir = "left", scope) => {
  const from = dir === "left" ? { x: -80 } : dir === "right" ? { x: 80 } : { y: 60 };
  return gsap.from(target, {
    ...from,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    immediateRender: false,
    scrollTrigger: { trigger: scope || target, start: "top 85%", once: true },
  });
};

/** Animated number counter driven by scroll. */
export const countUp = (el, end, suffix = "") => {
  const obj = { val: 0 };
  gsap.to(obj, {
    val: end,
    duration: 2,
    ease: "power2.out",
    scrollTrigger: { trigger: el, start: "top 90%", once: true },
    onUpdate: () => {
      el.textContent = Math.floor(obj.val).toLocaleString() + suffix;
    },
  });
};

import { gsap } from "gsap";

/**
 * Uses fromTo + autoAlpha so the navbar is explicitly animated to a fully
 * visible state, and clearProps removes the inline styles afterwards so
 * nothing can leave it stuck at partial opacity (e.g. under StrictMode).
 */
export const navbarEntrance = (el) =>
  gsap.fromTo(
    el,
    { y: -40, autoAlpha: 0 },
    {
      y: 0,
      autoAlpha: 1,
      duration: 1,
      ease: "power3.out",
      delay: 0.2,
      clearProps: "transform,opacity,visibility",
    }
  );

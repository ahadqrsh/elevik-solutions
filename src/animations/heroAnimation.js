import { gsap } from "gsap";

/** Orchestrated hero entrance: split-line headline reveal + floating cards. */
export const heroAnimation = (scope) => {
  const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
  tl.from(scope.querySelectorAll(".hero-line span"), {
    yPercent: 120,
    duration: 1.1,
    stagger: 0.12,
  })
    .from(scope.querySelector(".hero-sub"), { y: 30, opacity: 0, duration: 0.9 }, "-=0.6")
    .from(scope.querySelectorAll(".hero-cta"), { y: 20, opacity: 0, stagger: 0.12, duration: 0.7 }, "-=0.5")
    .from(scope.querySelectorAll(".floating-card"), {
      scale: 0.8,
      opacity: 0,
      y: 40,
      stagger: 0.1,
      duration: 0.9,
    }, "-=0.7");
  return tl;
};

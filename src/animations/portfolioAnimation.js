import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const portfolioAnimation = (scope) =>
  gsap.from(scope.querySelectorAll(".portfolio-item"), {
    y: 80,
    opacity: 0,
    scale: 0.96,
    duration: 1,
    ease: "power3.out",
    stagger: 0.12,
    immediateRender: false,
    scrollTrigger: { trigger: scope, start: "top 82%", once: true },
  });

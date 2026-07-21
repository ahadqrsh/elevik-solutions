import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const footerReveal = (scope) =>
  gsap.from(scope.querySelectorAll(".footer-col"), {
    y: 50,
    opacity: 0,
    duration: 0.9,
    ease: "power3.out",
    stagger: 0.1,
    immediateRender: false,
    scrollTrigger: { trigger: scope, start: "top 95%", once: true },
  });

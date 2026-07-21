import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const servicesAnimation = (scope) =>
  gsap.from(scope.querySelectorAll(".service-card"), {
    y: 70,
    opacity: 0,
    duration: 0.9,
    ease: "power3.out",
    stagger: 0.1,
    immediateRender: false,
    scrollTrigger: { trigger: scope, start: "top 80%", once: true },
  });

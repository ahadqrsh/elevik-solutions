import { Suspense, lazy, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useLenis from "./hooks/useLenis.js";

gsap.registerPlugin(ScrollTrigger);
import Navbar from "./components/layout/Navbar.jsx";
import Hero from "./components/sections/Hero.jsx";
import Loader from "./components/ui/Loader.jsx";
import Cursor from "./components/ui/Cursor.jsx";
import ScrollProgress from "./components/ui/ScrollProgress.jsx";
import BackToTop from "./components/ui/BackToTop.jsx";

// Code-split below-the-fold sections for a fast first paint
const About = lazy(() => import("./components/sections/About.jsx"));
const Services = lazy(() => import("./components/sections/Services.jsx"));
const WhyChooseUs = lazy(() => import("./components/sections/WhyChooseUs.jsx"));
const Process = lazy(() => import("./components/sections/Process.jsx"));
// const Portfolio = lazy(() => import("./components/sections/Portfolio.jsx"));
const Pricing = lazy(() => import("./components/sections/Pricing.jsx"));
const Contact = lazy(() => import("./components/sections/Contact.jsx"));
const Footer = lazy(() => import("./components/layout/Footer.jsx"));
const WorkWithUs = lazy(() => import("./components/sections/WorkWithUs.jsx"));

export default function App() {
  useLenis();

  // Recalculate all scroll-trigger positions once the page has settled:
  // lazy sections mount and web fonts load asynchronously, both of which
  // change layout height and would otherwise leave triggers mispositioned.
  useEffect(() => {
    const refresh = () => ScrollTrigger.refresh();
    const timers = [200, 800, 1600, 2600].map((ms) => setTimeout(refresh, ms));
    window.addEventListener("load", refresh);
    if (document.fonts?.ready) document.fonts.ready.then(refresh);
    return () => {
      timers.forEach(clearTimeout);
      window.removeEventListener("load", refresh);
    };
  }, []);

  return (
    <>
      <Loader />
      <Cursor />
      <ScrollProgress />
      <Navbar />

      <main>
        <Hero />
        <Suspense fallback={<div className="py-20 text-center text-sm text-light-muted dark:text-dark-muted">Loading…</div>}>
          <About />
          <Services />
          <WhyChooseUs />
          <Process />
          <Pricing />
          <WorkWithUs/>
          {/* <Portfolio /> */}
          <Contact />
          <Footer />
        </Suspense>
      </main>

      <BackToTop />
    </>
  );
}
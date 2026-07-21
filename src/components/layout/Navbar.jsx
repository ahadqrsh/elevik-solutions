import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";
import { useTheme } from "../../context/ThemeContext.jsx";
import { NAV_LINKS } from "../../utils/data.js";
import { navbarEntrance } from "../../animations/navbarAnimation.js";
import Logo from "../../assets/Logo.jsx";
import MagneticButton from "../ui/MagneticButton.jsx";

export default function Navbar() {
  const { toggleTheme, isDark } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => navbarEntrance(navRef.current));
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      ctx.revert();
    };
  }, []);

  return (
    <header
      ref={navRef}
      className={`fixed inset-x-0 top-0 z-[60] transition-all duration-500 ${
        scrolled
          ? "border-b border-light-line/70 bg-light-bg/70 py-3 backdrop-blur-xl dark:border-dark-line/70 dark:bg-dark-bg/60"
          : "border-b border-transparent py-5"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 md:px-8">
        <a href="#home" aria-label="Elevik Solutions home"><Logo /></a>

        <ul className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="group relative font-body text-sm font-medium text-light-muted transition-colors hover:text-light-text dark:text-dark-muted dark:hover:text-white"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-[1.5px] w-0 bg-brand transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="magnetic grid h-10 w-10 place-items-center rounded-full border border-light-line text-light-text transition-colors hover:border-brand dark:border-dark-line dark:text-white"
          >
            {isDark ? <FiSun /> : <FiMoon />}
          </button>
          <MagneticButton as="a" href="#contact" className="hidden md:inline-flex">
            Book Consultation
          </MagneticButton>
          <button
            className="grid h-10 w-10 place-items-center rounded-full border border-light-line dark:border-dark-line lg:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-light-line bg-light-bg px-5 py-4 dark:border-dark-line dark:bg-dark-bg lg:hidden">
          <ul className="flex flex-col gap-4">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block font-body text-base text-light-text dark:text-white"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a href="#contact" onClick={() => setOpen(false)} className="mt-2 inline-block rounded-full bg-brand-gradient px-6 py-3 font-display text-sm font-semibold text-white">
                Book Consultation
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

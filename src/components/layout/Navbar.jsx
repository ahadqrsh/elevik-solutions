import { useEffect, useRef, useState, useCallback } from "react";
import { gsap } from "gsap";
import { AnimatePresence, motion } from "framer-motion";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";
import { useTheme } from "../../context/ThemeContext.jsx";
import { NAV_LINKS, WHATSAPP_LINK } from "../../utils/data.js";
import { navbarEntrance } from "../../animations/navbarAnimation.js";
import Logo from "../../assets/Logo.jsx";
import MagneticButton from "../ui/MagneticButton.jsx";

const HINT_KEY = "elevik-theme-hint-seen";
const HINT_DELAY = 2500;   // wait before showing (ms)
const HINT_DURATION = 7000; // auto-dismiss after this (ms)

export default function Navbar() {
  const { toggleTheme, isDark } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [hovered, setHovered] = useState(false);
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

  // First-visit nudge — shows once, then never again.
  useEffect(() => {
    let seen = false;
    try {
      seen = localStorage.getItem(HINT_KEY) === "1";
    } catch {
      seen = true; // private mode / storage blocked → skip the hint
    }
    if (seen) return;

    const showT = setTimeout(() => setShowHint(true), HINT_DELAY);
    const hideT = setTimeout(() => {
      setShowHint(false);
      try { localStorage.setItem(HINT_KEY, "1"); } catch { /* ignore */ }
    }, HINT_DELAY + HINT_DURATION);

    return () => { clearTimeout(showT); clearTimeout(hideT); };
  }, []);

  const dismissHint = useCallback(() => {
    setShowHint(false);
    try { localStorage.setItem(HINT_KEY, "1"); } catch { /* ignore */ }
  }, []);

  const handleToggle = () => {
    dismissHint();
    toggleTheme();
  };

  const tipVisible = showHint || hovered;

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
          {/* ── Theme toggle + notification ── */}
          <div
            className="relative"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <button
              onClick={handleToggle}
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
              className="magnetic relative grid h-10 w-10 place-items-center rounded-full border border-light-line text-light-text transition-colors hover:border-brand dark:border-dark-line dark:text-white"
            >
              {isDark ? <FiSun /> : <FiMoon />}

              {/* Pulsing dot — only while the first-visit hint is up */}
              {showHint && (
                <span className="pointer-events-none absolute -right-0.5 -top-0.5 flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-brand" />
                </span>
              )}
            </button>

            <AnimatePresence>
              {tipVisible && (
                <motion.div
                  initial={{ opacity: 0, y: -6, scale: 0.94 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -6, scale: 0.94 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  role="status"
                  className="pointer-events-none absolute right-0 top-full z-10 mt-3 whitespace-nowrap"
                >
                  {/* arrow */}
                  <span className="absolute right-3.5 -top-1 h-2.5 w-2.5 rotate-45 rounded-[2px] border-l border-t border-light-line bg-light-card dark:border-dark-line dark:bg-dark-card" />
                  <span className="flex items-center gap-2 rounded-xl border border-light-line bg-light-card px-3 py-2 text-xs font-medium shadow-lg dark:border-dark-line dark:bg-dark-card">
                    {isDark ? <FiSun className="text-brand" size={13} /> : <FiMoon className="text-brand" size={13} />}
                    {isDark ? "Switch to light mode" : "Try dark mode"}
                  </span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <MagneticButton as="a" href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="hidden md:inline-flex">
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
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)} className="mt-2 inline-block rounded-full bg-brand-gradient px-6 py-3 font-display text-sm font-semibold text-white">
                Book Consultation
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
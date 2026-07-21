import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { FiInstagram, FiLinkedin, FiTwitter, FiMail, FiPhone } from "react-icons/fi";
import { NAV_LINKS, SERVICES } from "../../utils/data.js";
import { footerReveal } from "../../animations/footerAnimation.js";
import Logo from "../../assets/Logo.jsx";

export default function Footer() {
  const ref = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => footerReveal(ref.current), ref);
    return () => ctx.revert();
  }, []);

  return (
    <footer ref={ref} className="relative overflow-hidden border-t border-light-line bg-light-card px-5 pt-20 pb-8 dark:border-dark-line dark:bg-dark-secondary md:px-8">
      <div className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[600px] -translate-x-1/2 rounded-full bg-brand/20 blur-[120px]" />
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div className="footer-col">
          <Logo />
          <p className="mt-4 max-w-xs text-sm text-light-muted dark:text-dark-muted">
            A premium digital agency building experiences that drive measurable growth for ambitious brands.
          </p>
          <div className="mt-6 flex gap-3">
            {[FiInstagram].map((Icon, i) => (
              <a key={i} href="#" aria-label="social" className="magnetic grid h-10 w-10 place-items-center rounded-full border border-light-line text-light-text transition-colors hover:border-brand hover:text-brand dark:border-dark-line dark:text-white">
                <Icon />
              </a>
            ))}
          </div>
        </div>

        <div className="footer-col">
          <h4 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-light-muted dark:text-dark-muted">Quick Links</h4>
          <ul className="space-y-3">
            {NAV_LINKS.map((l) => (
              <li key={l.href}><a href={l.href} className="text-sm text-light-text transition-colors hover:text-brand dark:text-dark-accent">{l.label}</a></li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-light-muted dark:text-dark-muted">Services</h4>
          <ul className="space-y-3">
            {SERVICES.slice(0, 6).map((s) => (
              <li key={s.title}><a href="#services" className="text-sm text-light-text transition-colors hover:text-brand dark:text-dark-accent">{s.title}</a></li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-light-muted dark:text-dark-muted">Get in touch</h4>
          <a href="mailto:hello@eleviksolutions.com" className="flex items-center gap-2 text-sm text-light-text transition-colors hover:text-brand dark:text-dark-accent">
            <FiMail /> hello@eleviksolutions.com
          </a>
          <a href="tel:+910000000000" className="mt-3 flex items-center gap-2 text-sm text-light-text transition-colors hover:text-brand dark:text-dark-accent">
            <FiPhone /> +91 00000 00000
          </a>
        </div>
      </div>

      <div className="mx-auto mt-16 flex max-w-7xl flex-col items-center justify-between gap-4 border-t border-light-line pt-6 text-sm text-light-muted dark:border-dark-line dark:text-dark-muted md:flex-row">
        <p>© {new Date().getFullYear()} Elevik Solutions. All rights reserved.</p>
        <p>Crafted with precision in India.</p>
      </div>
    </footer>
  );
}

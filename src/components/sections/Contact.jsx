import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { FiMail, FiPhone, FiMapPin, FiClock, FiArrowUpRight } from "react-icons/fi";
import { FaWhatsapp, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { fadeIn } from "../../animations/scrollAnimation.js";
import SectionHeading from "../ui/SectionHeading.jsx";
import MagneticButton from "../ui/MagneticButton.jsx";

// Edit these once — everything on the page reads from here.
const CONTACT = {
  email: "eleviksolutions@gmail.com",
  phone: "+91 72082 27807",
  phoneHref: "tel:+917208227807",
  whatsapp: "https://wa.me/917208227807",
  location: "Serving clients across India",
  hours: "Mon – Sat · 10:00 AM – 11:00 PM IST",
};

const METHODS = [
  { icon: FiMail, label: "Email us", value: CONTACT.email, href: `mailto:${CONTACT.email}` },
  { icon: FiPhone, label: "Call us", value: CONTACT.phone, href: CONTACT.phoneHref },
  { icon: FaWhatsapp, label: "WhatsApp", value: "Message us directly", href: CONTACT.whatsapp },
];

const DETAILS = [
  { icon: FiMapPin, label: "Location", value: CONTACT.location },
  { icon: FiClock, label: "Working hours", value: CONTACT.hours },
];

export default function Contact() {
  const scope = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      fadeIn(".contact-intro", "left", scope.current);
      fadeIn(".contact-cards", "right", scope.current);
    }, scope);
    return () => ctx.revert();
  }, []);

  return (
    <section id="contact" ref={scope} className="relative px-5 py-24 md:px-8 md:py-32">
      <div className="pointer-events-none absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-brand/10 blur-[120px]" />

      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
        {/* Intro */}
        <div className="contact-intro">
          <SectionHeading
            center={false}
            eyebrow="Get in touch"
            title="Let's build your growth story"
            subtitle="Tell us where you want to take your brand and we'll map how to get there — we usually reply within one business day."
          />

          <div className="mt-8 space-y-4">
            {DETAILS.map((d) => (
              <div key={d.label} className="flex items-center gap-4">
                <span className="grid h-11 w-11 flex-none place-items-center rounded-xl bg-brand/10 text-brand">
                  <d.icon size={18} />
                </span>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-light-muted dark:text-dark-muted">{d.label}</p>
                  <p className="text-sm font-medium">{d.value}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <MagneticButton as="a" href={CONTACT.whatsapp} className="!bg-[#25D366] !shadow-[0_10px_40px_-12px_rgba(37,211,102,0.6)]">
              <FaWhatsapp size={18} /> Chat on WhatsApp
            </MagneticButton>
            <div className="flex gap-3">
              {[
                { icon: FaInstagram, href: "https://www.instagram.com/elevik_solutions" }
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  aria-label="social"
                  className="magnetic grid h-11 w-11 place-items-center rounded-full border border-light-line text-light-text transition-colors hover:border-brand hover:text-brand dark:border-dark-line dark:text-white"
                >
                  <s.icon />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Contact method cards */}
        <div className="contact-cards space-y-4">
          {METHODS.map((m) => (
            <a
              key={m.label}
              href={m.href}
              className="group flex items-center gap-5 rounded-3xl border border-light-line bg-light-card p-6 transition-all duration-500 hover:-translate-y-1 hover:border-brand/40 hover:shadow-[0_20px_60px_-24px_rgba(37,99,235,0.45)] dark:border-dark-line dark:bg-dark-card"
            >
              <span className="grid h-14 w-14 flex-none place-items-center rounded-2xl bg-brand/10 text-brand transition-colors duration-500 group-hover:bg-brand-gradient group-hover:text-white">
                <m.icon size={22} />
              </span>
              <div className="flex-1">
                <p className="text-xs font-medium uppercase tracking-wider text-light-muted dark:text-dark-muted">{m.label}</p>
                <p className="font-display text-lg font-semibold">{m.value}</p>
              </div>
              <FiArrowUpRight className="text-light-muted transition-all duration-500 group-hover:translate-x-1 group-hover:text-brand dark:text-dark-muted" size={22} />
            </a>
          ))}

          <p className="pt-2 text-center text-xs text-light-muted dark:text-dark-muted lg:text-left">
            Prefer email? Reach us any time at{" "}
            <a href={`mailto:${CONTACT.email}`} className="font-medium text-brand">{CONTACT.email}</a>
          </p>
        </div>
      </div>
    </section>
  );
}
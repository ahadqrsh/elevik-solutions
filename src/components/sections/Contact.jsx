import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { FiMail, FiPhone, FiMapPin, FiClock, FiArrowUpRight } from "react-icons/fi";
import { FaWhatsapp, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { fadeIn } from "../../animations/scrollAnimation.js";
import { WHATSAPP_LINK } from "../../utils/data.js";
import SectionHeading from "../ui/SectionHeading.jsx";
import MagneticButton from "../ui/MagneticButton.jsx";

// Edit these once — everything on the page reads from here.
const CONTACT = {
  email: "hello@eleviksolutions.com",
  phone: "+91 72082 27807",
  phoneHref: "tel:+917208227807",
  whatsapp: WHATSAPP_LINK,
  location: "Serving clients across India & worldwide",
  hours: "Mon – Sat · 10:00 AM – 7:00 PM IST",
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
    <section id="contact" ref={scope} className="relative px-5 py-16 md:px-8 md:py-24">
      <div className="pointer-events-none absolute left-1/2 top-24 h-[60vw] w-[60vw] max-h-72 max-w-72 -translate-x-1/2 rounded-full bg-brand/10 blur-[120px]" />

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
            <MagneticButton as="a" href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer" className="!bg-[#25D366] !shadow-[0_10px_40px_-12px_rgba(37,211,102,0.6)]">
              <FaWhatsapp size={18} /> Chat on WhatsApp
            </MagneticButton>
            <div className="flex gap-3">
              {[
                { icon: FaInstagram, href: "https://instagram.com/eleviksolutions" },
                { icon: FaLinkedinIn, href: "#" },
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
              className="group flex items-center gap-4 rounded-3xl border border-light-line bg-light-card p-5 sm:gap-5 sm:p-6 transition-all duration-500 hover:-translate-y-1 hover:border-brand/40 hover:shadow-[0_20px_60px_-24px_rgba(37,99,235,0.45)] dark:border-dark-line dark:bg-dark-card"
            >
              <span className="grid h-12 w-12 flex-none place-items-center rounded-2xl bg-brand/10 text-brand transition-colors duration-500 group-hover:bg-brand-gradient group-hover:text-white sm:h-14 sm:w-14">
                <m.icon size={22} />
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-xs font-medium uppercase tracking-wider text-light-muted dark:text-dark-muted">{m.label}</p>
                <p className="break-words font-display text-base font-semibold sm:text-lg">{m.value}</p>
              </div>
              <FiArrowUpRight className="flex-none text-light-muted transition-all duration-500 group-hover:translate-x-1 group-hover:text-brand dark:text-dark-muted" size={22} />
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
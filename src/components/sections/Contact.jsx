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
  email: "eleviksolutions@gmail.com",
  phone: "+91 72082 27807",
  phoneHref: "tel:+917208227807",
  whatsapp: WHATSAPP_LINK,
  location: "Serving clients across India",
  hours: "Mon – Sat · 10:00 AM – 11:00 PM IST",
};

const METHODS = [
  { icon: FiMail, label: "Email us", value: CONTACT.email, href: `mailto:${CONTACT.email}`, tight: true },
  { icon: FiPhone, label: "Call us", value: CONTACT.phone, href: CONTACT.phoneHref },
  { icon: FaWhatsapp, label: "WhatsApp", value: "Message us directly", href: CONTACT.whatsapp, external: true },
];

const DETAILS = [
  { icon: FiMapPin, label: "Location", value: CONTACT.location },
  { icon: FiClock, label: "Working hours", value: CONTACT.hours },
];

const SOCIALS = [
  { icon: FaInstagram, href: "https://www.instagram.com/elevik_solutions", label: "Instagram" }
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
    <section
      id="contact"
      ref={scope}
      className="relative overflow-hidden px-4 py-16 sm:px-5 md:px-8 md:py-24"
    >
      <div className="pointer-events-none absolute left-1/2 top-24 h-[60vw] w-[60vw] max-h-72 max-w-72 -translate-x-1/2 rounded-full bg-brand/10 blur-[120px]" />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-10 md:gap-12 lg:grid-cols-2">
        {/* ---------- Intro ---------- */}
        <div className="contact-intro min-w-0">
          <SectionHeading
            center={false}
            eyebrow="Get in touch"
            title="Let's build your growth story"
            subtitle="Tell us where you want to take your brand and we'll map how to get there — we usually reply within one business day."
          />

          <div className="mt-8 space-y-4">
            {DETAILS.map((d) => (
              <div key={d.label} className="flex items-start gap-3 sm:items-center sm:gap-4">
                <span className="grid h-10 w-10 flex-none place-items-center rounded-xl bg-brand/10 text-brand sm:h-11 sm:w-11">
                  <d.icon size={18} />
                </span>
                <div className="min-w-0">
                  <p className="text-[11px] font-medium uppercase tracking-wider text-light-muted dark:text-dark-muted sm:text-xs">
                    {d.label}
                  </p>
                  <p className="break-words text-sm font-medium leading-snug">{d.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA row — stacks on the narrowest phones, inline from 400px up */}
          <div className="mt-8 flex flex-col items-stretch gap-4 min-[400px]:flex-row min-[400px]:items-center min-[400px]:flex-wrap">
            <MagneticButton
              as="a"
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full justify-center !bg-[#25D366] !shadow-[0_10px_40px_-12px_rgba(37,211,102,0.6)] min-[400px]:w-auto"
            >
              <FaWhatsapp size={18} /> Chat on WhatsApp
            </MagneticButton>

            <div className="flex justify-center gap-3 min-[400px]:justify-start">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="magnetic grid h-11 w-11 flex-none place-items-center rounded-full border border-light-line text-light-text transition-colors hover:border-brand hover:text-brand dark:border-dark-line dark:text-white"
                >
                  <s.icon />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ---------- Contact method cards ---------- */}
        <div className="contact-cards min-w-0 space-y-3 sm:space-y-4">
          {METHODS.map((m) => (
            <a
              key={m.label}
              href={m.href}
              {...(m.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="group flex items-center gap-3 rounded-2xl border border-light-line bg-light-card p-4 transition-all duration-500 hover:-translate-y-1 hover:border-brand/40 hover:shadow-[0_20px_60px_-24px_rgba(37,99,235,0.45)] dark:border-dark-line dark:bg-dark-card sm:gap-5 sm:rounded-3xl sm:p-6"
            >
              <span className="grid h-11 w-11 flex-none place-items-center rounded-xl bg-brand/10 text-brand transition-colors duration-500 group-hover:bg-brand-gradient group-hover:text-white sm:h-14 sm:w-14 sm:rounded-2xl">
                <m.icon className="h-5 w-5 sm:h-[22px] sm:w-[22px]" />
              </span>

              <div className="min-w-0 flex-1">
                <p className="text-[11px] font-medium uppercase tracking-wider text-light-muted dark:text-dark-muted sm:text-xs">
                  {m.label}
                </p>
                <p
                  className={`font-display font-semibold leading-snug ${
                    m.tight
                      ? "break-all text-[13px] sm:text-base md:text-lg"
                      : "break-words text-sm sm:text-base md:text-lg"
                  }`}
                >
                  {m.value}
                </p>
              </div>

              <FiArrowUpRight
                className="hidden flex-none text-light-muted transition-all duration-500 group-hover:translate-x-1 group-hover:text-brand dark:text-dark-muted min-[380px]:block"
                size={20}
              />
            </a>
          ))}

          <p className="break-words pt-2 text-center text-xs leading-relaxed text-light-muted dark:text-dark-muted lg:text-left">
            Prefer email? Reach us any time at{" "}
            <a href={`mailto:${CONTACT.email}`} className="break-all font-medium text-brand">
              {CONTACT.email}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
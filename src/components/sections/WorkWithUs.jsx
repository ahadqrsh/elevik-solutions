import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { FiEye, FiTag, FiUser, FiRefreshCw, FiCheck, FiArrowRight } from "react-icons/fi";
import { fadeUp } from "../../animations/scrollAnimation.js";
import { WHATSAPP_LINK } from "../../utils/data.js";
import SectionHeading from "../ui/SectionHeading.jsx";
import MagneticButton from "../ui/MagneticButton.jsx";

/* ── EDIT ME ────────────────────────────────────────────────
   Keep SPOTS_LEFT accurate — update it as you sign clients.
   If you'd rather not show a count, set it to null.        */
const SPOTS_TOTAL = 5;
const SPOTS_LEFT = 5;

const FOUNDING_PERKS = [
  "Founding rates — locked in for your first 6 months",
  "Priority attention: you're one of very few clients",
  "Direct access to the people building your project",
  "In exchange: an honest review once we deliver",
];

const GUARANTEES = [
  {
    icon: FiEye,
    title: "See it before you pay in full",
    desc: "We share the complete design before the balance is due. If it isn't right, you don't proceed.",
  },
  {
    icon: FiTag,
    title: "Fixed pricing, quoted upfront",
    desc: "The number we agree on is the number you pay. No mid-project surprises or padded invoices.",
  },
  {
    icon: FiUser,
    title: "You talk to the builder",
    desc: "No account managers relaying messages. A direct line to whoever is actually doing the work.",
  },
  {
    icon: FiRefreshCw,
    title: "Revisions until it's right",
    desc: "We keep refining through the agreed scope until you're genuinely happy to launch it.",
  },
];

export default function WorkWithUs() {
  const scope = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      fadeUp(".wwu-item", scope.current);
    }, scope);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="work-with-us"
      ref={scope}
      className="relative overflow-hidden px-4 py-16 sm:px-5 md:px-8 md:py-24"
    >
      <div className="pointer-events-none absolute left-1/2 top-20 h-[60vw] w-[60vw] max-h-72 max-w-72 -translate-x-1/2 rounded-full bg-brand/10 blur-[120px]" />

      <SectionHeading
        eyebrow="Why work with us"
        title="A new studio, with old-fashioned accountability"
        subtitle="We're early — and we'd rather win you over with guarantees than with a wall of logos."
      />

      <div className="mx-auto mt-12 grid w-full max-w-6xl gap-5 lg:grid-cols-[0.95fr_1.05fr] lg:gap-6">
        {/* ── Founding client offer ── */}
        <div className="wwu-item relative flex flex-col overflow-hidden rounded-3xl bg-brand-gradient p-6 text-white shadow-[0_30px_70px_-30px_rgba(37,99,235,0.7)] sm:p-8">
          <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/10 blur-2xl" />

          <div className="relative flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-white/20 px-3 py-1 font-display text-[10px] font-bold uppercase tracking-wider sm:text-[11px]">
              Founding Clients
            </span>
            {SPOTS_LEFT != null && (
              <span className="rounded-full bg-white/10 px-3 py-1 font-display text-[10px] font-semibold uppercase tracking-wider sm:text-[11px]">
                {SPOTS_LEFT} of {SPOTS_TOTAL} spots open
              </span>
            )}
          </div>

          <h3 className="relative mt-5 font-display text-2xl font-bold leading-tight sm:text-3xl">
            Be one of our first five clients
          </h3>
          <p className="relative mt-3 text-sm leading-relaxed text-white/80 sm:text-base">
            We're building our case studies right now. That means you get more of our
            attention than you ever would from an established agency — at rates we
            won't be offering for long.
          </p>

          <ul className="relative mt-6 flex-1 space-y-3">
            {FOUNDING_PERKS.map((p) => (
              <li key={p} className="flex items-start gap-3">
                <span className="mt-0.5 grid h-5 w-5 flex-none place-items-center rounded-full bg-white/20">
                  <FiCheck size={12} />
                </span>
                <span className="min-w-0 break-words text-sm leading-snug text-white/90">{p}</span>
              </li>
            ))}
          </ul>

          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="magnetic relative mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 font-display text-sm font-semibold text-brand transition-transform hover:scale-[1.02]"
          >
            Claim a founding spot <FiArrowRight />
          </a>
        </div>

        {/* ── Guarantees ── */}
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
          {GUARANTEES.map((g) => (
            <div
              key={g.title}
              className="wwu-item group flex min-w-0 flex-col rounded-2xl border border-light-line bg-light-card p-5 transition-all duration-500 hover:-translate-y-1 hover:border-brand/40 hover:shadow-[0_20px_60px_-24px_rgba(37,99,235,0.4)] dark:border-dark-line dark:bg-dark-card sm:rounded-3xl sm:p-6"
            >
              <span className="grid h-11 w-11 flex-none place-items-center rounded-xl bg-brand/10 text-brand transition-colors duration-500 group-hover:bg-brand-gradient group-hover:text-white sm:h-12 sm:w-12 sm:rounded-2xl">
                <g.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 break-words font-display text-base font-semibold leading-snug sm:text-lg">
                {g.title}
              </h3>
              <p className="mt-2 break-words text-sm leading-relaxed text-light-muted dark:text-dark-muted">
                {g.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Honest closing line ── */}
      <p className="wwu-item mx-auto mt-8 max-w-2xl break-words px-2 text-center text-sm leading-relaxed text-light-muted dark:text-dark-muted">
        No inflated client counts, no borrowed case studies. Just work we'll stand
        behind — and a way out if we don't deliver.
      </p>
    </section>
  );
}
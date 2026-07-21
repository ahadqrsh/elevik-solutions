export default function SectionHeading({ eyebrow, title, subtitle, center = true }) {
  return (
    <div className={`max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <span className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/5 px-4 py-1.5 font-display text-xs font-semibold uppercase tracking-wider text-brand">
          <span className="h-1.5 w-1.5 rounded-full bg-brand" /> {eyebrow}
        </span>
      )}
      <h2 className="mt-5 font-display text-3xl font-bold leading-tight md:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base text-light-muted dark:text-dark-muted md:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}

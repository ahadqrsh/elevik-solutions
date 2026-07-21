/**
 * Elevik wordmark. Swap this SVG for your own logo file when ready —
 * everything else references this single component.
 */
export default function Logo({ className = "", showText = true }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg width="32" height="32" viewBox="0 0 64 64" aria-hidden="true">
        <defs>
          <linearGradient id="elevik-g" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#60A5FA" />
            <stop offset="1" stopColor="#1D4ED8" />
          </linearGradient>
        </defs>
        <rect width="64" height="64" rx="16" className="fill-light-card dark:fill-dark-card" />
        <path d="M20 16h24v7H28v6h13v7H28v6h16v7H20z" fill="url(#elevik-g)" />
      </svg>
      {showText && (
        <span className="font-display text-xl font-bold tracking-tight">
          Elevik<span className="text-brand">.</span>
        </span>
      )}
    </span>
  );
}

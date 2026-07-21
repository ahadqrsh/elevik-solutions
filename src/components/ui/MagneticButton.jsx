import useMagnetic from "../../hooks/useMagnetic.js";

export default function MagneticButton({ children, variant = "primary", className = "", as = "button", ...props }) {
  const ref = useMagnetic(0.3);
  const base =
    "magnetic relative inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 font-display text-sm font-semibold transition-colors duration-300 will-change-transform";
  const styles = {
    primary: "bg-brand-gradient text-white shadow-[0_10px_40px_-12px_rgba(37,99,235,0.7)] hover:shadow-[0_16px_50px_-12px_rgba(37,99,235,0.9)]",
    ghost: "border border-light-line dark:border-dark-line text-light-text dark:text-dark-text hover:border-brand",
  };
  const Tag = as;
  return (
    <Tag ref={ref} className={`${base} ${styles[variant]} ${className}`} {...props}>
      {children}
    </Tag>
  );
}

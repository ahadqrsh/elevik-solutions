/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#2563EB",
          light: "#3B82F6",
          glow: "#60A5FA",
          deep: "#1D4ED8",
        },
        light: {
          bg: "#FFFFFF",
          card: "#F8FAFC",
          text: "#111827",
          muted: "#6B7280",
          line: "#E5E7EB",
        },
        dark: {
          bg: "#09090B",
          card: "#161B22",
          secondary: "#0F172A",
          accent: "#D1D5DB",
          text: "#FFFFFF",
          muted: "#94A3B8",
          line: "#1F2630",
        },
      },
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        "glow-radial":
          "radial-gradient(circle at 50% 0%, rgba(37,99,235,0.18), transparent 55%)",
        "brand-gradient":
          "linear-gradient(135deg, #3B82F6 0%, #2563EB 50%, #1D4ED8 100%)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
      },
      animation: {
        marquee: "marquee 40s linear infinite",
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

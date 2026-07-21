import { createContext, useContext, useEffect, useState, useCallback } from "react";

const ThemeContext = createContext(null);

const getInitialTheme = () => {
  if (typeof window === "undefined") return "dark";
  const stored = localStorage.getItem("elevik-theme");
  if (stored === "light" || stored === "dark") return stored;
  // Detect system preference on first visit
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
};

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("theme-transition");
    if (theme === "dark") root.classList.add("dark");
    else root.classList.remove("dark");
    localStorage.setItem("elevik-theme", theme);
    const t = setTimeout(() => root.classList.remove("theme-transition"), 600);
    return () => clearTimeout(t);
  }, [theme]);

  const toggleTheme = useCallback(
    () => setTheme((p) => (p === "dark" ? "light" : "dark")),
    []
  );

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isDark: theme === "dark" }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
};

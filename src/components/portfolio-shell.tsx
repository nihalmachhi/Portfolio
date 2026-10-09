"use client";

import { useCallback, useEffect, useState } from "react";
import { ThemeProvider } from "@/context/theme-context";
import { playThemeSwitchSound } from "@/lib/utils";

export default function PortfolioShell({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [themeReady, setThemeReady] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      const stored = localStorage.getItem("portfolio-theme");
      if (stored === "dark" || stored === "light") setTheme(stored);
      setThemeReady(true);
    });
    return () => cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    if (!themeReady) return;
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("portfolio-theme", theme);
  }, [theme, themeReady]);

  const onToggleTheme = useCallback(() => {
    playThemeSwitchSound();
    setTheme((current) => (current === "dark" ? "light" : "dark"));
  }, []);

  return (
    <ThemeProvider theme={theme} onToggleTheme={onToggleTheme}>
      <div
        suppressHydrationWarning
        className="min-h-screen overflow-x-hidden"
      >
        {children}
      </div>
    </ThemeProvider>
  );
}

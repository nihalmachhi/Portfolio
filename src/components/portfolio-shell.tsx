"use client";

import { useCallback, useEffect, useState } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import CommandPalette from "@/components/command-palette";
import BackgroundGradient from "@/components/background-gradient";
import { ThemeProvider } from "@/context/theme-context";
import { playThemeSwitchSound } from "@/lib/utils";

function readStoredTheme(): "light" | "dark" {
  if (typeof window === "undefined") return "light";
  const stored = localStorage.getItem("portfolio-theme");
  if (stored === "dark" || stored === "light") return stored;
  return "light";
}

export default function PortfolioShell({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [theme, setTheme] = useState<"light" | "dark">(readStoredTheme);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setSearchOpen((open) => !open);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const onToggleTheme = useCallback(() => {
    playThemeSwitchSound();
    setTheme((current) => (current === "dark" ? "light" : "dark"));
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <div
        suppressHydrationWarning
        className="relative min-h-screen overflow-x-hidden text-zinc-900 dark:text-zinc-100"
      >
        <BackgroundGradient theme={theme} />
        <Navbar
          theme={theme}
          onToggleTheme={onToggleTheme}
          onOpenSearch={() => setSearchOpen(true)}
        />
        <div className="pt-[68px]">{children}</div>
        <Footer theme={theme} />
        <CommandPalette
          open={searchOpen}
          onClose={() => setSearchOpen(false)}
          theme={theme}
        />
      </div>
    </ThemeProvider>
  );
}

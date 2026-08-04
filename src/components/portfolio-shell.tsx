"use client";

import { useCallback, useEffect, useState } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import CommandPalette from "@/components/command-palette";
import { ThemeProvider } from "@/context/theme-context";
import { playThemeSwitchSound } from "@/lib/utils";

function readStoredTheme(): "light" | "dark" {
  if (typeof window === "undefined") return "light";
  const stored = localStorage.getItem("portfolio-theme");
  if (stored === "dark" || stored === "light") return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
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
        className={`min-h-screen overflow-x-hidden ${theme === "dark" ? "bg-zinc-950 text-zinc-100" : "bg-zinc-50 text-zinc-900"}`}
      >
        <Navbar
          theme={theme}
          onToggleTheme={onToggleTheme}
          onOpenSearch={() => setSearchOpen(true)}
        />
        {children}
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

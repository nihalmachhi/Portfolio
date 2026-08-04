"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Moon, Search, Sun } from "lucide-react";
import { navItems } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export default function Navbar({
  theme,
  onToggleTheme,
  onOpenSearch,
}: Readonly<{
  theme: "light" | "dark";
  onToggleTheme: () => void;
  onOpenSearch: () => void;
}>) {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 px-4 py-3 backdrop-blur-md sm:px-6 lg:px-8 dark:bg-zinc-950/80">
      <div className="mx-auto flex max-w-4xl items-center justify-between gap-4 py-1">
        <nav className="flex items-center gap-3 overflow-x-auto text-sm text-zinc-500 sm:gap-6 dark:text-zinc-400">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={cn(
                "whitespace-nowrap transition hover:text-zinc-900 dark:hover:text-zinc-100",
                pathname === item.href && "font-medium text-zinc-900 dark:text-zinc-100",
                item.comingSoon && "opacity-70",
              )}
            >
              {item.label}
              {item.comingSoon ? (
                <span className="ml-1 hidden text-[10px] uppercase tracking-wide sm:inline">
                  · soon
                </span>
              ) : null}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <button
            type="button"
            onClick={onOpenSearch}
            className="hidden items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-1.5 text-xs text-zinc-500 shadow-sm transition hover:border-zinc-300 dark:border-white/10 dark:bg-zinc-900 dark:text-zinc-400 md:flex"
          >
            <Search size={16} className="text-zinc-400" />
            <span>Ctrl</span>
            <span className="rounded border border-zinc-200 bg-zinc-50 px-1.5 py-0.5 text-[10px] font-medium text-zinc-500 dark:border-white/10 dark:bg-zinc-950 dark:text-zinc-400">
              K
            </span>
          </button>
          <button
            type="button"
            onClick={onOpenSearch}
            className="rounded-full p-2 text-zinc-700 transition duration-200 hover:scale-105 hover:bg-zinc-100 md:hidden dark:text-zinc-300 dark:hover:bg-zinc-800"
            aria-label="Open search"
          >
            <Search size={18} />
          </button>
          <button
            type="button"
            onClick={onToggleTheme}
            className="rounded-full p-2 text-zinc-700 transition duration-200 hover:scale-105 hover:bg-zinc-100 active:scale-95 dark:text-zinc-300 dark:hover:bg-zinc-800"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </div>
    </header>
  );
}

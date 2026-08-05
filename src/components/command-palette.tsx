"use client";

import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Search, X } from "lucide-react";
import { searchItems } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export default function CommandPalette({
  open,
  onClose,
  theme,
}: Readonly<{
  open: boolean;
  onClose: () => void;
  theme: "light" | "dark";
}>) {
  const [query, setQuery] = useState("");
  const isDark = theme === "dark";

  const handleClose = useCallback(() => {
    setQuery("");
    onClose();
  }, [onClose]);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, handleClose]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return searchItems;
    return searchItems.filter(
      (item) =>
        item.label.toLowerCase().includes(q) ||
        item.group.toLowerCase().includes(q),
    );
  }, [query]);

  const groups = useMemo(() => {
    const map = new Map<string, typeof filtered>();
    for (const item of filtered) {
      const list = map.get(item.group) ?? [];
      list.push(item);
      map.set(item.group, list);
    }
    return [...map.entries()];
  }, [filtered]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center bg-black/40 px-4 pt-[12vh] backdrop-blur-sm"
      onClick={handleClose}
    >
      <div
        className={cn(
          "w-full max-w-lg overflow-hidden rounded-2xl border shadow-2xl",
          isDark
            ? "border-white/10 bg-zinc-900"
            : "border-zinc-200 bg-white",
        )}
        onClick={(event) => event.stopPropagation()}
      >
        <div
          className={cn(
            "flex items-center gap-3 border-b px-4 py-3",
            isDark ? "border-white/10" : "border-zinc-200",
          )}
        >
          <Search size={18} className="text-zinc-400" />
          <input
            autoFocus
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search pages, sections, projects..."
            className={cn(
              "flex-1 bg-transparent text-sm outline-none",
              isDark
                ? "text-zinc-100 placeholder:text-zinc-500"
                : "text-zinc-900 placeholder:text-zinc-400",
            )}
          />
          <button
            type="button"
            onClick={handleClose}
            className="rounded p-1 text-zinc-400 transition hover:bg-zinc-100 hover:text-zinc-600 dark:hover:bg-zinc-800 dark:hover:text-zinc-200"
            aria-label="Close search"
          >
            <X size={16} />
          </button>
        </div>

        <div className="max-h-[50vh] overflow-y-auto p-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {groups.length === 0 ? (
            <p className="px-3 py-6 text-center text-sm text-zinc-500">
              No results found.
            </p>
          ) : (
            groups.map(([group, items]) => (
              <div key={group} className="mb-2">
                <p className="px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-zinc-400">
                  {group}
                </p>
                {items.map((item) => (
                  <Link
                    key={item.id}
                    href={item.href}
                    onClick={handleClose}
                    className={cn(
                      "block rounded-lg px-3 py-2 text-sm transition",
                      isDark
                        ? "text-zinc-200 hover:bg-zinc-800"
                        : "text-zinc-800 hover:bg-zinc-100",
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const sections = [
  { label: "About", href: "/#about", id: "about" },
  { label: "GitHub activity", href: "/#github", id: "github" },
  { label: "Education", href: "/#education", id: "education" },
  { label: "Experience", href: "/#experience", id: "experience" },
  { label: "Projects", href: "/#projects", id: "projects" },
  { label: "Skills", href: "/#skills", id: "skills" },
  { label: "Achievements", href: "/#achievements", id: "achievements" },
  { label: "Hackathons", href: "/#hackathons", id: "hackathons" },
  { label: "Writing", href: "/#blog", id: "blog" },
];

export default function SectionPreviewRail() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState("about");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveId(visible.target.id);
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: [0.05, 0.2, 0.5] },
    );

    sections.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);

  if (pathname !== "/") return null;

  return (
    <aside
      className="fixed right-3 top-1/2 z-40 hidden -translate-y-1/2 xl:block"
      aria-label="Home page sections"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <div className="flex items-center justify-end gap-3">
        <AnimatePresence>
          {open ? (
            <motion.nav
              initial={{ opacity: 0, x: 14 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 14 }}
              transition={{ duration: 0.16, ease: "easeOut" }}
              className="max-h-[32rem] w-72 overflow-y-auto rounded-2xl bg-zinc-100/95 p-2 shadow-xl shadow-zinc-950/15 backdrop-blur-xl dark:bg-zinc-800/95 dark:shadow-black/30"
              aria-label="Portfolio section list"
            >
              {sections.map((section) => (
                <Link
                  key={section.id}
                  href={section.href}
                  onClick={() => setOpen(false)}
                  className={`block rounded-xl px-3 py-2.5 text-sm transition-colors ${
                    activeId === section.id
                      ? "bg-zinc-200 text-zinc-950 dark:bg-zinc-700 dark:text-white"
                      : "text-zinc-700 hover:bg-zinc-200/70 hover:text-zinc-950 dark:text-zinc-200 dark:hover:bg-zinc-700/70 dark:hover:text-white"
                  }`}
                >
                  {section.label}
                </Link>
              ))}
            </motion.nav>
          ) : null}
        </AnimatePresence>

        <nav className="flex w-6 flex-col items-end gap-2 py-3" aria-label="Section progress">
          {sections.map((section) => (
            <Link
              key={section.id}
              href={section.href}
              aria-label={`Go to ${section.label}`}
              onFocus={() => setOpen(true)}
              onBlur={() => setOpen(false)}
              className="flex h-2 w-full items-center justify-end"
            >
              <motion.span
                animate={{
                  width: activeId === section.id ? 24 : 18,
                  opacity: activeId === section.id ? 1 : 0.62,
                }}
                transition={{ duration: 0.16, ease: "easeOut" }}
                className="h-0.5 rounded-full bg-zinc-800 dark:bg-zinc-100"
              />
            </Link>
          ))}
        </nav>
      </div>
    </aside>
  );
}

"use client";

import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";
import { scrollReveal, smoothEase, viewport } from "@/lib/motion";

export default function CardShell({
  id,
  theme,
  children,
  className,
}: Readonly<{
  id?: string;
  theme: "light" | "dark";
  children: React.ReactNode;
  className?: string;
}>) {
  const isDark = theme === "dark";
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.section
      id={id}
      initial={prefersReducedMotion ? false : "hidden"}
      whileInView={prefersReducedMotion ? undefined : "visible"}
      viewport={viewport}
      variants={scrollReveal}
      whileHover={prefersReducedMotion ? undefined : { y: -3 }}
      whileTap={prefersReducedMotion ? undefined : { scale: 0.998 }}
      transition={{ duration: 0.55, ease: smoothEase }}
      className={cn(
        "rounded-[1.25rem] border p-4 shadow-sm backdrop-blur-md transition-[box-shadow,border-color,background-color] duration-300 hover:shadow-lg sm:p-5",
        isDark
          ? "border-white/10 bg-zinc-900/70 hover:border-white/20 hover:bg-zinc-900/85"
          : "border-zinc-200/80 bg-white/75 hover:border-zinc-300 hover:bg-white/90",
        className,
      )}
    >
      {children}
    </motion.section>
  );
}

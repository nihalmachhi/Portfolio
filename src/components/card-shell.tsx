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
      whileHover={prefersReducedMotion ? undefined : { y: -1 }}
      transition={{ duration: 0.55, ease: smoothEase }}
      className={cn(
        "border-t py-7 transition-colors duration-300 sm:py-9",
        isDark
          ? "border-zinc-800 hover:border-zinc-700"
          : "border-zinc-200 hover:border-zinc-300",
        className,
      )}
    >
      {children}
    </motion.section>
  );
}

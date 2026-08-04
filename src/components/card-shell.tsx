"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

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

  return (
    <motion.section
      id={id}
      whileHover={{ y: -2 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className={cn(
        "rounded-[1.25rem] border p-4 shadow-sm backdrop-blur-sm transition-all duration-300 hover:shadow-md sm:p-5",
        isDark
          ? "border-white/10 bg-zinc-900/80 hover:border-white/20 hover:bg-zinc-900/95"
          : "border-zinc-200 bg-white/90 hover:border-zinc-300 hover:bg-white",
        className,
      )}
    >
      {children}
    </motion.section>
  );
}

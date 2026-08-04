"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

export default function Tooltip({
  content,
  children,
  side = "top",
}: Readonly<{
  content: React.ReactNode;
  children: React.ReactNode;
  side?: "top" | "bottom";
}>) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div
      className="relative inline-flex items-center"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      onFocus={() => setIsVisible(true)}
      onBlur={() => setIsVisible(false)}
    >
      {children}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: side === "top" ? 4 : -4, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: side === "top" ? 2 : -2, scale: 0.95 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className={`absolute left-1/2 -translate-x-1/2 z-50 pointer-events-none whitespace-nowrap rounded-md px-2.5 py-1 text-xs font-medium shadow-md ${
              side === "top" ? "-top-8" : "-bottom-8"
            } bg-zinc-900 text-zinc-100 border border-zinc-700/60 dark:bg-zinc-100 dark:text-zinc-900 dark:border-zinc-300/80`}
          >
            {content}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

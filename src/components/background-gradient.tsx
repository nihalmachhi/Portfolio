"use client";

import { motion } from "motion/react";

export default function BackgroundGradient({
  theme,
}: Readonly<{ theme: "light" | "dark" }>) {
  const isDark = theme === "dark";

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div
        className={`absolute inset-0 ${
          isDark
            ? "bg-[radial-gradient(ellipse_at_top,_#18181b_0%,_#09090b_45%,_#030712_100%)]"
            : "bg-[radial-gradient(ellipse_at_top,_#ffffff_0%,_#f8fafc_40%,_#f1f5f9_100%)]"
        }`}
      />

      <motion.div
        animate={{ x: [0, 24, 0], y: [0, -16, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        className={`absolute -left-[10%] -top-[20%] h-[55vh] w-[55vw] rounded-full blur-[100px] ${
          isDark ? "bg-violet-600/14" : "bg-violet-300/35"
        }`}
      />
      <motion.div
        animate={{ x: [0, -20, 0], y: [0, 18, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
        className={`absolute -right-[5%] top-[10%] h-[45vh] w-[45vw] rounded-full blur-[90px] ${
          isDark ? "bg-indigo-500/10" : "bg-sky-200/40"
        }`}
      />
      <motion.div
        animate={{ x: [0, 14, 0], y: [0, 12, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        className={`absolute bottom-[-10%] left-[25%] h-[40vh] w-[40vw] rounded-full blur-[110px] ${
          isDark ? "bg-fuchsia-600/8" : "bg-rose-200/30"
        }`}
      />
    </div>
  );
}

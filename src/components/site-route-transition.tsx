"use client";

import { motion, useReducedMotion } from "motion/react";

export default function SiteRouteTransition({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, filter: "blur(12px)", y: 6 }}
      animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
      transition={{ duration: reduceMotion ? 0 : 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

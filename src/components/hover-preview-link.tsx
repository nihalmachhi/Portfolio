"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";

type HoverPreviewLinkProps = Readonly<{
  href: string;
  previewImage: string;
  previewTitle?: string;
  previewSubtitle?: string;
  external?: boolean;
  children: React.ReactNode;
  className?: string;
}>;

const linkClassName =
  "font-medium italic underline underline-offset-[5px] decoration-zinc-400/80 dark:decoration-zinc-500/90 decoration-[1px] transition-colors duration-200 hover:decoration-zinc-600 dark:hover:decoration-zinc-300";

export default function HoverPreviewLink({
  href,
  previewImage,
  previewTitle,
  previewSubtitle,
  external = false,
  children,
  className = linkClassName,
}: HoverPreviewLinkProps) {
  const [isHovered, setIsHovered] = useState(false);

  const linkProps = {
    href,
    className,
    onMouseEnter: () => setIsHovered(true),
    onMouseLeave: () => setIsHovered(false),
    onFocus: () => setIsHovered(true),
    onBlur: () => setIsHovered(false),
    ...(external ? { target: "_blank" as const, rel: "noreferrer" } : {}),
  };

  return (
    <span className="relative inline">
      {external || href.startsWith("http") || href.startsWith("mailto:") ? (
        <a {...linkProps}>{children}</a>
      ) : (
        <Link {...linkProps}>{children}</Link>
      )}

      <AnimatePresence>
        {isHovered && (
          <motion.span
            initial={{ opacity: 0, y: 6, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.95 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="pointer-events-none absolute bottom-full left-1/2 z-50 mb-2.5 -translate-x-1/2"
          >
            <span className="block overflow-hidden rounded-xl border border-zinc-200/80 bg-white shadow-xl shadow-black/10 dark:border-white/10 dark:bg-zinc-900 dark:shadow-black/40">
              <span className="flex items-center gap-1 border-b border-zinc-100 px-2.5 py-1.5 dark:border-white/5">
                <span className="h-2 w-2 rounded-full bg-red-400" />
                <span className="h-2 w-2 rounded-full bg-amber-400" />
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              <span className="block p-2">
                <Image
                  src={previewImage}
                  alt={previewTitle ?? String(children)}
                  width={140}
                  height={88}
                  className="h-[88px] w-[140px] rounded-md object-cover"
                />
              </span>
              {(previewTitle || previewSubtitle) && (
                <span className="block border-t border-zinc-100 px-2.5 py-2 dark:border-white/5">
                  {previewTitle && (
                    <span className="block truncate text-xs font-medium text-zinc-900 dark:text-zinc-100">
                      {previewTitle}
                    </span>
                  )}
                  {previewSubtitle && (
                    <span className="block truncate text-[11px] text-zinc-500 dark:text-zinc-400">
                      {previewSubtitle}
                    </span>
                  )}
                </span>
              )}
            </span>
          </motion.span>
        )}
      </AnimatePresence>
    </span>
  );
}

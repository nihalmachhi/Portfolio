"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { heroProfile, socialLinks } from "@/data/portfolio";
import CardShell from "@/components/card-shell";
import SectionLabel from "@/components/section-label";

export default function AboutSection({
  theme,
}: Readonly<{ theme: "light" | "dark" }>) {
  const isDark = theme === "dark";

  return (
    <CardShell id="about" theme={theme}>
      <SectionLabel theme={theme}>About</SectionLabel>
      <p
        className={`mt-3 text-sm leading-7 sm:text-base ${isDark ? "text-zinc-300" : "text-zinc-700"}`}
      >
        {heroProfile.about}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {socialLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className={`group inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-md ${
              isDark
                ? "border-white/10 bg-zinc-950/40 text-zinc-300 hover:border-violet-400/40 hover:bg-violet-500/10 hover:text-violet-200"
                : "border-zinc-200 bg-zinc-50 text-zinc-700 hover:border-violet-300 hover:bg-violet-50 hover:text-violet-700"
            }`}
          >
            <span className="font-medium">{link.label}</span>
            <ArrowUpRight
              size={14}
              className="transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        ))}
      </div>
    </CardShell>
  );
}

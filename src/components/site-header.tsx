"use client";

import Image from "next/image";
import { heroProfile, profileImage } from "@/data/portfolio";

export default function SiteHeader({
  email,
  copied,
  onCopy,
}: Readonly<{
  email: string;
  copied: boolean;
  onCopy: () => void;
}>) {
  return (
    <section className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-center sm:gap-5">
      <div className="relative h-18 w-18 shrink-0 overflow-hidden rounded-full border border-zinc-200 bg-zinc-100 shadow-sm sm:h-20 sm:w-20 dark:border-white/10 dark:bg-zinc-800">
        <Image
          src={profileImage}
          alt={heroProfile.name}
          fill
          priority
          sizes="80px"
          className="object-cover"
        />
      </div>

      <div className="min-w-0 pt-1 sm:pt-2">
        <div className="flex flex-wrap items-end gap-x-3 gap-y-1">
          <h1 className="text-3xl font-medium tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-100">
            {heroProfile.name}
          </h1>
          <span className="pb-1 text-base font-semibold text-zinc-900 sm:text-xl dark:text-zinc-100">
            aka {heroProfile.handle}
          </span>
        </div>

        <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs text-zinc-500 sm:text-sm dark:text-zinc-400">
          <span>{heroProfile.role}</span>
          <span aria-hidden="true">•</span>
          <span>{heroProfile.descriptor}</span>
          <span aria-hidden="true">•</span>
          <span className="inline-flex items-center gap-2">
            <span className="break-all">{email}</span>
            <button
              type="button"
              onClick={onCopy}
              className="rounded p-1 transition duration-200 hover:scale-105 hover:bg-zinc-100 dark:hover:bg-zinc-800"
              aria-label="Copy email address"
            >
              {copied ? "✓" : "⧉"}
            </button>
          </span>
        </div>
      </div>
    </section>
  );
}

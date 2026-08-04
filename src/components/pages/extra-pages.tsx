"use client";

import Link from "next/link";
import { ArrowLeft, ArrowUpRight, ImageIcon } from "lucide-react";
import { hackathons, inspirationPeople, blogPosts } from "@/data/portfolio";
import CardShell from "@/components/card-shell";
import SectionLabel from "@/components/section-label";
import { useTheme } from "@/context/theme-context";

const gallerySlots = [
  { label: "KananHack 2026", caption: "Runner-up moment" },
  { label: "Team workspace", caption: "Late-night sprint" },
  { label: "Demo day", caption: "Final presentation" },
  { label: "Favorite memory", caption: "Add your photo here" },
];

export default function HackathonsPageContent() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <main className="mx-auto w-full max-w-4xl px-4 pb-10 pt-7 sm:px-6 lg:px-8 lg:pt-10">
      <Link
        href="/"
        className="mb-6 inline-flex items-center gap-2 text-sm text-zinc-500 transition hover:text-zinc-900 dark:hover:text-zinc-100"
      >
        <ArrowLeft size={16} />
        Back home
      </Link>

      <CardShell theme={theme}>
        <SectionLabel theme={theme}>Hackathons</SectionLabel>
        <h1 className="mt-2 text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl dark:text-zinc-100">
          Sprint memories & events
        </h1>
        <p
          className={`mt-3 text-sm leading-7 sm:text-base ${isDark ? "text-zinc-400" : "text-zinc-600"}`}
        >
          Hackathons I&apos;ve competed in — swap the placeholder images below
          with your favorite moments and working prototype screenshots.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {gallerySlots.map((slot) => (
            <div
              key={slot.label}
              className={`flex aspect-[4/3] flex-col items-center justify-center rounded-2xl border border-dashed p-6 text-center transition duration-300 hover:-translate-y-0.5 ${
                isDark
                  ? "border-white/15 bg-zinc-950/40 text-zinc-400"
                  : "border-zinc-300 bg-zinc-50 text-zinc-500"
              }`}
            >
              <ImageIcon size={28} className="mb-3 opacity-50" />
              <p className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                {slot.label}
              </p>
              <p className="mt-1 text-xs">{slot.caption}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 space-y-3">
          {hackathons.map((item) => (
            <div
              key={item.name}
              className={`rounded-2xl border p-4 ${isDark ? "border-white/10 bg-zinc-950/35" : "border-zinc-200 bg-zinc-50"}`}
            >
              <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">
                {item.name}
              </h3>
              <p className="text-sm text-zinc-500">{item.org}</p>
              {item.note ? (
                <p className="mt-1 text-xs text-violet-600 dark:text-violet-400">
                  {item.note}
                </p>
              ) : null}
            </div>
          ))}
        </div>
      </CardShell>
    </main>
  );
}

export function InspirationPageContent() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <main className="mx-auto w-full max-w-4xl px-4 pb-10 pt-7 sm:px-6 lg:px-8 lg:pt-10">
      <Link
        href="/"
        className="mb-6 inline-flex items-center gap-2 text-sm text-zinc-500 transition hover:text-zinc-900 dark:hover:text-zinc-100"
      >
        <ArrowLeft size={16} />
        Back home
      </Link>

      <CardShell theme={theme}>
        <SectionLabel theme={theme}>Inspiration</SectionLabel>
        <h1 className="mt-2 text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl dark:text-zinc-100">
          People & ideas that shaped my path
        </h1>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {inspirationPeople.map((person) => (
            <a
              key={person.name}
              href={person.href}
              target="_blank"
              rel="noreferrer"
              className={`group rounded-2xl border p-4 transition duration-300 hover:-translate-y-0.5 hover:shadow-md ${
                isDark
                  ? "border-white/10 bg-zinc-950/35 hover:border-violet-400/30"
                  : "border-zinc-200 bg-zinc-50 hover:border-violet-200"
              }`}
            >
              <div className="flex items-start justify-between gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-violet-100 text-sm font-bold text-violet-700 dark:bg-violet-500/20 dark:text-violet-300">
                  {person.name.charAt(0)}
                </div>
                <ArrowUpRight
                  size={14}
                  className="text-zinc-400 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </div>
              <h3 className="mt-3 font-semibold text-zinc-900 dark:text-zinc-100">
                {person.name}
              </h3>
              <p className="text-xs text-violet-600 dark:text-violet-400">
                {person.role}
              </p>
              <p
                className={`mt-2 text-sm leading-7 ${isDark ? "text-zinc-400" : "text-zinc-600"}`}
              >
                {person.blurb}
              </p>
            </a>
          ))}
        </div>

        <div className="mt-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
            ML & AI reads
          </p>
          <div className="mt-3 space-y-3">
            {blogPosts
              .filter((post) => post.tags.includes("ML"))
              .map((post) => (
                <Link
                  key={post.slug}
                  href={`/blogs/${post.slug}`}
                  className={`group flex items-center justify-between rounded-xl border px-4 py-3 text-sm transition hover:-translate-y-0.5 ${
                    isDark ? "border-white/10" : "border-zinc-200"
                  }`}
                >
                  {post.title}
                  <ArrowUpRight
                    size={14}
                    className="text-zinc-400 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>
              ))}
          </div>
        </div>
      </CardShell>
    </main>
  );
}

export function PlayPageContent() {
  const { theme } = useTheme();

  return (
    <main className="mx-auto w-full max-w-4xl px-4 pb-10 pt-7 sm:px-6 lg:px-8 lg:pt-10">
      <Link
        href="/"
        className="mb-6 inline-flex items-center gap-2 text-sm text-zinc-500 transition hover:text-zinc-900 dark:hover:text-zinc-100"
      >
        <ArrowLeft size={16} />
        Back home
      </Link>

      <CardShell theme={theme} className="text-center">
        <SectionLabel theme={theme}>Play</SectionLabel>
        <h1 className="mt-4 text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl dark:text-zinc-100">
          Coming soon
        </h1>
        <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-zinc-500">
          Interactive experiments and mini-games will live here. Stay tuned.
        </p>
        <div className="mx-auto mt-8 flex h-32 w-32 items-center justify-center rounded-full border border-dashed border-zinc-300 dark:border-white/15">
          <span className="text-4xl">🎮</span>
        </div>
      </CardShell>
    </main>
  );
}

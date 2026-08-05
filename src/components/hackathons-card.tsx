"use client";

import { useState } from "react";
import { ChevronDown, Trophy } from "lucide-react";
import { hackathons } from "@/data/portfolio";
import CardShell from "@/components/card-shell";
import SectionLabel from "@/components/section-label";

export default function HackathonsCard({ theme }: Readonly<{ theme: "light" | "dark" }>) {
  const [showAll, setShowAll] = useState(false);
  const items = showAll ? hackathons : hackathons.slice(0, 3);
  return (
    <CardShell id="hackathons" theme={theme}>
      <SectionLabel theme={theme}>Hackathons</SectionLabel>
      <h2 className="mt-3 text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">Built under pressure</h2>
      <div className="mt-5 border-t border-zinc-200 dark:border-zinc-800">
        {items.map((item) => <article key={item.name} className="flex items-start justify-between gap-4 border-b border-zinc-200 py-4 sm:px-2 dark:border-zinc-800"><div className="flex gap-3"><Trophy size={17} className="mt-0.5 shrink-0 text-amber-500" /><div><h3 className="font-medium text-zinc-900 dark:text-zinc-100">{item.name}</h3><p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">{item.org}</p></div></div>{item.note ? <span className="shrink-0 font-mono text-[10px] uppercase text-violet-600 dark:text-violet-400">{item.note}</span> : null}</article>)}
      </div>
      {hackathons.length > 3 ? <div className="mt-5 flex justify-center"><button type="button" onClick={() => setShowAll((value) => !value)} className="inline-flex items-center gap-2 border border-zinc-200 px-4 py-2 font-mono text-xs text-zinc-600 transition hover:border-violet-300 hover:text-violet-600 dark:border-zinc-800 dark:text-zinc-400 dark:hover:border-violet-500/50 dark:hover:text-violet-300">{showAll ? "Show less" : "Show more"}<ChevronDown size={14} className={showAll ? "rotate-180" : ""} /></button></div> : null}
    </CardShell>
  );
}

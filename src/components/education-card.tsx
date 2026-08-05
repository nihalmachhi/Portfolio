import { GraduationCap } from "lucide-react";
import { education } from "@/data/portfolio";
import CardShell from "@/components/card-shell";
import SectionLabel from "@/components/section-label";

export default function EducationCard({ theme }: Readonly<{ theme: "light" | "dark" }>) {
  return (
    <CardShell id="education" theme={theme}>
      <SectionLabel theme={theme}>Education</SectionLabel>
      <h2 className="mt-3 text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">Academic background</h2>
      <div className="mt-5 border-t border-zinc-200 dark:border-zinc-800">
        {education.map((item) => (
          <article key={item.degree} className="grid gap-3 border-b border-zinc-200 py-5 sm:grid-cols-[auto_1fr_auto] sm:items-start sm:gap-4 dark:border-zinc-800">
            <span className="hidden h-9 w-9 items-center justify-center border border-zinc-200 text-zinc-500 sm:flex dark:border-zinc-800 dark:text-zinc-400"><GraduationCap size={17} /></span>
            <div><h3 className="font-medium text-zinc-900 dark:text-zinc-100">{item.degree}</h3><p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">{item.org} · {item.location}</p></div>
            <div className="font-mono text-xs text-zinc-500 sm:text-right dark:text-zinc-400"><p>{item.period}</p><p className="mt-2 text-violet-600 dark:text-violet-400">{item.score}</p></div>
          </article>
        ))}
      </div>
    </CardShell>
  );
}

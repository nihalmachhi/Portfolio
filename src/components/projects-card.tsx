"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { projects } from "@/data/portfolio";
import CardShell from "@/components/card-shell";
import SectionLabel from "@/components/section-label";

export default function ProjectsCard({ theme }: Readonly<{ theme: "light" | "dark" }>) {
  const [openProject, setOpenProject] = useState<string | null>(null);
  const visibleProjects = projects.filter(
    (project) => project.name !== "Portfolio" && project.name !== "Hackathon101",
  );

  return (
    <CardShell id="projects" theme={theme}>
      <SectionLabel theme={theme}>Projects</SectionLabel>
      <h2 className="mt-3 text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
        Things I&apos;ve built
      </h2>
      <div className="mt-5 border-t border-zinc-200 dark:border-zinc-800">
        {visibleProjects.map((project) => {
          const isOpen = openProject === project.name;
          return (
            <article key={project.name} className="border-b border-zinc-200 dark:border-zinc-800">
              <button
                type="button"
                onClick={() => setOpenProject(isOpen ? null : project.name)}
                aria-expanded={isOpen}
                className="group flex w-full items-start justify-between gap-4 py-5 text-left transition-colors hover:bg-zinc-100/70 dark:hover:bg-white/[0.03] sm:px-2"
              >
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-medium text-zinc-900 group-hover:text-violet-600 dark:text-zinc-100 dark:group-hover:text-violet-300">{project.name}</h3>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-emerald-600 dark:text-emerald-400">{project.status}</span>
                  </div>
                  <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">{project.stack}</p>
                </div>
                <ChevronDown size={18} className={`mt-1 shrink-0 text-zinc-400 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
              </button>
              {isOpen ? (
                <div className="pb-5 sm:px-2">
                  <p className="text-sm leading-7 text-zinc-600 dark:text-zinc-400">{project.summary}</p>
                  <ul className="mt-3 space-y-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                    {project.bullets.map((bullet) => <li key={bullet} className="flex gap-2"><span className="text-violet-500">•</span>{bullet}</li>)}
                  </ul>
                </div>
              ) : null}
            </article>
          );
        })}
      </div>
    </CardShell>
  );
}

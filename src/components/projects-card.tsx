import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/portfolio";
import CardShell from "@/components/card-shell";
import SectionLabel from "@/components/section-label";

const statusStyles = {
  Done: "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300",
  "In Progress":
    "bg-amber-100 text-amber-700 dark:bg-amber-500/15 dark:text-amber-300",
  Pending: "bg-zinc-200 text-zinc-600 dark:bg-zinc-700 dark:text-zinc-300",
};

export default function ProjectsCard({
  theme,
}: Readonly<{ theme: "light" | "dark" }>) {
  const isDark = theme === "dark";

  return (
    <CardShell id="projects" theme={theme}>
      <SectionLabel theme={theme}>Projects</SectionLabel>
      <h2 className="mt-2 text-lg font-semibold tracking-tight text-zinc-900 sm:text-xl dark:text-zinc-100">
        Things I&apos;ve built
      </h2>

      <div className="mt-4 space-y-3">
        {projects.map((project) => (
          <article
            key={project.name}
            className="rounded-2xl border border-zinc-200 bg-zinc-50/90 p-4 transition duration-300 hover:-translate-y-0.5 hover:shadow-md dark:border-white/10 dark:bg-zinc-950/35 sm:p-5"
          >
            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-sm font-semibold tracking-tight text-zinc-900 sm:text-base dark:text-zinc-100">
                    {project.name}
                  </h3>
                  <span
                    className={`rounded-full px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wide ${statusStyles[project.status]}`}
                  >
                    {project.status}
                  </span>
                </div>
                <p
                  className={`mt-1 text-sm ${isDark ? "text-zinc-400" : "text-zinc-600"}`}
                >
                  {project.stack}
                </p>
              </div>
              <ArrowUpRight
                className={isDark ? "text-zinc-400" : "text-zinc-500"}
                size={18}
              />
            </div>
            <p
              className={`mt-3 text-sm leading-7 ${isDark ? "text-zinc-400" : "text-zinc-600"}`}
            >
              {project.summary}
            </p>
            <ul className="mt-2 space-y-1">
              {project.bullets.map((bullet) => (
                <li
                  key={bullet}
                  className={`text-sm leading-6 ${isDark ? "text-zinc-500" : "text-zinc-500"}`}
                >
                  • {bullet}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </CardShell>
  );
}

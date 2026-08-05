import { experiences } from "@/data/portfolio";
import CardShell from "@/components/card-shell";
import SectionLabel from "@/components/section-label";

export default function ExperienceCard({
  theme,
}: Readonly<{ theme: "light" | "dark" }>) {
  const isDark = theme === "dark";

  return (
    <CardShell id="experience" theme={theme}>
      <SectionLabel theme={theme}>Experience</SectionLabel>
      <h2 className="mt-2 text-lg font-semibold tracking-tight text-zinc-900 sm:text-xl dark:text-zinc-100">
        Work history
      </h2>

      <div className="mt-5 space-y-6">
        {experiences.map((item) => (
          <article
            key={item.title}
            className="grid gap-3 sm:grid-cols-[minmax(0,1fr)_14rem] sm:gap-8"
          >
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-base font-semibold tracking-tight text-zinc-900 sm:text-lg dark:text-zinc-100">
                  {item.title}
                </h3>
                <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300">
                  {item.status}
                </span>
              </div>
              <p
                className={`mt-1 text-sm sm:text-base ${isDark ? "text-zinc-400" : "text-zinc-600"}`}
              >
                {item.org}
              </p>
              <ul className="mt-3 space-y-1.5">
                {item.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className={`whitespace-nowrap text-xs leading-7 sm:text-sm ${isDark ? "text-zinc-400" : "text-zinc-600"}`}
                  >
                    • {bullet}
                  </li>
                ))}
              </ul>
            </div>

            <div
              className={`text-left text-sm sm:text-right sm:text-base ${isDark ? "text-zinc-400" : "text-zinc-600"}`}
            >
              <p className="whitespace-nowrap font-medium text-zinc-700 dark:text-zinc-300">
                {item.period}
              </p>
              <p className="mt-1 whitespace-nowrap">{item.location}</p>
            </div>
          </article>
        ))}
      </div>
    </CardShell>
  );
}

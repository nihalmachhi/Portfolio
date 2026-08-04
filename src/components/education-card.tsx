import { education } from "@/data/portfolio";
import CardShell from "@/components/card-shell";
import SectionLabel from "@/components/section-label";

export default function EducationCard({
  theme,
}: Readonly<{ theme: "light" | "dark" }>) {
  const isDark = theme === "dark";

  return (
    <CardShell id="education" theme={theme}>
      <SectionLabel theme={theme}>Education</SectionLabel>
      <h2 className="mt-2 text-lg font-semibold tracking-tight text-zinc-900 sm:text-xl dark:text-zinc-100">
        Academic background
      </h2>

      <div className="mt-5 space-y-5">
        {education.map((item) => (
          <article
            key={item.degree}
            className="grid gap-3 sm:grid-cols-[1fr_auto] sm:gap-8"
          >
            <div>
              <h3 className="text-base font-semibold tracking-tight text-zinc-900 sm:text-lg dark:text-zinc-100">
                {item.degree}
              </h3>
              <p
                className={`mt-1 text-sm sm:text-base ${isDark ? "text-zinc-400" : "text-zinc-600"}`}
              >
                {item.org}
              </p>
            </div>
            <div
              className={`text-left text-sm sm:text-right sm:text-base ${isDark ? "text-zinc-400" : "text-zinc-600"}`}
            >
              <p className="font-medium text-zinc-700 dark:text-zinc-300">
                {item.period}
              </p>
              <p className="mt-1">{item.location}</p>
              <p className="mt-1 font-medium text-violet-600 dark:text-violet-400">
                {item.score}
              </p>
            </div>
          </article>
        ))}
      </div>
    </CardShell>
  );
}

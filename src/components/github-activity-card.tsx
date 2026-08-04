"use client";

import { useEffect, useMemo, useState } from "react";
import { githubUsername, type ContributionDay } from "@/data/portfolio";
import CardShell from "@/components/card-shell";
import SectionLabel from "@/components/section-label";

type ContributionResponse = {
  total: number;
  contributions: ContributionDay[];
};

function levelClass(level: number, isDark: boolean) {
  if (level === 0) return isDark ? "bg-violet-950/70" : "bg-violet-100";
  if (level === 1) return isDark ? "bg-violet-800" : "bg-violet-200";
  if (level === 2) return isDark ? "bg-violet-700" : "bg-violet-300";
  if (level === 3) return isDark ? "bg-violet-600" : "bg-violet-400";
  return isDark ? "bg-violet-400" : "bg-violet-600";
}

export default function GitHubActivityCard({
  theme,
}: Readonly<{ theme: "light" | "dark" }>) {
  const [activity, setActivity] = useState<ContributionDay[]>([]);
  const [activityTotal, setActivityTotal] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    const load = async () => {
      try {
        const response = await fetch(
          `https://github-contributions-api.jogruber.de/v4/${githubUsername}?y=last`,
          { cache: "no-store" },
        );
        const data = (await response.json()) as ContributionResponse;
        if (mounted) {
          const contributions = data.contributions ?? [];
          const total = contributions.reduce(
            (sum, day) => sum + (typeof day.count === "number" ? day.count : 0),
            0,
          );
          setActivity(contributions);
          setActivityTotal(total);
        }
      } catch {
        if (mounted) {
          setActivity([]);
          setActivityTotal(0);
        }
      } finally {
        if (mounted) setLoading(false);
      }
    };

    load();
    return () => {
      mounted = false;
    };
  }, []);

  const weeks = useMemo(() => {
    const buckets: ContributionDay[][] = [];
    for (let index = 0; index < activity.length; index += 7) {
      buckets.push(activity.slice(index, index + 7));
    }
    return buckets;
  }, [activity]);

  const isDark = theme === "dark";

  return (
    <CardShell id="github" theme={theme} className="rounded-[1.35rem]">
      <SectionLabel theme={theme}>GitHub Activity</SectionLabel>
      <h2 className="mt-2 text-lg font-semibold tracking-tight text-zinc-900 sm:text-xl dark:text-zinc-100">
        Last year on GitHub
      </h2>

      <div className="mt-4 overflow-x-auto">
        <div className="mb-2 flex min-w-[520px] justify-between text-[10px] font-medium text-zinc-500 sm:min-w-0 sm:text-xs dark:text-zinc-400">
          {[
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
          ].map((label) => (
            <span key={label}>{label}</span>
          ))}
        </div>

        <div
          className="grid min-w-[520px] gap-0.5 rounded-2xl border border-zinc-200 bg-zinc-50 p-2 dark:border-white/10 dark:bg-zinc-950/35 sm:min-w-0 sm:p-3"
          style={{ gridTemplateColumns: "repeat(52, minmax(0, 1fr))" }}
        >
          {loading
            ? Array.from({ length: 52 }).map((_, columnIndex) => (
                <div key={columnIndex} className="grid grid-rows-7 gap-0.5">
                  {Array.from({ length: 7 }).map((__, rowIndex) => (
                    <div
                      key={rowIndex}
                      className={`aspect-square w-full rounded-[3px] ${levelClass(0, isDark)}`}
                    />
                  ))}
                </div>
              ))
            : weeks.map((week, weekIndex) => (
                <div key={weekIndex} className="grid grid-rows-7 gap-0.5">
                  {Array.from({ length: 7 }).map((__, dayIndex) => {
                    const day = week[dayIndex];
                    return (
                      <div
                        key={day?.date ?? `${weekIndex}-${dayIndex}`}
                        title={
                          day
                            ? `${day.count} contributions on ${day.date}`
                            : "No data"
                        }
                        className={`aspect-square w-full rounded-[3px] transition duration-150 hover:scale-110 ${levelClass(day?.level ?? 0, isDark)}`}
                      />
                    );
                  })}
                </div>
              ))}
        </div>

        <div className="mt-3 flex flex-wrap items-center justify-between gap-3 text-[11px] text-zinc-600 sm:text-sm dark:text-zinc-400">
          <p>
            {loading
              ? "Loading contributions..."
              : `${activityTotal} contributions in the last year`}
          </p>
          <div className="flex items-center gap-2">
            <span>Less</span>
            {[0, 1, 2, 3, 4].map((level) => (
              <span
                key={level}
                className={`h-2.5 w-2.5 rounded-sm ${levelClass(level, isDark)}`}
              />
            ))}
            <span>More</span>
          </div>
        </div>
      </div>
    </CardShell>
  );
}

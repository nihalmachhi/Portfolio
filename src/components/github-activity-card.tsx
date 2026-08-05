"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "motion/react";
import { githubUsername, type ContributionDay } from "@/data/portfolio";
import CardShell from "@/components/card-shell";
import SectionLabel from "@/components/section-label";
import Tooltip from "@/components/tooltip";

type ContributionResponse = {
  total: number;
  contributions: ContributionDay[];
};

function levelClass(level: number, isDark: boolean) {
  if (level === 0) {
    return isDark
      ? "bg-zinc-850/60 bg-zinc-800/50 border border-zinc-800/80"
      : "bg-zinc-100 border border-zinc-200/80";
  }
  if (level === 1) {
    return isDark ? "bg-emerald-950/90 text-emerald-300 border border-emerald-800/40" : "bg-emerald-200";
  }
  if (level === 2) {
    return isDark ? "bg-emerald-700/90" : "bg-emerald-300";
  }
  if (level === 3) {
    return isDark ? "bg-emerald-500" : "bg-emerald-400";
  }
  return isDark ? "bg-emerald-400" : "bg-emerald-600";
}

const MONTH_NAMES = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

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
          // Ensure we take the last 52 weeks (364 days) to prevent grid overflow
          const trimmedContributions =
            contributions.length > 364
              ? contributions.slice(contributions.length - 364)
              : contributions;

          const total = trimmedContributions.reduce(
            (sum, day) => sum + (typeof day.count === "number" ? day.count : 0),
            0,
          );
          setActivity(trimmedContributions);
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

  // Compute month positions dynamically for accurate header placement
  const monthLabels = useMemo(() => {
    if (weeks.length === 0) return [];
    const labels: { name: string; weekIndex: number }[] = [];
    let lastMonth = -1;

    weeks.forEach((week, weekIndex) => {
      const firstDay = week[0];
      if (firstDay?.date) {
        const dateObj = new Date(firstDay.date);
        const monthNum = dateObj.getMonth();
        if (monthNum !== lastMonth) {
          labels.push({ name: MONTH_NAMES[monthNum], weekIndex });
          lastMonth = monthNum;
        }
      }
    });
    return labels;
  }, [weeks]);

  const isDark = theme === "dark";
  const numWeeks = weeks.length || 52;

  return (
    <CardShell id="github" theme={theme} className="rounded-[1.35rem]">
      <SectionLabel theme={theme}>GitHub Activity</SectionLabel>
      <div className="mt-2 flex items-center justify-between">
        <h2 className="text-lg font-semibold tracking-tight text-zinc-900 sm:text-xl dark:text-zinc-100">
          Last year on GitHub
        </h2>
        <a
          href={`https://github.com/${githubUsername}`}
          target="_blank"
          rel="noreferrer"
          className="text-xs font-medium text-zinc-500 hover:text-violet-500 transition-colors dark:text-zinc-400 dark:hover:text-violet-400"
        >
          @{githubUsername} ↗
        </a>
      </div>

      <div className="mt-4 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {/* Month Headers */}
        <div
          className="relative mb-2 h-4 text-[11px] font-medium text-zinc-500 dark:text-zinc-400"
          style={{ minWidth: "620px" }}
        >
          {monthLabels.map((m) => (
            <span
              key={`${m.name}-${m.weekIndex}`}
              className="absolute transform -translate-x-1/2"
              style={{
                left: `${(m.weekIndex / numWeeks) * 100}%`,
              }}
            >
              {m.name}
            </span>
          ))}
        </div>

        {/* Heatmap Grid */}
        <div
          className="grid gap-1 rounded-2xl border border-zinc-200 bg-zinc-50/70 p-3 dark:border-white/10 dark:bg-zinc-950/50"
          style={{
            gridTemplateColumns: `repeat(${numWeeks}, minmax(0, 1fr))`,
            minWidth: "620px",
          }}
        >
          {loading
            ? Array.from({ length: 52 }).map((_, columnIndex) => (
                <div key={columnIndex} className="grid grid-rows-7 gap-1">
                  {Array.from({ length: 7 }).map((__, rowIndex) => (
                    <div
                      key={rowIndex}
                      className={`aspect-square w-full rounded-[3px] ${levelClass(0, isDark)}`}
                    />
                  ))}
                </div>
              ))
            : weeks.map((week, weekIndex) => (
                <div key={weekIndex} className="grid grid-rows-7 gap-1">
                  {Array.from({ length: 7 }).map((__, dayIndex) => {
                    const day = week[dayIndex];
                    const level = day?.level ?? 0;
                    return (
                      <Tooltip
                        key={day?.date ?? `${weekIndex}-${dayIndex}`}
                        content={day ? `${day.count} contribution${day.count === 1 ? "" : "s"} on ${day.date}` : "No data"}
                      >
                        <motion.div
                          whileHover={{ scale: 1.35, zIndex: 10 }}
                          transition={{ duration: 0.1 }}
                          className={`aspect-square w-full rounded-[3px] cursor-pointer transition-colors duration-200 ${levelClass(level, isDark)}`}
                        />
                      </Tooltip>
                    );
                  })}
                </div>
              ))}
        </div>

        {/* Footer Summary */}
        <div className="mt-3.5 flex flex-wrap items-center justify-between gap-3 text-xs text-zinc-600 dark:text-zinc-400">
          <p className="font-medium">
            {loading
              ? "Loading contributions..."
              : `${activityTotal.toLocaleString()} contributions in the last year`}
          </p>
          <div className="flex items-center gap-1.5 text-[11px]">
            <span>Less</span>
            {[0, 1, 2, 3, 4].map((level) => (
              <span
                key={level}
                className={`h-3 w-3 rounded-[3px] ${levelClass(level, isDark)}`}
              />
            ))}
            <span>More</span>
          </div>
        </div>
      </div>
    </CardShell>
  );
}

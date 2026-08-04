"use client";

import Link from "next/link";
import { motion } from "motion/react";
import CardShell from "@/components/card-shell";

export default function AboutSection({
  theme,
}: Readonly<{ theme: "light" | "dark" }>) {
  const isDark = theme === "dark";

  return (
    <CardShell id="about" theme={theme} className="py-6 px-5 sm:p-7">
      <div
        className={`flex flex-col gap-5 text-base sm:text-lg font-normal leading-relaxed ${
          isDark ? "text-zinc-300" : "text-zinc-700"
        }`}
      >
        {/* Paragraph 1 */}
        <p>
          I&apos;m a full-stack engineer and builder crafting{" "}
          <span className="font-medium italic underline underline-offset-4 decoration-zinc-400 dark:decoration-zinc-500 hover:decoration-violet-500 hover:text-violet-500 transition-colors duration-200 cursor-default">
            minimal, fast products
          </span>{" "}
          across web platforms and applied AI. Over the past few years, I&apos;ve focused
          on designing beautiful, high-performance software that solves real-world problems.
        </p>

        {/* Paragraph 2 */}
        <p>
          I regularly{" "}
          <Link
            href="/blogs"
            className="font-medium italic underline underline-offset-4 decoration-zinc-400 dark:decoration-zinc-500 hover:decoration-violet-500 hover:text-violet-500 transition-colors duration-200"
          >
            write
          </Link>{" "}
          about my engineering experiments, system architecture, and hard-won
          lessons from my journey as a developer. These notes are my way of
          thinking through challenges and sharing what I&apos;ve learned along the way.
        </p>

        {/* Paragraph 3 */}
        <p>
          When I&apos;m not coding, I love exploring{" "}
          <span className="font-medium italic underline underline-offset-4 decoration-zinc-400 dark:decoration-zinc-500 hover:decoration-violet-500 hover:text-violet-500 transition-colors duration-200 cursor-default">
            applied AI
          </span>
          , competing in hackathons, and contributing to open-source projects. There&apos;s
          something special about building systems from the ground up.
        </p>

        {/* Paragraph 4 */}
        <p>
          Always open to interesting conversations about software design, AI, and startup ideas.{" "}
          <a
            href="mailto:nihalmachhi11@gmail.com"
            className="font-medium italic underline underline-offset-4 decoration-zinc-400 dark:decoration-zinc-500 hover:decoration-violet-500 hover:text-violet-500 transition-colors duration-200"
          >
            Say hello
          </a>{" "}
          or follow me on{" "}
          <Link
            href="https://github.com/nihalmachhi2006"
            target="_blank"
            rel="noreferrer"
            className="font-medium italic underline underline-offset-4 decoration-zinc-400 dark:decoration-zinc-500 hover:decoration-violet-500 hover:text-violet-500 transition-colors duration-200"
          >
            GitHub
          </Link>
          ,{" "}
          <Link
            href="https://www.linkedin.com/in/nihalmachhi2006/"
            target="_blank"
            rel="noreferrer"
            className="font-medium italic underline underline-offset-4 decoration-zinc-400 dark:decoration-zinc-500 hover:decoration-violet-500 hover:text-violet-500 transition-colors duration-200"
          >
            LinkedIn
          </Link>
          , or{" "}
          <Link
            href="https://x.com/nihalmachhi2006"
            target="_blank"
            rel="noreferrer"
            className="font-medium italic underline underline-offset-4 decoration-zinc-400 dark:decoration-zinc-500 hover:decoration-violet-500 hover:text-violet-500 transition-colors duration-200"
          >
            X
          </Link>
          .
        </p>

        {/* Three Colored Dots (Traffic light style matching Image 1) */}
        <div className="mt-4 flex items-center justify-center gap-2.5 pt-2">
          <motion.span
            whileHover={{ scale: 1.4 }}
            className="h-2.5 w-2.5 rounded-full bg-orange-500 shadow-sm"
          />
          <motion.span
            whileHover={{ scale: 1.4 }}
            className="h-2.5 w-2.5 rounded-full bg-amber-400 shadow-sm"
          />
          <motion.span
            whileHover={{ scale: 1.4 }}
            className="h-2.5 w-2.5 rounded-full bg-emerald-500 shadow-sm"
          />
        </div>
      </div>
    </CardShell>
  );
}

"use client";

import Image from "next/image";
import dpImage from "@/assets/dp.jpeg";
import {
  ArrowUpRight,
  BookOpen,
  BriefcaseBusiness,
  Check,
  Code2,
  Copy,
  GraduationCap,
  Lightbulb,
  Mail,
  MonitorPlay,
  Moon,
  Sparkles,
  Sun,
} from "lucide-react";
import { useEffect, useState } from "react";

const projects = [
  {
    title: "Portfolio Platform",
    description:
      "A polished Next.js experience with animated sections, elegant motion, and content-first storytelling.",
    stack: ["Next.js", "TypeScript", "Tailwind"],
  },
  {
    title: "AI Learning Companion",
    description:
      "An interactive study assistant that turns notes into concise learning paths and revision reminders.",
    stack: ["FastAPI", "React", "Pinecone"],
  },
  {
    title: "UPI Without Internet",
    description:
      "A practical proof-of-concept combining offline-first workflows with lightweight system design ideas.",
    stack: ["Python", "System Design", "Research"],
  },
];

const experiences = [
  {
    role: "Placement Coordinator",
    company: "Parul University",
    period: "Aug 2024 — May 2025",
    description:
      "Led student engagement initiatives while sharpening communication and execution skills in a fast-moving environment.",
  },
  {
    role: "Developer & Researcher",
    company: "Independent Projects",
    period: "2024 — Present",
    description:
      "Built AI, web, and product-focused experiments that blend engineering with thoughtful design and learning.",
  },
];

const hackathons = [
  {
    title: "HackHazards '26",
    detail:
      "Built a concept-driven solution focused on AI workflows and practical impact.",
  },
  {
    title: "Meta PyTorch OpenEnv Hackathon",
    detail:
      "Explored modern ML tooling and collaborative development under a tight deadline.",
  },
  {
    title: "Odoo x Parul University",
    detail:
      "Designed a product-minded prototype that balanced usability with technical feasibility.",
  },
];

const inspirations = [
  {
    name: "Andrej Karpathy",
    role: "Deep Learning & Engineering",
  },
  {
    name: "Fei-Fei Li",
    role: "Human-Centered AI",
  },
  {
    name: "Andrew Ng",
    role: "AI Education",
  },
];

const blogPosts = [
  {
    title: "Designing for clarity in modern products",
    blurb:
      "Why restraint, rhythm, and thoughtful motion make interfaces feel calmer and more memorable.",
  },
  {
    title: "Building with AI without losing the craft",
    blurb:
      "Using intelligent tooling as an amplifier for thoughtful engineering rather than a shortcut.",
  },
];

export default function Home() {
  const email = "nihalmachhi11@gmail.com";
  const [copied, setCopied] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const handleCopy = async () => {
    await navigator.clipboard.writeText(email);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const isDark = theme === "dark";
  const cardClass = isDark
    ? "rounded-3xl border border-white/10 bg-zinc-900/80 shadow-[0_20px_60px_rgba(0,0,0,0.28)]"
    : "rounded-3xl border border-zinc-200 bg-white/80 shadow-[0_20px_60px_rgba(15,23,42,0.08)]";
  const mutedText = isDark ? "text-zinc-400" : "text-zinc-600";

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDark
          ? "bg-zinc-950 text-zinc-100"
          : "bg-[radial-gradient(circle_at_top,_rgba(244,244,245,0.9),_transparent_70%)] bg-zinc-50 text-zinc-900"
      }`}
    >
      <main
        id="home"
        className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-5 sm:px-6 lg:px-8 lg:py-8"
      >
        <section className={`${cardClass} overflow-hidden p-6 sm:p-8`}>
          <div className="flex items-center justify-between gap-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200/70 bg-zinc-50/80 px-3 py-1 text-sm font-medium text-zinc-700 dark:border-white/10 dark:bg-zinc-800/70 dark:text-zinc-300">
              <Sparkles size={16} />
              Minimalist animated Next.js portfolio
            </div>
            <button
              onClick={() => setTheme(isDark ? "light" : "dark")}
              className={`rounded-full p-2 transition ${
                isDark
                  ? "bg-zinc-800 text-zinc-100 hover:bg-zinc-700"
                  : "bg-zinc-100 text-zinc-700 hover:bg-zinc-200"
              }`}
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>

          <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-6">
              <div>
                <p
                  className={`text-sm uppercase tracking-[0.35em] ${mutedText}`}
                >
                  Software engineer • polymath • builder
                </p>
                <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
                  I craft calm digital experiences with code, AI, and design.
                </h1>
                <p className={`mt-4 max-w-2xl text-lg leading-8 ${mutedText}`}>
                  I’m Nihal Machhi, a developer focused on clean interfaces,
                  thoughtful systems, and practical product work that feels
                  polished from the first click.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
                >
                  Explore projects <ArrowUpRight size={16} />
                </a>
                <a
                  href="#connect"
                  className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition ${
                    isDark
                      ? "border-white/10 bg-zinc-800/60 hover:bg-zinc-800"
                      : "border-zinc-200 bg-white hover:bg-zinc-50"
                  }`}
                >
                  Let&apos;s connect <Mail size={16} />
                </a>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {[
                  ["10+", "projects"],
                  ["3", "hackathons"],
                  ["∞", "curiosity"],
                ].map(([value, label]) => (
                  <div
                    key={label}
                    className={`rounded-2xl border px-4 py-3 ${
                      isDark
                        ? "border-white/10 bg-zinc-800/60"
                        : "border-zinc-200 bg-zinc-50"
                    }`}
                  >
                    <p className="text-xl font-semibold">{value}</p>
                    <p className={`text-sm ${mutedText}`}>{label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div
              className={`rounded-[2rem] border p-6 ${
                isDark
                  ? "border-white/10 bg-zinc-900/70"
                  : "border-zinc-200 bg-zinc-50/80"
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <Image
                  src={dpImage}
                  alt="Nihal Machhi"
                  width={96}
                  height={96}
                  className="rounded-full border border-zinc-200 object-cover shadow-sm dark:border-white/10"
                />
                <div
                  className={`rounded-full px-3 py-1 text-sm ${
                    isDark
                      ? "bg-emerald-500/15 text-emerald-300"
                      : "bg-emerald-50 text-emerald-700"
                  }`}
                >
                  Open to opportunities
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <div>
                  <p
                    className={`text-sm uppercase tracking-[0.3em] ${mutedText}`}
                  >
                    Current focus
                  </p>
                  <p className="mt-2 text-lg font-medium">
                    Building thoughtful web experiences and AI-powered tools.
                  </p>
                </div>

                <div
                  className={`rounded-2xl border p-4 ${
                    isDark
                      ? "border-white/10 bg-zinc-800/80"
                      : "border-zinc-200 bg-white"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className={`text-sm ${mutedText}`}>Email</span>
                    <button
                      onClick={handleCopy}
                      className={`rounded-full p-2 transition ${
                        isDark ? "hover:bg-zinc-700" : "hover:bg-zinc-100"
                      }`}
                    >
                      {copied ? (
                        <Check size={16} className="text-emerald-500" />
                      ) : (
                        <Copy size={16} />
                      )}
                    </button>
                  </div>
                  <p className="mt-2 font-medium">{email}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className={`${cardClass} p-6 sm:p-8`}>
            <div className="flex items-center gap-2 text-lg font-semibold">
              <Lightbulb size={18} /> About
            </div>
            <p className={`mt-4 text-base leading-8 ${mutedText}`}>
              I like building experiences that feel deliberate: strong ideas,
              careful interfaces, and systems that stay useful as they grow. My
              work sits at the intersection of software engineering, AI, and
              modern product thinking.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {[
                "Next.js",
                "React",
                "TypeScript",
                "Python",
                "Machine Learning",
                "Design Systems",
              ].map((item) => (
                <span
                  key={item}
                  className={`rounded-full px-3 py-1 text-sm ${
                    isDark
                      ? "bg-zinc-800 text-zinc-300"
                      : "bg-zinc-100 text-zinc-700"
                  }`}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className={`${cardClass} p-6 sm:p-8`}>
            <div className="flex items-center gap-2 text-lg font-semibold">
              <Code2 size={18} /> Quick stack
            </div>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {[
                ["Frontend", "React, Next.js, Tailwind"],
                ["Backend", "Node.js, FastAPI, Django"],
                ["Data", "PyTorch, LangChain, Pinecone"],
                ["Cloud", "Firebase, Supabase, Vercel"],
              ].map(([title, detail]) => (
                <div
                  key={title}
                  className={`rounded-2xl border p-4 ${
                    isDark
                      ? "border-white/10 bg-zinc-800/70"
                      : "border-zinc-200 bg-zinc-50"
                  }`}
                >
                  <p className="font-medium">{title}</p>
                  <p className={`mt-1 text-sm ${mutedText}`}>{detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className={`${cardClass} p-6 sm:p-8`}>
          <div className="flex items-center gap-2 text-lg font-semibold">
            <BriefcaseBusiness size={18} /> Experience & Education
          </div>
          <div className="mt-6 grid gap-5 lg:grid-cols-2">
            <div className="space-y-4">
              {experiences.map((item) => (
                <div
                  key={item.role}
                  className={`rounded-2xl border p-4 ${
                    isDark
                      ? "border-white/10 bg-zinc-800/70"
                      : "border-zinc-200 bg-zinc-50"
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <p className="font-semibold">{item.role}</p>
                    <span className={`text-sm ${mutedText}`}>
                      {item.period}
                    </span>
                  </div>
                  <p className={`mt-1 text-sm ${mutedText}`}>{item.company}</p>
                  <p className={`mt-3 text-sm leading-7 ${mutedText}`}>
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
            <div
              className={`rounded-2xl border p-4 ${
                isDark
                  ? "border-white/10 bg-zinc-800/70"
                  : "border-zinc-200 bg-zinc-50"
              }`}
            >
              <div className="flex items-center gap-2 font-semibold">
                <GraduationCap size={18} /> Education
              </div>
              <div className="mt-4 space-y-4">
                {[
                  ["B.Tech CSE (AI/ML)", "Parul University", "CGPA 7.07"],
                  ["Diploma in IT", "Parul University", "CGPA 7.53"],
                  ["SSC", "Sardar Vallabhbhai Vidhyalaya", "56%"],
                ].map(([course, institute, score]) => (
                  <div
                    key={course}
                    className="flex items-start justify-between gap-3 border-b border-zinc-200/80 pb-3 last:border-b-0 last:pb-0 dark:border-white/10"
                  >
                    <div>
                      <p className="font-medium">{course}</p>
                      <p className={`text-sm ${mutedText}`}>{institute}</p>
                    </div>
                    <p className={`text-sm ${mutedText}`}>{score}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className={`${cardClass} p-6 sm:p-8`}>
          <div className="flex items-center gap-2 text-lg font-semibold">
            <MonitorPlay size={18} /> Featured projects
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.title}
                className={`rounded-2xl border p-4 transition hover:-translate-y-1 ${
                  isDark
                    ? "border-white/10 bg-zinc-800/70"
                    : "border-zinc-200 bg-zinc-50"
                }`}
              >
                <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
                  Project
                </p>
                <h3 className="mt-3 text-xl font-semibold">{project.title}</h3>
                <p className={`mt-3 text-sm leading-7 ${mutedText}`}>
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className={`rounded-full px-2.5 py-1 text-xs ${
                        isDark
                          ? "bg-zinc-700 text-zinc-300"
                          : "bg-white text-zinc-700"
                      }`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="hackathons" className={`${cardClass} p-6 sm:p-8`}>
          <div className="flex items-center gap-2 text-lg font-semibold">
            <Sparkles size={18} /> Hackathons & achievements
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {hackathons.map((item) => (
              <div
                key={item.title}
                className={`rounded-2xl border p-4 ${
                  isDark
                    ? "border-white/10 bg-zinc-800/70"
                    : "border-zinc-200 bg-zinc-50"
                }`}
              >
                <h3 className="font-semibold">{item.title}</h3>
                <p className={`mt-2 text-sm leading-7 ${mutedText}`}>
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section id="blog" className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className={`${cardClass} p-6 sm:p-8`}>
            <div className="flex items-center gap-2 text-lg font-semibold">
              <BookOpen size={18} /> Writing & notes
            </div>
            <div className="mt-6 space-y-4">
              {blogPosts.map((post) => (
                <div
                  key={post.title}
                  className={`rounded-2xl border p-4 ${
                    isDark
                      ? "border-white/10 bg-zinc-800/70"
                      : "border-zinc-200 bg-zinc-50"
                  }`}
                >
                  <h3 className="font-semibold">{post.title}</h3>
                  <p className={`mt-2 text-sm leading-7 ${mutedText}`}>
                    {post.blurb}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div id="inspiration" className={`${cardClass} p-6 sm:p-8`}>
            <div className="flex items-center gap-2 text-lg font-semibold">
              <Lightbulb size={18} /> Inspiration
            </div>
            <div className="mt-6 space-y-3">
              {inspirations.map((person) => (
                <div
                  key={person.name}
                  className={`flex items-center justify-between rounded-2xl border px-4 py-3 ${
                    isDark
                      ? "border-white/10 bg-zinc-800/70"
                      : "border-zinc-200 bg-zinc-50"
                  }`}
                >
                  <div>
                    <p className="font-medium">{person.name}</p>
                    <p className={`text-sm ${mutedText}`}>{person.role}</p>
                  </div>
                  <ArrowUpRight size={16} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="connect" className={`${cardClass} p-6 sm:p-8`}>
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className={`text-sm uppercase tracking-[0.3em] ${mutedText}`}>
                Let&apos;s connect
              </p>
              <h2 className="mt-2 text-3xl font-semibold">
                Open to collaborations, learning, and thoughtful projects.
              </h2>
            </div>
            <div className="flex flex-wrap gap-3">
              {[
                { href: "https://github.com/nihalmachhi2006", label: "GH" },
                {
                  href: "https://www.linkedin.com/in/nihalmachhi2006/",
                  label: "in",
                },
                { href: "https://x.com/nihalmachhi2006", label: "X" },
              ].map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className={`rounded-full px-3 py-2 text-sm font-semibold transition ${
                    isDark
                      ? "bg-zinc-800 hover:bg-zinc-700"
                      : "bg-zinc-100 hover:bg-zinc-200"
                  }`}
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer
        className={`border-t px-4 py-6 text-center text-sm ${isDark ? "border-white/10 text-zinc-400" : "border-zinc-200 text-zinc-600"}`}
      >
        Designed and built in Next.js with a calm, minimal visual language.
      </footer>
    </div>
  );
}

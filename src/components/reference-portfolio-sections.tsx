import Link from "next/link";
import { referenceExperience, referencePosts, referenceProjects } from "@/data/reference-portfolio";
import ProjectFlowDiagram, { type ProjectDiagramKind } from "@/components/project-flow-diagram";

export function DotDivider() {
  return (
    <div className="ref-dots" aria-hidden="true">
      <span />
      <span />
      <span />
    </div>
  );
}

function SectionLabel({ children }: Readonly<{ children: React.ReactNode }>) {
  return <h2 className="ref-label">{children}</h2>;
}

export function WritingRows() {
  return (
    <>
      {referencePosts.map((post) => (
        <Link className="ref-line ref-line-link" href={`/blogs/${post.slug}`} key={post.slug}>
          <span><b>{post.title}</b></span>
          <time className="ref-date">{post.date}</time>
        </Link>
      ))}
    </>
  );
}

export function HomeTab() {
  return (
    <section className="ref-page" aria-label="Home">
      <div className="ref-copy">
        <p>I&apos;m a software engineer and a third-year CSE (AI/ML) student at Parul University in Vadodara. Since late 2025 I&apos;ve been freelancing, and I&apos;ve shipped 6+ web apps for clients, from requirements all the way to production.</p>
        <p>Most of my work is React on the front and FastAPI with PostgreSQL behind it. On the side I like going lower level, so I&apos;ve built a multithreaded packet inspection engine and an offline payment protocol just to understand how networks and money actually move.</p>
        <p>Outside of building, I solve DSA problems (500+ on LeetCode, contest rating 1700+) and join hackathons. I was runner-up at KananHack 2026.</p>
        <p>Always open to internship conversations and interesting projects. <a href="mailto:nihalmachhi11@gmail.com">Say hello</a> or find me on <a href="https://github.com/nihalmachhi">GitHub</a> or <a href="https://linkedin.com/in/nihalmachhi">LinkedIn</a>.</p>
      </div>

      <DotDivider />
      <SectionLabel>Work</SectionLabel>
      <div className="ref-work-list">
        {referenceProjects.map((project, index) => (
          <div className="ref-work-row" key={project.name}>
            <span className={`ref-project-icon ref-project-icon-${index}`}>{project.name[0]}</span>
            <b>{project.name}</b><span className="ref-slash">/</span>
            <span className="ref-muted">{[
              "Job postings digest from 3 ATS APIs",
              "Multithreaded packet inspection engine",
              "Offline UPI-style payments over a mesh",
              "Safety gate for AI agent payments",
            ][index]}</span>
          </div>
        ))}
      </div>

      <DotDivider />
      <SectionLabel>Experience</SectionLabel>
      {referenceExperience.map((item) => (
        <div className="ref-line" key={item.title}>
          <span><b>{item.title}</b><span className="ref-muted"> &nbsp;{item.org}</span></span>
          <time className="ref-date">{item.period}</time>
        </div>
      ))}

      <DotDivider />
      <SectionLabel>Writing</SectionLabel>
      <WritingRows />
      <Link className="ref-more" href="/blogs">View all →</Link>
    </section>
  );
}

const projectDetails: Record<string, {
  description: string;
  kind: ProjectDiagramKind;
  stats: [string, string][];
  href: string;
  demo?: string;
}> = {
  "DPI-Engine": {
    description: "A multithreaded engine that reads PCAP traffic, identifies apps in each flow, then allows or blocks traffic by rule.",
    kind: "dpi",
    stats: [["10K+", "packets / sec"], ["50+", "PCAP flows"], ["34", "tests"]],
    href: "https://github.com/nihalmachhi/Deep-Packet-Inspection-DPI-Engine",
  },
  MeshPay: {
    description: "UPI-style payments that work offline. Devices relay encrypted packets until one reaches a bridge that records the payment.",
    kind: "meshpay",
    stats: [["5", "device mesh"], ["100%", "replays blocked"], ["20+", "tests"]],
    href: "https://github.com/nihalmachhi/MeshPay",
  },
  AgentGate: {
    description: "A policy gate between an LLM shopping agent and Razorpay. Every API call is checked, and every decision is written to an audit log.",
    kind: "agentgate",
    stats: [["3", "policies"], ["2", "recovery tools"], ["6", "audit fields"]],
    href: "https://github.com/nihalmachhi",
  },
  OpenHunt: {
    description: "Collects public job postings, filters out noise, optionally scores matches with an LLM, and builds a weekday digest for review.",
    kind: "openhunt",
    stats: [["3", "ATS APIs"], ["0", "manual first pass"]],
    href: "https://github.com/nihalmachhi",
  },
  TrackitNow: {
    description: "A task and habit tracker where completed tasks build streaks, points, badges, and a GitHub-style activity graph, with friends and chat alongside.",
    kind: "trackitnow",
    stats: [["7", "tables"], ["6", "API areas"], ["Streaks", "from completed tasks"]],
    href: "https://github.com/nihalmachhi/TrackitNow",
    demo: "https://trackitnow.vercel.app",
  },
};

const projectDisplayOrder = ["DPI-Engine", "MeshPay", "AgentGate", "OpenHunt", "TrackitNow"];
const trackItNowProject = {
  name: "TrackitNow",
  period: "",
  stack: ["React", "TypeScript", "FastAPI", "PostgreSQL", "Tailwind"],
  bullets: [],
};

export function ProjectsTab() {
  const projects = projectDisplayOrder
    .map((name) => name === "TrackitNow"
      ? trackItNowProject
      : referenceProjects.find((project) => project.name === name))
    .filter((project): project is (typeof referenceProjects)[number] => Boolean(project));

  return (
    <section className="ref-page ref-projects-page" aria-label="Projects">
      <h2 className="ref-projects-title">Things I&apos;ve <i>built</i></h2>
      <p className="ref-projects-intro">Five projects, drawn the way they actually work. Each diagram shows how data moves through the system.</p>
      {projects.map((project, index) => {
        const details = projectDetails[project.name];
        return (
          <article className="ref-project-card" key={project.name}>
            {index > 0 && <DotDivider />}
            <div className="ref-project-heading">
              <h3>{project.name}</h3>
              {project.period && <time className="ref-date">{project.period.replace(".", ". ")}</time>}
            </div>
            <p className="ref-project-summary">{details.description}</p>
            <ProjectFlowDiagram kind={details.kind} label={project.name} />
            <div className="ref-project-stats">
              {details.stats.map(([value, label]) => (
                <div className="ref-project-stat" key={label}>
                  <b>{value}</b><span>{label}</span>
                </div>
              ))}
            </div>
            <p className="ref-project-stack">{project.stack.join(" · ")}</p>
            <a className="ref-project-link" href={details.href} target="_blank" rel="noreferrer">View on GitHub →</a>
            {details.demo && <a className="ref-project-link ref-project-demo" href={details.demo} target="_blank" rel="noreferrer">Live demo ↗</a>}
          </article>
        );
      })}
      <DotDivider />
      <p className="ref-projects-more">More on <a href="https://github.com/nihalmachhi" target="_blank" rel="noreferrer">GitHub</a></p>
    </section>
  );
}

export function WritingTab() {
  return (
    <section className="ref-page" aria-label="Writing">
      <p className="ref-intro">Notes on engineering, design, and learning in public.</p>
      <div className="ref-writing-list"><WritingRows /></div>
    </section>
  );
}

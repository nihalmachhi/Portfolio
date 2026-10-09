import Link from "next/link";
import { referenceExperience, referencePosts, referenceProjects } from "@/data/reference-portfolio";

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

export function ProjectsTab() {
  return (
    <section className="ref-page" aria-label="Projects">
      <p className="ref-intro">Things I&apos;ve built to learn, to ship for clients, or just because I got curious. Some are polished, others are still moving.</p>
      {referenceProjects.map((project) => (
        <article className="ref-project" key={project.name}>
          <h2><span>{project.name}</span><time className="ref-date">{project.period}</time></h2>
          <p className="ref-tech">{project.stack.join(" · ")}</p>
          <ul>{project.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
        </article>
      ))}
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

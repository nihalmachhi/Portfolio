export type ContributionDay = {
  date: string;
  count: number;
  level: number;
};

export type SocialLink = {
  label: string;
  href: string;
  handle: string;
  previewImage?: string;
};

export type AboutPreviewLink = {
  label: string;
  href: string;
  previewImage: string;
  previewTitle: string;
  previewSubtitle?: string;
  external?: boolean;
};

export type Education = {
  degree: string;
  org: string;
  period: string;
  location: string;
  score: string;
};

export type Experience = {
  title: string;
  org: string;
  period: string;
  location: string;
  status: string;
  bullets: string[];
};

export type Project = {
  name: string;
  stack: string;
  status: "Done" | "In Progress" | "Pending";
  summary: string;
  bullets: string[];
  href?: string;
};

export type Hackathon = {
  name: string;
  org: string;
  note?: string;
};

export type Certification = {
  name: string;
  status: "Done" | "In Progress";
  href: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  blurb: string;
  date: string;
  readTime: string;
  tags: string[];
  content: string[];
};

export type InspirationPerson = {
  name: string;
  role: string;
  blurb: string;
  href: string;
};

export type SearchItem = {
  id: string;
  label: string;
  group: string;
  href: string;
};

export const githubUsername = "nihalmachhi2006";
export const profileImage =
  "https://avatars.githubusercontent.com/u/183213542?v=4";

export const heroProfile = {
  name: "Nihal Machhi",
  handle: "@nihalmachhi2006",
  role: "Software Engineer",
  descriptor: "polymath",
  tagline: "Love to build cool stuff, Engineer & polymath.",
  email: "nihalmachhi11@gmail.com",
  phone: "+91 87803-39304",
  about:
    "I build minimal, fast products across full-stack engineering and applied AI — from real-time network systems to offline payment protocols and habit trackers. Currently pursuing B.Tech in CSE (AI/ML) at Parul University while shipping side projects and competing in hackathons.",
};

export const navItems: {
  label: string;
  href: string;
  comingSoon?: boolean;
}[] = [
  { label: "Home", href: "/" },
  { label: "Blogs", href: "/blogs" },
  { label: "Inspiration", href: "/inspiration" },
  { label: "Hackathons", href: "/hackathons" },
  { label: "Play", href: "/play", comingSoon: true },
];

export const socialLinks: SocialLink[] = [
  {
    label: "X",
    href: "https://x.com/nihalmachhi2006",
    handle: "nihalmachhi2006",
    previewImage: "https://unavatar.io/x/nihalmachhi2006",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/nihalmachhi2006/",
    handle: "nihalmachhi2006",
    previewImage: "https://unavatar.io/linkedin/nihalmachhi2006",
  },
  {
    label: "GitHub",
    href: "https://github.com/nihalmachhi2006",
    handle: "nihalmachhi2006",
    previewImage: profileImage,
  },
  {
    label: "LeetCode",
    href: "https://leetcode.com/u/nihalmachhi2006/",
    handle: "nihalmachhi2006",
    previewImage: "https://unavatar.io/leetcode/nihalmachhi2006",
  },
  {
    label: "CodeChef",
    href: "https://www.codechef.com/users/nihalmachhi",
    handle: "nihalmachhi",
    previewImage: "https://unavatar.io/codechef/nihalmachhi",
  },
  {
    label: "Codeforces",
    href: "https://codeforces.com/profile/nihalmachhi",
    handle: "nihalmachhi",
    previewImage: "https://unavatar.io/codeforces/nihalmachhi",
  },
  {
    label: "HackerRank",
    href: "https://www.hackerrank.com/profile/nihalmachhi2006",
    handle: "nihalmachhi2006",
    previewImage: "https://unavatar.io/hackerrank/nihalmachhi2006",
  },
  {
    label: "Kaggle",
    href: "https://www.kaggle.com/nihalmachhi",
    handle: "nihalmachhi",
    previewImage: "https://unavatar.io/kaggle/nihalmachhi",
  },
];

export const aboutPreviewLinks = {
  products: {
    label: "minimal, fast products",
    href: "https://github.com/nihalmachhi2006",
    previewImage: profileImage,
    previewTitle: "Projects & builds",
    previewSubtitle: "@nihalmachhi2006 on GitHub",
    external: true,
  },
  write: {
    label: "write",
    href: "/blogs",
    previewImage: profileImage,
    previewTitle: "Blog & notes",
    previewSubtitle: "Engineering essays & learnings",
  },
  appliedAi: {
    label: "applied AI",
    href: "https://www.kaggle.com/nihalmachhi",
    previewImage: "https://unavatar.io/kaggle/nihalmachhi",
    previewTitle: "Applied AI",
    previewSubtitle: "@nihalmachhi on Kaggle",
    external: true,
  },
  sayHello: {
    label: "Say hello",
    href: "mailto:nihalmachhi11@gmail.com",
    previewImage: profileImage,
    previewTitle: heroProfile.name,
    previewSubtitle: heroProfile.email,
    external: true,
  },
} satisfies Record<string, AboutPreviewLink>;

export const education: Education[] = [
  {
    degree: "B.Tech — Computer Science & Engineering (AI/ML)",
    org: "Parul University",
    period: "Sep 2025 – May 2028",
    location: "Vadodara, GJ",
    score: "CGPA 7.07",
  },
  {
    degree: "Diploma — Information Technology",
    org: "Parul University",
    period: "Sep 2022 – May 2025",
    location: "Vadodara, GJ",
    score: "CGPA 7.53",
  },
  {
    degree: "SSC — 10th",
    org: "Sardar Vallabhbhai Vidhyalaya",
    period: "2021 - 2022",
    location: "Gujarat, India",
    score: "56%",
  },
];

export const experiences: Experience[] = [
  {
    title: "Placement Coordinator Intern",
    org: "Parul University",
    period: "Aug 2024 – May 2025",
    location: "Vadodara, GJ (On-Site)",
    status: "Completed",
    bullets: [
      "Coordinated 20+ recruitment drives by managing student-company data and placement workflows.",
      "Collaborated with 15+ recruiters and placement teams, supporting 80+ student placements.",
      "Maintained and updated placement databases, ensuring accurate student and recruiter records.",
    ],
  },
];

export const projects: Project[] = [
  {
    name: "DPI-Engine",
    stack: "Python, FastAPI, Scapy, Jinja2, WebSockets, Uvicorn",
    status: "Done",
    summary:
      "Real-time DPI engine processing 10K+ packets/sec with protocol fingerprinting and packet pipeline validation.",
    bullets: [
      "Built multi-threaded consistent-hash pipeline processing 10K+ packets/sec.",
      "Implemented TLS SNI, HTTP Host, and DNS fingerprinting across 50+ live flows.",
      "Designed producer-consumer pipeline with sentinel shutdown and zero-copy buffers.",
      "Validated with 34-test suite covering TCP reassembly and malformed packets.",
    ],
  },
  {
    name: "MeshPay",
    stack: "Python, FastAPI, Uvicorn, Cryptography, Pydantic, Pytest, HTTPX",
    status: "Done",
    summary:
      "Offline UPI protocol with public-key crypto, QR handshake, and signed receipts for double-spend protection.",
    bullets: [
      "Designed offline UPI protocol using public-key crypto for internet-free P2P payments.",
      "Built QR-based handshake and multi-device relay with signed receipts blocking double-spending.",
      "Wrote Pytest/HTTPX suite covering verification, request handling, and failure edge cases.",
    ],
  },
  {
    name: "AgentGate",
    stack: "Python, FastAPI, SQLite, Pydantic, Groq API, Razorpay API, Pytest",
    status: "Done",
    summary:
      "A Trust Gate for AI Commerce: Every Agent Payment, Inspected Before It Spends",
    bullets: [
      "Built trust-and-inspection gate for AI agent commerce, built for Razorpay's AI Buildathon",
      "Enforced per-session spend caps, quantity limits, and rate limits before requests reach Razorpay's API",
      "Logged every allow/block decision with reasoning to a persistent SQLite audit trail, validated by test suite",
    ],
  },
  // {
  //   name: "Portfolio",
  //   stack: "Next.js, TypeScript, Tailwind CSS, Motion",
  //   status: "In Progress",
  //   summary:
  //     "Minimal personal portfolio with theme toggle, command palette search, and animated sections.",
  //   bullets: [
  //     "Responsive layout with light/dark themes and GitHub contribution chart.",
  //     "Command palette navigation via Ctrl+K across pages and sections.",
  //   ],
  // },
  // {
  //   name: "Hackathon101",
  //   stack: "Next.js, TypeScript",
  //   status: "Pending",
  //   summary:
  //     "A curated hub for hackathon prep — resources, timelines, and project starters.",
  //   bullets: ["Coming soon — templates and checklists for 24–48hr sprints."],
  // },
];

export const hackathons: Hackathon[] = [
  {
    name: "KananHack 2026",
    org: "Kanan × Parul University",
    note: "Runner-Up among 24 teams",
  },
  {
    name: "Google The Big Code",
    org: "Google",
  },
  {
    name: "Odoo × Parul University",
    org: "Odoo",
  },
  {
    name: "Meta PyTorch OpenEnv Hackathon",
    org: "Scaler School of Technology",
  },
  {
    name: "HACKHAZARDS '26",
    org: "Namespace",
  },
  {
    name: "HackerRank Orchestrate",
    org: "HackerRank",
  },
];

export const certifications: Certification[] = [
  {
    name: "Claude 101",
    status: "Done",
    href: "https://verify.skilljar.com/c/992r3pydjrs7",
  },
  {
    name: "Claude Code 101",
    status: "Done",
    href: "https://verify.skilljar.com/c/q4yi7japbmyv",
  },
  {
    name: "Building with the Claude API",
    status: "Done",
    href: "https://verify.skilljar.com/c/vuk2um5cthsg",
  },
];

export const skillGroups = [
  {
    label: "Programming",
    items: ["C", "C++", "Java", "Python", "JavaScript", "TypeScript", "SQL"],
  },
  {
    label: "Full Stack",
    items: [
      "React.js",
      "Next.js",
      "Node.js",
      "Express.js",
      "Django",
      "Flask",
      "FastAPI",
      "REST APIs",
    ],
  },
  {
    label: "AI & ML",
    items: [
      "PyTorch",
      "Hugging Face",
      "LangChain",
      "Pinecone",
      "OpenCV",
      "Gemini API",
    ],
  },
  {
    label: "Cloud & DevOps",
    items: [
      "MongoDB",
      "PostgreSQL",
      "Firebase",
      "Firestore",
      "GCP",
      "Supabase",
      "Docker",
    ],
  },
  {
    label: "Tools",
    items: [
      "Git/GitHub",
      "Linux/Unix",
      "Postman",
      "Vercel",
      "Streamlit",
    ],
  },
];

export const blogPosts: BlogPost[] = [
  {
    slug: "building-with-ai-without-losing-craft",
    title: "Building products with AI without losing craft",
    blurb:
      "How to use AI tooling as an accelerator for thoughtful engineering instead of a shortcut.",
    date: "Feb 2026",
    readTime: "4 min read",
    tags: ["AI", "Engineering"],
    content: [
      "AI assistants are everywhere in modern development workflows. The trap is treating them as a replacement for thinking — copy-pasting outputs until something compiles. The better frame: AI as a fast collaborator that still needs your taste, architecture, and judgment.",
      "Start with a clear spec. Before prompting, write down inputs, outputs, edge cases, and what “done” looks like. This single step prevents most hallucinated abstractions and keeps the codebase coherent.",
      "Use AI for scaffolding and exploration — boilerplate, test stubs, regex, docs drafts — then review every line like a PR from a junior dev. Your job shifts from typing to editing, validating, and integrating.",
      "Preserve craft by keeping interfaces human-readable, naming things well, and deleting generated noise. Minimal code that you fully understand beats a clever blob you can't debug at 2 AM.",
      "The teams shipping the best AI-augmented products treat the model as a multiplier on clarity, not a substitute for it.",
    ],
  },
  {
    slug: "why-clear-interfaces-feel-faster",
    title: "Why clear interfaces feel faster",
    blurb:
      "A short note on spacing, hierarchy, and why calmer UI is often the better UI.",
    date: "Jan 2026",
    readTime: "3 min read",
    tags: ["Design", "UX"],
    content: [
      "Perceived performance is often a layout problem. When hierarchy is muddy, users scan longer, miss affordances, and assume the product is slow — even if latency is fine.",
      "Generous whitespace isn't wasted space. It groups related content, reduces cognitive load, and makes primary actions obvious. One clear CTA beats five equal-weight buttons.",
      "Typography scale matters more than animation budget. Consistent type sizes and line heights create rhythm; users navigate by structure instead of hunting pixel by pixel.",
      "Micro-interactions should confirm, not distract. A subtle hover lift, a copy confirmation, a theme switch sound — small signals that the system responded.",
      "Calm UI ages well. Flashy gradients date quickly; clear spacing and readable contrast don't.",
    ],
  },
  {
    slug: "ml-learning-path-for-engineers",
    title: "A practical ML learning path for software engineers",
    blurb:
      "From linear algebra refreshes to shipping a fine-tuned model — a roadmap that respects your time.",
    date: "Mar 2026",
    readTime: "6 min read",
    tags: ["ML", "Learning"],
    content: [
      "If you already ship web apps, you have a head start: data pipelines, debugging, and API design transfer directly to ML systems. The gap is mostly math intuition and experiment discipline.",
      "Phase 1 — foundations: refresh linear algebra (vectors, matrices, dot products), basic probability, and Python numerics with NumPy. Pair this with Andrew Ng's ML fundamentals or fast.ai's practical first pass.",
      "Phase 2 — deep learning: learn PyTorch tensors, autograd, and a simple training loop. Build a tiny classifier on a dataset you care about — not MNIST unless you must. Log everything.",
      "Phase 3 — applied AI: Hugging Face for models, LangChain or raw APIs for agents, vector DBs for retrieval. Focus on evaluation: if you can't measure quality, you can't improve it.",
      "Ship one end-to-end project: ingest → embed → retrieve → respond, with tests and a README. That artifact teaches more than a dozen half-finished notebooks.",
    ],
  },
  {
    slug: "notes-from-hackathon-sprints",
    title: "Notes from 24-hour hackathon sprints",
    blurb:
      "What actually wins in short sprints — scope cuts, demo paths, and team roles.",
    date: "Feb 2026",
    readTime: "5 min read",
    tags: ["Hackathons", "Product"],
    content: [
      "Hackathons reward demos, not perfection. Pick one user story that fits in 90 seconds on stage and build backward from that path.",
      "Split roles early: one person owns the narrative and slides, one owns the happy-path integration, one keeps the dev environment stable. Rotating without roles creates thrash.",
      "Cut scope aggressively after hour six. If a feature isn't on the demo path, it goes to the README as “future work.” Judges rarely ask about your backlog.",
      "Integrate continuously. A ugly end-to-end flow at hour 10 beats beautiful components that don't connect at hour 23.",
      "Sleep, hydrate, and rehearse the demo twice. Runner-up finishes often lose on presentation, not code.",
    ],
  },
];

export const inspirationPeople: InspirationPerson[] = [
  {
    name: "Andrew Ng",
    role: "AI educator & DeepLearning.AI founder",
    blurb:
      "Made ML accessible to millions. His focus on practical pedagogy shaped how I think about learning paths.",
    href: "https://www.andrewng.org/",
  },
  {
    name: "Andrej Karpathy",
    role: "AI researcher & educator",
    blurb:
      "From Tesla Autopilot to clear YouTube breakdowns — shows how to build and explain complex systems simply.",
    href: "https://karpathy.ai/",
  },
  {
    name: "Yann LeCun",
    role: "Chief AI Scientist, Meta",
    blurb:
      "Pioneer of convolutional networks. His openness about AI limits keeps hype in check.",
    href: "https://yann.lecun.com/",
  },
  {
    name: "Anthropic Team",
    role: "AI safety & Claude",
    blurb:
      "Claude API and Claude Code certifications pushed me toward tool-use and agentic workflows in real products.",
    href: "https://www.anthropic.com/",
  },
];

export const achievements = [
  "Runner-Up at KananHack 2026 among 24 competing teams in a 24–48hr sprint.",
  "Built prototypes across 5 hackathons including Google The Big Code and HackerRank Orchestrate.",
  "500+ DSA problems on LeetCode with contest rating 1400+.",
  "Applied Computer Networks and cryptography coursework to DPI-Engine and MeshPay.",
  "Completed Anthropic Claude API and Claude Code certifications.",
];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export const searchItems: SearchItem[] = [
  { id: "home", label: "Home", group: "Pages", href: "/" },
  { id: "blogs", label: "Blogs", group: "Pages", href: "/blogs" },
  {
    id: "inspiration",
    label: "Inspiration",
    group: "Pages",
    href: "/inspiration",
  },
  {
    id: "hackathons-page",
    label: "Hackathons",
    group: "Pages",
    href: "/hackathons",
  },
  { id: "about", label: "About", group: "Sections", href: "/#about" },
  { id: "github", label: "GitHub Activity", group: "Sections", href: "/#github" },
  { id: "connect", label: "Let's Connect", group: "Sections", href: "/#connect" },
  {
    id: "education",
    label: "Education",
    group: "Sections",
    href: "/#education",
  },
  {
    id: "experience",
    label: "Experience",
    group: "Sections",
    href: "/#experience",
  },
  { id: "projects", label: "Projects", group: "Sections", href: "/#projects" },
  {
    id: "hackathons",
    label: "Hackathons",
    group: "Sections",
    href: "/#hackathons",
  },
  { id: "blog", label: "Blog Preview", group: "Sections", href: "/#blog" },
  ...projects.map((p) => ({
    id: `project-${p.name}`,
    label: p.name,
    group: "Projects",
    href: "/#projects",
  })),
  ...blogPosts.map((b) => ({
    id: `blog-${b.slug}`,
    label: b.title,
    group: "Blogs",
    href: `/blogs/${b.slug}`,
  })),
];

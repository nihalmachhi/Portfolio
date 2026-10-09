export type ReferenceProject = {
  name: string;
  period: string;
  stack: string[];
  bullets: string[];
};

export type ReferencePost = {
  slug: string;
  title: string;
  date: string;
};

export const referenceProjects: ReferenceProject[] = [
  {
    name: "OpenHunt",
    period: "Sep.2026 – Now",
    stack: ["Python", "Gemini API", "GitHub Actions", "YAML"],
    bullets: [
      "Collects public job postings from 3 ATS APIs (Greenhouse, Lever, Ashby) with offline-testable parsers",
      "Filters on title, location and freshness before optional LLM scoring",
      "Runs every weekday on GitHub Actions and builds a local HTML digest",
    ],
  },
  {
    name: "DPI-Engine",
    period: "Jun.2026 – Now",
    stack: ["Python", "Multithreading", "Scapy", "TCP/IP"],
    bullets: [
      "Processes 10K+ packets/sec from PCAP traffic",
      "Identifies apps across 50+ flows using TLS SNI, HTTP Host and DNS fields",
      "Rule-based blocking by app, IP and domain, verified by 34 tests",
    ],
  },
  {
    name: "MeshPay",
    period: "Apr.2026 – May.2026",
    stack: ["Python", "FastAPI", "SQLite", "Pytest"],
    bullets: [
      "UPI-style offline payments across a 5-device mesh using encrypted packet relay and gossip",
      "Blocked 100% of replayed packets in tests with idempotent bridge ingestion",
      "8 REST endpoints, validated by 20+ Pytest tests",
    ],
  },
  {
    name: "AgentGate",
    period: "Aug.2025 – Nov.2025",
    stack: ["Python", "FastAPI", "Groq API", "Razorpay API"],
    bullets: [
      "Gates every Razorpay API call and blocks unsafe agent orders across 3 policies",
      "Groq tool-calling agent with 2 tools to recover from blocked orders",
      "Every allow/block decision logged to a SQLite audit trail (6 fields)",
    ],
  },
];

export const referenceExperience = [
  { title: "Freelance Software Engineer", org: "Self-Employed", period: "Nov.2025 – Now" },
  { title: "Placement Coordinator Intern", org: "Parul University", period: "Aug.2024 – May.2025" },
];

export const referencePosts: ReferencePost[] = [
  { slug: "ml-learning-path-for-engineers", title: "A practical ML learning path for software engineers", date: "Mar.2026" },
  { slug: "building-with-ai-without-losing-craft", title: "Building products with AI without losing craft", date: "Feb.2026" },
  { slug: "why-clear-interfaces-feel-faster", title: "Why clear interfaces feel faster", date: "Jan.2026" },
];

export const referenceSocials = [
  { label: "GitHub", href: "https://github.com/nihalmachhi" },
  { label: "LinkedIn", href: "https://linkedin.com/in/nihalmachhi" },
];

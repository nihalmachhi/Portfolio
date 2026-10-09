import ReferencePortfolio from "@/components/reference-portfolio";
import type { PortfolioTab } from "@/components/reference-portfolio-nav";

const validTabs: PortfolioTab[] = ["home", "projects", "writing", "favorites"];

export default async function Home({ searchParams }: Readonly<{ searchParams: Promise<{ tab?: string }> }>) {
  const { tab } = await searchParams;
  const initialTab = validTabs.find((validTab) => validTab === tab) ?? "home";
  return <ReferencePortfolio initialTab={initialTab} />;
}

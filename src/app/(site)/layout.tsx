import PortfolioShell from "@/components/portfolio-shell";

export default function SiteLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <PortfolioShell>{children}</PortfolioShell>;
}

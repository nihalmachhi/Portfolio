import PortfolioShell from "@/components/portfolio-shell";

export default function SiteLayout({
  children,
  modal,
}: Readonly<{ children: React.ReactNode; modal: React.ReactNode }>) {
  return (
    <PortfolioShell>
      {children}
      {modal}
    </PortfolioShell>
  );
}

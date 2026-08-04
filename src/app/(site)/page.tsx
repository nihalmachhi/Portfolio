"use client";

import PortfolioHome from "@/components/portfolio-home";
import { useTheme } from "@/context/theme-context";

export default function Home() {
  const { theme } = useTheme();
  return <PortfolioHome theme={theme} />;
}

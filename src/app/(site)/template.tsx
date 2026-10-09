import SiteRouteTransition from "@/components/site-route-transition";

export default function SiteTemplate({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <SiteRouteTransition>{children}</SiteRouteTransition>;
}

import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nihal Machhi aka @nihalmachhi",
  description: "Software engineer and CSE (AI/ML) student building practical web and AI products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className="h-full antialiased"
    >
      <head>
        <Script id="theme-bootstrap" strategy="beforeInteractive">
          {`(function(){try{var t=localStorage.getItem("portfolio-theme");if(t==="dark"){document.documentElement.classList.add("dark");}else{document.documentElement.classList.remove("dark");}}catch(e){}})();`}
        </Script>
      </head>
      <body className="min-h-screen antialiased selection:bg-zinc-200 dark:selection:bg-zinc-700">
        {children}
      </body>
    </html>
  );
}

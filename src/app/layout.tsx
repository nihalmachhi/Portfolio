import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nihal Machhi",
  description: "Portfolio Website made by Nihal Machhi",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <Script id="theme-bootstrap" strategy="beforeInteractive">
          {`(function(){try{var t=localStorage.getItem("portfolio-theme");if(t==="dark"){document.documentElement.classList.add("dark");}else{document.documentElement.classList.remove("dark");}}catch(e){}})();`}
        </Script>
      </head>
      <body className="min-h-screen bg-white text-zinc-900 antialiased selection:bg-zinc-200 dark:bg-zinc-950 dark:text-zinc-100 dark:selection:bg-zinc-700">
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Signal Strait Labs | High-Performance Marketing & MarTech Engineering",
  description: "We design integrated growth machinery for the modern enterprise. Specialized in software development, automated RevOps pipelines, and algorithmic search engine optimization (SEO/AEO/GEO).",
  keywords: ["MarTech Engineering", "Marketing Automation", "Answer Engine Optimization", "AEO", "GEO", "Next.js Development", "Revenue Operations", "B2B Growth Agency"],
  authors: [{ name: "Signal Strait Labs" }],
  metadataBase: new URL("https://signal-strait-labs.pages.dev"),
  openGraph: {
    title: "Signal Strait Labs | High-Performance Marketing & MarTech Engineering",
    description: "Traditional agencies separate creative from engineering. We treat growth as an interconnected, mathematical software system.",
    url: "https://signal-strait-labs.pages.dev",
    siteName: "Signal Strait Labs",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Signal Strait Labs | MarTech Engineering",
    description: "Engineering High-Performance Digital Infrastructure & Revenue Engines.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body>{children}</body>
    </html>
  );
}
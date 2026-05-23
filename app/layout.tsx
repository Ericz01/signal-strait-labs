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

const siteUrl = "https://signal-strait-labs.pages.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "Signal Strait Labs (SSL) | Enterprise Digital Transformation, Growth Engineering & AEO/GEO — Africa",
    template: "%s | Signal Strait Labs",
  },
  description:
    "Signal Strait Labs (SSL) engineers enterprise digital transformation and growth systems for African and global organizations—custom web infrastructure, technical SEO, Answer Engine Optimization (AEO), Generative Engine Optimization (GEO), data architecture, and RevOps pipeline engineering from Nairobi, Kenya.",
  keywords: [
    "enterprise digital transformation",
    "growth engineering",
    "Answer Engine Optimization",
    "AEO",
    "Generative Engine Optimization",
    "GEO",
    "digital transformation Africa",
    "enterprise growth engineering Kenya",
    "technical SEO Africa",
    "RevOps pipeline engineering",
    "digital infrastructure",
    "custom web development",
    "data architecture",
    "B2B growth agency Nairobi",
    "Signal Strait Labs",
    "SSL",
  ],
  authors: [{ name: "Signal Strait Labs", url: siteUrl }],
  creator: "Signal Strait Labs",
  publisher: "Signal Strait Labs",
  applicationName: "Signal Strait Labs",
  category: "Professional Services",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title:
      "Signal Strait Labs (SSL) | Enterprise Digital Transformation & AEO/GEO — Africa",
    description:
      "Nairobi-based growth engineering lab: digital infrastructure, custom web dev, technical SEO, Answer Engine Optimization (AEO), Generative Engine Optimization (GEO), data architecture, and RevOps pipelines for enterprises scaling across Africa.",
    url: siteUrl,
    siteName: "Signal Strait Labs",
    locale: "en_KE",
    alternateLocale: ["en_US", "en_GB"],
    type: "website",
    countryName: "Kenya",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Signal Strait Labs | Enterprise Digital Transformation & AEO/GEO",
    description:
      "Growth engineering, AEO/GEO, and RevOps pipeline systems for enterprises in Africa and beyond. HQ: Thome, Nairobi, Kenya.",
    creator: "@signalstraitlabs",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
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
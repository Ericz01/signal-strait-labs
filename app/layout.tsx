import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Sora } from "next/font/google";
import { Footer, Header } from "@/components/layout";
import { CloudflareAnalytics } from "@/components/CloudflareAnalytics";
import { CookieConsent } from "@/components/CookieConsent";
import { HOME_DESCRIPTION, HOME_TITLE, SITE_URL } from "@/lib/site-config";
import { baseOpenGraph, baseTwitter } from "@/lib/metadata";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
});

const siteUrl = SITE_URL;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: HOME_TITLE,
    template: "%s | Signal Strait Labs",
  },
  description: HOME_DESCRIPTION,
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
    ...baseOpenGraph,
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    url: "/",
    alternateLocale: ["en_US", "en_GB"],
    countryName: "Kenya",
  },
  twitter: {
    ...baseTwitter,
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
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
    // Font variables go on <html> so Tailwind's :root tokens (--font-display,
    // --font-body) can resolve them. On <body> they were undefined at :root and
    // every page fell back to the system font.
    <html lang="en" className={`${sora.variable} ${plusJakartaSans.variable}`} suppressHydrationWarning>
      <body
        className="bg-ssl-light-bg text-ssl-bg antialiased"
        suppressHydrationWarning={true}
      >
        <div className="flex min-h-screen flex-col luxury-bg-gradient selection:bg-ssl-blue/20">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
        <CookieConsent />
        <CloudflareAnalytics />
      </body>
    </html>
  );
}
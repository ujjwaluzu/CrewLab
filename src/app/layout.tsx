import type { Metadata } from "next";
import { Geist, JetBrains_Mono, Newsreader, Plus_Jakarta_Sans, Space_Grotesk, Space_Mono } from "next/font/google";
import "./globals.css";
import "./homepage.css";
import SvgDefs from "@/components/SvgDefs";
import SchemaOrg from "@/components/SchemaOrg";
import SiteAnimations from "@/components/SiteAnimations";
import {
  SITE_URL,
  SITE_NAME,
  HOMEPAGE_TITLE,
  HOMEPAGE_DESCRIPTION,
} from "@/lib/site";

const bodyFont = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});
const displayFont = Newsreader({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  display: "swap",
});
const monoFont = Space_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});
const crewBodyFont = Geist({
  variable: "--font-cl-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});
const crewDisplayFont = Space_Grotesk({
  variable: "--font-cl-display",
  subsets: ["latin"],
  weight: ["500", "700"],
  display: "swap",
});
const crewMonoFont = JetBrains_Mono({
  variable: "--font-cl-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: HOMEPAGE_TITLE,
    template: `%s · ${SITE_NAME}`,
  },
  description: HOMEPAGE_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "Technology",
  classification: "Startup Project Collaboration Community",
  referrer: "origin-when-cross-origin",
  manifest: "/favicon_io/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon_io/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon.ico", sizes: "any", type: "image/x-icon" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/favicon_io/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
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
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName: SITE_NAME,
    title: HOMEPAGE_TITLE,
    description: HOMEPAGE_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    site: "@crewlabin",
    creator: "@crewlabin",
    title: HOMEPAGE_TITLE,
    description: HOMEPAGE_DESCRIPTION,
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: SITE_NAME,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-IN" className={`${bodyFont.variable} ${displayFont.variable} ${monoFont.variable} ${crewBodyFont.variable} ${crewDisplayFont.variable} ${crewMonoFont.variable}`}>
      <body>
        <SvgDefs />
        <SchemaOrg />
        <SiteAnimations />
        {children}
      </body>
    </html>
  );
}

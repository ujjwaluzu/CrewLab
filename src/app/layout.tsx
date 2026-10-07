import type { Metadata } from "next";
import { Bricolage_Grotesque, Fraunces, Space_Mono } from "next/font/google";
import "./globals.css";
import SvgDefs from "@/components/SvgDefs";
import SchemaOrg from "@/components/SchemaOrg";
import {
  SITE_URL,
  SITE_NAME,
  HOMEPAGE_TITLE,
  HOMEPAGE_DESCRIPTION,
  KEYWORDS,
  GEO,
} from "@/lib/site";

const bodyFont = Bricolage_Grotesque({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
});
const displayFont = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "800"],
  style: ["normal", "italic"],
  display: "swap",
});
const monoFont = Space_Mono({
  variable: "--font-mono",
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
  keywords: KEYWORDS,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "Technology",
  classification: "Startup Community, Cofounder Matching and Collaboration Platform",
  referrer: "origin-when-cross-origin",
  manifest: "/favicon_io/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon_io/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon_io/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/favicon_io/favicon.ico",
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
  other: {
    "geo.region": GEO.region,
    "geo.placename": GEO.placename,
    "geo.position": GEO.position,
    ICBM: GEO.position,
    "distribution": "global",
    "rating": "general",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-IN" className={`${bodyFont.variable} ${displayFont.variable} ${monoFont.variable}`}>
      <body>
        <SvgDefs />
        <SchemaOrg />
        {children}
      </body>
    </html>
  );
}

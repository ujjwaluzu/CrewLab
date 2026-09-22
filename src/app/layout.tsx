import type { Metadata } from "next";
import { DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import SvgDefs from "@/components/SvgDefs";
import SectionSpy from "@/components/SectionSpy";
import SchemaOrg from "@/components/SchemaOrg";
import { SITE_URL, SITE_NAME, SITE_TAGLINE, SITE_DESCRIPTION, KEYWORDS, GEO } from "@/lib/site";

const sans = DM_Sans({
  variable: "--sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});
const mono = JetBrains_Mono({
  variable: "--mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME}. ${SITE_TAGLINE}`,
    template: `%s · ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: KEYWORDS,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "Technology",
  classification: "Startup Community and Collaboration Platform",
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
    title: `${SITE_NAME}. ${SITE_TAGLINE}`,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    site: "@crewlabin",
    creator: "@crewlabin",
    title: `${SITE_NAME}. ${SITE_TAGLINE}`,
    description: SITE_DESCRIPTION,
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
    <html lang="en-IN" className={`${sans.variable} ${mono.variable}`}>
      <body>
        <SvgDefs />
        <SectionSpy />
        <SchemaOrg />
        {children}
      </body>
    </html>
  );
}
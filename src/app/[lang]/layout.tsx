import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Noto_Sans_Devanagari } from "next/font/google";
import "../(en)/globals.css";
import "../(en)/homepage.css";
import SvgDefs from "@/components/SvgDefs";
import HindiSchemaOrg from "@/components/HindiSchemaOrg";
import SiteAnimations from "@/components/SiteAnimations";
import { SITE_URL, SITE_NAME } from "@/lib/site";

const hindiFont = Noto_Sans_Devanagari({ variable: "--font-body", subsets: ["devanagari"], weight: ["400", "500", "600", "700"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: "CrewLab | भारत में स्टार्टअप प्रोजेक्ट और टीम", template: "%s | CrewLab" },
  description: "CrewLab पर स्टार्टअप संस्थापक सह-संस्थापक और साथी खोजें। डेवलपर, विद्यार्थी और बिल्डर ऐसे प्रोजेक्ट खोजें जिनमें वे योगदान दे सकें।",
  applicationName: SITE_NAME,
  manifest: "/favicon_io/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon_io/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon.ico", sizes: "any", type: "image/x-icon" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/favicon_io/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "hi_IN",
    url: "/hi",
    siteName: SITE_NAME,
    title: "CrewLab | भारत में स्टार्टअप प्रोजेक्ट और टीम",
    description: "स्टार्टअप संस्थापक, सह-संस्थापक और बिल्डर CrewLab पर प्रोजेक्ट के आसपास मिलकर काम करें।",
  },
};

export function generateStaticParams() {
  return [{ lang: "hi" }];
}

export const dynamicParams = false;

export default async function HindiRootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (lang !== "hi") notFound();

  return (
    <html lang="hi-IN" className={hindiFont.variable}>
      <body>
        <SvgDefs />
        <HindiSchemaOrg />
        <SiteAnimations />
        {children}
      </body>
    </html>
  );
}

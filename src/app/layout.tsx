import type { Metadata } from "next";
import { Anton, Cormorant_Garamond, Instrument_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import SvgDefs from "@/components/SvgDefs";

const display = Anton({
  variable: "--display",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const serif = Cormorant_Garamond({
  variable: "--serif",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  display: "swap",
});

const sans = Instrument_Sans({
  variable: "--sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const mono = JetBrains_Mono({
  variable: "--mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "CrewLab — Find your crew. Build what matters.",
  description: "Find your crew. Build what matters.",
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
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${serif.variable} ${sans.variable} ${mono.variable}`}>
      <body>
        <SvgDefs />
        {children}
      </body>
    </html>
  );
}
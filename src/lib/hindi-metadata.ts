import type { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import { hindiPath, type HindiPageContent } from "@/lib/hindi-site";

export function hindiMetadata(page: HindiPageContent): Metadata {
  const canonical = `${SITE_URL}${hindiPath(page.path)}`;
  const english = `${SITE_URL}${page.path === "/" ? "/" : page.path}`;

  return {
    title: { absolute: page.title },
    description: page.description,
    alternates: {
      canonical,
      languages: {
        "en-IN": english,
        "hi-IN": canonical,
        "x-default": english,
      },
    },
    openGraph: {
      type: "website",
      locale: "hi_IN",
      alternateLocale: ["en_IN"],
      url: canonical,
      siteName: SITE_NAME,
      title: page.title,
      description: page.description,
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
    },
  };
}

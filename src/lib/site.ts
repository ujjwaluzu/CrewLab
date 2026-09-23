import type { Metadata } from "next";

export const SITE_URL = "https://crewlab.ujjwaluzu.in";

export const SITE_NAME = "CrewLab";

export const SITE_TAGLINE = "Find your crew. Build what matters.";

export const SITE_DESCRIPTION =
  "CrewLab is a startup community and collaboration platform in India where builders, freelancers and open source contributors find their crew. Share an idea, explore projects, team up, and turn ideas into impact.";

export const KEYWORDS = [
  "CrewLab",
  "CrewLab India",
  "startup",
  "build together",
  "freelancing",
  "open source",
  "find your crew",
  "build what matters",
  "builder community India",
  "startup community India",
  "project collaboration",
  "open source projects India",
  "freelance community India",
  "idea sharing platform",
  "builders and creators",
];

export const SOCIAL = {
  discord: "https://discord.gg/m97vTraKq",
  instagram: "https://instagram.com/crewlab.in",
  x: "https://x.com/crewlabin",
  blog: "https://blog.ujjwaluzu.in",
};

export const GEO = {
  region: "IN",
  placename: "India",
  position: "20.5937, 78.9629",
};

export const GEO_TAGS = {
  "geo.region": GEO.region,
  "geo.placename": GEO.placename,
  "geo.position": GEO.position,
  ICBM: GEO.position,
  distribution: "global",
  rating: "general",
} as const;

export function pageMetadata(options: { title: string; description: string; canonical: string }): Metadata {
  return {
    title: options.title,
    description: options.description,
    alternates: {
      canonical: options.canonical,
    },
    openGraph: {
      title: options.title,
      description: options.description,
      url: options.canonical,
      type: "website",
    },
    twitter: {
      title: options.title,
      description: options.description,
    },
    other: { ...GEO_TAGS },
  };
}
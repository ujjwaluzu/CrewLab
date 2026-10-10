import type { Metadata } from "next";

export const SITE_URL = "https://crewlab.ujjwaluzu.in";

export const SITE_NAME = "CrewLab";

export const SITE_TAGLINE = "Find your crew. Build what matters.";

export const SITE_DESCRIPTION =
  "CrewLab is a startup team building and project collaboration platform where founders, developers, designers, marketers, students and creators find cofounders, join projects, and build side projects together.";

export const HOMEPAGE_TITLE =
  "Find a Cofounder, Teammates & Startup Projects | CrewLab";

export const HOMEPAGE_DESCRIPTION =
  "Find cofounders, developers and teammates for your startup or side project on CrewLab - join a builder community, collaborate online, and turn ideas into impact.";

export const KEYWORDS = [
  "find a cofounder",
  "technical cofounder",
  "find developers for startup",
  "find project teammates",
  "startup team building",
  "startup collaboration platform",
  "join startup projects",
  "side project community",
  "build projects together",
  "project collaboration platform",
  "builder community",
  "student project collaboration",
  "startup community",
  "side project platform",
  "find project partners",
  "CrewLab",
];

export const LANDING_PAGES = [
  {
    path: "/find-cofounder",
    label: "Find a cofounder",
    title: "Find a Cofounder & Technical Partner",
    description:
      "Have an idea but no team? Find a cofounder - technical or not - and startup builders ready to build a real product with you.",
  },
  {
    path: "/find-developers",
    label: "Find developers",
    title: "Find Developers to Build Your Project",
    description:
      "Find developers for your startup or side project. Connect with engineers, designers and creators looking for projects to build.",
  },
  {
    path: "/startup-teams",
    label: "Startup teams",
    title: "Build a Startup Team & Collaborate",
    description:
      "Assemble a startup team - founders, developers, designers, marketers - and collaborate with startup builders on real projects.",
  },
  {
    path: "/side-projects",
    label: "Side projects",
    title: "Join Side Projects & Build Together",
    description:
      "Join an online builder community for side projects. Find people to work on side projects with and ship something real.",
  },
  {
    path: "/student-projects",
    label: "Student projects",
    title: "Student Project Collaboration & College Startups",
    description:
      "Find student project teams and college startup collaborators. Join student projects, build portfolios, and team up with fellow students.",
  },
] as const;

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

export function pageMetadata(options: {
  title: string;
  description: string;
  canonical: string;
  keywords?: string[];
}): Metadata {
  return {
    title: options.title,
    description: options.description,
    ...(options.keywords ? { keywords: options.keywords } : {}),
    alternates: {
      canonical: options.canonical,
    },
    openGraph: {
      title: options.title,
      description: options.description,
      url: options.canonical,
      type: "website",
      siteName: SITE_NAME,
      locale: "en_IN",
    },
    twitter: {
      card: "summary_large_image",
      title: options.title,
      description: options.description,
    },
    other: { ...GEO_TAGS },
  };
}
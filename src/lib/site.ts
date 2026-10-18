import type { Metadata } from "next";

export const SITE_URL = "https://crewlab.ujjwaluzu.in";

export const SITE_NAME = "CrewLab";

export const SITE_TAGLINE = "Find your crew. Build what matters.";

export const SITE_DESCRIPTION =
  "CrewLab is an India-first startup collaboration community where founders find cofounders and teammates, while developers, students, and other builders discover projects to join.";

export const HOMEPAGE_TITLE =
  "CrewLab | Find Cofounders & Build Startup Projects";

export const HOMEPAGE_DESCRIPTION =
  "CrewLab helps founders in India find cofounders and startup teammates, while developers and other builders discover projects to join.";

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
};

export function pageMetadata(options: {
  title: string;
  description: string;
  canonical: string;
}): Metadata {
  return {
    title: options.title,
    description: options.description,
    alternates: {
      canonical: options.canonical,
    },
    openGraph: {
      title: `${options.title} | ${SITE_NAME}`,
      description: options.description,
      url: options.canonical,
      type: "website",
      siteName: SITE_NAME,
      locale: "en_IN",
    },
    twitter: {
      card: "summary_large_image",
      title: `${options.title} | ${SITE_NAME}`,
      description: options.description,
    },
  };
}

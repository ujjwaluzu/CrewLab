import { NextRequest } from "next/server";
import { RESOURCES } from "@/lib/resources";
import {
  HOMEPAGE_DESCRIPTION,
  HOMEPAGE_TITLE,
  LANDING_PAGES,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
} from "@/lib/site";

const pages: Record<string, { title: string; description: string }> = {
  "/": { title: HOMEPAGE_TITLE, description: HOMEPAGE_DESCRIPTION },
  "/about": {
    title: "About CrewLab",
    description: SITE_DESCRIPTION,
  },
  "/explore": {
    title: "Explore Startup Projects",
    description: "Discover startup and side projects looking for collaborators on CrewLab.",
  },
  "/features": {
    title: "CrewLab Features",
    description: "Explore how CrewLab helps teams find collaborators and build projects together.",
  },
  "/how-it-works": {
    title: "How CrewLab Works",
    description: "Share or explore a project, find your crew, build together, and track progress.",
  },
  "/waitlist": {
    title: "Join the CrewLab Waitlist",
    description: "Join the waitlist for CrewLab, an India-first startup collaboration community.",
  },
  "/resources": {
    title: "Startup and Builder Guides",
    description: "Practical guides for finding a cofounder, joining startup projects, forming a team, and contributing to side projects.",
  },
  ...Object.fromEntries(
    LANDING_PAGES.map((page) => [page.path, { title: page.title, description: page.description }]),
  ),
};

function renderResource(slug: string): string | null {
  const resource = RESOURCES.find((item) => item.slug === slug);
  if (!resource) return null;

  const sections = resource.sections.map((section) => {
    const paragraphs = section.paragraphs.map((paragraph) => paragraph).join("\n\n");
    const bullets = section.bullets?.map((bullet) => `- ${bullet}`).join("\n");
    return [`## ${section.heading}`, paragraphs, bullets].filter(Boolean).join("\n\n");
  });

  return [
    `# ${resource.title}`,
    resource.description,
    resource.introduction,
    ...sections,
    `[${resource.relatedLabel}](${SITE_URL}${resource.relatedPath})`,
    `[All CrewLab guides](${SITE_URL}/resources)`,
  ].join("\n\n");
}

function renderPage(path: string): string | null {
  if (path.startsWith("/resources/")) {
    return renderResource(path.slice("/resources/".length));
  }

  const page = pages[path];
  if (!page) return null;

  const links = [
    ...LANDING_PAGES.map((item) => `- [${item.label}](${SITE_URL}${item.path}): ${item.description}`),
    `- [Explore projects](${SITE_URL}/explore)`,
    `- [How it works](${SITE_URL}/how-it-works)`,
    `- [Guides and resources](${SITE_URL}/resources)`,
    `- [Join the waitlist](${SITE_URL}/waitlist)`,
  ];

  const body = path === "/"
    ? [
        "CrewLab is an India-first startup collaboration community where founders, developers, designers, marketers, students, and creators connect.",
        "Founders can find a cofounder or teammates. Builders can discover startup and side projects to join.",
        "## How it works",
        "1. Share a startup idea or explore existing projects.",
        "2. Find developers, designers, and creators who want to collaborate.",
        "3. Work together, divide responsibilities, and ship products.",
        "4. Follow milestones, tasks, and commits with GitHub integration.",
      ]
    : path === "/resources"
      ? [
          page.description,
          ...RESOURCES.map((resource) => `- [${resource.title}](${SITE_URL}/resources/${resource.slug}): ${resource.description}`),
        ]
      : [page.description];

  return [`# ${page.title}`, ...body, "## Explore CrewLab", ...links].join("\n\n");
}

export function GET(request: NextRequest) {
  const path = request.nextUrl.searchParams.get("path") ?? "/";
  const markdown = renderPage(path);
  if (!markdown) {
    return new Response("# Not found\n\nThis CrewLab page could not be found.", {
      status: 404,
      headers: { "Content-Type": "text/markdown; charset=utf-8", "X-Robots-Tag": "noindex" },
    });
  }

  const tokenCount = markdown.trim().split(/\s+/).filter(Boolean).length;
  return new Response(markdown, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "x-markdown-tokens": String(tokenCount),
      "Vary": "Accept",
      "X-Robots-Tag": "noindex",
      "Content-Location": `${SITE_URL}${path}`,
      "Link": `<${SITE_URL}>; rel="canonical"`,
      "X-Document-Title": `${SITE_NAME}: ${path}`,
    },
  });
}

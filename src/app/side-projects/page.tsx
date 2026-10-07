import { pageMetadata } from "@/lib/site";
import Landing, { type LandingConfig } from "@/components/Landing";

export const metadata = pageMetadata({
  title: "Join Side Projects & Build Together",
  description:
    "Join a side project community for builders. Find people to work on side projects with, explore developer projects, and ship something real together on CrewLab.",
  canonical: "/side-projects",
  keywords: [
    "side projects",
    "join side projects",
    "find people to work on side projects",
    "side project community",
    "developer side projects",
    "side project platform",
    "build projects together",
    "collaborate on side projects",
  ],
});

const config: LandingConfig = {
  path: "/side-projects",
  crumb: "Side Projects",
  kicker: "Side project community",
  titleLines: ["Join side", "projects and"],
  highlight: "build together",
  lede: "The best way to grow as a builder is to ship. CrewLab is a side project community where you can find people to work on side projects with, explore developer projects, and turn spare time into something real.",
  note: "For developers, designers, makers & side-project enthusiasts",
  primaryLabel: "Join a side project",
  primaryHref: "/waitlist",
  secondaryLabel: "Explore projects",
  secondaryHref: "/explore",
  sections: [
    {
      id: "projects",
      label: "side projects to join",
      heading: "Side projects",
      emphasis: "looking for you",
      intro: "Browse side projects by skill, stack and stage — from idea-stage experiments to projects with working prototypes.",
      cards: [
        {
          icon: "code",
          title: "Developer side projects",
          text: "Frontend, backend, mobile and AI projects looking for builders to ship them.",
        },
        {
          icon: "chat",
          title: "Designer-led projects",
          text: "Product designers shaping real apps and websites who need developers to build.",
        },
        {
          icon: "grid",
          title: "Makers & creators",
          text: "Data, creative and open source projects from the online builder community.",
        },
      ],
    },
    {
      id: "why",
      label: "why build on the side",
      heading: "Why the side project",
      emphasis: "community builds",
      intro: "Side projects are how builders sharpen skills, test ideas and meet collaborators without the pressure of a full-time commitment.",
      bullets: [
        "<b>Learn by shipping</b> — real products are the fastest way to grow.",
        "<b>Build a portfolio</b> — show what you've made, not just what you know.",
        "<b>Meet collaborators</b> — side project partners often become cofounders.",
        "<b>Test startup ideas</b> — validate cheaply before going all in.",
      ],
    },
    {
      id: "how",
      label: "how joining works",
      heading: "Join a side project",
      emphasis: "in three steps",
      intro: "From 'just browsing' to 'shipped together.'",
      bullets: [
        "<b>Explore side projects</b> — filter by skill, stack and stage.",
        "<b>Request to join</b> — tell the team what you can build.",
        "<b>Start building</b> — plan, collaborate and track progress together.",
      ],
      fine: "Side project collaboration is free during early access.",
    },
  ],
  relatedLabel: "More ways to find your crew",
  relatedEmphasis: "and build",
  relatedIntro: "CrewLab helps you find cofounders, developers, startup teams and student projects.",
  closeKicker: "Your side project is waiting",
  closeTitle: "Don't wait for",
  closeBrush: "the right idea.",
  closeEmphasis: "Join a project and start building.",
  closeLead:
    "There's already a project that needs your skills. Find it on CrewLab and build together.",
};

export default function SideProjectsPage() {
  return <Landing config={config} />;
}
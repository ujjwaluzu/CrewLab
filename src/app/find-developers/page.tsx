import { pageMetadata } from "@/lib/site";
import Landing, { type LandingConfig } from "@/components/Landing";

export const metadata = pageMetadata({
  title: "Find Developers for Your Startup or Side Project",
  description:
    "Find developers for your startup or side project on CrewLab. Connect with engineers, technical cofounders and builders who want to join your team and build with you.",
  canonical: "/find-developers",
  keywords: [
    "find developers for startup",
    "find developers for my project",
    "startup developers",
    "find developers for side project",
    "technical cofounder",
    "developer networking platform",
    "project collaborators",
    "hire startup developers",
  ],
});

const config: LandingConfig = {
  path: "/find-developers",
  crumb: "Find Developers",
  kicker: "Find developers",
  titleLines: ["Find developers", "for your"],
  highlight: "startup or side project",
  lede: "Stop recruiting in the dark. CrewLab helps you find developers for your startup or side project by connecting your project to engineers and builders who are actively looking to build. Post the role, see who wants to build it, and team up.",
  note: "Developers who want to build · not just browse",
  primaryLabel: "Find developers",
  primaryHref: "/waitlist",
  secondaryLabel: "Explore projects",
  secondaryHref: "/explore",
  sections: [
    {
      id: "developers",
      label: "developers for your project",
      heading: "Developers ready",
      emphasis: "to build with you",
      intro: "CrewLab is a developer networking platform where builders join projects on purpose - so you're not cold-recruiting out of a feed.",
      cards: [
        {
          icon: "code",
          title: "Frontend & full-stack",
          text: "Build the core of your product with developers who match your stack - React, Node, Python and more.",
        },
        {
          icon: "branch",
          title: "Backend & API engineers",
          text: "Find backend engineers to design APIs, databases and the systems your product runs on.",
        },
        {
          icon: "grid",
          title: "Designers, makers & more",
          text: "Expand beyond code - UI/UX designers, product builders and technical cofounder candidates.",
        },
      ],
    },
    {
      id: "who",
      label: "who you'll find",
      heading: "A community of",
      emphasis: "startup builders",
      intro: "The people on CrewLab aren't just looking for a job - they're looking for a project to build.",
      bullets: [
        "<b>Full-time startup developers</b> who want to build early-stage products.",
        "<b>Side project developers</b> who code after hours and want real projects to join.",
        "<b>Student developers</b> growing their portfolio with real builds.",
        "<b>Technical cofounder candidates</b> ready to commit to the right idea.",
      ],
    },
    {
      id: "how",
      label: "how to find developers",
      heading: "Find developers",
      emphasis: "in three steps",
      intro: "Get from 'we need devs' to a full build team.",
      bullets: [
        "<b>Post your project</b> - share the idea and the tech stack you're building on.",
        "<b>Describe the role</b> - frontend, backend, mobile, AI or full-stack.",
        "<b>Pick your builders</b> - chat, agree on scope, and start building together.",
      ],
      fine: "Early access is open - join the waitlist to find developers for your project first.",
    },
  ],
  relatedLabel: "More ways to find your crew",
  relatedEmphasis: "and build",
  relatedIntro: "CrewLab helps you find cofounders, startup teams, side projects and student projects.",
  closeKicker: "Your build team is online",
  closeTitle: "Don't build a product",
  closeBrush: "alone.",
  closeEmphasis: "Find developers and build together.",
  closeLead:
    "Great products come from teams. Post your project on CrewLab and find the developers who want to build it with you.",
};

export default function FindDevelopersPage() {
  return <Landing config={config} />;
}
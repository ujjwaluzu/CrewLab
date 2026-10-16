import { pageMetadata } from "@/lib/site";
import Landing, { type LandingConfig } from "@/components/Landing";

export const metadata = pageMetadata({
  title: "How CrewLab Works",
  description:
    "See how CrewLab helps builders create profiles, discover projects, apply to join a team, and coordinate with their crew.",
  canonical: "/how-it-works",
});

const config: LandingConfig = {
  path: "/how-it-works",
  crumb: "How CrewLab Works",
  titleLines: ["How CrewLab", "turns ideas into"],
  highlight: "working crews",
  lede:
    "Set up a builder profile, share a project or find one that fits, then bring the right people together around the work.",
  note: "Profiles | projects | applications | crew discussions",
  primaryLabel: "Join the waitlist",
  primaryHref: "/waitlist",
  secondaryLabel: "Explore projects",
  secondaryHref: "/explore",
  sections: [
    {
      id: "the-journey",
      label: "The CrewLab journey",
      heading: "Start with a profile, then choose your path",
      intro:
        "CrewLab gives project owners and builders a clear place to meet around an idea and the skills it needs.",
      cards: [
        {
          icon: "users",
          title: "Create your builder profile",
          text: "Add your name, introduction, skills, and what brings you to CrewLab so others can understand what you want to build.",
        },
        {
          icon: "bulb",
          title: "Share a project idea",
          text: "Describe what you are making, its current stage, and the skills or contributions that would help move it forward.",
        },
        {
          icon: "search",
          title: "Explore and apply",
          text: "Search projects and filter by skill. When a project feels like a fit, send its owner a request to join.",
        },
      ],
    },
    {
      id: "build-together",
      label: "Building together",
      heading: "The project stays at the center",
      intro:
        "Owners decide who joins. Once accepted, builders get shared project context to help the crew coordinate.",
      cards: [
        {
          icon: "check",
          title: "Review requests",
          text: "Project owners review incoming applications and choose the builders who join their crew.",
        },
        {
          icon: "chat",
          title: "Coordinate with the crew",
          text: "Accepted members can use the project discussion space for realtime crew chat and shared context.",
        },
        {
          icon: "code",
          title: "Connect GitHub when useful",
          text: "An owner can link a repository so project members can view relevant repository details, commits, branches, issues, and pull requests.",
        },
      ],
      fine: "GitHub access is optional and read-only for crew members. Repository details are visible to members of that project.",
    },
  ],
  relatedLabel: "Keep exploring CrewLab",
  relatedIntro:
    "Whether you have an idea or are looking for a project, find the next step that fits you.",
  closeKicker: "Ready to get started?",
  closeTitle: "Find the people",
  closeBrush: "to build with.",
  closeLead:
    "Join the waitlist for early access and be ready to bring your idea or skills to the crew.",
};

export default function HowItWorksPage() {
  return <Landing config={config} />;
}

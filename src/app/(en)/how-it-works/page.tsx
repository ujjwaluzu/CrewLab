import { pageMetadata } from "@/lib/site";
import Landing, { type LandingConfig } from "@/components/Landing";
import type { HeroCubeFace } from "@/components/visuals/HeroCube";

export const metadata = pageMetadata({
  title: "How Startup Collaboration Works",
  description:
    "See how CrewLab helps builders create profiles, discover projects, apply to join a team, and coordinate with their crew.",
  canonical: "/how-it-works",
});

const heroFaces: HeroCubeFace[] = [
  { label: "Profile", eyebrow: "01 / YOUR START", title: "Show what you bring", body: "Give other builders a clear picture of the work you want to do.", points: ["Skills and interests", "A short introduction", "What you want to build"] },
  { label: "Project", eyebrow: "02 / THE IDEA", title: "Put the idea in view", body: "Share the project, its current stage, and where a hand would help.", points: ["A clear project brief", "Stage and direction", "Skills the idea needs"] },
  { label: "Discover", eyebrow: "03 / FIND A FIT", title: "Explore the work", body: "Browse projects and find one that matches your interests and skills.", points: ["Search project listings", "Filter by skill", "Review owner and details"] },
  { label: "Apply", eyebrow: "04 / MAKE AN OFFER", title: "Ask to join", body: "Tell the project owner why you are interested and what you can contribute.", points: ["Explain your interest", "Share your contribution", "Set availability"] },
  { label: "Review", eyebrow: "05 / OWNER DECIDES", title: "Choose the crew", body: "Project owners review applications and decide who joins the work.", points: ["Review requests", "Compare project fit", "Welcome accepted members"] },
  { label: "Build", eyebrow: "06 / WORK TOGETHER", title: "Move it forward", body: "Coordinate with your crew using shared project context.", points: ["Discuss the work", "Keep plans together", "Connect GitHub context optionally"] },
];

const config: LandingConfig = {
  path: "/how-it-works",
  crumb: "How CrewLab Works",
  titleLines: ["How CrewLab", "turns ideas into"],
  highlight: "working crews",
  lede:
    "Set up a builder profile, share a project or find one that fits, then bring the right people together around the work.",
  note: "Profiles | projects | applications | crew discussions",
  heroFaces,
  primaryLabel: "Sign up",
  primaryHref: "https://app.crewlab.ujjwaluzu.in",
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
    {
      id: "stay-organized",
      label: "Keep your work in view",
      heading: "Follow your projects and requests",
      intro:
        "CrewLab gives each member a personal overview of the projects they own or have joined, along with the requests moving between builders and project owners.",
      cards: [
        {
          icon: "grid",
          title: "See your project list",
          text: "Keep track of projects you own and projects where you have joined the crew from your dashboard.",
        },
        {
          icon: "users",
          title: "Track applications",
          text: "Review requests you have received as an owner and applications you have sent as a builder.",
        },
        {
          icon: "check",
          title: "Add project events",
          text: "Use the calendar to add events and link them to a project, keeping plans connected to the work they concern.",
        },
      ],
    },
  ],
  relatedLabel: "Keep exploring CrewLab",
  relatedIntro:
    "Whether you have an idea or are looking for a project, find the next step that fits you.",
  closeKicker: "Ready to get started?",
  closeTitle: "Find the people",
  closeBrush: "to build with.",
  closeLead:
    "Sign up to bring your idea or skills to the crew.",
};

export default function HowItWorksPage() {
  return <Landing config={config} />;
}

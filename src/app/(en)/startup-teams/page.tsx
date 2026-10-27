import { pageMetadata } from "@/lib/site";
import Landing, { type LandingConfig } from "@/components/Landing";

export const metadata = pageMetadata({
  title: "Build a Startup Team & Collaborate",
  description:
    "Build a startup team on CrewLab with project listings, skill-based discovery, owner-reviewed join requests, project discussions, and optional read-only GitHub context.",
  canonical: "/startup-teams",
});

const config: LandingConfig = {
  path: "/startup-teams",
  crumb: "Startup Teams",
  titleLines: ["Build a startup", "team that"],
  highlight: "really builds",
  lede: "Describe your startup project and the skills it needs. Builders can discover the work and request to join, while project owners review applications and form the crew.",
  note: "Projects | skills | applications | crew coordination",
  primaryLabel: "Build your startup team",
  primaryHref: "https://app.crewlab.ujjwaluzu.in",
  secondaryLabel: "Explore projects",
  secondaryHref: "/explore",
  sections: [
    {
      id: "roles",
      label: "startup team roles",
      heading: "Every startup team",
      emphasis: "role you need",
      intro: "Make the skills and contributions your startup needs visible, then let builders decide whether the project fits them.",
      cards: [
        {
          icon: "bulb",
          title: "Founders & cofounders",
          text: "Describe the idea and the skills you are looking for so potential cofounders can review the project before requesting to join.",
        },
        {
          icon: "code",
          title: "Developers & engineers",
          text: "List frontend, backend, mobile, AI, or other development skills that would help move the product forward.",
        },
        {
          icon: "users",
          title: "Designers, marketers & product",
          text: "Include design, product, research, marketing, or other skills that could contribute to the project.",
        },
      ],
    },
    {
      id: "collaborate",
      label: "startup collaboration",
      heading: "Startup collaboration",
      emphasis: "that ships",
      intro: "CrewLab keeps project membership, applications, and team context connected to each startup idea.",
      bullets: [
        { title: "Owner-reviewed requests", text: "Project owners review applications and decide who joins the crew." },
        { title: "Project and crew overview", text: "A personal dashboard tracks projects you own or joined, crew, and incoming or outgoing applications." },
        { title: "Project calendar", text: "Add events to a calendar and link them to one of your projects." },
        { title: "Project discussions", text: "Accepted crew members can coordinate through realtime chat in a project discussion." },
      ],
    },
    {
      id: "how",
      label: "how startup teams form",
      heading: "How startup teams",
      emphasis: "form on CrewLab",
      intro: "A project listing helps developers understand the work, and owner-reviewed requests turn interest into crew membership.",
      bullets: [
        { title: "Describe the project", text: "Add the idea, its stage, and the skills that would help." },
        { title: "Let builders explore", text: "Developers and other collaborators can search and filter projects by skill." },
        { title: "Review applications", text: "Builders explain their interest and contribution; owners review the requests and choose their crew." },
        { title: "Coordinate after joining", text: "Accepted members use the project discussion and shared project context." },
      ],
      fine: "CrewLab is purpose-built for startup collaboration - not another social feed.",
    },
    {
      id: "join-requests",
      label: "Startup team applications",
      heading: "Understand who wants to join",
      intro: "Join requests give project owners more context than a name on a list before they accept a new team member.",
      cards: [
        {
          icon: "bulb",
          title: "Why this project interests them",
          text: "Applicants explain why they want to join the project, helping owners understand what draws them to the idea.",
        },
        {
          icon: "code",
          title: "What they can contribute",
          text: "Applicants describe the skills or work they can bring and how much time they can commit.",
        },
        {
          icon: "check",
          title: "The owner makes the decision",
          text: "Project owners review each application and accept or decline requests before someone joins the crew.",
        },
      ],
    },
    {
      id: "shared-context",
      label: "Shared context for startup crews",
      heading: "Keep the team connected to the project",
      intro: "Once people join, CrewLab gives the team a project-specific place to coordinate and see relevant work context.",
      cards: [
        {
          icon: "chat",
          title: "Realtime crew chat",
          text: "Discuss the project with accepted team members in a conversation space tied to the project.",
        },
        {
          icon: "branch",
          title: "Optional GitHub repository",
          text: "Owners can link a repository and choose which one is connected to each project.",
        },
        {
          icon: "code",
          title: "Read-only repository details",
          text: "Project members can view repository details, commits, branches, open issues, and pull requests without receiving the owner's GitHub credentials.",
        },
      ],
      fine: "GitHub is optional. Repository visibility is read-only and shared with the members of that project.",
    },
  ],
  relatedLabel: "More ways to find your crew",
  relatedEmphasis: "and build",
  relatedIntro: "CrewLab helps you find cofounders, developers, side projects and student projects.",
  closeKicker: "The crew is forming",
  closeTitle: "Find your startup",
  closeBrush: "team.",
  closeEmphasis: "Build what matters, together.",
  closeLead:
    "Your startup deserves a crew, not a solo sprint. Post your startup on CrewLab and build a team that ships.",
};

export default function StartupTeamsPage() {
  return <Landing config={config} />;
}

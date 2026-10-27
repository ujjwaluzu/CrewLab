import { pageMetadata } from "@/lib/site";
import Landing, { type LandingConfig } from "@/components/Landing";
import type { HeroCubeFace } from "@/components/visuals/HeroCube";

export const metadata = pageMetadata({
  title: "Features for Builders and Project Teams",
  description:
    "Explore CrewLab features for builder profiles, project discovery, skill filters, join requests, crew discussions, and optional read-only GitHub context.",
  canonical: "/features",
});

const heroFaces: HeroCubeFace[] = [
  { label: "Profiles", eyebrow: "01 / BUILDER PROFILES", title: "Put your skills to work", body: "Help project owners and builders see what you bring to a crew.", points: ["Introduction and interests", "Skills and strengths", "Work you want to do"] },
  { label: "Projects", eyebrow: "02 / PROJECT PAGES", title: "Give ideas a home", body: "A project page keeps the brief, stage, and team needs together.", points: ["Describe the idea", "Update its stage", "List useful contributions"] },
  { label: "Discovery", eyebrow: "03 / PROJECT DISCOVERY", title: "Find your next build", body: "Search and filter project listings before deciding where to apply.", points: ["Browse sample projects", "Filter by skill", "Review project owners"] },
  { label: "Applications", eyebrow: "04 / JOIN REQUESTS", title: "Make the fit clear", body: "Builders can explain their interest and availability to the owner.", points: ["Describe your offer", "Share your availability", "Owners choose members"] },
  { label: "Discussion", eyebrow: "05 / CREW DISCUSSION", title: "Keep the crew close", body: "Accepted members can coordinate in a conversation tied to their project.", points: ["Realtime project chat", "Shared project context", "Membership stays owner-led"] },
  { label: "GitHub", eyebrow: "06 / OPTIONAL CONTEXT", title: "See work in progress", body: "Project owners can connect a repo to give crew members read-only context.", points: ["Commits and branches", "Issues and pull requests", "No access to owner credentials"] },
];

const config: LandingConfig = {
  path: "/features",
  crumb: "CrewLab Features",
  titleLines: ["CrewLab features", "for people who"],
  highlight: "build together",
  lede:
    "CrewLab brings builder profiles, project discovery, owner-reviewed applications, and crew coordination together around each project.",
  note: "Profiles | projects | applications | crew discussions",
  heroFaces,
  primaryLabel: "Sign up",
  primaryHref: "https://app.crewlab.ujjwaluzu.in",
  secondaryLabel: "See how it works",
  secondaryHref: "/how-it-works",
  sections: [
    {
      id: "profiles-and-projects",
      label: "Profiles and projects",
      heading: "Help people understand the fit",
      intro:
        "Profiles show what builders bring. Project pages explain what the team is making and which skills could help.",
      cards: [
        {
          icon: "users",
          title: "Builder profiles",
          text: "Share your name, introduction, skills, and interests so project owners and other builders can understand what you want to work on.",
        },
        {
          icon: "bulb",
          title: "Project details",
          text: "Describe an idea, its current stage, and the skills the project needs. Update the details as the work takes shape.",
        },
        {
          icon: "search",
          title: "Project discovery",
          text: "Search projects and filter by skill, then review the project and its owner before deciding whether to apply.",
        },
      ],
    },
    {
      id: "crew-workspace",
      label: "Crew and collaboration",
      heading: "Bring the right people into the work",
      intro:
        "Project owners stay in control of membership, and accepted crew members get shared context connected to their project.",
      cards: [
        {
          icon: "check",
          title: "Join applications",
          text: "Builders send requests to join. Owners review incoming applications, while both sides can keep track of their requests.",
        },
        {
          icon: "chat",
          title: "Crew discussion",
          text: "Accepted project members can coordinate through realtime chat in a discussion space tied to their project.",
        },
        {
          icon: "code",
          title: "Optional GitHub context",
          text: "Owners can connect a repository to a project so its crew can view relevant repository details, commits, branches, issues, and pull requests.",
        },
      ],
      fine: "GitHub access is optional. Crew members get read-only repository visibility; they do not receive project owners' GitHub credentials.",
    },
    {
      id: "project-overview",
      label: "Project overview and planning",
      heading: "Keep your projects in view",
      intro:
        "A personal dashboard brings together the projects and requests connected to your account, while project events stay linked to the work they concern.",
      cards: [
        {
          icon: "grid",
          title: "Your project dashboard",
          text: "See projects you own or have joined, along with crew details and applications you have sent or received.",
        },
        {
          icon: "check",
          title: "Application status",
          text: "Keep track of the join requests you sent and the applications waiting for your review as a project owner.",
        },
        {
          icon: "pulse",
          title: "Project calendar",
          text: "Add events to your calendar and link each one to a project for shared context.",
        },
      ],
    },
  ],
  relatedLabel: "Explore CrewLab",
  relatedIntro:
    "Learn how the collaboration flow works or browse sample projects to see the kind of ideas builders can bring.",
  closeKicker: "Find your next step",
  closeTitle: "Bring your skills",
  closeBrush: "to a project.",
  closeLead:
    "Sign up to bring project ideas and the people who can build them together.",
};

export default function FeaturesPage() {
  return <Landing config={config} />;
}

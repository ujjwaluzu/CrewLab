import { pageMetadata } from "@/lib/site";
import Landing, { type LandingConfig } from "@/components/Landing";

export const metadata = pageMetadata({
  title: "Student Projects & College Startup Collaboration",
  description:
    "Explore student projects on CrewLab, find ideas by skill, and request to join a team with a clear note about your contribution and availability.",
  canonical: "/student-projects",
});

const config: LandingConfig = {
  path: "/student-projects",
  crumb: "Student Projects",
  titleLines: ["Find student", "project teams"],
  highlight: "& build together",
  lede: "Bring your skills to a project you care about. Explore project ideas, understand what each team needs, and request to join with a clear description of what you can contribute.",
  note: "Project discovery | skills | applications | team discussion",
  primaryLabel: "Find a student team",
  primaryHref: "/waitlist",
  secondaryLabel: "Explore projects",
  secondaryHref: "/explore",
  sections: [
    {
      id: "projects",
      label: "student projects",
      heading: "Explore projects by fit",
      intro: "CrewLab project listings describe the idea, its current stage, and the skills that could help. Use those details to find a project that suits your interests and strengths.",
      cards: [
        {
          icon: "grid",
          title: "Student startup ideas",
          text: "Explore early ideas and developing products shared by project owners looking to form a crew.",
        },
        {
          icon: "code",
          title: "Build with your skills",
          text: "Search and filter listings by the skills projects need, including development and other contributions.",
        },
        {
          icon: "users",
          title: "Learn about the team",
          text: "Review project and owner details to understand the work and people behind an idea before applying.",
        },
      ],
    },
    {
      id: "who",
      label: "student collaborators",
      heading: "Bring different strengths",
      intro: "Projects can benefit from many kinds of experience. A clear profile helps owners see your skills and interests, whether you code, design, research, or help shape a product.",
      bullets: [
        { title: "Developers", text: "Share the technologies and product work you can contribute." },
        { title: "Designers", text: "Describe how you can help with user experience, visual design, or research." },
        { title: "Product and business contributors", text: "Show your interests in planning, customer discovery, communication, or growth." },
        { title: "Curious builders", text: "Use your profile to explain what you know and the kind of work you want to explore." },
      ],
    },
    {
      id: "how",
      label: "how to start",
      heading: "From project search to team",
      intro: "Find an idea that interests you, send the owner a thoughtful request, and coordinate with the team when accepted.",
      bullets: [
        { title: "Explore projects", text: "Review descriptions, stages, and requested skills to find a good fit." },
        { title: "Apply to join", text: "Explain why the project interests you, what you can contribute, and your time commitment." },
        { title: "Wait for owner review", text: "The project owner reviews requests and decides who joins the crew." },
        { title: "Coordinate with members", text: "Accepted team members can discuss the project in its shared conversation space." },
      ],
      fine: "CrewLab connects project discovery, join applications, owner review, crew membership, and discussion.",
    },
    {
      id: "applications",
      label: "student project applications",
      heading: "Show how you can help",
      intro: "A join application gives a project owner specific context to consider when forming the crew.",
      cards: [
        {
          icon: "bulb",
          title: "Your reason for joining",
          text: "Tell the owner what interests you about the idea and why you would like to work on it.",
        },
        {
          icon: "code",
          title: "Your potential contribution",
          text: "Describe the skills, experience, or project work you can bring to the team.",
        },
        {
          icon: "check",
          title: "Your availability",
          text: "Include the time commitment you can make so the owner can consider it alongside your application.",
        },
      ],
    },
    {
      id: "workspace",
      label: "student team workspace",
      heading: "Keep your project activity in view",
      intro: "CrewLab provides a personal overview of your projects and applications, plus project-specific discussion for accepted members.",
      cards: [
        {
          icon: "users",
          title: "One project overview",
          text: "Track projects you own or joined, crew membership, and applications you sent or received from your dashboard.",
        },
        {
          icon: "chat",
          title: "Project discussion",
          text: "Coordinate with accepted crew members through realtime chat connected to the project.",
        },
        {
          icon: "branch",
          title: "Optional GitHub details",
          text: "If an owner connects a repository, members can view its details, commits, branches, open issues, and pull requests as read-only information.",
        },
      ],
      fine: "A GitHub connection is optional, and repository details shown in CrewLab are read-only.",
    },
  ],
  relatedLabel: "More ways to find your crew",
  relatedEmphasis: "and build",
  relatedIntro: "Explore side projects, find a cofounder, or connect with developers and startup teams on CrewLab.",
  closeKicker: "Find your next project",
  closeTitle: "Bring your skills",
  closeBrush: "to a team.",
  closeEmphasis: "Explore ideas and request to join.",
  closeLead:
    "See what projects need, share what you can contribute, and let the project owner review your request.",
};

export default function StudentProjectsPage() {
  return <Landing config={config} />;
}

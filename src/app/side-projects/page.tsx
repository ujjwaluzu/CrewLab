import { pageMetadata } from "@/lib/site";
import Landing, { type LandingConfig } from "@/components/Landing";

export const metadata = pageMetadata({
  title: "Join Side Projects & Build Together",
  description:
    "Find side projects on CrewLab, explore by skill, and request to join projects where your time and experience can contribute.",
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
  titleLines: ["Join side", "projects and"],
  highlight: "build together",
  lede: "Explore projects by the skills they need, learn what the team is making, and send a request explaining how you would like to contribute. CrewLab helps project owners and builders form a crew around a shared idea.",
  note: "Project details | skills | join requests | crew coordination",
  primaryLabel: "Join a side project",
  primaryHref: "/waitlist",
  secondaryLabel: "Explore projects",
  secondaryHref: "/explore",
  sections: [
    {
      id: "projects",
      label: "side projects to join",
      heading: "Find a project that fits",
      intro: "Project listings show what is being built, its current stage, and the skills that could help. Explore those details to decide where you can contribute.",
      cards: [
        {
          icon: "code",
          title: "Browse by skills",
          text: "Explore and filter projects by the skills owners have listed, from frontend and backend development to design and more.",
        },
        {
          icon: "chat",
          title: "Understand the project",
          text: "Read the project description and stage to learn what the team is working on before you apply.",
        },
        {
          icon: "users",
          title: "See who is building",
          text: "Review project and owner details to get a clearer sense of the people and idea behind the listing.",
        },
      ],
    },
    {
      id: "why",
      label: "why build on the side",
      heading: "Make room for a shared idea",
      intro: "Side projects let people bring different skills to an idea they care about. CrewLab gives the project a home where interest can turn into a crew.",
      bullets: [
        { title: "Try a new kind of work", text: "Choose projects where you can practice or contribute skills you want to use." },
        { title: "Show what you can do", text: "Your profile helps project owners understand your skills, interests, and background." },
        { title: "Find collaborators", text: "Connect your contribution to a project and team that share the same direction." },
        { title: "Start with a clear fit", text: "Review the project's needs and explain how you would like to help before joining." },
      ],
    },
    {
      id: "how",
      label: "how joining works",
      heading: "From discovery to crew",
      intro: "Take a look at the project, tell the owner what you can bring, and coordinate with the crew if your request is accepted.",
      bullets: [
        { title: "Explore projects", text: "Search listings and use skills to narrow in on ideas that fit your interests." },
        { title: "Send a join request", text: "Share why the project interests you, what you can contribute, and your time commitment." },
        { title: "Wait for owner review", text: "The project owner reviews requests and chooses who joins the crew." },
        { title: "Coordinate with the team", text: "Accepted members can use the project discussion and shared project context." },
      ],
      fine: "CrewLab supports discovery, owner-reviewed join requests, crew membership, and project discussion.",
    },
    {
      id: "applications",
      label: "side project applications",
      heading: "Make your interest clear",
      intro: "A join request gives the project owner useful context about your motivation, contribution, and availability.",
      cards: [
        {
          icon: "bulb",
          title: "Explain why it interests you",
          text: "Tell the owner what caught your attention and why you want to take part in this project.",
        },
        {
          icon: "code",
          title: "Describe your contribution",
          text: "Share the skills or work you can bring and the amount of time you can commit.",
        },
        {
          icon: "check",
          title: "Let the owner decide",
          text: "Project owners review incoming requests and accept or decline them before someone becomes a crew member.",
        },
      ],
    },
    {
      id: "workspace",
      label: "side project workspace",
      heading: "Keep project context together",
      intro: "After joining, project details and team discussion stay connected to the idea you chose to work on.",
      cards: [
        {
          icon: "users",
          title: "Track your projects",
          text: "Your dashboard brings together projects you own or have joined, crew information, and applications you have sent or received.",
        },
        {
          icon: "chat",
          title: "Talk with the crew",
          text: "Accepted members can coordinate in realtime chat attached to the project.",
        },
        {
          icon: "branch",
          title: "Optional GitHub context",
          text: "Owners may connect a repository to a project. Members can view repository details, commits, branches, open issues, and pull requests as read-only information.",
        },
      ],
      fine: "GitHub is optional, and repository access shown in CrewLab is read-only.",
    },
  ],
  relatedLabel: "More ways to find your crew",
  relatedEmphasis: "and build",
  relatedIntro: "Explore startup teams, find a cofounder, or connect with developers and student projects on CrewLab.",
  closeKicker: "Your next project starts here",
  closeTitle: "Find a side",
  closeBrush: "project.",
  closeEmphasis: "Bring your skills to the crew.",
  closeLead:
    "Explore project ideas, learn what they need, and send a request to join a team building something together.",
};

export default function SideProjectsPage() {
  return <Landing config={config} />;
}

import { pageMetadata } from "@/lib/site";
import Landing, { type LandingConfig } from "@/components/Landing";

export const metadata = pageMetadata({
  title: "Find a Cofounder in India & Technical Partners",
  description:
    "Looking for a cofounder in India? Share your startup idea, the skills you need, and the contribution you can offer to find builders ready to work on it with you.",
  canonical: "/find-cofounder",
});

const config: LandingConfig = {
  path: "/find-cofounder",
  crumb: "Find a Cofounder",
  titleLines: ["Find a", "cofounder to"],
  highlight: "build your startup",
  lede: "Building a startup in India without a team? Share your idea and the skills you need, then explore builders and projects to find people who want to work on the same thing.",
  note: "India-first founder community | projects before profiles",
  primaryLabel: "Find a cofounder",
  primaryHref: "https://app.crewlab.ujjwaluzu.in",
  secondaryLabel: "Explore projects",
  secondaryHref: "/explore",
  sections: [
    {
      id: "matching",
      label: "cofounder matching",
      heading: "Find a cofounder who",
      emphasis: "wants to build",
      intro: "The hardest part of a startup is finding someone who believes in the idea as much as you do. CrewLab puts the project at the center, so builders can review the idea, needed skills, and owner before asking to join.",
      cards: [
        {
          icon: "bulb",
          title: "Technical cofounder",
          text: "Describe the technical skills your project needs so engineers and developers can find the idea and request to join.",
        },
        {
          icon: "users",
          title: "Cofounder for every role",
          text: "List the design, marketing, or product skills your idea needs, then explore builders who bring them.",
        },
        {
          icon: "chat",
          title: "Complementary builder skills",
          text: "Show your skills and interests on your profile so project owners and potential collaborators can see where you could contribute.",
        },
      ],
    },
    {
      id: "who",
      label: "who it's for",
      heading: "Built for founders",
      emphasis: "at every stage",
      intro: "Whether your idea is a napkin sketch or a shipped prototype, CrewLab helps you find the people to build the next version.",
      cards: [
        {
          icon: "bulb",
          title: "Non-technical founders",
          text: "Have the vision and the market but not the code? Find a technical cofounder who can build it with you.",
        },
        {
          icon: "code",
          title: "Technical founders",
          text: "Starting alone? Find a non-technical cofounder to own product, marketing and customers while you build.",
        },
        {
          icon: "grid",
          title: "Side project starters",
          text: "Just want to build something on the side? Find a cofounder for a side project before it becomes a startup.",
        },
      ],
    },
    {
      id: "how",
      label: "how cofounder matching works",
      heading: "How you'll find",
      emphasis: "your cofounder",
      intro: "Create a profile, explore project details, and use owner-reviewed requests to form a crew.",
      bullets: [
        { title: "Set up your profile", text: "Add a short introduction, your skills, and what brings you to CrewLab." },
        { title: "Create or explore projects", text: "Owners describe their idea and needed skills. Builders search and filter the project list." },
        { title: "Send or review a request", text: "Builders request to join, and project owners review incoming applications." },
        { title: "Start with your crew", text: "Accepted members share a project space for discussion and coordination." },
      ],
      fine: "Create your CrewLab account to find project collaborators.",
    },
    {
      id: "project-fit",
      label: "Explore a project before joining",
      heading: "Know what you are joining",
      intro: "Project pages give potential collaborators useful context before they send a request.",
      cards: [
        {
          icon: "doc",
          title: "Read the project description",
          text: "Understand what the owner is building, the current project stage, and the problem the idea is trying to solve.",
        },
        {
          icon: "code",
          title: "See which skills are needed",
          text: "Project owners can list skills that would help. Builders can use skill filters to find projects that fit what they bring.",
        },
        {
          icon: "users",
          title: "Meet the people behind it",
          text: "Review the project owner's profile and see the crew that has already joined before deciding whether to apply.",
        },
      ],
    },
    {
      id: "after-applying",
      label: "After you apply",
      heading: "Move from interest to collaboration",
      intro: "CrewLab keeps applications and project coordination connected to the team forming around each idea.",
      cards: [
        {
          icon: "check",
          title: "Owners choose their crew",
          text: "Project owners review requests and decide who joins. Crew membership stays in the hands of the people leading the project.",
        },
        {
          icon: "chat",
          title: "Coordinate in project discussion",
          text: "Accepted members can use realtime chat in a shared discussion space tied to their project.",
        },
        {
          icon: "branch",
          title: "Add GitHub context when useful",
          text: "An owner can link a repository so the project crew can view relevant details, commits, branches, issues, and pull requests.",
        },
      ],
      fine: "GitHub is optional. Repository visibility for crew members is read-only and scoped to their project.",
    },
  ],
  relatedLabel: "More ways to find your crew",
  relatedEmphasis: "and build",
  relatedIntro: "CrewLab helps you find developers, projects and startup teams too.",
  closeKicker: "Your cofounder is out there",
  closeTitle: "Don't build your startup",
  closeBrush: "alone.",
  closeEmphasis: "Find a cofounder and build together.",
  closeLead:
    "No matter how good your idea is, it needs people to become a product. CrewLab is where solo founders become startup teams.",
};

export default function FindCofounderPage() {
  return <Landing config={config} />;
}

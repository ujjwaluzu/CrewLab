import { pageMetadata } from "@/lib/site";
import Landing, { type LandingConfig } from "@/components/Landing";

export const metadata = pageMetadata({
  title: "Find Developers for Startup Projects",
  description:
    "Find developers who want to contribute to a startup or side project. Share the work, skills, and team context so builders can decide whether to request to join.",
  canonical: "/find-developers",
});

const config: LandingConfig = {
  path: "/find-developers",
  crumb: "Find Developers",
  titleLines: ["Find developers", "for your"],
  highlight: "startup or side project",
  lede: "Describe the skills your startup or side project needs, then make the project discoverable to developers looking for a team and project to contribute to.",
  note: "Builders looking for projects | not just browsing",
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
      intro: "CrewLab puts project details and requested skills in front of builders, so they can understand the work before requesting to join.",
      cards: [
        {
          icon: "code",
          title: "Frontend & full-stack",
          text: "List the frontend, backend, or full-stack skills you need so developers can find a project that fits their experience.",
        },
        {
          icon: "branch",
          title: "Backend & API engineers",
          text: "Describe the API, database, or infrastructure work your project needs and let builders review the details.",
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
        { title: "Full-time startup developers", text: "who want to build early-stage products." },
        { title: "Side project developers", text: "who code after hours and want real projects to join." },
        { title: "Student developers", text: "growing their portfolio with real builds." },
        { title: "Technical cofounder candidates", text: "ready to commit to the right idea." },
      ],
    },
    {
      id: "how",
      label: "how to find developers",
      heading: "Find developers",
      emphasis: "in three steps",
      intro: "Create a clear project listing, invite interest through discovery, and let the owner form the crew.",
      bullets: [
        { title: "Describe the project", text: "Share what you are building, its current stage, and the skills that could help." },
        { title: "Help developers find it", text: "Builders can search projects and filter the list by skill." },
        { title: "Review join requests", text: "Developers can apply to join, and the project owner decides who joins the crew." },
      ],
      fine: "Early access is open - join the waitlist to find developers for your project first.",
    },
    {
      id: "developer-fit",
      label: "Skills and project fit",
      heading: "Give developers a clear view of the work",
      intro: "A useful project listing shows both what is being built and where a developer could contribute.",
      cards: [
        {
          icon: "users",
          title: "Profiles show skills and interests",
          text: "Builders can share a short bio, selected skills, and what they are looking to do, giving project owners context beyond a job title.",
        },
        {
          icon: "doc",
          title: "Project pages explain the need",
          text: "Developers can review the project description, its current stage, requested skills, owner profile, and existing crew before applying.",
        },
        {
          icon: "search",
          title: "Search and filter projects",
          text: "Use project search and skill filters to narrow the list to work that matches your interests and experience.",
        },
      ],
    },
    {
      id: "after-request",
      label: "After a developer applies",
      heading: "Keep the next steps with the project",
      intro: "Applications, crew membership, and collaboration stay connected to the project that brought everyone together.",
      cards: [
        {
          icon: "check",
          title: "Owners review applications",
          text: "Project owners see incoming requests and decide which developers become members of their crew.",
        },
        {
          icon: "grid",
          title: "Track projects and requests",
          text: "A personal dashboard brings together projects you own or joined, your crew, and incoming or outgoing applications.",
        },
        {
          icon: "chat",
          title: "Coordinate after joining",
          text: "Accepted members can use realtime project chat. Owners can also link a GitHub repository for read-only context shared with that project crew.",
        },
      ],
      fine: "GitHub is optional. Crew members can view relevant repository information but do not receive the owner's credentials.",
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

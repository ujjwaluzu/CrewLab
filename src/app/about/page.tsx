import { pageMetadata } from "@/lib/site";
import Landing, { type LandingConfig } from "@/components/Landing";

export const metadata = pageMetadata({
  title: "About CrewLab, the Builder Community",
  description:
    "Learn about CrewLab, a project-centered space where builders share skills, discover ideas, form crews through owner-reviewed requests, and coordinate together.",
  canonical: "/about",
});

const config: LandingConfig = {
  path: "/about",
  crumb: "About CrewLab",
  titleLines: ["Some ideas need", "more than"],
  highlight: "one person.",
  lede:
    "CrewLab brings project owners and builders together around work they want to make. Share the idea, show the skills it needs, and give interested people a clear way to ask to join.",
  note: "Ideas | skills | crews | shared project context",
  primaryLabel: "Join the waitlist",
  primaryHref: "/waitlist",
  secondaryLabel: "Explore projects",
  secondaryHref: "/explore",
  sections: [
    {
      id: "the-gap",
      label: "Why CrewLab exists",
      heading: "Good ideas need people to move forward",
      intro:
        "People with project ideas often need skills they do not have themselves. Builders may have time and experience to offer but still be looking for work that fits their interests.",
      cards: [
        {
          icon: "bulb",
          title: "An idea needs a team",
          text: "Project owners can describe what they want to build, its stage, and the skills or contributions that would help.",
        },
        {
          icon: "users",
          title: "Builders need a clear fit",
          text: "Project listings help people understand the work and decide whether their skills and interests belong there.",
        },
        {
          icon: "chat",
          title: "Coordination needs context",
          text: "After a project owner accepts a builder, the crew can discuss the work in a space connected to that project.",
        },
      ],
    },
    {
      id: "what-we-build",
      label: "What CrewLab brings together",
      heading: "The project is the starting point",
      intro:
        "CrewLab connects the steps around one shared idea: make the project understandable, help builders find it, let the owner form a crew, and keep team discussion with the work.",
      bullets: [
        { title: "Describe the work", text: "Project owners share an idea, its current stage, and the skills that could move it forward." },
        { title: "Discover projects", text: "Builders browse and filter listings, review project and owner details, and decide where to apply." },
        { title: "Form a crew deliberately", text: "Applicants explain their interest, contribution, and availability; owners review requests and choose who joins." },
        { title: "Coordinate together", text: "Accepted members can use realtime discussion and optional read-only repository context." },
      ],
      fine: "CrewLab supports teams as they form and coordinate; each crew decides how to plan and build its project.",
    },
    {
      id: "who-its-for",
      label: "Who CrewLab is for",
      heading: "For people with ideas and people with skills",
      intro:
        "A project can start with one person and grow through the contributions of others. CrewLab gives both sides a way to find one another around the work.",
      cards: [
        {
          icon: "bulb",
          title: "Project owners",
          text: "Share a project and the skills it needs, review incoming applications, and decide who joins your crew.",
        },
        {
          icon: "code",
          title: "Builders and collaborators",
          text: "Show your skills and interests, explore projects, and explain how you could contribute when you apply.",
        },
        {
          icon: "users",
          title: "Crews forming around work",
          text: "Keep project membership and discussion connected to the idea your team chose to build.",
        },
      ],
    },
    {
      id: "how-we-work",
      label: "How we approach collaboration",
      heading: "Build with people, around real projects",
      intro:
        "CrewLab is designed around shared work. Profiles and discovery help people find a fit, while project owners shape their own crew and members coordinate together.",
      bullets: [
        { title: "People over profiles", text: "Profiles help collaborators understand one another, with skills and interests tied to the work they want to do." },
        { title: "Clear requests", text: "Applications share motivation, contribution, and time commitment so owners can review each request with context." },
        { title: "Owner-led membership", text: "Project owners accept or decline requests and remain responsible for forming their crew." },
        { title: "Useful project context", text: "Discussion is tied to the project, and owners may connect a read-only GitHub view for its members." },
      ],
      fine: "GitHub is optional. Crew members can view linked repository information but do not receive the owner's GitHub credentials.",
    },
  ],
  relatedLabel: "Explore CrewLab",
  relatedEmphasis: "and find your next step",
  relatedIntro:
    "Browse project ideas, learn how crews form, or see the features that keep the work connected.",
  closeKicker: "The crew is forming",
  closeTitle: "Find your people",
  closeBrush: "and build together.",
  closeLead:
    "Bring an idea or a useful skill to CrewLab. Explore the project workflow and join the waitlist for updates.",
};

export default function AboutPage() {
  return <Landing config={config} />;
}

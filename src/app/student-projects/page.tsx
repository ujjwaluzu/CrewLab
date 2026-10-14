import { pageMetadata } from "@/lib/site";
import Landing, { type LandingConfig } from "@/components/Landing";

export const metadata = pageMetadata({
  title: "Student Projects & College Startup Collaboration",
  description:
    "Join student project teams and college startups. Find teammates for student collaboration, build portfolio projects and learn by shipping on CrewLab.",
  canonical: "/student-projects",
  keywords: [
    "student projects",
    "student project collaboration",
    "college startups",
    "join student projects",
    "student collaboration",
    "find student project teams",
    "college startup teams",
    "student startup projects",
  ],
});

const config: LandingConfig = {
  path: "/student-projects",
  crumb: "Student Projects",
  titleLines: ["Find student", "project teams"],
  highlight: "& college startups",
  lede: "Your best project is the one you build with others. CrewLab helps students find project teams, join college startups and collaborate with developers, designers and creators - building portfolios and real products before you graduate.",
  note: "For students, hackers, and college startup founders",
  primaryLabel: "Find a student team",
  primaryHref: "/waitlist",
  secondaryLabel: "Explore projects",
  secondaryHref: "/explore",
  sections: [
    {
      id: "projects",
      label: "student projects",
      heading: "Student projects",
      emphasis: "worth joining",
      intro: "From coursework apps to college startup ideas, student projects on CrewLab are looking for builders like you.",
      cards: [
        {
          icon: "grid",
          title: "College startup teams",
          text: "Join student-led startups at the idea, MVP or launch stage.",
        },
        {
          icon: "code",
          title: "Portfolio projects",
          text: "Build real apps to stand out in internships and placements.",
        },
        {
          icon: "users",
          title: "Skill-building crews",
          text: "Team up with developers, designers and marketers to learn by building.",
        },
      ],
    },
    {
      id: "who",
      label: "for all students",
      heading: "For students",
      emphasis: "of every major",
      intro: "You don't need to be a CS major to build. Student collaboration on CrewLab spans developers, designers, marketers, founders and creators.",
      bullets: [
        { title: "Engineering students", text: "- build real products beyond the syllabus." },
        { title: "Design students", text: "- shape products and ship with developers." },
        { title: "Business students", text: "- cofound, market and grow college startups." },
        { title: "Hackathon teams", text: "- find teammates for your next build sprint." },
      ],
    },
    {
      id: "how",
      label: "how to start",
      heading: "Start collaborating",
      emphasis: "in three steps",
      intro: "Bigger than a class project - a real crew.",
      bullets: [
        { title: "Explore student projects", text: "- find teams looking for your skills." },
        { title: "Request to join", text: "- or post your own student project idea." },
        { title: "Build a portfolio", text: "- collaborate, ship and track real progress." },
      ],
      fine: "Student project collaboration is free during early access.",
    },
  ],
  relatedLabel: "More ways to find your crew",
  relatedEmphasis: "and build",
  relatedIntro: "CrewLab helps you find cofounders, developers, startup teams and side projects.",
  closeKicker: "Build before you graduate",
  closeTitle: "Stop waiting for",
  closeBrush: "the group project.",
  closeEmphasis: "Find your student crew and build now.",
  closeLead:
    "The projects you ship in college become the portfolio that gets you hired - and the ideas that become startups. Find your student team on CrewLab.",
};

export default function StudentProjectsPage() {
  return <Landing config={config} />;
}
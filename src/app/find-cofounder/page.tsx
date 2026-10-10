import { pageMetadata } from "@/lib/site";
import Landing, { type LandingConfig } from "@/components/Landing";

export const metadata = pageMetadata({
  title: "Find a Cofounder & Technical Partner",
  description:
    "Have an idea but no team? Find a cofounder - including a technical cofounder - and startup builders ready to turn your startup idea into a real product. Cofounder matching on CrewLab.",
  canonical: "/find-cofounder",
  keywords: [
    "find a cofounder",
    "technical cofounder",
    "startup cofounder",
    "find a technical cofounder",
    "where to find a technical cofounder",
    "find people to build my startup",
    "founder matching platform",
    "cofounder matching",
  ],
});

const config: LandingConfig = {
  path: "/find-cofounder",
  crumb: "Find a Cofounder",
  kicker: "Cofounder matching",
  titleLines: ["Find a", "cofounder to"],
  highlight: "build your startup",
  lede: "CrewLab is the founder matching platform for people who want to build a startup but don't have a team. Post your idea, list the roles you need, and get matched with technical cofounders, developers, designers and marketers who want to build it with you.",
  note: "No cold DMs · match around projects, not profiles",
  primaryLabel: "Find a cofounder",
  primaryHref: "/waitlist",
  secondaryLabel: "Explore projects",
  secondaryHref: "/explore",
  sections: [
    {
      id: "matching",
      label: "cofounder matching",
      heading: "Find a cofounder who",
      emphasis: "wants to build",
      intro: "The hardest part of a startup is finding someone who believes in the idea as much as you do. CrewLab matches founders around projects, so you team up with builders who are already committed to building.",
      cards: [
        {
          icon: "bulb",
          title: "Technical cofounder",
          text: "Match with engineers and developers who can build your product and join as your technical cofounder.",
        },
        {
          icon: "users",
          title: "Cofounder for every role",
          text: "Need a designer, a marketer or a product person? Find the right startup cofounder for any part of the build.",
        },
        {
          icon: "chat",
          title: "Founders with the same gap",
          text: "Connect with founders building startups who need the skills you bring - a true two-way cofounder match.",
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
      intro: "Four steps from a solo idea to a founding team.",
      bullets: [
        "<b>Post your idea</b> - explain the problem you're solving and the help you need.",
        "<b>List the roles</b> - technical cofounder, developer, designer, marketer…",
        "<b>Meet your matches</b> - talk to builders who want to join your team.",
        "<b>Form the crew</b> - pick your cofounder and start building together.",
      ],
      fine: "CrewLab is in early access - join the waitlist to be first in line for cofounder matching.",
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
import { pageMetadata } from "@/lib/site";
import Landing, { type LandingConfig } from "@/components/Landing";

export const metadata = pageMetadata({
  title: "Build a Startup Team & Collaborate",
  description:
    "Assemble a startup team — founders, developers, designers and marketers — and collaborate on your startup idea with builders who want to make it real. Startup team building on CrewLab.",
  canonical: "/startup-teams",
  keywords: [
    "startup teams",
    "startup team building",
    "build a startup team",
    "startup collaboration",
    "startup collaboration platform",
    "startup builders",
    "find startup team members",
    "collaborate on startup ideas",
  ],
});

const config: LandingConfig = {
  path: "/startup-teams",
  crumb: "Startup Teams",
  kicker: "Startup team building",
  titleLines: ["Build a startup", "team that"],
  highlight: "really builds",
  lede: "Startup team building is about finding people who commit to the build. CrewLab helps founders assemble a startup team — developers, designers, marketers and product people — and gives the team a workspace to collaborate from the first idea to launch.",
  note: "Teams that collaborate from idea to ship",
  primaryLabel: "Build your startup team",
  primaryHref: "/waitlist",
  secondaryLabel: "Explore projects",
  secondaryHref: "/explore",
  sections: [
    {
      id: "roles",
      label: "startup team roles",
      heading: "Every startup team",
      emphasis: "role you need",
      intro: "A real startup team has more than founders. Fill every role with builders who want in.",
      cards: [
        {
          icon: "bulb",
          title: "Founders & cofounders",
          text: "Match with cofounders who share your vision and want real ownership in the startup.",
        },
        {
          icon: "code",
          title: "Developers & engineers",
          text: "Build the product with engineers matched to your stack and your stage.",
        },
        {
          icon: "users",
          title: "Designers, marketers & product",
          text: "Shape, sell and grow the startup with the rest of the crew around you.",
        },
      ],
    },
    {
      id: "collaborate",
      label: "startup collaboration",
      heading: "Startup collaboration",
      emphasis: "that ships",
      intro: "Once the team forms, CrewLab becomes the shared workspace: plan the startup, split the work and track real progress.",
      bullets: [
        "<b>Tasks & milestones</b> — turn the roadmap into shippable steps.",
        "<b>Project discussions</b> — keep decisions close to the work.",
        "<b>GitHub integration</b> — see commits and progress in one place.",
        "<b>Activity feed</b> — everyone knows what's moving.",
      ],
    },
    {
      id: "how",
      label: "how startup teams form",
      heading: "How startup teams",
      emphasis: "form on CrewLab",
      intro: "Four steps from solo founder to a building startup team.",
      bullets: [
        "<b>Post your startup</b> — the idea, the stage and the roles you need.",
        "<b>Meet the crew</b> — talk to founders, developers and builders who want in.",
        "<b>Form the team</b> — agree on roles, ownership and the first milestone.",
        "<b>Build together</b> — collaborate in the CrewLab workspace.",
      ],
      fine: "CrewLab is purpose-built for startup collaboration — not another social feed.",
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
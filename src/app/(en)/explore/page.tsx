import Link from "next/link";
import { pageMetadata } from "@/lib/site";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Icon from "@/components/Icon";
import { APP_URL } from "@/lib/site";
import ExploreControls from "@/components/ExploreControls";
import ExploreProjects from "@/components/ExploreProjects";
import HeroCube, { type HeroCubeFace } from "@/components/visuals/HeroCube";
import { pageFaqs } from "@/lib/faqs";
import PageFaqSection from "@/components/PageFaqSection";

export const metadata = pageMetadata({
  title: "Startup Projects to Join",
  description: "Explore sample startup and side project listings, compare stages and requested skills, and learn how to request to join a CrewLab project.",
  canonical: "/explore",
});

function SectionHead({ title, text, count }: { title: string; text: string; count: string }) {
  return <div className="cl-row cl-section-head"><div className="cl-cell cl-head-title"><h2>{title}</h2></div><div className="cl-cell cl-head-copy"><p>{text}</p></div><div className="cl-cell cl-head-count"><span className="cl-mono">SECTION</span><strong>{count}</strong></div></div>;
}

const exploreFaces: HeroCubeFace[] = [
  { label: "Browse", eyebrow: "01 / PROJECT EXAMPLES", title: "Ideas need a crew", body: "Explore sample projects and see the kinds of work builders can join.", points: ["Product and community ideas", "Early stage projects", "Open builder spots"] },
  { label: "Stages", eyebrow: "02 / PROJECT STAGE", title: "See where it stands", body: "Project stages show how far an idea has moved and what could happen next.", points: ["From first idea to prototype", "Understand current progress", "Look for the next useful work"] },
  { label: "Skills", eyebrow: "03 / REQUESTED SKILLS", title: "Find where you fit", body: "Each listing names skills that could help move the project forward.", points: ["Frontend and backend", "Product design and mobile", "Data, AI, and community"] },
  { label: "Context", eyebrow: "04 / PROJECT DETAILS", title: "Get the full picture", body: "Read the brief and owner details before deciding to spend time on an idea.", points: ["Understand the problem", "Compare the skills needed", "Review project owner context"] },
  { label: "Request", eyebrow: "05 / JOIN REQUESTS", title: "Offer what you can", body: "Builders can send the owner a clear request to join a project.", points: ["Say why it interests you", "Describe your contribution", "Share your availability"] },
  { label: "Build", eyebrow: "06 / BUILD TOGETHER", title: "Turn interest into work", body: "Owners review requests and accepted members get project discussion space.", points: ["Owners choose their crew", "Coordinate around the project", "Optional read-only GitHub context"] },
];

export default function ExplorePage() {
  return <div className="crewlab-page"><div className="cl-wrap">
    <SiteHeader />
    <main id="top">
      <section className="cl-row cl-hero cl-page-hero" aria-labelledby="page-title">
        <div className="cl-cell cl-hero-copy"><p className="cl-mono cl-kicker"><i />Sample project examples | requested skills | join requests</p><h1 id="page-title"><span>Projects looking</span><span>for people who</span><span className="cl-page-highlight">want to build</span></h1><p className="cl-page-lede">Explore sample project listings, see what skills each one needs, and find your next project to join in CrewLab.</p><div className="cl-actions"><Link className="cl-button" href="#browse">Explore project examples <Icon name="arrow" /></Link><a className="cl-button cl-ghost" href={APP_URL}>Sign up <Icon name="arrow" /></a></div></div>
        <div className="cl-cell cl-droid-cell"><HeroCube faces={exploreFaces} label="Explore projects interactive overview" /></div>
      </section>

      <section className="cl-section" aria-label="How CrewLab brings projects and builders together">
        <SectionHead count="01" title="From a project idea to a working crew" text="Each project listing gives builders context to decide whether the idea and its needs fit their interests and skills." />
        <div className="cl-row cl-page-card-grid">{[
          ["grid", "Make the project clear", "Owners share the project description, its current stage, and the skills or contributions that could help."],
          ["search", "Find a good fit", "Builders can browse and filter projects by skills, review project and owner details, then apply to join work that interests them."],
          ["chat", "Build with your crew", "Applicants explain their interest, contribution, and availability. Owners review each request, and accepted members get project discussion and optional read-only GitHub context."],
        ].map(([icon, title, text]) => <article className="cl-cell cl-page-card" key={title}><span className="cl-page-card-icon"><Icon name={icon as "grid" | "search" | "chat"} /></span><h3>{title}</h3><p>{text}</p></article>)}</div>
        <p className="cl-page-fine">Project owners decide who joins. If a repository is connected, its details are read-only and visible to that project&apos;s members.</p>
      </section>

      <section className="cl-section cl-explore-browse" id="browse" aria-label="Explore projects">
        <SectionHead count="02" title="Find something worth building" text="These sample listings illustrate the details to look for: project stage, requested skills, and the idea behind the work. CrewLab’s project space supports discovery and join requests." />
        <div className="cl-explore-tools"><ExploreControls /></div>
        <ExploreProjects />
      </section>

      <section className="cl-section" aria-label="What to review before joining a project">
        <SectionHead count="03" title="Choose a project with context" text="A good fit starts with knowing what the project needs and what you can offer." />
        <div className="cl-row cl-page-card-grid">{[
          ["grid", "Read the project stage", "Understand where the idea stands and what kind of work may be useful next."],
          ["code", "Compare requested skills", "Use the listed skills to judge whether your experience and interests fit the project."],
          ["check", "Apply with a clear offer", "Tell the owner why you are interested, what you can contribute, and how much time you can commit."],
        ].map(([icon, title, text]) => <article className="cl-cell cl-page-card" key={title}><span className="cl-page-card-icon"><Icon name={icon as "grid" | "code" | "check"} /></span><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <PageFaqSection id="explore-faq" {...pageFaqs["/explore"]} />

      <section className="cl-row cl-join cl-page-join" id="join"><div className="cl-cell cl-join-title"><p className="cl-mono">Have a project idea?</p><h2>Don&apos;t see something <span>you want to build?</span><small>Share it with the crew.</small></h2></div><div className="cl-cell cl-join-form"><p>Describe your idea, the skills it needs, and where it stands. Project owners can review join requests and build a crew around the work.</p><a className="cl-button" href={APP_URL}>Sign up <Icon name="arrow" /></a><span className="cl-mono">Projects | skills | applications | collaboration</span></div></section>
    </main>
    <SiteFooter />
  </div></div>;
}

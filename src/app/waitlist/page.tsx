import { pageMetadata } from "@/lib/site";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import WaitlistForm from "@/components/WaitlistForm";
import Link from "next/link";
import Icon from "@/components/Icon";

export const metadata = pageMetadata({
  title: "Join the Waitlist",
  description:
    "Join the CrewLab waitlist for updates and early access. Find projects that need your skills, invite collaborators, and coordinate with your crew.",
  canonical: "/waitlist",
});

metadata.robots = { index: false, follow: true };

const nextSteps = [
  { href: "/explore", icon: "grid" as const, title: "Explore project ideas", text: "See how project details and requested skills help builders find work that interests them.", action: "Browse projects" },
  { href: "/how-it-works", icon: "users" as const, title: "See how crews form", text: "Follow the path from a builder profile and project listing to an owner-reviewed join request.", action: "How it works" },
  { href: "/features", icon: "branch" as const, title: "Explore CrewLab features", text: "Learn about project discussion, dashboards, and optional read-only GitHub context.", action: "View features" },
];

export default function WaitlistPage() {
  return <div className="crewlab-page"><div className="cl-wrap">
    <SiteHeader />
    <main id="top">
      <section className="cl-row cl-waitlist-hero">
        <div className="cl-cell cl-waitlist-copy">
          <p className="cl-mono cl-kicker"><i />Projects are better with a crew</p>
          <h1>Find your next <span>build</span><small>with CrewLab.</small></h1>
          <p className="cl-page-lede">Meet people through the projects they want to build. Share your skills, explore ideas that need a crew, and coordinate around the work.</p>
          <div className="cl-waitlist-points">{[
            "Explore projects by the skills they need",
            "Form a crew through owner-reviewed requests",
            "Keep project discussion in one place",
          ].map((point, index) => <div className="cl-row cl-waitlist-point" key={point}><span className="cl-cell cl-mono">0{index + 1}</span><span className="cl-cell">{point}</span></div>)}</div>
        </div>
        <div className="cl-cell cl-join-form cl-waitlist-form">
          <span className="cl-mono">Get CrewLab updates</span>
          <h2>Join the waitlist</h2>
          <p>Leave your email and we&apos;ll let you know about early access and product updates.</p>
          <WaitlistForm />
        </div>
      </section>
      <section className="cl-section cl-waitlist-next">
        <div className="cl-row cl-section-head"><div className="cl-cell cl-head-title"><h2>Start with an idea or a skill</h2></div><div className="cl-cell cl-head-copy"><p>Whether you are forming a team or looking for one, CrewLab connects project discovery, join requests, and crew coordination.</p></div><div className="cl-cell cl-head-count"><span className="cl-mono">NEXT</span><strong>03</strong></div></div>
        <div className="cl-row cl-page-related-grid">{nextSteps.map((step) => <Link className="cl-cell cl-page-related-card" href={step.href} key={step.href}><span className="cl-page-card-icon"><Icon name={step.icon} /></span><h3>{step.title}</h3><p>{step.text}</p><strong>{step.action} <Icon name="arrow" /></strong></Link>)}</div>
      </section>
    </main>
    <SiteFooter />
  </div></div>;
}

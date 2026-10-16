import { pageMetadata } from "@/lib/site";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import WaitlistForm from "@/components/WaitlistForm";
import Link from "next/link";
import Icon from "@/components/Icon";
import "@/components/Landing.css";

import "./waitlist.css";

export const metadata = pageMetadata({
  title: "Join the CrewLab Waitlist",
  description:
    "Join the CrewLab waitlist for updates and early access. Find projects that need your skills, invite collaborators, and coordinate with your crew.",
  canonical: "/waitlist",
});

export default function WaitlistPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="wl">
          <span className="halftone" aria-hidden="true" />
          <div className="wrap wl-in">
            <div className="wl-copy">
              <p className="wl-kicker">Projects are better with a crew</p>
              <h1>
                Find your next
                <span className="hl"><svg className="brush" viewBox="0 0 600 140" preserveAspectRatio="none" aria-hidden="true"><use href="#brush-f" /></svg><span>build</span></span>
                <span className="wl-title-last">with CrewLab.</span>
              </h1>
              <p className="wl-lede">Meet people through the projects they want to build. Share your skills, explore ideas that need a crew, and coordinate around the work.</p>
              <ul className="wl-points">
                <li><Icon name="search" /> Explore projects by the skills they need</li>
                <li><Icon name="users" /> Form a crew through owner-reviewed requests</li>
                <li><Icon name="chat" /> Keep project discussion in one place</li>
              </ul>
            </div>
            <div className="wl-card">
              <p className="wl-card-kicker">Get CrewLab updates</p>
              <h2>Join the waitlist</h2>
              <p>Leave your email and we&apos;ll let you know about early access and product updates.</p>
              <WaitlistForm />
            </div>
          </div>
        </section>
        <section className="pad l-sec l-sec-cards wl-next" aria-label="Explore what you can do with CrewLab">
          <div className="wrap">
            <div className="sec-head l-sec-head">
              <div><h2 className="h">Start with an idea or a skill</h2></div>
              <p>Whether you are forming a team or looking for one, CrewLab connects project discovery, join requests, and crew coordination.</p>
            </div>
            <div className="l-cards">
              <Link className="l-card wl-link-card" href="/explore">
                <span className="l-card-ico"><Icon name="grid" /></span>
                <h3>Explore project ideas</h3>
                <p>See how project details and requested skills help builders find work that interests them.</p>
                <span className="wl-card-link">Browse projects <Icon name="arrow" /></span>
              </Link>
              <Link className="l-card wl-link-card" href="/how-it-works">
                <span className="l-card-ico"><Icon name="users" /></span>
                <h3>See how crews form</h3>
                <p>Follow the path from a builder profile and project listing to an owner-reviewed join request.</p>
                <span className="wl-card-link">How it works <Icon name="arrow" /></span>
              </Link>
              <Link className="l-card wl-link-card" href="/features">
                <span className="l-card-ico"><Icon name="branch" /></span>
                <h3>Explore CrewLab features</h3>
                <p>Learn about project discussion, dashboards, and optional read-only GitHub context.</p>
                <span className="wl-card-link">View features <Icon name="arrow" /></span>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

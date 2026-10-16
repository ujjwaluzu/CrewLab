import Link from "next/link";

import { pageMetadata } from "@/lib/site";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Tickers from "@/components/Tickers";
import Icon from "@/components/Icon";
import ExploreControls from "@/components/ExploreControls";
import ExploreProjects from "@/components/ExploreProjects";

import "@/components/Landing.css";
import "./explore.css";

export const metadata = pageMetadata({
  title: "Explore Startup Projects & Side Projects",
  description:
    "Browse startup projects, side projects and student projects looking for builders. Explore ideas, meet potential teammates, and find something worth building on CrewLab.",
  canonical: "/explore",
});

export default function ExplorePage() {
  return (
    <div className="landing explore">
      <SiteHeader />
      <main id="top">
        <section className="l-hero">
          <div className="wrap l-hero-grid">
            <div>
              <h1 className="l-title">
                <span className="d1">Projects looking</span>
                <span className="d1">for people who</span>
                <span className="d1">
                  <span className="l-hl">
                    <svg className="brush" viewBox="0 0 600 140" preserveAspectRatio="none" aria-hidden="true"><use href="#brush-f" /></svg>
                    <span>want to build</span>
                  </span>
                </span>
              </h1>
              <p className="l-lede">Discover ideas, meet potential teammates, and find something worth building.</p>
              <div className="cta-row">
                <Link className="btn btn-primary" href="#browse">Explore projects <Icon name="arrow" /></Link>
                <Link className="btn btn-ghost" href="/waitlist">Join the waitlist <Icon name="arrow" /></Link>
              </div>
              <p className="l-note">A preview of CrewLab discovery - sample projects, no app yet</p>
            </div>
          </div>
        </section>

        <Tickers />

        <section className="pad l-sec l-sec-copy x-flow" aria-label="How CrewLab brings projects and builders together">
          <div className="wrap">
            <div className="sec-head l-sec-head">
              <div>
                <h2 className="h">From a project idea to a working crew</h2>
              </div>
              <p>CrewLab connects project discovery, joining, and team coordination around the work itself.</p>
            </div>
            <div className="l-cards">
              <article className="l-card">
                <span className="l-card-ico"><Icon name="grid" /></span>
                <h3>Make the project clear</h3>
                <p>Owners describe what they are building, where the project stands, and which skills would help move it forward.</p>
              </article>
              <article className="l-card">
                <span className="l-card-ico"><Icon name="search" /></span>
                <h3>Find a good fit</h3>
                <p>Builders explore projects, filter by skills, review the people behind an idea, and apply to join work that interests them.</p>
              </article>
              <article className="l-card">
                <span className="l-card-ico"><Icon name="chat" /></span>
                <h3>Build with your crew</h3>
                <p>Project owners review join requests. Accepted members get a shared discussion, with optional read-only GitHub context for a linked repository.</p>
              </article>
            </div>
            <p className="x-flow-note">Project owners decide who joins; repository access is read-only and shared with that project&apos;s crew.</p>
          </div>
        </section>

        <section className="pad l-sec l-sec-cards x-browse" id="browse" aria-label="Explore projects">
          <div className="wrap">
            <div className="sec-head l-sec-head">
              <div>
                <h2 className="h">Find something worth building</h2>
              </div>
              <p>Fictional sample projects. This previews how discovering ideas and joining a crew will feel once CrewLab opens.</p>
            </div>
            <ExploreControls />
            <ExploreProjects />
          </div>
        </section>

        <section className="l-close" id="join">
          <i className="l-close-halftone" aria-hidden="true" />
          <svg className="l-close-brush" viewBox="0 0 600 140" preserveAspectRatio="none" aria-hidden="true"><use href="#brush-s" /></svg>
          <div className="wrap l-close-in">
            <p className="l-close-kicker">Bigger than the board?</p>
            <h2>
              Don&apos;t see something{" "}
              <span className="l-close-hl">
                <svg className="brush" viewBox="0 0 600 140" preserveAspectRatio="none" aria-hidden="true"><use href="#brush-f" /></svg>
                <span>you want to build?</span>
              </span>
              <span className="x-close-last-line">Start with your own idea.</span>
            </h2>
            <p className="l-close-lead">
              Bring an idea to the crew. When CrewLab opens, posting a project takes minutes - the right people are already here.
            </p>
            <Link className="btn btn-light" href="/waitlist">
              Join the waitlist <Icon name="arrow" />
            </Link>
            <p className="l-close-fine">Early access is limited &middot; the crew is forming now</p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

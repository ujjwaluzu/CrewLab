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
    "Explore CrewLab projects by their description, stage, and requested skills. Learn how builders apply to join and how project owners form a crew.",
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
              <p className="l-lede">Explore project ideas, see what skills each one needs, and learn how to request a place on a crew building together.</p>
              <div className="cta-row">
                <Link className="btn btn-primary" href="#browse">Explore projects <Icon name="arrow" /></Link>
                <Link className="btn btn-ghost" href="/waitlist">Join the waitlist <Icon name="arrow" /></Link>
              </div>
              <p className="l-note">Project ideas | requested skills | owner-reviewed join requests</p>
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
              <p>Each project listing gives builders context to decide whether the idea and its needs fit their interests and skills.</p>
            </div>
            <div className="l-cards">
              <article className="l-card">
                <span className="l-card-ico"><Icon name="grid" /></span>
                <h3>Make the project clear</h3>
                <p>Owners share the project description, its current stage, and the skills or contributions that could help.</p>
              </article>
              <article className="l-card">
                <span className="l-card-ico"><Icon name="search" /></span>
                <h3>Find a good fit</h3>
                <p>Builders can browse and filter projects by skills, review project and owner details, then apply to join work that interests them.</p>
              </article>
              <article className="l-card">
                <span className="l-card-ico"><Icon name="chat" /></span>
                <h3>Build with your crew</h3>
                <p>Applicants explain their interest, contribution, and availability. Owners review each request, and accepted members get project discussion and optional read-only GitHub context.</p>
              </article>
            </div>
            <p className="x-flow-note">Project owners decide who joins. If a repository is connected, its details are read-only and visible to that project&apos;s members.</p>
          </div>
        </section>

        <section className="pad l-sec l-sec-cards x-browse" id="browse" aria-label="Explore projects">
          <div className="wrap">
            <div className="sec-head l-sec-head">
              <div>
                <h2 className="h">Find something worth building</h2>
              </div>
              <p>These sample listings illustrate the details to look for: project stage, requested skills, and the idea behind the work. CrewLab&apos;s project space supports discovery and join requests.</p>
            </div>
            <ExploreControls />
            <ExploreProjects />
          </div>
        </section>

        <section className="pad l-sec l-sec-copy x-flow" aria-label="What to review before joining a project">
          <div className="wrap">
            <div className="sec-head l-sec-head">
              <div>
                <h2 className="h">Choose a project with context</h2>
              </div>
              <p>A good fit starts with knowing what the project needs and what you can offer.</p>
            </div>
            <div className="l-cards">
              <article className="l-card">
                <span className="l-card-ico"><Icon name="grid" /></span>
                <h3>Read the project stage</h3>
                <p>Understand where the idea stands and what kind of work may be useful next.</p>
              </article>
              <article className="l-card">
                <span className="l-card-ico"><Icon name="code" /></span>
                <h3>Compare requested skills</h3>
                <p>Use the listed skills to judge whether your experience and interests fit the project.</p>
              </article>
              <article className="l-card">
                <span className="l-card-ico"><Icon name="check" /></span>
                <h3>Apply with a clear offer</h3>
                <p>Tell the owner why you are interested, what you can contribute, and how much time you can commit.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="l-close" id="join">
          <i className="l-close-halftone" aria-hidden="true" />
          <svg className="l-close-brush" viewBox="0 0 600 140" preserveAspectRatio="none" aria-hidden="true"><use href="#brush-s" /></svg>
          <div className="wrap l-close-in">
            <p className="l-close-kicker">Have a project idea?</p>
            <h2>
              Don&apos;t see something{" "}
              <span className="l-close-hl">
                <svg className="brush" viewBox="0 0 600 140" preserveAspectRatio="none" aria-hidden="true"><use href="#brush-f" /></svg>
                <span>you want to build?</span>
              </span>
              <span className="x-close-last-line">Share it with the crew.</span>
            </h2>
            <p className="l-close-lead">
              Describe your idea, the skills it needs, and where it stands. Project owners can review join requests and build a crew around the work.
            </p>
            <Link className="btn btn-light" href="/waitlist">
              Join the waitlist <Icon name="arrow" />
            </Link>
            <p className="l-close-fine">Projects | skills | applications | collaboration</p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

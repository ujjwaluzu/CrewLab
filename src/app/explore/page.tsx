import Link from "next/link";

import { pageMetadata } from "@/lib/site";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Tickers from "@/components/Tickers";
import Icon from "@/components/Icon";
import ExploreControls from "@/components/ExploreControls";
import ExploreProjects from "@/components/ExploreProjects";

import "./explore.css";

export const metadata = pageMetadata({
  title: "Explore",
  description:
    "Preview the CrewLab project discovery experience. Discover ideas, meet potential teammates, and find something worth building.",
  canonical: "/explore",
});

export default function ExplorePage() {
  return (
    <div className="explore">
      <SiteHeader />
      <main id="top">
        <section className="x-hero">
          <div className="wrap x-hero-grid">
            <div>
              <p className="kicker">Explore the crew</p>
              <h1 className="x-title">
                <span className="d1">Projects looking</span>
                <span className="d1">
                  <span className="x-hl">
                    <svg className="brush" viewBox="0 0 600 140" preserveAspectRatio="none" aria-hidden="true"><use href="#brush-f" /></svg>
                    <span>for people</span>
                  </span>
                </span>
                <span className="d2">who want to build them.</span>
              </h1>
              <p className="lede">Discover ideas, meet potential teammates, and find something worth building.</p>
              <p className="x-preview">A preview of CrewLab discovery — sample projects, no app yet</p>
            </div>
            <div className="x-collage" aria-hidden="true">
              <div className="halftone" />
              <svg className="x-brush" viewBox="0 0 600 140" preserveAspectRatio="none"><use href="#brush-f" /></svg>
              <div className="x-board">
                <div className="x-board-top">
                  <span className="x-live">Discover</span>
                  <span className="x-board-count">06 · sample</span>
                </div>
                <ul className="x-board-list">
                  <li>
                    <span className="x-board-init">S</span>
                    <span className="x-board-meta"><b>StudySync</b><span>Frontend · Backend · UI/UX</span></span>
                    <span className="x-board-open">3/5</span>
                  </li>
                  <li>
                    <span className="x-board-init">D</span>
                    <span className="x-board-meta"><b>DevConnect</b><span>React · Node · Community</span></span>
                    <span className="x-board-open">4/6</span>
                  </li>
                  <li>
                    <span className="x-board-init">H</span>
                    <span className="x-board-meta"><b>HabitHub</b><span>Mobile · Design · Marketing</span></span>
                    <span className="x-board-open">2/4</span>
                  </li>
                  <li>
                    <span className="x-board-init">N</span>
                    <span className="x-board-meta"><b>NightOwl</b><span>Web · AI · Community</span></span>
                    <span className="x-board-open">2/5</span>
                  </li>
                </ul>
                <div className="x-board-foot">
                  <span>← more inside</span>
                  <span>slots filling</span>
                </div>
              </div>
              <span className="x-tape" />
              <span className="x-tag t1">Browsing ideas</span>
              <span className="x-tag t2">You could build here</span>
            </div>
          </div>
        </section>

        <Tickers />

        <section className="pad x-browse" id="browse">
          <div className="wrap">
            <div className="sec-head">
              <div>
                <h2 className="h">Find something <em>worth building</em></h2>
              </div>
              <p>Fictional sample projects. This previews how discovering ideas and joining a crew will feel once CrewLab opens.</p>
            </div>
            <ExploreControls />
            <ExploreProjects />
          </div>
        </section>

        <section className="x-close" id="join">
          <div className="x-close-halftone" aria-hidden="true" />
          <svg className="x-close-brush" viewBox="0 0 600 140" preserveAspectRatio="none" aria-hidden="true"><use href="#brush-s" /></svg>
          <div className="wrap x-close-in">
            <p className="kicker">Bigger than the board?</p>
            <h2>
              Don&apos;t see something
              <span className="hl">
                <svg className="brush" viewBox="0 0 600 140" preserveAspectRatio="none" aria-hidden="true"><use href="#brush-f" /></svg>
                <span>you want to build?</span>
              </span>
              <em>Start with your own idea.</em>
            </h2>
            <p className="x-close-lead">
              Bring an idea to the crew. When CrewLab opens, posting a project takes minutes — the right people are already here.
            </p>
            <Link className="btn btn-light" href="/waitlist">
              Join the waitlist <Icon name="arrow" />
            </Link>
            <p className="x-close-fine">Early access is limited · the crew is forming now</p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
import Link from "next/link";

import { pageMetadata } from "@/lib/site";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Tickers from "@/components/Tickers";
import TornEdge from "@/components/TornEdge";
import Icon from "@/components/Icon";

import "./how-it-works.css";

export const metadata = pageMetadata({
  title: "How it works",
  description:
    "From “I have an idea” to “we’re building it.” See how CrewLab moves ideas to the right people, then gives the crew a place to actually make it happen.",
  canonical: "/how-it-works",
});

const steps = [
  {
    icon: "bulb",
    title: "Bring an idea",
    tag: "put it out there",
    copy: "Have something you want to build? Create a project, explain the idea, and tell people what kind of crew you’re looking for.",
  },
  {
    icon: "users",
    title: "Find your crew",
    tag: "see who’s building",
    copy: "Browse projects that need builders like you. Discover ideas, see what skills are needed, and request to join projects that interest you.",
  },
  {
    icon: "branch",
    title: "Build the team",
    tag: "choose your people",
    copy: "Project owners review people who want to join and bring the right people together. Once the crew is formed, everyone has a place to work together.",
  },
  {
    icon: "code",
    title: "Start building",
    tag: "make it real",
    copy: "Break the project into tasks and milestones, keep conversations in one place, and see the project move from idea to something real.",
  },
] as const;

const flow = ["idea", "find people", "form a crew", "plan", "build", "ship"] as const;

export default function HowItWorksPage() {
  return (
    <div className="hiw">
      <SiteHeader />
      <main id="top">
        <section className="h-hero">
          <div className="wrap h-hero-grid">
            <div>
              <p className="kicker">How CrewLab works</p>
              <h1 className="h-title">
                <span className="d1">From “I have an idea”</span>
                <span className="d2">
                  to “we’re&nbsp;<span className="h-hl">
                    <svg className="brush" viewBox="0 0 600 140" preserveAspectRatio="none" aria-hidden="true"><use href="#brush-f" /></svg>
                    <span>building</span>
                  </span>&nbsp;it.”
                </span>
              </h1>
              <p className="lede">CrewLab helps people with ideas find the right people to build with — then gives the crew a place to actually make it happen.</p>
              <p className="h-note">No downloads · No dashboards to learn · A process, end to end</p>
            </div>
            <div className="h-route" aria-hidden="true">
              <div className="halftone" />
              <div className="h-route-card">
                <div className="h-route-top">
                  <span className="h-route-live">The path</span>
                  <span className="h-route-count">4 moves</span>
                </div>
                <div className="h-route-row">
                  <span className="h-stop">
                    <i />
                    <b>Idea</b>
                  </span>
                  <span className="h-stop">
                    <i />
                    <b>People</b>
                  </span>
                  <span className="h-stop">
                    <i />
                    <b>Crew</b>
                  </span>
                  <span className="h-stop">
                    <i />
                    <b>Build</b>
                  </span>
                </div>
                <div className="h-route-foot">
                  <span>← starts with one post</span>
                  <span>no maps needed</span>
                </div>
              </div>
              <span className="h-tape" />
              <span className="h-tag">idea → crew → real</span>
            </div>
          </div>
        </section>

        <Tickers />

        <section className="pad h-process" id="journey">
          <div className="wrap">
            <div className="sec-head">
              <div>
                <h2 className="h">The journey <em>to building together</em></h2>
              </div>
              <p>Four steps, one through-line. Every builder here is moving toward the same thing.</p>
            </div>
            <ol className="h-steps">
              {steps.map((step, index) => (
                <li className="h-step" key={step.title}>
                  <div className="h-node" aria-hidden="true">
                    <span className="h-dot" />
                  </div>
                  <div className="h-step-body">
                    <div className="h-step-num">
                      <span className="h-num">0{index + 1}</span>
                      <span className={`h-chip ${index % 2 ? "alt" : ""}`}>{step.tag}</span>
                    </div>
                    <div className="h-step-copy">
                      <h3><Icon name={step.icon} />{step.title}</h3>
                      <p>{step.copy}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
            <p className="h-steps-note">Four moves. One direction — forward.</p>
          </div>
        </section>

        <section className="h-flow" id="flow">
          <div className="wrap">
            <p className="kicker">From idea to ship</p>
            <h2 className="h h-flow-title">The CrewLab flow</h2>
            <ol className="h-flow-track">
              {flow.map((stage, index) => (
                <li className="h-flow-step" key={stage}>
                  <div className="h-flow-cell">
                    <span className="h-flow-num">0{index + 1}</span>
                    <span className="h-flow-word">{stage}</span>
                    <span className="h-flow-dot" />
                  </div>
                  {index < flow.length - 1 && (
                    <span className="h-flow-arrow" aria-hidden="true"><Icon name="arrow" /></span>
                  )}
                </li>
              ))}
            </ol>
            <p className="h-flow-note">The loop keeps going — one ship leads to the next idea.</p>
          </div>
        </section>

        <section className="pad h-ways" id="two-ways">
          <div className="wrap">
            <div className="sec-head">
              <div>
                <h2 className="h">Two ways <em>into the crew</em></h2>
              </div>
              <p>Same door, two keys. You only need one of them.</p>
            </div>
            <div className="h-ways-grid">
              <article className="h-way a">
                <span className="h-way-num">01</span>
                <span className="h-way-ico"><Icon name="bulb" /></span>
                <h3>Have an idea?</h3>
                <p>Put it out there. Find people who believe in it and want to build it with you.</p>
                <Link className="btn btn-light" href="/waitlist">
                  Start with an idea <Icon name="arrow" />
                </Link>
              </article>
              <article className="h-way b">
                <span className="h-way-num">02</span>
                <span className="h-way-ico"><Icon name="users" /></span>
                <h3>Want to build something?</h3>
                <p>Explore projects, find something that excites you, and meet the people behind it.</p>
                <Link className="btn btn-light" href="/explore">
                  Explore projects <Icon name="arrow" />
                </Link>
              </article>
            </div>
          </div>
        </section>

        <section className="h-close">
          <TornEdge seedIndex={3} color="var(--paper-2)" />
          <i className="h-close-halftone" aria-hidden="true" />
          <svg className="h-close-brush" viewBox="0 0 600 140" preserveAspectRatio="none" aria-hidden="true"><use href="#brush-f" /></svg>
          <div className="wrap h-close-in">
            <p className="h-close-kicker">Still thinking?</p>
            <h2>
              Good ideas shouldn’t
              <span className="h-close-hl">
                <svg className="brush" viewBox="0 0 600 140" preserveAspectRatio="none" aria-hidden="true"><use href="#brush-s" /></svg>
                <span>stay ideas.</span>
              </span>
              <em>Find your people. Build something together.</em>
            </h2>
            <Link className="btn btn-light" href="/waitlist">
              Join the waitlist <Icon name="arrow" />
            </Link>
            <p className="h-close-fine">Early access is limited · the crew is forming now</p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
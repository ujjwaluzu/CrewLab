import Link from "next/link";

import { pageMetadata } from "@/lib/site";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Tickers from "@/components/Tickers";
import TornEdge from "@/components/TornEdge";
import Icon from "@/components/Icon";

import "./about.css";

export const metadata = pageMetadata({
  title: "About",
  description:
    "The people putting ideas out there, and the people looking for something to build — CrewLab is where they meet, form crews, and actually build.",
  canonical: "/about",
});

export default function AboutPage() {
  return (
    <div className="about">
      <SiteHeader />
      <main id="top">
        <section className="a-hero">
          <div className="wrap a-hero-grid">
            <div>
              <p className="kicker">About CrewLab</p>
              <h1 className="a-title">
                <span className="a-t1">Some ideas need</span>
                <span className="a-t2">
                  more than&nbsp;
                  <span className="a-hl">
                    <svg className="brush" viewBox="0 0 600 140" preserveAspectRatio="none" aria-hidden="true"><use href="#brush-f" /></svg>
                    <span>one person.</span>
                  </span>
                </span>
              </h1>
              <p className="a-lede">CrewLab exists for the people who have something they want to build — and the people who want to build something, but haven’t found the right idea or crew yet.</p>
            </div>
            <div className="a-hero-art" aria-hidden="true">
              <div className="halftone" />
              <div className="a-formula">
                <div className="a-formula-top">
                  <span className="a-live">The rough math</span>
                  <span className="a-count">no lone wolves</span>
                </div>
                <div className="a-formula-line">
                  <span className="a-term outline">idea</span>
                  <span className="a-op">+</span>
                  <span className="a-term outline">people</span>
                  <span className="a-op">=</span>
                  <span className="a-term fill">crew</span>
                </div>
                <div className="a-formula-arrow">→</div>
                <div className="a-formula-foot">
                  <span className="a-foot-word">built for real</span>
                  <span className="a-foot-note">shared ownership</span>
                </div>
              </div>
              <span className="a-tape" />
              <span className="a-tag">acknowledge this is where good things start</span>
            </div>
          </div>
        </section>

        <Tickers />

        <section className="a-problem" id="problem">
          <div className="wrap">
            <div className="a-sec-head">
              <p className="a-label"><span>01</span> · the problem</p>
              <h2 className="h a-problem-h">Too many good ideas never <em>become projects.</em></h2>
            </div>
            <div className="a-problem-grid">
              <div className="a-problem-side" aria-hidden="true">
                <span className="a-problem-num">01</span>
                <span className="a-problem-arrow"><Icon name="up-right" /></span>
                <p>The gap between “what if…” and “built it.”<br />Most ideas die somewhere in that middle.</p>
              </div>
              <div className="a-problem-copy">
                <p>Some people have ideas but don’t have the skills, time, or people around them to make them real.</p>
                <p>Others know they want to build something but don’t know what to build or who to build with.</p>
                <p className="a-problem-pull">CrewLab brings those two sides together.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="a-what" id="building">
          <div className="wrap">
            <div className="a-sec-head">
              <p className="a-label"><span>02</span> · what we’re building</p>
              <h2 className="h">A place for builders to <em>find each other.</em></h2>
            </div>
            <p className="a-what-lede">Not another social feed. Not another job board. Not another place to collect ideas.</p>
            <div className="a-chain" aria-label="A place where ideas meet people, people form crews, and crews actually build">
              <div className="a-link">
                <span className="a-link-num">i</span>
                <span className="a-link-word">ideas meet people</span>
              </div>
              <span className="a-link-arrow" aria-hidden="true"><Icon name="arrow" /></span>
              <div className="a-link">
                <span className="a-link-num">ii</span>
                <span className="a-link-word">people form crews</span>
              </div>
              <span className="a-link-arrow" aria-hidden="true"><Icon name="arrow" /></span>
              <div className="a-link on">
                <span className="a-link-num">iii</span>
                <span className="a-link-word">crews actually build</span>
              </div>
            </div>
            <p className="a-what-note">A place where — the rest is up to the crew.</p>
          </div>
        </section>

        <section className="a-phil" id="philosophy">
          <div className="wrap">
            <div className="a-sec-head">
              <p className="a-label"><span>03</span> · the crewlab philosophy</p>
              <h2 className="h a-phil-h">How we <em>think about it.</em></h2>
            </div>
            <div className="a-manifesto">
              <div className="a-m-statement a-m1">Build with <em>people.</em></div>
              <div className="a-m-statement a-m2"><span>Not just</span> profiles.</div>
              <div className="a-m-statement a-m3"><em>Ideas are better together.</em></div>
              <div className="a-m-statement a-m4">Find your crew.</div>
              <div className="a-m-statement a-m5"><span>Make something</span> real.</div>
              <span className="a-m-line" aria-hidden="true" />
              <span className="a-m-note">the manifesto</span>
              <span className="a-m-tag">crews, not audiences</span>
            </div>
          </div>
        </section>

        <section className="a-aud" id="for">
          <div className="wrap">
            <div className="a-sec-head">
              <p className="a-label a-label-plain">who crewlab is for</p>
              <h2 className="h a-aud-h">Two kinds of <em>people, both building.</em></h2>
            </div>
            <div className="a-aud-grid">
              <article className="a-panel idea">
                <div className="a-panel-head">
                  <span className="a-panel-tag">The idea people</span>
                  <span className="a-panel-ico"><Icon name="bulb" /></span>
                </div>
                <h3>Have the idea.</h3>
                <p>You know what should exist. Now find the people who can help make it happen.</p>
                <Link className="btn btn-light" href="/waitlist">
                  Have an idea <Icon name="arrow" />
                </Link>
              </article>
              <article className="a-panel builders">
                <div className="a-panel-head">
                  <span className="a-panel-tag">The builders</span>
                  <span className="a-panel-ico"><Icon name="users" /></span>
                </div>
                <h3>Have the drive to build.</h3>
                <p>You want to create something. Find a project that excites you and a crew worth joining.</p>
                <Link className="btn btn-light" href="/explore">
                  Explore projects <Icon name="arrow" />
                </Link>
              </article>
            </div>
          </div>
        </section>

        <section className="a-go" id="going">
          <div className="wrap a-go-in">
            <p className="a-label"><span>04</span> · where we’re going</p>
            <h2 className="a-go-h">
              The goal isn’t to create another platform people
              <span className="a-go-hl">
                <svg className="brush" viewBox="0 0 600 140" preserveAspectRatio="none" aria-hidden="true"><use href="#brush-s" /></svg>
                <span>spend more time on.</span>
              </span>
            </h2>
            <p className="a-go-statement">It’s to help people spend their time <em>making things.</em></p>
            <p className="a-go-body">
              Real projects need real ownership — crews that form around an idea, take responsibility for it, and ship it together.
              Screen-time for its own sake isn’t the point. Building is.
            </p>
          </div>
        </section>

        <section className="a-close">
          <TornEdge seedIndex={5} color="var(--paper)" />
          <i className="a-close-halftone" aria-hidden="true" />
          <svg className="a-close-brush" viewBox="0 0 600 140" preserveAspectRatio="none" aria-hidden="true"><use href="#brush-f" /></svg>
          <div className="wrap a-close-in">
            <p className="kicker">The crew is forming</p>
            <h2>
              Find your people.
              <span className="a-close-hl">
                <svg className="brush" viewBox="0 0 600 140" preserveAspectRatio="none" aria-hidden="true"><use href="#brush-s" /></svg>
                <span>Build something together.</span>
              </span>
            </h2>
            <Link className="btn btn-light" href="/waitlist">
              Join the waitlist <Icon name="arrow" />
            </Link>
            <p className="a-close-fine">Early access is limited · the crew is forming now</p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
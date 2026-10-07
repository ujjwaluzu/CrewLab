import Link from "next/link";
import { SITE_URL, LANDING_PAGES } from "@/lib/site";
import Icon from "@/components/Icon";
import Tickers from "@/components/Tickers";
import TornEdge from "@/components/TornEdge";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

import "./Landing.css";

export type LandingCard = {
  icon: "doc" | "users" | "code" | "bars" | "bulb" | "branch" | "check" | "chat" | "pulse" | "grid" | "search";
  title: string;
  text: string;
};

export type LandingSection = {
  id: string;
  label: string;
  heading: string;
  emphasis: string;
  intro?: string;
  cards?: LandingCard[];
  bullets?: string[];
  fine?: string;
};

export type LandingConfig = {
  path: string;
  crumb: string;
  kicker: string;
  titleLines: string[];
  highlight: string;
  lede: string;
  note?: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel: string;
  secondaryHref: string;
  sections: LandingSection[];
  relatedLabel: string;
  relatedEmphasis: string;
  relatedIntro: string;
  closeKicker: string;
  closeTitle: string;
  closeBrush: string;
  closeEmphasis: string;
  closeLead: string;
};

function breadcrumbJsonLd(config: LandingConfig) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: config.crumb,
        item: `${SITE_URL}${config.path}`,
      },
    ],
  };
}

export default function Landing({ config }: { config: LandingConfig }) {
  const related = LANDING_PAGES.filter((page) => page.path !== config.path);

  return (
    <div className="landing">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(config)) }}
      />
      <SiteHeader />
      <main id="top">
        <section className="l-hero">
          <div className="wrap l-hero-grid">
            <div>
              <p className="kicker">{config.kicker}</p>
              <h1 className="l-title">
                {config.titleLines.map((line) => (
                  <span className="d1" key={line}>{line}</span>
                ))}
                <span className="d1">
                  <span className="l-hl">
                    <svg className="brush" viewBox="0 0 600 140" preserveAspectRatio="none" aria-hidden="true"><use href="#brush-f" /></svg>
                    <span>{config.highlight}</span>
                  </span>
                </span>
              </h1>
              <p className="l-lede">{config.lede}</p>
              <div className="cta-row">
                <Link className="btn btn-primary" href={config.primaryHref}>{config.primaryLabel} <Icon name="arrow" /></Link>
                <Link className="btn btn-ghost" href={config.secondaryHref}>{config.secondaryLabel} <Icon name="arrow" /></Link>
              </div>
              {config.note && <p className="l-note">{config.note}</p>}
            </div>
            <div className="l-hero-art" aria-hidden="true">
              <div className="halftone" />
              <div className="l-board">
                <div className="l-board-top">
                  <span className="l-live">The crew</span>
                  <span className="l-board-count">forming now</span>
                </div>
                <ul className="l-board-list">
                  <li>
                    <span className="l-board-ico"><Icon name="bulb" /></span>
                    <span className="l-board-meta"><b>Founder</b><span>has the idea</span></span>
                    <span className="l-board-open">01</span>
                  </li>
                  <li>
                    <span className="l-board-ico"><Icon name="code" /></span>
                    <span className="l-board-meta"><b>Developer</b><span>can build it</span></span>
                    <span className="l-board-open">02</span>
                  </li>
                  <li>
                    <span className="l-board-ico"><Icon name="chat" /></span>
                    <span className="l-board-meta"><b>Designer</b><span>shaping it</span></span>
                    <span className="l-board-open">03</span>
                  </li>
                  <li>
                    <span className="l-board-ico"><Icon name="pulse" /></span>
                    <span className="l-board-meta"><b>Marketer</b><span>growing it</span></span>
                    <span className="l-board-open">04</span>
                  </li>
                </ul>
                <div className="l-board-foot">
                  <span>← you could be here</span>
                  <span>build together</span>
                </div>
              </div>
              <span className="l-tape" />
              <span className="l-tag">real people · real projects</span>
            </div>
          </div>
        </section>

        <Tickers />

        {config.sections.map((section, index) => {
          const hasCards = Boolean(section.cards);
          const bgClass = index % 2 === 0 ? "l-sec-copy" : "l-sec-cards";
          return (
            <section className={`pad l-sec ${bgClass}`} id={section.id} key={section.id}>
              <TornEdge seedIndex={5 + index} color={index % 2 === 0 ? "var(--paper-2)" : "var(--paper)"} />
              <div className="wrap">
                <div className="sec-head l-sec-head">
                  <div>
                    <p className="l-label"><span>0{index + 1}</span> — {section.label}</p>
                    <h2 className="h">{section.heading} <em>{section.emphasis}</em></h2>
                  </div>
                  {section.intro && <p>{section.intro}</p>}
                </div>
                {hasCards && section.cards && (
                  <div className="l-cards">
                    {section.cards.map((card) => (
                      <article className="l-card" key={card.title}>
                        <span className="l-card-ico"><Icon name={card.icon} /></span>
                        <h3>{card.title}</h3>
                        <p>{card.text}</p>
                      </article>
                    ))}
                  </div>
                )}
                {!hasCards && section.bullets && (
                  <ul className="l-checks">
                    {section.bullets.map((item) => (
                      <li key={item}><Icon name="check" />{item}</li>
                    ))}
                  </ul>
                )}
                {section.fine && <p className="l-fine">{section.fine}</p>}
              </div>
            </section>
          );
        })}

        <section className="pad l-related" id="related">
          <div className="wrap">
            <div className="sec-head l-related-head">
              <div>
                <h2 className="h">{config.relatedLabel} <em>{config.relatedEmphasis}</em></h2>
              </div>
              <p>{config.relatedIntro}</p>
            </div>
            <div className="l-rel-grid">
              {related.map((page) => (
                <Link className="l-rel-card" href={page.path} key={page.path}>
                  <span className="l-rel-lab">{page.label}</span>
                  <p>{page.description}</p>
                  <span className="l-rel-go">Explore <Icon name="arrow" /></span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="l-close" id="join">
          <TornEdge seedIndex={11} color="var(--paper)" />
          <i className="l-close-halftone" aria-hidden="true" />
          <svg className="l-close-brush" viewBox="0 0 600 140" preserveAspectRatio="none" aria-hidden="true"><use href="#brush-s" /></svg>
          <div className="wrap l-close-in">
            <p className="l-close-kicker">{config.closeKicker}</p>
            <h2>
              {config.closeTitle}
              <span className="l-close-hl">
                <svg className="brush" viewBox="0 0 600 140" preserveAspectRatio="none" aria-hidden="true"><use href="#brush-s" /></svg>
                <span>{config.closeBrush}</span>
              </span>
              <em>{config.closeEmphasis}</em>
            </h2>
            <p className="l-close-lead">{config.closeLead}</p>
            <Link className="btn btn-light" href="/waitlist">
              Join the waitlist <Icon name="arrow" />
            </Link>
            <p className="l-close-fine">Early access is limited · the crew is forming now</p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
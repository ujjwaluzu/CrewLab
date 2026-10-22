import Link from "next/link";
import { SITE_URL, LANDING_PAGES } from "@/lib/site";
import { pageFaqs } from "@/lib/faqs";
import Icon from "@/components/Icon";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PageFaqSection from "@/components/PageFaqSection";
import { CrewAssembly } from "@/components/visuals/CrewAssembly";
import { FeatureDroid } from "@/components/visuals/FeatureDroid";
import { isCrewFocusedPage } from "@/lib/site";
import { ProductScene } from "@/components/visuals/ProductScene";
import { productLayerForPath } from "@/lib/product-scene";
import { CrewFlowFigure } from "@/components/anatomy/CrewFlowFigure";

export type LandingCard = {
  icon: "doc" | "users" | "code" | "bars" | "bulb" | "branch" | "check" | "chat" | "pulse" | "grid" | "search";
  title: string;
  text: string;
};

export type LandingBullet = { title: string; text: string };

export type LandingSection = {
  id: string;
  label: string;
  heading: string;
  emphasis?: string;
  intro?: string;
  cards?: LandingCard[];
  bullets?: LandingBullet[];
  fine?: string;
};

export type LandingConfig = {
  path: string;
  crumb: string;
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
  relatedEmphasis?: string;
  relatedIntro: string;
  closeKicker: string;
  closeTitle: string;
  closeBrush: string;
  closeEmphasis?: string;
  closeLead: string;
};

function breadcrumbJsonLd(config: LandingConfig) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: config.crumb, item: `${SITE_URL}${config.path}` },
    ],
  };
}

function SectionHead({ label, title, intro, count }: { label: string; title: string; intro?: string; count: number }) {
  return <div className="cl-row cl-section-head">
    <div className="cl-cell cl-head-title"><span className="cl-mono cl-page-label">{label}</span><h2>{title}</h2></div>
    <div className="cl-cell cl-head-copy">{intro && <p>{intro}</p>}</div>
    <div className="cl-cell cl-head-count"><span className="cl-mono">SECTION</span><strong>{String(count).padStart(2, "0")}</strong></div>
  </div>;
}

export default function Landing({ config }: { config: LandingConfig }) {
  const related = LANDING_PAGES.filter((page) => page.path !== config.path);
  const title = [...config.titleLines, config.highlight];
  const droidVariant = config.path === "/features" || config.path === "/how-it-works" ? "product" : "crew";
  const explainsFlow = config.path === "/how-it-works";
  const productLayer = explainsFlow ? undefined : productLayerForPath(config.path);

  return <div className="crewlab-page"><div className="cl-wrap">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(config)) }} />
    <SiteHeader />
    <main id="top">
      <section className="cl-row cl-hero cl-page-hero" aria-labelledby="page-title">
        <div className="cl-cell cl-hero-copy">
          {config.note && <p className="cl-mono cl-kicker"><i />{config.note}</p>}
          <h1 id="page-title">{title.map((line, index) => <span key={`${line}-${index}`} className={index === title.length - 1 ? "cl-page-highlight" : undefined}>{line}</span>)}</h1>
          <p className="cl-page-lede">{config.lede}</p>
          <div className="cl-actions"><Link className="cl-button" href={config.primaryHref}>{config.primaryLabel}<span aria-hidden="true">→</span></Link><Link className="cl-button cl-ghost" href={config.secondaryHref}>{config.secondaryLabel}</Link></div>
        </div>
        <div className="cl-cell cl-droid-cell">
          {isCrewFocusedPage(config.path) ? <CrewAssembly className="cl-droid-art" /> : productLayer ? <ProductScene initial={productLayer} /> : <div className="aiptx-droid-stage"><FeatureDroid className="cl-droid-art" variant={droidVariant} /></div>}
        </div>
      </section>

      {explainsFlow && <section className="cl-section cl-how-flow"><CrewFlowFigure /></section>}

      {config.sections.map((section, index) => <section className="cl-section" id={section.id} key={section.id} aria-label={section.label}>
        <SectionHead label={section.label} title={`${section.heading}${section.emphasis ? ` ${section.emphasis}` : ""}`} intro={section.intro} count={index + 1} />
        {section.cards && <div className="cl-row cl-page-card-grid">{section.cards.map((card) => <article className="cl-cell cl-page-card" key={card.title}><span className="cl-mono cl-page-card-icon"><Icon name={card.icon} /></span><h3>{card.title}</h3><p>{card.text}</p></article>)}</div>}
        {section.bullets && <div className="cl-page-bullet-list">{section.bullets.map((item, bulletIndex) => <article className="cl-row cl-page-bullet" key={item.title}><span className="cl-cell cl-mono cl-page-bullet-num">{String(bulletIndex + 1).padStart(2, "0")}</span><div className="cl-cell cl-page-bullet-copy"><h3>{item.title}</h3><p>{item.text}</p></div></article>)}</div>}
        {section.fine && <p className="cl-page-fine">{section.fine}</p>}
      </section>)}

      {pageFaqs[config.path] && <PageFaqSection id="page-faq" {...pageFaqs[config.path]} />}

      <section className="cl-section cl-page-related">
        <SectionHead label={config.relatedLabel} title={config.relatedEmphasis ?? "Explore CrewLab"} intro={config.relatedIntro} count={config.sections.length + 1} />
        <div className="cl-row cl-page-related-grid">{related.map((page) => <Link className="cl-cell cl-page-related-card" href={page.path} key={page.path}><span className="cl-mono">{page.label}</span><p>{page.description}</p><strong>Explore <Icon name="arrow" /></strong></Link>)}</div>
      </section>

      <section className="cl-row cl-join cl-page-join" id="join"><div className="cl-cell cl-join-title"><p className="cl-mono">{config.closeKicker}</p><h2>{config.closeTitle} <span>{config.closeBrush}</span>{config.closeEmphasis && <small>{config.closeEmphasis}</small>}</h2></div><div className="cl-cell cl-join-form"><p>{config.closeLead}</p><Link className="cl-button" href="/waitlist">Join the waitlist <span aria-hidden="true">→</span></Link><span className="cl-mono">Early access is limited · the crew is forming now</span></div></section>
    </main>
    <SiteFooter />
  </div></div>;
}

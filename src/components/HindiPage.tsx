import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PageFaqSection from "@/components/PageFaqSection";
import { CrewGridAnimation } from "@/components/visuals/CrewGridAnimation";
import { ProductScene } from "@/components/visuals/ProductScene";
import type { HindiPageContent } from "@/lib/hindi-site";
import { HINDI_LINK_LABELS, hindiPath } from "@/lib/hindi-site";
import { APP_URL, SITE_URL, SITE_NAME, isCrewFocusedPage } from "@/lib/site";
import { productLayerForPath } from "@/lib/product-scene";

export default function HindiPage({ page }: { page: HindiPageContent }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: page.title,
    description: page.description,
    url: `${SITE_URL}${hindiPath(page.path)}`,
    inLanguage: "hi-IN",
    isPartOf: { "@id": `${SITE_URL}/#website` },
    publisher: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
  };

  return (
    <div className="crewlab-page crewlab-hi" lang="hi-IN">
      <div className="cl-wrap">
        <SiteHeader home={page.path === "/"} />
        <main id="top" lang="hi-IN">
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
          <section className="cl-row cl-hero cl-page-hero" aria-labelledby="page-title">
            <div className="cl-cell cl-hero-copy">
              <p className="cl-mono cl-kicker"><i />{page.kicker}</p>
              <h1 id="page-title">{page.headline.map((line, index) => <span key={line} className={index === page.headline.length - 1 ? "cl-page-highlight" : undefined}>{line}</span>)}</h1>
              <p className="cl-page-lede">{page.lede}</p>
              <div className="cl-actions">
                <a className="cl-button" href={page.primaryHref.startsWith("https://") ? page.primaryHref : hindiPath(page.primaryHref)}>{page.primaryLabel}<span aria-hidden="true">&#8594;</span></a>
                {page.secondaryHref.startsWith("https://")
                  ? <a className="cl-button cl-ghost" href={page.secondaryHref}>{page.secondaryLabel}</a>
                  : <Link className="cl-button cl-ghost" href={hindiPath(page.secondaryHref)}>{page.secondaryLabel}</Link>}
              </div>
            </div>
            <div className="cl-cell cl-droid-cell">
              {isCrewFocusedPage(page.path)
                ? <CrewGridAnimation />
                : <ProductScene initial={productLayerForPath(page.path) ?? "discovery"} locale="hi" />}
            </div>
          </section>

          {page.sections.map((section, index) => (
            <section className="cl-section" key={section.heading}>
              <div className="cl-row cl-section-head">
                <div className="cl-cell cl-head-title"><span className="cl-mono cl-page-label">{String(index + 1).padStart(2, "0")}</span><h2>{section.heading}</h2></div>
                <div className="cl-cell cl-head-copy">{section.intro && <p>{section.intro}</p>}</div>
                <div className="cl-cell cl-head-count"><span className="cl-mono">CREWLAB</span><strong>{String(index + 1).padStart(2, "0")}</strong></div>
              </div>
              {section.cards && <div className="cl-row cl-page-card-grid">{section.cards.map((card) => card.href
                ? <Link className="cl-cell cl-page-card" href={hindiPath(card.href)} key={card.title}><h3>{card.title}</h3><p>{card.text}</p><strong>और पढ़ें <span aria-hidden="true">&#8594;</span></strong></Link>
                : <article className="cl-cell cl-page-card" key={card.title}><h3>{card.title}</h3><p>{card.text}</p></article>)}</div>}
            </section>
          ))}

          <PageFaqSection id="hindi-faq" title="अक्सर पूछे जाने वाले सवाल" intro="CrewLab, प्रोजेक्ट और टीम बनाने से जुड़े आम सवालों के जवाब।" label="सवाल और जवाब" countLabel="सवाल" items={page.faqs} />

          {page.related && <section className="cl-section cl-page-related">
            <div className="cl-row cl-section-head"><div className="cl-cell cl-head-title"><span className="cl-mono cl-page-label">आगे जानें</span><h2>अपना अगला कदम चुनें</h2></div><div className="cl-cell cl-head-copy"><p>CrewLab पर प्रोजेक्ट और साथियों के बारे में और जानें।</p></div><div className="cl-cell cl-head-count"><span className="cl-mono">LINKS</span><strong>{String(page.related.length).padStart(2, "0")}</strong></div></div>
            <div className="cl-row cl-page-related-grid">{page.related.map((route) => <Link className="cl-cell cl-page-related-card" href={hindiPath(route)} key={route}><span className="cl-mono">{HINDI_LINK_LABELS[route]}</span><p>इस विषय पर CrewLab की हिन्दी जानकारी पढ़ें।</p><strong>आगे बढ़ें <span aria-hidden="true">&#8594;</span></strong></Link>)}</div>
          </section>}

          <section className="cl-row cl-join cl-page-join" id="join">
            <div className="cl-cell cl-join-title"><p className="cl-mono">CrewLab के साथ बनाएँ</p><h2>अपना अगला कदम <span>आज चुनें।</span></h2></div>
            <div className="cl-cell cl-join-form">
              <p>अपना CrewLab अकाउंट बनाएँ और अपने अगले प्रोजेक्ट पर काम शुरू करें।</p><a className="cl-button" href={APP_URL}>साइन अप करें <span aria-hidden="true">&#8594;</span></a>
              <span className="cl-mono">CrewLab | भारत</span>
            </div>
          </section>
        </main>
        <SiteFooter />
      </div>
    </div>
  );
}

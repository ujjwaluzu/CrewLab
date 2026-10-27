import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import {
  getLegalPageCopy,
  LEGAL_PAGE_KEYS,
  LEGAL_PAGE_LABELS,
  LEGAL_PAGE_PATHS,
  type LegalLocale,
  type LegalPageKey,
} from "@/lib/legal-content";

export default function LegalPage({
  locale,
  page,
}: {
  locale: LegalLocale;
  page: LegalPageKey;
}) {
  const copy = getLegalPageCopy(locale, page);
  const localizedHref = (key: LegalPageKey) => {
    const path = LEGAL_PAGE_PATHS[key];
    return locale === "hi" ? `/hi${path}` : path;
  };

  return (
    <div className={`crewlab-page${locale === "hi" ? " crewlab-hi" : ""}`} lang={locale === "hi" ? "hi-IN" : "en-IN"}>
      <div className="cl-wrap">
        <SiteHeader />
        <main id="top" className="cl-legal-main">
          <header className="cl-row cl-legal-heading">
            <div className="cl-cell">
              <p className="cl-mono cl-kicker"><i />{locale === "hi" ? "कानूनी जानकारी" : "Legal information"}</p>
              <h1 id="legal-title">{copy.title}</h1>
              <p className="cl-legal-intro">{copy.intro}</p>
              <p className="cl-legal-updated">
                <span>{locale === "hi" ? "अंतिम अपडेट" : "Last updated"}</span>
                <time dateTime="2026-10-27">{copy.updated}</time>
              </p>
            </div>
          </header>

          <nav className="cl-legal-nav" aria-label={locale === "hi" ? "कानूनी पृष्ठ" : "Legal pages"}>
            <span className="cl-mono">{locale === "hi" ? "नीतियाँ" : "Policies"}</span>
            <ul>
              {LEGAL_PAGE_KEYS.map((key) => (
                <li key={key}>
                  <Link href={localizedHref(key)} aria-current={key === page ? "page" : undefined}>
                    {LEGAL_PAGE_LABELS[key][locale]}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="cl-legal-content">
            {copy.sections.map((section, index) => (
              <section className="cl-legal-section" key={section.heading}>
                <div className="cl-legal-section-number cl-mono">{String(index + 1).padStart(2, "0")}</div>
                <div>
                  <h2>{section.heading}</h2>
                  {section.paragraphs?.map((paragraph, paragraphIndex) => <p key={paragraphIndex}>{paragraph}</p>)}
                  {section.bullets && <ul>{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>}
                </div>
              </section>
            ))}
          </div>

          <aside className="cl-legal-review" role="note">
            {locale === "hi"
              ? "यह सामान्य जानकारी है और योग्य कानूनी सलाह का विकल्प नहीं है।"
              : "This is general information and is not a substitute for advice from qualified counsel."}
          </aside>
        </main>
        <SiteFooter />
      </div>
    </div>
  );
}

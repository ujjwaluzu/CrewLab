import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { pageMetadata, SITE_NAME, SITE_URL } from "@/lib/site";
import { getResource, RESOURCES } from "@/lib/resources";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

type ResourcePageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return RESOURCES.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: ResourcePageProps): Promise<Metadata> {
  const { slug } = await params;
  const resource = getResource(slug);
  if (!resource) return {};

  return pageMetadata({
    title: resource.title,
    description: resource.description,
    canonical: `/resources/${resource.slug}`,
  });
}

export default async function ResourceArticlePage({ params }: ResourcePageProps) {
  const { slug } = await params;
  const resource = getResource(slug);
  if (!resource) notFound();

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: resource.title,
    description: resource.description,
    mainEntityOfPage: `${SITE_URL}/resources/${resource.slug}`,
    author: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
    publisher: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
    inLanguage: "en-IN",
  };

  return (
    <div className="crewlab-page">
      <div className="cl-wrap">
        <SiteHeader />
        <main className="cl-resource-article">
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
          <nav className="cl-resource-breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link><span aria-hidden="true">/</span><Link href="/resources">Resources</Link>
          </nav>
          <article>
            <header className="cl-resource-article-head">
              <p className="cl-mono">A CrewLab guide</p>
              <h1>{resource.title}</h1>
              <p className="cl-resource-intro">{resource.introduction}</p>
            </header>
            <div className="cl-resource-body">
              {resource.sections.map((section) => (
                <section key={section.heading}>
                  <h2>{section.heading}</h2>
                  {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                  {section.bullets && <ul>{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>}
                </section>
              ))}
              <aside className="cl-resource-cta">
                <p className="cl-mono">Keep building with CrewLab</p>
                <Link href={resource.relatedPath}>{resource.relatedLabel} <span aria-hidden="true">→</span></Link>
              </aside>
            </div>
          </article>
        </main>
        <SiteFooter />
      </div>
    </div>
  );
}

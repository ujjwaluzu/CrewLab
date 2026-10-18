import Link from "next/link";
import { pageMetadata } from "@/lib/site";
import { RESOURCES } from "@/lib/resources";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata = pageMetadata({
  title: "Startup and Builder Guides",
  description:
    "Practical guides for finding a cofounder, joining startup projects, forming a team, and contributing to side projects.",
  canonical: "/resources",
});

export default function ResourcesPage() {
  return (
    <div className="crewlab-page">
      <div className="cl-wrap">
        <SiteHeader />
        <main className="cl-resource-index">
          <header className="cl-resource-hero">
            <p className="cl-mono">CrewLab resources</p>
            <h1>Guides for people who <span>build together.</span></h1>
            <p>Practical advice for founders forming a team and builders choosing projects to join.</p>
          </header>
          <div className="cl-resource-grid">
            {RESOURCES.map((resource, index) => (
              <article className="cl-resource-card" key={resource.slug}>
                <span className="cl-mono">GUIDE / {String(index + 1).padStart(2, "0")}</span>
                <h2><Link href={`/resources/${resource.slug}`}>{resource.title}</Link></h2>
                <p>{resource.description}</p>
                <Link className="cl-resource-link" href={`/resources/${resource.slug}`}>Read guide <span aria-hidden="true">→</span></Link>
              </article>
            ))}
          </div>
        </main>
        <SiteFooter />
      </div>
    </div>
  );
}

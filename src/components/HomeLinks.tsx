import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";
import { LANDING_PAGES } from "@/lib/site";

export default function HomeLinks() {
  return <section className="pad home-links" id="paths">
    <div className="wrap">
      <SectionHeader kicker="find your path" accent="and project teams." description="Startup teams, side projects and student projects — find the people to build with, whatever you’re making.">find cofounders, developers</SectionHeader>
      <div className="links-grid">
        {LANDING_PAGES.map((page) => <Link className="link-card" href={page.path} key={page.path}>
          <span className="link-label">{page.label}</span>
          <p>{page.description}</p>
          <span className="link-go" aria-hidden="true">Explore →</span>
        </Link>)}
      </div>
    </div>
  </section>;
}

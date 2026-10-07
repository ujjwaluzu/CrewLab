import Link from "next/link";
import Icon from "@/components/Icon";
import TornEdge from "@/components/TornEdge";
import { LANDING_PAGES } from "@/lib/site";

export default function HomeLinks() {
  return (
    <section className="pad home-links" id="paths">
      <TornEdge seedIndex={3} color="var(--paper)" />
      <div className="wrap">
        <div className="sec-head links-head">
          <div>
            <p className="kicker">Find your path</p>
            <h2 className="h">Find cofounders, developers <em>and project teams</em></h2>
            <p className="note">Startup teams, side projects and student projects — find the people to build with, whatever you&apos;re making.</p>
          </div>
        </div>
        <div className="links-grid">
          {LANDING_PAGES.map((page, index) => (
            <Link className="link-card" href={page.path} key={page.path}>
              <span className="link-num" aria-hidden="true">0{index + 1}</span>
              <span className="link-label">{page.label}</span>
              <p>{page.description}</p>
              <span className="link-go">Explore <Icon name="arrow" /></span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
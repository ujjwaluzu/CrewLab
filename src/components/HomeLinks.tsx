import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";
import PixelSnow from "@/components/PixelSnow";
import { LANDING_PAGES } from "@/lib/site";

export default function HomeLinks() {
  return <section className="pad home-links" id="paths">
    <div className="home-links-bg" aria-hidden="true">
      <PixelSnow
        color="#121110"
        variant="snowflake"
        density={0.18}
        speed={0.6}
        wind={0.18}
        sway={0.5}
        flakeSize={1}
        pixelSize={3}
        glow={0.4}
        mouseInteraction
        twinkle={0.3}
        accumulate={false}
        depth={0.6}
        brightness={1}
        fade={0.15}
        opacity={1}
        intro
        lightMode
      />
    </div>
    <div className="wrap">
      <SectionHeader accent="and project teams." description="Startup teams, side projects and student projects - find the people to build with, whatever you’re making.">find cofounders, developers</SectionHeader>
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

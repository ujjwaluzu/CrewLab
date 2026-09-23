import Link from "next/link";
import Icon from "@/components/Icon";

export default function Hero() {
  return (
    <section className="hero">
      <div className="wrap hero-grid">
        <div>
          <h1>
            <span className="d1">Find your</span>
            <span className="d1">
              <span className="crew">
                <svg className="brush" viewBox="0 0 600 140" preserveAspectRatio="none" aria-hidden="true"><use href="#brush-f" /></svg>
                <span>crew.</span>
              </span>
            </span>
          </h1>
          <p className="lede">CrewLab connects curious minds, whether you have an idea or just the skills to build. Find teammates, collaborate on real projects, and turn ideas into impact.</p>
          <div className="cta-row">
            <Link className="btn btn-primary" href="/waitlist">Join the waitlist <Icon name="arrow" /></Link>
            <Link className="btn btn-ghost" href="/how-it-works">See how it works</Link>
          </div>
          <div className="proof">
            <span className="avs" aria-hidden="true">
              <i style={{ background: "var(--mint)" }}>AK</i>
              <i style={{ background: "#E9B44C" }}>RS</i>
              <i style={{ background: "#F08A7A" }}>PN</i>
            </span>
            <span>Be among the first builders on CrewLab</span>
          </div>
        </div>
      </div>
    </section>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import BrandMark from "@/components/BrandMark";
import "./global-not-found.css";
import "./(en)/homepage.css";

export const metadata: Metadata = {
  title: "Page not found | CrewLab",
  description: "We couldn't find that page. Head back to CrewLab and find your next project.",
};

export default function GlobalNotFound() {
  return (
    <html lang="en-IN">
      <body>
        <main className="global-404 crewlab-page">
          <header className="global-404-header">
            <Link className="global-404-brand" href="/" aria-label="CrewLab home">
              <BrandMark />
              <span>CREWLAB</span>
            </Link>
            <span className="global-404-status">Page not found <span aria-hidden="true">/</span> 404</span>
          </header>

          <section className="global-404-main" aria-labelledby="global-404-title">
            <div className="global-404-copy">
              <p className="global-404-kicker"><span aria-hidden="true" /> Wrong turn, builder.</p>
              <h1 id="global-404-title">This page<br />is off the grid.</h1>
              <p className="global-404-description">
                The link may be outdated, or this page may have moved. Let&apos;s get you back to finding your people and building something real.
              </p>
              <div className="cl-actions global-404-actions">
                <Link className="cl-button" href="/">Back to CrewLab <span aria-hidden="true">&#8594;</span></Link>
                <Link className="cl-button cl-ghost" href="/explore">Explore projects</Link>
              </div>
            </div>

            <div className="global-404-art" aria-hidden="true">
              <div className="global-404-coordinate">CL / 00—404</div>
              <div className="global-404-grid">
                <span className="global-404-number">404</span>
                <span className="global-404-orbit global-404-orbit-one" />
                <span className="global-404-orbit global-404-orbit-two" />
                <span className="global-404-signal">SIGNAL LOST<br />CREW NOT FOUND</span>
              </div>
              <div className="global-404-art-footer"><span>KEEP BUILDING</span><span>IND / 2026</span></div>
            </div>
          </section>

          <footer className="global-404-footer">
            <span>Good things happen when you build together.</span>
            <Link href="/hi">Hindi site <span aria-hidden="true">&#8599;</span></Link>
          </footer>
        </main>
      </body>
    </html>
  );
}

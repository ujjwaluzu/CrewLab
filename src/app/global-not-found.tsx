import type { Metadata } from "next";
import Link from "next/link";
import "./global-not-found.css";

export const metadata: Metadata = {
  title: "Page not found | CrewLab",
  description: "We couldn't find that page. Head back to CrewLab and find your next project.",
};

export default function GlobalNotFound() {
  return (
    <html lang="en-IN">
      <body>
        <main className="global-404">
          <header className="global-404-header">
            <Link className="global-404-brand" href="/" aria-label="CrewLab home">
              <span className="global-404-mark" aria-hidden="true">C</span>
              CrewLab
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
              <div className="global-404-actions">
                <Link className="global-404-button global-404-button-primary" href="/">Back to CrewLab <span aria-hidden="true">↗</span></Link>
                <Link className="global-404-button" href="/explore">Explore projects</Link>
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
            <Link href="/hi">हिन्दी में देखें <span aria-hidden="true">↗</span></Link>
          </footer>
        </main>
      </body>
    </html>
  );
}

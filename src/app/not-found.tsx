import Link from "next/link";

import Icon from "@/components/Icon";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

import "./not-found.css";

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main className="nf">
        <span className="halftone" aria-hidden="true" />
        <div className="wrap nf-in">
          <p className="kicker">Error 404</p>
          <h1>Page <em>not found.</em></h1>
          <p className="lede">The page you&apos;re looking for doesn&apos;t exist or has moved. Let&apos;s get you back to building.</p>
          <div className="cta-row">
            <Link className="btn btn-primary" href="/">Back to home <Icon name="arrow" /></Link>
            <Link className="btn btn-ghost" href="/waitlist">Join the waitlist</Link>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
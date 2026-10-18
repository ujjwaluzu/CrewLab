"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import BrandMark from "@/components/BrandMark";
import NavDropdowns from "@/components/NavDropdowns";

export default function SiteHeader({ home = false }: { home?: boolean }) {
  const pathname = usePathname() ?? "";
  const isHindi = pathname === "/hi" || pathname.startsWith("/hi/");
  const homeHref = isHindi ? "/hi" : "/";
  const waitlistHref = isHindi ? "/hi/waitlist" : "/waitlist";

  return (
    <header className={`cl-row cl-nav${home ? " site-head-home" : ""}`}>
      <div className="cl-cell cl-nav-brand">
        <Link className="cl-logo" href={homeHref} aria-label="CrewLab home" aria-current={pathname === homeHref ? "page" : undefined}><BrandMark /><span>CREWLAB</span></Link>
      </div>
      <div className="cl-cell cl-nav-links"><NavDropdowns /></div>
      <div className="cl-cell cl-nav-cta">
        <div className="cl-nav-actions">
          <Link className="cl-button" href={waitlistHref} aria-current={pathname === waitlistHref ? "page" : undefined}>
            <span className="cl-nav-waitlist-full">{isHindi ? "प्रतीक्षा सूची" : "Join the waitlist"}</span>
            <span className="cl-nav-waitlist-short">{isHindi ? "सूची" : "Waitlist"}</span>
            <span aria-hidden="true">&#8594;</span>
          </Link>
        </div>
      </div>
    </header>
  );
}

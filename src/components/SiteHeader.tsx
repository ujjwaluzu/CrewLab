"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import BrandMark from "@/components/BrandMark";
import NavDropdowns from "@/components/NavDropdowns";
import { APP_URL } from "@/lib/site";

export default function SiteHeader({ home = false }: { home?: boolean }) {
  const pathname = usePathname() ?? "";
  const isHindi = pathname === "/hi" || pathname.startsWith("/hi/");
  const homeHref = isHindi ? "/hi" : "/";

  return (
    <header className={`cl-row cl-nav${home ? " site-head-home" : ""}`}>
      <div className="cl-cell cl-nav-brand">
        <Link className="cl-logo" href={homeHref} aria-label="CrewLab home" aria-current={pathname === homeHref ? "page" : undefined}><BrandMark /><span>CREWLAB</span></Link>
      </div>
      <div className="cl-cell cl-nav-links"><NavDropdowns /></div>
      <div className="cl-cell cl-nav-cta">
        <div className="cl-nav-actions">
          <a className="cl-button" href={APP_URL}>
            <span className="cl-nav-signup-full">{isHindi ? "साइन अप करें" : "Sign up"}</span>
            <span className="cl-nav-signup-short">{isHindi ? "साइन अप" : "Sign up"}</span>
            <span aria-hidden="true">&#8594;</span>
          </a>
        </div>
      </div>
    </header>
  );
}

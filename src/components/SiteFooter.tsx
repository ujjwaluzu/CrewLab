'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LANDING_PAGES } from "@/lib/site";
import BrandMark from "@/components/BrandMark";

function Logo({ current }: { current: boolean }) {
  return <Link className="cl-logo" href="/" aria-label="CrewLab home" aria-current={current ? "page" : undefined}><BrandMark /><span>CREWLAB</span></Link>;
}

export default function SiteFooter() {
  const pathname = usePathname() ?? "";
  const isCurrentPage = (href: string) => pathname === href || (href !== "/" && pathname.startsWith(`${href}/`));

  return <footer className="cl-footer">
    <div className="cl-row cl-foot-grid">
      <div className="cl-cell cl-foot-brand"><Logo current={pathname === "/"} /><p>Ideas to impact. Made for builders, by builders.</p></div>
      <div className="cl-cell cl-foot-links"><h3>Find your crew</h3>{LANDING_PAGES.map((page) => <Link href={page.path} key={page.path} className={isCurrentPage(page.path) ? "is-current-page" : undefined} aria-current={isCurrentPage(page.path) ? "page" : undefined}>{page.label}</Link>)}</div>
      <div className="cl-cell cl-foot-links"><h3>Product</h3><Link href="/explore" className={isCurrentPage("/explore") ? "is-current-page" : undefined} aria-current={isCurrentPage("/explore") ? "page" : undefined}>Explore projects</Link><Link href="/how-it-works" className={isCurrentPage("/how-it-works") ? "is-current-page" : undefined} aria-current={isCurrentPage("/how-it-works") ? "page" : undefined}>How it works</Link><Link href="/features" className={isCurrentPage("/features") ? "is-current-page" : undefined} aria-current={isCurrentPage("/features") ? "page" : undefined}>Features</Link></div>
      <div className="cl-cell cl-foot-links"><h3>Company</h3><Link href="/about" className={isCurrentPage("/about") ? "is-current-page" : undefined} aria-current={isCurrentPage("/about") ? "page" : undefined}>About</Link><Link href="https://blog.ujjwaluzu.in" target="_blank" rel="noopener noreferrer">Blog</Link><Link href="/waitlist" className={isCurrentPage("/waitlist") ? "is-current-page" : undefined} aria-current={isCurrentPage("/waitlist") ? "page" : undefined}>Contact</Link><Link href="https://discord.gg/m97vTraKq" target="_blank" rel="noopener noreferrer">Discord</Link><Link href="https://instagram.com/crewlab.in" target="_blank" rel="noopener noreferrer">Instagram</Link><Link href="https://x.com/crewlabin" target="_blank" rel="noopener noreferrer">X</Link></div>
    </div>
    <div className="cl-row cl-copyright"><span className="cl-cell cl-mono">© 2026 CrewLab. All rights reserved.</span><span className="cl-cell cl-mono">Made for builders, by builders</span></div>
    <div className="cl-row cl-wordmark" aria-label="CrewLab"><span>C</span><span>R</span><span>E</span><span>W</span><span>L</span><span>A</span><span>B</span></div>
  </footer>;
}

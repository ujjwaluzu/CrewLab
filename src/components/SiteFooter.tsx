import Link from "next/link";
import { LANDING_PAGES } from "@/lib/site";
import WaitlistForm from "@/components/WaitlistForm";

export default function SiteFooter() {
  return <footer className="site-footer">
    <div className="wrap">
      <div className="foot-grid">
        <div className="footer-brand"><Link className="logo" href="/">CrewLab</Link><p>Ideas to impact. Made for builders, by builders.</p></div>
        <div className="footer-links">
          <div><h4>Find your crew</h4><ul>{LANDING_PAGES.map((page) => <li key={page.path}><Link href={page.path}>{page.label}</Link></li>)}</ul></div>
          <div><h4>Product</h4><ul><li><Link href="/explore">Explore projects</Link></li><li><Link href="/how-it-works">How it works</Link></li><li><Link href="/features">Features</Link></li><li><Link href="/waitlist">Pricing</Link></li></ul></div>
        </div>
        <div className="footer-signup"><h4>Company</h4><ul><li><Link href="/about">About</Link></li><li><Link href="https://blog.ujjwaluzu.in" target="_blank" rel="noopener noreferrer">Blog</Link></li><li><Link href="/waitlist">Contact</Link></li><li><Link href="https://discord.gg/m97vTraKq" target="_blank" rel="noopener noreferrer">Discord</Link></li><li><Link href="https://instagram.com/crewlab.in" target="_blank" rel="noopener noreferrer">Instagram</Link></li><li><Link href="https://x.com/crewlabin" target="_blank" rel="noopener noreferrer">X</Link></li></ul><h4 className="footer-product-title">Stay in the loop</h4><WaitlistForm footer /></div>
      </div>
      <Link className="wordmark" href="/" aria-label="CrewLab home">crew<span>lab</span>.</Link>
      <div className="foot-base"><span>Ideas to impact</span><span>© 2026 CrewLab. All rights reserved.</span><span>Made for builders, by builders.</span></div>
    </div>
  </footer>;
}

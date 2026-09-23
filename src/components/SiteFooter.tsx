import Link from "next/link";
import BrandMark from "@/components/BrandMark";
import Icon from "@/components/Icon";

export default function SiteFooter() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-grid">
          <div>
            <Link className="logo" href="/"><BrandMark dark />CrewLab</Link>
            <p>Build together. Go further.</p>
          </div>
          <div>
            <h4>Product</h4>
            <ul><li><Link href="/explore">Explore</Link></li><li><Link href="/how-it-works">How it works</Link></li><li><Link href="/features">Features</Link></li><li><Link href="/waitlist">Pricing</Link></li></ul>
          </div>
          <div>
            <h4>Company</h4>
            <ul><li><Link href="/about">About</Link></li><li><Link href="https://blog.ujjwaluzu.in" target="_blank" rel="noopener noreferrer">Blog</Link></li><li><Link href="/waitlist">Contact</Link></li></ul>
          </div>
          <div>
            <div className="socials">
              <Link href="https://discord.gg/m97vTraKq" target="_blank" rel="noopener noreferrer" aria-label="Discord"><Icon name="discord" /></Link>
              <Link href="https://instagram.com/crewlab.in" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Icon name="instagram" /></Link>
              <Link href="https://x.com/crewlabin" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)"><Icon name="twitter" /></Link>
            </div>
          </div>
        </div>
        <div className="foot-base"><span>Ideas to impact</span><span>© 2026 CrewLab. All rights reserved.</span><span>Made for builders, by builders.</span></div>
      </div>
    </footer>
  );
}
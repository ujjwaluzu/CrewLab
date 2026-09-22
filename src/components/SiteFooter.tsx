import Link from "next/link";
import BrandMark from "@/components/BrandMark";
import Icon from "@/components/Icon";

import WaitlistForm from "@/components/WaitlistForm";

export default function SiteFooter() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-grid">
          <div>
            <Link className="logo" href="#top"><BrandMark dark />CrewLab</Link>
            <p>Build together. Go further.</p>
          </div>
          <div>
            <h4>Product</h4>
            <ul><li><Link href="#explore">Explore</Link></li><li><Link href="#how">How it works</Link></li><li><Link href="#workspace">Features</Link></li><li><Link href="#join">Pricing</Link></li></ul>
          </div>
          <div>
            <h4>Company</h4>
            <ul><li><Link href="#top">About</Link></li><li><Link href="#top">Blog</Link></li><li><Link href="#top">Careers</Link></li><li><Link href="#top">Contact</Link></li></ul>
          </div>
          <div>
            <h4>Stay in the loop</h4>
            <p>Get early access and updates.</p>
            <WaitlistForm footer />
            <div className="socials">
              <Link href="https://discord.gg/m97vTraKq" target="_blank" rel="noopener noreferrer" aria-label="Discord"><Icon name="discord" /></Link>
              <Link href="https://instagram.com/crewlab.in" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Icon name="instagram" /></Link>
              <Link href="#top" aria-label="X (Twitter)"><Icon name="twitter" /></Link>
            </div>
          </div>
        </div>
        <div className="foot-base"><span>Ideas to impact</span><span>© 2026 CrewLab. All rights reserved.</span><span>Made for builders, by builders.</span></div>
      </div>
    </footer>
  );
}
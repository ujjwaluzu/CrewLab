import Link from "next/link";
import BrandMark from "@/components/BrandMark";
import Icon from "@/components/Icon";

export default function SiteHeader() {
  return (
    <header className="site-head">
      <div className="wrap head-in">
        <Link className="logo" href="#top" aria-label="CrewLab home">
          <BrandMark />
          CrewLab
        </Link>
        <nav className="nav-links" aria-label="Primary">
          <Link href="/explore">Explore</Link>
          <Link href="/how-it-works">How it works</Link>
          <Link href="/about">About</Link>
        </nav>
        <Link className="btn btn-primary btn-sm" href="/waitlist">
          Join waitlist <Icon name="up-right" />
        </Link>
      </div>
    </header>
  );
}
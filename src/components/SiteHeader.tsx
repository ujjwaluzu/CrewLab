import Link from "next/link";
import BrandMark from "@/components/BrandMark";
import Icon from "@/components/Icon";
import Button from "@/components/Button";

export default function SiteHeader({ home = false }: { home?: boolean }) {
  return (
    <header className="site-head">
      <div className="wrap head-in">
        <Link className="logo" href="/" aria-label="CrewLab home">
          <BrandMark />
          CrewLab
        </Link>
        <nav className="nav-links" aria-label="Primary">
          {home ? <>
            <Link href="#how">How it works</Link>
            <Link href="#projects">Projects</Link>
            <Link href="#faq">FAQ</Link>
          </> : <>
            <Link href="/explore">Explore</Link>
            <Link href="/how-it-works">How it works</Link>
            <Link href="/about">About</Link>
          </>}
        </nav>
        <Button href="/waitlist" className="btn-sm">Join the waitlist <Icon name="up-right" /></Button>
      </div>
    </header>
  );
}

import Link from "next/link";
import BrandMark from "@/components/BrandMark";
import Icon from "@/components/Icon";
import Button from "@/components/Button";
import NavDropdowns from "@/components/NavDropdowns";

export default function SiteHeader({ home = false }: { home?: boolean }) {
  return (
    <header className={`site-head${home ? " site-head-home" : ""}`}>
      <div className="wrap head-in">
        <Link className="logo" href="/" aria-label="CrewLab home">
          <BrandMark />
          CrewLab
        </Link>
        <NavDropdowns />
        <Button href="/waitlist" className="btn-sm"><span className="head-cta-full">Join the waitlist</span><span className="head-cta-short">Waitlist</span><Icon name="up-right" /></Button>
      </div>
    </header>
  );
}

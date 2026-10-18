import Link from "next/link";
import BrandMark from "@/components/BrandMark";
import NavDropdowns from "@/components/NavDropdowns";

export default function SiteHeader({ home = false }: { home?: boolean }) {
  return (
    <header className={`cl-row cl-nav${home ? " site-head-home" : ""}`}>
      <div className="cl-cell cl-nav-brand">
        <Link className="cl-logo" href="/" aria-label="CrewLab home"><BrandMark /><span>CREWLAB</span></Link>
      </div>
      <div className="cl-cell cl-nav-links"><NavDropdowns /></div>
      <div className="cl-cell cl-nav-cta"><Link className="cl-button" href="/waitlist"><span className="cl-nav-waitlist-full">Join the waitlist</span><span className="cl-nav-waitlist-short">Waitlist</span><span aria-hidden="true">→</span></Link></div>
    </header>
  );
}

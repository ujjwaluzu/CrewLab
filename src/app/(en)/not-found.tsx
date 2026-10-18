import Link from "next/link";
import Icon from "@/components/Icon";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export default function NotFound() {
  return <div className="crewlab-page"><div className="cl-wrap">
    <SiteHeader />
    <main className="cl-row cl-not-found">
      <div className="cl-cell cl-not-found-copy">
        <p className="cl-mono">Error 404</p>
        <h1>Page not found.</h1>
        <p>The page you&apos;re looking for doesn&apos;t exist or has moved. Let&apos;s get you back to building.</p>
        <div className="cl-actions"><Link className="cl-button" href="/">Back to home <Icon name="arrow" /></Link><Link className="cl-button cl-ghost" href="/waitlist">Join the waitlist</Link></div>
      </div>
      <div className="cl-cell cl-not-found-code"><strong aria-hidden="true">404</strong></div>
    </main>
    <SiteFooter />
  </div></div>;
}

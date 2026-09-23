import { pageMetadata } from "@/lib/site";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import WaitlistForm from "@/components/WaitlistForm";

import "./waitlist.css";

export const metadata = pageMetadata({
  title: "Join the waitlist",
  description:
    "Join a global community of builders, creators, and problem-solvers. Be the first to access CrewLab when we launch.",
  canonical: "/waitlist",
});

export default function WaitlistPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="wl">
          <span className="halftone" aria-hidden="true" />
          <div className="wrap wl-in">
            <h1>
              Your next big <span className="hl"><svg className="brush" viewBox="0 0 600 140" preserveAspectRatio="none" aria-hidden="true"><use href="#brush-f" /></svg><span>project</span></span> <i>starts here.</i>
            </h1>
            <p>Join a global community of builders, creators, and problem-solvers. Be the first to access CrewLab when we launch.</p>
            <WaitlistForm />
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
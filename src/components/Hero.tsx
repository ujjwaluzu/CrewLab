import DashboardMock from "@/components/DashboardMock";
import Sticker from "@/components/Sticker";
import Button from "@/components/Button";
import Image from "next/image";

// Swap to "/collage/your-cutout.png" for an image placed in public/collage/.
const EMPTY_CUTOUT = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";

export default function Hero() {
  return <section className="home-hero" aria-labelledby="home-title">
    <div className="hero-intro">
      <Sticker className="waitlist-sticker">Waitlist open</Sticker>
      <h1 id="home-title">build real<br />products with<br /><span className="headline-pill ink-pill">real</span> <span className="headline-pill red-pill">people.</span></h1>
      <p className="lede">CrewLab is the builder community where founders, developers, designers, marketers, students and creators connect. Have an idea but no team? Find a cofounder. Have skills but no idea? Join a startup or side project.</p>
      <div className="cta-row">
        <Button href="/waitlist">Join the waitlist</Button>
        <Button href="/explore" variant="secondary">Find project teammates</Button>
      </div>
      <div className="proof">
        <span className="avs" aria-hidden="true"><i>AK</i><i>RJ</i><i>PS</i></span>
        <span>Be among the first builders on CrewLab</span>
      </div>
    </div>
    <div className="hero-collage" aria-label="A preview of the CrewLab workspace and sample projects">
      <article className="collage-project">
        <span className="collage-meta">Sample project</span><strong>StudySync</strong>
        <span>Looking for: frontend, UI design</span><b className="collage-status">In progress</b>
      </article>
      <Sticker className="collage-note">Have an idea,<br />but no team?</Sticker>
      <div className="dashboard-ticket"><DashboardMock /></div>
      <div className="collage-cutout-slot" aria-hidden="true"><Image src={EMPTY_CUTOUT} alt="" fill unoptimized sizes="120px" /></div>
      <svg className="collage-pointer" viewBox="0 0 120 70" aria-hidden="true"><path d="M4 4l6 34 9-10 12 18 8-5-12-17 14-2z" fill="var(--ink)" stroke="var(--cream)" strokeWidth="2"/><rect x="34" y="40" width="70" height="24" rx="12" fill="var(--red)"/><text x="48" y="57" fontFamily="var(--font-mono)" fontSize="12" fontWeight="700" fill="var(--ink)">ujwal</text></svg>
      <Sticker className="collage-sticker">good builders<br />build together.</Sticker>
      <div className="collage-toast"><span className="toast-avatar">AK</span><span>Aman joined the team</span></div>
    </div>
  </section>;
}

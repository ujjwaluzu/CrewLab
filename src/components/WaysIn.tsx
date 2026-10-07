import Link from "next/link";
import Icon from "@/components/Icon";

export default function WaysIn() {
  return (
    <section className="ways" id="explore">
      <article className="way w1">
        <span className="num">01</span>
        <span className="ico"><Icon name="bulb" /></span>
        <h2>Have an idea, <em>but no team?</em></h2>
        <p>Find a cofounder and startup teammates who can help you build it — developers, designers, marketers and more.</p>
        <Link className="go" href="/find-cofounder" aria-label="Find a cofounder"><Icon name="arrow" /></Link>
      </article>
      <article className="way w2">
        <span className="num">02</span>
        <span className="ico"><Icon name="users" /></span>
        <h2>Want to build, <em>but no idea?</em></h2>
        <p>Explore startup projects and side projects, find a team that needs your skills, and start building with people.</p>
        <Link className="go" href="/side-projects" aria-label="Join a project"><Icon name="arrow" /></Link>
      </article>
      <article className="way w3">
        <h2>Good builders <em>build together.</em></h2>
      </article>
    </section>
  );
}
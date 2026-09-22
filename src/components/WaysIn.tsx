import Link from "next/link";
import Icon from "@/components/Icon";

export default function WaysIn() {
  return (
    <section className="ways" id="explore">
      <article className="way w1">
        <span className="num">01</span>
        <span className="ico"><Icon name="bulb" /></span>
        <h2>Got an idea, <em>but no crew?</em></h2>
        <p>Share your idea, find the right people, and turn it into a real project.</p>
        <Link className="go" href="#join" aria-label="Share your idea"><Icon name="arrow" /></Link>
      </article>
      <article className="way w2">
        <span className="num">02</span>
        <span className="ico"><Icon name="users" /></span>
        <h2>Want to build, <em>but no idea?</em></h2>
        <p>Explore exciting ideas, find projects that match your skills, and join a team.</p>
        <Link className="go" href="#join" aria-label="Explore projects"><Icon name="arrow" /></Link>
      </article>
      <article className="way w3">
        <h2>Good builders <em>build together.</em></h2>
      </article>
    </section>
  );
}
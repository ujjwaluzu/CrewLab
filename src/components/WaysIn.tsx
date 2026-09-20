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
        <Link className="go" href="#projects" aria-label="Explore projects"><Icon name="arrow" /></Link>
      </article>
      <article className="way w3">
        <svg viewBox="0 0 400 400" preserveAspectRatio="xMidYMin slice" aria-hidden="true">
          <g fill="#F1EDE4">
            <circle cx="40" cy="50" r="1.6" /><circle cx="120" cy="24" r="1.2" /><circle cx="250" cy="30" r="1.4" /><circle cx="376" cy="150" r="1.2" />
            <circle cx="60" cy="170" r="1.4" /><circle cx="150" cy="120" r="1.2" /><circle cx="190" cy="200" r="1" /><circle cx="20" cy="110" r="1.2" />
          </g>
          <g fill="none" stroke="#F1EDE4" strokeWidth="1.4" opacity=".7"><path d="M90 70v10M85 75h10M180 40v8M176 44h8M120 180v8M116 184h8" /></g>
          <g transform="translate(38 -14) scale(.9)" filter="url(#wobble)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3">
            <path d="M300 116C296 140 308 152 300 176" fill="none" stroke="#F1EDE4" />
            <ellipse cx="300" cy="70" rx="30" ry="40" fill="#D42A1E" stroke="#0F0E0C" />
            <path d="M293 108l7 10 7-10z" fill="#D42A1E" stroke="#0F0E0C" />
            <circle cx="300" cy="192" r="17" fill="#F1EDE4" stroke="#0F0E0C" />
            <ellipse cx="303" cy="190" rx="10" ry="7" fill="#0F0E0C" />
            <path d="M282 212c-6 18-4 34-2 46h40c2-12 4-28-4-46z" fill="#F1EDE4" stroke="#0F0E0C" />
            <path d="M290 258l-3 24M312 258l3 24" fill="none" stroke="#F1EDE4" />
            <path d="M318 222c8-14 4-28-8-40" fill="none" stroke="#F1EDE4" />
          </g>
        </svg>
        <h2>Good builders <em>build together.</em></h2>
      </article>
    </section>
  );
}
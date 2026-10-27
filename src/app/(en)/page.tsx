import Link from "next/link";
import BrandMark from "@/components/BrandMark";
import NavDropdowns from "@/components/NavDropdowns";
import { FeatureDroid } from "@/components/visuals/FeatureDroid";
import { LANDING_PAGES } from "@/lib/site";
import { faqs } from "@/lib/faqs";
import HomeLightsaber from "@/components/visuals/HomeLightsaber";
import { APP_URL } from "@/lib/site";
import "./homepage.css";

const homeFaqs = [faqs[0], faqs[1], faqs[2], faqs[3], faqs[5], faqs[9]];
const steps = [
  ["01", "Share or explore", "Post your startup idea and list the roles you need - a technical cofounder, a designer, a marketer - or browse open projects to join."],
  ["02", "Find your crew", "Explore developers, designers and creators who want to join your startup team or side project."],
  ["03", "Build together", "Collaborate on the project, divide the work, and ship real products with real people."],
  ["04", "Track progress", "Follow milestones, tasks and commits with GitHub integration so the team stays in sync."],
];
const crewItems = LANDING_PAGES.map((page) => ({ title: page.label, description: page.description, href: page.path }));

function Logo() {
  return <Link className="cl-logo" href="/" aria-label="CrewLab home" aria-current="page"><BrandMark /><span>CREWLAB</span></Link>;
}

function SectionHead({ id, title, intro, count }: { id: string; title: string; intro: string; count?: string }) {
  return <div className="cl-row cl-section-head" id={id}>
    <div className="cl-cell cl-head-title"><h2>{title}</h2></div>
    <div className="cl-cell cl-head-copy"><p>{intro}</p></div>
    <div className="cl-cell cl-head-count">{count && <><span className="cl-mono">STEPS</span><strong>{count}</strong></>}</div>
  </div>;
}

export default function Home() {
  return <div className="crewlab-page"><div className="cl-wrap">
    <header className="cl-row cl-nav">
      <div className="cl-cell cl-nav-brand"><Logo /></div>
      <div className="cl-cell cl-nav-links"><NavDropdowns /></div>
      <div className="cl-cell cl-nav-cta"><div className="cl-nav-actions"><a className="cl-button" href={APP_URL}><span className="cl-nav-signup-full">Sign up</span><span className="cl-nav-signup-short">Sign up</span><span aria-hidden="true">&#8594;</span></a></div></div>
    </header>

    <main id="top">
      <section className="cl-row cl-hero" aria-labelledby="hero-title">
        <div className="cl-cell cl-hero-copy"><p className="cl-mono cl-kicker"><i /> CrewLab&nbsp; · &nbsp;India-first builder community&nbsp; · &nbsp;Cofounders&nbsp; · &nbsp;Side projects</p><h1 id="hero-title">CREWLAB:<br />BUILD PRODUCTS<br /><span>WITH REAL PEOPLE.</span></h1><div className="cl-actions"><a className="cl-button" href={APP_URL}>Sign up <span aria-hidden="true">→</span></a><a className="cl-button cl-ghost" href="#crew">Find project teammates</a></div></div>
        <div className="cl-cell cl-droid-cell aiptx-droid-stage"><FeatureDroid className="cl-droid-art" /></div>
      </section>

      <section className="cl-row cl-intro" aria-label="About CrewLab">
        <div className="cl-cell cl-intro-main"><p>CrewLab is an India-first startup collaboration community where founders, developers, designers, marketers, students and creators connect. Have an idea but no team? Find a cofounder. Have skills but no idea? Discover a startup or side project to join.</p></div>
        <div className="cl-cell cl-audience"><span className="cl-mono">01 / START WITH AN IDEA</span><strong>Founders</strong></div>
        <div className="cl-cell cl-audience"><span className="cl-mono">02 / BRING YOUR SKILLS</span><strong>Builders</strong></div>
        <div className="cl-cell cl-audience"><span className="cl-mono">03 / MAKE IT REAL</span><strong>Creators</strong></div>
      </section>

      <section className="cl-section">
        <SectionHead id="how" title="How it works" intro="A simple way to go from a solo idea to a working project with the right cofounders and teammates." count="04" />
        <div className="cl-row cl-steps">{steps.map(([number, title, description]) => <article className="cl-cell cl-step" key={number}><span className="cl-mono cl-step-num">{number}</span><h3>{title}</h3><p>{description}</p></article>)}</div>
      </section>

      <section className="cl-section cl-how-flow" aria-label="CrewLab crew signal">
        <HomeLightsaber />
      </section>

      <section className="cl-section">
        <SectionHead id="crew" title="Find your crew" intro="Startup teams, side projects and student projects. Find the people to build with, whatever you’re making." />
        <div className="cl-crew-list">{crewItems.map((item) => <Link className="cl-row cl-crew-item" href={item.href} key={item.title}><span className="cl-cell cl-crew-title">{item.title}</span><span className="cl-cell cl-crew-description">{item.description}</span><span className="cl-cell cl-plus" aria-hidden="true">+</span></Link>)}</div>
      </section>

      <section className="cl-section">
        <SectionHead id="faq" title="FAQ" intro="Everything founders and builders ask about finding cofounders, joining projects and collaborating on CrewLab." />
        <div className="cl-faq-list">{homeFaqs.map((faq, index) => <details className="cl-row cl-faq-item" key={faq.question}><summary className="cl-faq-summary"><span className="cl-cell cl-faq-num cl-mono">0{index + 1}</span><span className="cl-cell cl-faq-question">{faq.question}</span><span className="cl-cell cl-plus" aria-hidden="true">+</span></summary><div className="cl-faq-answer"><p>{faq.answer}</p></div></details>)}</div>
      </section>

      <section className="cl-row cl-join" id="join"><div className="cl-cell cl-join-title"><h2>JOIN THE <span>CREW.</span></h2></div><div className="cl-cell cl-join-form"><span className="cl-mono">CREATE YOUR ACCOUNT</span><a className="cl-button" href={APP_URL}>Sign up <span aria-hidden="true">→</span></a></div></section>
    </main>

    <footer className="cl-footer">
      <div className="cl-row cl-foot-grid">
        <div className="cl-cell cl-foot-brand"><Logo /><p>Ideas to impact. Made for builders, by builders.</p></div>
        <div className="cl-cell cl-foot-links"><h3>Find your crew</h3>{crewItems.map((item) => <Link href={item.href} key={item.title}>{item.title}</Link>)}</div>
        <div className="cl-cell cl-foot-links"><h3>Product</h3><Link href="/explore">Explore projects</Link><Link href="/how-it-works">How it works</Link><Link href="/features">Features</Link><Link href="/resources">Guides & resources</Link></div>
        <div className="cl-cell cl-foot-links"><h3>Company</h3><Link href="/about">About</Link><a href={APP_URL}>Sign up</a><Link href="https://discord.gg/m97vTraKq" target="_blank" rel="noopener noreferrer">Discord</Link><Link href="https://instagram.com/crewlab.in" target="_blank" rel="noopener noreferrer">Instagram</Link><Link href="https://x.com/crewlabin" target="_blank" rel="noopener noreferrer">X</Link></div>
      </div>
      <div className="cl-row cl-copyright"><span className="cl-cell cl-mono">© 2026 CrewLab. All rights reserved.</span><span className="cl-cell cl-mono">Made for builders, by builders</span></div>
      <div className="cl-row cl-wordmark" aria-label="CrewLab"><span>C</span><span>R</span><span>E</span><span>W</span><span>L</span><span>A</span><span>B</span></div>
    </footer>
  </div></div>;
}

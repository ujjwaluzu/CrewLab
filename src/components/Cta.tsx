import Image from "next/image";
import WaitlistForm from "@/components/WaitlistForm";
import TornEdge from "@/components/TornEdge";


export default function Cta() {
  return (
    <section className="cta" id="join">
      <TornEdge seedIndex={2} color="var(--paper)" />
      <div className="cta-grid">
        <div className="cta-art" aria-hidden="true">
          <Image src="/goat.webp" alt="" fill sizes="50vw" className="cta-goat" />
        </div>
        <div className="cta-copy">
          <h2>Your next big <span className="hl"><svg className="brush" viewBox="0 0 600 140" preserveAspectRatio="none" aria-hidden="true"><use href="#brush-f" /></svg><span>project</span></span> <i>starts here.</i></h2>
          <p>Join a global community of builders, creators, and problem-solvers. Be the first to access CrewLab when we launch.</p>
          <WaitlistForm />
        </div>
      </div>
    </section>
  );
}
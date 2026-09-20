import WaitlistForm from "@/components/WaitlistForm";
import TornEdge from "@/components/TornEdge";


export default function Cta() {
  return (
    <section className="cta" id="join">
      <TornEdge seedIndex={2} color="var(--paper)" />
      <div className="cta-grid">
        <div className="cta-art" aria-hidden="true">
          <svg viewBox="0 0 500 560" preserveAspectRatio="xMidYMid slice">
            <g fill="#F1EDE4">
              <circle cx="60" cy="90" r="1.8" /><circle cx="150" cy="50" r="1.3" /><circle cx="420" cy="80" r="1.8" /><circle cx="460" cy="230" r="1.3" />
              <circle cx="40" cy="260" r="1.5" /><circle cx="90" cy="420" r="1.3" /><circle cx="440" cy="400" r="1.6" /><circle cx="300" cy="40" r="1.2" /><circle cx="470" cy="500" r="1.3" />
            </g>
            <g fill="none" stroke="#F1EDE4" strokeWidth="1.5" opacity=".75"><path d="M380 130v12M374 136h12M110 170v10M105 175h10M400 320v10M395 325h10M70 500v10M65 505h10" /></g>
            <g filter="url(#wobble)" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="235" cy="270" r="140" fill="#BFDCC8" stroke="#0F0E0C" strokeWidth="4" />
              <path d="M120 230c20-30 60-40 84-24 14 10 4 30-10 40 18 14 4 44-20 52-24 6-36-14-40-32-6-10-20-14-14-36z" fill="#26301F" stroke="#0F0E0C" strokeWidth="3" />
              <path d="M270 190c26-20 66-14 84 10 10 16-6 34-24 34 4 26-14 56-40 66-20 6-30-14-26-36 4-18-14-20-14-34 0-16 8-28 20-40z" fill="#26301F" stroke="#0F0E0C" strokeWidth="3" />
              <path d="M330 340c18-6 36 4 34 22-2 16-22 26-36 18-14-10-14-32 2-40z" fill="#26301F" stroke="#0F0E0C" strokeWidth="3" />
              <g transform="translate(318 380) rotate(38)" stroke="#0F0E0C" strokeWidth="4">
                <path d="M0 -70C26 -46 32 -8 24 34H-24C-32 -8 -26 -46 0 -70Z" fill="#F1EDE4" />
                <path d="M-24 34l-22 24 8-50zM24 34l22 24-8-50z" fill="#D42A1E" />
                <circle cx="0" cy="-20" r="11" fill="#BFDCC8" />
                <path d="M-14 34h28l-6 32h-16z" fill="#D42A1E" />
              </g>
            </g>
          </svg>
        </div>
        <div className="cta-copy">
          <p className="kicker mono" style={{ margin: "0 0 22px" }}>Be part of what&apos;s next</p>
          <h2>Your next big <span className="hl"><svg className="brush" viewBox="0 0 600 140" preserveAspectRatio="none" aria-hidden="true"><use href="#brush-f" /></svg><span>project</span></span> <i>starts here.</i></h2>
          <p>Join a global community of builders, creators, and problem-solvers. Be the first to access CrewLab when we launch.</p>
          <WaitlistForm />
        </div>
      </div>
    </section>
  );
}
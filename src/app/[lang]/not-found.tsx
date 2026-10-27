import Link from "next/link";
import { CrewGridAnimation } from "@/components/visuals/CrewGridAnimation";

export default function HindiNotFound() {
  return (
    <main className="crewlab-page crewlab-hi" lang="hi-IN">
      <div className="cl-wrap">
        <section className="cl-section">
          <CrewGridAnimation className="cl-not-found-droid" locale="hi" />
          <div className="cl-cell">
            <p className="cl-mono">CrewLab | 404</p>
            <h1>यह पेज नहीं मिला।</h1>
            <p>पता जाँचें या CrewLab के हिन्दी होमपेज पर जाएँ।</p>
            <Link className="cl-button" href="/hi">होमपेज पर जाएँ</Link>
          </div>
        </section>
      </div>
    </main>
  );
}

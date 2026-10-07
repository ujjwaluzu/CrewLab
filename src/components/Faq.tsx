import { faqs } from "@/lib/faqs";
import TornEdge from "@/components/TornEdge";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function Faq() {
  return (
    <section className="pad faq" id="faq">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <TornEdge seedIndex={4} color="var(--paper-2)" />
      <div className="wrap faq-wrap">
        <div className="sec-head faq-head">
          <div>
            <h2 className="h">Frequently asked <em>questions</em></h2>
            <p className="note">Everything founders and builders ask about finding cofounders, joining projects and collaborating on CrewLab.</p>
          </div>
        </div>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <details className="faq-item" key={faq.question}>
              <summary>
                <span className="faq-num" aria-hidden="true">0{index + 1}</span>
                <span className="faq-q">{faq.question}</span>
                <span className="faq-toggle" aria-hidden="true" />
              </summary>
              <div className="faq-a">
                <p>{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
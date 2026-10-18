import type { Faq } from "@/lib/faqs";

export default function PageFaqSection({
  id,
  title,
  intro,
  items,
  label = "QUESTIONS / ANSWERS",
  countLabel = "FAQ",
}: {
  id: string;
  title: string;
  intro: string;
  items: Faq[];
  label?: string;
  countLabel?: string;
}) {
  return (
    <section className="cl-section cl-page-faq" aria-labelledby={`${id}-title`}>
      <div className="cl-row cl-section-head">
        <div className="cl-cell cl-head-title">
          <span className="cl-mono cl-page-label">{label}</span>
          <h2 id={`${id}-title`}>{title}</h2>
        </div>
        <div className="cl-cell cl-head-copy"><p>{intro}</p></div>
        <div className="cl-cell cl-head-count"><span className="cl-mono">{countLabel}</span><strong>{String(items.length).padStart(2, "0")}</strong></div>
      </div>
      <div className="cl-faq-list">
        {items.map((item, index) => (
          <details className="cl-row cl-faq-item" key={item.question}>
            <summary className="cl-faq-summary">
              <span className="cl-cell cl-faq-num cl-mono">{String(index + 1).padStart(2, "0")}</span>
              <span className="cl-cell cl-faq-question">{item.question}</span>
              <span className="cl-cell cl-plus" aria-hidden="true">+</span>
            </summary>
            <div className="cl-faq-answer"><p>{item.answer}</p></div>
          </details>
        ))}
      </div>
    </section>
  );
}

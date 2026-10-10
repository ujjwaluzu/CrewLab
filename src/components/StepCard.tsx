export default function StepCard({ number, title, children, tone = "paper" }: { number: string; title: string; children: string; tone?: "paper" | "tan" | "ink" }) {
  return <li className={`step-card ${tone}`}>
    <div className="step-card-copy">
      <h3>{title}</h3>
      <p>{children}</p>
    </div>
    <span className="step-number" aria-hidden="true">{number}</span>
  </li>;
}

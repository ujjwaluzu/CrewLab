export default function StepCard({ number, title, children, tone = "paper" }: { number: string; title: string; children: string; tone?: "paper" | "tan" | "ink" }) {
  return <li className={`step-card ${tone}`}>
    <span className="step-number">{number}</span>
    <h3>{title}</h3>
    <p>{children}</p>
  </li>;
}

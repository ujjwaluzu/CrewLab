import Icon from "@/components/Icon";

type StepIcon = "doc" | "users" | "code" | "bars";

export default function StepCard({ number, icon, title, children, tone = "paper" }: { number: string; icon: StepIcon; title: string; children: string; tone?: "paper" | "blush" | "tan" | "ink" }) {
  return <li className={`step-card ${tone}`}>
    <div className="step-card-top">
      <span className="step-number" aria-hidden="true">{number}</span>
      <span className="step-icon"><Icon name={icon} /></span>
    </div>
    <div className="step-card-copy">
      <h3>{title}</h3>
      <p>{children}</p>
    </div>
  </li>;
}

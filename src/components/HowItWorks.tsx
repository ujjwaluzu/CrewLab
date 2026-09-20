import Icon from "@/components/Icon";

const steps = [
  ["01", "doc", "Share or explore", "Post your idea or browse existing projects."],
  ["02", "users", "Find your crew", "Connect with people who share your interests and skills."],
  ["03", "code", "Build together", "Collaborate, plan, and bring your idea to life."],
  ["04", "bars", "Track progress", "See real progress with GitHub integration."],
] as const;

export default function HowItWorks() {
  return (
    <section className="pad" id="how">
      <div className="wrap">
        <div className="sec-head">
          <h2 className="h">How CrewLab <em>works</em></h2>
          <p>A simple way to go from an idea to a working project with the right people.</p>
        </div>
        <ol className="steps" style={{ listStyle: "none", margin: 0, padding: 0 }}>
          {steps.map(([number, icon, title, description]) => (
            <li className="step" key={number}>
              <div className="n" aria-hidden="true">{number}</div>
              <Icon name={icon} className="ic" />
              <h3>{title}</h3>
              <p>{description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
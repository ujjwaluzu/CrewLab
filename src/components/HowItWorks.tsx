import Icon from "@/components/Icon";

const steps = [
  ["01", "doc", "Share or explore", "Post your startup idea and list the roles you need — a technical cofounder, a designer, a marketer — or browse open projects to join."],
  ["02", "users", "Find your crew", "Get matched with developers, designers and creators who want to join your startup team or side project."],
  ["03", "code", "Build together", "Collaborate on the project, divide the work, and ship real products with real people."],
  ["04", "bars", "Track progress", "Follow milestones, tasks and commits with GitHub integration so the team stays in sync."],
] as const;

export default function HowItWorks() {
  return (
    <section className="pad" id="how">
      <div className="wrap">
        <div className="sec-head">
          <h2 className="h">Startup team building, <em>made simple</em></h2>
          <p>A simple way to go from a solo idea to a working project with the right cofounders and teammates.</p>
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
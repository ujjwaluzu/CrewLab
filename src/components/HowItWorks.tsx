import StepCard from "@/components/StepCard";
import SectionHeader from "@/components/SectionHeader";

const steps = [
  ["01", "doc", "Share or explore", "Post your startup idea and list the roles you need — a technical cofounder, a designer, a marketer — or browse open projects to join."],
  ["02", "users", "Find your crew", "Get matched with developers, designers and creators who want to join your startup team or side project."],
  ["03", "code", "Build together", "Collaborate on the project, divide the work, and ship real products with real people."],
  ["04", "bars", "Track progress", "Follow milestones, tasks and commits with GitHub integration so the team stays in sync."],
] as const;

export default function HowItWorks() {
  return (
    <section className="pad home-how" id="how">
      <div className="wrap">
        <SectionHeader accent="made simple." description="A simple way to go from a solo idea to a working project with the right cofounders and teammates.">startup team building,</SectionHeader>
        <ol className="steps home-steps" style={{ listStyle: "none", margin: 0, padding: 0 }}>
          {steps.map(([number, , title, description]) => (
            <StepCard key={number} number={number} title={title} tone="paper">{description}</StepCard>
          ))}
        </ol>
      </div>
    </section>
  );
}

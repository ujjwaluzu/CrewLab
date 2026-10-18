import StepCard from "@/components/StepCard";
import SectionHeader from "@/components/SectionHeader";
import CrystalizedBall from "@/components/CrystalizedBall";

const steps = [
  ["01", "doc", "Share or explore", "Post your startup idea and list the roles you need - a technical cofounder, a designer, a marketer - or browse open projects to join."],
  ["02", "users", "Find your crew", "Explore developers, designers and creators who want to join your startup team or side project."],
  ["03", "code", "Build together", "Collaborate on the project, divide the work, and ship real products with real people."],
  ["04", "bars", "Track progress", "Follow milestones, tasks and commits with GitHub integration so the team stays in sync."],
] as const;

export default function HowItWorks() {
  return (
    <section className="pad home-how" id="how">
      <div className="home-how-crystal" aria-hidden="true">
        <div className="home-how-crystal-ball">
          <CrystalizedBall
            preset="plasma"
            color="#E5412D"
            theme="light"
            size={0.78}
            crackle={0.72}
            fill={0.5}
            interactive
            hoverStrength={0.55}
            strands={5}
            flares={0.5}
            glow={0.72}
            sparks={0.4}
            particleCount={12000}
            motion="rise"
            particleShape="square"
            depth={0.6}
            sway={0.5}
            twinkle={0.5}
            haze={0.6}
            dustSpeed={0.8}
            speed={0.8}
            intro
            paused={false}
          />
        </div>
        <span className="home-how-crystal-wash" />
      </div>
      <div className="wrap">
        <SectionHeader accent="made simple." description="A simple way to go from a solo idea to a working project with the right cofounders and teammates.">startup team building,</SectionHeader>
        <ol className="steps home-steps" style={{ listStyle: "none", margin: 0, padding: 0 }}>
          {steps.map(([number, icon, title, description], index) => (
            <StepCard
              key={number}
              number={number}
              icon={icon}
              title={title}
              tone={index === 1 ? "blush" : index === 2 ? "tan" : index === 3 ? "ink" : "paper"}
            >
              {description}
            </StepCard>
          ))}
        </ol>
      </div>
    </section>
  );
}

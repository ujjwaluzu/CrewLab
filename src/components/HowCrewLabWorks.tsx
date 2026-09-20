import { ArrowRight, ChartNoAxesColumn, Code2, FileText, UsersRound } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: FileText,
    title: "Share or explore",
    description: "Post your idea or browse existing projects.",
    className: "",
  },
  {
    number: "02",
    icon: UsersRound,
    title: "Find your crew",
    description: "Connect with people who share your interests and skills.",
    className: "border-l border-ink/10",
  },
  {
    number: "03",
    icon: Code2,
    title: "Build together",
    description: "Collaborate, plan, and bring your idea to life.",
    className: "border-t border-ink/10 lg:border-t-0 lg:border-l",
  },
  {
    number: "04",
    icon: ChartNoAxesColumn,
    title: "Track progress",
    description: "See real progress with GitHub integration.",
    className: "border-l border-t border-ink/10 lg:border-t-0",
  },
];

export default function HowCrewLabWorks() {
  return (
    <section
      id="how-crewlab-works"
      aria-labelledby="how-crewlab-works-heading"
      className="border-t border-ink/10 bg-cream"
    >
      <div className="mx-auto max-w-[1400px] px-5 py-6 sm:px-8 sm:py-8 lg:px-14 lg:py-12">
        <div className="mt-4 flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-8">
          <h2
            id="how-crewlab-works-heading"
            className="shrink-0 text-[clamp(2.5rem,5vw,4rem)] font-bold leading-[0.95] tracking-[-0.03em] text-ink"
          >
            How CrewLab works
          </h2>
          <span
            aria-hidden="true"
            className="hidden h-px flex-1 bg-ink/10 lg:block"
          />
          <p className="max-w-sm text-[15px] leading-relaxed text-ink/65">
            A simple way to go from an idea to a working project with the right
            people.
          </p>
        </div>

        <div className="mt-6 grid grid-cols-2 lg:mt-10 lg:grid-cols-4">
          {steps.map(({ number, icon: Icon, title, description, className }, index) => {
            const isLast = index === steps.length - 1;
            return (
              <div
                key={number}
                data-step={number}
                className={`group relative px-3 py-6 sm:px-6 lg:px-8 lg:py-7 ${className}`}
              >
                <span className="font-mono text-[11px] tracking-[0.35em] text-ink/40">
                  {number}
                </span>

                <Icon
                  aria-hidden="true"
                  strokeWidth={2}
                  className="mt-4 h-8 w-8 text-ink transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-95 motion-reduce:transform-none motion-reduce:transition-none lg:h-9 lg:w-9"
                />

                <h3 className="mt-5 text-lg font-medium tracking-tight text-ink lg:text-xl">
                  {title}
                </h3>

                <p className="mt-2 max-w-[18ch] text-[14px] leading-relaxed text-ink/60 sm:text-[15px]">
                  {description}
                </p>

                {!isLast && (
                  <ArrowRight
                    aria-hidden="true"
                    strokeWidth={1.5}
                    className="absolute -right-4 top-1/2 hidden h-4 w-4 -translate-y-1/2 text-ink/40 transition-transform duration-300 group-hover:translate-x-0.5 motion-reduce:transform-none motion-reduce:transition-none lg:block"
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
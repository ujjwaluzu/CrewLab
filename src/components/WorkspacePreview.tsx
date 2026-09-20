import Image from "next/image";

import {
  Activity,
  GitBranch,
  ListChecks,
  MessageCircle,
  UsersRound,
} from "lucide-react";

const features = [
  { icon: UsersRound, label: "Team collaboration" },
  { icon: GitBranch, label: "GitHub integration" },
  { icon: ListChecks, label: "Task & milestone tracking" },
  { icon: MessageCircle, label: "Project discussions" },
  { icon: Activity, label: "Activity feed" },
];

export default function WorkspacePreview() {
  return (
    <section
      aria-labelledby="workspace-preview-heading"
      className="border-t border-ink/10 bg-cream"
    >
      <div className="mx-auto max-w-[1400px] px-5 py-5 sm:px-6 sm:py-6 lg:px-8 lg:py-8">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[2fr_3fr] lg:gap-8">
          <div className="flex flex-col lg:pt-1">
            <h2
              id="workspace-preview-heading"
              className="text-[clamp(2.5rem,4.5vw,4rem)] leading-[0.95] tracking-[-0.03em] text-ink"
            >
              <span className="block font-bold">A workspace</span>
              <span className="block font-light">for real builders</span>
            </h2>

            <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-ink/65 sm:text-base">
              Everything your team needs to go from an idea to a real project —
              all in one place.
            </p>

            <ul className="mt-6 border-b border-ink/10">
              {features.map(({ icon: Icon, label }) => (
                <li
                  key={label}
                  className="group flex items-center gap-3 border-t border-ink/10 py-2.5"
                >
                  <span
                    aria-hidden="true"
                    className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-[4px] bg-lime text-ink transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-95 motion-reduce:transform-none motion-reduce:transition-none"
                  >
                    <Icon strokeWidth={2} className="h-4 w-4" />
                  </span>
                  <span className="text-[15px] font-medium text-ink">
                    {label}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -right-5 -top-12 hidden h-60 w-80 rotate-[-6deg] bg-lime/60 lg:block"
              style={{
                clipPath: "polygon(4% 16%, 100% 0, 92% 100%, 0 84%)",
              }}
            />
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-9 -left-6 hidden h-44 w-56 rotate-[8deg] bg-lime/70 lg:block"
              style={{
                clipPath: "polygon(0 0, 96% 10%, 82% 100%, 10% 90%)",
              }}
            />

            <div className="group relative rounded-lg border border-ink/10 bg-ink p-1.5 shadow-[0_2px_0_rgba(20,20,20,0.06),0_30px_80px_-40px_rgba(20,20,20,0.45)] transition-transform duration-500 hover:-translate-y-1 motion-reduce:transform-none motion-reduce:transition-none lg:-mr-4 xl:-mr-6">
              <Image
                src="/images/crewlab-dashboard.png"
                alt="Preview of the CrewLab workspace dashboard"
                width={1672}
                height={941}
                sizes="(max-width: 767px) 100vw, 50vw"
                className="h-auto w-full rounded-[6px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
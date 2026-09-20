import Image from "next/image";

export default function IdeaBuilderSection() {
  return (
    <section
      aria-label="For idea owners and builders"
      className="grid grid-cols-1 md:grid-cols-2 lg:min-h-[26rem] lg:grid-cols-[1fr_1fr_0.62fr]"
    >
      <a
        href="#"
        aria-label="For idea owners — got an idea, but no crew?"
        className="group flex flex-col border-b border-white/15 bg-ink px-5 pb-7 pt-5 text-cream transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime motion-reduce:transition-none sm:px-6 md:border-b-0 md:border-r md:px-8 lg:px-10 lg:pb-8"
      >
        <div>
          <span className="font-mono text-[11px] tracking-[0.35em] text-cream/40">
            01
          </span>
        </div>

        <div className="mt-6 flex items-center gap-2.5">
          <span
            aria-hidden="true"
            className="h-[9px] w-[9px] bg-lime"
          />
          <span className="text-[10px] font-semibold tracking-[0.32em] text-cream/60">
            FOR IDEA OWNERS
          </span>
        </div>

        <span className="mt-5 inline-flex h-11 w-11 items-center justify-center border border-lime/40 text-lime transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-95 motion-reduce:transform-none motion-reduce:transition-none">
          <LightbulbIcon className="h-5 w-5" />
        </span>

        <h2 className="mt-5 max-w-[11ch] text-[clamp(1.75rem,4.2vw,3rem)] leading-[0.95] tracking-[-0.03em] text-cream">
          <span className="block font-bold">Got an idea,</span>
          <span className="block font-light">but no crew?</span>
        </h2>

        <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-cream/65">
          Share your idea, find the right people, and turn it into a real
          project.
        </p>

        <div className="mt-auto pt-8">
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-cream/25 text-cream/75 transition-colors duration-300 group-hover:border-cream/45 group-hover:bg-cream/10 motion-reduce:transition-none">
            <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 motion-reduce:transform-none motion-reduce:transition-none" />
          </span>
        </div>
      </a>

      <a
        href="#"
        aria-label="For builders — want to build, but no idea?"
        className="group flex flex-col border-b border-ink/10 bg-cream px-5 pb-7 pt-5 text-ink transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink motion-reduce:transition-none sm:px-6 md:px-8 lg:border-b-0 lg:border-r lg:border-ink/10 lg:px-10 lg:pb-8"
      >
        <div>
          <span className="font-mono text-[11px] tracking-[0.35em] text-ink/40">
            02
          </span>
        </div>

        <div className="mt-6 flex items-center gap-2.5">
          <span
            aria-hidden="true"
            className="h-[9px] w-[9px] bg-lavender"
          />
          <span className="text-[10px] font-semibold tracking-[0.32em] text-ink/60">
            FOR BUILDERS
          </span>
        </div>

        <span className="mt-5 inline-flex h-11 w-11 items-center justify-center bg-lavender text-ink transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-95 motion-reduce:transform-none motion-reduce:transition-none">
          <PeopleIcon className="h-5 w-5" />
        </span>

        <h2 className="mt-5 max-w-[12ch] text-[clamp(1.75rem,4.2vw,3rem)] leading-[0.95] tracking-[-0.03em] text-ink">
          <span className="block font-bold">Want to build,</span>
          <span className="block font-light">but no idea?</span>
        </h2>

        <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-ink/65">
          Explore exciting ideas, find projects that match your skills, and
          join a team.
        </p>

        <div className="mt-auto pt-8">
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ink/20 text-ink/80 transition-colors duration-300 group-hover:border-ink/35 group-hover:bg-ink group-hover:text-cream motion-reduce:transition-none">
            <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 motion-reduce:transform-none motion-reduce:transition-none" />
          </span>
        </div>
      </a>

      <a
        href="#"
        aria-label="Good builders build together"
        className="group relative block min-h-[320px] overflow-hidden bg-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cream sm:min-h-[380px] md:min-h-[440px] lg:min-h-0"
      >
        <Image
          src="/images/below-hero.png"
          alt="Collage of project ideas and collaborators building together"
          fill
          priority
          sizes="(max-width: 1023px) 100vw, 25vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02] motion-reduce:transform-none motion-reduce:transition-none"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-ink/25"
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 p-4 sm:p-5">
          <p className="bg-ink/35 p-3 text-[clamp(1.5rem,3.4vw,2.1rem)] leading-[1.05] tracking-[-0.02em] text-cream">
            <span className="block font-bold">Good builders</span>
            <span className="block font-light">build</span>
            <span className="block font-light">together.</span>
          </p>
        </div>
      </a>
    </section>
  );
}

function LightbulbIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3a6 6 0 0 0-3 11.2c.7.4 1.2 1 1.4 1.8l.2.7a1.5 1.5 0 0 0 1.4 1.3 1.5 1.5 0 0 0 1.4-1.3l.2-.7c.2-.8.7-1.4 1.4-1.8A6 6 0 0 0 12 3Z" />
      <path d="M9.5 18.5h5M10.5 21h3" />
    </svg>
  );
}

function PeopleIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="9" cy="8" r="3.5" />
      <path d="M3 19a6 6 0 0 1 12 0" />
      <path d="M16 4.5a3.5 3.5 0 0 1 0 7" />
      <path d="M17.5 19a6 6 0 0 0-2.5-5" />
    </svg>
  );
}

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      className={className}
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2.5 8h10M9 3.5 13.5 8 9 12.5" />
    </svg>
  );
}
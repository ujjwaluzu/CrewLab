import Image from "next/image";
import Link from "next/link";

const buildPhrase = ["BUILD", "COLLABORATE", "CREATE", "REPEAT"];

const builderPositions = ["9% 25%", "49.8% 25%", "90.6% 25%"];

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-ink/10">
      <span
        aria-hidden="true"
        className="absolute inset-y-0 left-0 hidden w-px bg-ink/10 lg:block"
      />
      <span
        aria-hidden="true"
        className="absolute inset-y-0 right-0 hidden w-px bg-ink/10 lg:block"
      />

      <div className="mx-auto grid max-w-[1400px] grid-cols-1 px-5 pb-24 sm:px-8 md:pb-28 lg:h-[calc(100dvh-5.125rem)] lg:grid-cols-12 lg:items-center lg:px-14 lg:pb-0">
        <div className="relative flex flex-col justify-center md:px-2 lg:col-span-5 lg:py-6 lg:pr-4 lg:pl-0 xl:col-span-5">
          <span
            aria-hidden="true"
            className="absolute left-0 top-8 hidden h-12 w-px bg-lime lg:block"
          />

          <h1 className="mt-5 text-ink text-[clamp(3rem,6vw,6.5rem)] leading-[0.95] tracking-[-0.03em]">
            <span className="block font-bold">
              Find your
              <br />
              crew.
            </span>
            <span className="mt-2 block font-light">
              Build what
              <br />
              matters.
            </span>
          </h1>

          <p className="mt-5 max-w-md text-[16px] leading-relaxed text-ink/70 md:text-base">
            CrewLab connects curious minds, whether you have an idea or just
            the skills to build. Find teammates, collaborate on real projects,
            and turn ideas into impact.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3 sm:gap-4">
            <Link
              href="#"
              className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-cream transition-colors hover:bg-ink/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
            >
              Join the waitlist
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          <div className="mt-6 flex items-center gap-3.5">
            <div className="flex -space-x-2.5">
              {builderPositions.map((position) => (
                <span
                  key={position}
                  role="img"
                  aria-label="Early CrewLab builder"
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-cream sm:h-11 sm:w-11"
                  style={{
                    backgroundImage: "url(/images/builders.png)",
                    backgroundSize: "420% auto",
                    backgroundPosition: position,
                    backgroundRepeat: "no-repeat",
                  }}
                />
              ))}
            </div>
            <p className="max-w-[16rem] text-[13px] leading-snug text-ink/65">
              <span className="font-semibold text-ink">
                Be among the first builders
              </span>{" "}
              on CrewLab.
            </p>
          </div>
        </div>

        <div className="relative mt-10 md:mt-14 lg:col-span-7 lg:mt-0 lg:flex lg:items-center lg:justify-center lg:border-l lg:border-ink/10 lg:pl-10 lg:ml-6 xl:pl-14">
          <Image
            src="/images/new2.png"
            alt="Collage of project ideas and collaborators on CrewLab"
            width={666}
            height={375}
            priority
            className="h-auto w-full md:w-[560px] lg:w-[620px] lg:-ml-10 xl:w-[680px] xl:-ml-16"
          />

          <span
            aria-hidden="true"
            className="absolute right-0 top-1/2 hidden -translate-y-1/2 text-[11px] font-semibold tracking-[0.35em] text-ink/35 lg:flex"
            style={{ writingMode: "vertical-rl" }}
          >
            CREWLAB
          </span>

          <span
            aria-hidden="true"
            className="absolute bottom-4 right-2 hidden text-sm text-ink/30 lg:block"
          >
            +
          </span>
        </div>
      </div>

      <span
        aria-hidden="true"
        className="absolute left-10 top-1/2 hidden -translate-y-1/2 text-[10px] font-medium tracking-[0.4em] text-ink/30 lg:block"
        style={{ writingMode: "vertical-rl" }}
      >
        {buildPhrase.join(" · ")}
      </span>
    </section>
  );
}

function ArrowUpRight({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      className={className}
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 12L12 4M6 4h6v6" />
    </svg>
  );
}
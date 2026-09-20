import Image from "next/image";

import { ArrowRight, Sparkle } from "lucide-react";

export default function FinalCTA() {
  return (
    <section
      aria-labelledby="final-cta-heading"
      className="border-t border-ink/10 bg-cream"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="p-5 sm:p-6 lg:p-0">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg border border-ink/15 bg-ink/5 lg:aspect-auto lg:h-full lg:rounded-none lg:border-0">
            <Image
              src="/images/community-image.png"
              alt="CrewLab community of builders and creators"
              width={1920}
              height={1440}
              sizes="(max-width: 1023px) 100vw, 50vw"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="relative flex flex-col px-5 py-10 sm:px-6 sm:py-12 lg:border-l lg:border-ink/10 lg:px-10 lg:py-16 xl:px-16">
          <Sparkle
            aria-hidden="true"
            strokeWidth={1.5}
            className="absolute right-6 top-8 h-8 w-8 text-ink/30 lg:right-10 lg:top-10 xl:right-16"
          />

          <div className="flex items-center gap-2.5">
            <span aria-hidden="true" className="h-[9px] w-[9px] bg-lime" />
            <span className="text-[10px] font-semibold tracking-[0.32em] text-ink/60">
              BE PART OF WHAT&apos;S NEXT
            </span>
          </div>

          <h2
            id="final-cta-heading"
            className="mt-6 text-[clamp(2.5rem,5vw,4.5rem)] leading-[0.95] tracking-[-0.03em] text-ink"
          >
            <span className="block font-medium">Your next big</span>
            <span className="block font-bold">
              project starts here.
            </span>
          </h2>

          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-ink/65 sm:text-base">
            Join a global community of builders, creators, and problem-solvers.
            Be the first to access CrewLab when we launch.
          </p>

          <form className="mt-8 flex flex-col gap-3 sm:flex-row">
            <label htmlFor="waitlist-email" className="sr-only">
              Email address
            </label>
            <input
              id="waitlist-email"
              type="email"
              name="email"
              placeholder="Enter your email"
              autoComplete="email"
              className="flex-1 rounded-[3px] border border-ink/20 bg-transparent px-4 py-3 text-[15px] text-ink placeholder:text-ink/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink motion-reduce:transition-none"
            />
            <button
              type="button"
              className="group inline-flex items-center justify-center gap-2 rounded-[3px] bg-ink px-6 py-3 text-[15px] font-semibold text-cream transition-transform duration-300 hover:-translate-y-0.5 motion-reduce:transform-none motion-reduce:transition-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
            >
              Join the waitlist
              <ArrowRight
                aria-hidden="true"
                strokeWidth={2}
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 motion-reduce:transform-none motion-reduce:transition-none"
              />
            </button>
          </form>

          <p className="mt-3 text-[13px] text-ink/55">
            No spam. Just updates that matter.
          </p>
        </div>
      </div>
    </section>
  );
}
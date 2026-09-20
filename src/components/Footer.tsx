import Image from "next/image";

import { ArrowRight } from "lucide-react";

const productLinks = [
  { label: "Explore", href: "#" },
  { label: "How it works", href: "#how-crewlab-works" },
  { label: "Features", href: "#" },
  { label: "Pricing", href: "#" },
];

const companyLinks = [
  { label: "About", href: "#" },
  { label: "Blog", href: "#" },
  { label: "Careers", href: "#" },
  { label: "Contact", href: "#" },
];

const socialLinks = [
  {
    label: "GitHub",
    href: "#",
    icon: GitHubIcon,
  },
  {
    label: "X (Twitter)",
    href: "#",
    icon: XIcon,
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: LinkedInIcon,
  },
  {
    label: "Discord",
    href: "#",
    icon: DiscordIcon,
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-cream">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          <div className="py-10 pr-6 lg:py-12 lg:pr-8">
            <Image
              src="/images/crewlab-logo.png"
              alt="CrewLab logo"
              width={2172}
              height={724}
              className="h-7 w-auto sm:h-8"
            />
            <p className="mt-4 text-[14px] text-ink/60">
              Build together. Go further.
            </p>
            <p className="mt-4 text-[12px] text-ink/45">
              © 2026 CrewLab. All rights reserved.
            </p>
          </div>

          <div className="border-t border-ink/10 py-10 pl-6 pr-6 sm:border-t-0 sm:border-l lg:py-12 lg:pl-8 lg:pr-8">
            <h2 className="text-[14px] font-bold tracking-tight text-ink">
              Product
            </h2>
            <nav aria-label="Product" className="mt-4">
              <ul className="space-y-2.5">
                {productLinks.map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="text-sm text-ink/55 transition-transform duration-300 hover:translate-x-0.5 hover:text-ink motion-reduce:transform-none motion-reduce:transition-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="border-t border-ink/10 py-10 pl-6 pr-6 lg:border-t-0 lg:border-l lg:py-12 lg:pl-8 lg:pr-8">
            <h2 className="text-[14px] font-bold tracking-tight text-ink">
              Company
            </h2>
            <nav aria-label="Company" className="mt-4">
              <ul className="space-y-2.5">
                {companyLinks.map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="text-sm text-ink/55 transition-transform duration-300 hover:translate-x-0.5 hover:text-ink motion-reduce:transform-none motion-reduce:transition-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="border-t border-ink/10 py-10 pl-6 pr-6 sm:border-l lg:border-t-0 lg:py-12 lg:pl-8 lg:pr-8">
            <h2 className="text-[14px] font-bold tracking-tight text-ink">
              Stay in the loop
            </h2>
            <p className="mt-4 max-w-[24ch] text-[14px] text-ink/60">
              Get early access and updates.
            </p>

            <div className="mt-4 flex items-center gap-2">
              <label htmlFor="footer-email" className="sr-only">
                Email address
              </label>
              <input
                id="footer-email"
                type="email"
                name="email"
                placeholder="Enter your email"
                autoComplete="email"
                className="h-10 min-w-0 flex-1 rounded-[3px] border border-ink/20 bg-transparent px-3.5 text-[14px] text-ink placeholder:text-ink/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink motion-reduce:transition-none"
              />
              <button
                type="button"
                aria-label="Submit email"
                className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ink text-cream transition-transform duration-300 hover:-translate-y-0.5 motion-reduce:transform-none motion-reduce:transition-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
              >
                <ArrowRight
                  aria-hidden="true"
                  strokeWidth={2}
                  className="h-4 w-4"
                />
              </button>
            </div>

            <ul className="mt-6 flex gap-2.5">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    aria-label={label}
                    className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-ink/15 text-ink/60 transition-transform duration-300 hover:-translate-y-0.5 hover:border-ink/35 hover:bg-ink hover:text-cream motion-reduce:transform-none motion-reduce:transition-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
                  >
                    <Icon className="h-[15px] w-[15px]" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-ink/10 py-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <span className="font-mono text-[11px] tracking-[0.35em] text-ink/55">
              IDEAS TO IMPACT
            </span>
            <span aria-hidden="true" className="h-px w-12 bg-ink/30" />
          </div>
          <p className="text-[12px] text-ink/55">
            Made for builders, by builders.
          </p>
        </div>
      </div>
    </footer>
  );
}

function GitHubIcon({ className }: { className?: string }) {
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
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.119 20.452H3.555V9h3.564zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
    </svg>
  );
}

function DiscordIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="currentColor">
      <path d="M20.317 4.37a19.79 19.79 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.865-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.058a.082.082 0 0 0 .031.056c2.053 1.508 4.041 2.423 5.993 3.03a.078.078 0 0 0 .084-.028c.462-.63.873-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128c.126-.094.252-.192.372-.291a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.197.373.292a.077.077 0 0 1-.006.127 12.3 12.3 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028c1.961-.607 3.949-1.522 6.002-3.029a.077.077 0 0 0 .031-.055c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.029zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.955 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
    </svg>
  );
}
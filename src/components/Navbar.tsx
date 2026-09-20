"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { label: "Explore", href: "#" },
  { label: "How it works", href: "#" },
  { label: "About", href: "#" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-20 border-b border-ink/10 bg-cream">
      <nav
        aria-label="Main"
        className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-14"
      >
        <div className="flex h-16 items-center justify-between lg:h-20">
          <Link
            href="/"
            className="flex items-center text-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
          >
            <Image
              src="/images/crewlab-logo.png"
              alt="CrewLab logo"
              width={2172}
              height={724}
              priority
              className="h-8 w-auto sm:h-9"
            />
          </Link>

          <ul className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-[13px] font-medium text-ink/60 transition-colors hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              href="#"
              className="group inline-flex h-9 items-center gap-1.5 rounded-full bg-ink px-4 text-[13px] font-semibold text-cream transition-colors hover:bg-ink/85 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
            >
              Join waitlist
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((v) => !v)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-ink/15 text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink lg:hidden"
            >
              {open ? (
                <CloseIcon className="h-4 w-4" />
              ) : (
                <MenuIcon className="h-4 w-4" />
              )}
            </button>
          </div>
        </div>

        <div
          id="mobile-menu"
          className={open ? "block border-t border-ink/10 pb-6 pt-2 lg:hidden" : "hidden"}
        >
          <ul className="flex flex-col">
            {navLinks.map((link) => (
              <li key={link.label} className="border-b border-ink/5">
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-3.5 text-[15px] font-medium text-ink/70 transition-colors hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="#"
            onClick={() => setOpen(false)}
            className="group mt-4 inline-flex h-9 items-center gap-1.5 rounded-full bg-ink px-4 text-[13px] font-semibold text-cream transition-colors hover:bg-ink/85 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
          >
            Join waitlist
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </nav>
    </header>
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

function MenuIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      className={className}
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    >
      <path d="M2 4.5h12M2 8h12M2 11.5h7" />
    </svg>
  );
}

function CloseIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      className={className}
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    >
      <path d="M3.5 3.5l9 9M12.5 3.5l-9 9" />
    </svg>
  );
}
"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { LANDING_PAGES, SOCIAL } from "@/lib/site";

const groups = [
  {
    id: "crew",
    label: "Crew",
    links: LANDING_PAGES.map(({ path, label }) => ({ href: path, label })),
  },
  {
    id: "product",
    label: "Product",
    links: [
      { href: "/explore", label: "Explore projects" },
      { href: "/how-it-works", label: "How it works" },
      { href: "/features", label: "Features" },
    ],
  },
  {
    id: "company",
    label: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: SOCIAL.blog, label: "Blog", external: true },
      { href: "/waitlist", label: "Contact" },
    ],
  },
];

export default function NavDropdowns() {
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!openGroup) return;

    function closeOnOutsideClick(event: PointerEvent) {
      if (event.target instanceof Node && !navRef.current?.contains(event.target)) {
        setOpenGroup(null);
      }
    }

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        navRef.current?.querySelector<HTMLButtonElement>(".nav-dropdown.is-open .nav-trigger")?.focus();
        setOpenGroup(null);
      }
    }

    document.addEventListener("pointerdown", closeOnOutsideClick);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("pointerdown", closeOnOutsideClick);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [openGroup]);

  return (
    <nav className="nav-links" aria-label="Primary" ref={navRef}>
      {groups.map((group) => {
        const isOpen = openGroup === group.id;
        const menuId = `nav-menu-${group.id}`;

        return (
          <div className={`nav-dropdown${isOpen ? " is-open" : ""}`} key={group.id}>
            <button
              className="nav-trigger"
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpenGroup(isOpen ? null : group.id)}
            >
              {group.label}
            </button>
            {isOpen && (
              <div className="nav-menu" id={menuId}>
                {group.links.map((item) => (
                  <Link
                    href={item.href}
                    key={item.href}
                    target={"external" in item ? "_blank" : undefined}
                    rel={"external" in item ? "noopener noreferrer" : undefined}
                    onClick={() => setOpenGroup(null)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </nav>
  );
}

"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { APP_URL, LANDING_PAGES } from "@/lib/site";
import LocaleSwitcher from "@/components/LocaleSwitcher";

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
      { href: "https://tools.ujjwaluzu.in", label: "Tools", external: true },
      { href: "/resources", label: "Guides & resources" },
    ],
  },
  {
    id: "company",
    label: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: APP_URL, label: "Sign up", external: true },
    ],
  },
];

export default function NavDropdowns() {
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname() ?? "";
  const isHindi = pathname === "/hi" || pathname.startsWith("/hi/");
  const localePath = (path: string) => isHindi ? "/hi" + (path === "/" ? "" : path) : path;
  const hiLabels: Record<string, string> = {
    "Find a cofounder": "सह-संस्थापक खोजें",
    "Find developers": "डेवलपर खोजें",
    "Startup teams": "स्टार्टअप टीम",
    "Side projects": "साइड प्रोजेक्ट",
    "Student projects": "विद्यार्थी प्रोजेक्ट",
    "Explore projects": "प्रोजेक्ट देखें",
    "How it works": "काम करने का तरीका",
    "Features": "विशेषताएँ",
    "Guides & resources": "गाइड और संसाधन",
    "About": "परिचय",
    "Sign up": "साइन अप करें",
  };
  const translatedGroups = groups.map((group) => ({
    ...group,
    label: isHindi ? ({ crew: "साथी", product: "उत्पाद", company: "कंपनी" }[group.id] ?? group.label) : group.label,
    links: group.links.map((item) => ({
      ...item,
      href: "external" in item ? item.href : localePath(item.href),
      label: isHindi ? hiLabels[item.label] ?? item.label : item.label,
    })),
  }));

  function isCurrentPage(href: string) {
    return href.startsWith("/") && (pathname === href || (href !== "/" && pathname.startsWith(`${href}/`)));
  }

  useEffect(() => {
    if (!openGroup && !mobileOpen) return;

    function closeOnOutsideClick(event: PointerEvent) {
      if (event.target instanceof Node && !navRef.current?.contains(event.target)) {
        setOpenGroup(null);
        setMobileOpen(false);
      }
    }

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        if (openGroup) {
          navRef.current?.querySelector<HTMLButtonElement>(".nav-dropdown.is-open .nav-trigger")?.focus();
          setOpenGroup(null);
        } else {
          setMobileOpen(false);
          navRef.current?.querySelector<HTMLButtonElement>(".nav-mobile-toggle")?.focus();
        }
      }
    }

    document.addEventListener("pointerdown", closeOnOutsideClick);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("pointerdown", closeOnOutsideClick);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [mobileOpen, openGroup]);

  return (
    <div className={`nav-shell${mobileOpen ? " is-mobile-open" : ""}`} ref={navRef}>
      <button
        className="nav-mobile-toggle"
        type="button"
        aria-label={isHindi
          ? (mobileOpen ? "मेन्यू बंद करें" : "मेन्यू खोलें")
          : (mobileOpen ? "Close navigation" : "Open navigation")}
        aria-expanded={mobileOpen}
        aria-controls="primary-nav"
        onClick={() => {
          setMobileOpen((open) => !open);
          setOpenGroup(null);
        }}
      >
        <span /><span /><span />
      </button>
      <nav className="nav-links" id="primary-nav" aria-label={isHindi ? "मुख्य नेविगेशन" : "Primary"}>
        {translatedGroups.map((group) => {
          const isOpen = openGroup === group.id;
          const groupIsActive = group.links.some((item) => isCurrentPage(item.href));
          const menuId = `nav-menu-${group.id}`;

          return (
            <div className={`nav-dropdown${isOpen ? " is-open" : ""}${groupIsActive ? " is-active" : ""}`} key={group.id}>
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
                      className={isCurrentPage(item.href) ? "is-current-page" : undefined}
                      aria-current={isCurrentPage(item.href) ? "page" : undefined}
                      target={"external" in item && item.href !== APP_URL ? "_blank" : undefined}
                      rel={"external" in item && item.href !== APP_URL ? "noopener noreferrer" : undefined}
                      onClick={() => {
                        setOpenGroup(null);
                        setMobileOpen(false);
                      }}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          );
        })}
        <LocaleSwitcher />
      </nav>
    </div>
  );
}

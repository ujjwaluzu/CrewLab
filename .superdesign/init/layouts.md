# Shared layouts

## Root layout
Renders document fonts, metadata, SVG defs, schema markup, and global animations.

## RootLayout
Source: `src/app/(en)/layout.tsx`

```tsx
import type { Metadata } from "next";
import { Geist, JetBrains_Mono, Newsreader, Plus_Jakarta_Sans, Space_Grotesk, Space_Mono } from "next/font/google";
import "./globals.css";
import "./homepage.css";
import "@/components/anatomy/kit/iso.css";
import "@/components/anatomy/crew-flow.css";
import SvgDefs from "@/components/SvgDefs";
import SchemaOrg from "@/components/SchemaOrg";
import SiteAnimations from "@/components/SiteAnimations";
import {
  SITE_URL,
  SITE_NAME,
  HOMEPAGE_TITLE,
  HOMEPAGE_DESCRIPTION,
} from "@/lib/site";

const bodyFont = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});
const displayFont = Newsreader({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  display: "swap",
});
const monoFont = Space_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});
const crewBodyFont = Geist({
  variable: "--font-cl-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});
const crewDisplayFont = Space_Grotesk({
  variable: "--font-cl-display",
  subsets: ["latin"],
  weight: ["500", "700"],
  display: "swap",
});
const crewMonoFont = JetBrains_Mono({
  variable: "--font-cl-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: HOMEPAGE_TITLE,
    template: `%s Â· ${SITE_NAME}`,
  },
  description: HOMEPAGE_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "Technology",
  classification: "Startup Project Collaboration Community",
  referrer: "origin-when-cross-origin",
  manifest: "/favicon_io/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon_io/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon.ico", sizes: "any", type: "image/x-icon" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/favicon_io/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
    languages: {
      "en-IN": SITE_URL,
      "hi-IN": `${SITE_URL}/hi`,
      "x-default": SITE_URL,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName: SITE_NAME,
    title: HOMEPAGE_TITLE,
    description: HOMEPAGE_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    site: "@crewlabin",
    creator: "@crewlabin",
    title: HOMEPAGE_TITLE,
    description: HOMEPAGE_DESCRIPTION,
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: SITE_NAME,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-IN" className={`${bodyFont.variable} ${displayFont.variable} ${monoFont.variable} ${crewBodyFont.variable} ${crewDisplayFont.variable} ${crewMonoFont.variable}`}>
      <body>
        <SvgDefs />
        <SchemaOrg />
        <SiteAnimations />
        {children}
      </body>
    </html>
  );
}

```

## SiteHeader
Source: `src/components/SiteHeader.tsx`

```tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import BrandMark from "@/components/BrandMark";
import NavDropdowns from "@/components/NavDropdowns";

export default function SiteHeader({ home = false }: { home?: boolean }) {
  const pathname = usePathname() ?? "";
  const isHindi = pathname === "/hi" || pathname.startsWith("/hi/");
  const homeHref = isHindi ? "/hi" : "/";
  const waitlistHref = isHindi ? "/hi/waitlist" : "/waitlist";

  return (
    <header className={`cl-row cl-nav${home ? " site-head-home" : ""}`}>
      <div className="cl-cell cl-nav-brand">
        <Link className="cl-logo" href={homeHref} aria-label="CrewLab home" aria-current={pathname === homeHref ? "page" : undefined}><BrandMark /><span>CREWLAB</span></Link>
      </div>
      <div className="cl-cell cl-nav-links"><NavDropdowns /></div>
      <div className="cl-cell cl-nav-cta">
        <div className="cl-nav-actions">
          <Link className="cl-button" href={waitlistHref} aria-current={pathname === waitlistHref ? "page" : undefined}>
            <span className="cl-nav-waitlist-full">{isHindi ? "à¤ªà¥à¤°à¤¤à¥€à¤•à¥à¤·à¤¾ à¤¸à¥‚à¤šà¥€" : "Join the waitlist"}</span>
            <span className="cl-nav-waitlist-short">{isHindi ? "à¤¸à¥‚à¤šà¥€" : "Waitlist"}</span>
            <span aria-hidden="true">&#8594;</span>
          </Link>
        </div>
      </div>
    </header>
  );
}

```

## NavDropdowns
Source: `src/components/NavDropdowns.tsx`

```tsx
"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { LANDING_PAGES } from "@/lib/site";
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
      { href: "/waitlist", label: "Contact" },
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
    "Find a cofounder": "à¤¸à¤¹-à¤¸à¤‚à¤¸à¥à¤¥à¤¾à¤ªà¤• à¤–à¥‹à¤œà¥‡à¤‚",
    "Find developers": "à¤¡à¥‡à¤µà¤²à¤ªà¤° à¤–à¥‹à¤œà¥‡à¤‚",
    "Startup teams": "à¤¸à¥à¤Ÿà¤¾à¤°à¥à¤Ÿà¤…à¤ª à¤Ÿà¥€à¤®",
    "Side projects": "à¤¸à¤¾à¤‡à¤¡ à¤ªà¥à¤°à¥‹à¤œà¥‡à¤•à¥à¤Ÿ",
    "Student projects": "à¤µà¤¿à¤¦à¥à¤¯à¤¾à¤°à¥à¤¥à¥€ à¤ªà¥à¤°à¥‹à¤œà¥‡à¤•à¥à¤Ÿ",
    "Explore projects": "à¤ªà¥à¤°à¥‹à¤œà¥‡à¤•à¥à¤Ÿ à¤¦à¥‡à¤–à¥‡à¤‚",
    "How it works": "à¤•à¤¾à¤® à¤•à¤°à¤¨à¥‡ à¤•à¤¾ à¤¤à¤°à¥€à¤•à¤¾",
    "Features": "à¤µà¤¿à¤¶à¥‡à¤·à¤¤à¤¾à¤à¤",
    "Guides & resources": "à¤—à¤¾à¤‡à¤¡ à¤”à¤° à¤¸à¤‚à¤¸à¤¾à¤§à¤¨",
    "About": "à¤ªà¤°à¤¿à¤šà¤¯",
    "Contact": "à¤¸à¤‚à¤ªà¤°à¥à¤•",
  };
  const translatedGroups = groups.map((group) => ({
    ...group,
    label: isHindi ? ({ crew: "à¤¸à¤¾à¤¥à¥€", product: "à¤‰à¤¤à¥à¤ªà¤¾à¤¦", company: "à¤•à¤‚à¤ªà¤¨à¥€" }[group.id] ?? group.label) : group.label,
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
          ? (mobileOpen ? "à¤®à¥‡à¤¨à¥à¤¯à¥‚ à¤¬à¤‚à¤¦ à¤•à¤°à¥‡à¤‚" : "à¤®à¥‡à¤¨à¥à¤¯à¥‚ à¤–à¥‹à¤²à¥‡à¤‚")
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
      <nav className="nav-links" id="primary-nav" aria-label={isHindi ? "à¤®à¥à¤–à¥à¤¯ à¤¨à¥‡à¤µà¤¿à¤—à¥‡à¤¶à¤¨" : "Primary"}>
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
                      target={"external" in item ? "_blank" : undefined}
                      rel={"external" in item ? "noopener noreferrer" : undefined}
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

```

## LocaleSwitcher
Source: `src/components/LocaleSwitcher.tsx`

```tsx
"use client";

import { usePathname, useRouter } from "next/navigation";

export default function LocaleSwitcher() {
  const pathname = usePathname() ?? "/";
  const router = useRouter();
  const isHindi = pathname === "/hi" || pathname.startsWith("/hi/");
  const englishPath = isHindi ? pathname.slice(3) || "/" : pathname;
  const hindiPath = pathname === "/" ? "/hi" : "/hi" + pathname;

  return (
    <label className="cl-language-control">
      <select
        className="cl-language-select"
        aria-label={isHindi ? "à¤­à¤¾à¤·à¤¾" : "Language"}
        value={isHindi ? "hi" : "en"}
        onChange={(event) => router.push(event.target.value === "hi" ? hindiPath : englishPath)}
      >
        <option value="en">EN</option>
        <option value="hi">HI</option>
      </select>
    </label>
  );
}
```

## SiteFooter
Source: `src/components/SiteFooter.tsx`

```tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LANDING_PAGES } from "@/lib/site";
import BrandMark from "@/components/BrandMark";

export default function SiteFooter() {
  const pathname = usePathname() ?? "";
  const isHindi = pathname === "/hi" || pathname.startsWith("/hi/");
  const homeHref = isHindi ? "/hi" : "/";
  const path = (href: string) => isHindi ? "/hi" + href : href;
  const active = (href: string) => pathname === path(href) || (href !== "/" && pathname.startsWith(path(href) + "/"));
  const crewLabels: Record<string, string> = {
    "Find a cofounder": "à¤¸à¤¹-à¤¸à¤‚à¤¸à¥à¤¥à¤¾à¤ªà¤• à¤–à¥‹à¤œà¥‡à¤‚",
    "Find developers": "à¤¡à¥‡à¤µà¤²à¤ªà¤° à¤–à¥‹à¤œà¥‡à¤‚",
    "Startup teams": "à¤¸à¥à¤Ÿà¤¾à¤°à¥à¤Ÿà¤…à¤ª à¤Ÿà¥€à¤®",
    "Side projects": "à¤¸à¤¾à¤‡à¤¡ à¤ªà¥à¤°à¥‹à¤œà¥‡à¤•à¥à¤Ÿ",
    "Student projects": "à¤µà¤¿à¤¦à¥à¤¯à¤¾à¤°à¥à¤¥à¥€ à¤ªà¥à¤°à¥‹à¤œà¥‡à¤•à¥à¤Ÿ",
  };

  return (
    <footer className="cl-footer">
      <div className="cl-row cl-foot-grid">
        <div className="cl-cell cl-foot-brand">
          <Link className="cl-logo" href={homeHref} aria-label="CrewLab home" aria-current={pathname === homeHref ? "page" : undefined}><BrandMark /><span>CREWLAB</span></Link>
          <p>{isHindi ? "à¤¬à¤¿à¤²à¥à¤¡à¤°à¥‹à¤‚ à¤•à¥‡ à¤¸à¤¾à¤¥, à¤¬à¥‡à¤¹à¤¤à¤° à¤µà¤¿à¤šà¤¾à¤°à¥‹à¤‚ à¤•à¥‹ à¤¹à¤•à¥€à¤•à¤¤ à¤¬à¤¨à¤¾à¤à¤à¥¤" : "Ideas to impact. Made for builders, by builders."}</p>
        </div>
        <div className="cl-cell cl-foot-links">
          <h3>{isHindi ? "à¤…à¤ªà¤¨à¥‡ à¤¸à¤¾à¤¥à¥€ à¤–à¥‹à¤œà¥‡à¤‚" : "Find your crew"}</h3>
          {LANDING_PAGES.map((page) => <Link href={path(page.path)} key={page.path} className={active(page.path) ? "is-current-page" : undefined} aria-current={active(page.path) ? "page" : undefined}>{isHindi ? crewLabels[page.label] : page.label}</Link>)}
        </div>
        <div className="cl-cell cl-foot-links">
          <h3>{isHindi ? "à¤‰à¤¤à¥à¤ªà¤¾à¤¦" : "Product"}</h3>
          <Link href={path("/explore")} className={active("/explore") ? "is-current-page" : undefined}>{isHindi ? "à¤ªà¥à¤°à¥‹à¤œà¥‡à¤•à¥à¤Ÿ à¤¦à¥‡à¤–à¥‡à¤‚" : "Explore projects"}</Link>
          <Link href={path("/how-it-works")} className={active("/how-it-works") ? "is-current-page" : undefined}>{isHindi ? "à¤•à¤¾à¤® à¤•à¤°à¤¨à¥‡ à¤•à¤¾ à¤¤à¤°à¥€à¤•à¤¾" : "How it works"}</Link>
          <Link href={path("/features")} className={active("/features") ? "is-current-page" : undefined}>{isHindi ? "à¤µà¤¿à¤¶à¥‡à¤·à¤¤à¤¾à¤à¤" : "Features"}</Link>
          <Link href={path("/resources")} className={active("/resources") ? "is-current-page" : undefined}>{isHindi ? "à¤—à¤¾à¤‡à¤¡ à¤”à¤° à¤¸à¤‚à¤¸à¤¾à¤§à¤¨" : "Guides & resources"}</Link>
        </div>
        <div className="cl-cell cl-foot-links">
          <h3>{isHindi ? "à¤•à¤‚à¤ªà¤¨à¥€" : "Company"}</h3>
          <Link href={path("/about")} className={active("/about") ? "is-current-page" : undefined}>{isHindi ? "à¤ªà¤°à¤¿à¤šà¤¯" : "About"}</Link>
          <Link href={path("/waitlist")} className={active("/waitlist") ? "is-current-page" : undefined}>{isHindi ? "à¤¸à¤‚à¤ªà¤°à¥à¤•" : "Contact"}</Link>
          <Link href="https://discord.gg/m97vTraKq" target="_blank" rel="noopener noreferrer">Discord</Link>
          <Link href="https://instagram.com/crewlab.in" target="_blank" rel="noopener noreferrer">Instagram</Link>
          <Link href="https://x.com/crewlabin" target="_blank" rel="noopener noreferrer">X</Link>
        </div>
      </div>
      <div className="cl-row cl-copyright">
        <span className="cl-cell cl-mono">{isHindi ? "Â© 2026 CrewLab. à¤¸à¤°à¥à¤µà¤¾à¤§à¤¿à¤•à¤¾à¤° à¤¸à¥à¤°à¤•à¥à¤·à¤¿à¤¤à¥¤" : "Â© 2026 CrewLab. All rights reserved."}</span>
        <span className="cl-cell cl-mono">{isHindi ? "à¤¬à¤¿à¤²à¥à¤¡à¤°à¥‹à¤‚ à¤•à¥‡ à¤²à¤¿à¤, à¤¬à¤¿à¤²à¥à¤¡à¤°à¥‹à¤‚ à¤•à¥‡ à¤¸à¤¾à¤¥" : "Made for builders, by builders"}</span>
      </div>
      <div className="cl-row cl-wordmark" aria-label="CrewLab"><span>C</span><span>R</span><span>E</span><span>W</span><span>L</span><span>A</span><span>B</span></div>
    </footer>
  );
}

```


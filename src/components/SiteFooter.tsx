"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LANDING_PAGES } from "@/lib/site";
import BrandMark from "@/components/BrandMark";
import LocaleSwitcher from "@/components/LocaleSwitcher";

export default function SiteFooter() {
  const pathname = usePathname() ?? "";
  const isHindi = pathname === "/hi" || pathname.startsWith("/hi/");
  const homeHref = isHindi ? "/hi" : "/";
  const path = (href: string) => isHindi ? "/hi" + href : href;
  const active = (href: string) => pathname === path(href) || (href !== "/" && pathname.startsWith(path(href) + "/"));
  const crewLabels: Record<string, string> = {
    "Find a cofounder": "सह-संस्थापक खोजें",
    "Find developers": "डेवलपर खोजें",
    "Startup teams": "स्टार्टअप टीम",
    "Side projects": "साइड प्रोजेक्ट",
    "Student projects": "विद्यार्थी प्रोजेक्ट",
  };

  return (
    <footer className="cl-footer">
      <div className="cl-row cl-foot-grid">
        <div className="cl-cell cl-foot-brand">
          <Link className="cl-logo" href={homeHref} aria-label="CrewLab home" aria-current={pathname === homeHref ? "page" : undefined}><BrandMark /><span>CREWLAB</span></Link>
          <p>{isHindi ? "बिल्डरों के साथ, बेहतर विचारों को हकीकत बनाएँ।" : "Ideas to impact. Made for builders, by builders."}</p>
          <LocaleSwitcher />
        </div>
        <div className="cl-cell cl-foot-links">
          <h3>{isHindi ? "अपने साथी खोजें" : "Find your crew"}</h3>
          {LANDING_PAGES.map((page) => <Link href={path(page.path)} key={page.path} className={active(page.path) ? "is-current-page" : undefined} aria-current={active(page.path) ? "page" : undefined}>{isHindi ? crewLabels[page.label] : page.label}</Link>)}
        </div>
        <div className="cl-cell cl-foot-links">
          <h3>{isHindi ? "उत्पाद" : "Product"}</h3>
          <Link href={path("/explore")} className={active("/explore") ? "is-current-page" : undefined}>{isHindi ? "प्रोजेक्ट देखें" : "Explore projects"}</Link>
          <Link href={path("/how-it-works")} className={active("/how-it-works") ? "is-current-page" : undefined}>{isHindi ? "काम करने का तरीका" : "How it works"}</Link>
          <Link href={path("/features")} className={active("/features") ? "is-current-page" : undefined}>{isHindi ? "विशेषताएँ" : "Features"}</Link>
          <Link href={path("/resources")} className={active("/resources") ? "is-current-page" : undefined}>{isHindi ? "गाइड और संसाधन" : "Guides & resources"}</Link>
        </div>
        <div className="cl-cell cl-foot-links">
          <h3>{isHindi ? "कंपनी" : "Company"}</h3>
          <Link href={path("/about")} className={active("/about") ? "is-current-page" : undefined}>{isHindi ? "परिचय" : "About"}</Link>
          <Link href={path("/waitlist")} className={active("/waitlist") ? "is-current-page" : undefined}>{isHindi ? "संपर्क" : "Contact"}</Link>
          <Link href="https://discord.gg/m97vTraKq" target="_blank" rel="noopener noreferrer">Discord</Link>
          <Link href="https://instagram.com/crewlab.in" target="_blank" rel="noopener noreferrer">Instagram</Link>
          <Link href="https://x.com/crewlabin" target="_blank" rel="noopener noreferrer">X</Link>
        </div>
      </div>
      <div className="cl-row cl-copyright">
        <span className="cl-cell cl-mono">{isHindi ? "© 2026 CrewLab. सर्वाधिकार सुरक्षित।" : "© 2026 CrewLab. All rights reserved."}</span>
        <span className="cl-cell cl-mono">{isHindi ? "बिल्डरों के लिए, बिल्डरों के साथ" : "Made for builders, by builders"}</span>
      </div>
      <div className="cl-row cl-wordmark" aria-label="CrewLab"><span>C</span><span>R</span><span>E</span><span>W</span><span>L</span><span>A</span><span>B</span></div>
    </footer>
  );
}

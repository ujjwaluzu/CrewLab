"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LocaleSwitcher() {
  const pathname = usePathname() ?? "/";
  const isHindi = pathname === "/hi" || pathname.startsWith("/hi/");
  const englishPath = isHindi ? pathname.slice(3) || "/" : pathname;
  const hindiPath = pathname === "/" ? "/hi" : "/hi" + pathname;

  return (
    <Link
      className="cl-language-link"
      href={isHindi ? englishPath : hindiPath}
      hrefLang={isHindi ? "en-IN" : "hi-IN"}
      lang={isHindi ? "en-IN" : "hi-IN"}
      aria-label={isHindi ? "View this page in English" : "इस पेज को हिन्दी में देखें"}
    >
      {isHindi ? "English" : "हिन्दी"}
    </Link>
  );
}

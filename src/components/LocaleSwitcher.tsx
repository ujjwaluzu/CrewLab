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
        aria-label={isHindi ? "भाषा" : "Language"}
        value={isHindi ? "hi" : "en"}
        onChange={(event) => router.push(event.target.value === "hi" ? hindiPath : englishPath)}
      >
        <option value="en">EN</option>
        <option value="hi">HI</option>
      </select>
    </label>
  );
}
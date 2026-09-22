"use client";

import { useEffect } from "react";

const SECTION_IDS = ["top", "explore", "how", "workspace", "projects", "join"];

export default function SectionSpy() {
  useEffect(() => {
    const sections = SECTION_IDS
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    let ticking = false;

    const update = () => {
      ticking = false;
      const cutoff = Math.min(window.innerHeight * 0.35, 220);
      let current: string | null = sections[0]?.id ?? null;
      for (const el of sections) {
        if (el.getBoundingClientRect().top - 90 <= cutoff) {
          current = el.id;
        } else {
          break;
        }
      }
      const next = current ? `#${current}` : "";
      if (window.location.hash !== next) {
        history.replaceState(null, "", next);
      }
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return null;
}
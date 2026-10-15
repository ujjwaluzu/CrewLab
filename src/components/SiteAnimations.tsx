"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/** Adds a soft, scroll-triggered reveal to each major block across the site. */
export default function SiteAnimations() {
  const pathname = usePathname();

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const animated = new WeakSet<Element>();
    const triggers: ScrollTrigger[] = [];

    const reveal = () => {
      if (reduceMotion.matches) return;

      const blocks = document.querySelectorAll(
        ".site-head, main > section, main > div > section, .site-footer",
      );

      blocks.forEach((block) => {
        if (animated.has(block)) return;
        animated.add(block);

        const tween = gsap.fromTo(
          block,
          { autoAlpha: 0, filter: "blur(8px)" },
          {
            autoAlpha: 1,
            filter: "blur(0px)",
            duration: 1.1,
            ease: "power2.out",
            clearProps: "filter",
            scrollTrigger: {
              trigger: block,
              start: "top 90%",
              once: true,
            },
          },
        );

        if (tween.scrollTrigger) triggers.push(tween.scrollTrigger);
      });
    };

    reveal();
    const observer = new MutationObserver(reveal);
    observer.observe(document.body, { childList: true, subtree: true });
    const motionChange = () => {
      if (reduceMotion.matches) {
        triggers.forEach((trigger) => trigger.kill());
        gsap.set(document.querySelectorAll(".site-head, main > section, main > div > section, .site-footer"), {
          autoAlpha: 1,
          filter: "none",
        });
      }
    };
    reduceMotion.addEventListener("change", motionChange);

    return () => {
      observer.disconnect();
      reduceMotion.removeEventListener("change", motionChange);
      triggers.forEach((trigger) => trigger.kill());
    };
  }, [pathname]);

  return null;
}

"use client";

import { useEffect, useRef, useState } from "react";
import Icon from "@/components/Icon";
import TornEdge from "@/components/TornEdge";

const projects = [
  ["StudySync", "A collaborative learning platform for students.", "prog", "In progress", "frontend, UI design"],
  ["EcoTrack", "Track. Reduce. Make an impact.", "plan", "Planning", "mobile, data"],
  ["DevConnect", "Linking developers for real-world projects.", "prog", "In progress", "backend, community"],
  ["CampusHub", "Your campus, connected.", "", "Idea stage", "product, design"],
] as const;

export default function ProjectsRail() {
  const rail = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  useEffect(() => {
    const element = rail.current;
    if (!element) return;

    const sync = () => {
      setAtStart(element.scrollLeft < 8);
      setAtEnd(element.scrollLeft + element.clientWidth >= element.scrollWidth - 8);
    };

    element.addEventListener("scroll", sync, { passive: true });
    window.addEventListener("resize", sync);
    sync();
    return () => {
      element.removeEventListener("scroll", sync);
      window.removeEventListener("resize", sync);
    };
  }, []);

  const move = (distance: number) => rail.current?.scrollBy({ left: distance, behavior: "smooth" });

  return (
    <section className="pad" id="projects">
      <TornEdge seedIndex={1} color="var(--paper-2)" />
      <div className="wrap">
        <div className="sec-head projects-head">
          <div>
            <h2 className="h">Projects looking <em>for a crew</em></h2>
            <p className="note">Sample projects. This is what you&apos;ll browse once CrewLab opens.</p>
          </div>
          <div className="rail-ctl">
            <button className="arrow" type="button" aria-label="Previous projects" disabled={atStart} onClick={() => move(-362)}><Icon name="left" /></button>
            <button className="arrow" type="button" aria-label="Next projects" disabled={atEnd} onClick={() => move(362)}><Icon name="arrow" /></button>
          </div>
        </div>
        <div className="rail" ref={rail} tabIndex={0} aria-label="Sample projects">
          {projects.map(([title, description, statusClass, status, lookingFor], index) => (
            <article className="pcard" key={title}>
              <div className="phead"><span className="lab">Sample</span><span className="pnum">0{index + 1}</span></div>
              <div className="pbody">
                <h3>{title}</h3>
                <p>{description}</p>
                <div className="pmeta"><span className={`chip ${statusClass}`}>{status}</span><span className="need"><b>Looking for:</b> {lookingFor}</span></div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useRef } from "react";
import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import SectionHeader from "@/components/SectionHeader";

const projects = [
  ["StudySync", "A collaborative learning platform for students.", "In progress", "frontend, UI design"],
  ["EcoTrack", "Track. Reduce. Make an impact.", "Planning", "mobile, data"],
  ["DevConnect", "Linking developers for real-world projects.", "In progress", "backend, community"],
] as const;

export default function ProjectsRail() {
  const rail = useRef<HTMLDivElement>(null);
  const move = (distance: number) => rail.current?.scrollBy({ left: distance, behavior: "smooth" });
  return <section className="pad home-projects" id="projects">
    <div className="wrap">
      <div className="sec-head projects-head">
        <SectionHeader kicker="sample projects" accent="builders.">startup projects looking for</SectionHeader>
        <div className="rail-ctl" aria-label="Project carousel controls">
          <button className="arrow" type="button" aria-label="Scroll projects left" onClick={() => move(-360)}>←</button>
          <button className="arrow" type="button" aria-label="Scroll projects right" onClick={() => move(360)}>→</button>
        </div>
      </div>
      <div className="rail" ref={rail} tabIndex={0} aria-label="Sample projects">
        {projects.map(([name, description, status, skills], index) => <ProjectCard key={name} number={`0${index + 1}`} name={name} description={description} status={status} skills={skills} tone={index === 1 ? "tan" : "paper"} />)}
        <Link className="project-browse" href="/explore">browse more<br />projects to join <span aria-hidden="true">→</span></Link>
      </div>
    </div>
  </section>;
}

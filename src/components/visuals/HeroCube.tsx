"use client";

import { useState } from "react";

export type HeroCubeFace = {
  label: string;
  title: string;
  eyebrow: string;
  body: string;
  points: string[];
};

const faceNames = ["front", "right", "back", "left", "top", "bottom"] as const;

export default function HeroCube({ faces, label }: { faces: readonly HeroCubeFace[]; label: string }) {
  const [active, setActive] = useState(0);

  return (
    <div className="cl-hero-cube" role="group" aria-label={label}>
      <div className="cl-hero-cube-scene">
        <div className={`cl-hero-cube-solid cl-cube-show-${faceNames[active]}`}>
          {faces.map((face, index) => (
            <section
              className={`cl-hero-cube-face cl-cube-face-${faceNames[index]}`}
              key={face.label}
              aria-label={face.label}
              aria-hidden={index !== active}
            >
              <span className="cl-mono cl-hero-cube-eyebrow">{face.eyebrow}</span>
              <h2>{face.title}</h2>
              <p>{face.body}</p>
              <ul>{face.points.map((point) => <li key={point}>{point}</li>)}</ul>
              <span className="cl-hero-cube-index">{String(index + 1).padStart(2, "0")} / 06</span>
            </section>
          ))}
        </div>
      </div>
      <div className="cl-hero-cube-controls" role="group" aria-label="Choose a cube panel">
        {faces.map((face, index) => (
          <button
            type="button"
            className="cl-hero-cube-button"
            key={face.label}
            aria-pressed={active === index}
            onClick={() => setActive(index)}
          >
            <span className="cl-mono">0{index + 1}</span>{face.label}
          </button>
        ))}
      </div>
      <span className="cl-hero-cube-hint cl-mono">Select a panel to turn the cube</span>
    </div>
  );
}

"use client";

import * as React from "react";
import "./crew-assembly.css";

type Locale = "en" | "hi";
type Person = { role: string; skill: string; contribution: string; initials: string };

const PEOPLE: Record<Locale, readonly Person[]> = {
  en: [
    { role: "Founder", skill: "idea · direction", contribution: "Brings the idea and the direction for the project.", initials: "FO" },
    { role: "Designer", skill: "product · experience", contribution: "Shapes the product and the experience people use.", initials: "DE" },
    { role: "Developer", skill: "frontend · backend", contribution: "Builds the product with frontend and backend skills.", initials: "DV" },
    { role: "Marketer", skill: "story · growth", contribution: "Helps tell the project’s story and reach its audience.", initials: "MK" },
  ],
  hi: [
    { role: "संस्थापक", skill: "विचार · दिशा", contribution: "प्रोजेक्ट का विचार और उसकी दिशा लेकर आते हैं।", initials: "सं" },
    { role: "डिज़ाइनर", skill: "उत्पाद · अनुभव", contribution: "उत्पाद और उसे इस्तेमाल करने का अनुभव बनाते हैं।", initials: "डि" },
    { role: "डेवलपर", skill: "फ्रंटएंड · बैकएंड", contribution: "फ्रंटएंड और बैकएंड कौशल से उत्पाद बनाते हैं।", initials: "डे" },
    { role: "मार्केटर", skill: "कहानी · विकास", contribution: "प्रोजेक्ट की कहानी लोगों तक पहुँचाते हैं।", initials: "मा" },
  ],
};

const POSITIONS = [
  { x: 18, y: 28 },
  { x: 234, y: 28 },
  { x: 18, y: 254 },
  { x: 234, y: 254 },
] as const;

export function CrewAssembly({ className, locale = "en" }: { className?: string; locale?: Locale }) {
  const [selected, setSelected] = React.useState(2);
  const people = PEOPLE[locale];
  const en = locale === "en";
  const crewTag = en ? "IN THE CREW" : "\u091F\u0940\u092E \u092E\u0947\u0902";

  return (
    <section className={`crew-network ${className ?? ""}`} aria-label={en ? "CrewLab people network" : "CrewLab लोगों का नेटवर्क"} lang={en ? "en" : "hi-IN"}>
      <div className="crew-network-head">
        <span>{en ? "CREW / 01" : "क्रू / ०१"}</span>
        <span>{en ? "A project brings us together" : "प्रोजेक्ट हमें साथ लाता है"}</span>
      </div>
      <svg className="crew-network-svg" viewBox="0 0 420 360" role="group" aria-label={en ? "Select a role to see how it contributes to a project" : "प्रोजेक्ट में योगदान देखने के लिए भूमिका चुनें"}>
        <defs>
          <pattern id="crew-dots" width="8" height="8" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="1" fill="currentColor" opacity=".18" />
          </pattern>
        </defs>
        <path className="crew-net-line" data-active={selected === 0} d="M111 102 C124 127 153 148 180 167" />
        <path className="crew-net-line" data-active={selected === 1} d="M309 102 C296 127 267 148 240 167" />
        <path className="crew-net-line" data-active={selected === 2} d="M111 254 C124 229 153 208 180 193" />
        <path className="crew-net-line" data-active={selected === 3} d="M309 254 C296 229 267 208 240 193" />
        <circle className="crew-net-junction" cx="210" cy="180" r="5" />
        <g className="crew-project-card">
          <rect x="143" y="137" width="134" height="86" fill="url(#crew-dots)" />
          <rect className="crew-project-back" x="138" y="131" width="144" height="98" />
          <path className="crew-project-red" d="M138 131h144v9H138z" />
          <text className="crew-project-kicker" x="151" y="158">{en ? "SHARED PROJECT" : "साझा प्रोजेक्ट"}</text>
          <text className="crew-project-title" x="151" y="182">{en ? "Build an idea" : "विचार बनाएँ"}</text>
          <text className="crew-project-foot" x="151" y="207">{en ? "OPEN TO A CREW  ↗" : "टीम के लिए खुला  ↗"}</text>
        </g>
        {people.map((person, index) => {
          const { x, y } = POSITIONS[index];
          const active = selected === index;
          return (
            <g
              key={person.role}
              className="crew-person"
              data-active={active}
              transform={`translate(${x} ${y})`}
              role="button"
              tabIndex={0}
              aria-pressed={active}
              aria-label={`${person.role}. ${person.skill}. ${person.contribution}`}
              onClick={() => setSelected(index)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") { event.preventDefault(); setSelected(index); }
                if (event.key === "ArrowRight" || event.key === "ArrowDown") { event.preventDefault(); setSelected((index + 1) % people.length); }
                if (event.key === "ArrowLeft" || event.key === "ArrowUp") { event.preventDefault(); setSelected((index + people.length - 1) % people.length); }
              }}
            >
              <rect className="crew-person-shadow" x="4" y="4" width="168" height="76" />
              <rect className="crew-person-card" width="168" height="76" />
              <circle className="crew-avatar" cx="27" cy="27" r="16" />
              <text className="crew-avatar-initials" x="27" y="31">{person.initials}</text>
              <text className="crew-person-role" x="52" y="25">{person.role}</text>
              <text className="crew-person-skill" x="52" y="42">{person.skill}</text>
              <path className="crew-person-rule" d="M13 56h142" />
              <text className="crew-person-action" x="13" y="69">{crewTag}</text>
              <circle className="crew-person-status" cx="152" cy="64" r="4" />
            </g>
          );
        })}
      </svg>
      <div className="crew-network-detail" aria-live="polite" aria-atomic="true">
        <span className="crew-network-detail-index">0{selected + 1}</span>
        <p><strong>{people[selected].role}</strong><span>{people[selected].contribution}</span></p>
        <span className="crew-network-hint">{en ? "SELECT A BUILDER" : "भूमिका चुनें"}</span>
      </div>
    </section>
  );
}

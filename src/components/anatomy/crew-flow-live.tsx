"use client";

import * as React from "react";
import { useInView, useReadout, useStillness } from "./kit/react/live";
import { FLOW_HEIGHT, FLOW_WIDTH, STATION_X, projectShift } from "./crew-flow-view";
import { crewFlowContent, RESTING_STEP } from "./crew-flow-model";

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));

export function CrewFlowLive({ art, locale = "en" }: { art: React.ReactNode; locale?: "en" | "hi" }) {
  const { steps, artLabel } = crewFlowContent(locale);
  const { anchor, say } = useReadout<HTMLDivElement>();
  const buttonRefs = React.useRef<Array<HTMLButtonElement | null>>([]);
  const carriageAt = React.useRef<[number, number]>([0, 0]);
  const tourTimer = React.useRef<number | null>(null);
  const tourInterval = React.useRef<number | null>(null);
  const [selected, setSelected] = React.useState(RESTING_STEP);
  const [tourAllowed, setTourAllowed] = React.useState(true);
  const [announce, setAnnounce] = React.useState(false);
  const inView = useInView(anchor);
  const still = useStillness();

  const stopTour = React.useCallback(() => {
    if (tourTimer.current !== null) window.clearTimeout(tourTimer.current);
    if (tourInterval.current !== null) window.clearInterval(tourInterval.current);
    tourTimer.current = null;
    tourInterval.current = null;
  }, []);

  React.useEffect(() => {
    const root = anchor.current;
    if (!root) return;
    const carriage = root.querySelector<SVGGElement>("[data-carriage]");
    if (!carriage) return;
    const stationX = STATION_X[selected]!;
    const target = projectShift(-200, stationX);
    root.querySelectorAll<SVGGElement>("[data-stage-group]").forEach((station, index) => {
      if (index === selected) station.setAttribute("data-active", "");
      else station.removeAttribute("data-active");
    });
    say(steps[selected]!.readout);
    if (still || !inView) {
      carriageAt.current = target;
      carriage.setAttribute("transform", `translate(${target[0]} ${target[1]})`);
      return;
    }

    const start = [...carriageAt.current] as [number, number];
    const began = performance.now();
    let frame = 0;
    const step = (now: number) => {
      const progress = clamp((now - began) / 640, 0, 1);
      const eased = progress * progress * (3 - 2 * progress);
      const x = start[0] + (target[0] - start[0]) * eased;
      const y = start[1] + (target[1] - start[1]) * eased;
      carriageAt.current = [x, y];
      carriage.setAttribute("transform", `translate(${x.toFixed(2)} ${y.toFixed(2)})`);
      if (progress < 1) frame = window.requestAnimationFrame(step);
      else carriageAt.current = target;
    };
    frame = window.requestAnimationFrame(step);
    return () => window.cancelAnimationFrame(frame);
  }, [anchor, inView, say, selected, steps, still]);

  React.useEffect(() => {
    stopTour();
    if (!tourAllowed || !inView || still) return stopTour;
    tourTimer.current = window.setTimeout(() => {
      tourInterval.current = window.setInterval(() => {
        setSelected((index) => (index + 1) % steps.length);
      }, 2800);
    }, 1400);
    return stopTour;
  }, [inView, still, stopTour, steps.length, tourAllowed]);

  React.useEffect(() => () => stopTour(), [stopTour]);

  const choose = (index: number) => {
    stopTour();
    setTourAllowed(false);
    setAnnounce(true);
    setSelected(index);
  };

  const pauseForPointer = () => {
    stopTour();
    setTourAllowed(false);
  };

  const resumeTourLater = () => {
    stopTour();
    tourTimer.current = window.setTimeout(() => setTourAllowed(true), 3600);
  };

  return (
    <div className="crew-flow-interactive" onPointerEnter={pauseForPointer} onPointerLeave={resumeTourLater} onFocusCapture={pauseForPointer} onBlurCapture={(event) => {
      if (!event.currentTarget.contains(event.relatedTarget as Node | null)) resumeTourLater();
    }}>
      <div className="crew-flow-art-stage" ref={anchor}>
        <svg className="iso-svg" viewBox={`0 0 ${FLOW_WIDTH} ${FLOW_HEIGHT}`} role="img" aria-label={artLabel} focusable="false">
          {art}
        </svg>
      </div>
      <div className="crew-flow-steps" role="group" aria-label={locale === "hi" ? "CrewLab का चरण चुनें" : "Choose a CrewLab workflow step"}>
        {steps.map((step, index) => (
          <button
            key={step.short}
            ref={(node) => { buttonRefs.current[index] = node; }}
            type="button"
            tabIndex={selected === index ? 0 : -1}
            aria-pressed={selected === index}
            aria-label={`${step.title}. ${step.description}`}
            onClick={() => choose(index)}
            onKeyDown={(event) => {
              if (event.key !== "ArrowRight" && event.key !== "ArrowDown" && event.key !== "ArrowLeft" && event.key !== "ArrowUp") return;
              event.preventDefault();
              const direction = event.key === "ArrowRight" || event.key === "ArrowDown" ? 1 : -1;
              const next = (index + direction + steps.length) % steps.length;
              choose(next);
              buttonRefs.current[next]?.focus();
            }}
          >
            <span className="crew-flow-step-no">0{index + 1}</span>
            <span>{step.short}</span>
            <i aria-hidden="true" />
          </button>
        ))}
      </div>
      <div className="crew-flow-description" aria-live={announce ? "polite" : "off"} aria-atomic="true">
        <span>0{selected + 1}</span>
        <p><strong>{steps[selected]!.title}</strong>{steps[selected]!.description}</p>
      </div>
      <p className="crew-flow-interaction-hint">{locale === "hi" ? "चरण चुनें · तीर कुंजियों का इस्तेमाल करें" : "Select a station · use ← → keys"}</p>
    </div>
  );
}


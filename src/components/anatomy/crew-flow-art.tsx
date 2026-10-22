import { Dots, FaceText, Line, Solid } from "./kit/react/draw";
import { topMatrix } from "./kit/iso-kit";
import { BASE_ASSEMBLY, CARRIAGE, GUIDE_ASSEMBLY, STATIONS } from "./crew-flow-geometry";
import { PROJECTION } from "./crew-flow-view";
import type { FlowGroup } from "./crew-flow-geometry";

function Assembly({ art, name, stage, active = false }: { art: FlowGroup; name: string; stage?: number; active?: boolean }) {
  return (
    <g
      key={name}
      data-flow-assembly={name}
      data-stage-group={stage}
      data-active={active ? "" : undefined}
      className={stage === undefined ? undefined : "crew-flow-station"}
    >
      {[...art.solids].sort((a, b) => a.depth - b.depth).map((part) => (
        <Solid key={part.key} paths={part.paths} tone={part.tone} crease="faint" flat={part.flat} lit={part.lit} className={part.signal ? "crew-flow-signal" : undefined} />
      ))}
      {art.lines.map((part) => <Line key={part.key} d={part.d} tone={part.tone} dotted={part.dotted} free={part.free} />)}
      {art.dots.length ? <Dots points={art.dots} size={0.48} tone="mid" /> : null}
    </g>
  );
}

export function CrewFlowArt() {
  return (
    <g key="crew-flow-art">
      <Assembly art={BASE_ASSEMBLY} name="foundation" />
      <Assembly art={GUIDE_ASSEMBLY} name="guided-rails" />
      {STATIONS.map((station) => (
        <Assembly key={`station-${station.index}`} art={station.art} name={`station-${station.index}`} stage={station.index} active={station.index === 0} />
      ))}
      <g key="moving-brief-carriage" data-carriage="">
        <Assembly art={CARRIAGE} name="project-brief-carriage" />
        <FaceText transform={topMatrix([-208, -77], 17, PROJECTION)} size={2.6} tone="lo" anchor="start">CREWLAB</FaceText>
      </g>
    </g>
  );
}

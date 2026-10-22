import {
  circleRing,
  cylinder,
  knurl,
  onTop,
  pathOf,
  planOutline,
  slabOf,
  topTicks,
  type Flat,
  type Plan,
  type SolidPaths,
  type Tone,
} from "./kit/iso-kit";
import { BED, PROJECTION, STATION_X, projectPoint } from "./crew-flow-view";
export { FLOW_HEIGHT, FLOW_WIDTH, PROJECTION, STATION_X } from "./crew-flow-view";

export type FlowSolid = { key: string; paths: SolidPaths; tone: Tone; flat?: boolean; lit?: boolean; signal?: boolean; depth: number };
export type FlowLine = { key: string; d: string; tone: Tone; dotted?: boolean; free?: boolean };
export type FlowGroup = { solids: FlowSolid[]; lines: FlowLine[]; dots: Flat[] };
type Builder = FlowGroup;
const group = (): Builder => ({ solids: [], lines: [], dots: [] });
let partId = 0;
const solid = (into: Builder, plan: Plan, z: number, h: number, tone: Tone = "mid", bevel = 0.6, steps = 6, lit = false) => {
  into.solids.push({
    key: `solid-${partId++}`,
    paths: slabOf(plan, z, h, PROJECTION, steps, bevel),
    tone,
    lit,
    depth: plan.x + plan.w / 2 + plan.y + plan.d / 2 + z + h / 2,
  });
};
const round = (into: Builder, x: number, y: number, r: number, z: number, h: number, tone: Tone = "mid", steps = 24, signal = false) => {
  into.solids.push({
    key: `round-${partId++}`,
    paths: cylinder(x, y, r, z, h, PROJECTION, steps, 0.35),
    tone,
    signal,
    depth: x + y + z + h / 2,
  });
};
const pilot = (into: Builder, x: number, y: number, z: number) => {
  round(into, x, y, 3.1, z, 1.6, "hi", 20, true);
  faceRing(into, x, y, 2.4, z + 1.6, "hi", 20);
  into.dots.push(point(x, y, z + 1.7));
};
const line = (into: Builder, points: [number, number, number][], tone: Tone = "lo", closed = false, dotted = false, free = false) => {
  into.lines.push({ key: `line-${partId++}`, d: pathOf(points.map(projectPoint), closed), tone, dotted, free });
};
const faceRing = (into: Builder, x: number, y: number, r: number, z: number, tone: Tone = "lo", steps = 24) => {
  into.lines.push({ key: `ring-${partId++}`, d: onTop(circleRing(x, y, r, steps), z, PROJECTION, true), tone });
};
const planLine = (into: Builder, plan: Plan, z: number, tone: Tone = "faint") => {
  into.lines.push({ key: `outline-${partId++}`, d: planOutline(plan, z, PROJECTION, 5), tone });
};
const point = (x: number, y: number, z: number) => projectPoint([x, y, z]);

export const BASE_ASSEMBLY: FlowGroup = (() => {
  const out = group();
  const corners: [number, number][] = [
    [BED.x + 18, BED.y + 18], [BED.x + BED.w - 18, BED.y + 18],
    [BED.x + 18, BED.y + BED.d - 18], [BED.x + BED.w - 18, BED.y + BED.d - 18],
  ];
  corners.forEach(([x, y]) => {
    round(out, x, y, 8, -22, 2, "lo", 20);
    round(out, x, y, 5.8, -20, 6, "mid", 20);
    faceRing(out, x, y, 2, -14, "lo", 16);
    out.dots.push(point(x, y, -13.9));
  });
  solid(out, BED, -14, 14, "mid", 1.4, 8);
  planLine(out, { ...BED, x: BED.x + 5, y: BED.y + 5, w: BED.w - 10, d: BED.d - 10, r: 6 }, 0, "lo");
  const plaque = { x: -36, y: 75, w: 72, d: 12, r: 2 };
  solid(out, plaque, 0, 1, "lo", 0.2, 4);
  planLine(out, { ...plaque, x: plaque.x + 3, y: plaque.y + 2, w: plaque.w - 6, d: plaque.d - 4, r: 1 }, 1, "faint");
  // Rule marks and boundary rivets sit on the bed's inset ruler strip.
  const tick = topTicks(-210, 210, 10, 5, -91, 0, [2, 4], PROJECTION);
  out.lines.push({ key: "bed-scale-minor", d: tick.minor, tone: "lo" }, { key: "bed-scale-major", d: tick.major, tone: "mid" });
  return out;
})();

export const GUIDE_ASSEMBLY: FlowGroup = (() => {
  const out = group();
  for (const y of [-82, -66]) {
    solid(out, { x: -232, y, w: 464, d: 6, r: 2 }, 3, 4, "mid", 0.7, 4);
    const supportXs = [-218, -110, 0, 110, 218];
    supportXs.forEach((x) => {
      solid(out, { x: x - 6, y: y - 1, w: 12, d: 8, r: 2 }, 0, 3, "lo", 0.5, 4);
      round(out, x, y + 3, 1.5, 7, 1.2, "mid", 12);
      out.dots.push(point(x, y + 3, 8.2));
    });
  }
  [-236, 228].forEach((x) => {
    solid(out, { x, y: -90, w: 8, d: 36, r: 2 }, 6, 7, "mid", 0.5, 4);
    round(out, x + 4, -72, 2.3, 13, 1.5, "lo", 16);
  });
  const marks = topTicks(-218, 218, 5, 4, -64, 7, [2, 4], PROJECTION);
  out.lines.push({ key: "guide-scale", d: marks.minor, tone: "lo" }, { key: "guide-scale-major", d: marks.major, tone: "hi" });
  return out;
})();

function profileStation(cx: number): FlowGroup {
  const out = group();
  solid(out, { x: cx - 31, y: 13, w: 62, d: 55, r: 4 }, 0, 5, "lo", 0.8);
  solid(out, { x: cx - 28, y: 16, w: 56, d: 49, r: 3 }, 5, 34, "mid", 1);
  for (let index = 0; index < 3; index++) {
    const z = 9 + index * 9;
    solid(out, { x: cx - 25, y: 19, w: 50, d: 8, r: 1.5 }, z, 6, "hi", 0.45, 4);
    planLine(out, { x: cx - 22, y: 21, w: 44, d: 4, r: 1 }, z + 6, "faint");
    [-15, -5, 5, 15].forEach((offset, n) => round(out, cx + offset, 40, 2.1, z + 6, 1.2, n === 1 ? "hi" : "lo", 12));
    round(out, cx + 22, 23, 1.4, z + 2.2, 2.4, "mid", 12);
    faceRing(out, cx + 22, 23, 1.8, z + 2.2, "lo", 12);
  }
  // Skill spools and the profile's small card sit on the cabinet top.
  [-18, -6, 6, 18].forEach((offset, index) => {
    round(out, cx + offset, 55, 3.5, 39, 2.4, index === 2 ? "hi" : "mid", 18);
    faceRing(out, cx + offset, 55, 2, 41.4, "lo", 16);
    out.dots.push(point(cx + offset, 55, 41.5));
  });
  solid(out, { x: cx - 22, y: 4, w: 44, d: 7, r: 1.2 }, 39, 1.5, "lo", 0.2, 4);
  line(out, [[cx - 18, 6, 40.5], [cx + 17, 6, 40.5]], "faint", false, false, true);
  pilot(out, cx + 26, 12, 40);
  return out;
}

function discoveryStation(cx: number): FlowGroup {
  const out = group();
  solid(out, { x: cx - 32, y: 14, w: 64, d: 57, r: 5 }, 0, 3, "lo", 0.8);
  // Two project listings on a tilted? paper tray, each with an edge rule and skill chips.
  [-14, 12].forEach((offset, index) => {
    solid(out, { x: cx + offset - 13, y: 21, w: 25, d: 35, r: 2 }, 3, 1.3, "hi", 0.25, 4);
    planLine(out, { x: cx + offset - 10, y: 25, w: 18, d: 2, r: 0.5 }, 4.3, "lo");
    [-4, 2, 8].forEach((dy) => line(out, [[cx + offset - 9, 31 + dy, 4.3], [cx + offset + 8, 31 + dy, 4.3]], index ? "faint" : "lo", false, false, true));
    [-6, 0, 6].forEach((dx) => round(out, cx + offset + dx, 49, 1.4, 4.3, 1, "mid", 12));
  });
  solid(out, { x: cx - 26, y: 5, w: 53, d: 7, r: 1 }, 3, 1.2, "mid", 0.3, 4);
  // Loupe pedestal, pivot and thick glass bezel.
  round(out, cx - 4, 18, 7, 5, 3, "lo", 24);
  round(out, cx - 4, 18, 4.3, 8, 15, "mid", 24);
  round(out, cx - 4, 18, 7.2, 23, 3.5, "hi", 32);
  round(out, cx - 4, 18, 5.4, 26.5, 1.6, "lo", 32);
  faceRing(out, cx - 4, 18, 5.6, 28.1, "hi", 32);
  faceRing(out, cx - 4, 18, 4.3, 28.2, "faint", 32);
  // A handle leaves the bezel at a tangent and ends in a real grip.
  solid(out, { x: cx + 1, y: 12, w: 4, d: 28, r: 2 }, 18, 3, "mid", 0.5, 4);
  round(out, cx + 3, 38, 3.2, 18, 4, "lo", 16);
  [0, 60, 120, 180, 240, 300].forEach((angle) => {
    const rad = (angle * Math.PI) / 180;
    line(out, [[cx - 4 + 6.4 * Math.cos(rad), 18 + 6.4 * Math.sin(rad), 25], [cx - 4 + 6.4 * Math.cos(rad), 18 + 6.4 * Math.sin(rad), 26.5]], "lo");
  });
  // Skill filter wheel with detents.
  round(out, cx + 23, 59, 8, 5, 2.2, "mid", 28);
  faceRing(out, cx + 23, 59, 7.2, 7.2, "lo", 28);
  const teeth = knurl(cx + 23, 59, 8, 5.5, 7.1, 20, PROJECTION);
  out.lines.push({ key: "filter-wheel-knurl", d: teeth, tone: "faint" });
  round(out, cx + 23, 59, 2, 7.2, 1, "hi", 16);
  pilot(out, cx + 28, 12, 28);
  return out;
}

function requestStation(cx: number): FlowGroup {
  const out = group();
  solid(out, { x: cx - 33, y: 12, w: 66, d: 60, r: 5 }, 0, 3, "lo", 1);
  solid(out, { x: cx - 26, y: 19, w: 46, d: 34, r: 2.5 }, 3, 2, "mid", 0.5);
  // Ticket and guide grooves.
  solid(out, { x: cx - 20, y: 26, w: 37, d: 22, r: 2 }, 5, 1.2, "hi", 0.25, 4);
  [0, 1, 2].forEach((row) => line(out, [[cx - 15, 31 + row * 4, 6.2], [cx + 7, 31 + row * 4, 6.2]], "lo", false, false, true));
  [-14, -2, 10].forEach((x) => round(out, cx + x, 43, 1.4, 6.2, 1, "mid", 12));
  // Owner review press: twin posts, crossbar, guided platen, hinge, lever and return spring.
  [-23, 20].forEach((x) => {
    solid(out, { x: cx + x, y: 53, w: 5, d: 5, r: 1.2 }, 3, 4, "lo", 0.3, 4);
    round(out, cx + x + 2.5, 55.5, 2.2, 7, 26, "mid", 16);
    round(out, cx + x + 2.5, 55.5, 3.1, 31, 3, "lo", 18);
    out.dots.push(point(cx + x + 2.5, 55.5, 34.1));
  });
  solid(out, { x: cx - 25, y: 51, w: 52, d: 9, r: 2 }, 34, 5, "mid", 0.6);
  solid(out, { x: cx - 18, y: 30, w: 38, d: 8, r: 1.4 }, 37, 3, "hi", 0.5, 4);
  solid(out, { x: cx - 3, y: 50, w: 7, d: 8, r: 2 }, 42, 5, "mid", 0.8);
  faceRing(out, cx, 54, 3.6, 47, "lo", 16);
  // Lever and knurled end grip rest on the press pivot.
  solid(out, { x: cx + 1, y: 55, w: 30, d: 4, r: 1.8 }, 46, 3, "mid", 0.8, 5);
  round(out, cx + 30, 57, 4.5, 45, 5, "hi", 20);
  out.lines.push({ key: "approval-lever-knurl", d: knurl(cx + 30, 57, 4.5, 45.5, 49.2, 12, PROJECTION), tone: "lo" });
  // Return spring is a continuous rooted zig-zag between two real seats.
  const spring: [number, number, number][] = [];
  for (let index = 0; index <= 16; index++) spring.push([cx - 19 + (index * 41) / 16, 62 + (index % 2 ? 1.8 : -1.8), 36]);
  line(out, spring, "lo");
  round(out, cx - 19, 64, 2.2, 35, 2, "lo", 14);
  round(out, cx + 22, 64, 2.2, 35, 2, "lo", 14);
  pilot(out, cx + 25, 14, 6);
  return out;
}

function workspaceStation(cx: number): FlowGroup {
  const out = group();
  solid(out, { x: cx - 34, y: 10, w: 68, d: 64, r: 4 }, 0, 3, "lo", 0.8);
  // Workbench top with apron, four legs and foot collars.
  solid(out, { x: cx - 29, y: 14, w: 58, d: 50, r: 3 }, 22, 4, "mid", 0.8);
  planLine(out, { x: cx - 26, y: 17, w: 52, d: 44, r: 2 }, 26, "faint");
  [[-24, 18], [20, 18], [-24, 54], [20, 54]].forEach(([dx, y]) => {
    solid(out, { x: cx + dx, y, w: 5, d: 5, r: 1 }, 4, 18, "mid", 0.5, 4);
    round(out, cx + dx + 2.5, y + 2.5, 3.3, 0, 2.2, "lo", 16);
    out.dots.push(point(cx + dx + 2.5, y + 2.5, 2.2));
  });
  // Shared notes and two opposing screw clamps.
  solid(out, { x: cx - 13, y: 25, w: 27, d: 22, r: 2 }, 26, 1.2, "hi", 0.2, 4);
  [0, 1, 2].forEach((row) => line(out, [[cx - 9, 30 + row * 4, 27.2], [cx + 9 - row * 2, 30 + row * 4, 27.2]], "lo", false, false, true));
  [-24, 20].forEach((dx) => {
    solid(out, { x: cx + dx, y: 33, w: 7, d: 8, r: 1.5 }, 26, 6, "mid", 0.5, 4);
    round(out, cx + dx + 3.5, 37, 2, 31, 3, "lo", 16);
    round(out, cx + dx + 3.5, 37, 1.5, 34, 5.4, "mid", 16);
    round(out, cx + dx + 3.5, 37, 2.8, 39.4, 2, "hi", 16);
    out.lines.push({ key: `clamp-knurl-${cx}-${dx}`, d: knurl(cx + dx + 3.5, 37, 2.8, 39.7, 41.1, 10, PROJECTION), tone: "lo" });
  });
  // Three collaborators: body posts, collars, and distinct heads.
  [-13, 0, 13].forEach((dx, index) => {
    round(out, cx + dx, 56, 3.7, 27, 6 + (index === 1 ? 1 : 0), "mid", 18);
    round(out, cx + dx, 56, 2.9, 33 + (index === 1 ? 1 : 0), 1.3, "lo", 18);
    round(out, cx + dx, 56, 3.6, 34.3 + (index === 1 ? 1 : 0), 5, index === 1 ? "hi" : "mid", 20);
    faceRing(out, cx + dx, 56, 2.7, 39.3 + (index === 1 ? 1 : 0), "lo", 16);
  });
  // Two note clips at the table edge.
  [-20, 19].forEach((dx) => {
    solid(out, { x: cx + dx, y: 16, w: 4, d: 7, r: 1 }, 26, 2.5, "lo", 0.3, 4);
    out.dots.push(point(cx + dx + 2, 19.5, 28.5));
  });
  pilot(out, cx + 26, 12, 27);
  return out;
}

function githubStation(cx: number): FlowGroup {
  const out = group();
  solid(out, { x: cx - 34, y: 10, w: 68, d: 65, r: 5 }, 0, 3, "lo", 0.8);
  // Inspection reader housing and recessed glass/well.
  solid(out, { x: cx - 28, y: 18, w: 56, d: 42, r: 4 }, 3, 13, "mid", 1);
  solid(out, { x: cx - 23, y: 22, w: 46, d: 31, r: 3 }, 16, 2, "lo", 0.5, 5);
  solid(out, { x: cx - 19, y: 26, w: 38, d: 23, r: 2 }, 18, 0.8, "hi", 0.2, 4);
  planLine(out, { x: cx - 17, y: 28, w: 34, d: 19, r: 1.4 }, 18.8, "faint");
  // Branch rails and three removable repository tabs.
  line(out, [[cx, 29, 18.9], [cx, 35, 18.9], [cx - 11, 42, 18.9]], "hi");
  line(out, [[cx, 35, 18.9], [cx + 11, 42, 18.9]], "hi");
  line(out, [[cx, 35, 18.9], [cx, 47, 18.9]], "hi");
  [-11, 0, 11].forEach((dx, index) => {
    solid(out, { x: cx + dx - 3.4, y: 40 + (index === 1 ? 5 : 0), w: 6.8, d: 5, r: 1.2 }, 19, 2.2, index === 1 ? "hi" : "mid", 0.3, 4);
    out.dots.push(point(cx + dx, 42 + (index === 1 ? 5 : 0), 21.3));
  });
  // Issue register dial mounted on the side of the reader.
  round(out, cx + 23, 65, 7.4, 18, 2.5, "mid", 28);
  faceRing(out, cx + 23, 65, 6.5, 20.5, "lo", 28);
  const register = topTicks(cx + 23 - 4.6, cx + 23 + 4.6, 2.3, 2, 65 - 4.6, 20.6, [1.5, 2.7], PROJECTION);
  out.lines.push({ key: "issue-register-ticks", d: register.minor + register.major, tone: "lo" });
  round(out, cx + 23, 65, 1.4, 20.6, 1, "hi", 14);
  // A physical read-only shutter and a padlock prove the access boundary.
  solid(out, { x: cx - 20, y: 8, w: 40, d: 7, r: 2 }, 3, 2, "hi", 0.3, 4);
  solid(out, { x: cx + 7, y: 8, w: 13, d: 12, r: 2 }, 5, 7, "mid", 0.8, 5);
  round(out, cx + 13.5, 14, 5, 12, 3, "hi", 20);
  faceRing(out, cx + 13.5, 14, 5, 15, "lo", 20);
  solid(out, { x: cx + 11.5, y: 12, w: 4, d: 4, r: 0.6 }, 8, 4, "lo", 0.3, 4);
  round(out, cx + 13.5, 14, 1.2, 8, 1, "hi", 12);
  // Reader hood, page guides, fasteners and inspection-hatch bezel.
  solid(out, { x: cx - 31, y: 17, w: 4, d: 44, r: 1.6 }, 15, 5, "lo", 0.5, 4);
  solid(out, { x: cx + 27, y: 17, w: 4, d: 44, r: 1.6 }, 15, 5, "lo", 0.5, 4);
  [-27, 27].forEach((dx) => [19, 56].forEach((y) => {
    faceRing(out, cx + dx, y, 1.4, 20, "lo", 12);
    out.dots.push(point(cx + dx, y, 20.1));
  }));
  pilot(out, cx - 25, 13, 18);
  return out;
}

export const STATIONS = [profileStation, discoveryStation, requestStation, workspaceStation, githubStation].map((make, index) => ({
  index,
  x: STATION_X[index]!,
  art: make(STATION_X[index]!),
}));

export const CARRIAGE: FlowGroup = (() => {
  const out = group();
  const x = STATION_X[0];
  // A moving inspection carriage carries one shared project brief above the rail.
  solid(out, { x: x - 20, y: -86, w: 40, d: 31, r: 3 }, 9, 4, "lo", 0.7);
  for (const dx of [-13, 13]) for (const dy of [-80, -68]) {
    round(out, x + dx, dy, 4.1, 10, 4, "mid", 20);
    faceRing(out, x + dx, dy, 2.2, 14, "lo", 16);
    out.dots.push(point(x + dx, dy, 14.1));
  }
  solid(out, { x: x - 16, y: -84, w: 32, d: 26, r: 2 }, 14, 2, "hi", 0.45, 5);
  solid(out, { x: x - 13, y: -81, w: 26, d: 20, r: 1.2 }, 16, 1, "mid", 0.2, 4);
  planLine(out, { x: x - 8, y: -77, w: 16, d: 2.2, r: 0.6 }, 17, "lo");
  planLine(out, { x: x - 8, y: -73, w: 12, d: 1.5, r: 0.5 }, 17, "faint");
  // The search lamp swivels toward the selected station from a real post and pivot.
  round(out, x, -70, 3.5, 18, 2, "mid", 20);
  round(out, x, -70, 2, 20, 18, "lo", 18);
  round(out, x, -70, 3.5, 38, 2, "mid", 20);
  solid(out, { x: x - 6, y: -77, w: 12, d: 13, r: 2.8 }, 39, 7, "hi", 1, 6);
  round(out, x, -70.5, 4.2, 46, 1, "lo", 24);
  faceRing(out, x, -70.5, 3, 47, "hi", 24);
  const lampKnurl = knurl(x, -70, 3.4, 40, 45, 14, PROJECTION);
  out.lines.push({ key: "lamp-ribs", d: lampKnurl, tone: "lo" });
  // Two guard ribs hold the card at its ends; four fasteners land on the cradle.
  [-11, 11].forEach((dx) => {
    solid(out, { x: x + dx - 1.2, y: -80, w: 2.4, d: 19, r: 0.8 }, 18, 4, "mid", 0.35, 4);
    round(out, x + dx, -80, 1, 18, 1, "lo", 12);
    out.dots.push(point(x + dx, -80, 19.1));
  });
  // Lamp cable runs along the back of the carriage and terminates on the lamp body.
  line(out, [[x - 11, -80, 20], [x - 15, -77, 24], [x - 12, -73, 31], [x - 6, -70, 39]], "lo");
  out.dots.push(point(x - 11, -80, 20), point(x - 6, -70, 39));
  [-16, -12].forEach((dx) => round(out, x + dx, -81 + (dx === -12 ? 4 : 0), 1.5, 19, 2, "lo", 12));
  return out;
})();

export const BASE_SCREW_COUNT = 4;

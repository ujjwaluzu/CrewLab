import { boxCorners, fitProjection, iso, type Flat, type Plan, type Projection } from "./kit/iso-kit";

export const FLOW_WIDTH = 840;
export const FLOW_HEIGHT = 480;
export const STATION_X = [-200, -100, 0, 100, 200] as const;
export const BED: Plan = { x: -250, y: -100, w: 500, d: 200, r: 12 };
export const PROJECTION: Projection = fitProjection(
  [
    ...boxCorners(BED, -22, 0),
    ...boxCorners({ x: -238, y: -92, w: 476, d: 24, r: 3 }, 4, 55),
    ...STATION_X.flatMap((x) => boxCorners({ x: x - 36, y: 0, w: 72, d: 76, r: 5 }, 0, 55)),
  ],
  FLOW_WIDTH,
  FLOW_HEIGHT,
  { pad: 36, azimuth: 54, elevation: 34 },
);

export const projectPoint = (point: [number, number, number]) => iso(point, PROJECTION);
export const projectShift = (fromX: number, toX: number) => {
  const from = projectPoint([fromX, -77, 11]);
  const to = projectPoint([toX, -77, 11]);
  return [Math.round((to[0] - from[0]) * 100) / 100, Math.round((to[1] - from[1]) * 100) / 100] as Flat;
};

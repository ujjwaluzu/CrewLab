type TornEdgeProps = {
  seedIndex: number;
  color: string;
};

function pointsFor(seedIndex: number) {
  let seed = (seedIndex + 3) * 977;
  const width = 1440;
  const height = 26;
  const points = ["0,0"];
  const random = () => {
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280;
  };

  for (let x = 0; x < width; x += 6 + random() * 20) {
    points.push(`${x.toFixed(0)},${(3 + random() * (height - 5)).toFixed(1)}`);
  }

  points.push(
    `${width},${(3 + random() * (height - 5)).toFixed(1)}`,
    `${width},0`,
  );
  return points.join(" ");
}

export default function TornEdge({ seedIndex, color }: TornEdgeProps) {
  return (
    <i className="tear" style={{ color }}>
      <svg viewBox="0 0 1440 26" preserveAspectRatio="none" aria-hidden="true">
        <polygon points={pointsFor(seedIndex)} fill="currentColor" />
      </svg>
    </i>
  );
}
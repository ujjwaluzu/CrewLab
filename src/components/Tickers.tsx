const paperItems = [
  "Find your crew",
  "Find a cofounder",
  "Find developers",
  "Join side projects",
  "Build together",
  "Ideas to impact",
];
const redItems = [
  "Startup team building",
  "Builder community",
  "Project collaboration",
  "GitHub integration",
  "Task & milestone tracking",
  "Team collaboration",
];

function Track({ items }: { items: string[] }) {
  return (
    <div className="track">
      {[...items, ...items].map((item, index) => <span key={`${item}-${index}`}>{item}</span>)}
    </div>
  );
}

export default function Tickers() {
  return (
    <>
      <div className="tick tick-a" aria-hidden="true"><Track items={paperItems} /></div>
      <div className="tick tick-b" aria-hidden="true"><Track items={redItems} /></div>
    </>
  );
}
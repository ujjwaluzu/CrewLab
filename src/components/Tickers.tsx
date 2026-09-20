const paperItems = ["Find your crew", "Build what matters", "Ideas to impact", "Good builders build together"];
const redItems = ["Waitlist open", "GitHub integration", "Task & milestone tracking", "Project discussions", "Activity feed", "Team collaboration"];

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
const items = ["Find your crew", "Find a cofounder", "Find developers", "Join side projects"];

export default function Marquee() {
  const sequence = [...items, ...items, ...items, ...items];
  return (
    <div className="marquee" aria-label="Find your crew, find a cofounder, find developers, join side projects">
      <div className="marquee-track" aria-hidden="true">
        {sequence.map((item, index) => <span key={`${item}-${index}`}>{item}<b aria-hidden="true">✦</b></span>)}
      </div>
    </div>
  );
}

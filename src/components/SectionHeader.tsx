export default function SectionHeader({ kicker, children, accent, description, id }: { kicker?: string; children: string; accent?: string; description?: string; id?: string }) {
  return <header className="section-header sec-head">
    {kicker && <p className="kicker">/ {kicker}</p>}
    <h2 className="h" id={id}>{children}{accent && <> <i>{accent}</i></>}</h2>
    {description && <p className="section-description">{description}</p>}
  </header>;
}

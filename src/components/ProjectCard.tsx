export default function ProjectCard({ number, name, description, status, skills, tone = "paper" }: { number: string; name: string; description: string; status: string; skills: string; tone?: "paper" | "tan" }) {
  return <article className={`project-card ${tone}`}>
    <span className="project-meta">Sample · {number}</span>
    <h3>{name}</h3>
    <p>{description}</p>
    <div className="project-details"><strong>{status}</strong><span>Looking for: {skills}</span></div>
  </article>;
}

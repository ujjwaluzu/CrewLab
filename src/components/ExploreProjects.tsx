type Project = {
  name: string;
  initial: string;
  category: string;
  description: string;
  skills: string[];
  filled: number;
  need: number;
  builders: string[];
};

const PALETTE = ["#BFDCC8", "#E9B44C", "#F08A7A", "#9CB8E8", "#D9A21E", "#C9C3B5"];

const projects: Project[] = [
  {
    name: "StudySync",
    initial: "S",
    category: "Education",
    description: "A collaborative study platform designed to help students learn together.",
    skills: ["Frontend", "Backend", "UI/UX"],
    filled: 3,
    need: 5,
    builders: ["KS", "NM", "AJ"],
  },
  {
    name: "HabitHub",
    initial: "H",
    category: "Design",
    description: "A social approach to building better habits with friends.",
    skills: ["Mobile", "Design", "Marketing"],
    filled: 2,
    need: 4,
    builders: ["PP", "SR"],
  },
  {
    name: "DevConnect",
    initial: "D",
    category: "Development",
    description: "A place for developers to find projects and build together.",
    skills: ["React", "Node", "Community"],
    filled: 4,
    need: 6,
    builders: ["DK", "VK", "RA", "TM"],
  },
  {
    name: "EcoTrack",
    initial: "E",
    category: "AI",
    description: "Track. Reduce. Make an impact — one footprint at a time.",
    skills: ["Mobile", "Data", "Design"],
    filled: 2,
    need: 5,
    builders: ["IJ", "WA"],
  },
  {
    name: "CampusHub",
    initial: "C",
    category: "Design",
    description: "Your campus, connected.",
    skills: ["Product", "Design", "Community"],
    filled: 1,
    need: 4,
    builders: ["SB"],
  },
  {
    name: "NightOwl",
    initial: "N",
    category: "AI",
    description: "Tools and focus streaks for night-owl learners who build together.",
    skills: ["Web", "AI", "Community"],
    filled: 2,
    need: 5,
    builders: ["MR", "ZT"],
  },
];

export default function ExploreProjects() {
  return (
    <div className="x-grid">
      {projects.map((project, index) => (
        <article className="x-card" key={project.name}>
          <div className="x-card-top">
            <span className="x-samp">Sample</span>
            <span className="x-num">0{index + 1}</span>
          </div>
          <div className="x-card-cover" aria-hidden="true">
            <span className="x-card-initial">{project.initial}</span>
            <i className="x-slash" />
            <span className="x-field">{project.category}</span>
          </div>
          <div className="x-card-body">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <div className="x-skills">
              {project.skills.map((skill) => (
                <span className="x-skill" key={skill}>{skill}</span>
              ))}
            </div>
            <div className="x-build">
              <span className="x-avs" aria-hidden="true">
                {project.builders.slice(0, project.filled).map((builder, i) => (
                  <i key={builder} style={{ background: PALETTE[i % PALETTE.length] }}>{builder}</i>
                ))}
              </span>
              <span className="x-seek">
                <b>{project.filled}</b> / {project.need} builders · {project.need - project.filled} open
              </span>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
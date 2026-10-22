type Project = {
  name: string;
  category: string;
  description: string;
  skills: string[];
  filled: number;
  need: number;
};

const projects: Project[] = [
  {
    name: "StudySync",
    category: "Education",
    description: "A collaborative study platform designed to help students learn together.",
    skills: ["Frontend", "Backend", "UI/UX"],
    filled: 3,
    need: 5,
  },
  {
    name: "HabitHub",
    category: "Design",
    description: "A social approach to building better habits with friends.",
    skills: ["Mobile", "Design", "Marketing"],
    filled: 2,
    need: 4,
  },
  {
    name: "DevConnect",
    category: "Development",
    description: "A place for developers to find projects and build together.",
    skills: ["React", "Node", "Community"],
    filled: 4,
    need: 6,
  },
  {
    name: "EcoTrack",
    category: "AI",
    description: "Track. Reduce. Make an impact - one footprint at a time.",
    skills: ["Mobile", "Data", "Design"],
    filled: 2,
    need: 5,
  },
  {
    name: "CampusHub",
    category: "Design",
    description: "Your campus, connected.",
    skills: ["Product", "Design", "Community"],
    filled: 1,
    need: 4,
  },
  {
    name: "NightOwl",
    category: "AI",
    description: "Tools and focus streaks for night-owl learners who build together.",
    skills: ["Web", "AI", "Community"],
    filled: 2,
    need: 5,
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
          <div className="x-card-body">
            <span className="x-card-category">{project.category}</span>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <div className="x-skills">
              {project.skills.map((skill) => (
                <span className="x-skill" key={skill}>{skill}</span>
              ))}
            </div>
            <div className="x-build">
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

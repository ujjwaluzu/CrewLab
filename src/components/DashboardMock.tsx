export default function DashboardMock() {
  return (
    <div className="win" role="img" aria-label="Preview of the CrewLab workspace dashboard showing ideas, active projects, team members, tasks, recent projects and recent activity">
      <div className="w-body">
        <aside className="w-side">
          <div className="w-logo">CrewLab</div>
          <a className="on">Overview</a><a>Ideas</a><a>Projects</a><a>Tasks</a><a>Team</a><a>Discussions</a><a>Activity</a><a>Milestones</a><a>Settings</a>
          <div className="w-me"><span className="pip" style={{ background: "#BFDCC8" }}>UJ</span>Ujjwal</div>
        </aside>
        <div className="w-main">
          <div className="w-top">
            <div><h4>Hey Ujjwal,</h4><p>Good to see you back. Let&apos;s keep building.</p></div>
            <button className="w-new" tabIndex={-1}>+ New Project</button>
          </div>
          <div className="w-stats">
            <div className="w-stat"><b>12</b><span>Ideas</span></div>
            <div className="w-stat"><b>4</b><span>Active projects</span></div>
            <div className="w-stat"><b>8</b><span>Team members</span></div>
            <div className="w-stat"><b>16</b><span>Tasks completed</span></div>
          </div>
          <div className="w-cols">
            <div className="w-panel">
              <h5>Recent projects</h5>
              <div className="w-row"><span className="dot">S</span><div className="t"><b>StudySync</b><span>A collaborative learning platform for students</span></div><span className="w-chip c-prog">In progress</span></div>
              <div className="w-row"><span className="dot">E</span><div className="t"><b>EcoTrack</b><span>Track. Reduce. Make an impact.</span></div><span className="w-chip c-plan">Planning</span></div>
              <div className="w-row"><span className="dot">D</span><div className="t"><b>DevConnect</b><span>Linking developers for real-world projects</span></div><span className="w-chip c-prog">In progress</span></div>
              <div className="w-row"><span className="dot">C</span><div className="t"><b>CampusHub</b><span>Your campus, connected.</span></div><span className="w-chip c-idea">Idea stage</span></div>
            </div>
            <div className="w-panel act">
              <h5>Recent activity</h5>
              <div className="w-row"><span className="pip" style={{ background: "#F08A7A" }}>P</span><div className="t"><b>Priya commented</b><span>on StudySync · 2 hours ago</span></div></div>
              <div className="w-row"><span className="pip" style={{ background: "#E9B44C" }}>R</span><div className="t"><b>Rohan joined the team</b><span>4 hours ago</span></div></div>
              <div className="w-row"><span className="pip" style={{ background: "#BFDCC8" }}>U</span><div className="t"><b>You updated a task</b><span>UI Design · 6 hours ago</span></div></div>
              <div className="w-row"><span className="pip" style={{ background: "#9CB8E8" }}>A</span><div className="t"><b>Aman pushed 3 commits</b><span>1 day ago</span></div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
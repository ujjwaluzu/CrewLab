import Icon from "@/components/Icon";
import TornEdge from "@/components/TornEdge";
import DashboardMock from "@/components/DashboardMock";

const features = [
  ["users", "Team collaboration"],
  ["branch", "GitHub integration"],
  ["check", "Task & milestone tracking"],
  ["chat", "Project discussions"],
  ["pulse", "Activity feed"],
] as const;

export default function Workspace() {
  return (
    <section className="pad ws" id="workspace">
      <TornEdge seedIndex={0} color="var(--paper)" />
      <div className="wrap ws-grid">
        <div className="ws-copy">
          <h2 className="h ws-title">A collaboration <em>workspace for builders</em></h2>
          <p>Everything your startup team needs to collaborate on a project - tasks, milestones, discussions and progress - in one shared workspace, not a chat feed.</p>
          <ul className="feats">
            {features.map(([icon, label]) => <li key={label}><Icon name={icon} />{label}</li>)}
          </ul>
        </div>
        <div className="stage">
          <svg className="brush" viewBox="0 0 600 140" aria-hidden="true"><use href="#brush-s" /></svg>
          <div className="frame"><DashboardMock /></div>
        </div>
      </div>
    </section>
  );
}
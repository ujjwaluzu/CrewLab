export default function DashboardMock() {
  return (
    <div className="dashboard-preview" role="img" aria-label="CrewLab dashboard preview with a greeting and four builder stats">
      <div className="dashboard-dots" aria-hidden="true"><i /><i /><i /></div>
      <h2>Hey Ujwal,</h2>
      <p>Good to see you back. Let&apos;s keep building.</p>
      <div className="dashboard-stats">
        <div><strong>12</strong><span>Ideas</span></div>
        <div><strong>4</strong><span>Active projects</span></div>
        <div><strong>8</strong><span>Team members</span></div>
        <div><strong>16</strong><span>Tasks done</span></div>
      </div>
    </div>
  );
}

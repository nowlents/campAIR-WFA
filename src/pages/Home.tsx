import { workstreams, getWorkstreamStats } from '../data/deliverables';
import { WorkstreamCard } from '../components/WorkstreamCard';

export function Home() {
  const totalDeliverables = workstreams.reduce((sum, ws) => sum + ws.deliverables.length, 0);
  const totalReady = workstreams.reduce(
    (sum, ws) => sum + getWorkstreamStats(ws).ready,
    0
  );
  const overallProgress = Math.round((totalReady / totalDeliverables) * 100);

  return (
    <div className="home">
      <section className="hero">
        <h2 className="hero__title">Camp AIR Deliverables</h2>
        <p className="hero__description">
          A comprehensive view of all Camp AIR workstreams, deliverables, and their current status.
          Track progress across the structured 3-week experience, lab design, trainer enablement,
          content governance, and agentic content management.
        </p>
        <div className="hero__stats">
          <div className="hero__stat">
            <span className="hero__stat-value">{workstreams.length}</span>
            <span className="hero__stat-label">Workstreams</span>
          </div>
          <div className="hero__stat">
            <span className="hero__stat-value">{totalDeliverables}</span>
            <span className="hero__stat-label">Deliverables</span>
          </div>
          <div className="hero__stat">
            <span className="hero__stat-value">{overallProgress}%</span>
            <span className="hero__stat-label">Complete</span>
          </div>
        </div>
      </section>
      <section className="workstream-grid">
        {workstreams.map((ws) => (
          <WorkstreamCard key={ws.id} workstream={ws} />
        ))}
      </section>
    </div>
  );
}

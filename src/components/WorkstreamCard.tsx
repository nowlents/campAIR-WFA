import { Link } from 'react-router-dom';
import { type Workstream, getWorkstreamStats } from '../data/deliverables';

interface WorkstreamCardProps {
  workstream: Workstream;
}

export function WorkstreamCard({ workstream }: WorkstreamCardProps) {
  const stats = getWorkstreamStats(workstream);
  const progressPercent = Math.round((stats.ready / stats.total) * 100);

  return (
    <Link to={`/${workstream.id}`} className="workstream-card">
      <div className="workstream-card__icon">{workstream.icon}</div>
      <h3 className="workstream-card__title">{workstream.shortTitle}</h3>
      <p className="workstream-card__description">{workstream.description}</p>
      <div className="workstream-card__progress">
        <div className="workstream-card__progress-bar">
          <div
            className="workstream-card__progress-fill"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
        <div className="workstream-card__stats">
          <span className="stat stat--ready">{stats.ready} ready</span>
          <span className="stat stat--in-progress">{stats.inProgress} in progress</span>
          <span className="stat stat--planned">{stats.planned} planned</span>
        </div>
      </div>
    </Link>
  );
}

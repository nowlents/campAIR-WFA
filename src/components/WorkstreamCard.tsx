import { Link } from 'react-router-dom';
import { type Workstream } from '../data/deliverables';

interface WorkstreamCardProps {
  workstream: Workstream;
}

export function WorkstreamCard({ workstream }: WorkstreamCardProps) {
  return (
    <Link to={`/${workstream.id}`} className="workstream-card">
      <div className="workstream-card__icon">{workstream.icon}</div>
      <h3 className="workstream-card__title">{workstream.shortTitle}</h3>
      <p className="workstream-card__description">{workstream.description}</p>
    </Link>
  );
}

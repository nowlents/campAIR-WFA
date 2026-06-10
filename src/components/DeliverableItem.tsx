import { type Deliverable } from '../data/deliverables';
import { StatusBadge } from './StatusBadge';

interface DeliverableItemProps {
  deliverable: Deliverable;
}

export function DeliverableItem({ deliverable }: DeliverableItemProps) {
  return (
    <div className="deliverable-item">
      <div className="deliverable-item__header">
        <h4 className="deliverable-item__title">{deliverable.title}</h4>
        <StatusBadge status={deliverable.status} />
      </div>
      <p className="deliverable-item__description">{deliverable.description}</p>
      {deliverable.artifactUrl && (
        <a
          href={deliverable.artifactUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="deliverable-item__link"
        >
          📎 {deliverable.artifactLabel || 'View Artifact'}
        </a>
      )}
    </div>
  );
}

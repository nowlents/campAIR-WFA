import { useParams, Link } from 'react-router-dom';
import { workstreams } from '../data/deliverables';
import { DeliverableItem } from '../components/DeliverableItem';
import { type Status } from '../data/deliverables';

export function WorkstreamDetail() {
  const { id } = useParams<{ id: string }>();
  const workstream = workstreams.find((ws) => ws.id === id);

  if (!workstream) {
    return (
      <div className="not-found">
        <h2>Workstream not found</h2>
        <Link to="/">← Back to Overview</Link>
      </div>
    );
  }

  const groupedDeliverables: Record<Status, typeof workstream.deliverables> = {
    ready: workstream.deliverables.filter((d) => d.status === 'ready'),
    'in-progress': workstream.deliverables.filter((d) => d.status === 'in-progress'),
    planned: workstream.deliverables.filter((d) => d.status === 'planned'),
  };

  return (
    <div className="workstream-detail">
      <Link to="/" className="workstream-detail__back">← Back to Overview</Link>
      <div className="workstream-detail__header">
        <span className="workstream-detail__icon">{workstream.icon}</span>
        <div>
          <h2 className="workstream-detail__title">{workstream.title}</h2>
          <p className="workstream-detail__description">{workstream.description}</p>
        </div>
      </div>

      {groupedDeliverables.ready.length > 0 && (
        <section className="deliverable-section">
          <h3 className="deliverable-section__heading deliverable-section__heading--ready">
            ✅ Ready ({groupedDeliverables.ready.length})
          </h3>
          <div className="deliverable-list">
            {groupedDeliverables.ready.map((d) => (
              <DeliverableItem key={d.id} deliverable={d} />
            ))}
          </div>
        </section>
      )}

      {groupedDeliverables['in-progress'].length > 0 && (
        <section className="deliverable-section">
          <h3 className="deliverable-section__heading deliverable-section__heading--in-progress">
            🔄 In Progress ({groupedDeliverables['in-progress'].length})
          </h3>
          <div className="deliverable-list">
            {groupedDeliverables['in-progress'].map((d) => (
              <DeliverableItem key={d.id} deliverable={d} />
            ))}
          </div>
        </section>
      )}

      {groupedDeliverables.planned.length > 0 && (
        <section className="deliverable-section">
          <h3 className="deliverable-section__heading deliverable-section__heading--planned">
            📋 Planned ({groupedDeliverables.planned.length})
          </h3>
          <div className="deliverable-list">
            {groupedDeliverables.planned.map((d) => (
              <DeliverableItem key={d.id} deliverable={d} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

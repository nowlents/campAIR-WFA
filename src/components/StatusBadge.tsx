import { type Status } from '../data/deliverables';

interface StatusBadgeProps {
  status: Status;
}

const statusConfig: Record<Status, { label: string; className: string }> = {
  ready: { label: 'Ready', className: 'status-badge--ready' },
  'in-progress': { label: 'In Progress', className: 'status-badge--in-progress' },
  planned: { label: 'Planned', className: 'status-badge--planned' },
};

export function StatusBadge({ status }: StatusBadgeProps) {
  const config = statusConfig[status];
  return <span className={`status-badge ${config.className}`}>{config.label}</span>;
}

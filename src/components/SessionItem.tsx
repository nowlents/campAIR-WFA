import { type Resource } from '../data/nonEngAgenda';

const typeIcons: Record<Resource['type'], string> = {
  deck: '📊',
  guide: '📋',
  lab: '🧪',
  document: '📄',
  video: '🎬',
  link: '🔗',
};

interface SessionItemProps {
  title: string;
  description: string;
  resources: Resource[];
}

export function SessionItem({ title, description, resources }: SessionItemProps) {
  return (
    <div className="session-item">
      <h4 className="session-item__title">{title}</h4>
      <p className="session-item__description">{description}</p>
      {resources.length > 0 && (
        <div className="session-item__resources">
          {resources.map((r) => (
            <a
              key={r.id}
              href={r.url || '#'}
              className="session-item__resource"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="session-item__resource-icon">{typeIcons[r.type]}</span>
              <span className="session-item__resource-label">{r.title}</span>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

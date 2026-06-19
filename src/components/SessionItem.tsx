import { type Resource } from '../data/nonEngAgenda';

const typeIcons: Record<Resource['type'], string> = {
  deck: '📊',
  guide: '📋',
  lab: '🧪',
  document: '📄',
  video: '🎬',
  link: '🔗',
  preview: '▶️',
};

const typePriority: Record<Resource['type'], number> = {
  deck: 1,
  preview: 2,
  video: 3,
  lab: 4,
  link: 5,
  document: 6,
  guide: 7,
};

interface SessionItemProps {
  title: string;
  description: string;
  resources: Resource[];
  placeholder?: boolean;
}

export function SessionItem({ title, description, resources, placeholder }: SessionItemProps) {
  const sorted = resources;

  const renderResource = (r: Resource) => {
    const hasUrl = r.url && r.url.length > 0;
    return hasUrl ? (
      <a
        key={r.id}
        href={r.url}
        className="session-item__resource"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="session-item__resource-icon">{typeIcons[r.type]}</span>
        <span className="session-item__resource-label">{r.title}</span>
      </a>
    ) : (
      <span key={r.id} className="session-item__resource session-item__resource--pending">
        <span className="session-item__resource-icon">{typeIcons[r.type]}</span>
        <span className="session-item__resource-label">{r.title}</span>
      </span>
    );
  };

  return (
    <div className={`session-item${placeholder ? ' session-item--placeholder' : ''}`}>
      {placeholder && (
        <div className="session-item__placeholder-banner">
          <span className="session-item__placeholder-icon">🎯</span>
          <span className="session-item__placeholder-text">
            This session will be custom-tailored to your engineering audience during consultation.
          </span>
        </div>
      )}
      <h4 className="session-item__title">{title}</h4>
      <p className="session-item__description">{description}</p>
      {resources.length > 0 && (
        <div className="session-item__resources">
          {sorted.map(renderResource)}
        </div>
      )}
    </div>
  );
}

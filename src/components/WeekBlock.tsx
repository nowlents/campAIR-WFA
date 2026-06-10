import { useState } from 'react';
import { type Week } from '../data/nonEngAgenda';
import { SessionItem } from './SessionItem';

interface WeekBlockProps {
  week: Week;
  defaultOpen?: boolean;
}

export function WeekBlock({ week, defaultOpen = false }: WeekBlockProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const hasSessions = week.sessions && week.sessions.length > 0;

  return (
    <div className={`week-block ${isOpen ? 'week-block--open' : ''}`}>
      <button
        className="week-block__header"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <div className="week-block__label">{week.label}</div>
        <div className="week-block__info">
          <h3 className="week-block__title">{week.title}</h3>
          {!isOpen && (
            <p className="week-block__preview">{week.description.slice(0, 100)}...</p>
          )}
        </div>
        <span className="week-block__chevron">{isOpen ? '▾' : '▸'}</span>
      </button>

      {isOpen && (
        <div className="week-block__content">
          <p className="week-block__description">{week.description}</p>
          {hasSessions && (
            <div className="week-block__sessions">
              {week.sessions!.map((session) => (
                <SessionItem
                  key={session.id}
                  title={session.title}
                  description={session.description}
                  resources={session.resources}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

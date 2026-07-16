import { useState, type ReactNode } from 'react';
import { type Week } from '../data/nonEngAgenda';
import { SessionItem } from './SessionItem';

interface WeekBlockProps {
  week: Week;
  defaultOpen?: boolean;
  showDayThemes?: boolean;
  children?: ReactNode;
}

export function WeekBlock({ week, defaultOpen = false, showDayThemes = true, children }: WeekBlockProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const hasSessions = week.sessions && week.sessions.length > 0;

  const dayThemes: Record<number, string> = {
    1: 'USE',
    2: 'DELEGATE',
    3: 'BUILD',
    4: 'REDESIGN',
  };

  const dayUseCases: Record<number, string> = {
    1: 'Everyday AI fluency in existing workflows',
    2: 'Automating repetitive tasks & handoffs',
    3: 'Creating custom solutions & agents',
    4: 'Rethinking processes from the ground up',
  };

  // Group sessions by day
  const groupedByDay = hasSessions
    ? week.sessions!.reduce<Record<number, typeof week.sessions>>((acc, session) => {
        const day = session.day || 0;
        if (!acc[day]) acc[day] = [];
        acc[day]!.push(session);
        return acc;
      }, {})
    : {};

  const dayNumbers = Object.keys(groupedByDay).map(Number).sort((a, b) => a - b);

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
          {children ? (
            children
          ) : hasSessions && dayNumbers.length > 1 ? (
            <div className="week-block__days">
              {dayNumbers.map((dayNum) => (
                <div key={dayNum} className="day-group">
                  <div className="day-group__header">
                    <span className="day-group__badge">
                      Day {dayNum}{showDayThemes && dayThemes[dayNum] && ` — ${dayThemes[dayNum]}`}
                    </span>
                    {showDayThemes && dayUseCases[dayNum] && (
                      <span className="day-group__use-case">{dayUseCases[dayNum]}</span>
                    )}
                    <div className="day-group__line" />
                  </div>
                  <div className="day-group__sessions">
                    {groupedByDay[dayNum]!.map((session) => (
                      <SessionItem
                        key={session.id}
                        title={session.title.replace(/^Day \d+ — /, '')}
                        description={session.description}
                        resources={session.resources}
                        placeholder={session.placeholder}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : hasSessions ? (
            <div className="week-block__sessions">
              {week.sessions!.map((session) => (
                <SessionItem
                  key={session.id}
                  title={session.title}
                  description={session.description}
                  resources={session.resources}
                  placeholder={session.placeholder}
                />
              ))}
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
}

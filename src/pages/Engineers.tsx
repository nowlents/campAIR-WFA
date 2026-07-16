import { useState } from 'react';
import { engSessions } from '../data/engAgenda';
import { SessionItem } from '../components/SessionItem';
import { AgendaBuilder } from '../components/AgendaBuilder';

export function Engineers() {
  const [sessionsOpen, setSessionsOpen] = useState(false);

  return (
    <div className="engineers-page">
      <section className="page-intro">
        <h2 className="page-intro__title">Camp AIR for Engineers</h2>
        <div className="page-intro__body">
          <p>
            The engineering track is organized into a collection of self-serve videos delivered by subject matter experts, available to watch together as teams. Each session includes accompanying presentation materials and afternoon lab packets for hands-on practice and review.
          </p>
        </div>
      </section>

      <section className="agenda">
        <div className="agenda__weeks">
          <div className={`week-block ${sessionsOpen ? 'week-block--open' : ''}`}>
            <button
              className="week-block__header"
              onClick={() => setSessionsOpen((o) => !o)}
              aria-expanded={sessionsOpen}
            >
              <div className="week-block__label">Sessions</div>
              <div className="week-block__info">
                <h3 className="week-block__title">Engineering Sessions</h3>
                {!sessionsOpen && (
                  <p className="week-block__preview">
                    11 expert-led sessions with recordings, presentations, and practice labs...
                  </p>
                )}
              </div>
              <span className="week-block__chevron">{sessionsOpen ? '▾' : '▸'}</span>
            </button>

            {sessionsOpen && (
              <div className="week-block__content">
                <div className="week-block__sessions">
                  {engSessions.map((session) => (
                    <SessionItem
                      key={session.id}
                      title={session.title}
                      description={session.description}
                      resources={session.resources}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <AgendaBuilder />
    </div>
  );
}

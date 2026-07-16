import { useState } from 'react';
import { nonEngAgenda, type Week } from '../data/nonEngAgenda';
import { engSessions } from '../data/engAgenda';
import { WeekBlock } from '../components/WeekBlock';
import { SessionItem } from '../components/SessionItem';
import { AgendaBuilder } from '../components/AgendaBuilder';

const weekById = (id: string): Week | undefined => nonEngAgenda.find((w) => w.id === id);

const week1: Week = {
  id: 'eng-week-1',
  label: 'Week 1',
  title: 'Foundations & First Labs',
  description:
    'The core immersion week. Use the Agenda Builder to sequence the engineering sessions into a Monday–Friday plan—morning sessions, a daily recap, matching afternoon practice labs, and an end-of-day practice shareout. Kickoff opens Monday and the Gemba Walk closes Friday.',
};

export function Engineers() {
  const week0 = weekById('week-0');
  const week2 = weekById('week-2');
  const week3 = weekById('week-3');
  const [libraryOpen, setLibraryOpen] = useState(false);

  return (
    <div className="engineers-page">
      <section className="page-intro">
        <h2 className="page-intro__title">Camp AIR for Engineers</h2>
        <div className="page-intro__body">
          <p>
            The engineering track follows the same 4-week structure as the non-engineering
            experience. Week 1 is delivered as a collection of self-serve sessions led by subject
            matter experts—use the Agenda Builder to sequence them into a weeklong plan with
            recordings, presentations, and afternoon practice labs.
          </p>
        </div>
      </section>

      <section className="agenda">
        <h3 className="agenda__title">4-Week Agenda</h3>
        <div className="agenda__weeks">
          {week0 && <WeekBlock week={week0} defaultOpen={true} />}
          <WeekBlock week={week1} defaultOpen={true}>
            <AgendaBuilder />
          </WeekBlock>
          {week2 && <WeekBlock week={week2} defaultOpen={true} />}
          {week3 && <WeekBlock week={week3} defaultOpen={true} />}
        </div>
      </section>

      <section className="session-library">
        <div className="session-library__callout">
          <span className="session-library__badge">✦ Optional Add-On</span>
          <h2 className="session-library__title">Curriculum Library</h2>
          <p className="session-library__prompt">
            This section is supplemental—it's not part of the core 4-week experience above. Want to
            review any of the session materials on their own? Expand the window below to freely
            explore each recording, deck, or practice lab.
          </p>
        </div>
        <div className="agenda__weeks">
          <div className={`week-block ${libraryOpen ? 'week-block--open' : ''}`}>
            <button
              className="week-block__header"
              onClick={() => setLibraryOpen((o) => !o)}
              aria-expanded={libraryOpen}
            >
              <div className="week-block__label">Library</div>
              <div className="week-block__info">
                <h3 className="week-block__title">Engineering Session Materials</h3>
                {!libraryOpen && (
                  <p className="week-block__preview">
                    11 expert-led sessions with recordings, presentations, and practice labs...
                  </p>
                )}
              </div>
              <span className="week-block__chevron">{libraryOpen ? '▾' : '▸'}</span>
            </button>

            {libraryOpen && (
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
    </div>
  );
}

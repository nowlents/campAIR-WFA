import { engSessions } from '../data/engAgenda';
import { SessionItem } from '../components/SessionItem';

export function Engineers() {
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
        <h3 className="agenda__title">Engineering Sessions</h3>
        <div className="agenda__sessions">
          {engSessions.map((session) => (
            <SessionItem
              key={session.id}
              title={session.title}
              description={session.description}
              resources={session.resources}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

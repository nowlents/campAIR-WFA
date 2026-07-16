import { nonEngAgenda, type Week } from '../data/nonEngAgenda';
import { WeekBlock } from '../components/WeekBlock';
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
    </div>
  );
}

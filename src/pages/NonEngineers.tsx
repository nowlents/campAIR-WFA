import { nonEngAgenda } from '../data/nonEngAgenda';
import { WeekBlock } from '../components/WeekBlock';

export function NonEngineers() {
  return (
    <div className="non-engineers-page">
      <section className="page-intro">
        <h2 className="page-intro__title">Camp AIR for Non-Engineers</h2>
        <p className="page-intro__description">
          To support non-engineering audiences, Camp AIR has developed a modularized "in-a-box" approach 
          with a fully-built out agenda including presentations, facilitator guides, afternoon practice labs, 
          and more—so any team or organization across Microsoft can organize and execute their own Camp AIR 
          with confidence and consistency.
        </p>
      </section>

      <section className="agenda">
        <h3 className="agenda__title">4-Week Agenda</h3>
        <div className="agenda__weeks">
          {nonEngAgenda.map((week, i) => (
            <WeekBlock key={week.id} week={week} defaultOpen={i === 0} />
          ))}
        </div>
      </section>
    </div>
  );
}

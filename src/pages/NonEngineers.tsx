import { nonEngAgenda } from '../data/nonEngAgenda';
import { WeekBlock } from '../components/WeekBlock';
import { SubmissionCTA } from '../components/SubmissionCTA';

export function NonEngineers() {
  return (
    <div className="non-engineers-page">
      <section className="page-intro">
        <h2 className="page-intro__title">Non-Engineering Track</h2>

        <div className="fluency-baseline" style={{ marginTop: 0, marginBottom: '24px' }}>
          <h3 className="fluency-baseline__title">Baseline AI Fluency</h3>
          <p className="fluency-baseline__subtitle">
            Camp AIR establishes a minimum proficiency bar. After completing the program, every participant meets this baseline:
          </p>
          <div className="fluency-baseline__levels">
            <div className="fluency-baseline__level">
              <div className="fluency-baseline__level-header">
                <span className="fluency-baseline__level-badge fluency-baseline__level-badge--use">USE</span>
                <span className="fluency-baseline__level-label">Foundational</span>
              </div>
              <ul className="fluency-baseline__skills">
                <li>Can prompt AI tools effectively for everyday tasks</li>
                <li>Evaluates and iterates on AI output quality</li>
                <li>Identifies which tasks benefit from AI assistance</li>
              </ul>
            </div>
            <div className="fluency-baseline__level">
              <div className="fluency-baseline__level-header">
                <span className="fluency-baseline__level-badge fluency-baseline__level-badge--delegate">DELEGATE</span>
                <span className="fluency-baseline__level-label">Operational</span>
              </div>
              <ul className="fluency-baseline__skills">
                <li>Configures AI to handle recurring tasks autonomously</li>
                <li>Sets up workflows that trigger without manual intervention</li>
                <li>Monitors and adjusts delegated AI processes</li>
              </ul>
            </div>
            <div className="fluency-baseline__level">
              <div className="fluency-baseline__level-header">
                <span className="fluency-baseline__level-badge fluency-baseline__level-badge--build">BUILD</span>
                <span className="fluency-baseline__level-label">Creative</span>
              </div>
              <ul className="fluency-baseline__skills">
                <li>Creates custom AI agents or automations for team needs</li>
                <li>Connects AI capabilities across multiple tools/platforms</li>
                <li>Prototypes solutions and iterates based on feedback</li>
              </ul>
            </div>
            <div className="fluency-baseline__level">
              <div className="fluency-baseline__level-header">
                <span className="fluency-baseline__level-badge fluency-baseline__level-badge--redesign">REDESIGN</span>
                <span className="fluency-baseline__level-label">Strategic</span>
              </div>
              <ul className="fluency-baseline__skills">
                <li>Reimagines team processes from an AI-first perspective</li>
                <li>Measures and communicates AI-driven impact to stakeholders</li>
                <li>Champions behavioral change and new ways of working</li>
              </ul>
            </div>
          </div>
        </div>

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
          {nonEngAgenda.map((week) => (
            <WeekBlock key={week.id} week={week} defaultOpen={true} />
          ))}
        </div>
      </section>

      <SubmissionCTA />
    </div>
  );
}

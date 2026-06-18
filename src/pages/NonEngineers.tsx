import { nonEngAgenda } from '../data/nonEngAgenda';
import { WeekBlock } from '../components/WeekBlock';

interface NonEngExample {
  id: string;
  title: string;
  description: string;
  videoUrl: string;
  thumbnail?: string;
}

const nonEngExamples: NonEngExample[] = [
  {
    id: 'ne-example-1',
    title: 'GitHub Copilot App',
    description: 'James Clancey presents on the GitHub Copilot App.',
    videoUrl: 'https://microsoft.sharepoint.com/:v:/t/WorkforceAccelerationWFATeam/cQr6RpKlpRdcT4fQ2P1Qa5CcEgUCdxGCO0g2DgPU9Fms3kCl6w',
    thumbnail: `${import.meta.env.BASE_URL}images/thumb-ghcp-app.png`,
  },
  {
    id: 'ne-example-2',
    title: 'Microsoft Scout (formerly Clawpilot)',
    description: 'Jakob Werner presents on Microsoft Scout.',
    videoUrl: 'https://microsoft.sharepoint.com/:v:/t/WorkforceAccelerationWFATeam/cQryGQGSN4OuS7t12NxqoFrGEgUCLgPFY90Y7NCLroCfI71MVQ',
    thumbnail: `${import.meta.env.BASE_URL}images/thumb-scout.png`,
  },
  {
    id: 'ne-example-3',
    title: 'Vibe Coding',
    description: 'Jen Weigel presents on Vibe Coding.',
    videoUrl: 'https://microsoft.sharepoint.com/:v:/t/WorkforceAccelerationWFATeam/cQpdjuzTnc2eTJYsSU-98nmcEgUC-gsMkNYMrjrt8vFcL6C0gw',
    thumbnail: `${import.meta.env.BASE_URL}images/thumb-vibe-coding.png`,
  },
];

export function NonEngineers() {
  return (
    <div className="non-engineers-page">
      <section className="page-intro">
        <h2 className="page-intro__title">Camp AIR for Non-Engineers</h2>

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
          {nonEngAgenda.map((week, i) => (
            <WeekBlock key={week.id} week={week} defaultOpen={i === 0} />
          ))}
        </div>
      </section>

      <section className="alt-options-section">
        <h3 className="alt-options-section__title">Looking for Something a Little Different?</h3>
        <p className="alt-options-section__description">
          We know one size doesn't fit all—even within non-engineering audiences. If your team is looking for something slightly more technical, more industry-specific, or tailored to unique workflows, we're can help. Reach out to Workforce Acceleration for a consultation to explore how we can customize elements of the Camp AIR experience to better fit your team's needs.
        </p>
        <a href="https://forms.microsoft.com/r/VJimsxSzvQ" className="cta-block__button" target="_blank" rel="noopener noreferrer">
          Contact Workforce Acceleration →
        </a>
        <div className="examples-section__grid" style={{ marginTop: '24px' }}>
          <h4 className="examples-section__subtitle">Alternative Presentation Samples</h4>
          {nonEngExamples.map((example) => (
            <div key={example.id} className="example-card">
              <div className="example-card__video">
                {example.thumbnail && example.videoUrl ? (
                  <a
                    href={example.videoUrl}
                    className="example-card__thumbnail-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={example.thumbnail} alt={example.title} className="example-card__thumbnail" />
                    <div className="example-card__play-overlay">
                      <span className="example-card__play-btn">▶</span>
                    </div>
                  </a>
                ) : example.videoUrl && !example.videoUrl.startsWith('http') ? (
                  <video controls preload="metadata" className="example-card__player">
                    <source src={example.videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : example.videoUrl ? (
                  <a
                    href={example.videoUrl}
                    className="example-card__sharepoint-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="example-card__play-icon">▶</span>
                    <span className="example-card__play-label">Watch on SharePoint</span>
                  </a>
                ) : (
                  <div className="example-card__placeholder">
                    <span className="example-card__placeholder-icon">🎬</span>
                    <span className="example-card__placeholder-text">Recording coming soon</span>
                  </div>
                )}
              </div>
              <div className="example-card__info">
                <h4 className="example-card__title">{example.title}</h4>
                <p className="example-card__description">{example.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

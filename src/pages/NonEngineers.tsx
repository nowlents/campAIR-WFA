import { nonEngAgenda } from '../data/nonEngAgenda';
import { WeekBlock } from '../components/WeekBlock';

interface NonEngExample {
  id: string;
  title: string;
  description: string;
  videoUrl: string;
}

const nonEngExamples: NonEngExample[] = [
  {
    id: 'ne-example-1',
    title: 'GitHub Copilot App',
    description: 'James Clancey presents on the GitHub Copilot App.',
    videoUrl: 'https://microsoft.sharepoint.com/:v:/t/WorkforceAccelerationWFATeam/cQr6RpKlpRdcT4fQ2P1Qa5CcEgUCdxGCO0g2DgPU9Fms3kCl6w',
  },
  {
    id: 'ne-example-2',
    title: 'Microsoft Scout (formerly Clawpilot)',
    description: 'Jakob Werner presents on Microsoft Scout.',
    videoUrl: 'https://microsoft.sharepoint.com/:v:/t/WorkforceAccelerationWFATeam/cQryGQGSN4OuS7t12NxqoFrGEgUCLgPFY90Y7NCLroCfI71MVQ',
  },
  {
    id: 'ne-example-3',
    title: 'Vibe Coding',
    description: 'Jen Weigel presents on Vibe Coding.',
    videoUrl: 'https://microsoft.sharepoint.com/:v:/t/WorkforceAccelerationWFATeam/cQpdjuzTnc2eTJYsSU-98nmcEgUC-gsMkNYMrjrt8vFcL6C0gw',
  },
];

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

      <section className="alt-options-section">
        <h3 className="alt-options-section__title">Looking for Something a Little Different?</h3>
        <p className="alt-options-section__description">
          We know one size doesn't fit all—even within non-engineering audiences. If your team is looking for something slightly more technical, more industry-specific, or tailored to unique workflows, we're can help. Reach out to Workforce Acceleration for a consultation to explore how we can customize elements of the Camp AIR experience to better fit your team's needs.
        </p>
        <a href="mailto:wfa@microsoft.com" className="cta-block__button">
          Contact Workforce Acceleration →
        </a>
        <div className="examples-section__grid" style={{ marginTop: '24px' }}>
          <h4 className="examples-section__subtitle">Alternative Presentation Samples</h4>
          {nonEngExamples.map((example) => (
            <div key={example.id} className="example-card">
              <div className="example-card__video">
                {example.videoUrl && !example.videoUrl.startsWith('http') ? (
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

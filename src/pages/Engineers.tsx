import { engAgenda } from '../data/engAgenda';
import { WeekBlock } from '../components/WeekBlock';

interface EngExample {
  id: string;
  title: string;
  description: string;
  videoUrl: string;
  thumbnail?: string;
}

const engExamples: EngExample[] = [
  {
    id: 'example-1',
    title: 'GitHub CLI',
    description: 'Scott Hanselman presents on GitHub CLI.',
    videoUrl: 'https://microsoft.sharepoint.com/:v:/t/WorkforceAccelerationWFATeam/cQqQdFXfrWhtS4GsXRmQGAW0EgUCeFISrsXwsuzQN9hTKVxkmA',
    thumbnail: '/images/thumb-github-cli.png',
  },
  {
    id: 'example-2',
    title: 'MCP Servers',
    description: 'Nicholas Hauenstein presents on MCP Servers.',
    videoUrl: 'https://microsoft.sharepoint.com/:v:/t/WorkforceAccelerationWFATeam/cQoUD9U8g457TIZ6gKjrPPSWEgUCSnp9a_z1Iq8jVtBeMlVE4Q',
    thumbnail: '/images/thumb-mcp-servers.png',
  },
  {
    id: 'example-3',
    title: 'Agency',
    description: 'Preston McDonald & Kyle Rader present on Agency.',
    videoUrl: 'https://microsoft.sharepoint.com/:v:/t/WorkforceAccelerationWFATeam/cQrY54Q9S9w4Q6q6-k4JHzm6EgUCJer7bXDR5IJ10B8VE0KVWg',
    thumbnail: '/images/thumb-agency.png',
  },
];

export function Engineers() {
  return (
    <div className="engineers-page">
      <section className="page-intro">
        <h2 className="page-intro__title">Camp AIR for Engineers</h2>
        <div className="page-intro__body">
          <p>
            Engineering moves at a pace unlike any other discipline. Tools evolve weekly, platforms shift quarterly, and the capabilities available to your team today may look fundamentally different in a matter of months. In this environment, staying current requires more than documentation—it requires direct connection to subject matter experts across the company who are building, shipping, and iterating at the frontier.
          </p>
          <p>
            That's what makes the engineering track distinct. While the non-engineering track offers a fully modularized "in-a-box" experience that any team can pick up and run, the engineering track is intentionally tailored. The technology landscape your team operates in—the languages, frameworks, toolchains, and AI capabilities most relevant to your work—demands a customized approach.
          </p>
          <p>
            Certain elements remain consistent across both tracks: <strong>Week 0</strong> (Manager Preparation), the <strong>Week 1 Icebreaker & AI-First Mindset</strong> session, <strong>Week 2</strong> (Applied Practice), and <strong>Week 3</strong> (Showcase & Sustaining Momentum). These provide the shared foundation that makes Camp AIR work as a cohort experience.
          </p>
          <p>
            However, the <strong>Week 1 technical enablement</strong>—the sessions, labs, and hands-on work beyond the Icebreaker—requires custom tailoring specifically for your team. This ensures your engineers are learning from the right SMEs, working with the right tools, and building solutions that map directly to your real-world engineering challenges.
          </p>
        </div>
        <div className="cta-block">
          <h3 className="cta-block__title">Ready to build your engineering track?</h3>
          <p className="cta-block__description">
            Contact Workforce Acceleration for a consultation. We'll work with you to identify the right subject matter experts, surface the latest platform capabilities relevant to your team, and prepare a custom-tailored Week 1 specifically for your engineering audience.
          </p>
          <a href="mailto:wfa@microsoft.com" className="cta-block__button">
            Contact Workforce Acceleration →
          </a>
        </div>
      </section>

      <section className="agenda">
        <h3 className="agenda__title">4-Week Agenda</h3>
        <div className="agenda__weeks">
          {engAgenda.map((week, i) => (
            <WeekBlock key={week.id} week={week} defaultOpen={i === 0} />
          ))}
        </div>
      </section>

      <section className="examples-section">
        <h3 className="examples-section__title">Past Engineering Sessions</h3>
        <p className="examples-section__description">
          See how prior teams have experienced Camp AIR's tailored engineering track. These recordings showcase real sessions delivered to engineering audiences—each one custom-built around a team's unique stack and challenges.
        </p>
        <div className="examples-section__grid">
          {engExamples.map((example) => (
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

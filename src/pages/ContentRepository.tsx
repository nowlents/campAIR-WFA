import { ContentReviewDashboard } from '../components/ContentReviewDashboard';

const SUBMISSION_FOLDER_URL = 'https://microsoft.sharepoint.com/:f:/r/teams/WorkforceAccelerationWFATeam/Shared%20Documents/Forms/AllItems.aspx?id=%2Fteams%2FWorkforceAccelerationWFATeam%2FShared%20Documents%2FCamp%20AIR%20Source%20of%20Truth%2FUser%20Presentation%20Submissions&p=true&share=cgpGJpOYJ8qwR74ZSNcBM3PYEgUCdDjGSsS2w56t6enrSoRP1g';

export function ContentRepository() {
  return (
    <div className="repository-page">
      <section className="page-intro">
        <h2 className="page-intro__title">Content Repository</h2>
        <div className="page-intro__body">
          <p>
            The Camp AIR Content Repository is the single source of truth for all program materials. It provides a centralized, well-governed location where the latest content is maintained, discoverable, and ready for facilitators to use with confidence. Every artifact—from facilitator guides to session decks—lives here with clear ownership, version history, and quality assurance.
          </p>
        </div>
      </section>

      <section className="repo-section">
        <h3 className="repo-section__title">Content Health Dashboard</h3>
        <p className="repo-section__description">
          Automated weekly scans assess all Camp AIR session materials against publicly available information about the tools and platforms covered. Results appear here every Monday.
        </p>
        <ContentReviewDashboard />
      </section>

      <section className="repo-section">
        <div className="submission-cta">
          <div className="submission-cta__content">
            <h3 className="submission-cta__title">Have a presentation to contribute?</h3>
            <p className="submission-cta__description">
              If you've developed a session, lab, or presentation that could benefit the Camp AIR community, we'd love to review it. Upload your materials to our submission folder and the Workforce Acceleration team will evaluate them for inclusion in the program.
            </p>
            <div className="submission-cta__details">
              <div className="submission-cta__detail">
                <strong>What to submit:</strong> Presentations (PPT/PPTX), facilitator guides (DOCX), lab materials, or video recordings
              </div>
              <div className="submission-cta__detail">
                <strong>What happens next:</strong> The WFA team reviews submissions for quality, relevance, and alignment with Camp AIR standards. Approved materials are incorporated into the program.
              </div>
            </div>
            <a
              href={SUBMISSION_FOLDER_URL}
              className="submission-cta__button"
              target="_blank"
              rel="noopener noreferrer"
            >
              📤 Upload Materials for Review →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

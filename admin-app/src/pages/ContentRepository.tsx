import { ContentReviewDashboard } from '../components/ContentReviewDashboard';

export function ContentRepository() {
  return (
    <div className="repository-page">
      <section className="page-intro">
        <h2 className="page-intro__title">Admin Content Repository</h2>
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
    </div>
  );
}

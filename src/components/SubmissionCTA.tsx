export function SubmissionCTA() {
  return (
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
            href="https://forms.microsoft.com/r/cmPU5hzcYD"
            className="submission-cta__button"
            target="_blank"
            rel="noopener noreferrer"
          >
            📤 Upload Materials for Review →
          </a>
        </div>
      </div>
    </section>
  );
}

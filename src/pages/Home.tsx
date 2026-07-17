export function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero__banner">
          <img src={`${import.meta.env.BASE_URL}images/hero-meeting.jpg`} alt="Team collaborating in a modern meeting space" className="hero__banner-img" />
        </div>
        <h2 className="hero__title">Camp AIR</h2>

        <div className="hero__body">
          <p className="hero__lead">
            Camp AIR is not a training program—it is a structured immersion designed to transform how teams work in an AI-first world.
          </p>
          <p>
            Participants move beyond learning about AI to actively building with it. Through a cohort-based, hands-on experience, teams redesign real workflows, experiment in real time, and deliver tangible outcomes—culminating in a live showcase of AI-powered solutions they've built themselves.
          </p>
          <p>
            At its core, Camp AIR is grounded in a simple premise: <strong>the challenge of AI is not technology—it is behavioral change.</strong> Success comes from shifting habits, not just adopting tools. The program creates the conditions for that shift by giving teams space to step out of business-as-usual and practice a new way of working—what we call "slowing down to speed up."
          </p>

          <h3>The experience is intentionally immersive and applied:</h3>
          <ul className="hero__principles">
            <li><strong>Learn by doing, not consuming</strong> — every concept is immediately practiced through labs and team-based work</li>
            <li><strong>Build real solutions</strong> — teams tackle their own workflow challenges, measure impact, and iterate toward meaningful outcomes</li>
            <li><strong>Work as a cohort</strong> — participants collaborate, challenge, and learn alongside peers, creating shared momentum and accountability</li>
          </ul>

          <p>
            Camp AIR also introduces a new operating model for work. AI-first is not about using AI more—it is about redesigning how work gets done. Participants shift from executing tasks to orchestrating intelligent systems, from planning extensively to experimenting rapidly, and from working in silos to operating across hybrid human–agent teams.
          </p>
          <p>
            This shift is urgent. AI is evolving faster than teams can naturally build new habits, creating a widening gap between organizations that adapt and those that do not. Camp AIR exists to close that gap—equipping teams with the mindset, skills, and muscle memory required to operate effectively in this new reality.
          </p>
          <p>
            Ultimately, Camp AIR is designed to <strong>make AI a default instinct.</strong> By the end of the experience, participants are not just capable of using AI—they are thinking with it, building with it, and continuously evolving how their work gets done.
          </p>
        </div>
      </section>

      <section className="tracks">
        <div className="tracks__head">
          <h3 className="tracks__title">Two Tracks, One Experience</h3>
          <p className="tracks__intro">
            Camp AIR meets every audience where they are. Both tracks share the same three-week
            arc and outcomes—but they're delivered in the way that fits each audience best.
          </p>
        </div>
        <div className="tracks__grid">
          <article className="track-card track-card--eng">
            <span className="track-card__tag">Engineering Track</span>
            <h4 className="track-card__title">Async &amp; self-directed</h4>
            <p className="track-card__desc">
              Delivered asynchronously through recordings straight from subject matter experts. Use
              the Agenda Builder to tailor and sequence sessions into a weeklong plan that fits your
              team's needs and pace.
            </p>
            <ul className="track-card__points">
              <li>SME-led session recordings</li>
              <li>Flexible, self-paced delivery</li>
              <li>Build-your-own agenda with matched practice labs</li>
            </ul>
          </article>
          <article className="track-card track-card--noneng">
            <span className="track-card__tag">Non-Engineering Track</span>
            <h4 className="track-card__title">Live, standard curriculum</h4>
            <p className="track-card__desc">
              A set, standardized curriculum designed to be delivered live or virtually. It gives
              managers, leaders, and coaches everything they need to facilitate the experience
              effectively and consistently.
            </p>
            <ul className="track-card__points">
              <li>Fixed, repeatable curriculum</li>
              <li>Live or virtual facilitation</li>
              <li>Full facilitator lesson plans and materials</li>
            </ul>
          </article>
        </div>
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

    </div>
  );
}

const spotlightVideos = [
  {
    id: 'exec-video',
    title: 'Executive Overview',
    description: 'A leadership-level look at the vision behind Camp AIR and the impact it drives.',
    thumbnail: `${import.meta.env.BASE_URL}images/video-exec.png`,
    url: 'https://microsoft.sharepoint.com/:v:/r/sites/CampAIRguide/_layouts/15/stream.aspx?id=%2Fsites%2FCampAIRguide%2FShared%20Documents%2FContent%2FVideos%2FCamp%20AIR%20-%20Exec%20Video.mp4&share=cQrB_WVXWvETQqFqNfs6yZQkEgUCzZaBkWhBahe8ew72pGkaCw&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTaGFyZVBvaW50IiwicmVmZXJyYWxNb2RlIjoibWlzIiwicmVmZXJyYWxWaWV3IjoidmlkZW9hY3Rpb25zLXNoYXJlIiwicmVmZXJyYWxQbGF5YmFja1Nlc3Npb25JZCI6IjY4ZmFjMTFkLTY5NmUtNGYwYy05NmM3LWJkMzRmNDA0YjI4NSJ9fQ%3D%3D',
  },
  {
    id: 'testimonial-video',
    title: 'Participant Testimonial',
    description: 'Hear directly from participants about what the Camp AIR experience meant to them.',
    thumbnail: `${import.meta.env.BASE_URL}images/video-testimonial.png`,
    url: 'https://microsoft.sharepoint.com/:v:/r/sites/CampAIRguide/_layouts/15/stream.aspx?id=%2Fsites%2FCampAIRguide%2FShared%20Documents%2FContent%2FVideos%2FCamp%20AIR%20-%20Testimonial.mp4&share=cQqsETLocikZSLh6OCnTr2vEEgUCbIh9nnPkhVrT9WEkbvi2CQ&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTaGFyZVBvaW50IiwicmVmZXJyYWxNb2RlIjoibWlzIiwicmVmZXJyYWxWaWV3IjoidmlkZW9hY3Rpb25zLXNoYXJlIiwicmVmZXJyYWxQbGF5YmFja1Nlc3Npb25JZCI6ImY4YjViZGMwLTgwNGEtNDVkNy1hZDgyLWFjZGVlNTE2ODZmYSJ9fQ%3D%3D',
  },
  {
    id: 'jay-talk-video',
    title: "Jay's Camp AIR Talk",
    description: 'An in-depth talk on the Camp AIR journey and the thinking behind the experience.',
    thumbnail: `${import.meta.env.BASE_URL}images/video-jay-talk.png`,
    url: 'https://microsoft.sharepoint.com/:v:/r/teams/WorkforceAccelerationWFATeam/_layouts/15/stream.aspx?id=%2Fteams%2FWorkforceAccelerationWFATeam%2FShared%20Documents%2FCamp%20AIR%20Source%20of%20Truth%2FCoreAI%20Resources%2FJay%20Testimonial%2FJayTestimonial%2Emp4&share=cQolmiwhYZKETom9Y94%5F4FooEgUC1osV%5FSBOwnSlL39HDa3jkQ',
  },
];

export function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero__banner">
          <img src={`${import.meta.env.BASE_URL}images/hero-meeting.jpg`} alt="Team collaborating in a modern meeting space" className="hero__banner-img" />
        </div>
        <h2 className="hero__title">Run your own Camp AIR</h2>

        <div className="hero__body">
          <p className="hero__lead">
            Everything a leader needs to launch, deliver, and scale an AI-upskilling cohort — no central team required.
          </p>
          <p>
            Camp AIR is a structured, cohort-based immersion that transforms how teams work in an AI-first world. Its core premise is simple: <strong>the challenge of AI is not technology—it is behavioral change.</strong> This site gives you everything you need to run one yourself.
          </p>
        </div>
      </section>

      <section className="why-run">
        <h3 className="why-run__title">Why run Camp AIR</h3>
        <div className="why-run__grid">
          <div className="why-run__card">
            <span className="why-run__icon">🚀</span>
            <h4 className="why-run__name">Real solutions in three weeks</h4>
            <p className="why-run__desc">
              Teams don't just learn about AI—they ship real, AI-powered solutions to their own work
              by the end of the experience.
            </p>
          </div>
          <div className="why-run__card">
            <span className="why-run__icon">🌱</span>
            <h4 className="why-run__name">Lasting internal capability</h4>
            <p className="why-run__desc">
              Coaches and pioneers grow from within your teams, building AI fluency that stays long
              after the camp ends.
            </p>
          </div>
          <div className="why-run__card">
            <span className="why-run__icon">🔁</span>
            <h4 className="why-run__name">Repeatable and self-serve</h4>
            <p className="why-run__desc">
              One clear path, one reusable kit. Follow it top to bottom and run a high-quality camp
              without a central team.
            </p>
          </div>
          <div className="why-run__card">
            <span className="why-run__icon">📈</span>
            <h4 className="why-run__name">Scales with you</h4>
            <p className="why-run__desc">
              The same kit powers a single team or a whole org—start small, learn, then grow to as
              many cohorts as you need.
            </p>
          </div>
        </div>
      </section>

      <section className="formula">
        <div className="formula__head">
          <h3 className="formula__title">The Camp AIR Formula</h3>
          <p className="formula__equation-line">
            5 Ingredients <span className="formula__op-inline">+</span> 7 Principles{' '}
            <span className="formula__op-inline">=</span> Behavioral Shifts (Culture)
          </p>
        </div>

        <div className="formula__columns">
          <div className="formula-col">
            <h4 className="formula-col__head">5 Ingredients — What Teams Practice</h4>
            <ul className="formula-col__list">
              <li className="formula-item">
                <span className="formula-item__icon">🧠</span>
                <div className="formula-item__body">
                  <span className="formula-item__name">Mindset</span>
                  <span className="formula-item__desc">
                    Continuous experimentation. AI is not cheating — it's an advantage.
                  </span>
                </div>
              </li>
              <li className="formula-item">
                <span className="formula-item__icon">🔍</span>
                <div className="formula-item__body">
                  <span className="formula-item__name">Assess Team Workflow</span>
                  <span className="formula-item__desc">
                    Gemba walks + workflow mapping. You can't improve work you can't see.
                  </span>
                </div>
              </li>
              <li className="formula-item">
                <span className="formula-item__icon">🛠️</span>
                <div className="formula-item__body">
                  <span className="formula-item__name">AI Tool Fluency</span>
                  <span className="formula-item__desc">
                    Hands-on real work, not sandboxed demos. Learn how to learn.
                  </span>
                </div>
              </li>
              <li className="formula-item">
                <span className="formula-item__icon">🚀</span>
                <div className="formula-item__body">
                  <span className="formula-item__name">Expanding Skills</span>
                  <span className="formula-item__desc">
                    Cross-skilling and role expansion. PMs build. Designers prototype. Engineers
                    design systems.
                  </span>
                </div>
              </li>
              <li className="formula-item">
                <span className="formula-item__icon">🎉</span>
                <div className="formula-item__body">
                  <span className="formula-item__name">Celebrate &amp; Share</span>
                  <span className="formula-item__desc">
                    Demo days, retros, playbook contributions. Codify what you learn for others.
                  </span>
                </div>
              </li>
            </ul>
          </div>

          <div className="formula__op-col" aria-hidden="true">+</div>

          <div className="formula-col">
            <h4 className="formula-col__head">7 Principles — How It's Delivered</h4>
            <ul className="formula-col__list">
              <li className="formula-item formula-item--num">
                <span className="formula-item__num">1</span>
                <div className="formula-item__body">
                  <span className="formula-item__name">Protect Immersion Time</span>
                  <span className="formula-item__desc">
                    3 weeks dedicated, away from BAU. You can't transform in a lunch-and-learn.
                  </span>
                </div>
              </li>
              <li className="formula-item formula-item--num">
                <span className="formula-item__num">2</span>
                <div className="formula-item__body">
                  <span className="formula-item__name">Learn by Doing</span>
                  <span className="formula-item__desc">
                    Hands-on building with real work, not passive consumption.
                  </span>
                </div>
              </li>
              <li className="formula-item formula-item--num">
                <span className="formula-item__num">3</span>
                <div className="formula-item__body">
                  <span className="formula-item__name">Change Comes from Within</span>
                  <span className="formula-item__desc">
                    Coaches + pioneers from the team. Zero FTEs, 100% volunteer-run.
                  </span>
                </div>
              </li>
              <li className="formula-item formula-item--num">
                <span className="formula-item__num">4</span>
                <div className="formula-item__body">
                  <span className="formula-item__name">Whole Teams Together</span>
                  <span className="formula-item__desc">
                    PMs, SWEs, designers, data scientists transform as one — not in silos.
                  </span>
                </div>
              </li>
              <li className="formula-item formula-item--num">
                <span className="formula-item__num">5</span>
                <div className="formula-item__body">
                  <span className="formula-item__name">Leadership Visible Throughout</span>
                  <span className="formula-item__desc">
                    Leaders don't sponsor and disappear. Daily stand-ups, office hours, coaching.
                  </span>
                </div>
              </li>
              <li className="formula-item formula-item--num">
                <span className="formula-item__num">6</span>
                <div className="formula-item__body">
                  <span className="formula-item__name">One Size Does Not Fit All</span>
                  <span className="formula-item__desc">
                    Golden Arches stay, local menu adapts. Core brand + local customization.
                  </span>
                </div>
              </li>
              <li className="formula-item formula-item--num">
                <span className="formula-item__num">7</span>
                <div className="formula-item__body">
                  <span className="formula-item__name">Redesigning Work Using AI</span>
                  <span className="formula-item__desc">
                    The goal isn't tool adoption — it's workflow transformation.
                  </span>
                </div>
              </li>
            </ul>
          </div>

          <div className="formula__op-col" aria-hidden="true">=</div>

          <div className="formula-col formula-col--result">
            <h4 className="formula-col__head">Behavioral Shifts (Culture)</h4>
            <ul className="formula-col__list">
              <li className="formula-item">
                <span className="formula-item__icon">🎯</span>
                <div className="formula-item__body">
                  <span className="formula-item__name">AI-First Default</span>
                  <span className="formula-item__desc">
                    Before starting any task, the team asks "how can AI help?"
                  </span>
                </div>
              </li>
              <li className="formula-item">
                <span className="formula-item__icon">🔀</span>
                <div className="formula-item__body">
                  <span className="formula-item__name">Blurred Role Boundaries</span>
                  <span className="formula-item__desc">
                    PMs prototype. Engineers design systems. Designers write prompts.
                  </span>
                </div>
              </li>
              <li className="formula-item">
                <span className="formula-item__icon">🗺️</span>
                <div className="formula-item__body">
                  <span className="formula-item__name">Workflows Mapped &amp; Questioned</span>
                  <span className="formula-item__desc">
                    Processes treated as things to redesign, not follow.
                  </span>
                </div>
              </li>
              <li className="formula-item">
                <span className="formula-item__icon">🏆</span>
                <div className="formula-item__body">
                  <span className="formula-item__name">Coaches &amp; Pioneers from Within</span>
                  <span className="formula-item__desc">
                    Zero FTEs. Volunteer force multipliers driving change.
                  </span>
                </div>
              </li>
              <li className="formula-item">
                <span className="formula-item__icon">📣</span>
                <div className="formula-item__body">
                  <span className="formula-item__name">Shared Learning Culture</span>
                  <span className="formula-item__desc">
                    Demos, retros, office hours. Learning is a team activity.
                  </span>
                </div>
              </li>
              <li className="formula-item">
                <span className="formula-item__icon">⚖️</span>
                <div className="formula-item__body">
                  <span className="formula-item__name">Human vs. AI Judgment</span>
                  <span className="formula-item__desc">
                    Teams decide what stays human-led vs. AI-assisted vs. fully delegated.
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      <section className="combined-journey">
        <div className="combined-journey__head">
          <h3 className="combined-journey__title">The Camp AIR Journey</h3>
        </div>

        <div className="combined-journey__rows">
          <div className="cj-row">
            <span className="cj-row__label">What participants experience</span>
            <div className="cj-row__track">
              <span className="cj-node cj-node--kickoff">Manager Alignment</span>
              <span className="cj-arrow" aria-hidden="true">→</span>
              <span className="cj-node">Week 1 · Immersion</span>
              <span className="cj-arrow" aria-hidden="true">→</span>
              <span className="cj-node">Week 2 · Hack Week</span>
              <span className="cj-arrow" aria-hidden="true">→</span>
              <span className="cj-node">Week 3 · Demo Showcase</span>
            </div>
          </div>

          <div className="cj-row cj-row--organizer">
            <span className="cj-row__label">What you run (organizer)</span>
            <div className="cj-row__track">
              <span className="cj-node">Plan</span>
              <span className="cj-arrow" aria-hidden="true">→</span>
              <span className="cj-node">Deliver</span>
              <span className="cj-arrow" aria-hidden="true">→</span>
              <span className="cj-node">Showcase</span>
              <span className="cj-arrow" aria-hidden="true">→</span>
              <span className="cj-node">Measure &amp; Iterate</span>
              <span className="cj-arrow" aria-hidden="true">→</span>
              <span className="cj-node">Communicate &amp; Scale</span>
            </div>
          </div>
        </div>
      </section>

      <section className="tracks">
        <div className="tracks__head">
          <h3 className="tracks__title">Immersion Week: Two Tracks, One Experience</h3>
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

      <section className="examples-section">
        <h3 className="examples-section__title">Camp AIR in Action</h3>
        <p className="examples-section__intro">
          Watch a few short videos to see the vision, hear from participants, and go deeper on the
          Camp AIR experience.
        </p>
        <div className="examples-section__grid" style={{ marginTop: '24px' }}>
          {spotlightVideos.map((video) => (
            <div key={video.id} className="example-card">
              <div className="example-card__video">
                <a
                  href={video.url}
                  className="example-card__thumbnail-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={video.thumbnail} alt={video.title} className="example-card__thumbnail" />
                  <div className="example-card__play-overlay">
                    <span className="example-card__play-btn">▶</span>
                  </div>
                </a>
              </div>
              <div className="example-card__info">
                <h4 className="example-card__title">{video.title}</h4>
                <p className="example-card__description">{video.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <p className="overview-nudge">
        Ready to run one? Open <strong>Run Your Own</strong> in the left nav →
      </p>

    </div>
  );
}

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

      <section className="journey">
        <div className="journey__head">
          <h3 className="journey__title">The Journey at a Glance</h3>
          <p className="journey__intro">
            Camp AIR is a focused three-week experience. It opens with a manager alignment
            touchpoint to set expectations and clear the runway, then moves teams from mindset,
            to building, to showcasing what they've made.
          </p>
        </div>

        <div className="journey__timeline">
          <div className="journey-kickoff">
            <span className="journey-kickoff__badge">Before we begin</span>
            <div className="journey-kickoff__body">
              <h4 className="journey-kickoff__title">Manager Alignment</h4>
              <p className="journey-kickoff__desc">
                A short touchpoint with leaders to align on goals, protect the team's time, and
                set the team up to get the most out of the weeks ahead.
              </p>
            </div>
          </div>

          <div className="journey__weeks">
            <article className="journey-week">
              <span className="journey-week__num">Week 1</span>
              <h4 className="journey-week__title">Immersion</h4>
              <p className="journey-week__desc">
                Teams start with the mindset and workflow shifts at the heart of working
                AI-first, spend the week getting hands-on with the latest AI tools, and close by
                learning how to break down their own work and match repeatable tasks to the right
                tools.
              </p>
            </article>
            <article className="journey-week">
              <span className="journey-week__num">Week 2</span>
              <h4 className="journey-week__title">Hack Week</h4>
              <p className="journey-week__desc">
                Teams put it into practice—building real solutions and weaving what they learned
                directly into how they work.
              </p>
            </article>
            <article className="journey-week">
              <span className="journey-week__num">Week 3</span>
              <h4 className="journey-week__title">Demo Showcase</h4>
              <p className="journey-week__desc">
                Each team shares what they built and shows how Immersion Week learnings reshaped
                their day-to-day workflow.
              </p>
            </article>
          </div>
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

    </div>
  );
}

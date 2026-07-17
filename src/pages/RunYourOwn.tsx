import { Link } from 'react-router-dom';

const phases = [
  {
    num: '01',
    name: 'Plan',
    objective: 'Set the foundation: confirm goals, choose who takes part, and get logistics ready.',
    items: [
      'Define the business goal and what success looks like',
      'Secure a sponsor and confirm leadership commitment',
      'Assign a Lead Coach and administrative support',
      'Select teams and confirm cohort composition',
      'Finalize the three-week calendar and communications',
      'Stand up security groups and collaboration spaces',
    ],
  },
  {
    num: '02',
    name: 'Deliver',
    objective: 'Run the full three-week experience—immersion, application, and daily support.',
    items: [
      'Facilitate learning sessions and workshops',
      'Support participants and encourage experimentation',
      'Keep teams moving on real project work',
      'Track engagement and progress throughout',
    ],
  },
  {
    num: '03',
    name: 'Showcase',
    objective: 'Give teams the stage to demonstrate what they built and the impact it created.',
    items: [
      'Host Demo Day for AI-powered solutions',
      'Share impact stories and lessons learned',
      'Highlight cross-team wins',
      'Engage executive sponsors and capture successes',
    ],
  },
  {
    num: '04',
    name: 'Measure & Iterate',
    objective: 'Assess results and feed what you learn into the next camp.',
    items: [
      'Collect participant feedback',
      'Evaluate outcomes and business impact',
      'Identify improvements',
      'Fold lessons learned into future programs',
    ],
  },
];

const roles = [
  {
    name: 'Sponsor',
    profile: 'VP, CVP, or equivalent organizational leader',
    points: [
      'Champion Camp AIR and provide visible executive support',
      'Reinforce why the program matters',
      'Attend Demo Day presentations',
      'Review executive outcomes and readouts',
      'Help drive organizational commitment',
    ],
  },
  {
    name: 'Lead Coach',
    profile: 'Primary owner of the experience (often the manager for a single team)',
    points: [
      'Lead planning and oversee delivery across all phases',
      'Guide participants throughout the camp',
      'Coordinate demos and measurement',
      'Own execution from planning through measurement',
      'Ensure follow-through on outcomes',
    ],
  },
  {
    name: 'Administrative Support',
    profile: 'Recommended for organization-wide deployments',
    points: [
      'Book rooms and schedule meetings',
      'Create calendar invites',
      'Coordinate food (breakfast is recommended)',
      'Set up security groups',
      'Manage general program logistics',
    ],
  },
];

const weeks = [
  {
    label: 'Week 1',
    title: 'Immersive Learning',
    desc: 'Introduce Camp AIR, build core skills, explore practical use cases, and begin project work.',
  },
  {
    label: 'Week 2',
    title: 'Hackathon & Application',
    desc: 'Apply learning to real business challenges through team-based experimentation and iteration.',
  },
  {
    label: 'Week 3',
    title: 'Demo & Showcase',
    desc: 'Present outcomes, share lessons, and demonstrate AI-enabled gains to sponsors and leadership.',
  },
];

const resourceGroups = [
  {
    title: 'Core Camp AIR Assets',
    items: [
      'Camp AIR overview materials',
      'Camp content and agendas',
      'Lead Coach guidance',
      'Delivery models',
      'FAQ resources',
    ],
  },
  {
    title: 'Operational Assets',
    items: [
      'Planning artifacts',
      'Checklists',
      'Measurement materials',
      'Administrative guidance',
      'Security group instructions',
    ],
  },
  {
    title: 'Scaling Assets',
    items: [
      'Scale-from-Within materials',
      'Train-the-trainer content',
      'Internal facilitator resources',
      'Community & collaboration spaces',
    ],
  },
];

export function RunYourOwn() {
  return (
    <div className="ryo-page">
      <section className="page-intro">
        <h2 className="page-intro__title">Run Your Own Camp AIR</h2>
        <div className="page-intro__body">
          <p>
            Everything a leader needs to plan, deliver, measure, and scale their own Camp AIR—an
            organizational AI adoption program that builds practical skills through hands-on work,
            experimentation, and demonstrated outcomes. Think of this as your "Camp AIR in a Box."
          </p>
        </div>

        <div className="ryo-audience">
          <div className="ryo-audience__col">
            <h4 className="ryo-audience__label">Who it's for</h4>
            <ul className="ryo-audience__list">
              <li>VP / CVP organizations</li>
              <li>Chiefs of Staff &amp; Business Managers</li>
              <li>Learning &amp; enablement delegates</li>
              <li>Managers running a camp for a single team</li>
            </ul>
          </div>
          <div className="ryo-audience__col">
            <h4 className="ryo-audience__label">What participants gain</h4>
            <ul className="ryo-audience__list">
              <li>Greater AI fluency through real application</li>
              <li>AI applied to actual work, not theory</li>
              <li>Business value shown through projects &amp; demos</li>
              <li>Momentum for broader AI adoption</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Start Here */}
      <section className="ryo-section">
        <h3 className="ryo-section__title">Start Here</h3>
        <div className="ryo-start">
          <div className="ryo-callout">
            <span className="ryo-callout__badge">First step</span>
            <div className="ryo-callout__body">
              <h4 className="ryo-callout__title">Attend an onboarding session</h4>
              <p className="ryo-callout__desc">
                Before launching, join an onboarding session to choose a delivery model, learn
                implementation best practices, understand required resources, and connect with the
                Camp AIR community. You'll leave with an approach selected and a clear picture of the
                phases, resources, and support ahead.
              </p>
              <span className="ryo-link ryo-link--muted">🗓️ Onboarding signup — link coming soon</span>
            </div>
          </div>

          <div className="ryo-checklist">
            <h4 className="ryo-checklist__title">Before you launch</h4>
            <ul className="ryo-checklist__list">
              <li>Identify a clear business goal for the camp</li>
              <li>Select participating teams</li>
              <li>Confirm leadership sponsorship</li>
              <li>Assign operational support roles</li>
              <li>Schedule the full three-week experience</li>
              <li>Establish logistics &amp; communications plans</li>
              <li>Set up required collaboration resources</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Operating Model */}
      <section className="ryo-section">
        <h3 className="ryo-section__title">The Camp AIR Operating Model</h3>
        <p className="ryo-section__intro">
          Plan → Deliver → Showcase → Measure &amp; Iterate is the operational backbone for every
          Camp AIR, regardless of scale.
        </p>
        <div className="ryo-phases">
          {phases.map((phase) => (
            <article className="ryo-phase" key={phase.num}>
              <span className="ryo-phase__num">{phase.num}</span>
              <h4 className="ryo-phase__name">{phase.name}</h4>
              <p className="ryo-phase__objective">{phase.objective}</p>
              <ul className="ryo-phase__list">
                {phase.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* Roles */}
      <section className="ryo-section">
        <h3 className="ryo-section__title">Roles &amp; Responsibilities</h3>
        <div className="ryo-roles">
          {roles.map((role) => (
            <article className="ryo-role" key={role.name}>
              <h4 className="ryo-role__name">{role.name}</h4>
              <p className="ryo-role__profile">{role.profile}</p>
              <ul className="ryo-role__list">
                {role.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* 3-Week Framework */}
      <section className="ryo-section">
        <h3 className="ryo-section__title">The 3-Week Framework</h3>
        <p className="ryo-section__intro">
          One recommended agenda keeps the experience consistent and easy to run. Alongside the
          three weeks, plan for manager preparation sessions and two Gemba Walk meetings.
        </p>
        <div className="ryo-weeks">
          {weeks.map((week) => (
            <article className="ryo-week" key={week.label}>
              <span className="ryo-week__label">{week.label}</span>
              <h4 className="ryo-week__title">{week.title}</h4>
              <p className="ryo-week__desc">{week.desc}</p>
            </article>
          ))}
        </div>
        <p className="ryo-week__note">
          Want the full week-by-week detail? See the{' '}
          <Link to="/" className="ryo-link">Journey at a Glance</Link> on the Overview, or explore the{' '}
          <Link to="/engineers" className="ryo-link">Engineering</Link> and{' '}
          <Link to="/non-engineers" className="ryo-link">Non-Engineering</Link> tracks.
        </p>
      </section>

      {/* Measure & Improve */}
      <section className="ryo-section">
        <h3 className="ryo-section__title">Measure &amp; Improve Outcomes</h3>
        <div className="ryo-twocol">
          <div className="ryo-panel">
            <h4 className="ryo-panel__title">Measure the results</h4>
            <p className="ryo-panel__text">
              Use EngThrive-based measurement materials to collect feedback, assess outcomes, and
              evaluate business impact—then use what you learn to shape the next camp.
            </p>
            <span className="ryo-link ryo-link--muted">📊 EngThrive measurement kit — link coming soon</span>
          </div>
          <div className="ryo-panel">
            <h4 className="ryo-panel__title">Keep improving</h4>
            <ul className="ryo-panel__list">
              <li>Review updates regularly</li>
              <li>Apply new practices and content</li>
              <li>Refresh program assets over time</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Scale from Within */}
      <section className="ryo-section">
        <h3 className="ryo-section__title">Scale from Within</h3>
        <div className="ryo-scale">
          <p className="ryo-scale__lead">
            Rather than a one-time event, build an internal ecosystem of AI champions. A small core
            team develops internal pioneers who co-facilitate future camps, coach peers, and expand
            AI capability across the organization.
          </p>
          <div className="ryo-scale__grid">
            <div className="ryo-scale__block">
              <h4 className="ryo-scale__head">Best fit for organizations that want</h4>
              <ul className="ryo-scale__list">
                <li>Sustainable AI adoption</li>
                <li>Internal capability building</li>
                <li>Repeatable deployment models</li>
                <li>Long-term community growth</li>
              </ul>
            </div>
            <div className="ryo-scale__block">
              <h4 className="ryo-scale__head">Scaling actions</h4>
              <ul className="ryo-scale__list">
                <li>Identify future facilitators</li>
                <li>Train internal champions</li>
                <li>Capture reusable practices</li>
                <li>Create local expertise</li>
                <li>Expand to additional teams</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Support & Resources */}
      <section className="ryo-section">
        <h3 className="ryo-section__title">Support &amp; Resources</h3>

        <div className="ryo-support">
          <div className="ryo-support__card">
            <h4 className="ryo-support__title">🧑‍🏫 Expert support</h4>
            <p className="ryo-support__text">
              Access subject matter experts for tool- and program-related questions—to unblock
              participants and share best practices from previous camps.
            </p>
          </div>
          <div className="ryo-support__card">
            <h4 className="ryo-support__title">🗓️ Onboarding office hours</h4>
            <p className="ryo-support__text">
              For organizations getting started: delivery models, launch planning, resource
              selection, and readiness reviews.
            </p>
            <span className="ryo-link ryo-link--muted">Link coming soon</span>
          </div>
          <div className="ryo-support__card">
            <h4 className="ryo-support__title">🛠️ Support office hours</h4>
            <p className="ryo-support__text">
              Recurring help once execution begins: delivery, facilitation, tool issues,
              measurement, and scaling.
            </p>
            <span className="ryo-link ryo-link--muted">Link coming soon</span>
          </div>
        </div>

        <div className="ryo-faq">
          <h4 className="ryo-faq__title">Frequently asked questions</h4>
          <p className="ryo-faq__text">
            A curated FAQ will cover the most common questions before, during, and after a camp:
          </p>
          <div className="ryo-faq__tags">
            {['Planning', 'Logistics', 'Roles', 'Delivery', 'Measurement', 'Scaling', 'Technology'].map(
              (tag) => (
                <span className="ryo-faq__tag" key={tag}>
                  {tag}
                </span>
              ),
            )}
          </div>
          <span className="ryo-link ryo-link--muted">Full FAQ — coming soon</span>
        </div>

        <div className="ryo-resources">
          <h4 className="ryo-resources__title">Resource center</h4>
          <div className="ryo-resources__grid">
            {resourceGroups.map((group) => (
              <div className="ryo-resources__group" key={group.title}>
                <h5 className="ryo-resources__group-title">{group.title}</h5>
                <ul className="ryo-resources__list">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="ryo-resources__note">Downloadable assets and links coming soon.</p>
        </div>
      </section>
    </div>
  );
}

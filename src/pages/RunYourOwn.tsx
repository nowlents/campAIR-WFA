import { useEffect, useMemo, useState, type ReactNode } from 'react';
import { Link } from 'react-router-dom';

const TEAMS_OFFICE_HOURS =
  'https://teams.microsoft.com/l/channel/19%3AH_cLj6ozUE51pflZEOSCzulJkYJs5af5GfV1bSVlpiQ1%40thread.tacv2/tab%3A%3Aedc5a160-9a36-450b-9c51-5278dc3fee37?context=%7B%22channelId%22%3A%2219%3AH_cLj6ozUE51pflZEOSCzulJkYJs5af5GfV1bSVlpiQ1%40thread.tacv2%22%7D';
const LEAD_COACH_CHECKLIST =
  'https://microsoft-my.sharepoint.com/:w:/p/jillet/cQrce9rI_A-4RJo2B1rfUInKEgUCWPEJKtENVgKEMxUXS7RFpg';

type Path = 'small' | 'org';
// A checklist item's tag: undefined = applies to both paths; 'org' = org-wide only.
type Tag = 'org' | undefined;

interface Item {
  id: string;
  label: string;
  tag?: Tag;
  note?: ReactNode;
}

interface Group {
  title?: string;
  intro?: ReactNode;
  tag?: Tag; // whole-group visibility (org-only groups)
  items: Item[];
  tip?: ReactNode;
  playbook?: string;
}

interface Phase {
  id: string;
  num: string;
  name: string;
  timing: string;
  objective: string;
  adaptNote?: ReactNode;
  groups: Group[];
  readyWhen: string;
  playbook?: string;
  help?: ReactNode;
}

interface Role {
  name: string;
  qualifier: string;
  desc: ReactNode;
  link?: boolean;
}

const checklistLink = (
  <a className="ryo-link ryo-link--inline" href={LEAD_COACH_CHECKLIST} target="_blank" rel="noopener noreferrer">
    Cohort Coach Checklist
  </a>
);

const phases: Phase[] = [
  {
    id: 'plan',
    num: '01',
    name: 'Plan',
    timing: '2–3 weeks before Week 1',
    objective: "Confirm goals, decide how you'll run it, choose who takes part, and get logistics ready.",
    adaptNote: (
      <>
        This checklist adapts to your path. Items marked <strong>🏢</strong> apply to <strong>Org-wide</strong> runs
        only; everything else applies to both. If you picked <em>Small team, low effort</em>, you'll see the short
        version.
      </>
    ),
    groups: [
      {
        title: '🏢 Plan your rollout',
        tag: 'org',
        intro:
          "You can't run a large org like one big room. Break it into cohorts and plan the shape first — everything below scales off this.",
        items: [
          {
            id: 'plan-org-size',
            label: 'Size it into cohorts of ~20–25.',
            tag: 'org',
            note: 'Divide your headcount by ~20 → that\'s how many cohorts and Lead Coaches you need. (e.g., 400 people ≈ 16–20 cohorts, each with its own Lead Coach, all overseen by one Cohort Coach.)',
          },
          {
            id: 'plan-org-shape',
            label: 'Choose your rollout shape: waves or parallel.',
            tag: 'org',
            note: 'Waves (recommended for a first org-wide run) — run cohorts in sequence over several weeks/months; fewer coaches/rooms at once, each wave gets better, and early-wave coaches help the next. Parallel — many cohorts in the same immersion week; fastest, but you need all the Lead Coaches, rooms, and support ready at once.',
          },
          {
            id: 'plan-org-agenda',
            label: 'One shared agenda; pick a delivery mode per topic.',
            tag: 'org',
            note: 'All cohorts run the same agenda. For each topic, choose how it\'s delivered across the org — recordings (self-paced → works with waves) or one central AI Pioneer delivering live to all cohorts at once. One Pioneer per topic, delivered centrally — not one per cohort. Practice always happens locally in each cohort with its Lead Coach.',
          },
          {
            id: 'plan-org-bench',
            label: 'Build your coach bench first — via train-the-trainer.',
            tag: 'org',
            note: 'Nominate a Lead Coach candidate per ~20 (Pioneers from the teams) and get them certified before Week 1. This is a prerequisite and adds lead time — start early.',
          },
          {
            id: 'plan-org-coordinator',
            label: 'Name a cross-cohort coordinator to hold cadence, rooms, and rosters across all the cohorts.',
            tag: 'org',
          },
          {
            id: 'plan-org-register',
            label: 'Register early with the central team for train-the-trainer and measurement setup at scale.',
            tag: 'org',
          },
          {
            id: 'plan-org-iterate',
            label: 'Plan to iterate, not to finish.',
            tag: 'org',
            note: 'Org-wide is a series of waves — each cohort improves the next, and you grow your own coaches (Scale from Within) for future rounds instead of depending on a central team.',
          },
        ],
        playbook:
          '📖 Playbook: the full org-wide rollout plan + a worked 400-person example (waves vs parallel, coach math, cadence, combined Demo Day).',
      },
      {
        title: 'Set the foundation',
        items: [
          { id: 'plan-goal', label: 'Define the business goal and what success looks like' },
          {
            id: 'plan-leadcoach',
            label: 'Assign a Lead Coach for every ~20 participants — runs the sessions and gives in-week support (a small team of ~20–25 needs just one)',
            note: <>📄 Every coach works from the Camp AIR {checklistLink} (also on the Resources &amp; FAQ tab)</>,
          },
          {
            id: 'plan-cohortcoach',
            label: 'Assign a Cohort Coach to own the overall camp and oversee all the Lead Coaches',
            tag: 'org',
          },
          { id: 'plan-sponsor', label: 'Secure a Sponsor (VP/CVP) and confirm visible leadership commitment', tag: 'org' },
          { id: 'plan-admin', label: 'Assign Administrative Support for logistics', tag: 'org' },
          { id: 'plan-confirm-path', label: 'Confirm how you\'ll run it: Small team, low effort or Org-wide, higher effort' },
        ],
      },
      {
        title: 'Set your cohort — dates & people',
        items: [
          { id: 'plan-dates', label: 'Pick the cohort dates (start / end)' },
          { id: 'plan-teams', label: 'Select teams and confirm cohort composition (start with ~20–25)' },
          { id: 'plan-project', label: 'Confirm each team has a real project to work on during camp' },
          { id: 'plan-invites', label: 'Send participant invites and set expectations (time commitment, outcomes)' },
        ],
      },
      {
        title: 'Register with the central team',
        intro: 'So they can hand over the kit + set up impact.',
        items: [
          { id: 'plan-poc', label: 'Share your point of contact and headcount for the first cohort (headcount, not names)' },
          { id: 'plan-kit', label: 'Receive the kit hand-off and confirm the version/date' },
          {
            id: 'plan-impact',
            label: 'Provide attendee list + start/end dates so the central team can set up the impact report (EngThrive/NStrive)',
          },
          { id: 'plan-surveys', label: 'Schedule the pre- and post-camp Microsoft Forms surveys' },
        ],
      },
      {
        title: 'Logistics planning',
        items: [
          { id: 'plan-pace', label: 'Choose your pace — 3-week (recommended) / ~1.5-week lean / 1-week compressed' },
          { id: 'plan-calendar', label: 'Finalize the calendar and book the Immersion week (scheduled sessions)' },
          { id: 'plan-hack', label: 'Leave the Hackathon free-flowing — not booked, but teams are accountable to deliver' },
          { id: 'plan-demoday', label: 'Pre-book the leadership Demo Day — teams are accountable to present' },
          { id: 'plan-room', label: 'Book a conference room and run the sessions together, in person as a team' },
          { id: 'plan-remote', label: 'Create Teams meetings / calendar invites for anyone remote' },
          { id: 'plan-secgroups', label: 'Stand up security groups and collaboration spaces' },
          { id: 'plan-food', label: 'Coordinate food if in person (breakfast recommended)' },
          { id: 'plan-kickoff', label: 'Send the kickoff communications' },
        ],
        tip: '💡 Do it in the room, as a team. Sitting together — not heads-down on your own laptop — is what makes the transformation stick. People with different AI skill levels sit side by side and help each other learn and practice all week.',
      },
      {
        title: 'Build your agenda',
        intro: (
          <>
            The flow is fixed; the content is yours. Every camp follows the same shape — Manager prep → immersion week →
            Gemba walk → hackathon → Demo Day. Sequence your topics using the <Link className="ryo-link ryo-link--inline" to="/engineers">Engineering Track</Link> and{' '}
            <Link className="ryo-link ryo-link--inline" to="/non-engineers">Non-Engineering Track</Link> tabs.
          </>
        ),
        items: [
          { id: 'plan-mgrprep', label: 'Run a Manager prep session before Week 1 so leaders know their role' },
          {
            id: 'plan-tracks',
            label: 'Open the Engineering Track and/or Non-Engineering Track tab for each audience in your cohort',
          },
          { id: 'plan-sequence', label: "Sequence the kit's topics into your chosen pace" },
          { id: 'plan-delivery', label: 'For each topic, choose delivery: recordings (self-paced) or live with an AI Pioneer' },
          { id: 'plan-gemba', label: 'Schedule one detailed Gemba walk — after immersion, before the hackathon' },
          { id: 'plan-shareagenda', label: 'Finalize and share the agenda with participants' },
        ],
        playbook:
          '📖 Full sample agendas + facilitator scripts (including the Manager prep session and the Gemba walk) live in the Playbook.',
      },
    ],
    readyWhen:
      'Goal set, Coach assigned, dates + teams set, registered with central team, logistics booked, and the agenda built. (Org-wide: also Sponsor confirmed and Admin assigned.)',
    help: (
      <>
        🙋 Not sure how to size, staff, or scope your camp? Bring it to the{' '}
        <a className="ryo-link ryo-link--inline" href={TEAMS_OFFICE_HOURS} target="_blank" rel="noopener noreferrer">
          onboarding office hours
        </a>{' '}
        before Week 1.
      </>
    ),
  },
  {
    id: 'deliver',
    num: '02',
    name: 'Deliver',
    timing: 'the three weeks',
    objective: 'Run the full experience — immersion, application, and daily support.',
    groups: [
      {
        items: [
          { id: 'deliver-open', label: 'Kick off Week 1 with the Sponsor framing why this matters — run camp open and the camp-open survey' },
          { id: 'deliver-immersion', label: 'Facilitate learning sessions and workshops with protected immersion time (recorded sessions)' },
          { id: 'deliver-project', label: 'Keep every team moving on real project work' },
          { id: 'deliver-support', label: 'Hold regular support touchpoints — the Coach is L1; central per-tool channels back them up' },
          { id: 'deliver-experiment', label: "Encourage experimentation — unblock, don't prescribe" },
          { id: 'deliver-accountability', label: 'Drive mid-week accountability — every team knows they present at Demo Day' },
          { id: 'deliver-track', label: 'Track engagement and participation throughout' },
          { id: 'deliver-atrisk', label: 'Flag at-risk teams early and re-engage them' },
          { id: 'deliver-gemba', label: 'After immersion, run the detailed Gemba walk with leaders — observe the real work + AI in use — before the hackathon' },
          { id: 'deliver-hack', label: 'At the end of immersion, set up the hackathon and pre-book the Demo Day call-out with leadership' },
          { id: 'deliver-close', label: 'Close the week — camp close / ceremony and the end-of-camp survey' },
        ],
      },
    ],
    readyWhen: 'Every team has a working AI-powered solution to show.',
    playbook: '📖 Playbook: facilitation scripts, daily run-of-show, survey templates, and the hackathon setup guide.',
    help: (
      <>
        🙋 Stuck mid-camp — facilitation, low engagement, or a tool issue? Drop into{' '}
        <a className="ryo-link ryo-link--inline" href={TEAMS_OFFICE_HOURS} target="_blank" rel="noopener noreferrer">
          support office hours
        </a>{' '}
        (or your per-tool support channel).
      </>
    ),
  },
  {
    id: 'showcase',
    num: '03',
    name: 'Showcase',
    timing: 'end of Week 3',
    objective: 'Give teams the stage; capture the impact.',
    groups: [
      {
        items: [
          { id: 'showcase-demoday', label: 'Host Demo Day for AI-powered solutions' },
          { id: 'showcase-invite', label: 'Invite executive sponsors to attend' },
          { id: 'showcase-present', label: 'Have each team present what they built and the impact it created' },
          { id: 'showcase-capture', label: 'Capture demos (recordings/screenshots) for reuse' },
          { id: 'showcase-giveback', label: 'Give back: upload your demos + coach deck + cohort resources to the central library (required exit step)' },
          { id: 'showcase-wins', label: 'Highlight cross-team wins' },
          { id: 'showcase-stories', label: 'Collect and share impact stories and lessons learned' },
        ],
      },
    ],
    readyWhen: 'Every team has demoed and wins are documented.',
    playbook: '📖 Playbook: Demo Day run-of-show, leadership-invite template, and the give-back upload steps + template.',
  },
  {
    id: 'measure',
    num: '04',
    name: 'Measure & Iterate',
    timing: 'after camp',
    objective: 'Assess results and feed what you learn into the next camp.',
    groups: [
      {
        items: [
          {
            id: 'measure-feedback',
            label: 'Collect participant feedback',
            note: <>EngThrive measurement kit — on the <Link className="ryo-link ryo-link--inline" to="/support-resources">Resources &amp; FAQ</Link> tab.</>,
          },
          { id: 'measure-outcomes', label: 'Evaluate outcomes and business impact against the Step-01 goal' },
          { id: 'measure-readout', label: 'Share a readout with the Sponsor and leadership' },
          { id: 'measure-improve', label: 'Identify improvements' },
          { id: 'measure-fold', label: "Fold lessons learned into the next camp's plan" },
        ],
        tip: '🔁 Keep improving (ongoing). Camp AIR evolves — treat your kit as living: review central updates regularly, apply new practices and content, and refresh your program assets so each camp you run is better than the last.',
      },
    ],
    readyWhen: 'Results are measured, shared, and the next camp is scoped.',
    playbook:
      '📖 Playbook: how to reuse the EngThrive baseline/outcome surveys, run the dashboard readout, and the Scale-from-Within onboarding steps.',
    help: (
      <>
        🙋 Need help reading the impact report or planning your next wave? Bring it to{' '}
        <a className="ryo-link ryo-link--inline" href={TEAMS_OFFICE_HOURS} target="_blank" rel="noopener noreferrer">
          support office hours
        </a>
        .
      </>
    ),
  },
  {
    id: 'communicate',
    num: '05',
    name: 'Communicate & Scale',
    timing: 'after Measure',
    objective: 'Share the story broadly and set up the next round.',
    groups: [
      {
        items: [
          { id: 'comm-results', label: 'Communicate results and wins across the org (comms templates — coming soon)' },
          { id: 'comm-recruit', label: 'Recruit the next cohorts and coaches — grow your own facilitators' },
          { id: 'comm-handoff', label: 'Hand the next organizer a repeatable plan' },
        ],
      },
    ],
    readyWhen: 'Results are shared org-wide and the next wave has owners.',
    playbook: '📖 Playbook: the communicate-and-scale plan + Scale-from-Within onboarding — coming soon.',
  },
];

const rolesByPath: Record<Path, Role[]> = {
  small: [
    {
      name: 'Lead Coach',
      qualifier: 'Required — just one',
      desc: 'The single coach for your ~20-person team. The manager can be this coach, or assign someone else to run the cohort — either way, only one coach. Runs the sessions, gives in-week support, and coordinates demos + measurement. No separate second coach and no pioneers needed for a small team.',
      link: true,
    },
  ],
  org: [
    {
      name: 'Cohort Coach',
      qualifier: 'Required',
      desc: 'Owns the overall camp; oversees all the Lead Coaches; coordinates across teams, demos, and measurement.',
    },
    {
      name: 'Lead Coach',
      qualifier: 'One per ~20 participants · required',
      desc: 'Runs the sessions and gives in-week (L1) support for their group of ~20. Give each one the checklist.',
      link: true,
    },
    {
      name: 'Sponsor',
      qualifier: 'Required',
      desc: 'VP, CVP, or equivalent leader. Champions Camp AIR and provides visible executive support; reinforces why it matters; attends Demo Day; reviews outcomes; drives organizational commitment.',
    },
    {
      name: 'Administrative Support',
      qualifier: 'Required',
      desc: 'Books rooms and schedules meetings; creates calendar invites; coordinates food; sets up security groups; manages general logistics.',
    },
    {
      name: 'AI Pioneers',
      qualifier: 'Optional — only if you deliver topics live',
      desc: 'One volunteer per topic; self-train from the deck + recording; deliver that topic live. Skip them entirely if you run from recordings.',
    },
  ],
};

function useLocalStorage<T>(key: string, initial: T): [T, (v: T) => void] {
  const [value, setValue] = useState<T>(() => {
    try {
      const raw = localStorage.getItem(key);
      return raw != null ? (JSON.parse(raw) as T) : initial;
    } catch {
      return initial;
    }
  });
  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch {
      /* ignore */
    }
  }, [key, value]);
  return [value, setValue];
}

export function RunYourOwn() {
  const [path, setPath] = useLocalStorage<Path>('campair-ryo-path', 'small');
  const [showAll, setShowAll] = useLocalStorage<boolean>('campair-ryo-showall', false);
  const [checks, setChecks] = useLocalStorage<Record<string, boolean>>('campair-ryo-checks', {});

  const itemVisible = (tag: Tag) => showAll || !tag || tag === path;
  const groupVisible = (g: Group) => showAll || !g.tag || g.tag === path;

  const toggleCheck = (id: string) =>
    setChecks({ ...checks, [id]: !checks[id] });

  const selectPath = (p: Path) => {
    setPath(p);
    setShowAll(false);
  };

  // Progress across all currently-visible checklist items.
  const { done, total } = useMemo(() => {
    let d = 0;
    let t = 0;
    for (const phase of phases) {
      for (const group of phase.groups) {
        if (!groupVisible(group)) continue;
        for (const item of group.items) {
          if (!itemVisible(item.tag)) continue;
          t += 1;
          if (checks[item.id]) d += 1;
        }
      }
    }
    return { done: d, total: t };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checks, path, showAll]);

  const activeSeg: 'small' | 'org' | 'both' = showAll ? 'both' : path;

  const renderItem = (item: Item) => {
    if (!itemVisible(item.tag)) return null;
    return (
      <div className="ryo-check-row" key={item.id}>
        <label className="ryo-check">
          <input
            type="checkbox"
            className="ryo-check__box"
            checked={!!checks[item.id]}
            onChange={() => toggleCheck(item.id)}
          />
          <span className="ryo-check__label">
            {item.tag === 'org' && showAll && <span className="ryo-tag">🏢 Org-wide</span>}
            {item.label}
          </span>
        </label>
        {item.note && <p className="ryo-check__note">{item.note}</p>}
      </div>
    );
  };

  const roles = showAll ? [...rolesByPath.small, ...rolesByPath.org] : rolesByPath[path];

  return (
    <div className="ryo-page">
      {/* A. Title + intro */}
      <section className="page-intro">
        <h2 className="page-intro__title">Run Your Own Camp AIR</h2>
        <p className="page-intro__lead">
          Everything a leader needs to launch, deliver, and scale a cohort. Work top to bottom and check each box as
          you go.
        </p>
        <div className="ryo-chips">
          <span className="ryo-chip">~3-week program</span>
          <span className="ryo-chip">Manager-led or Org-led</span>
          <span className="ryo-chip">Self-serve toolkit</span>
        </div>
      </section>

      {/* B. Start Here */}
      <section className="ryo-section">
        <h3 className="ryo-section__title">Start Here</h3>
        <div className="ryo-start">
          <div className="ryo-callout">
            <span className="ryo-callout__badge">First step</span>
            <div className="ryo-callout__body">
              <h4 className="ryo-callout__title">Join an onboarding session</h4>
              <p className="ryo-callout__desc">
                Before launching, join an onboarding session to choose a delivery model, learn best practices,
                understand required resources, and connect with the Camp AIR community.
              </p>
              <a className="ryo-link" href={TEAMS_OFFICE_HOURS} target="_blank" rel="noopener noreferrer">
                📅 Join the onboarding office hours →
              </a>
            </div>
          </div>

          <div className="ryo-callout ryo-callout--playbook">
            <span className="ryo-callout__badge ryo-callout__badge--soon">Coming soon</span>
            <div className="ryo-callout__body">
              <h4 className="ryo-callout__title">The full how-to</h4>
              <p className="ryo-callout__desc">
                Every step on this page has a matching deep procedure — facilitator scripts, sample agendas, templates,
                and worked examples — in the Camp AIR Organizer &amp; Facilitator Playbook.
              </p>
              <span className="ryo-playbook-btn" aria-disabled="true">
                📖 Open the full Playbook → (coming soon)
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* C. Choose how you'll run it */}
      <section className="ryo-section">
        <h3 className="ryo-section__title">Choose how you'll run it</h3>
        <p className="ryo-section__intro">
          The same kit powers both — this choice is only about scale and how much effort you take on. Pick one to tailor
          the checklist below.
        </p>
        <div className="ryo-compare">
          <button
            type="button"
            className={`ryo-compare__card${path === 'small' && !showAll ? ' is-selected' : ''}`}
            onClick={() => selectPath('small')}
            aria-pressed={path === 'small' && !showAll}
          >
            <span className="ryo-compare__pick">{path === 'small' && !showAll ? '● Selected' : '○ Select'}</span>
            <h4 className="ryo-compare__name">Small team, low effort</h4>
            <dl className="ryo-compare__rows">
              <div>
                <dt>Best for</dt>
                <dd>A single team (~20–25 people)</dd>
              </div>
              <div>
                <dt>Run by</dt>
                <dd>The manager (or a coach they assign), acting as the Lead Coach</dd>
              </div>
              <div>
                <dt>Typical delivery</dt>
                <dd>Mostly self-paced from recordings</dd>
              </div>
            </dl>
          </button>

          <button
            type="button"
            className={`ryo-compare__card${path === 'org' && !showAll ? ' is-selected' : ''}`}
            onClick={() => selectPath('org')}
            aria-pressed={path === 'org' && !showAll}
          >
            <span className="ryo-compare__pick">{path === 'org' && !showAll ? '● Selected' : '○ Select'}</span>
            <h4 className="ryo-compare__name">Org-wide, higher effort</h4>
            <dl className="ryo-compare__rows">
              <div>
                <dt>Best for</dt>
                <dd>A whole org (100s)</dd>
              </div>
              <div>
                <dt>Run by</dt>
                <dd>A Cohort Coach overseeing a Lead Coach per ~20, plus Sponsor + Admin</dd>
              </div>
              <div>
                <dt>Typical delivery</dt>
                <dd>Often run live (decided in Plan)</dd>
              </div>
            </dl>
          </button>
        </div>

        <div className="ryo-recommend">
          <strong>Recommended starting point:</strong> Not sure? Start small — ~20–25 people, low effort, with one Lead
          Coach. Skip the Cohort Coach/pioneers/extra coaches for your first run. Do one camp yourself, learn what to
          change, then scale. Whichever you pick, you decide in Plan how to deliver each topic — self-paced from
          recordings, or live with an AI Pioneer using our deck + recordings.
        </div>

        <div className="ryo-nonneg">
          <h4 className="ryo-nonneg__title">Non-negotiables (apply to every camp, either path)</h4>
          <ul className="ryo-nonneg__list">
            <li>
              <strong>Train the trainer, not the camper</strong> — build local facilitation capability; don't create a
              dependency on a central team.
            </li>
            <li>
              <strong>Sessions are always recorded</strong> — this is what lets you mix-and-match and scale.
            </li>
            <li>
              <strong>Protected / immersion time</strong> — no cherry-picking a few videos; the immersion week is
              blocked and protected.
            </li>
            <li>
              <strong>Central participant tracking + EngThrive measurement</strong> — every cohort is tracked and rolls
              up to the impact dashboard.
            </li>
            <li>
              <strong>Give back at close</strong> — uploading your demos + coach deck + resources to the central library
              is a required exit step (see Showcase).
            </li>
          </ul>
        </div>
      </section>

      {/* D. Operating Model */}
      <section className="ryo-section">
        <h3 className="ryo-section__title">The Operating Model — Organizer Checklist</h3>
        <p className="ryo-section__intro">
          Plan → Deliver → Showcase → Measure &amp; Iterate → Communicate &amp; Scale is the operational backbone for
          every Camp AIR, at any scale.
        </p>

        {/* Path selector + progress */}
        <div className="ryo-pathbar">
          <div className="ryo-seg" role="group" aria-label="Choose which checklist to show">
            <button
              type="button"
              className={`ryo-seg__btn${activeSeg === 'small' ? ' is-active' : ''}`}
              onClick={() => selectPath('small')}
            >
              Small team
            </button>
            <button
              type="button"
              className={`ryo-seg__btn${activeSeg === 'org' ? ' is-active' : ''}`}
              onClick={() => selectPath('org')}
            >
              Org-wide
            </button>
            <button
              type="button"
              className={`ryo-seg__btn${activeSeg === 'both' ? ' is-active' : ''}`}
              onClick={() => setShowAll(true)}
            >
              Show both
            </button>
          </div>
          <span className="ryo-progress">
            {done} / {total} done
          </span>
        </div>

        <div className="ryo-phase-list">
          {phases.map((phase) => (
            <section id={phase.id} className="ryo-phase-block" key={phase.id}>
              <header className="ryo-phase-block__head">
                <span className="ryo-phase-block__num">{phase.num}</span>
                <div>
                  <h4 className="ryo-phase-block__name">
                    {phase.name} <span className="ryo-phase-block__timing">— {phase.timing}</span>
                  </h4>
                  <p className="ryo-phase-block__objective">{phase.objective}</p>
                </div>
              </header>

              {phase.adaptNote && <p className="ryo-phase-block__adapt">{phase.adaptNote}</p>}

              {phase.groups.map((group, gi) =>
                groupVisible(group) ? (
                  <div className="ryo-group" key={group.title ?? gi}>
                    {group.title && (
                      <h5 className="ryo-group__title">
                        {group.title}
                        {group.tag === 'org' && showAll && <span className="ryo-tag">🏢 Org-wide</span>}
                      </h5>
                    )}
                    {group.intro && <p className="ryo-group__intro">{group.intro}</p>}
                    <div className="ryo-group__items">{group.items.map(renderItem)}</div>
                    {group.tip && <p className="ryo-group__tip">{group.tip}</p>}
                    {group.playbook && <p className="ryo-group__playbook">{group.playbook}</p>}
                  </div>
                ) : null,
              )}

              {/* Roles folded into Plan */}
              {phase.id === 'plan' && (
                <div className="ryo-group ryo-roles-block">
                  <h5 className="ryo-group__title">Roles for this camp</h5>
                  <p className="ryo-group__intro">
                    Revealed by the path you pick above{showAll ? ' — showing both paths' : ''}.
                  </p>
                  <div className="ryo-roles">
                    {roles.map((role) => (
                      <article className="ryo-role" key={role.name + role.qualifier}>
                        <h4 className="ryo-role__name">{role.name}</h4>
                        <p className="ryo-role__profile">{role.qualifier}</p>
                        <p className="ryo-role__desc">{role.desc}</p>
                        {role.link && (
                          <a
                            className="ryo-link ryo-link--inline"
                            href={LEAD_COACH_CHECKLIST}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            See the Lead Coach Checklist →
                          </a>
                        )}
                      </article>
                    ))}
                  </div>
                </div>
              )}

              {/* Scale from Within folded into Communicate & Scale */}
              {phase.id === 'communicate' && (
                <div className="ryo-scale">
                  <p className="ryo-scale__lead">
                    🌱 <strong>Scale from Within</strong> — build an internal ecosystem, not a one-time event. A small
                    core team develops internal pioneers who co-facilitate future camps, coach peers, and expand AI
                    capability across the org.
                  </p>
                  <div className="ryo-scale__grid">
                    <div className="ryo-scale__block">
                      <h4 className="ryo-scale__head">Best fit for orgs that want</h4>
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
              )}

              <p className="ryo-ready">
                <span className="ryo-ready__badge">✅ Ready when</span>
                {phase.readyWhen}
              </p>
              {phase.playbook && <p className="ryo-group__playbook">{phase.playbook}</p>}
              {phase.help && <p className="ryo-help">{phase.help}</p>}
            </section>
          ))}
        </div>
      </section>

      {/* E. Closing CTA */}
      <section className="ryo-closing">
        <p className="ryo-closing__text">Have your plan? Go deeper on tools, templates, and answers.</p>
        <Link className="ryo-closing__cta" to="/support-resources">
          Browse the Resources &amp; FAQ →
        </Link>
      </section>
    </div>
  );
}

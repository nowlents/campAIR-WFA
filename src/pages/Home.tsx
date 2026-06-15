import { workstreams } from '../data/deliverables';
import { WorkstreamCard } from '../components/WorkstreamCard';

export function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero__banner">
          <img src="/images/hero-meeting.jpg" alt="Team collaborating in a modern meeting space" className="hero__banner-img" />
        </div>
        <h2 className="hero__title">Camp AIR</h2>

        <div className="learning-outcomes">
          <h3 className="learning-outcomes__title">By the end of Camp AIR, participants can:</h3>
          <div className="learning-outcomes__grid">
            <div className="learning-outcomes__item">
              <span className="learning-outcomes__icon">🎯</span>
              <p>Use AI tools fluently in daily workflows — prompting, iterating, and evaluating output with confidence</p>
            </div>
            <div className="learning-outcomes__item">
              <span className="learning-outcomes__icon">🤖</span>
              <p>Delegate repetitive work to AI agents and automated workflows they've configured themselves</p>
            </div>
            <div className="learning-outcomes__item">
              <span className="learning-outcomes__icon">🛠️</span>
              <p>Build functional AI-powered solutions — from custom agents to workflow automations — without writing code</p>
            </div>
            <div className="learning-outcomes__item">
              <span className="learning-outcomes__icon">🔄</span>
              <p>Redesign team processes from the ground up using AI-first principles, measuring impact and iterating</p>
            </div>
            <div className="learning-outcomes__item">
              <span className="learning-outcomes__icon">📊</span>
              <p>Present a working AI solution to stakeholders with measurable time savings and clear business value</p>
            </div>
          </div>
        </div>

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

      <section className="fluency-baseline">
        <h3 className="fluency-baseline__title">Baseline AI Fluency</h3>
        <p className="fluency-baseline__subtitle">
          Camp AIR establishes a minimum proficiency bar. After completing the program, every participant meets this baseline:
        </p>
        <div className="fluency-baseline__levels">
          <div className="fluency-baseline__level">
            <div className="fluency-baseline__level-header">
              <span className="fluency-baseline__level-badge fluency-baseline__level-badge--use">USE</span>
              <span className="fluency-baseline__level-label">Foundational</span>
            </div>
            <ul className="fluency-baseline__skills">
              <li>Can prompt AI tools effectively for everyday tasks</li>
              <li>Evaluates and iterates on AI output quality</li>
              <li>Identifies which tasks benefit from AI assistance</li>
            </ul>
          </div>
          <div className="fluency-baseline__level">
            <div className="fluency-baseline__level-header">
              <span className="fluency-baseline__level-badge fluency-baseline__level-badge--delegate">DELEGATE</span>
              <span className="fluency-baseline__level-label">Operational</span>
            </div>
            <ul className="fluency-baseline__skills">
              <li>Configures AI to handle recurring tasks autonomously</li>
              <li>Sets up workflows that trigger without manual intervention</li>
              <li>Monitors and adjusts delegated AI processes</li>
            </ul>
          </div>
          <div className="fluency-baseline__level">
            <div className="fluency-baseline__level-header">
              <span className="fluency-baseline__level-badge fluency-baseline__level-badge--build">BUILD</span>
              <span className="fluency-baseline__level-label">Creative</span>
            </div>
            <ul className="fluency-baseline__skills">
              <li>Creates custom AI agents or automations for team needs</li>
              <li>Connects AI capabilities across multiple tools/platforms</li>
              <li>Prototypes solutions and iterates based on feedback</li>
            </ul>
          </div>
          <div className="fluency-baseline__level">
            <div className="fluency-baseline__level-header">
              <span className="fluency-baseline__level-badge fluency-baseline__level-badge--redesign">REDESIGN</span>
              <span className="fluency-baseline__level-label">Strategic</span>
            </div>
            <ul className="fluency-baseline__skills">
              <li>Reimagines team processes from an AI-first perspective</li>
              <li>Measures and communicates AI-driven impact to stakeholders</li>
              <li>Champions behavioral change and new ways of working</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="badging-concept">
        <h3 className="badging-concept__title">Recognition & Badging</h3>
        <p className="badging-concept__subtitle">
          Optional badges signal AI fluency milestones. Participants earn recognition as they progress — no mandate, just motivation.
        </p>
        <div className="badging-concept__badges">
          <div className="badging-concept__badge">
            <div className="badging-concept__badge-icon badging-concept__badge-icon--use">⚡</div>
            <span className="badging-concept__badge-label">AI Explorer</span>
            <span className="badging-concept__badge-desc">Completed USE phase</span>
          </div>
          <div className="badging-concept__badge">
            <div className="badging-concept__badge-icon badging-concept__badge-icon--delegate">🔁</div>
            <span className="badging-concept__badge-label">AI Operator</span>
            <span className="badging-concept__badge-desc">Completed DELEGATE phase</span>
          </div>
          <div className="badging-concept__badge">
            <div className="badging-concept__badge-icon badging-concept__badge-icon--build">🏗️</div>
            <span className="badging-concept__badge-label">AI Builder</span>
            <span className="badging-concept__badge-desc">Completed BUILD phase</span>
          </div>
          <div className="badging-concept__badge">
            <div className="badging-concept__badge-icon badging-concept__badge-icon--redesign">🚀</div>
            <span className="badging-concept__badge-label">AI Architect</span>
            <span className="badging-concept__badge-desc">Completed full Camp AIR</span>
          </div>
        </div>
        <p className="badging-concept__note">
          Inspired by the Garage model — thousands engage voluntarily when recognition is lightweight and visible.
        </p>
      </section>

      <section className="workstream-grid">
        {workstreams.map((ws) => (
          <WorkstreamCard key={ws.id} workstream={ws} />
        ))}
      </section>
    </div>
  );
}

import { workstreams } from '../data/deliverables';
import { WorkstreamCard } from '../components/WorkstreamCard';

export function Home() {
  return (
    <div className="home">
      <section className="hero">
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
      <section className="workstream-grid">
        {workstreams.map((ws) => (
          <WorkstreamCard key={ws.id} workstream={ws} />
        ))}
      </section>
    </div>
  );
}

export type Status = 'ready' | 'in-progress' | 'planned';

export interface Deliverable {
  id: string;
  title: string;
  description: string;
  status: Status;
  artifactUrl?: string;
  artifactLabel?: string;
}

export interface Workstream {
  id: string;
  title: string;
  shortTitle: string;
  description: string;
  icon: string;
  deliverables: Deliverable[];
}

export const workstreams: Workstream[] = [
  {
    id: 'three-week-experience',
    title: 'Structured 3-Week Experience',
    shortTitle: '3-Week Experience',
    description:
      'A structured 3-week learning journey for both engineering and non-engineering audiences, with clear solution overviews, intended outcomes, and progressive skill building.',
    icon: '📅',
    deliverables: [
      {
        id: 'eng-week-agenda',
        title: 'Engineering Track — Week-by-Week Agenda',
        description: 'Detailed weekly agenda for the engineering audience covering tools, hands-on labs, and progressive complexity.',
        status: 'planned',
      },
      {
        id: 'non-eng-week-agenda',
        title: 'Non-Engineering Track — Week-by-Week Agenda',
        description: 'Weekly agenda for non-engineering audience focusing on AI-powered productivity, collaboration, and workflow transformation.',
        status: 'ready',
      },
      {
        id: 'eng-solution-overview',
        title: 'Engineering Solution Overview (EDS Template)',
        description: 'One-page solution overview using EDS template showing structure, outcomes, learning progression, and cross-week build.',
        status: 'planned',
      },
      {
        id: 'non-eng-solution-overview',
        title: 'Non-Engineering Solution Overview (EDS Template)',
        description: 'EDS-formatted solution overview for the non-engineering track with clear structure and intended outcomes.',
        status: 'ready',
      },
    ],
  },
  {
    id: 'lab-design',
    title: 'Non-Engineering Lab Design',
    shortTitle: 'Lab Design',
    description:
      'Rigorous instructional design for 3-4 non-engineering labs that are repeatable, scalable, and consistently high quality across facilitators.',
    icon: '🧪',
    deliverables: [
      {
        id: 'lab1-lesson-plan',
        title: 'Lab 1 — Facilitator Lesson Plan',
        description: 'Complete lesson plan with objectives, timing, activities, and facilitator guidance for Lab 1.',
        status: 'ready',
      },
      {
        id: 'lab1-session-flow',
        title: 'Lab 1 — Session Flow with Timings',
        description: 'Minute-by-minute session flow showing transitions, activities, and time allocation.',
        status: 'ready',
      },
      {
        id: 'lab1-learner-materials',
        title: 'Lab 1 — Learner Guidance & Materials',
        description: 'Participant-facing materials including handouts, instructions, and reference guides.',
        status: 'ready',
      },
      {
        id: 'lab1-facilitation-notes',
        title: 'Lab 1 — Facilitation Notes & Prompts',
        description: 'Facilitator talking points, transition prompts, and anticipated questions with responses.',
        status: 'ready',
      },
      {
        id: 'lab1-outcomes',
        title: 'Lab 1 — Expected Outcomes',
        description: 'Defined success criteria and observable outcomes for participants completing the lab.',
        status: 'ready',
      },
      {
        id: 'lab2-lesson-plan',
        title: 'Lab 2 — Facilitator Lesson Plan',
        description: 'Complete lesson plan for Lab 2 covering advanced AI collaboration scenarios.',
        status: 'ready',
      },
      {
        id: 'lab2-session-flow',
        title: 'Lab 2 — Session Flow with Timings',
        description: 'Detailed session flow with timing and activity breakdown for Lab 2.',
        status: 'ready',
      },
      {
        id: 'lab2-learner-materials',
        title: 'Lab 2 — Learner Guidance & Materials',
        description: 'Learner-facing materials for Lab 2 including exercises and reference content.',
        status: 'ready',
      },
      {
        id: 'lab2-facilitation-notes',
        title: 'Lab 2 — Facilitation Notes & Prompts',
        description: 'Facilitator notes for Lab 2 delivery with prompts and scenario handling.',
        status: 'ready',
      },
      {
        id: 'lab2-outcomes',
        title: 'Lab 2 — Expected Outcomes',
        description: 'Expected outcomes and success metrics for Lab 2.',
        status: 'ready',
      },
      {
        id: 'lab3-lesson-plan',
        title: 'Lab 3 — Facilitator Lesson Plan',
        description: 'Complete lesson plan for Lab 3.',
        status: 'in-progress',
      },
      {
        id: 'lab3-session-flow',
        title: 'Lab 3 — Session Flow with Timings',
        description: 'Session flow for Lab 3.',
        status: 'in-progress',
      },
      {
        id: 'lab3-learner-materials',
        title: 'Lab 3 — Learner Guidance & Materials',
        description: 'Learner materials for Lab 3.',
        status: 'in-progress',
      },
      {
        id: 'lab3-facilitation-notes',
        title: 'Lab 3 — Facilitation Notes & Prompts',
        description: 'Facilitation notes for Lab 3.',
        status: 'in-progress',
      },
      {
        id: 'lab3-outcomes',
        title: 'Lab 3 — Expected Outcomes',
        description: 'Expected outcomes for Lab 3.',
        status: 'in-progress',
      },
      {
        id: 'lab4-lesson-plan',
        title: 'Lab 4 — Facilitator Lesson Plan',
        description: 'Complete lesson plan for Lab 4.',
        status: 'planned',
      },
      {
        id: 'lab4-session-flow',
        title: 'Lab 4 — Session Flow with Timings',
        description: 'Session flow for Lab 4.',
        status: 'planned',
      },
      {
        id: 'lab4-learner-materials',
        title: 'Lab 4 — Learner Guidance & Materials',
        description: 'Learner materials for Lab 4.',
        status: 'planned',
      },
      {
        id: 'lab4-facilitation-notes',
        title: 'Lab 4 — Facilitation Notes & Prompts',
        description: 'Facilitation notes for Lab 4.',
        status: 'planned',
      },
      {
        id: 'lab4-outcomes',
        title: 'Lab 4 — Expected Outcomes',
        description: 'Expected outcomes for Lab 4.',
        status: 'planned',
      },
    ],
  },
  {
    id: 'train-the-trainer',
    title: 'Train-the-Trainer Enablement',
    shortTitle: 'Train-the-Trainer',
    description:
      'A structured enablement approach that prepares facilitators to consistently deliver Camp AIR at the expected quality bar.',
    icon: '🎓',
    deliverables: [
      {
        id: 'ttt-onboarding-flow',
        title: 'Facilitator Onboarding & Enablement Flow',
        description: 'Step-by-step onboarding journey from new facilitator to delivery-ready, including milestones and checkpoints.',
        status: 'ready',
      },
      {
        id: 'ttt-delivery-expectations',
        title: 'Delivery Expectations & Facilitation Techniques',
        description: 'Guidance document outlining quality expectations, techniques, and do/don\'t patterns for Camp AIR facilitation.',
        status: 'ready',
      },
      {
        id: 'ttt-master-trainer',
        title: 'Master Trainer Role Definition',
        description: 'Defined role, responsibilities, and expectations for the SME serving as Master Trainer.',
        status: 'ready',
      },
      {
        id: 'ttt-facilitator-profile',
        title: 'Facilitator Profile Artifact',
        description: 'Template and criteria for identifying and assessing qualified Camp AIR facilitators.',
        status: 'ready',
      },
    ],
  },
  {
    id: 'content-repository',
    title: 'Content Repository & Governance',
    shortTitle: 'Content Repository',
    description:
      'A centralized, well-governed location for Camp AIR materials with clear operating model for sustainability.',
    icon: '📚',
    deliverables: [
      {
        id: 'repo-structure',
        title: 'Repository Structure & Organization',
        description: 'Defined folder structure, naming conventions, and material taxonomy for the content repository.',
        status: 'in-progress',
      },
      {
        id: 'repo-submission-process',
        title: 'Material Submission Process',
        description: 'How new materials are submitted, including templates, metadata requirements, and intake workflow.',
        status: 'in-progress',
      },
      {
        id: 'repo-review-approval',
        title: 'Review & Approval Workflow',
        description: 'Who reviews, criteria for approval, SLAs, and escalation paths.',
        status: 'planned',
      },
      {
        id: 'repo-versioning',
        title: 'Versioning & Update Management',
        description: 'How updates are tracked, version history maintained, and change logs communicated.',
        status: 'planned',
      },
      {
        id: 'repo-retirement',
        title: 'Content Retirement Process',
        description: 'How outdated content is identified, flagged, archived, and removed from active use.',
        status: 'planned',
      },
      {
        id: 'repo-quality',
        title: 'Quality & Consistency Standards',
        description: 'Ongoing quality checks, peer review cadence, and consistency maintenance over time.',
        status: 'planned',
      },
    ],
  },
  {
    id: 'agentic-approaches',
    title: 'Agentic Content Management',
    shortTitle: 'Agentic Approaches',
    description:
      'AI-driven approaches to continuously assess Camp AIR materials against changes in tooling, platform capabilities, and best practices.',
    icon: '🤖',
    deliverables: [
      {
        id: 'agent-assessment-design',
        title: 'Content Assessment Agent — Design Document',
        description: 'Architecture and approach for an AI agent that scans lab content to identify outdated, misaligned, or impacted materials.',
        status: 'in-progress',
      },
      {
        id: 'agent-tool-monitoring',
        title: 'Tool/Platform Evolution Monitoring',
        description: 'How the agent tracks changes in tools and platforms (e.g., Copilot updates, VS Code changes) relevant to Camp AIR labs.',
        status: 'planned',
      },
      {
        id: 'agent-impact-analysis',
        title: 'Impact Analysis & Flagging',
        description: 'Logic and criteria for determining when a tool change impacts specific lab content and how it surfaces alerts.',
        status: 'planned',
      },
      {
        id: 'agent-future-vision',
        title: 'Future State Vision — Recommend & Execute',
        description: 'Long-term roadmap for Phase 2 (AI recommends updates) and Phase 3 (AI executes updates with human approval).',
        status: 'planned',
      },
    ],
  },
];

export function getWorkstreamStats(workstream: Workstream) {
  const total = workstream.deliverables.length;
  const ready = workstream.deliverables.filter((d) => d.status === 'ready').length;
  const inProgress = workstream.deliverables.filter((d) => d.status === 'in-progress').length;
  const planned = workstream.deliverables.filter((d) => d.status === 'planned').length;
  return { total, ready, inProgress, planned };
}

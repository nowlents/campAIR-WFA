export interface Resource {
  id: string;
  title: string;
  type: 'deck' | 'guide' | 'lab' | 'document' | 'video' | 'link';
  url?: string;
}

export interface Session {
  id: string;
  title: string;
  description: string;
  resources: Resource[];
}

export interface Week {
  id: string;
  label: string;
  title: string;
  description: string;
  sessions?: Session[];
}

export const nonEngAgenda: Week[] = [
  {
    id: 'week-0',
    label: 'Week 0',
    title: 'Manager Preparation',
    description:
      'A pre-program orientation designed for managers to understand Camp AIR objectives, set expectations with their teams, and prepare the conditions for a successful immersion.',
    sessions: [
      {
        id: 'w0-manager-orientation',
        title: 'Manager Orientation & Expectations Setting',
        description: 'Deck and talking points for managers to align on Camp AIR goals, time commitment, and team support during the program.',
        resources: [
          { id: 'w0-manager-deck', title: 'Manager Orientation Deck', type: 'deck' },
          { id: 'w0-manager-guide', title: 'Manager Preparation Guide', type: 'guide' },
        ],
      },
    ],
  },
  {
    id: 'week-1',
    label: 'Week 1',
    title: 'Foundations & First Labs',
    description:
      'The core immersion week. Participants are introduced to AI-first principles, engage in morning presentations, and apply concepts through structured afternoon practice labs.',
    sessions: [
      {
        id: 'w1-day1-am',
        title: 'Day 1 — AI-First Mindset & Orientation',
        description: 'Opening session establishing the AI-first operating model, program structure, and cohort norms.',
        resources: [
          { id: 'w1-d1-deck', title: 'Day 1 Presentation Deck', type: 'deck' },
          { id: 'w1-d1-facilitator', title: 'Day 1 Facilitator Guide', type: 'guide' },
        ],
      },
      {
        id: 'w1-day1-pm',
        title: 'Day 1 — Afternoon Practice Lab',
        description: 'Hands-on lab where participants begin experimenting with AI tools on real workflow scenarios.',
        resources: [
          { id: 'w1-d1-lab', title: 'Lab 1 Instructions', type: 'lab' },
          { id: 'w1-d1-learner', title: 'Learner Materials', type: 'document' },
        ],
      },
      {
        id: 'w1-day2-am',
        title: 'Day 2 — Workflow Redesign Principles',
        description: 'Deep dive into identifying high-impact workflows and redesigning them with AI-first principles.',
        resources: [
          { id: 'w1-d2-deck', title: 'Day 2 Presentation Deck', type: 'deck' },
          { id: 'w1-d2-facilitator', title: 'Day 2 Facilitator Guide', type: 'guide' },
        ],
      },
      {
        id: 'w1-day2-pm',
        title: 'Day 2 — Afternoon Practice Lab',
        description: 'Teams identify their target workflows and begin applying AI-first redesign frameworks.',
        resources: [
          { id: 'w1-d2-lab', title: 'Lab 2 Instructions', type: 'lab' },
          { id: 'w1-d2-learner', title: 'Learner Materials', type: 'document' },
        ],
      },
      {
        id: 'w1-day3-am',
        title: 'Day 3 — Building & Iterating',
        description: 'Session focused on rapid experimentation, measuring impact, and iterating on AI-powered solutions.',
        resources: [
          { id: 'w1-d3-deck', title: 'Day 3 Presentation Deck', type: 'deck' },
          { id: 'w1-d3-facilitator', title: 'Day 3 Facilitator Guide', type: 'guide' },
        ],
      },
      {
        id: 'w1-day3-pm',
        title: 'Day 3 — Afternoon Practice Lab',
        description: 'Teams build their first AI-powered workflow prototypes and test them in real scenarios.',
        resources: [
          { id: 'w1-d3-lab', title: 'Lab 3 Instructions', type: 'lab' },
          { id: 'w1-d3-learner', title: 'Learner Materials', type: 'document' },
        ],
      },
    ],
  },
  {
    id: 'week-2',
    label: 'Week 2',
    title: 'Applied Practice & Team Building',
    description:
      'Teams continue building on Week 1 foundations, applying AI-first approaches to their real work. This week focuses on deepening practice, refining solutions, and building team muscle memory around new ways of working. No formal sessions—teams work semi-autonomously with facilitator check-ins.',
  },
  {
    id: 'week-3',
    label: 'Week 3',
    title: 'Showcase & Sustaining Momentum',
    description:
      'The culmination of Camp AIR. Teams prepare and deliver a live showcase of the AI-powered solutions they\'ve built. The week closes with a focus on sustaining momentum—embedding new habits, establishing ongoing practice rituals, and connecting to continued learning resources.',
  },
];

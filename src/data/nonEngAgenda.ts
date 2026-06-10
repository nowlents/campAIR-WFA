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
          { id: 'w0-mgr-ppt', title: 'Manager Orientation Deck', type: 'deck', url: '' },
          { id: 'w0-mgr-doc', title: 'Manager Preparation Guide', type: 'guide', url: '' },
          { id: 'w0-mgr-video', title: 'Manager Orientation Video', type: 'video', url: '' },
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
        title: 'Day 1 AM — AI-First Mindset & Orientation',
        description: 'Opening session establishing the AI-first operating model, program structure, and cohort norms.',
        resources: [
          { id: 'w1-d1am-ppt', title: 'Presentation Deck', type: 'deck', url: '' },
          { id: 'w1-d1am-doc', title: 'Facilitator Guide', type: 'guide', url: '' },
          { id: 'w1-d1am-video', title: 'Session Recording', type: 'video', url: '' },
        ],
      },
      {
        id: 'w1-day1-pm',
        title: 'Day 1 PM — Afternoon Practice Lab',
        description: 'Hands-on lab where participants begin experimenting with AI tools on real workflow scenarios.',
        resources: [
          { id: 'w1-d1pm-ppt', title: 'Lab Deck', type: 'deck', url: '' },
          { id: 'w1-d1pm-doc', title: 'Lab Instructions & Learner Guide', type: 'guide', url: '' },
          { id: 'w1-d1pm-video', title: 'Lab Walkthrough', type: 'video', url: '' },
        ],
      },
      {
        id: 'w1-day2-am',
        title: 'Day 2 AM — Workflow Redesign Principles',
        description: 'Deep dive into identifying high-impact workflows and redesigning them with AI-first principles.',
        resources: [
          { id: 'w1-d2am-ppt', title: 'Presentation Deck', type: 'deck', url: '' },
          { id: 'w1-d2am-doc', title: 'Facilitator Guide', type: 'guide', url: '' },
          { id: 'w1-d2am-video', title: 'Session Recording', type: 'video', url: '' },
        ],
      },
      {
        id: 'w1-day2-pm',
        title: 'Day 2 PM — Afternoon Practice Lab',
        description: 'Teams identify their target workflows and begin applying AI-first redesign frameworks.',
        resources: [
          { id: 'w1-d2pm-ppt', title: 'Lab Deck', type: 'deck', url: '' },
          { id: 'w1-d2pm-doc', title: 'Lab Instructions & Learner Guide', type: 'guide', url: '' },
          { id: 'w1-d2pm-video', title: 'Lab Walkthrough', type: 'video', url: '' },
        ],
      },
      {
        id: 'w1-day3-am',
        title: 'Day 3 AM — Building & Iterating',
        description: 'Session focused on rapid experimentation, measuring impact, and iterating on AI-powered solutions.',
        resources: [
          { id: 'w1-d3am-ppt', title: 'Presentation Deck', type: 'deck', url: '' },
          { id: 'w1-d3am-doc', title: 'Facilitator Guide', type: 'guide', url: '' },
          { id: 'w1-d3am-video', title: 'Session Recording', type: 'video', url: '' },
        ],
      },
      {
        id: 'w1-day3-pm',
        title: 'Day 3 PM — Afternoon Practice Lab',
        description: 'Teams build their first AI-powered workflow prototypes and test them in real scenarios.',
        resources: [
          { id: 'w1-d3pm-ppt', title: 'Lab Deck', type: 'deck', url: '' },
          { id: 'w1-d3pm-doc', title: 'Lab Instructions & Learner Guide', type: 'guide', url: '' },
          { id: 'w1-d3pm-video', title: 'Lab Walkthrough', type: 'video', url: '' },
        ],
      },
      {
        id: 'w1-day4-am',
        title: 'Day 4 AM — Integration & Scaling',
        description: 'Connecting individual solutions into team-level workflows and planning for scale.',
        resources: [
          { id: 'w1-d4am-ppt', title: 'Presentation Deck', type: 'deck', url: '' },
          { id: 'w1-d4am-doc', title: 'Facilitator Guide', type: 'guide', url: '' },
          { id: 'w1-d4am-video', title: 'Session Recording', type: 'video', url: '' },
        ],
      },
      {
        id: 'w1-day4-pm',
        title: 'Day 4 PM — Afternoon Practice Lab',
        description: 'Teams refine solutions and prepare for Week 2 applied practice.',
        resources: [
          { id: 'w1-d4pm-ppt', title: 'Lab Deck', type: 'deck', url: '' },
          { id: 'w1-d4pm-doc', title: 'Lab Instructions & Learner Guide', type: 'guide', url: '' },
          { id: 'w1-d4pm-video', title: 'Lab Walkthrough', type: 'video', url: '' },
        ],
      },
      {
        id: 'w1-day5-am',
        title: 'Day 5 AM — Reflection & Week 1 Close',
        description: 'Cohort reflection, share-outs, and setting intentions for the applied practice weeks ahead.',
        resources: [
          { id: 'w1-d5am-ppt', title: 'Presentation Deck', type: 'deck', url: '' },
          { id: 'w1-d5am-doc', title: 'Facilitator Guide', type: 'guide', url: '' },
          { id: 'w1-d5am-video', title: 'Session Recording', type: 'video', url: '' },
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

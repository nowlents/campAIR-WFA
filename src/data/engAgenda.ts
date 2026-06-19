import { type Week } from './nonEngAgenda';

export { type Resource, type Session, type Week } from './nonEngAgenda';

export const engAgenda: Week[] = [
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
          { id: 'w0-mgr-teaser', title: 'Teaser Trailer', type: 'video', url: 'https://microsoft.sharepoint.com/:v:/r/teams/WorkforceAccelerationWFATeam/_layouts/15/stream.aspx?id=%2Fteams%2FWorkforceAccelerationWFATeam%2FShared%20Documents%2FCamp%20AIR%20Source%20of%20Truth%2FWeek%200%20%2D%20Manager%20Kickoff%2FManagerKickoff%5FTeaser%2Emp4&share=cQqPDoGUG1ARRIjBaB%5FlxF00EgUCRLOJwC3hvgM%2Dyy6am%5F%2Dnnw' },
          { id: 'w0-mgr-ppt', title: 'Manager Kickoff Presentation', type: 'deck', url: 'https://microsoft.sharepoint.com/:p:/t/WorkforceAccelerationWFATeam/cQoxXgqcBqBYRops7nw1f04mEgUC3L-Kvt2dP20KgeFwO3tx5Q' },
          { id: 'w0-mgr-guide', title: 'Facilitator Guide', type: 'guide', url: 'https://microsoft.sharepoint.com/:w:/t/WorkforceAccelerationWFATeam/cQppVI4ZH8E9QrN3tPKoDPG9EgUCe9sDmuF8cbhB3qCIxU-waw' },
          { id: 'w0-mgr-video', title: 'Video Talk Track Prep', type: 'video', url: 'https://microsoft.sharepoint.com/:v:/r/teams/WorkforceAccelerationWFATeam/_layouts/15/stream.aspx?id=%2Fteams%2FWorkforceAccelerationWFATeam%2FShared%20Documents%2FCamp%20AIR%20Source%20of%20Truth%2FWeek%200%20%2D%20Manager%20Kickoff%2FCampAIR%2DManager%2DKickoff%2DDeck%2Emp4&share=cQp63YAYdXiRRa0gsVaLYI9fEgUCAr8Oye9tp1yWrEB%2DRovvkQ' },
        ],
      },
    ],
  },
  {
    id: 'week-1',
    label: 'Week 1',
    title: 'Foundations & First Labs',
    description:
      'The core immersion week. Engineers are introduced to AI-first development principles, engage in morning presentations, and apply concepts through structured afternoon practice labs.',
    sessions: [
      {
        id: 'w1-day1-s1',
        title: 'Day 1 — Icebreaker & AI-First Mindset',
        description: 'Opening session establishing the AI-first operating model, program structure, and cohort norms.',
        day: 1,
        resources: [
          { id: 'w1-d1s1-teaser', title: 'Teaser Trailer', type: 'video', url: 'https://microsoft.sharepoint.com/:v:/r/teams/WorkforceAccelerationWFATeam/_layouts/15/stream.aspx?id=%2Fteams%2FWorkforceAccelerationWFATeam%2FShared%20Documents%2FCamp%20AIR%20Source%20of%20Truth%2FWeek%201%20%2D%20Ignite%2FDay%201%2FIcebreaker%5FTeaser%2Emp4&share=cQphqAg3embwSqKHWF8SO0E0EgUCWB69fucXBravMBVcOLIwQg' },
          { id: 'w1-d1s1-ppt', title: 'Presentation', type: 'deck', url: 'https://microsoft.sharepoint.com/:p:/t/WorkforceAccelerationWFATeam/cQowprbeYuvBS7v7Ll_VN8mvEgUCGU_L4Xc9DiJC-9klDF7n6Q' },
          { id: 'w1-d1s1-guide', title: 'Facilitator Guide', type: 'guide', url: 'https://microsoft.sharepoint.com/:w:/t/WorkforceAccelerationWFATeam/cQpyFVxUHQnOS7MLj8Xq9fAKEgUCy7WS1JY7HUPpIC9Omve1_w' },
          { id: 'w1-d1s1-video', title: 'Video Talk Track Prep', type: 'video', url: 'https://microsoft.sharepoint.com/:v:/r/teams/WorkforceAccelerationWFATeam/_layouts/15/stream.aspx?id=%2Fteams%2FWorkforceAccelerationWFATeam%2FShared%20Documents%2FCamp%20AIR%20Source%20of%20Truth%2FWeek%201%20%2D%20Ignite%2FDay%201%2FIcebreakerAndAI%2DFirstMindset%2Emp4&share=cQqkL82ITmRcRa7ci7SpXUEWEgUCc72BvwT6C0OYdAsqv3Zz4A' },
        ],
      },
      {
        id: 'w1-day1-s2',
        title: 'Day 1 — Session 2',
        description: 'Tailored to your team\'s specific engineering stack, tooling, and AI-first opportunities. Content is developed in partnership with your leadership during consultation.',
        day: 1,
        placeholder: true,
        resources: [],
      },
      {
        id: 'w1-day1-pm',
        title: 'Day 1 — Afternoon Practice',
        description: 'Hands-on lab designed around your team\'s real-world engineering scenarios and workflows.',
        day: 1,
        placeholder: true,
        resources: [],
      },
      {
        id: 'w1-day2-am',
        title: 'Day 2 — Session',
        description: 'Deep-dive session crafted to address your team\'s unique challenges and AI integration points.',
        day: 2,
        placeholder: true,
        resources: [],
      },
      {
        id: 'w1-day2-pm',
        title: 'Day 2 — Afternoon Practice',
        description: 'Applied practice lab using your team\'s actual codebase, tools, and engineering environment.',
        day: 2,
        placeholder: true,
        resources: [],
      },
      {
        id: 'w1-day3-am',
        title: 'Day 3 — Session',
        description: 'Session content designed to build on your team\'s progress and tackle domain-specific engineering scenarios.',
        day: 3,
        placeholder: true,
        resources: [],
      },
      {
        id: 'w1-day3-pm',
        title: 'Day 3 — Afternoon Practice',
        description: 'Hands-on lab that deepens expertise using your team\'s unique technology stack and AI-first tooling.',
        day: 3,
        placeholder: true,
        resources: [],
      },
      {
        id: 'w1-day4-am',
        title: 'Day 4 — Session',
        description: 'Capstone session connecting all learnings back to your team\'s strategic engineering goals.',
        day: 4,
        placeholder: true,
        resources: [],
      },
      {
        id: 'w1-day4-pm',
        title: 'Day 4 — Afternoon Practice',
        description: 'Final hands-on lab where your team applies the full week of tailored learning to a real deliverable.',
        day: 4,
        placeholder: true,
        resources: [],
      },
    ],
  },
  {
    id: 'week-2',
    label: 'Week 2',
    title: 'Applied Practice & Team Building',
    description:
      'Teams continue building on Week 1 foundations, applying AI-first approaches to their real engineering work. This week focuses on deepening practice, refining solutions, and building team muscle memory around new ways of working. No formal sessions—teams work semi-autonomously with facilitator check-ins.',
  },
  {
    id: 'week-3',
    label: 'Week 3',
    title: 'Showcase & Sustaining Momentum',
    description:
      'The culmination of Camp AIR. Teams prepare and deliver a live showcase of the AI-powered solutions they\'ve built. The week closes with a focus on sustaining momentum—embedding new habits, establishing ongoing practice rituals, and connecting to continued learning resources.',
  },
];

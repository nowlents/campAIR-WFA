export interface Resource {
  id: string;
  title: string;
  type: 'deck' | 'guide' | 'lab' | 'document' | 'video' | 'link' | 'preview';
  url?: string;
}

export interface Session {
  id: string;
  title: string;
  description: string;
  day?: number;
  placeholder?: boolean;
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
          { id: 'w0-mgr-teaser', title: 'Teaser Trailer', type: 'video', url: 'https://microsoft.sharepoint.com/:v:/r/teams/WorkforceAccelerationWFATeam/_layouts/15/stream.aspx?id=%2Fteams%2FWorkforceAccelerationWFATeam%2FShared%20Documents%2FCamp%20AIR%20Source%20of%20Truth%2FWeek%200%20%2D%20Manager%20Kickoff%2FManagerKickoff%5FTeaser%2Emp4&share=cQqPDoGUG1ARRIjBaB%5FlxF00EgUCRLOJwC3hvgM%2Dyy6am%5F%2Dnnw' },
          { id: 'w0-mgr-ppt', title: 'Presentation', type: 'deck', url: 'https://microsoft.sharepoint.com/:p:/t/WorkforceAccelerationWFATeam/cQoxXgqcBqBYRops7nw1f04mEgUC3L-Kvt2dP20KgeFwO3tx5Q' },
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
      'The core immersion week. Participants are introduced to AI-first principles, engage in morning presentations, and apply concepts through structured afternoon practice labs.',
    sessions: [
      {
        id: 'w1-day1-s1',
        title: 'Day 1 — Icebreaker & AI-First Mindset',
        description: 'Opening session establishing the AI-first operating model, program structure, and cohort norms.',
        day: 1,
        resources: [
          { id: 'w1-d1s1-teaser', title: 'Teaser Trailer', type: 'video', url: 'https://microsoft.sharepoint.com/:v:/r/teams/WorkforceAccelerationWFATeam/_layouts/15/stream.aspx?id=%2Fteams%2FWorkforceAccelerationWFATeam%2FShared%20Documents%2FCamp%20AIR%20Source%20of%20Truth%2FNon-Engineering%20Week%201%20Materials%2FDay%201%2FIcebreaker%5FTeaser%2Emp4' },
          { id: 'w1-d1s1-ppt', title: 'Presentation', type: 'deck', url: 'https://microsoft.sharepoint.com/:p:/t/WorkforceAccelerationWFATeam/cQowprbeYuvBS7v7Ll_VN8mvEgUCGU_L4Xc9DiJC-9klDF7n6Q' },
          { id: 'w1-d1s1-guide', title: 'Facilitator Guide', type: 'guide', url: 'https://microsoft.sharepoint.com/:w:/t/WorkforceAccelerationWFATeam/cQpyFVxUHQnOS7MLj8Xq9fAKEgUCy7WS1JY7HUPpIC9Omve1_w' },
          { id: 'w1-d1s1-video', title: 'Video Talk Track Prep', type: 'video', url: 'https://microsoft.sharepoint.com/:v:/r/teams/WorkforceAccelerationWFATeam/_layouts/15/stream.aspx?id=%2Fteams%2FWorkforceAccelerationWFATeam%2FShared%20Documents%2FCamp%20AIR%20Source%20of%20Truth%2FNon-Engineering%20Week%201%20Materials%2FDay%201%2FIcebreakerAndAI%2DFirstMindset%2Emp4' },
        ],
      },
      {
        id: 'w1-day1-s2',
        title: 'Day 1 — M365 Copilot: From Overwhelmed to In-Command',
        description: 'Second morning session building on orientation foundations.',
        day: 1,
        resources: [
          { id: 'w1-d1s2-teaser', title: 'Teaser Trailer', type: 'video', url: 'https://microsoft.sharepoint.com/:v:/r/teams/WorkforceAccelerationWFATeam/_layouts/15/stream.aspx?id=%2Fteams%2FWorkforceAccelerationWFATeam%2FShared%20Documents%2FCamp%20AIR%20Source%20of%20Truth%2FNon-Engineering%20Week%201%20Materials%2FDay%201%2FM365%5FTeaser%2Emp4' },
          { id: 'w1-d1s2-ppt', title: 'Presentation', type: 'deck', url: 'https://microsoft.sharepoint.com/:p:/t/WorkforceAccelerationWFATeam/cQpuBeJhstixRKw8yt17vdmaEgUCX3ZRORRVmf1UYAmzx1umqg' },
          { id: 'w1-d1s2-guide', title: 'Facilitator Guide', type: 'guide', url: 'https://microsoft.sharepoint.com/:w:/t/WorkforceAccelerationWFATeam/cQoDw8_63Au-Q4NaonzjOXA4EgUCvnua5yFEN15HVxKahhU_Gg' },
          { id: 'w1-d1s2-video', title: 'Video Talk Track Prep', type: 'video', url: 'https://microsoft.sharepoint.com/:v:/r/teams/WorkforceAccelerationWFATeam/_layouts/15/stream.aspx?id=%2Fteams%2FWorkforceAccelerationWFATeam%2FShared%20Documents%2FCamp%20AIR%20Source%20of%20Truth%2FNon-Engineering%20Week%201%20Materials%2FDay%201%2FM365%2DCopilot%2DWorkshop%2DDeck%2Emp4' },
        ],
      },
      {
        id: 'w1-day1-pm',
        title: 'Day 1 — Afternoon Practice',
        description: 'Hands-on lab where participants begin experimenting with AI tools on real workflow scenarios.',
        day: 1,
        resources: [
          { id: 'w1-d1pm-lab', title: 'Lab Practice Guide', type: 'guide', url: 'https://microsoft.sharepoint.com/:w:/t/WorkforceAccelerationWFATeam/cQp_HDTJjgRsQaA4te1ofbcJEgUCrjp27KPV1YTNj4dCYHRt5Q' },
        ],
      },
      {
        id: 'w1-day2-am',
        title: 'Day 2 — Copilot Cowork: Delegate, Don\'t Dictate',
        description: 'Morning session content.',
        day: 2,
        resources: [
          { id: 'w1-d2am-teaser', title: 'Teaser Trailer', type: 'video', url: 'https://microsoft.sharepoint.com/:v:/r/teams/WorkforceAccelerationWFATeam/_layouts/15/stream.aspx?id=%2Fteams%2FWorkforceAccelerationWFATeam%2FShared%20Documents%2FCamp%20AIR%20Source%20of%20Truth%2FNon-Engineering%20Week%201%20Materials%2FDay%202%2FCowork%5FTeaser%2Emp4' },
          { id: 'w1-d2am-ppt', title: 'Presentation', type: 'deck', url: 'https://microsoft.sharepoint.com/:p:/t/WorkforceAccelerationWFATeam/cQr4aWHBYnx8Q4_6Zbmb6yoAEgUC_G9Jb3M5QdgL-2Te9gAsjg' },
          { id: 'w1-d2am-guide', title: 'Facilitator Guide', type: 'guide', url: 'https://microsoft.sharepoint.com/:w:/t/WorkforceAccelerationWFATeam/cQpsF88ZxluHQILq0gAmcFRPEgUCAUkUVa7iYv3yyALl6VQKZg' },
          { id: 'w1-d2am-video', title: 'Video Talk Track Prep', type: 'video', url: 'https://microsoft.sharepoint.com/:v:/r/teams/WorkforceAccelerationWFATeam/_layouts/15/stream.aspx?id=%2Fteams%2FWorkforceAccelerationWFATeam%2FShared%20Documents%2FCamp%20AIR%20Source%20of%20Truth%2FNon-Engineering%20Week%201%20Materials%2FDay%202%2FCowork%2DDeck%2Emp4' },
        ],
      },
      {
        id: 'w1-day2-s2',
        title: 'Day 2 — Microsoft Scout: Autonomous Delegation',
        description: 'Second morning session introducing Microsoft Scout for autonomous task delegation and agentic workflows.',
        day: 2,
        resources: [
          { id: 'w1-d2s2-teaser', title: 'Teaser Trailer', type: 'video', url: 'https://microsoft.sharepoint.com/:v:/r/teams/WorkforceAccelerationWFATeam/_layouts/15/stream.aspx?id=%2Fteams%2FWorkforceAccelerationWFATeam%2FShared%20Documents%2FCamp%20AIR%20Source%20of%20Truth%2FNon-Engineering%20Week%201%20Materials%2FDay%202%2FScout%5FTeaser%2Emp4' },
          { id: 'w1-d2s2-ppt', title: 'Presentation', type: 'deck', url: 'https://microsoft.sharepoint.com/:p:/t/WorkforceAccelerationWFATeam/cQq8YAe1cdd3TqktT5_WgYhGEgUC2cRu8sc0ZVRfdUjVfzQmOQ' },
          { id: 'w1-d2s2-guide', title: 'Facilitator Guide', type: 'guide', url: 'https://microsoft.sharepoint.com/:w:/t/WorkforceAccelerationWFATeam/cQphcPeVBV1BQZ5kgIVefjqnEgUCc98BwH7FO7iHeDzYJA84PQ' },
          { id: 'w1-d2s2-video', title: 'Video Talk Track Prep', type: 'video', url: 'https://microsoft.sharepoint.com/:v:/r/teams/WorkforceAccelerationWFATeam/_layouts/15/stream.aspx?id=%2Fteams%2FWorkforceAccelerationWFATeam%2FShared%20Documents%2FCamp%20AIR%20Source%20of%20Truth%2FNon-Engineering%20Week%201%20Materials%2FDay%202%2FScout%2DDeck%2Emp4' },
        ],
      },
      {
        id: 'w1-day2-pm',
        title: 'Day 2 — Afternoon Practice',
        description: 'Afternoon hands-on practice lab.',
        day: 2,
        resources: [
          { id: 'w1-d2pm-lab', title: 'Cowork Lab Practice Guide', type: 'guide', url: 'https://microsoft.sharepoint.com/:w:/t/WorkforceAccelerationWFATeam/cQqAh4MPtfvFRpsBZTtKhLfTEgUCULbs-0MgWaHPgNE6UosjCw' },
          { id: 'w1-d2pm-lab2', title: 'Scout Lab Practice Guide', type: 'guide', url: 'https://microsoft.sharepoint.com/:w:/t/WorkforceAccelerationWFATeam/cQr1tMgaLiZUTopUkO4eWqpdEgUCmVxNvBdjOXw-vffVKefUJw' },
        ],
      },
      {
        id: 'w1-day3-am',
        title: 'Day 3 — Build Your Own Copilot: No Code Required',
        description: 'Morning session content.',
        day: 3,
        resources: [
          { id: 'w1-d3am-teaser', title: 'Teaser Trailer', type: 'video', url: 'https://microsoft.sharepoint.com/:v:/r/teams/WorkforceAccelerationWFATeam/_layouts/15/stream.aspx?id=%2Fteams%2FWorkforceAccelerationWFATeam%2FShared%20Documents%2FCamp%20AIR%20Source%20of%20Truth%2FNon-Engineering%20Week%201%20Materials%2FDay%203%2FBuildYourOwnCopilot%5FTeaser%2Emp4' },
          { id: 'w1-d3am-ppt', title: 'Presentation', type: 'deck', url: 'https://microsoft.sharepoint.com/:p:/t/WorkforceAccelerationWFATeam/cQqK83F_XpnITZbJN59AfadtEgUCCp2eKNLNQ2Uv9qacYbJ5hQ' },
          { id: 'w1-d3am-guide', title: 'Facilitator Guide', type: 'guide', url: 'https://microsoft.sharepoint.com/:w:/t/WorkforceAccelerationWFATeam/cQpPBuQt6kBgRL98IIrjYWgzEgUCQgrAcpKQLS40AmYMb-3XSQ' },
          { id: 'w1-d3am-video', title: 'Video Talk Track Prep', type: 'video', url: 'https://microsoft.sharepoint.com/:v:/r/teams/WorkforceAccelerationWFATeam/_layouts/15/stream.aspx?id=%2Fteams%2FWorkforceAccelerationWFATeam%2FShared%20Documents%2FCamp%20AIR%20Source%20of%20Truth%2FNon-Engineering%20Week%201%20Materials%2FDay%203%2FBuildYourOwnCopilot%2DDeck%2Emp4' },
        ],
      },
      {
        id: 'w1-day3-pm',
        title: 'Day 3 — Afternoon Practice',
        description: 'Afternoon hands-on practice lab.',
        day: 3,
        resources: [
          { id: 'w1-d3pm-lab', title: 'Lab Practice Guide', type: 'guide', url: 'https://microsoft.sharepoint.com/:w:/t/WorkforceAccelerationWFATeam/cQrgu5wzpf63Tqf1Q8xnR--nEgUCpy0ruNzhTn-fQn0_W10d7w' },
        ],
      },
      {
        id: 'w1-day4-am',
        title: 'Day 4 — Work Redesign: Rethinking the Work Itself — Not Just Making It Faster',
        description: 'Morning session content.',
        day: 4,
        resources: [
          { id: 'w1-d4am-teaser', title: 'Teaser Trailer', type: 'video', url: 'https://microsoft.sharepoint.com/:v:/r/teams/WorkforceAccelerationWFATeam/_layouts/15/stream.aspx?id=%2Fteams%2FWorkforceAccelerationWFATeam%2FShared%20Documents%2FCamp%20AIR%20Source%20of%20Truth%2FNon-Engineering%20Week%201%20Materials%2FDay%204%2FWorkRedesign%5FTeaser%2Emp4' },
          { id: 'w1-d4am-ppt', title: 'Presentation', type: 'deck', url: 'https://microsoft.sharepoint.com/:p:/t/WorkforceAccelerationWFATeam/cQrlJlsG_oVuRp7fKYxh_4OdEgUCIS-5b1NOxrKFbe5fwruQIg' },
          { id: 'w1-d4am-guide', title: 'Facilitator Guide', type: 'guide', url: 'https://microsoft.sharepoint.com/:w:/t/WorkforceAccelerationWFATeam/cQo3tXDguXFdQLyssDAuFkMLEgUCnoA1rKzOBHbBMnE9aaKNaA' },
          { id: 'w1-d4am-video', title: 'Video Talk Track Prep', type: 'video', url: 'https://microsoft.sharepoint.com/:v:/r/teams/WorkforceAccelerationWFATeam/_layouts/15/stream.aspx?id=%2Fteams%2FWorkforceAccelerationWFATeam%2FShared%20Documents%2FCamp%20AIR%20Source%20of%20Truth%2FNon-Engineering%20Week%201%20Materials%2FDay%204%2FWorkRedesign%2DDeck%2Emp4' },
        ],
      },
      {
        id: 'w1-day4-pm',
        title: 'Day 4 — Afternoon Practice',
        description: 'Afternoon hands-on practice lab.',
        day: 4,
        resources: [
          { id: 'w1-d4pm-lab', title: 'Lab Practice Guide', type: 'guide', url: 'https://microsoft.sharepoint.com/:w:/t/WorkforceAccelerationWFATeam/cQq0YlMsGZmYRqkyYh0SCEgXEgUC4usmTxkJOesXDoS2Mql3ZQ' },
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

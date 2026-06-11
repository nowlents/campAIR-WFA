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
          { id: 'w0-mgr-ppt', title: 'Manager Kickoff Presentation', type: 'deck', url: 'https://microsoft.sharepoint.com/:p:/t/WorkforceAccelerationWFATeam/cQq3ZK3YiGCHS7baPJeELOkPEgUCMCQubysuhDYPKYOY5UtAbg' },
          { id: 'w0-mgr-guide', title: 'Facilitator Guide', type: 'guide', url: 'https://microsoft.sharepoint.com/:w:/t/WorkforceAccelerationWFATeam/cQr5facebSiXR5fvnxbhFqKcEgUC0ovwmIirr-JeOV9V6mep6A' },
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
          { id: 'w1-d1s1-ppt', title: 'Presentation', type: 'deck', url: 'https://microsoft.sharepoint.com/:p:/t/WorkforceAccelerationWFATeam/cQrXMZD136KjS7t3-E0wow2oEgUCMHnLlOKVSRZDMuOk4KcYgw' },
          { id: 'w1-d1s1-guide', title: 'Facilitator Guide', type: 'guide', url: 'https://microsoft.sharepoint.com/:w:/t/WorkforceAccelerationWFATeam/cQpQikdLyN70QKB_5KPWhLePEgUCMeMCe-SqHubgnLJZqmNRmA' },
          { id: 'w1-d1s1-video', title: 'Video Talk Track Prep', type: 'video', url: 'https://microsoft.sharepoint.com/:v:/t/WorkforceAccelerationWFATeam/cQpU33ODHbPvQ4WcG341N-ECEgUCKMxzvEhCemgeF7peLQyViA' },
        ],
      },
      {
        id: 'w1-day1-s2',
        title: 'Day 1 — M365 Copilot: From Overwhelmed to In-Command',
        description: 'Second morning session building on orientation foundations.',
        day: 1,
        resources: [
          { id: 'w1-d1s2-ppt', title: 'Presentation', type: 'deck', url: 'https://microsoft.sharepoint.com/:p:/t/WorkforceAccelerationWFATeam/cQoRe2BNjLniRKbBQfYL8LFBEgUCUJkb_LIanRKRN1_VtjgQ2Q' },
          { id: 'w1-d1s2-guide', title: 'Facilitator Guide', type: 'guide', url: 'https://microsoft.sharepoint.com/:w:/t/WorkforceAccelerationWFATeam/cQoYS9XcHcsnQ5QguLv6ah8dEgUCbFzAx5RWDMrf7e_obbrrkg' },
          { id: 'w1-d1s2-video', title: 'Video Talk Track Prep', type: 'video', url: 'https://microsoft.sharepoint.com/:v:/t/WorkforceAccelerationWFATeam/cQoxQTJ38151RYChAEutciyxEgUCyi1aoLvyy2yOjEmQugZS8w' },
        ],
      },
      {
        id: 'w1-day1-pm',
        title: 'Day 1 — Afternoon Practice',
        description: 'Hands-on lab where participants begin experimenting with AI tools on real workflow scenarios.',
        day: 1,
        resources: [
          { id: 'w1-d1pm-lab', title: 'Lab Practice Guide', type: 'guide', url: 'https://microsoft.sharepoint.com/:w:/t/WorkforceAccelerationWFATeam/cQoJPWy8ALWERrU6NGvLO8soEgUCYymDGyRwVFd3lZqBCGXViQ' },
        ],
      },
      {
        id: 'w1-day2-am',
        title: 'Day 2 — Copilot Cowork: Delegate, Don\'t Dictate',
        description: 'Morning session content.',
        day: 2,
        resources: [
          { id: 'w1-d2am-ppt', title: 'Presentation', type: 'deck', url: 'https://microsoft.sharepoint.com/:p:/t/WorkforceAccelerationWFATeam/cQpgg4m2ChONRZ-QXcUfoyNbEgUC-vEhQ9qQhCvd8DwquvHCgg' },
          { id: 'w1-d2am-guide', title: 'Facilitator Guide', type: 'guide', url: 'https://microsoft.sharepoint.com/:w:/t/WorkforceAccelerationWFATeam/cQrxpe31Er-MTpe4GT7SK7ZbEgUCO_TakTwBZ3788cPoAmot-g' },
          { id: 'w1-d2am-video', title: 'Video Talk Track Prep', type: 'video', url: 'https://microsoft.sharepoint.com/:v:/t/WorkforceAccelerationWFATeam/cQpbAtLnDkghQ6Mt0GO6OxG_EgUCbNPHbygyzdqcvWXkhYfbtg' },
        ],
      },
      {
        id: 'w1-day2-pm',
        title: 'Day 2 — Afternoon Practice',
        description: 'Afternoon hands-on practice lab.',
        day: 2,
        resources: [
          { id: 'w1-d2pm-lab', title: 'Lab Practice Guide', type: 'guide', url: 'https://microsoft.sharepoint.com/:w:/t/WorkforceAccelerationWFATeam/cQoBC010R1BnSbXC24cz2tD5EgUC1zHIsYp313iTtgFOG8WsBw' },
        ],
      },
      {
        id: 'w1-day3-am',
        title: 'Day 3 — Build Your Own Copilot: No Code Required',
        description: 'Morning session content.',
        day: 3,
        resources: [
          { id: 'w1-d3am-ppt', title: 'Presentation', type: 'deck', url: 'https://microsoft.sharepoint.com/:p:/t/WorkforceAccelerationWFATeam/cQrf9wjnnDcQRps_GYt4Z1HzEgUCI3epXtc5EUH0Nd1zg7xGmA' },
          { id: 'w1-d3am-guide', title: 'Facilitator Guide', type: 'guide', url: 'https://microsoft.sharepoint.com/:w:/t/WorkforceAccelerationWFATeam/cQovYE0e2jDcSbqUgULccmjxEgUCBJe568Uow37KxT7jSrvcgg' },
          { id: 'w1-d3am-video', title: 'Video Talk Track Prep', type: 'video', url: 'https://microsoft.sharepoint.com/:v:/t/WorkforceAccelerationWFATeam/cQp6M_ryJE3kSLjVuJ7vTr1HEgUCoKh23ObDrzrFlk7OUNxbLQ' },
        ],
      },
      {
        id: 'w1-day3-pm',
        title: 'Day 3 — Afternoon Practice',
        description: 'Afternoon hands-on practice lab.',
        day: 3,
        resources: [
          { id: 'w1-d3pm-lab', title: 'Lab Practice Guide', type: 'guide', url: 'https://microsoft.sharepoint.com/:w:/t/WorkforceAccelerationWFATeam/cQqrlL4ca_GPQZDILlS_aYbzEgUCNWhhms1IM8N9izzgDM7WyA' },
        ],
      },
      {
        id: 'w1-day4-am',
        title: 'Day 4 — Work Redesign: Rethinking the Work Itself — Not Just Making It Faster',
        description: 'Morning session content.',
        day: 4,
        resources: [
          { id: 'w1-d4am-ppt', title: 'Presentation', type: 'deck', url: 'https://microsoft.sharepoint.com/:p:/t/WorkforceAccelerationWFATeam/cQrG4INUJmIaTpFuGIGMtNy4EgUCw78q2Oqffir1WaFFgdDhNQ' },
          { id: 'w1-d4am-guide', title: 'Facilitator Guide', type: 'guide', url: 'https://microsoft.sharepoint.com/:w:/t/WorkforceAccelerationWFATeam/cQqUdR3HyhfhQq60nkYsPZuhEgUCx-A7s4qH7Z4cDgAiTQTm5Q' },
          { id: 'w1-d4am-video', title: 'Video Talk Track Prep', type: 'video', url: 'https://microsoft.sharepoint.com/:v:/t/WorkforceAccelerationWFATeam/cQoGatFzWXpGTphnVJ3n9X9wEgUCaK4NdYooMwDano_Kirixuw' },
        ],
      },
      {
        id: 'w1-day4-pm',
        title: 'Day 4 — Afternoon Practice',
        description: 'Afternoon hands-on practice lab.',
        day: 4,
        resources: [
          { id: 'w1-d4pm-lab', title: 'Lab Practice Guide', type: 'guide', url: 'https://microsoft.sharepoint.com/:w:/t/WorkforceAccelerationWFATeam/cQrVYhmryGRtSrFt70JWlrq9EgUCml6hCk4Gy2NgyXx704Hjaw' },
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

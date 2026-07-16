import { type Session } from './nonEngAgenda';

export { type Resource, type Session } from './nonEngAgenda';

export const engSessions: Session[] = [
  {
    id: 'eng-1-kickoff',
    title: 'Kickoff, Icebreaker, & Mindset',
    description: 'Opening session establishing the AI-first operating model, program structure, and cohort norms.',
    resources: [
      { id: 'eng-1-recording', title: 'Session Recording', type: 'video', url: 'https://microsoft.sharepoint.com/:v:/r/teams/WorkforceAccelerationWFATeam/_layouts/15/stream.aspx?id=%2Fteams%2FWorkforceAccelerationWFATeam%2FShared%20Documents%2FCamp%20AIR%20Source%20of%20Truth%2FEngineer%20Recordings%2FEngineering%20Curriculum%2F1%2EKickoffIceBreakerMindset%2F1%2EKickoffIcebreakerMindset%2Emp4&share=cQrxlieQ3CJKQrXLOVjr3YXoEgUCqXpXTPu7ebX6RK2lMsJVDw' },
    ],
  },
  {
    id: 'eng-2-github-cli',
    title: 'GitHub CLI',
    description: 'Deep dive into GitHub CLI workflows and AI-powered development from the command line.',
    resources: [
      { id: 'eng-2-recording', title: 'Session Recording', type: 'video', url: 'https://microsoft.sharepoint.com/:v:/r/teams/WorkforceAccelerationWFATeam/_layouts/15/stream.aspx?id=%2Fteams%2FWorkforceAccelerationWFATeam%2FShared%20Documents%2FCamp%20AIR%20Source%20of%20Truth%2FEngineer%20Recordings%2FEngineering%20Curriculum%2F2%2EGithubCLI%2F2%2EGithubCLI%2Emp4&share=cQoVFi6jrB5NSpV7LzWrHzEPEgUCTP4%5FW6cFqU5PPemExIez6g' },
      { id: 'eng-2-ppt', title: 'Presentation', type: 'deck', url: 'https://microsoft.sharepoint.com/:p:/t/WorkforceAccelerationWFATeam/cQpmnHcAVKj7TqyWNEU9vWiIEgUC6Mzd_wftPrHbxx5YqJ8uYA' },
      { id: 'eng-2-labs', title: 'Practice Labs', type: 'lab', url: 'https://microsoft.sharepoint.com/:w:/t/WorkforceAccelerationWFATeam/cQo-DXD68cwVSJFfRsEIyKAKEgUCOiwMnrEbTH3OlsIvdHYWgQ' },
    ],
  },
  {
    id: 'eng-3-copilot-app',
    title: 'GitHub Copilot App',
    description: 'Hands-on exploration of GitHub Copilot capabilities for accelerating engineering workflows.',
    resources: [
      { id: 'eng-3-recording', title: 'Session Recording', type: 'video', url: 'https://microsoft.sharepoint.com/:v:/r/teams/WorkforceAccelerationWFATeam/_layouts/15/stream.aspx?id=%2Fteams%2FWorkforceAccelerationWFATeam%2FShared%20Documents%2FCamp%20AIR%20Source%20of%20Truth%2FEngineer%20Recordings%2FEngineering%20Curriculum%2F3%2EGithubApp%2F3%2EGithubApp%2Emp4&share=cQpAhq5CoY8pRJ7UaGJpJzR4EgUCFGRxGOmDmyWq9qx0vMYqng' },
      { id: 'eng-3-labs', title: 'Practice Labs', type: 'lab', url: 'https://microsoft.sharepoint.com/:w:/t/WorkforceAccelerationWFATeam/cQq8x39Ohd7hQriWtOe4TSa5EgUCfVolHNxkGIMoKptTGXEOYg' },
    ],
  },
  {
    id: 'eng-4-mcp-servers',
    title: 'MCP Servers',
    description: 'Building and consuming Model Context Protocol servers for extensible AI tooling.',
    resources: [
      { id: 'eng-4-recording', title: 'Session Recording', type: 'video', url: 'https://microsoft.sharepoint.com/:v:/r/teams/WorkforceAccelerationWFATeam/_layouts/15/stream.aspx?id=%2Fteams%2FWorkforceAccelerationWFATeam%2FShared%20Documents%2FCamp%20AIR%20Source%20of%20Truth%2FEngineer%20Recordings%2FEngineering%20Curriculum%2F4%2EMCPServers%2F4%2EMCPServers%2Emp4&share=cQp1AzGSvotsQ6MEfUF%2Dcp61EgUCa9TBstAc5ge4y4SBmSS4%5Fg' },
      { id: 'eng-4-ppt', title: 'Presentation', type: 'deck', url: 'https://microsoft.sharepoint.com/:p:/t/WorkforceAccelerationWFATeam/cQqQfHYgU8JrS6g5Jh6ch1SeEgUC3hL4KBYpTi2gALJrJ7TaZA' },
      { id: 'eng-4-labs', title: 'Practice Labs', type: 'lab', url: 'https://microsoft.sharepoint.com/:u:/r/teams/WorkforceAccelerationWFATeam/Shared%20Documents/Forms/AllItems.aspx?id=%2Fteams%2FWorkforceAccelerationWFATeam%2FShared%20Documents%2FCamp%20AIR%20Source%20of%20Truth%2FEngineer%20Recordings%2FEngineering%20Curriculum%2F4%2EMCPServers%2Fcampair%2Dmcp%2Ezip&parent=%2Fteams%2FWorkforceAccelerationWFATeam%2FShared%20Documents%2FCamp%20AIR%20Source%20of%20Truth%2FEngineer%20Recordings%2FEngineering%20Curriculum%2F4%2EMCPServers&p=true&share=cQp%2DaumgB3EKSLvJaSXjDX40EgUCWD7%2DXvPCmMuJjP3MvlOXQQ' },
    ],
  },
  {
    id: 'eng-5-scout',
    title: 'Scout',
    description: 'Leveraging Scout for intelligent code exploration and AI-assisted navigation.',
    resources: [
      { id: 'eng-5-recording', title: 'Session Recording', type: 'video', url: 'https://microsoft.sharepoint.com/:v:/r/teams/WorkforceAccelerationWFATeam/_layouts/15/stream.aspx?id=%2Fteams%2FWorkforceAccelerationWFATeam%2FShared%20Documents%2FCamp%20AIR%20Source%20of%20Truth%2FEngineer%20Recordings%2FEngineering%20Curriculum%2F5%2EScout%2F5%2EScout%2Emp4&share=cQoXfZLgrQsQSoenEG7WC6JpEgUCEe4Pj5ln6O56cy4PMmRvOQ' },
      { id: 'eng-5-ppt', title: 'Presentation', type: 'deck', url: 'https://microsoft.sharepoint.com/:p:/t/WorkforceAccelerationWFATeam/cQp6TrpX2GYNSp5yhAb6TtJ8EgUCy5ogRRFl4GXtadbeCJLhqQ' },
      { id: 'eng-5-labs', title: 'Practice Labs', type: 'lab', url: 'https://microsoft.sharepoint.com/:w:/t/WorkforceAccelerationWFATeam/cQq0y9kOKsyuSamSD8dSjFhMEgUCna1kAte62ERtKhwzKaJwUQ' },
    ],
  },
  {
    id: 'eng-6-agency',
    title: 'Agency',
    description: 'Understanding agentic patterns and building AI agents for engineering workflows.',
    resources: [
      { id: 'eng-6-recording', title: 'Session Recording', type: 'video', url: 'https://microsoft.sharepoint.com/:v:/r/teams/WorkforceAccelerationWFATeam/_layouts/15/stream.aspx?id=%2Fteams%2FWorkforceAccelerationWFATeam%2FShared%20Documents%2FCamp%20AIR%20Source%20of%20Truth%2FEngineer%20Recordings%2FEngineering%20Curriculum%2F6%2EAgency%2F6%2EAgency%2Emp4&share=cQp7rleWe%5FrfQJCBOujC%2Dt2NEgUCX%2BOdC0Vv482U4GdPcn67Ng' },
      { id: 'eng-6-ppt', title: 'Presentation', type: 'deck', url: 'https://microsoft.sharepoint.com/:p:/t/WorkforceAccelerationWFATeam/cQqLnr5F9y9qS7jPRsDjuXPkEgUC953qM7Bhyy9nJNJ7JuSsyg' },
      { id: 'eng-6-labs', title: 'Practice Labs', type: 'lab', url: 'https://microsoft.sharepoint.com/:w:/t/WorkforceAccelerationWFATeam/cQoBXYmN9EVSQ7lJZxlckSFQEgUCNlbsNTIMxXCqMkTcK9zIlw' },
    ],
  },
  {
    id: 'eng-7-bluebird',
    title: 'Bluebird',
    description: 'Exploring Bluebird capabilities for next-generation AI-powered development.',
    resources: [
      { id: 'eng-7-recording', title: 'Session Recording', type: 'video', url: 'https://microsoft.sharepoint.com/:v:/r/teams/WorkforceAccelerationWFATeam/_layouts/15/stream.aspx?id=%2Fteams%2FWorkforceAccelerationWFATeam%2FShared%20Documents%2FCamp%20AIR%20Source%20of%20Truth%2FEngineer%20Recordings%2FEngineering%20Curriculum%2F7%2EBluebird%2F7%2EBluebird%5Fv2%2Emp4&share=cQr%5F6AXIu5icRIp4fPbt%2Djn%5FEgUCNSw%2Dl94IyLNxxMPBxbOYtQ' },
      { id: 'eng-7-ppt', title: 'Presentation', type: 'deck', url: 'https://microsoft.sharepoint.com/:p:/t/WorkforceAccelerationWFATeam/cQrzzrcO2Hm4Ro7--TbYMmTREgUCJt5aj8I89MDjIT9nKRQHcA' },
      { id: 'eng-7-labs', title: 'Practice Labs', type: 'lab', url: 'https://microsoft.sharepoint.com/:w:/t/WorkforceAccelerationWFATeam/cQo7J0jA7U86QZpoOxQLNyklEgUCDaFTq1Koxg-mELL8ESMwGw' },
    ],
  },
  {
    id: 'eng-8-vibe-coding',
    title: 'Vibe Coding',
    description: 'Embracing flow-state development with AI pair programming techniques.',
    resources: [
      { id: 'eng-8-recording', title: 'Session Recording', type: 'video', url: 'https://microsoft.sharepoint.com/:v:/r/teams/WorkforceAccelerationWFATeam/_layouts/15/stream.aspx?id=%2Fteams%2FWorkforceAccelerationWFATeam%2FShared%20Documents%2FCamp%20AIR%20Source%20of%20Truth%2FEngineer%20Recordings%2FEngineering%20Curriculum%2F8%2EVibeCoding%2F8%2EVibeCoding%2Emp4&share=cQrJiltue1fOR6ESEocFH20hEgUCG51fHgt7bdrfABZz4VHlRw' },
      { id: 'eng-8-ppt', title: 'Presentation', type: 'deck', url: 'https://microsoft.sharepoint.com/:p:/t/WorkforceAccelerationWFATeam/cQpeaknFW6KBQ4tF2rT39TQGEgUC1Qtuu5Y7o2xRND0IhtZ39A' },
      { id: 'eng-8-labs', title: 'Practice Labs', type: 'lab', url: 'https://microsoft.sharepoint.com/:w:/t/WorkforceAccelerationWFATeam/cQo7J0jA7U86QZpoOxQLNyklEgUCDaFTq1Koxg-mELL8ESMwGw' },
    ],
  },
  {
    id: 'eng-9-responsible-ai',
    title: 'Responsible AI',
    description: 'Principles and practices for building AI systems responsibly and ethically.',
    resources: [
      { id: 'eng-9-recording', title: 'Session Recording', type: 'video', url: 'https://microsoft.sharepoint.com/:v:/r/teams/WorkforceAccelerationWFATeam/_layouts/15/stream.aspx?id=%2Fteams%2FWorkforceAccelerationWFATeam%2FShared%20Documents%2FCamp%20AIR%20Source%20of%20Truth%2FEngineer%20Recordings%2FEngineering%20Curriculum%2F9%2ERAI%2F9%2ERAI%2Emp4&share=cQoD8%2DSo5RZ6T5gDPkTa4SS%2DEgUCfvum49K3y%2DbRrRZK7lA42A' },
      { id: 'eng-9-ppt', title: 'Presentation', type: 'document', url: 'https://microsoft.sharepoint.com/:w:/t/WorkforceAccelerationWFATeam/cQojboA3HEiERZicpGzxynBaEgUCnOjakIg3tutKYgS2qBcCmQ' },
      { id: 'eng-9-labs', title: 'Practice Labs', type: 'lab', url: 'https://microsoft.sharepoint.com/:w:/t/WorkforceAccelerationWFATeam/cQqhlL4ji0CxT5vpAQW6CaOrEgUCcfdqT-8SW4a8Ede_g2TRLg' },
    ],
  },
  {
    id: 'eng-10-evaluation',
    title: 'Evaluation',
    description: 'Measuring and evaluating AI system performance, quality, and impact.',
    resources: [
      { id: 'eng-10-recording', title: 'Session Recording', type: 'video', url: 'https://microsoft.sharepoint.com/:v:/r/teams/WorkforceAccelerationWFATeam/_layouts/15/stream.aspx?id=%2Fteams%2FWorkforceAccelerationWFATeam%2FShared%20Documents%2FCamp%20AIR%20Source%20of%20Truth%2FEngineer%20Recordings%2FEngineering%20Curriculum%2F10%2EEvaluation%2F10%2EEvaluation%2Emp4&share=cQqJPPB4QsbhT7%5Fb02SZqiKXEgUC%2DR7FUL%5Fi31P1yDH%5FX7%2Df4g' },
      { id: 'eng-10-ppt', title: 'Presentation', type: 'deck', url: 'https://microsoft.sharepoint.com/:p:/t/WorkforceAccelerationWFATeam/cQp73ssZRfQZTLgC1ynqwwXbEgUCulhtuJTZOV_so8rqU214OQ' },
      { id: 'eng-10-labs', title: 'Practice Labs', type: 'lab', url: 'https://microsoft.sharepoint.com/:w:/t/WorkforceAccelerationWFATeam/cQrrz-13kWssR4cXxEQ2eUtgEgUCYguTW360JwjpGvxE1tmBwQ' },
    ],
  },
  {
    id: 'eng-11-gemba-walk',
    title: 'Gemba Walk',
    description: 'Applying Gemba Walk methodology to observe, learn, and improve AI-first engineering practices.',
    resources: [
      { id: 'eng-11-recording', title: 'Session Recording', type: 'video', url: 'https://microsoft.sharepoint.com/:v:/r/teams/WorkforceAccelerationWFATeam/_layouts/15/stream.aspx?id=%2Fteams%2FWorkforceAccelerationWFATeam%2FShared%20Documents%2FCamp%20AIR%20Source%20of%20Truth%2FEngineer%20Recordings%2FEngineering%20Curriculum%2F11%2EGembaWalk%2F11%2EGembaWalk%2Emp4&share=cQpudiShebP0Q7g7ja77hoR7EgUCe27icf0Ws3Ay%5F8LAgkhsmQ' },
      { id: 'eng-11-ppt', title: 'Presentation', type: 'deck', url: 'https://microsoft.sharepoint.com/:p:/t/WorkforceAccelerationWFATeam/cQpcSMeq4BncQrGJed1p0ZZfEgUCeTHEg8vtZF56cVjv6Vc55w' },
      { id: 'eng-11-labs', title: 'Practice Labs', type: 'deck', url: 'https://microsoft.sharepoint.com/:p:/t/WorkforceAccelerationWFATeam/cQrILIqvZOsqS54GK0OW4GieEgUCpELKRGFFj7L5jKoonBMEEA' },
    ],
  },
];

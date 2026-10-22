export const CREW_FLOW_STEPS = [
  {
    title: "Make a builder profile",
    short: "Builder profile",
    readout: "PROFILE READY · SKILLS + INTERESTS",
    description: "Share your skills, interests, and availability so project owners and other builders can see what you bring.",
  },
  {
    title: "Discover a project",
    short: "Project discovery",
    readout: "PROJECT FOUND · REVIEW THE BRIEF",
    description: "Browse project briefs, compare requested skills, and review the project's stage and owner before deciding whether to apply.",
  },
  {
    title: "Request to join",
    short: "Owner review",
    readout: "REQUEST SENT · OWNER DECIDES",
    description: "Explain your interest, contribution, and availability. The project owner reviews each request and chooses who joins.",
  },
  {
    title: "Build with your crew",
    short: "Crew workspace",
    readout: "ACCEPTED · CREW COORDINATES",
    description: "Accepted members coordinate through realtime discussion and shared context connected to their project.",
  },
  {
    title: "Optional GitHub context",
    short: "Read-only repository",
    readout: "OPTIONAL · READ ONLY",
    description: "A project owner can connect repository details. Project members can view that context, while access remains optional and read only.",
  },
] as const;

export const RESTING_STEP = 0;
export const FLOW_ART_LABEL = "An isometric CrewLab project assembly bench. A shared project brief rides a guided carriage through five mechanisms: builder profiles, project discovery, owner review of join requests, a crew worktable, and an optional read-only repository reader. Select a step to move the brief carriage to that station.";

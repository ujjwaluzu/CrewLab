export type ResourceSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type ResourceArticle = {
  slug: string;
  title: string;
  description: string;
  introduction: string;
  sections: ResourceSection[];
  relatedPath: string;
  relatedLabel: string;
};

export const RESOURCES: ResourceArticle[] = [
  {
    slug: "find-technical-cofounder-india",
    title: "How to Find a Technical Cofounder in India",
    description:
      "A practical guide for Indian founders seeking a technical cofounder: define the role, share the work, and assess how you build together.",
    introduction:
      "A technical cofounder is a long-term partner in shaping a product, not simply a developer assigned a list of tasks. Before you search, make the opportunity clear enough for someone to decide whether they want to build it with you.",
    sections: [
      {
        heading: "Define what the technical partner will own",
        paragraphs: [
          "Write down the product problem, who experiences it, what you have learned so far, and what you want to test next. Be candid about what is still uncertain. A clear problem and an honest account of progress make a stronger starting point than a polished pitch with unanswered questions.",
          "Describe the work you need help with in terms of outcomes. For example, explain whether you need someone to shape a first prototype, make architecture decisions, or build a mobile experience. List useful skills without turning the role into a rigid job specification.",
        ],
      },
      {
        heading: "Look for shared intent and complementary strengths",
        paragraphs: [
          "A good technical partner may bring more than coding ability: product judgment, customer curiosity, and comfort making decisions with limited information can matter too. At the same time, be clear about the strengths you bring and the responsibilities you intend to own.",
          "Use founder communities, professional networks, startup events, and project collaboration spaces to meet people. When you approach someone, share the project context and a specific reason you think your skills or interests could work well together.",
        ],
      },
      {
        heading: "Work together before making a long-term commitment",
        paragraphs: [
          "Choose a small, useful experiment: interview potential users, sketch a workflow, test a landing page, or build one narrow prototype. Agree on the goal, time available, and how you will communicate. Notice how each person handles feedback, ambiguity, and missed assumptions.",
          "Talk openly about decision making, availability, financial runway, expectations, and how responsibilities may change. Discuss ownership carefully and document agreements with qualified professional advice where needed; an informal conversation is not a substitute for legal guidance.",
        ],
      },
      {
        heading: "Make the project easy to understand",
        paragraphs: [
          "A useful project brief helps potential cofounders decide whether they want to learn more. Include the problem, intended audience, current stage, what has been tried, skills needed, and what a first contribution could look like.",
        ],
        bullets: [
          "State the problem and who has it.",
          "Describe the current product or research stage honestly.",
          "Say which responsibilities you will take on.",
          "Set expectations for time, communication, and the next decision.",
        ],
      },
    ],
    relatedPath: "/find-cofounder",
    relatedLabel: "Explore how CrewLab helps founders find a cofounder",
  },
  {
    slug: "questions-before-joining-startup-as-cofounder",
    title: "Questions to Discuss Before Joining a Startup as a Cofounder",
    description:
      "Use these conversations to understand a startup's goals, roles, time expectations, decisions, and risks before joining as a cofounder.",
    introduction:
      "Joining as a cofounder means sharing responsibility while the company and product are still taking shape. Before committing, make time for direct conversations about the work, the people, and the choices you will need to make together.",
    sections: [
      {
        heading: "Understand the problem and the evidence",
        paragraphs: [
          "Ask who the intended users are, what problem they face, and what the team has done to understand it. Learn which assumptions have been tested and which are still guesses. You do not need complete certainty, but you should know what the team plans to learn next.",
        ],
        bullets: [
          "What have users said or done that supports this direction?",
          "What is the next meaningful product milestone?",
          "What would cause the team to change course?",
        ],
      },
      {
        heading: "Make roles and decision making explicit",
        paragraphs: [
          "Discuss who owns product, engineering, customer discovery, sales, operations, and hiring today. Roles will change as the company grows, so agree on how you will revisit responsibilities when the work changes.",
          "Talk through how you will make decisions when you disagree. Clarify which decisions need joint agreement, who can decide day to day, and how unresolved disagreements will be handled.",
        ],
      },
      {
        heading: "Compare expectations and constraints",
        paragraphs: [
          "Be honest about hours, location, communication habits, outside commitments, financial needs, and how long each person can work under current conditions. A mismatch in availability is easier to address before it becomes a missed expectation.",
          "Ask what each person needs from the partnership to do their best work. Discuss feedback, conflict, and how you will raise concerns early rather than letting them become personal.",
        ],
      },
      {
        heading: "Document important agreements with appropriate advice",
        paragraphs: [
          "If you discuss equity, compensation, intellectual property, company ownership, or exit scenarios, record the questions and seek qualified legal and financial advice for your situation. Terms depend on the people and jurisdiction involved; a general article cannot determine what is right for your company.",
          "Before committing, make sure each person can explain the same understanding of responsibilities, time commitment, decision rights, and next steps. Then agree on a short review point to check whether the partnership is working as expected.",
        ],
      },
    ],
    relatedPath: "/find-cofounder",
    relatedLabel: "Find a project and potential cofounder on CrewLab",
  },
  {
    slug: "where-developers-find-startup-projects",
    title: "Where Developers Can Find Startup Projects to Join",
    description:
      "Learn how developers can find startup projects, check whether the team and scope fit, and make a useful first contribution.",
    introduction:
      "If you want to build with an early team, look for projects where the problem, current stage, and expectations are clear enough to judge. The right opportunity depends on what you want to learn, what you can contribute, and how much time you can commit.",
    sections: [
      {
        heading: "Choose places where project context is visible",
        paragraphs: [
          "Startup and builder communities, university entrepreneurship groups, hackathons, open source communities, and project discovery platforms can all surface opportunities. Prefer introductions that let you understand the idea and the team before you agree to do substantial work.",
          "A useful listing explains the product problem, what exists today, what skills are needed, and how interested people can contact or apply. A title alone is not enough to assess the opportunity.",
        ],
      },
      {
        heading: "Check the fit before you apply",
        paragraphs: [
          "Read the project brief and ask questions about scope, current users, team availability, communication, and the next milestone. Confirm whether the work is collaborative, paid, volunteer, educational, or another arrangement. Do not assume the arrangement from the word “startup.”",
          "Compare the needed skills with your experience and goals. A role can be a fit even if you do not match every listed technology, provided the team agrees on what you can own and where you will need support.",
        ],
      },
      {
        heading: "Send a specific introduction",
        paragraphs: [
          "Explain what interests you about the problem, what you have built or learned that is relevant, and how much time you can offer. Suggest one small next step, such as reviewing a prototype or discussing a well-scoped feature.",
          "Keep the first contribution bounded. Agree on its purpose and definition of done before investing significant unpaid time, and protect private information and existing work appropriately.",
        ],
      },
      {
        heading: "Build trust through a small collaboration",
        paragraphs: [
          "A short working session or scoped experiment can reveal more than a long list of credentials. Notice how the team communicates, responds to feedback, shares context, and follows through. Revisit the arrangement if expectations or scope change.",
        ],
      },
    ],
    relatedPath: "/explore",
    relatedLabel: "Explore startup projects looking for collaborators",
  },
  {
    slug: "write-startup-project-listing",
    title: "How to Write a Startup Project Listing That Attracts Collaborators",
    description:
      "Create a clear startup project listing with the problem, stage, skills needed, time expectations, and a straightforward way to join.",
    introduction:
      "People are more likely to consider a project when they can understand the problem, the work, and what joining would involve. A useful listing helps potential collaborators make an informed choice and gives you better context for reviewing requests.",
    sections: [
      {
        heading: "Start with the problem and intended user",
        paragraphs: [
          "Describe who experiences the problem and what makes it worth solving. Explain what you have learned from potential users and which parts of the idea still need validation. This gives builders a reason to care beyond the feature list.",
        ],
      },
      {
        heading: "Show the current stage and next milestone",
        paragraphs: [
          "Say whether the project is at the idea, research, prototype, or launched stage. Mention relevant work already completed and what the team wants to accomplish next. Avoid presenting an early concept as a finished product or implying traction you cannot support.",
        ],
      },
      {
        heading: "Describe contribution areas, not just titles",
        paragraphs: [
          "List the skills that would help and connect them to specific outcomes. Instead of saying only “need a developer,” explain whether you need someone to prototype a user flow, build an API, improve accessibility, or evaluate a technical approach.",
        ],
        bullets: [
          "The outcome or decision each contributor could help with.",
          "Skills that are essential and skills that are optional.",
          "Expected availability and communication rhythm.",
          "Any constraints, tools, or experience needed to get started.",
        ],
      },
      {
        heading: "Be clear about the working arrangement",
        paragraphs: [
          "Explain whether the opportunity is paid, volunteer, educational, or based on another arrangement. State how the team handles ownership and credit at a high level, and get suitable professional advice before making legal or financial promises.",
          "Close with a simple next step: what someone should include in a request and when they can expect a response. Update the listing when the scope, stage, or needed skills change.",
        ],
      },
    ],
    relatedPath: "/startup-teams",
    relatedLabel: "Build a startup team around a clear project brief",
  },
  {
    slug: "choose-side-project-and-contribute",
    title: "Side Projects for Developers: How to Choose One and Contribute Well",
    description:
      "Choose a side project that fits your goals and schedule, agree on a useful contribution, and collaborate with clear expectations.",
    introduction:
      "A good side project is one you can contribute to consistently and learn from. Choose it by looking at the work, the people, and the time involved rather than chasing a technology label alone.",
    sections: [
      {
        heading: "Start with your goal and available time",
        paragraphs: [
          "Decide what you want from the project: practice with a tool, work with a team, explore a problem, or help ship a useful product. Be realistic about the time you can offer each week and how long you can sustain it.",
          "A smaller commitment you can keep is more useful to a team than an ambitious promise that competes with work, study, or rest. Share your constraints early so the owner can plan around them.",
        ],
      },
      {
        heading: "Evaluate the team and the project scope",
        paragraphs: [
          "Look for a clear problem, a current stage, a next milestone, and a project owner who can answer questions. Ask how contributions are reviewed, how decisions are made, and what tools the team uses to coordinate.",
          "Confirm what kind of participation is expected and whether the project is paid, volunteer, or otherwise arranged. If the terms are unclear, ask before beginning work.",
        ],
      },
      {
        heading: "Agree on a first contribution",
        paragraphs: [
          "Choose a bounded task that helps the project and fits your skills. Agree on the expected result, how you will share progress, and who will review the work. Starting with a small deliverable lets everyone learn how collaboration feels.",
        ],
        bullets: [
          "Confirm the goal and acceptance criteria.",
          "Ask where the relevant files, design decisions, or product notes live.",
          "Share progress and blockers before they become surprises.",
          "Ask for feedback and document decisions that affect the next person.",
        ],
      },
      {
        heading: "Review the fit as the project changes",
        paragraphs: [
          "Side projects evolve. Revisit your time, responsibilities, and interest when the scope changes or a milestone is complete. If you need to pause, communicate clearly and leave notes that help the team continue.",
          "Choose projects where the work and expectations are clear enough for you to contribute with care. A strong side project can create useful experience and relationships, even when the original idea changes direction.",
        ],
      },
    ],
    relatedPath: "/side-projects",
    relatedLabel: "Find side projects to join on CrewLab",
  },
];

export function getResource(slug: string) {
  return RESOURCES.find((resource) => resource.slug === slug);
}

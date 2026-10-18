export type Faq = {
  question: string;
  answer: string;
};

export const faqs: Faq[] = [
  {
    question: "Where can I find a technical cofounder for my startup?",
    answer:
      "CrewLab is being built to help founders find a technical cofounder through shared project context. Prepare a clear description of your startup idea, the technical skills you need, and the work you can contribute. When CrewLab opens, interested builders will be able to review projects and request to join.",
  },
  {
    question: "How do I find people to build my startup idea?",
    answer:
      "CrewLab is designed to let founders describe a project and the skills they need, while builders explore ideas and request to join. Project owners review requests and decide who joins the team. Join the waitlist for early access updates.",
  },
  {
    question: "I have skills but no idea. Can I join projects on CrewLab?",
    answer:
      "CrewLab is being built for people who have skills but want to find a project. When the product opens, builders will be able to explore project details and requested skills, then ask the owner to join.",
  },
  {
    question: "How does CrewLab help founders find cofounders?",
    answer:
      "CrewLab puts the project at the center of discovery. Founders describe the idea and needed skills; builders can review the context and request to join. The project owner reviews requests and chooses the crew. CrewLab does not automatically decide who is a compatible cofounder.",
  },
  {
    question: "Can developers find side projects to collaborate on?",
    answer:
      "CrewLab is designed for developers looking for a project to contribute to. Builders will be able to review project descriptions, stages, and requested skills before asking an owner to join.",
  },
  {
    question: "Is CrewLab a good place for students to find project teams?",
    answer:
      "CrewLab is intended to help students discover startup and side projects and explain what they can contribute. Each project owner reviews requests. Check the project details and expectations before applying.",
  },
  {
    question: "What kinds of people join the CrewLab builder community?",
    answer:
      "CrewLab is for founders with project ideas and builders who bring skills in development, design, product, marketing, research, and other areas. The community is intended for people who want to build with a team.",
  },
  {
    question: "What tools does CrewLab give startup teams once they match?",
    answer:
      "CrewLab's planned workspace includes project discussions, a dashboard for projects and join requests, calendar events, and optional read-only GitHub context. These features are being developed; check the product pages for current availability.",
  },
  {
    question: "How long does it take to find project teammates on CrewLab?",
    answer:
      "There is no fixed timeline or guarantee. The project owner reviews each request, and timing depends on the people involved. A clear project description and a specific explanation of your skills and availability help both sides assess fit.",
  },
  {
    question: "Is CrewLab free for side project collaboration and startup teams?",
    answer:
      "CrewLab is currently collecting waitlist signups for early access. Public launch pricing and availability have not been announced. Join the waitlist to receive product updates.",
  },
];

export const pageFaqs: Record<string, { title: string; intro: string; items: Faq[] }> = {
  "/about": {
    title: "About CrewLab",
    intro: "How the CrewLab community brings project owners and builders together.",
    items: [
      { question: "What is CrewLab?", answer: "CrewLab is a project collaboration community for people with an idea to build and people who want to contribute their skills. Project owners share context, review join requests, and form their own crews." },
      { question: "Who is CrewLab for?", answer: "CrewLab is designed for founders and project owners as well as developers, designers, marketers, students, and other builders looking for a project to join." },
      { question: "How is CrewLab different from a job board?", answer: "CrewLab centers discovery around a project, its stage, and the skills it needs. Builders can understand the work and request to join; project owners review requests and decide who becomes part of the crew." },
      { question: "Can I use CrewLab now?", answer: "CrewLab is preparing for early access. Join the waitlist to receive updates as access becomes available." },
    ],
  },
  "/find-cofounder": {
    title: "FAQs about finding a cofounder",
    intro: "What founders and potential cofounders should know before forming a team.",
    items: [
      { question: "How can I find a cofounder for my startup idea?", answer: "Describe the problem, what you have learned so far, the project's current stage, and the skills you need. CrewLab is designed to help builders review that context and request to join; you decide who joins your project." },
      { question: "Can I find a technical cofounder on CrewLab?", answer: "CrewLab is intended for founders seeking collaborators with technical and nontechnical skills. Share the specific work you need help with so developers can judge whether the project fits their interests and experience." },
      { question: "Does CrewLab automatically match cofounders?", answer: "No. CrewLab helps people discover projects and send join requests, while each project owner reviews requests and chooses their crew. It does not promise an automatic or guaranteed cofounder match." },
      { question: "What should I discuss before making someone a cofounder?", answer: "Talk through roles, time commitment, decision making, goals, and how you will handle disagreements. Discuss compensation, equity, and intellectual property carefully, and get qualified advice before making formal agreements." },
    ],
  },
  "/find-developers": {
    title: "FAQs about finding developers",
    intro: "How project owners can explain technical work and how developers can assess a fit.",
    items: [
      { question: "Where can I find developers for my startup project?", answer: "CrewLab is being built to connect project owners with developers and other builders looking for work to contribute to. A clear project description and specific skill needs help developers decide whether to request to join." },
      { question: "What should I include when asking developers to join?", answer: "Explain the problem, what exists today, the next milestone, the technical work involved, and your expected time commitment. Be clear about the working arrangement and how the team will make decisions." },
      { question: "Can developers join a project without being a cofounder?", answer: "Projects can need many kinds of contributions, from a defined technical task to ongoing collaboration. Owners describe what they need, and interested developers can explain the role and availability they have in mind." },
      { question: "Does CrewLab guarantee that a developer will join my project?", answer: "No. CrewLab provides a way to present a project and review requests, but it cannot guarantee applications or a successful match. The project owner and builder decide whether the collaboration is a fit." },
    ],
  },
  "/startup-teams": {
    title: "FAQs about building a startup team",
    intro: "Forming a startup crew around clear responsibilities, expectations, and project context.",
    items: [
      { question: "How do I build a team for my startup?", answer: "Start by describing the user problem, the project's stage, its next goal, and the contributions needed. CrewLab lets interested builders review that context and request to join, while you stay responsible for choosing your team." },
      { question: "What roles can I look for on CrewLab?", answer: "Depending on the project, teams may need engineering, design, product, research, marketing, or other skills. Describe the outcomes you need instead of relying only on job titles." },
      { question: "Who decides which people join a startup project?", answer: "The project owner reviews incoming requests and decides who joins. Applicants can describe their interest, relevant skills, contribution, and availability." },
      { question: "Does CrewLab set equity or compensation for team members?", answer: "CrewLab does not set the terms of a team's working arrangement. Discuss pay, equity, ownership, and responsibilities directly, and seek qualified legal or financial advice where appropriate." },
    ],
  },
  "/side-projects": {
    title: "FAQs about joining side projects",
    intro: "Find a side project that fits your interests, skills, and available time.",
    items: [
      { question: "How can I find a side project to work on?", answer: "Look for a project with a clear problem, current stage, next milestone, and specific skills it needs. CrewLab is designed to help builders browse project context and request to join projects that fit." },
      { question: "Can I join a side project with limited free time?", answer: "Share the hours you can realistically contribute and agree on a bounded first task with the project owner. A clear, sustainable commitment helps the team plan around your availability." },
      { question: "Are CrewLab side projects paid?", answer: "The working arrangement depends on each project, and CrewLab does not set or guarantee payment. Ask the owner whether the work is paid, volunteer, educational, or arranged another way before committing." },
      { question: "Do I need to be an experienced developer to join?", answer: "No. Projects may need design, research, product, marketing, and other contributions alongside development. Review the listed needs and explain what you can contribute." },
    ],
  },
  "/student-projects": {
    title: "FAQs about student project teams",
    intro: "Finding collaborators for college projects, student startups, and portfolio work.",
    items: [
      { question: "Can students use CrewLab to find project teammates?", answer: "CrewLab is designed to help students discover projects and connect with people who have complementary skills. Project owners review requests, so explain your interests and the contribution you can make." },
      { question: "What kinds of student projects can I find?", answer: "Students can look for startup ideas, side projects, and other collaborative work described by project owners. Review each listing's goals, stage, skills, and expectations before applying." },
      { question: "Do I need professional experience to join a student project?", answer: "Requirements depend on the project. Be honest about what you have learned, what you can contribute, and where you want to grow; owners can then assess whether the fit makes sense." },
      { question: "How should students agree on project ownership and credit?", answer: "Discuss responsibilities, authorship, portfolio use, intellectual property, and time expectations before work begins. Put important agreements in writing and get appropriate advice when needed." },
    ],
  },
  "/features": {
    title: "FAQs about CrewLab features",
    intro: "What the CrewLab product is designed to help project owners and builders do.",
    items: [
      { question: "What features does CrewLab include?", answer: "CrewLab is designed around builder profiles, project discovery, join requests, owner-managed crews, project discussion, a dashboard, calendar events, and optional read-only GitHub context. Check the waitlist for updates on early access availability." },
      { question: "How do project join requests work?", answer: "A builder reviews a project's details and sends the owner a request explaining their interest and possible contribution. The owner reviews requests and decides who joins the crew." },
      { question: "What GitHub information can a project crew see?", answer: "If an owner connects a repository, project members can view relevant repository details such as commits, branches, issues, and pull requests. The connection is optional and member access is read-only; owners do not share their GitHub credentials." },
      { question: "Are all CrewLab features available now?", answer: "CrewLab is preparing for early access, so the public product is not generally available yet. Join the waitlist for updates about access and feature availability." },
    ],
  },
  "/how-it-works": {
    title: "FAQs about how CrewLab works",
    intro: "From sharing a project idea to forming a crew and coordinating the work.",
    items: [
      { question: "How does CrewLab work for project owners?", answer: "Owners describe a project, its stage, and the skills it needs. They can review builder requests and choose who joins their crew." },
      { question: "How does CrewLab work for builders looking for projects?", answer: "Builders create a profile, explore project descriptions and requested skills, then send a join request explaining their interest and contribution. The project owner decides whether to accept the request." },
      { question: "What happens after a builder is accepted?", answer: "Accepted members join the project crew and can use its discussion space to coordinate. Owners may also connect optional read-only GitHub context for project members." },
      { question: "Is CrewLab open to everyone yet?", answer: "CrewLab is preparing for early access. Join the waitlist to hear when access becomes available." },
    ],
  },
  "/explore": {
    title: "FAQs about exploring startup projects",
    intro: "Use project listings to understand the work before deciding whether to join.",
    items: [
      { question: "Are the projects on this page live opportunities?", answer: "The listings on this page are sample project examples that demonstrate the kinds of details builders can review. They are not live openings to join." },
      { question: "How do I decide whether a project is right for me?", answer: "Review its problem, stage, requested skills, next milestone, team context, and expected time commitment. Ask the owner questions about anything unclear before you commit." },
      { question: "How do I apply to join a CrewLab project?", answer: "When CrewLab opens, builders will be able to send a request to the project owner. Explain why the project interests you, what you can contribute, and how much time you can offer." },
      { question: "Can I share my own project if I do not find a fit?", answer: "CrewLab is designed for project owners to describe an idea and the skills they need, then form a crew from builder requests. Join the waitlist for updates about creating a project." },
    ],
  },
  "/waitlist": {
    title: "FAQs about the CrewLab waitlist",
    intro: "What to expect after signing up for early-access updates.",
    items: [
      { question: "What is the CrewLab waitlist for?", answer: "The waitlist is for people who want updates about CrewLab and early access. It does not guarantee a specific access date or placement." },
      { question: "When will CrewLab launch?", answer: "A public launch date has not been announced. Join the waitlist to receive updates as the product's availability develops." },
      { question: "Who should join the CrewLab waitlist?", answer: "Founders, project owners, developers, designers, students, and other builders interested in forming or joining project crews can sign up for updates." },
      { question: "Can I explore CrewLab before joining the waitlist?", answer: "Yes. You can read how the product works, review its features, and browse sample project examples on the site before signing up." },
    ],
  },
};

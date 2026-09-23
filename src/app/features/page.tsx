import Link from "next/link";

import { pageMetadata } from "@/lib/site";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Tickers from "@/components/Tickers";
import TornEdge from "@/components/TornEdge";
import Icon from "@/components/Icon";

import "./features.css";

export const metadata = pageMetadata({
  title: "Features",
  description:
    "What your crew can actually do on CrewLab: a shared project workspace, tasks and milestones, a team roster, discussions, progress tracking, and integrations designed to connect — a demo showcase with static sample content.",
  canonical: "/features",
});

const milestoneTasks = [
  {
    state: "done" as const,
    label: "Set up repository",
    meta: "alex · 2w ago",
  },
  {
    state: "done" as const,
    label: "Define project scope",
    meta: "sam · 2w ago",
  },
  {
    state: "now" as const,
    label: "Build first prototype",
    meta: "in progress",
  },
  {
    state: "todo" as const,
    label: "User testing",
    meta: "queued",
  },
];

const crew = [
  {
    name: "Alex",
    role: "Frontend",
    now: "Rebuilding the onboarding flow",
    color: "#F08A7A",
  },
  {
    name: "Maya",
    role: "UI/UX",
    now: "Polishing the beta screens",
    color: "#BFDCC8",
  },
  {
    name: "Jordan",
    role: "Backend",
    now: "Wiring up the study API",
    color: "#9CB8E8",
  },
  {
    name: "Sam",
    role: "Product",
    now: "Writing the beta launch plan",
    color: "#E9B44C",
  },
] as const;

const messages = [
  {
    initial: "M",
    color: "#BFDCC8",
    name: "Maya",
    time: "10:24",
    text: "I think we should simplify the onboarding flow before the beta.",
  },
  {
    initial: "A",
    color: "#F08A7A",
    name: "Alex",
    time: "10:31",
    text: "Agreed. I\u2019ll update the prototype and post the new flow.",
  },
  {
    initial: "J",
    color: "#9CB8E8",
    name: "Jordan",
    time: "10:38",
    text: "I\u2019ll handle the API changes once that\u2019s settled.",
  },
] as const;

const stages = [
  { word: "IDEA", state: "done" as const },
  { word: "BUILD", state: "done" as const },
  { word: "TEST", state: "now" as const },
  { word: "SHIP", state: "next" as const },
];

const tools = [
  {
    name: "GitHub",
    tag: "code",
    icon: (
      <svg className="f-tico" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
        <path d="M9 18c-4.51 2-5-2-7-2" />
      </svg>
    ),
  },
  {
    name: "Slack",
    tag: "chat",
    icon: (
      <svg className="f-tico" viewBox="0 0 24 24" aria-hidden="true">
        <rect x="13" y="2" width="4" height="9" rx="2" />
        <rect x="13" y="13" width="9" height="4" rx="2" />
        <rect x="7" y="13" width="4" height="9" rx="2" />
        <rect x="2" y="7" width="9" height="4" rx="2" />
      </svg>
    ),
  },
  {
    name: "Discord",
    tag: "chat",
    icon: <Icon name="discord" className="ic f-tico" />,
  },
  {
    name: "Google Calendar",
    tag: "schedule",
    icon: (
      <svg className="f-tico" viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3" y="4.5" width="18" height="16.5" rx="2" />
        <path d="M3 9.5h18M8 2.5v4M16 2.5v4" />
        <path d="M8.5 13.5h.01M12 13.5h.01M15.5 13.5h.01M8.5 16.5h.01M12 16.5h.01M15.5 16.5h.01" />
      </svg>
    ),
  },
  {
    name: "Notion",
    tag: "docs",
    icon: (
      <svg className="f-tico" viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3.5" y="3.5" width="17" height="17" rx="2" />
        <path d="M8.5 16.5v-9l7 9v-9" />
      </svg>
    ),
  },
];

function CheckGlyph() {
  return (
    <svg className="ic f-glyph-ic" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4.5 12.5l5 5L19.5 7" />
    </svg>
  );
}

export default function FeaturesPage() {
  return (
    <div className="features">
      <SiteHeader />
      <main id="top">
        <section className="f-hero">
          <div className="wrap f-hero-grid">
            <div>
              <p className="f-eyebrow">Features</p>
              <h1 className="f-title">
                <span className="d1">Everything your crew</span>
                <span className="d2">
                  needs to&nbsp;
                  <span className="f-hl">
                    <svg className="brush" viewBox="0 0 600 140" preserveAspectRatio="none" aria-hidden="true"><use href="#brush-f" /></svg>
                    <span>keep building.</span>
                  </span>
                </span>
              </h1>
              <p className="lede">From the first task to the final launch, CrewLab gives your team a shared place to organize the work, communicate, and keep moving.</p>
              <p className="f-hero-note">A product preview · every screen below is static demo content</p>
            </div>
            <div className="f-hero-art" aria-hidden="true">
              <div className="halftone" />
              <svg className="f-hbrush" viewBox="0 0 600 140" preserveAspectRatio="none"><use href="#brush-s" /></svg>
              <div className="f-hcard a">
                <div className="f-hc-top">
                  <span className="f-hc-name">StudySync</span>
                  <span className="f-chip">Building</span>
                </div>
                <div className="f-hc-pcts">
                  <b className="f-hc-pct">72%</b>
                  <span className="f-hc-lab">progress</span>
                </div>
                <div className="f-bar"><i style={{ width: "72%" }} /></div>
              </div>
              <div className="f-hcard b">
                <div className="f-hc-top"><span>Milestone 01 · Foundation</span><span>04 tasks</span></div>
                <div className="f-hc-task done"><CheckGlyph /><span>Set up repository</span></div>
                <div className="f-hc-task done"><CheckGlyph /><span>Define project scope</span></div>
                <div className="f-hc-task now"><Icon name="arrow" /><span>Build first prototype</span></div>
              </div>
              <div className="f-hcard c">
                <div className="f-hc-msg">
                  <span className="pip" style={{ background: "#BFDCC8" }}>M</span>
                  <span className="f-hc-msg-meta"><b>Maya</b><i>10:24</i></span>
                </div>
                <p>Let&apos;s simplify the onboarding flow before the beta.</p>
              </div>
              <span className="tape t1" />
              <span className="tape t2" />
              <span className="tag f-tag-1">static demo</span>
              <span className="tag f-tag-2">sample content</span>
            </div>
          </div>
        </section>

        <Tickers />

        <section className="pad f-workspace" id="workspace">
          <div className="wrap">
            <div className="sec-head">
              <div>
                <p className="f-label"><span>01</span> — Project workspace</p>
                <h2 className="h">One place for <em>the project.</em></h2>
              </div>
              <p>Keep the important parts of your project together. See what you&apos;re building, who&apos;s involved, what needs attention, and where things stand.</p>
            </div>
            <div className="f-stage">
              <svg className="brush f-sbrush" viewBox="0 0 600 140" aria-hidden="true"><use href="#brush-s" /></svg>
              <div className="frame">
                <div className="win" role="img" aria-label="Static demo of a CrewLab project workspace for the sample project StudySync, showing status Building, 72 percent progress, current milestone Beta prototype, a four person crew, and a few entries of recent activity">
                  <div className="w-body">
                    <aside className="w-side">
                      <div className="w-logo">CrewLab</div>
                      <a className="on">Overview</a><a>Tasks</a><a>Milestones</a><a>Discussions</a><a>Activity</a>
                      <div className="w-me"><span className="pip" style={{ background: "#E9B44C" }}>Y</span>You</div>
                    </aside>
                    <div className="w-main">
                      <div className="w-top">
                        <div><h4>StudySync</h4><p>Sample project · demo content</p></div>
                        <div className="f-wtop-right">
                          <span className="w-chip f-chip">Building</span>
                          <span className="w-new">+ New task</span>
                        </div>
                      </div>
                      <div className="f-wbar"><i style={{ width: "72%" }} /><span>72% complete</span></div>
                      <div className="w-stats">
                        <div className="w-stat"><b>Building</b><span>Status</span></div>
                        <div className="w-stat"><b>72%</b><span>Progress</span></div>
                        <div className="w-stat f-stat-long"><b>Beta prototype</b><span>Current milestone</span></div>
                        <div className="w-stat"><b>4</b><span>Crew members</span></div>
                      </div>
                      <div className="w-cols">
                        <div className="w-panel">
                          <h5>Current milestone · Beta prototype</h5>
                          <div className="w-row"><span className="dot">R</span><div className="t"><b>Set up repository</b><span>Done · 2 weeks ago</span></div></div>
                          <div className="w-row"><span className="dot">S</span><div className="t"><b>Define project scope</b><span>Done · 2 weeks ago</span></div></div>
                          <div className="w-row"><span className="dot">A</span><div className="t"><b>Build first prototype</b><span>In progress · Maya</span></div></div>
                          <div className="w-row"><span className="dot">J</span><div className="t"><b>User testing</b><span>Up next · Jordan</span></div></div>
                        </div>
                        <div className="w-panel act">
                          <h5>Recent activity</h5>
                          <div className="w-row"><span className="pip" style={{ background: "#F08A7A" }}>A</span><div className="t"><b>Alex updated the prototype</b><span>Onboarding flow · 2 hours ago</span></div></div>
                          <div className="w-row"><span className="pip" style={{ background: "#BFDCC8" }}>M</span><div className="t"><b>Maya posted an idea</b><span>Simplify onboarding · 4 hours ago</span></div></div>
                          <div className="w-row"><span className="pip" style={{ background: "#9CB8E8" }}>J</span><div className="t"><b>Jordan pushed 3 commits</b><span>Study API · 1 day ago</span></div></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <span className="tag f-stage-tag">demo · sample data</span>
            </div>
          </div>
        </section>

        <section className="pad f-tasks" id="tasks">
          <div className="wrap">
            <div className="sec-head">
              <div>
                <p className="f-label"><span>02</span> — Tasks &amp; milestones</p>
                <h2 className="h">Turn an idea into <em>something you can actually build.</em></h2>
              </div>
              <p>Break ambitious ideas into smaller pieces. Give your crew clear milestones and tasks so everyone knows what needs to happen next.</p>
            </div>
            <div className="f-tasks-grid">
              <div className="f-board">
                <div className="f-board-top">
                  <span className="f-live">Milestone 01</span>
                  <span>04 tasks</span>
                </div>
                <h3>Foundation</h3>
                <ol className="f-tlist">
                  {milestoneTasks.map((task) => (
                    <li className={`f-task ${task.state}`} key={task.label}>
                      {task.state === "done" && (
                        <>
                          <span className="f-tglyph"><CheckGlyph /></span>
                          <span className="visually-hidden">Done: </span>
                        </>
                      )}
                      {task.state === "now" && (
                        <>
                          <span className="f-tglyph"><Icon name="arrow" /></span>
                          <span className="visually-hidden">In progress: </span>
                        </>
                      )}
                      {task.state === "todo" && (
                        <>
                          <span className="f-tglyph" aria-hidden="true" />
                          <span className="visually-hidden">Up next: </span>
                        </>
                      )}
                      <span className="f-task-label">{task.label}</span>
                      <span className="f-tmeta">{task.meta}</span>
                    </li>
                  ))}
                </ol>
                <div className="f-board-foot">
                  <span>2 of 4 complete</span>
                  <span>demo content</span>
                </div>
              </div>
              <div className="f-tasks-side">
                <div className="f-board alt">
                  <div className="f-board-top">
                    <span>Milestone 02</span>
                    <span>beta · next</span>
                  </div>
                  <h3>Beta polish</h3>
                  <ol className="f-tlist">
                    <li className="f-task todo">
                      <span className="f-tglyph" aria-hidden="true" />
                      <span className="visually-hidden">Up next: </span>
                      <span className="f-task-label">Onboarding flow</span>
                      <span className="f-tmeta">queued</span>
                    </li>
                    <li className="f-task todo">
                      <span className="f-tglyph" aria-hidden="true" />
                      <span className="visually-hidden">Up next: </span>
                      <span className="f-task-label">Beta invites</span>
                      <span className="f-tmeta">queued</span>
                    </li>
                  </ol>
                </div>
                <svg className="f-squiggle" viewBox="0 0 120 60" aria-hidden="true"><path d="M6 50C34 46 62 40 84 20M84 20l-15 3M84 20l-3 15" filter="url(#wobble)" /></svg>
                <p className="f-hand">everyone sees the same next step.</p>
                <ul className="f-legend" aria-label="Task states used in the sample milestone">
                  <li className="done"><span className="f-tglyph"><CheckGlyph /></span>Done</li>
                  <li className="now"><span className="f-tglyph"><Icon name="arrow" /></span>In progress</li>
                  <li><span className="f-tglyph" aria-hidden="true" />Up next</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="pad f-crew" id="crew">
          <div className="wrap">
            <div className="sec-head">
              <div>
                <p className="f-label"><span>03</span> — Your crew</p>
                <h2 className="h">Know who&apos;s <em>building beside you.</em></h2>
              </div>
              <p>See the people behind the project, what they bring to the crew, and what they&apos;re currently working on.</p>
            </div>
            <div className="f-crew-grid">
              {crew.map((person) => (
                <article className="f-person" key={person.name}>
                  <span className="f-person-init" aria-hidden="true">{person.name.slice(0, 1)}</span>
                  <div className="f-person-body">
                    <h3>{person.name}</h3>
                    <p className="f-person-role">{person.role}</p>
                    <p className="f-person-now"><span className="f-now-lab">Now</span>{person.now}</p>
                  </div>
                  <span className="f-person-pip" style={{ background: person.color }} aria-hidden="true" />
                </article>
              ))}
            </div>
            <p className="note">Fictional crew shown for demonstration — these are not real CrewLab users.</p>
          </div>
        </section>

        <section className="pad f-disc" id="discussions">
          <div className="wrap">
            <div className="sec-head">
              <div>
                <p className="f-label"><span>04</span> — Discussions</p>
                <h2 className="h">Keep the conversations <em>close to the work.</em></h2>
              </div>
              <p>Discuss decisions, share ideas, ask questions, and keep project conversations connected to the work itself.</p>
            </div>
            <div className="f-disc-grid">
              <div className="f-thread">
                <div className="f-thread-top">
                  <span className="f-live">Discussion</span>
                  <span>onboarding flow · 3 messages</span>
                </div>
                <ul className="f-msgs">
                  {messages.map((message) => (
                    <li key={message.name}>
                      <span className="pip" style={{ background: message.color }}>{message.initial}</span>
                      <div>
                        <p className="f-msg-meta"><b>{message.name}</b><i>{message.time}</i></p>
                        <p className="f-msg-text">“{message.text}”</p>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="f-thread-foot">
                  <span>sample thread</span>
                  <span>conversations close to the work</span>
                </div>
              </div>
              <aside className="f-link-card">
                <span className="f-link-lab">Linked to</span>
                <b>Task · Simplify onboarding flow</b>
                <p>Milestone 02 · Beta polish</p>
                <span className="f-link-note">the discussion stays with the task, not lost in a feed</span>
              </aside>
            </div>
          </div>
        </section>

        <section className="f-progress" id="progress">
          <div className="wrap">
            <div className="sec-head">
              <div>
                <p className="f-label"><span>05</span> — Progress</p>
                <h2 className="h">See the project <em>move.</em></h2>
              </div>
              <p>From the first idea to something people can actually use, keep an eye on how far the project has come.</p>
            </div>
            <div className="f-prog">
              <div className="f-pct-wrap">
                <div className="f-pct">
                  <svg className="brush" viewBox="0 0 600 140" preserveAspectRatio="none" aria-hidden="true"><use href="#brush-f" /></svg>
                  <span>72%</span>
                </div>
                <p className="f-pct-note">example progress</p>
              </div>
              <div className="f-track-wrap">
                <div className="f-rail" aria-hidden="true">
                  <span className="f-rail-line" />
                  <span className="f-rail-fill" style={{ width: "54%" }} />
                </div>
                <ol className="f-stops">
                  {stages.map((stage) => (
                    <li className={`f-stop ${stage.state}`} key={stage.word}>
                      <i className="f-stop-dot" />
                      <b>{stage.word}</b>
                      {stage.state === "done" && <span>done</span>}
                      {stage.state === "now" && <span>in progress</span>}
                      {stage.state === "next" && <span>up next</span>}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
            <p className="f-prog-fine">Illustrative example only — 72% does not represent a real project metric.</p>
          </div>
        </section>

        <section className="pad f-tools" id="tools">
          <div className="wrap">
            <div className="sec-head">
              <div>
                <p className="f-label f-label-plain">Built to connect</p>
                <h2 className="h">Your tools can <em>come with you.</em></h2>
              </div>
              <p>CrewLab is designed to connect the places where your crew already works, so the project doesn&apos;t become another disconnected workspace.</p>
            </div>
            <p className="f-tools-designed">Designed to connect with the tools your crew already uses.</p>
            <ul className="f-tools-grid">
              {tools.map((tool) => (
                <li className="f-tool" key={tool.name}>
                  {tool.icon}
                  <b>{tool.name}</b>
                  <span>{tool.tag}</span>
                </li>
              ))}
            </ul>
            <p className="f-tools-fine">Planned product direction — these integrations are not yet available in CrewLab.</p>
          </div>
        </section>

        <section className="f-cta" id="join">
          <TornEdge seedIndex={7} color="var(--paper-2)" />
          <i className="f-cta-halftone" aria-hidden="true" />
          <svg className="f-cta-brush" viewBox="0 0 600 140" preserveAspectRatio="none" aria-hidden="true"><use href="#brush-s" /></svg>
          <div className="wrap f-cta-in">
            <p className="kicker">Ready when you are</p>
            <h2>
              Got the crew.
              <span className="f-cta-hl">
                <svg className="brush" viewBox="0 0 600 140" preserveAspectRatio="none" aria-hidden="true"><use href="#brush-s" /></svg>
                <span>Now build the thing.</span>
              </span>
            </h2>
            <p className="f-cta-lead">Find your people, organize the work, and turn the idea into something real.</p>
            <Link className="btn btn-light" href="/waitlist">
              Join the waitlist <Icon name="arrow" />
            </Link>
            <p className="f-cta-fine">Early access is limited · the crew is forming now</p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
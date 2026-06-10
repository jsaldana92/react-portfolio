// src/pages/datapullerPage.jsx

import React from "react";

const projectFacts = [
  {
    label: "Role",
    value: "UX Researcher",
  },
  {
    label: "Methods",
    value:
      "Stakeholder and user interviews; Qualtrics surveys; workflow mapping; needs vs. nice-to-have prioritization; usability testing; task-timing analysis; beta and post-launch validation",
  },
  {
    label: "Participants",
    value:
      "Junior researchers, senior researchers, primary investigators, and research-lab stakeholders",
  },
  {
    label: "Outcome",
    value:
      "Validated DataPuller as a faster and more reliable data-transfer workflow, leading 2 of 3 participating labs to adopt it for research onboarding",
  },
];

const impactStats = [
  {
    value: "2 / 3",
    label: "Labs adopted DataPuller",
    detail:
      "Two participating labs added DataPuller to their research workflows and onboarding process.",
  },
  {
    value: "2–6s",
    label: "Final data-pull speed",
    detail:
      "Final launch testing ranged from 2 seconds for 1 project to 6 seconds for 4 projects.",
  },
  {
    value: "4.7 / 5",
    label: "Final method perception",
    detail: "Compared with 2.2 / 5 for the traditional USB workflow.",
  },
  {
    value: "4.2 / 5",
    label: "Likelihood to reuse",
    detail: "Compared with 2.3 / 5 for the traditional USB workflow.",
  },
];

const problemThemes = [
  {
    title: "Manual USB workflow",
    description:
      "Researchers collected files by manually opening folders, copying data to a USB drive, and moving originals into copied folders.",
  },
  {
    title: "Repeated work across computers",
    description:
      "Labs used multiple offline computers, so researchers had to repeat the same transfer process across machines and projects.",
  },
  {
    title: "Transfer confidence",
    description:
      "Users worried that the wrong files could be transferred or that successful transfers would be difficult to verify.",
  },
  {
    title: "Onboarding burden",
    description:
      "Stakeholders wanted a standardized workflow that could train junior researchers and retrain new hires more consistently.",
  },
];

const researchQuestions = [
  {
    title: "What is the current transfer workflow?",
    description:
      "Document how researchers currently collect files from offline computers and identify where the process slows down or creates risk.",
  },
  {
    title: "What would make a new tool worth adopting?",
    description:
      "Separate must-have requirements from nice-to-have features so the MVP could focus on the highest-impact workflow problems.",
  },
  {
    title: "Does the solution improve speed and perception?",
    description:
      "Validate whether DataPuller is faster than the traditional workflow and whether users actually feel that the new workflow is worth adopting.",
  },
];

const manualWorkflow = [
  "Turn on individual computers and insert USB drive",
  "Open project folder",
  "Copy all relevant data into USB",
  'Move original data into a "copied" folder',
  "Repeat steps 2–4 until all data has been copied",
  "Safely eject USB drive and turn off laptop",
];

const discoveryFindings = [
  {
    title: "Only specific file types should be transferred",
    finding:
      "Users most often needed .csv and .txt data files, but not every text file was useful for transfer.",
    recommendation:
      "Display project folders from C:/Tasks/ and include .csv and .txt files while excluding common parameter or setup files.",
    quote: "I only use .csv files.",
    source: "Junior Researcher",
  },
  {
    title: "Users needed confidence that transfers were correct",
    finding:
      "The most common worry was that unrelated files could be transferred by mistake or that users would not know whether the transfer worked.",
    recommendation:
      "Add a transfer log so researchers could quickly verify what was copied and detect transfer problems.",
    quote:
      "It would be nice to quickly check that files are being correctly transferred.",
    source: "Senior Researcher",
  },
  {
    title: "Speed had to justify learning a new workflow",
    finding:
      "Researchers were willing to change their process only if DataPuller made data collection significantly faster.",
    recommendation:
      "Prioritize speed and simplicity before adding lower-priority convenience features.",
    quote:
      "Pulling data would need to be significantly faster to make learning a new way worth it.",
    source: "Senior Researcher",
  },
  {
    title: "Stakeholders wanted fewer junior-researcher mistakes",
    finding:
      "Stakeholders saw DataPuller as useful only if it helped junior researchers transfer files more consistently.",
    recommendation:
      "Design the workflow around standardization, transfer safety, and repeatable onboarding.",
    quote:
      "If it’s faster and reduces mistakes for junior researchers, I’m all for it.",
    source: "Primary Investigator",
  },
];

const betaSpeedMetrics = [
  {
    projects: "1 project",
    traditional: 33,
    beta: 21,
    launch: 2,
  },
  {
    projects: "2 projects",
    traditional: 41,
    beta: 23,
    launch: 3,
  },
  {
    projects: "3 projects",
    traditional: 52,
    beta: 24,
    launch: 5,
  },
  {
    projects: "4 projects",
    traditional: 61,
    beta: 25,
    launch: 6,
  },
];

const validationMetrics = [
  {
    label: "Method perception",
    traditional: 2.2,
    dataPuller: 4.7,
    takeaway:
      "After optimization, DataPuller was perceived much more positively than the traditional workflow.",
  },
  {
    label: "Likelihood to reuse",
    traditional: 2.3,
    dataPuller: 4.2,
    takeaway:
      "Users became more likely to reuse DataPuller than the manual USB process.",
  },
];

const processSteps = [
  {
    title: "Discovery research",
    description:
      "I conducted user interviews and Qualtrics surveys to document the existing transfer workflow, identify pain points, and separate needed features from nice-to-haves.",
    output:
      "The research showed that users needed fast transfer, clear file filtering, and a transfer log to reduce mistakes and increase trust.",
  },
  {
    title: "Workflow and MVP recommendations",
    description:
      "Based on the folder structure, I recommended that DataPuller read project folders from C:/Tasks/, include .csv and .txt files, and exclude common setup files such as files beginning with para.",
    output:
      "The recommendation defined the MVP transfer logic and helped engineering focus on the highest-priority workflow problem.",
  },
  {
    title: "Beta usability testing",
    description:
      "I asked users to collect data across four offline computers using both the traditional method and DataPuller, counterbalancing the order across participants.",
    output:
      "DataPuller was faster, especially as the number of projects increased, but the 18-second startup time made users less likely to adopt it.",
  },
  {
    title: "Post-launch validation",
    description:
      "After the app was improved, I repeated the same task-based testing and compared final DataPuller performance against the traditional workflow.",
    output:
      "The final version was substantially faster and received stronger ratings for method perception and likelihood to reuse.",
  },
  {
    title: "Adoption recommendation",
    description:
      "I reviewed final results with stakeholders to determine whether DataPuller should be added to research-lab onboarding.",
    output:
      "Two of three participating labs adopted DataPuller. The third lab had primarily senior staff who were more hesitant to change established workflows.",
  },
];

const betaFindings = [
  {
    title: "The Beta was objectively faster",
    description:
      "DataPuller reduced task time across every project count, and the advantage increased as more projects had to be collected from a single computer.",
  },
  {
    title: "Perceived waiting mattered more than total time",
    description:
      "Users reacted negatively to the 18-second startup delay even though DataPuller still completed the full transfer task faster than the traditional workflow.",
  },
  {
    title: "The main recommendation was optimization, not feature expansion",
    description:
      "Because the MVP workflow was already producing positive speed results, the recommendation was to reduce startup time while keeping the core workflow intact.",
  },
];

const roadmapItems = [
  {
    title: "Add safe USB eject",
    description:
      "Users continued to request a way to safely eject the USB drive directly from the app. This was a low-to-moderate priority safety improvement.",
  },
  {
    title: "Support pulling from storage folders",
    description:
      "Users wanted the option to copy files from a project’s storage folder so DataPuller could support more case-by-case collection needs.",
  },
  {
    title: "Preserve speed as the core requirement",
    description:
      "Future updates should avoid adding friction that slows startup or makes users feel that the manual method would be faster.",
  },
  {
    title: "Use onboarding as the adoption path",
    description:
      "Because DataPuller standardized the workflow, the strongest adoption path was through lab onboarding and retraining rather than optional one-off use.",
  },
];

function SectionHeader({ eyebrow, title, children }) {
  return (
    <div className="mb-6">
      {eyebrow ? (
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent">
          {eyebrow}
        </p>
      ) : null}

      <h2 className="mt-2 text-3xl font-bold leading-tight text-ink md:text-4xl">
        {title}
      </h2>

      {children ? (
        <p className="mt-3 max-w-3xl text-base leading-relaxed text-muted md:text-lg">
          {children}
        </p>
      ) : null}

      <div className="mt-5 h-px w-full bg-accent/20" />
    </div>
  );
}

function FactCard({ label, value }) {
  return (
    <article className="rounded-2xl border border-accent/15 bg-surface p-5 shadow-sm">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-subtletext">
        {label}
      </p>
      <p className="mt-2 text-sm leading-relaxed text-muted">{value}</p>
    </article>
  );
}

function ImpactCard({ value, label, detail }) {
  return (
    <article className="rounded-2xl border border-accent/15 bg-surface p-5 shadow-sm">
      <p className="text-3xl font-bold text-accent">{value}</p>
      <h3 className="mt-2 text-base font-bold text-ink">{label}</h3>
      <p className="mt-1 text-sm leading-relaxed text-muted">{detail}</p>
    </article>
  );
}

function SimpleCard({ title, description }) {
  return (
    <article className="rounded-2xl border border-accent/15 bg-surface p-5 shadow-sm">
      <h3 className="text-lg font-bold text-accent">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted">{description}</p>
    </article>
  );
}

function ProcessCard({ title, description, output }) {
  return (
    <article className="rounded-3xl border border-accent/15 bg-surface p-6 shadow-sm">
      <h3 className="text-xl font-bold text-ink">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted">{description}</p>

      <div className="mt-5 rounded-2xl bg-accent/5 p-4">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-subtletext">
          Output
        </p>
        <p className="mt-2 text-sm leading-relaxed text-ink">{output}</p>
      </div>
    </article>
  );
}

function FindingCard({ title, finding, recommendation, quote, source }) {
  return (
    <article className="rounded-3xl border border-accent/15 bg-surface p-6 shadow-sm">
      <h3 className="text-xl font-bold text-ink">{title}</h3>

      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-subtletext">
            Finding
          </p>
          <p className="mt-2 text-sm leading-relaxed text-muted">{finding}</p>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-subtletext">
            Recommendation
          </p>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            {recommendation}
          </p>
        </div>
      </div>

      <blockquote className="mt-5 rounded-2xl border-l-4 border-accent bg-accent/5 p-4">
        <p className="text-sm italic leading-relaxed text-ink">“{quote}”</p>
        <footer className="mt-2 text-right text-xs font-semibold uppercase tracking-[0.15em] text-subtletext">
          {source}
        </footer>
      </blockquote>
    </article>
  );
}

function WorkflowSteps() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {manualWorkflow.map((step, index) => (
        <article
          key={step}
          className="rounded-2xl border border-accent/15 bg-surface p-5 shadow-sm"
        >
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-white">
              {index + 1}
            </div>

            <p className="text-sm font-medium leading-relaxed text-muted">
              {step}
            </p>
          </div>
        </article>
      ))}
    </div>
  );
}

function ResearchQuestionPanel() {
  return (
    <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
      <div className="rounded-2xl border border-accent/15 bg-accent/5 p-5">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-subtletext">
          Research focus
        </p>

        <h3 className="mt-3 text-2xl font-bold leading-tight text-ink">
          Turn a manual transfer problem into measurable adoption criteria.
        </h3>

        <p className="mt-4 text-sm leading-relaxed text-muted">
          This phase translated stakeholder concerns into questions that could
          guide the beta testing and post-launch adoption decision.
        </p>
      </div>

      <div className="space-y-5">
        {researchQuestions.map((question, index) => (
          <article key={question.title} className="flex gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-white">
              {index + 1}
            </div>

            <div className="border-b border-accent/15 pb-5 last:border-b-0 last:pb-0">
              <h3 className="text-lg font-bold text-ink">{question.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {question.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

function SpeedComparisonCard({ projects, traditional, beta, launch }) {
  const maxValue = 65;

  const bars = [
    {
      label: "Traditional",
      value: traditional,
      width: `${Math.max((traditional / maxValue) * 100, 4)}%`,
      className: "bg-accent/35",
    },
    {
      label: "Beta DataPuller",
      value: beta,
      width: `${Math.max((beta / maxValue) * 100, 4)}%`,
      className: "bg-accent/60",
    },
    {
      label: "Launch DataPuller",
      value: launch,
      width: `${Math.max((launch / maxValue) * 100, 4)}%`,
      className: "bg-accent",
    },
  ];

  return (
    <article className="rounded-3xl border border-accent/15 bg-surface p-6 shadow-sm">
      <h3 className="text-lg font-bold text-ink">{projects}</h3>

      <div className="mt-5 space-y-4">
        {bars.map((bar) => (
          <div key={bar.label}>
            <div className="mb-2 flex items-center justify-between text-sm">
              <span className="font-semibold text-muted">{bar.label}</span>
              <span className="font-bold text-ink">{bar.value}s</span>
            </div>

            <div className="h-3 overflow-hidden rounded-full bg-accent/10">
              <div
                className={`h-full rounded-full ${bar.className}`}
                style={{ width: bar.width }}
              />
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}

function LikertMetricCard({ label, traditional, dataPuller, takeaway }) {
  const traditionalWidth = `${Math.max(traditional * 20, 4)}%`;
  const dataPullerWidth = `${Math.max(dataPuller * 20, 4)}%`;
  const difference = dataPuller - traditional;
  const formattedDifference = `${difference > 0 ? "+" : ""}${difference.toFixed(
    1,
  )}`;

  return (
    <article className="rounded-3xl border border-accent/15 bg-surface p-6 shadow-sm">
      <div className="flex flex-col gap-2 border-b border-accent/15 pb-4 md:flex-row md:items-start md:justify-between">
        <div>
          <h3 className="text-lg font-bold text-ink">{label}</h3>
          <p className="mt-1 text-sm leading-relaxed text-muted">{takeaway}</p>
        </div>

        <div className="w-fit rounded-full bg-accent/10 px-3 py-1 text-sm font-bold text-accent">
          {formattedDifference}
        </div>
      </div>

      <div className="mt-5 space-y-4">
        <div>
          <div className="mb-2 flex items-center justify-between text-sm">
            <span className="font-semibold text-muted">
              Traditional workflow
            </span>
            <span className="font-bold text-ink">{traditional.toFixed(1)}</span>
          </div>

          <div className="h-3 overflow-hidden rounded-full bg-accent/10">
            <div
              className="h-full rounded-full bg-accent/35"
              style={{ width: traditionalWidth }}
            />
          </div>
        </div>

        <div>
          <div className="mb-2 flex items-center justify-between text-sm">
            <span className="font-semibold text-muted">DataPuller</span>
            <span className="font-bold text-ink">{dataPuller.toFixed(1)}</span>
          </div>

          <div className="h-3 overflow-hidden rounded-full bg-accent/10">
            <div
              className="h-full rounded-full bg-accent"
              style={{ width: dataPullerWidth }}
            />
          </div>
        </div>
      </div>

      <p className="mt-4 text-xs font-medium text-subtletext">
        Scores shown on a 5-point Likert scale.
      </p>
    </article>
  );
}

export default function DataPullerPage() {
  return (
    <main className="min-h-screen bg-backgroundwhite text-ink">
      <section className="mx-auto max-w-7xl px-6 pb-8 pt-12">
        <p className="text-sm font-bold uppercase tracking-[0.22em] text-accent">
          DataPuller | Workflow Automation Research
        </p>

        <h1 className="mt-4 max-w-5xl text-4xl font-bold leading-tight text-ink md:text-6xl">
          Standardizing offline data collection across research computers
        </h1>

        <p className="mt-5 max-w-4xl text-lg leading-relaxed text-muted md:text-xl">
          Stakeholders saw that junior researchers were struggling to safely
          collect data files from multiple offline computers. I led the UX
          research for DataPuller to identify the workflow pain points, validate
          the MVP, and determine whether the final tool should be adopted into
          research-lab onboarding.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {projectFacts.map((fact) => (
            <FactCard key={fact.label} {...fact} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8">
        <SectionHeader
          eyebrow="Impact Summary"
          title="What the research achieved"
        >
          DataPuller succeeded because the final workflow was not only faster,
          but also perceived as a better method that labs were willing to adopt
          for onboarding and retraining.
        </SectionHeader>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {impactStats.map((stat) => (
            <ImpactCard key={stat.label} {...stat} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex items-center gap-4">
          <div className="h-px flex-1 bg-accent/20" />
          <p className="rounded-full border border-accent/20 bg-surface px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-accent shadow-sm">
            Research process
          </p>
          <div className="h-px flex-1 bg-accent/20" />
        </div>

        <p className="mx-auto mt-4 max-w-2xl text-center text-sm leading-relaxed text-muted">
          The results above summarize the impact. The sections below explain how
          discovery research, beta testing, and post-launch validation shaped
          the final DataPuller workflow.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8">
        <SectionHeader
          eyebrow="Problem framing"
          title="1. Why DataPuller was needed"
        >
          Researchers were using a manual USB process to collect files from
          offline computers. The process worked, but it was slow, repetitive,
          and difficult to standardize for junior researchers.
        </SectionHeader>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {problemThemes.map((theme) => (
            <SimpleCard key={theme.title} {...theme} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8">
        <SectionHeader
          eyebrow="Research goals"
          title="2. What the research needed to answer"
        >
          Before defining features, I needed to understand where the current
          transfer process failed and what evidence would justify changing an
          established lab workflow.
        </SectionHeader>

        <ResearchQuestionPanel />
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8">
        <SectionHeader
          eyebrow="Discovery research"
          title="3. How researchers collected data before DataPuller"
        >
          Discovery interviews and surveys showed that the traditional process
          was a six-step USB workflow. Steps 2–4 repeated whenever one computer
          stored data from multiple research projects.
        </SectionHeader>

        <WorkflowSteps />
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8">
        <SectionHeader
          eyebrow="Discovery findings"
          title="4. What the MVP needed to solve"
        >
          The discovery phase identified the file types, trust concerns, and
          adoption conditions that shaped the first DataPuller workflow.
        </SectionHeader>

        <div className="grid gap-5">
          {discoveryFindings.map((finding) => (
            <FindingCard key={finding.title} {...finding} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8">
        <SectionHeader
          eyebrow="MVP recommendation"
          title="5. What I recommended to engineering"
        >
          Based on the root folder structure and user concerns, I recommended a
          constrained transfer logic that prioritized speed, safety, and
          verification.
        </SectionHeader>

        <div className="grid gap-5 lg:grid-cols-3">
          <article className="rounded-2xl border border-accent/15 bg-surface p-5 shadow-sm">
            <h3 className="text-lg font-bold text-accent">Source</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Display all possible project folders located in the central
              C:/Tasks/ location.
            </p>
          </article>

          <article className="rounded-2xl border border-accent/15 bg-surface p-5 shadow-sm">
            <h3 className="text-lg font-bold text-accent">File rules</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Include .csv and .txt files, but exclude common non-data files
              beginning with para, subject, or block.
            </p>
          </article>

          <article className="rounded-2xl border border-accent/15 bg-surface p-5 shadow-sm">
            <h3 className="text-lg font-bold text-accent">Data safety</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Send copied files to the USB drive and optionally create a copied
              version in the root folder for transfer security.
            </p>
          </article>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8">
        <SectionHeader
          eyebrow="Research process"
          title="6. How the work moved from discovery to adoption"
        >
          Each research phase answered a different question: what users needed,
          whether the MVP was directionally correct, and whether the final
          version should be adopted by labs.
        </SectionHeader>

        <div className="grid gap-5 md:grid-cols-2">
          {processSteps.map((step) => (
            <ProcessCard key={step.title} {...step} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8">
        <SectionHeader
          eyebrow="Beta validation"
          title="7. What beta testing revealed"
        >
          Beta testing showed that DataPuller was already faster than the
          traditional workflow, especially when users needed to collect data
          from multiple projects. However, the 18-second startup time hurt
          perceived value and likelihood of adoption.
        </SectionHeader>

        <div className="grid gap-5 md:grid-cols-3">
          {betaFindings.map((finding) => (
            <SimpleCard key={finding.title} {...finding} />
          ))}
        </div>

        <div className="mt-6 rounded-3xl border border-accent/15 bg-surface p-6 shadow-sm">
          <blockquote className="rounded-2xl border-l-4 border-accent bg-accent/5 p-5">
            <p className="text-base italic leading-relaxed text-ink">
              “The launch time was super long and made it not fun waiting for
              the app to launch… I’d rather just click to the folder I need.”
            </p>
            <footer className="mt-3 text-right text-xs font-bold uppercase tracking-[0.18em] text-subtletext">
              Junior Researcher
            </footer>
          </blockquote>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8">
        <SectionHeader
          eyebrow="Task timing"
          title="8. How DataPuller changed transfer speed"
        >
          Users collected data from four computers using both the traditional
          workflow and DataPuller. The benefit increased as the number of
          projects per computer increased.
        </SectionHeader>

        <div className="grid gap-5 md:grid-cols-2">
          {betaSpeedMetrics.map((metric) => (
            <SpeedComparisonCard key={metric.projects} {...metric} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8">
        <SectionHeader
          eyebrow="Post-launch validation"
          title="9. How the final version performed"
        >
          After startup performance was improved, I repeated the task-based
          testing and compared the final DataPuller workflow against the
          traditional method.
        </SectionHeader>

        <div className="grid gap-5 lg:grid-cols-2">
          {validationMetrics.map((metric) => (
            <LikertMetricCard key={metric.label} {...metric} />
          ))}
        </div>

        <div className="mt-6 rounded-3xl border border-accent/15 bg-surface p-6 shadow-sm">
          <blockquote className="rounded-2xl border-l-4 border-accent bg-accent/5 p-5">
            <p className="text-base italic leading-relaxed text-ink">
              “The super quick load time makes this an actual viable solution.”
            </p>
            <footer className="mt-3 text-right text-xs font-bold uppercase tracking-[0.18em] text-subtletext">
              Senior Researcher
            </footer>
          </blockquote>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 pt-8">
        <SectionHeader
          eyebrow="Recommendations"
          title="10. What I recommended after launch"
        >
          The final recommendation was to adopt DataPuller for onboarding while
          continuing to improve safety and flexibility without compromising the
          speed that made the tool successful.
        </SectionHeader>

        <div className="grid gap-5 md:grid-cols-2">
          {roadmapItems.map((item) => (
            <SimpleCard key={item.title} {...item} />
          ))}
        </div>
      </section>
    </main>
  );
}

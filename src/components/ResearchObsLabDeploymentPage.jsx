// src/components/ResearchObsPublicReleasePage.jsx

import React from "react";

const projectFacts = [
  {
    label: "Role",
    value: "UX Research and Market Analyst",
  },
  {
    label: "Methods",
    value:
      "Stakeholder and user interviews; thematic analysis; market analysis; journey mapping; card sorting; prototyping; beta/MVP usability testing; Qualtrics survey",
  },
  {
    label: "Participants",
    value: "Stakeholders, product manager, 4 end-users",
  },
  {
    label: "Outcome",
    value:
      "Validated ResearchObs as a stronger replacement for WhatsOb and translated research findings into release and roadmap recommendations",
  },
];

const impactStats = [
  {
    value: "4.3 / 5",
    label: "Overall app rating",
    detail: "ResearchObs compared with 2.4 / 5 for WhatsOb.",
  },
  {
    value: "4.5 / 5",
    label: "Ease of editing",
    detail: "ResearchObs compared with 2.5 / 5 for WhatsOb.",
  },
  {
    value: "4.7 / 5",
    label: "Ease of switching groups",
    detail: "ResearchObs compared with 2.8 / 5 for WhatsOb.",
  },
  {
    value: "4.0 / 5",
    label: "Editing group details",
    detail: "ResearchObs compared with 1.4 / 5 for WhatsOb.",
  },
];

const problemThemes = [
  {
    title: "Workflow friction",
    description:
      "Researchers needed faster ways to correct mistakes, switch groups, and continue observations without being blocked by tablet-specific setup issues.",
  },
  {
    title: "Maintenance risk",
    description:
      "Important updates to groups, members, and behaviors were too dependent on code-level changes, creating long-term sustainability concerns.",
  },
  {
    title: "Data continuity",
    description:
      "The lab needed a modernized tool that could improve the front-end experience without breaking existing exports, Dropbox storage, or R analysis workflows.",
  },
];

const projectGoals = [
  {
    title: "Find the right technical path",
    description:
      "Conduct market research on realistic mobile frameworks so the product could be built quickly and remain easier for future users or beginner developers to maintain if needed.",
  },
  {
    title: "Identify the highest-priority UX issues",
    description:
      "Understand WhatsOb pain points from the end-user perspective so ResearchObs could increase productivity and reduce friction during live observations.",
  },
  {
    title: "Balance user needs with stakeholder constraints",
    description:
      "Prioritize recommendations that improved the app experience without breaking legacy data structures, existing analysis workflows, or engineering feasibility.",
  },
];

const processSteps = [
  {
    title: "Stakeholder and product-manager interviews",
    description:
      "The project began when stakeholders identified that WhatsOb needed to be replaced. I interviewed stakeholders and the product manager to clarify the core product risks: workflow friction, maintenance risk, and data continuity.",
    output:
      "These interviews defined the problem space and established the constraints that ResearchObs could not break.",
  },
  {
    title: "Market and framework analysis",
    description:
      "I compared realistic Android-compatible options, including Kotlin, Java, and Flutter. Swift was excluded because ResearchObs needed to run on Android devices and avoid an iOS-only deployment path.",
    output:
      "Flutter was recommended because its widget ecosystem, community support, documentation, and future iOS pathway made it the best fit. The recommendation was passed to engineering, who agreed it was feasible.",
  },
  {
    title: "End-user research and feature prioritization",
    description:
      "I interviewed end-users and the product manager again, focusing on critical usability issues, recurring technical errors, and feature requirements through a needs-versus-nice-to-have framework.",
    output:
      "Thematic analysis produced four product priorities: in-observation editing, cross-tablet profiles, continuity with legacy data structure, and customizable groups.",
  },
  {
    title: "Card sorting and physical prototyping",
    description:
      "I used real cards to understand how users grouped similar behaviors, then built a cardboard-and-Velcro prototype with rearrangeable buttons so users could test possible layouts directly.",
    output:
      "These sessions helped identify more ergonomic behavior groupings and informed the interactive in-tablet MVP layouts.",
  },
  {
    title: "Beta and MVP usability testing",
    description:
      "After the engineering branch developed the beta app, I tested the beta workflow and additional in-tablet MVPs with end-users.",
    output:
      "The validation focused on the topics most directly tied to earlier research: editing, switching groups, editing group details, and ability to use ResearchObs.",
  },
  {
    title: "Release and roadmap recommendations",
    description:
      "After positive beta results, I recommended that the core beta workflow move forward while user and manager suggestions be prioritized for future updates.",
    output:
      "Recommended future updates included direct editing of saved observation inputs, account and password safety, mass exporting across groups, and in-app feedback to support user motivation.",
  },
];

const discoveryFindings = [
  {
    title: "In-observation editing",
    finding:
      "Researchers needed to correct mistakes during an observation instead of waiting until the session was complete.",
    recommendation:
      "Prioritize easier correction workflows and keep direct editing of already saved observation inputs on the roadmap.",
    quote:
      "It is annoying not being able to edit the [observation] as I am [entering data]. If I want to edit it after the [observation] is complete, I might forget what I needed to change.",
    source: "Junior Researcher",
  },
  {
    title: "Cross-tablet profiles",
    finding:
      "Researchers were constrained by tablet-specific group assignments, battery issues, and inconsistent device availability.",
    recommendation:
      "Support more flexible group switching so researchers could continue observations without depending on one assigned tablet.",
    quote:
      "The tablets lose charge really quickly and each group pretty much has only one tablet assigned to it, which makes data collection difficult since we cannot freely switch between the tablets as needed.",
    source: "Senior Researcher",
  },
  {
    title: "Continuity with legacy data structure",
    finding:
      "Users and managers were concerned that changing the app could force them to relearn analysis workflows or rewrite existing R scripts.",
    recommendation:
      "Modernize the app experience while preserving the output structure needed for existing Dropbox, export, and R analysis workflows.",
    quote:
      "The output file needs to be the same so that the R code which runs the analysis does not also need updating.",
    source: "Lab Manager",
  },
  {
    title: "Customizable groups",
    finding:
      "Groups, members, and behaviors changed over time, but the previous system made those updates too dependent on code-level changes.",
    recommendation:
      "Add in-app management for groups, group members, and behaviors so the tool could be maintained without developer intervention.",
    quote:
      "Ideally, I should be able to edit groups and group members without having to edit any code, the same for editing behaviors.",
    source: "Stakeholder",
  },
];

const betaMetrics = [
  {
    label: "Ease of editing",
    whatsOb: 2.5,
    researchObs: 4.5,
    takeaway:
      "ResearchObs improved one of the clearest pain points from early interviews: correcting or managing observation inputs.",
  },
  {
    label: "Ease of switching between groups",
    whatsOb: 2.8,
    researchObs: 4.7,
    takeaway:
      "Users found ResearchObs much easier for moving between observation groups.",
  },
  {
    label: "Editing group details",
    whatsOb: 1.4,
    researchObs: 4.0,
    takeaway:
      "In-app editing addressed a major maintenance issue from stakeholder and manager interviews.",
  },
  {
    label: "Familiarity",
    whatsOb: 4.2,
    researchObs: 3.7,
    takeaway:
      "ResearchObs introduced new workflows while staying familiar enough for adoption.",
  },
];

const roadmapItems = [
  {
    title: "Move forward with the beta direction",
    description:
      "The core workflow requirements were met, so the primary recommendation was to continue toward release rather than restart the product direction.",
  },
  {
    title: "Add direct editing of saved inputs later",
    description:
      "Users wanted stronger in-observation editing, but direct editing of already saved inputs could be handled as a future enhancement after the core workflow stabilized.",
  },
  {
    title: "Add account and password safeguards",
    description:
      "Account safety and password concerns were recommended as future safeguards before broader release.",
  },
  {
    title: "Support mass exporting",
    description:
      "Mass exporting across multiple groups was recommended to reduce management friction as ResearchObs scaled beyond the initial deployment.",
  },
  {
    title: "Use in-app feedback to support motivation",
    description:
      "Individual in-app feedback was recommended as a future engagement layer to help users feel more connected to their observation work.",
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

function MetricCard({ label, whatsOb, researchObs, takeaway }) {
  const whatsObWidth = `${Math.max(whatsOb * 20, 4)}%`;
  const researchObsWidth = `${Math.max(researchObs * 20, 4)}%`;
  const difference = researchObs - whatsOb;
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
            <span className="font-semibold text-muted">WhatsOb</span>
            <span className="font-bold text-ink">{whatsOb.toFixed(1)}</span>
          </div>

          <div className="h-3 overflow-hidden rounded-full bg-accent/10">
            <div
              className="h-full rounded-full bg-accent/35"
              style={{ width: whatsObWidth }}
            />
          </div>
        </div>

        <div>
          <div className="mb-2 flex items-center justify-between text-sm">
            <span className="font-semibold text-muted">ResearchObs</span>
            <span className="font-bold text-ink">{researchObs.toFixed(1)}</span>
          </div>

          <div className="h-3 overflow-hidden rounded-full bg-accent/10">
            <div
              className="h-full rounded-full bg-accent"
              style={{ width: researchObsWidth }}
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

export default function ResearchObsPublicReleasePage() {
  return (
    <main className="min-h-screen bg-backgroundwhite text-ink">
      <section className="mx-auto max-w-7xl px-6 pb-8 pt-12">
        <p className="text-sm font-bold uppercase tracking-[0.22em] text-accent">
          ResearchObs | Public Release Research
        </p>

        <h1 className="mt-4 max-w-5xl text-4xl font-bold leading-tight text-ink md:text-6xl">
          Validating ResearchObs for release beyond the initial replacement
        </h1>

        <p className="mt-5 max-w-4xl text-lg leading-relaxed text-muted md:text-xl">
          Stakeholders identified that current method of data collection,
          WhatsOb, needed to be replaced, and ResearchObs was created to solve
          that problem. My research defined the product direction, identified
          the highest-priority usability issues, tested early MVPs, and
          translated beta findings into release and roadmap recommendations.
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
          ResearchObs tested stronger than WhatsOb on the core workflows the
          research was designed to improve. This gave engineering and
          stakeholders evidence that the beta direction was working and that
          remaining requests could be prioritized as roadmap items.
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
          The results above summarize the impact. The sections below explain the
          research activities that shaped the product direction, beta
          validation, and engineering recommendations.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8">
        <SectionHeader
          eyebrow="Problem framing"
          title="1. Why ResearchObs was needed"
        >
          The first phase of research clarified that WhatsOb needed to be
          replaced because it created workflow, maintenance, and data-continuity
          risks.
        </SectionHeader>

        <div className="grid gap-5 md:grid-cols-3">
          {problemThemes.map((theme) => (
            <SimpleCard key={theme.title} {...theme} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8">
        <SectionHeader
          eyebrow="Project goals"
          title="2. What the research needed to answer"
        >
          After the initial stakeholder and product-manager interviews, I turned
          the problem space into three practical research goals.
        </SectionHeader>

        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
          <div className="rounded-2xl border border-accent/15 bg-accent/5 p-5">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-subtletext">
              Research focus
            </p>

            <h3 className="mt-3 text-2xl font-bold leading-tight text-ink">
              Turn stakeholder constraints into testable product questions.
            </h3>

            <p className="mt-4 text-sm leading-relaxed text-muted">
              This phase translated the replacement request into focused
              research questions that could guide technical direction, feature
              prioritization, and engineering tradeoffs.
            </p>
          </div>

          <div className="space-y-5">
            {projectGoals.map((goal, index) => (
              <article key={goal.title} className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-white">
                  {index + 1}
                </div>

                <div className="border-b border-accent/15 pb-5 last:border-b-0 last:pb-0">
                  <h3 className="text-lg font-bold text-ink">{goal.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {goal.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8">
        <SectionHeader
          eyebrow="Research process"
          title="3. How the work moved from discovery to beta validation"
        >
          Each research activity produced a specific product output: technical
          direction, prioritized requirements, interaction layouts, beta
          validation, or engineering recommendations.
        </SectionHeader>

        <div className="grid gap-5 md:grid-cols-2">
          {processSteps.map((step) => (
            <ProcessCard key={step.title} {...step} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8">
        <SectionHeader
          eyebrow="Discovery findings"
          title="4. The findings that shaped the product"
        >
          Interviews and thematic analysis identified the usability and
          operational issues that ResearchObs needed to solve first.
        </SectionHeader>

        <div className="grid gap-5">
          {discoveryFindings.map((finding) => (
            <FindingCard key={finding.title} {...finding} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8">
        <SectionHeader
          eyebrow="Beta validation"
          title="5. How ResearchObs performed against WhatsOb"
        >
          After the beta app and in-tablet MVP layouts were tested, I used a
          Qualtrics Likert questionnaire to compare ResearchObs with WhatsOb on
          the workflow topics most directly tied to the research findings.
        </SectionHeader>

        <div className="grid gap-5 lg:grid-cols-2">
          {betaMetrics.map((metric) => (
            <MetricCard key={metric.label} {...metric} />
          ))}
        </div>

        <div className="mt-6 rounded-3xl border border-accent/15 bg-surface p-6 shadow-sm">
          <blockquote className="rounded-2xl border-l-4 border-accent bg-accent/5 p-5">
            <p className="text-base italic leading-relaxed text-ink">
              “I made an error last week and kept thinking ‘where is the Undo
              button!’ I’m excited to use the new app.”
            </p>
            <footer className="mt-3 text-right text-xs font-bold uppercase tracking-[0.18em] text-subtletext">
              Senior Researcher
            </footer>
          </blockquote>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 pt-8">
        <SectionHeader
          eyebrow="Engineering handoff"
          title="6. What I recommended after testing"
        >
          The recommendation was primarily positive: the beta version met the
          core feature requirements, and additional user and manager requests
          should be added to future updates instead of blocking release.
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

// src/pages/gradingStudyPage.jsx

import React from "react";

const projectFacts = [
  {
    label: "Role",
    value: "UX Researcher",
  },
  {
    label: "Methods",
    value:
      "Recruitment, preliminary interviews, semi-structured interviews, transcript thematic analysis, persona development, journey mapping, impact/effort prioritization, stakeholder reporting",
  },
  {
    label: "Participants",
    value:
      "3 preliminary GTA interviews, followed by 10 formal GTA interviews across 3 departments",
  },
  {
    label: "Outcome",
    value:
      "Identified how onboarding, autonomy, and departmental support shape GTA grading confidence and error resolution",
  },
];

const impactStats = [
  {
    value: "100%",
    label: "Escalated serious cases",
    detail:
      "10/10 GTAs reported reaching out to faculty advisors for cheating or serious academic-integrity issues.",
  },
  {
    value: "50%",
    label: "Used peer support",
    detail:
      "5/10 GTAs relied on other GTAs for routine questions such as online exam setup.",
  },
  {
    value: "40%",
    label: "Had formal pre-teaching training",
    detail:
      "4/10 GTAs received a formal class before teaching, paired with monthly check-ins.",
  },
  {
    value: "30%",
    label: "Had no formal training",
    detail:
      "3/10 GTAs reported no formal teaching preparation and highly variable faculty support.",
  },
];

const problemThemes = [
  {
    title: "Vague institutional goal",
    description:
      "The broader university effort was framed as decreasing grading errors, but the causes of those errors were not yet clearly defined.",
  },
  {
    title: "Inconsistent onboarding",
    description:
      "GTA preparation varied widely across departments, ranging from formal classes to no structured training at all.",
  },
  {
    title: "Uneven support and autonomy",
    description:
      "Some GTAs were trusted to resolve issues with guidance, while others had nearly all grading issues handled by faculty.",
  },
  {
    title: "AI and cheating pressure",
    description:
      "Academic-integrity concerns, especially AI-related violations, created uncertainty and emotional load for GTAs.",
  },
];

const researchQuestions = [
  {
    question: "What grading issues do GTAs encounter most often?",
    answer:
      "Identify whether common problems were mostly technical, policy-related, academic-integrity related, or tied to unclear expectations.",
  },
  {
    question: "How do GTAs decide what to do when issues happen?",
    answer:
      "Understand when GTAs handle issues themselves, ask other GTAs, or escalate to faculty advisors.",
  },
  {
    question: "How does departmental onboarding shape confidence?",
    answer:
      "Compare how training, mentoring, and support structures affect GTA autonomy during grading conflicts.",
  },
];

const processSteps = [
  {
    title: "I. Recruitment and exploratory interviews",
    description:
      "I began with a recruitment campaign and interviewed 3 GTAs from two departments to understand the range of grading and onboarding experiences.",
    output:
      "The exploratory phase shaped the formal interview protocol around previous teaching experience, sources of support, onboarding quality, and common grading issues.",
  },
  {
    title: "II. Semi-structured formal study",
    description:
      "I recruited 10 additional GTAs across 3 departments and conducted semi-structured interviews using the protocol developed from the preliminary phase.",
    output:
      "The interview structure stayed consistent enough for comparison while leaving room for participants to describe department-specific support gaps.",
  },
  {
    title: "III. Transcript thematic analysis",
    description:
      "I coded interview transcripts for recurring patterns in teaching training, grading issues, AI concerns, departmental support, GTA-to-GTA support, desired support, and prior teaching experience.",
    output:
      "The analysis connected grading issues to onboarding quality, escalation habits, autonomy, and support structures.",
  },
  {
    title: "IV. Personas and journey map",
    description:
      "I synthesized the findings into two personas and a grading-issue journey map showing how onboarding and autonomy affect issue resolution.",
    output:
      "The journey map showed a feedback loop: GTAs who resolve issues with guided autonomy gain confidence, while GTAs who only escalate continue relying on others.",
  },
  {
    title: "V. Impact and effort prioritization",
    description:
      "I translated findings into recommendations and scored them by expected impact and effort to help departments decide what to change first.",
    output:
      "The final recommendations focused on standardized practical training, clearer escalation paths, peer support, and short recurring check-ins.",
  },
];

const thematicAreas = [
  "Teaching training course",
  "Common grading issues",
  "AI issues",
  "Departmental support",
  "GTA-to-GTA support",
  "Support wanted",
  "Previous teaching experience",
];

const gradingFindings = [
  {
    title: "AI usage was the most common grading issue",
    finding:
      "AI policy violations appeared across all formal interviews, making academic-integrity guidance the most consistent grading pain point.",
    recommendation:
      "Create clearer AI policy language, examples, and escalation expectations so GTAs and students understand what counts as a violation.",
    impact: "High impact",
    effort: "Medium effort",
    evidence: "10/10 GTAs",
  },
  {
    title: "Serious cheating cases followed faculty escalation",
    finding:
      "Every GTA reported going to a faculty advisor when cheating or serious academic-integrity issues were involved.",
    recommendation:
      "Make the escalation path explicit and easy to find to reduce uncertainty and emotional load during high-stakes cases.",
    impact: "High impact",
    effort: "Medium effort",
    evidence: "10/10 GTAs",
  },
  {
    title: "Routine questions often relied on peers",
    finding:
      "Half of the GTAs leaned on other GTAs for everyday questions, such as setting up online exams or checking whether they were handling a grading situation correctly.",
    recommendation:
      "Create a lightweight peer-support channel through Slack, Teams, office hours, or a recurring GTA discussion space.",
    impact: "Moderate impact",
    effort: "Low effort",
    evidence: "5/10 GTAs",
  },
  {
    title: "Responsibility boundaries were unclear",
    finding:
      "Some GTAs reported nearly everything to faculty advisors, who then handled most grading issues directly.",
    recommendation:
      "Clarify what GTAs should handle independently, what they should document, and what should be escalated.",
    impact: "High impact",
    effort: "Medium effort",
    evidence: "3/10 GTAs",
  },
];

const supportFindings = [
  {
    title: "Standardize pre-teaching foundations",
    finding:
      "4/10 GTAs received a formal class before teaching, paired with monthly virtual town halls. This model gave GTAs structure, early community-building, and predictable support, but it was not used department-wide.",
    recommendation:
      "Create a unified baseline course for new GTAs that focuses on applied teaching scenarios, grading policy, student conflict, AI violations, and escalation practice.",
    impact: "High impact",
    effort: "High effort",
    evidence: "4/10 GTAs",
  },
  {
    title: "Optimize weekly teaching meetings",
    finding:
      "3/10 GTAs experienced intense weekly 2-hour mandatory training meetings. Participants described these as only somewhat relevant to daily teaching needs.",
    recommendation:
      "Rework long mandatory meetings into shorter, focused, actionable sessions that address real grading and teaching issues without increasing burnout.",
    impact: "Moderate impact",
    effort: "High effort",
    evidence: "3/10 GTAs",
  },
  {
    title: "Guarantee minimum support for all GTAs",
    finding:
      "3/10 GTAs reported no formal training and support that depended heavily on whichever faculty member they were assigned.",
    recommendation:
      "Set a minimum department-wide support standard so every GTA receives baseline onboarding, clear escalation guidance, and predictable access to mentoring.",
    impact: "Moderate impact",
    effort: "Moderate effort",
    evidence: "3/10 GTAs",
  },
];

const personas = [
  {
    name: "Jenny",
    type: "Supported, more experienced GTA",
    quote:
      "Although the department certainly helps and is involved, we are the primary person handling how grading occurs.",
    traits: [
      "Received formal teaching preparation",
      "Has predictable faculty check-ins",
      "Has more experience resolving grading issues",
      "Feels trusted to use judgment before escalating",
    ],
    need: "Jenny mainly needs clearer AI policy guidance and light-touch check-ins that preserve her autonomy.",
  },
  {
    name: "Dan",
    type: "Less supported, more junior GTA",
    quote:
      "I just go along with what the department tells me to do since we are not encouraged to resolve issues ourselves.",
    traits: [
      "Received little or no formal teaching preparation",
      "Has inconsistent departmental support",
      "Escalates because expectations are unclear",
      "Gains fewer opportunities to build confidence",
    ],
    need: "Dan needs baseline training, clearer responsibility boundaries, and guided opportunities to participate in issue resolution.",
  },
];

const journeySteps = [
  {
    phase: "Preliminary",
    title: "Before a grading issue is recognized",
    principle:
      "GTA confidence is shaped by prior training and teaching experience.",
    jenny:
      "Formal training and first-hand experience make Jenny confident that she can solve most grading issues.",
    dan: "With no formal training and little experience, Dan feels that his only real option is to have a faculty member solve the problem.",
  },
  {
    phase: "Grading",
    title: "GTA recognizes a grading issue",
    principle: "Formal training helps GTAs identify policy violations.",
    jenny:
      "Past experience makes it easier for Jenny to detect abnormal behavior and spot policy violations quickly.",
    dan: "Dan is more likely to miss warning signs or second-guess whether a situation counts as cheating.",
  },
  {
    phase: "Assessment",
    title: "GTA determines the best course of action",
    principle:
      "Self-confidence plus policy knowledge guide the action a GTA takes.",
    jenny:
      "Jenny collects relevant information and narrows options before looping in a supervisor.",
    dan: "Dan escalates minor issues or escalates with incomplete information, increasing faculty load and slowing resolution.",
  },
  {
    phase: "Department",
    title: "The issue is assessed at the department level",
    principle:
      "Departmental support can either build autonomy or remove opportunities to practice.",
    jenny:
      "Jenny’s department provides guidance while trusting her judgment, encouraging her to take the lead.",
    dan: "Dan’s department takes over most academic issues, limiting his chances to build conflict-resolution skills.",
  },
  {
    phase: "Resolution",
    title: "The issue is resolved with the student",
    principle:
      "Future confidence depends on the outcome and mentoring received during resolution.",
    jenny:
      "Jenny gains more experience, higher confidence, and clearer mental models for next time.",
    dan: "Dan gains little experience and continues relying on others when similar issues happen again.",
  },
];

const finalRecommendations = [
  {
    title: "Create a practical baseline training course",
    description:
      "New GTAs need standardized training that focuses on applied teaching scenarios, grading policy, AI violations, escalation, and real examples rather than only pedagogical theory.",
  },
  {
    title: "Use short semi-regular check-ins",
    description:
      "Brief check-ins around every two months can provide support without overwhelming experienced GTAs or removing opportunities to gain autonomy.",
  },
  {
    title: "Make escalation rules visible",
    description:
      "Departments should clearly state which issues GTAs own, which issues they document, and which issues require faculty involvement.",
  },
  {
    title: "Build peer-support channels",
    description:
      "A lightweight GTA-to-GTA support channel can reduce ad hoc help-seeking and make everyday teaching questions easier to resolve.",
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

function ResearchQuestionCard({ question, answer, index }) {
  return (
    <article className="rounded-3xl border border-accent/15 bg-surface p-6 shadow-sm">
      <div className="flex items-start gap-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-white">
          {index + 1}
        </div>

        <div>
          <h3 className="text-lg font-bold leading-tight text-ink">
            {question}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">{answer}</p>
        </div>
      </div>
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

function ThemeChips() {
  return (
    <div className="flex flex-wrap gap-3">
      {thematicAreas.map((theme) => (
        <span
          key={theme}
          className="rounded-full border border-accent/20 bg-surface px-4 py-2 text-sm font-semibold text-muted shadow-sm"
        >
          {theme}
        </span>
      ))}
    </div>
  );
}

function OpportunityCard({
  title,
  finding,
  recommendation,
  impact,
  effort,
  evidence,
}) {
  return (
    <article className="rounded-3xl border border-accent/15 bg-surface p-6 shadow-sm">
      <div className="flex flex-col gap-3 border-b border-accent/15 pb-4 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-subtletext">
            {evidence}
          </p>
          <h3 className="mt-2 text-xl font-bold text-ink">{title}</h3>
        </div>

        <div className="flex flex-wrap gap-2 md:justify-end">
          <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-accent">
            {impact}
          </span>
          <span className="rounded-full border border-accent/20 px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-muted">
            {effort}
          </span>
        </div>
      </div>

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
    </article>
  );
}

function SupportFindingCard({ title, description, impact, effort }) {
  return (
    <article className="rounded-3xl border border-accent/15 bg-surface p-6 shadow-sm">
      <div className="flex flex-wrap gap-2">
        <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-accent">
          {impact}
        </span>
        <span className="rounded-full border border-accent/20 px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-muted">
          {effort}
        </span>
      </div>

      <h3 className="mt-4 text-xl font-bold text-ink">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted">{description}</p>
    </article>
  );
}

function PersonaCard({ name, type, quote, traits, need }) {
  return (
    <article className="rounded-3xl border border-accent/15 bg-surface p-6 shadow-sm">
      <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent">
        {type}
      </p>

      <h3 className="mt-2 text-3xl font-bold text-ink">{name}</h3>

      <blockquote className="mt-4 rounded-2xl border-l-4 border-accent bg-accent/5 p-4">
        <p className="text-sm italic leading-relaxed text-ink">“{quote}”</p>
      </blockquote>

      <ul className="mt-5 space-y-3">
        {traits.map((trait) => (
          <li key={trait} className="flex gap-3">
            <span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-accent" />
            <span className="text-sm leading-relaxed text-muted">{trait}</span>
          </li>
        ))}
      </ul>

      <div className="mt-5 rounded-2xl bg-accent/5 p-4">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-subtletext">
          Design implication
        </p>
        <p className="mt-2 text-sm leading-relaxed text-ink">{need}</p>
      </div>
    </article>
  );
}

function JourneyStep({ phase, title, principle, jenny, dan, index }) {
  return (
    <article className="relative rounded-3xl border border-accent/15 bg-surface p-6 shadow-sm">
      <div className="flex flex-col gap-4 md:flex-row md:items-start">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent text-lg font-bold text-white">
          {index + 1}
        </div>

        <div className="flex-1">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-subtletext">
            {phase}
          </p>
          <h3 className="mt-1 text-xl font-bold text-ink">{title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">{principle}</p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl bg-accent/5 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">
                Jenny
              </p>
              <p className="mt-2 text-sm leading-relaxed text-ink">{jenny}</p>
            </div>

            <div className="rounded-2xl border border-accent/15 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-subtletext">
                Dan
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted">{dan}</p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function GradingStudyPage() {
  return (
    <main className="min-h-screen bg-backgroundwhite text-ink">
      <section className="mx-auto max-w-7xl px-6 pb-8 pt-12">
        <p className="text-sm font-bold uppercase tracking-[0.22em] text-accent">
          GTA Grading | Onboarding and Support Research
        </p>

        <h1 className="mt-4 max-w-5xl text-4xl font-bold leading-tight text-ink md:text-6xl">
          Understanding how GTA onboarding affects grading confidence and error
          resolution
        </h1>

        <p className="mt-5 max-w-4xl text-lg leading-relaxed text-muted md:text-xl">
          A university-wide initiative wanted to decrease grading errors, but
          the problem was too broad to act on directly. I led the UX research
          focused on whether GTA onboarding, support, and autonomy shaped how
          graduate instructors recognized, escalated, and learned from grading
          issues.
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
          title="What the research clarified"
        >
          The study showed that grading errors were not only grading problems.
          They were also onboarding, autonomy, and support problems that shaped
          whether GTAs learned from issues or repeatedly escalated them.
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
          The results above summarize the patterns I reported. The sections
          below explain how the research moved from a vague institutional goal
          into personas, journey mapping, and department-facing recommendations.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8">
        <SectionHeader
          eyebrow="Problem framing"
          title="1. Why the grading project needed research"
        >
          The broader initiative asked the research team to decrease grading
          errors. My portion focused on whether onboarding and support explained
          how GTAs handled grading issues once they appeared.
        </SectionHeader>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {problemThemes.map((theme) => (
            <SimpleCard key={theme.title} {...theme} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8">
        <SectionHeader
          eyebrow="Research questions"
          title="2. What the study needed to answer"
        >
          Preliminary interviews helped turn the general “decrease grading
          errors” goal into focused questions about grading issues, escalation,
          and department-level support.
        </SectionHeader>

        <div className="grid gap-5 md:grid-cols-3">
          {researchQuestions.map((item, index) => (
            <ResearchQuestionCard key={item.question} index={index} {...item} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8">
        <SectionHeader
          eyebrow="Approach"
          title="3. How I moved from protocol design to synthesis"
        >
          I used preliminary interviews to design the formal protocol, then used
          thematic analysis to connect GTA experiences to specific support and
          onboarding opportunities.
        </SectionHeader>

        <div className="grid gap-5 md:grid-cols-2">
          {processSteps.map((step) => (
            <ProcessCard key={step.title} {...step} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8">
        <SectionHeader
          eyebrow="Thematic analysis"
          title="4. What I coded across interviews"
        >
          The transcript analysis covered both the visible grading problems and
          the support systems that shaped how GTAs responded to those problems.
        </SectionHeader>

        <ThemeChips />
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8">
        <SectionHeader
          eyebrow="Grading issue findings"
          title="5. What GTAs needed during grading conflicts"
        >
          The highest-priority findings centered on academic integrity,
          escalation, peer support, and clearer responsibility boundaries.
        </SectionHeader>

        <div className="grid gap-5">
          {gradingFindings.map((finding) => (
            <OpportunityCard key={finding.title} {...finding} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8">
        <SectionHeader
          eyebrow="Department support findings"
          title="6. How departments differed in GTA preparation"
        >
          Departments created very different starting points for GTAs. Some
          provided structured training and regular support; others left GTAs to
          learn grading and teaching norms while already teaching.
        </SectionHeader>

        <div className="grid gap-5">
          {supportFindings.map((finding) => (
            <OpportunityCard key={finding.title} {...finding} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8">
        <SectionHeader
          eyebrow="Personas"
          title="7. The two GTA experiences that emerged"
        >
          The findings produced two personas that showed how onboarding and
          autonomy changed the way GTAs perceived grading problems.
        </SectionHeader>

        <div className="grid gap-5 lg:grid-cols-2">
          {personas.map((persona) => (
            <PersonaCard key={persona.name} {...persona} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8">
        <SectionHeader
          eyebrow="Journey map"
          title="8. How onboarding shaped grading-issue resolution"
        >
          The journey map showed that grading confidence is built through guided
          participation. GTAs who only report issues gain less experience and
          continue relying on departments for similar problems.
        </SectionHeader>

        <div className="space-y-5">
          {journeySteps.map((step, index) => (
            <JourneyStep key={step.phase} index={index} {...step} />
          ))}
        </div>

        <div className="mt-6 rounded-3xl border border-accent/15 bg-accent p-6 text-white shadow-sm md:p-8">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-white/75">
            Key journey-map takeaway
          </p>
          <h3 className="mt-3 text-2xl font-bold leading-tight md:text-3xl">
            GTAs who handle policy violations from start to finish build more
            confidence than GTAs who only report issues.
          </h3>
          <p className="mt-4 text-base leading-relaxed text-white/85">
            Guided autonomy creates a feedback loop: more experience leads to
            clearer judgment, which reduces unnecessary escalation and improves
            confidence during future grading issues.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 pt-8">
        <SectionHeader
          eyebrow="Recommendations"
          title="9. What I recommended to departments"
        >
          The final recommendations focused on standardizing practical training,
          making escalation easier, and supporting GTAs without removing the
          experience they need to become confident instructors.
        </SectionHeader>

        <div className="grid gap-5 md:grid-cols-2">
          {finalRecommendations.map((recommendation) => (
            <SimpleCard key={recommendation.title} {...recommendation} />
          ))}
        </div>

        <div className="mt-6 rounded-3xl border border-accent/15 bg-surface p-6 shadow-sm md:p-8">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent">
            Final impact
          </p>
          <p className="mt-3 text-lg leading-relaxed text-muted">
            These findings were presented as part of the broader university
            research team’s formal reporting. The recommendations helped
            departments refine GTA onboarding, training, and support practices
            for grading-related issues.
          </p>
        </div>
      </section>
    </main>
  );
}

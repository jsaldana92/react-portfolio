// src/pages/hyperlinkPage.jsx

import React from "react";

const projectFacts = [
  {
    label: "Role",
    value: "UX Researcher and Data Analyst",
  },
  {
    label: "Methods",
    value:
      "Dataset audit; data cleaning; de-identification; group comparison; t-tests; linear regression; chi-square model comparison; stakeholder reporting",
  },
  {
    label: "Data",
    value:
      "Existing online classroom engagement and final-grade records from de-identified university course datasets",
  },
  {
    label: "Outcome",
    value:
      "Showed that hyperlinking increased lecture engagement and that positive lecture engagement was associated with higher final grades",
  },
];

const impactStats = [
  {
    value: "1.7×",
    label: "More total lecture views",
    detail:
      "120 views across three lectures when hyperlinked vs. 70 without hyperlinks.",
  },
  {
    value: "40 vs. 23",
    label: "Average views per lecture",
    detail: "Hyperlinked announcements produced higher average lecture views.",
  },
  {
    value: "Strong model",
    label: "Predicted grades better than chance",
    detail:
      "Lecture engagement metrics helped explain meaningful differences in final course scores.",
  },
  {
    value: "3",
    label: "Departments briefed",
    detail:
      "Findings were shared with three departments and moved into broader onboarding recommendations.",
  },
];

const problemThemes = [
  {
    title: "Existing data, practical question",
    description:
      "The study used existing classroom engagement data to evaluate whether a simple instructional design change could increase lecture engagement.",
  },
  {
    title: "Announcement use was controlled",
    description:
      "Classrooms were only compared if they used weekly online announcements, reducing the chance that announcements themselves explained the difference.",
  },
  {
    title: "Privacy constraints shaped analysis",
    description:
      "Sensitive information was encrypted and de-identified so results could not be tied back to classrooms, years, professors, or students.",
  },
  {
    title: "Engagement needed a performance check",
    description:
      "After hyperlinking increased engagement, the next step was testing whether engagement metrics were meaningfully related to final grades.",
  },
];

const researchQuestions = [
  {
    question: "Does hyperlinking increase lecture engagement?",
    answer:
      "Compare lecture views between classrooms that hyperlinked weekly announcements and classrooms that used announcements without lecture hyperlinks.",
  },
  {
    question: "Does engagement predict course performance?",
    answer:
      "Model final class score using lecture engagement metrics and a hyperlinked/non-hyperlinked classroom indicator.",
  },
  {
    question: "Does hyperlinking directly predict grades?",
    answer:
      "Test whether hyperlinking itself predicts final grade after accounting for student engagement behaviors.",
  },
];

const analysisSteps = [
  {
    title: "Identify comparable classrooms",
    description:
      "I searched the wider dataset for online classrooms that used weekly announcements, then split the sample into hyperlinked and non-hyperlinked groups.",
    output:
      "This kept announcement usage from becoming the main confound and isolated the hyperlinking difference more clearly.",
  },
  {
    title: "Protect student and classroom privacy",
    description:
      "I encrypted and de-identified sensitive fields before analysis.",
    output:
      "The dataset could be analyzed without linking results back to specific classrooms, years, professors, or students.",
  },
  {
    title: "Compare engagement outcomes",
    description:
      "I ran t-tests comparing lecture engagement between hyperlinked and non-hyperlinked classrooms.",
    output:
      "Hyperlinked classrooms produced more total views and higher average views per lecture.",
  },
  {
    title: "Model final grades",
    description:
      "I ran a linear regression using hyperlink status and lecture engagement metrics to predict final class score.",
    output:
      "The model tested whether engagement behaviors were connected to student performance.",
  },
  {
    title: "Check whether the model added value",
    description:
      "Before interpreting predictors, I compared the full model against a null model using a chi-square comparison.",
    output:
      "The full model predicted grades better than random chance, supporting interpretation of the engagement predictors.",
  },
];

const engagementMetrics = [
  {
    label: "Total views over three lectures",
    hyperlinked: 120,
    nonHyperlinked: 70,
    takeaway:
      "Hyperlinked announcements produced substantially more total lecture views.",
  },
  {
    label: "Average views per lecture",
    hyperlinked: 40,
    nonHyperlinked: 23,
    takeaway:
      "The engagement lift also appeared at the per-lecture level, not only in total volume.",
  },
];

const modelFindings = [
  {
    title: "Viewing a lecture mattered",
    value: "+7 points",
    description:
      "Viewing a lecture at least once increased final grade by approximately seven points per lecture.",
  },
  {
    title: "Repeat viewing helped",
    value: "+2 points",
    description:
      "Subsequent lecture views increased final grade by approximately two additional points.",
  },
  {
    title: "Loading without viewing was a warning sign",
    value: "-2 points",
    description:
      "Loading lectures more often, regardless of actual viewing, was associated with a decrease in final grade.",
  },
];

const conclusions = [
  {
    title: "Hyperlinking increased engagement",
    description:
      "Students in hyperlinked classrooms viewed lectures more often than students in non-hyperlinked classrooms.",
  },
  {
    title: "Engagement predicted grades",
    description:
      "Positive engagement behaviors, especially viewing lectures and returning to them, were associated with higher final scores.",
  },
  {
    title: "Hyperlinking was not a direct grade predictor",
    description:
      "Hyperlinking itself did not directly predict final grade, which is expected given the role of student autonomy and other course-performance factors.",
  },
];

const recommendations = [
  {
    title: "Use hyperlinks as a low-effort engagement intervention",
    description:
      "Professors should hyperlink key lecture resources in weekly announcements when they expect engagement barriers.",
  },
  {
    title: "Prioritize high-friction online classrooms",
    description:
      "This recommendation is especially useful for online sections, large classes, difficult course material, or courses with many lectures.",
  },
  {
    title: "Flag students who load but do not view lectures",
    description:
      "Students who repeatedly open lecture content without meaningful viewing may need earlier outreach or directed support.",
  },
  {
    title: "Add findings to onboarding",
    description:
      "Departments can include hyperlinking practices in onboarding guidance for new instructors teaching online or lecture-heavy courses.",
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
    <article className="relative rounded-3xl border border-accent/15 bg-surface p-6 shadow-sm">
      <div className="absolute -top-4 left-6 flex h-9 w-9 items-center justify-center rounded-full bg-accent text-sm font-bold text-white shadow-sm">
        {index + 1}
      </div>

      <h3 className="mt-4 text-xl font-bold leading-tight text-ink">
        {question}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-muted">{answer}</p>
    </article>
  );
}

function AnalysisStep({ title, description, output }) {
  return (
    <article className="grid gap-4 rounded-3xl border border-accent/15 bg-surface p-6 shadow-sm md:grid-cols-[0.75fr_1.25fr]">
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-subtletext">
          Method step
        </p>
        <h3 className="mt-2 text-xl font-bold text-ink">{title}</h3>
      </div>

      <div>
        <p className="text-sm leading-relaxed text-muted">{description}</p>

        <div className="mt-4 rounded-2xl bg-accent/5 p-4">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-subtletext">
            Output
          </p>
          <p className="mt-2 text-sm leading-relaxed text-ink">{output}</p>
        </div>
      </div>
    </article>
  );
}

function EngagementMetricCard({
  label,
  hyperlinked,
  nonHyperlinked,
  takeaway,
}) {
  const maxValue = 125;
  const hyperlinkedWidth = `${Math.max((hyperlinked / maxValue) * 100, 4)}%`;
  const nonHyperlinkedWidth = `${Math.max(
    (nonHyperlinked / maxValue) * 100,
    4,
  )}%`;
  const difference = hyperlinked - nonHyperlinked;

  return (
    <article className="rounded-3xl border border-accent/15 bg-surface p-6 shadow-sm">
      <div className="flex flex-col gap-3 border-b border-accent/15 pb-4 md:flex-row md:items-start md:justify-between">
        <div>
          <h3 className="text-lg font-bold text-ink">{label}</h3>
          <p className="mt-1 text-sm leading-relaxed text-muted">{takeaway}</p>
        </div>

        <div className="w-fit rounded-full bg-accent/10 px-3 py-1 text-sm font-bold text-accent">
          +{difference}
        </div>
      </div>

      <div className="mt-5 space-y-4">
        <div>
          <div className="mb-2 flex items-center justify-between text-sm">
            <span className="font-semibold text-muted">Hyperlinked</span>
            <span className="font-bold text-ink">{hyperlinked}</span>
          </div>

          <div className="h-3 overflow-hidden rounded-full bg-accent/10">
            <div
              className="h-full rounded-full bg-accent"
              style={{ width: hyperlinkedWidth }}
            />
          </div>
        </div>

        <div>
          <div className="mb-2 flex items-center justify-between text-sm">
            <span className="font-semibold text-muted">Non-hyperlinked</span>
            <span className="font-bold text-ink">{nonHyperlinked}</span>
          </div>

          <div className="h-3 overflow-hidden rounded-full bg-accent/10">
            <div
              className="h-full rounded-full bg-accent/35"
              style={{ width: nonHyperlinkedWidth }}
            />
          </div>
        </div>
      </div>
    </article>
  );
}

function ModelFindingCard({ title, value, description }) {
  return (
    <article className="rounded-3xl border border-accent/15 bg-surface p-6 shadow-sm">
      <p className="text-3xl font-bold text-accent">{value}</p>
      <h3 className="mt-3 text-lg font-bold text-ink">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
    </article>
  );
}

export default function HyperlinkPage() {
  return (
    <main className="min-h-screen bg-backgroundwhite text-ink">
      <section className="mx-auto max-w-7xl px-6 pb-8 pt-12">
        <p className="text-sm font-bold uppercase tracking-[0.22em] text-accent">
          Hyperlink Engagement | Quantitative UX Research
        </p>

        <h1 className="mt-4 max-w-5xl text-4xl font-bold leading-tight text-ink md:text-6xl">
          Testing whether small course-design changes increase online lecture
          engagement
        </h1>

        <p className="mt-5 max-w-4xl text-lg leading-relaxed text-muted md:text-xl">
          I analyzed de-identified online classroom engagement records to test
          whether hyperlinking weekly announcements to lecture videos increased
          student engagement and whether that engagement was associated with
          final course performance.
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
          title="What the analysis showed"
        >
          Hyperlinking did not directly predict final grades, but it did
          increase lecture engagement. Students who positively engaged with
          lecture content earned higher final scores.
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
          the dataset was selected, protected, analyzed, and translated into
          recommendations for online teaching.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8">
        <SectionHeader
          eyebrow="Problem framing"
          title="1. Why this study was needed"
        >
          The goal was to find a simple, low-cost way to increase engagement in
          online university classrooms using records that already existed.
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
          title="2. What the analysis needed to answer"
        >
          The study separated engagement from performance so the results would
          not overclaim what hyperlinking could do on its own.
        </SectionHeader>

        <div className="grid gap-6 md:grid-cols-3">
          {researchQuestions.map((item, index) => (
            <ResearchQuestionCard key={item.question} index={index} {...item} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8">
        <SectionHeader eyebrow="Method" title="3. How I analyzed the dataset">
          I treated the dataset as a natural comparison between online
          classrooms that used hyperlinked weekly announcements and classrooms
          that used weekly announcements without lecture hyperlinks.
        </SectionHeader>

        <div className="space-y-5">
          {analysisSteps.map((step) => (
            <AnalysisStep key={step.title} {...step} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8">
        <SectionHeader
          eyebrow="Engagement results"
          title="4. Hyperlinking increased lecture engagement"
        >
          The first comparison tested whether students engaged differently with
          lecture videos when announcements included direct links.
        </SectionHeader>

        <div className="grid gap-5 lg:grid-cols-2">
          {engagementMetrics.map((metric) => (
            <EngagementMetricCard key={metric.label} {...metric} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8">
        <SectionHeader
          eyebrow="Grade model"
          title="5. Engagement, not hyperlinking alone, predicted grades"
        >
          After engagement increased, I modeled final class score to test
          whether the engagement signals had a meaningful connection to course
          performance.
        </SectionHeader>

        <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <article className="rounded-3xl border border-accent/15 bg-accent p-6 text-white shadow-sm md:p-8">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-white/75">
              Model result
            </p>

            <h3 className="mt-3 text-3xl font-bold leading-tight">
              F(7,567) = 38.8, p &lt; .001
            </h3>

            <p className="mt-4 text-base leading-relaxed text-white/85">
              The regression model predicted final grades better than random
              chance and accounted for approximately 39.4% of the variance in
              the dataset.
            </p>
          </article>

          <article className="rounded-3xl border border-accent/15 bg-surface p-6 shadow-sm md:p-8">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-subtletext">
              Key interpretation
            </p>

            <h3 className="mt-3 text-2xl font-bold leading-tight text-ink">
              Hyperlinking worked as an engagement catalyst, not as a direct
              grade intervention.
            </h3>

            <p className="mt-4 text-sm leading-relaxed text-muted md:text-base">
              The hyperlink variable itself did not directly predict final
              grade. The meaningful signals were how students interacted with
              lecture content after it was made easier to access.
            </p>
          </article>
        </div>

        <div className="mt-5 grid gap-5 md:grid-cols-3">
          {modelFindings.map((finding) => (
            <ModelFindingCard key={finding.title} {...finding} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8">
        <SectionHeader
          eyebrow="Research conclusions"
          title="6. What the findings meant"
        >
          The results supported hyperlinking as a practical way to increase
          lecture engagement, while also showing where the limits of that
          intervention were.
        </SectionHeader>

        <div className="grid gap-5 md:grid-cols-3">
          {conclusions.map((conclusion) => (
            <SimpleCard key={conclusion.title} {...conclusion} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 pt-8">
        <SectionHeader
          eyebrow="Recommendations"
          title="7. What I recommended to departments"
        >
          The recommendations focused on using hyperlinking where it is most
          likely to reduce friction and identifying students whose lecture
          behavior may signal broader engagement problems.
        </SectionHeader>

        <div className="grid gap-5 md:grid-cols-2">
          {recommendations.map((recommendation) => (
            <SimpleCard key={recommendation.title} {...recommendation} />
          ))}
        </div>
      </section>
    </main>
  );
}

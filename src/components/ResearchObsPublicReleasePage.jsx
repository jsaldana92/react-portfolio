// src/pages/ResearchObsPublicReleasePage.jsx

import React from "react";

const projectFacts = [
  {
    label: "Role",
    value: "Senior UX Researcher",
  },
  {
    label: "Methods",
    value:
      "Market analysis, competitive analysis, stakeholder research, competitor-user interviews, alpha usability testing, research ops, GA4/BigQuery analytics, beta testing, survey research",
  },
  {
    label: "Participants",
    value:
      "Stakeholders, 4 competitor users, alpha testers, and 26 Google Play beta testers",
  },
  {
    label: "Outcome",
    value:
      "Refocused ResearchObs as a free public app with local-first data, personal cloud sync, clearer CSV exports, and tutorial-led onboarding",
  },
];

const impactStats = [
  {
    value: "26",
    label: "Beta testers",
    detail:
      "Recruited Google Play beta users across guided and unguided testing conditions.",
  },
  {
    value: "4.8 / 5",
    label: "Cloud linking tested very positively",
    detail:
      "Across ease, clarity, and confidence questions, cloud linking scored near the top of the 1–5 survey scale.",
  },
  {
    value: "4.7 / 5",
    label: "Data collection tested very positively",
    detail:
      "Starting, recording, understanding controls, and trusting entered data all averaged near the positive end of the scale.",
  },
  {
    value: "Free release",
    label: "Strategic pivot",
    detail:
      "Research shifted ROI from subscription revenue toward adoption, citations, collaborations, and academic visibility.",
  },
];

const programPhases = [
  {
    title: "Market Strategy",
    description:
      "Defined whether ResearchObs should become a customizable public product, a paid app, or a set of custom builds.",
  },
  {
    title: "Alpha UX Validation",
    description:
      "Tested early MVP flows for storage, data collection, settings, and home navigation.",
  },
  {
    title: "Analytics & Research Ops",
    description:
      "Created a privacy-conscious GA4/BigQuery event system for scalable beta research.",
  },
  {
    title: "Beta Validation",
    description:
      "Measured product fit, feature usefulness, workflow gaps, and adoption barriers with 26 beta testers.",
  },
];

const problemThemes = [
  {
    title: "Interest beyond the original lab",
    description:
      "After the first lab deployment, interest in ResearchObs increased by from other institutions but required the app to be adapted to their own workflows.",
  },
  {
    title: "Custom builds would not scale",
    description:
      "The product needed to avoid becoming multiple custom apps and instead become one flexible platform that users could configure themselves.",
  },
  {
    title: "A small market changed the ROI logic",
    description:
      "The audience for animal-behavior data collection tools is specialized, making direct subscription revenue less reliable than adoption, visibility, and collaboration.",
  },
  {
    title: "Adoption depended on workflow value",
    description:
      "A better interface alone would not be enough. Users needed clear benefits in setup, storage, analysis, export, and onboarding.",
  },
];

const marketFindings = [
  {
    title: "The market already included free options",
    finding:
      "One competitor was open source, one paid mobile app was no longer supported, and the closest direct competitor moved to a free model through outside funding.",
    implication:
      "A subscription-first ResearchObs release would be hard to justify unless the app offered major workflow improvements.",
  },
  {
    title: "Modern data collection was a clear opening",
    finding:
      "Competitor interfaces were outdated or difficult to learn, especially for rapid field or lab data collection.",
    implication:
      "ResearchObs could compete by making live observation workflows faster, clearer, and easier to learn.",
  },
  {
    title: "Exportable analysis was under-served",
    finding:
      "The direct competitor offered reports, heatmaps, and social network analysis, but users could not easily export final visuals from those tools.",
    implication:
      "Exportable reports, heatmaps, and SNA visuals became meaningful differentiators rather than decorative features.",
  },
  {
    title: "CSV cleanup was a migration barrier",
    finding:
      "Competitor users described exports as hard to clean because of too many columns, missing automatic time logging, and difficult analysis prep.",
    implication:
      "Clean CSV output became a high-priority feature because it gave labs a concrete reason to switch after a project cycle ended.",
  },
];

const competitorInterviewFindings = [
  {
    title: "Why users might stay",
    description:
      "Existing projects already had established workflows. A free competitor also made it harder for users to justify switching to a paid or unfamiliar tool.",
  },
  {
    title: "Why users might switch",
    description:
      "Cleaner exports, faster setup, modern data collection, and exportable visuals gave ResearchObs a stronger migration argument.",
  },
  {
    title: "What would not be enough",
    description:
      "Updated UI alone was not enough to drive adoption if the app did not improve data processing, setup, storage, or reporting.",
  },
];

const strategyPriorities = [
  {
    tier: "Launch critical",
    items: [
      "Free public app model",
      "Local-first storage",
      "Dropbox and Google Drive sync",
      "Clean CSV exports",
      "Fast data collection UI",
      "Simple animal profile creation/editing",
    ],
  },
  {
    tier: "Moderate-high priority",
    items: [
      "Exportable reports",
      "Exportable heatmaps",
      "Exportable social network analysis",
      "Clearer analysis setup guidance",
    ],
  },
  {
    tier: "Lower launch priority",
    items: [
      "Projects and collaboration",
      "Multiple access tiers",
      "Advanced permissions",
      "OneDrive support",
    ],
  },
];

const alphaFindings = [
  {
    area: "Storage",
    finding:
      "Storage worked for its core purpose, but species and groups became difficult to distinguish when multiple species were selected.",
    recommendation:
      "Add color coding or simple visual feedback to connect groups back to the species they belong to.",
  },
  {
    area: "Data collection",
    finding:
      "Behavior buttons had too many popups, slowing down live data entry and creating unnecessary interaction cost.",
    recommendation:
      "Use one central behavior popup with consistently grouped internal options to support memory learning and faster repeat use.",
  },
  {
    area: "Subjects",
    finding:
      "Subject buttons were too small and too tightly spaced for rapid observation workflows.",
    recommendation:
      "Increase button size and spacing, and support uploaded subject images when available.",
  },
  {
    area: "Observation editing",
    finding:
      "Direct text editing was flexible, but users worried it could create inconsistent values across files.",
    recommendation:
      "Restrict edits to valid existing combinations rather than allowing unrestricted free-text entry.",
  },
  {
    area: "Settings",
    finding:
      "Settings were split into pages that did not match how users expected setup decisions to relate to each other.",
    recommendation:
      "Group global settings at the species level and create a dedicated behavior hub for behavior-related setup.",
  },
];

const analyticsEvents = [
  {
    category: "Page flow",
    examples: ["page_enter", "page_exit"],
  },
  {
    category: "Feature interaction",
    examples: ["feature_open", "feature_use", "feature_close"],
  },
  {
    category: "Observation workflow",
    examples: ["obs_launch", "obs_control", "obs_saved", "obs_export"],
  },
  {
    category: "Sync and storage",
    examples: ["obs_upload", "sync_action"],
  },
  {
    category: "Analysis tools",
    examples: ["analysis_run", "analysis_export", "report_action"],
  },
  {
    category: "Settings and support",
    examples: [
      "setting_toggle",
      "project_action",
      "support_action",
      "auth_action",
    ],
  },
];

const betaOverallMetrics = [
  {
    label: "Observation work support",
    score: 4.0,
    scale: "1 = not at all well, 5 = extremely well",
    interpretation:
      "Users generally felt ResearchObs supported the type of observation work they needed to complete.",
  },
  {
    label: "Expected feature match",
    score: 4.3,
    scale: "1 = not at all well, 5 = extremely well",
    interpretation:
      "The available features matched what users expected from an animal-behavior data collection app.",
  },
  {
    label: "Setup-to-export workflow",
    score: 3.2,
    scale: "1 = not at all well, 5 = extremely well",
    interpretation:
      "The full workflow was closer to neutral/moderately positive, showing that onboarding support was still needed.",
  },
  {
    label: "Likely to reuse",
    score: 3.8,
    scale: "1 = very unlikely, 5 = very likely",
    interpretation:
      "Users leaned positive, but not strongly enough to assume migration from established workflows.",
  },
];

const betaFeatureMetrics = [
  {
    label: "Data collection pages",
    score: 4.7,
    status: "Strong",
    meaning: "Very positive reception",
    scale:
      "High scores showed strong user satisfaction with starting sessions, recording observations, understanding controls, and trusting entered data.",
  },
  {
    label: "Cloud linking",
    score: 4.8,
    status: "Strong",
    meaning: "Very easy, clear, and trustworthy",
    scale:
      "Users found Dropbox and Google Drive linking easy to complete and clear enough to trust upload/download outcomes.",
  },
  {
    label: "Export/import observation data",
    score: 4.4,
    status: "Strong",
    meaning: "Positive data portability",
    scale:
      "Scores showed users generally understood export/import options and felt confident that files contained the expected observation data.",
  },
  {
    label: "App navigation",
    score: 4.0,
    status: "Positive",
    meaning: "Generally easy to navigate",
    scale:
      "Navigation averaged near the positive range, suggesting users could find major app areas but still benefited from clearer first-time guidance.",
  },
  {
    label: "Export/import animal profiles",
    score: 3.5,
    status: "Moderate",
    meaning: "Usable but not seamless",
    scale:
      "Scores landed between neutral and positive, suggesting profile reuse worked but needed clearer labels and stronger confirmation feedback.",
  },
  {
    label: "Animal profiles",
    score: 2.7,
    status: "Needs work",
    meaning: "First-time setup friction",
    scale:
      "Below-neutral scores showed that creating and editing animal profiles was one of the clearest usability gaps for new users.",
  },
  {
    label: "Projects",
    score: 2.8,
    status: "Needs work",
    meaning: "Structure was unclear",
    scale:
      "Users struggled to understand the relationship between projects, species, groups, animals, and observations.",
  },
  {
    label: "Reports, SNA, and heatmaps",
    score: 2.2,
    status: "Needs guidance",
    meaning: "Powerful but confusing",
    scale:
      "Low scores showed that users needed clearer setup guidance and examples of what the final outputs would look like.",
  },
];

const betaFindings = [
  {
    title: "Core workflows were working",
    description:
      "Data collection, cloud linking, and observation export/import scored highly and were also supported by GA4 usage patterns.",
  },
  {
    title: "First-time setup created friction",
    description:
      "Users struggled to understand how species, groups, animals, behaviors, and observation pages related to each other during animal profile creation.",
  },
  {
    title: "Reports sounded powerful but unclear",
    description:
      "Users saw potential in reports, SNA, and heatmaps, but did not understand what the final output would look like without trial and error.",
  },
  {
    title: "Tutorials were the clearest adoption lever",
    description:
      "The most requested support was tutorial videos or other guided materials that showed how to use each major feature.",
  },
];

const finalRecommendations = [
  {
    title: "Create tutorial videos and public help content",
    effort: "Moderate-low effort",
    return: "High return",
    description:
      "Tutorials would reduce first-time setup confusion, explain reports and profile structure, and double as public-facing marketing content.",
  },
  {
    title: "Build an in-app setup wizard",
    effort: "Very high effort",
    return: "High return",
    description:
      "A guided animal-profile setup flow would directly address the biggest beta usability gap, especially for new users starting from scratch.",
  },
  {
    title: "Use a preloaded example profile carefully",
    effort: "Moderate-high effort",
    return: "Low-medium return",
    description:
      "A sample profile could help exploration, but without explanation it would not fully solve confusion around how setup choices affect observation pages.",
  },
  {
    title: "Market toward new projects first",
    effort: "Moderate effort",
    return: "High return",
    description:
      "Users are less likely to switch during active legacy projects. ResearchObs should focus messaging on new research, welfare, and student projects.",
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

function PhaseCard({ title, description, index }) {
  return (
    <article className="rounded-3xl border border-accent/15 bg-surface p-6 shadow-sm">
      <div className="flex items-start gap-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-white">
          {index + 1}
        </div>

        <div>
          <h3 className="text-lg font-bold leading-tight text-ink">{title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            {description}
          </p>
        </div>
      </div>
    </article>
  );
}

function MarketFindingCard({ title, finding, implication }) {
  return (
    <article className="rounded-3xl border border-accent/15 bg-surface p-6 shadow-sm">
      <h3 className="text-xl font-bold text-ink">{title}</h3>

      <div className="mt-5 grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-accent/15 p-4">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-subtletext">
            Finding
          </p>
          <p className="mt-2 text-sm leading-relaxed text-muted">{finding}</p>
        </div>

        <div className="rounded-2xl bg-accent/5 p-4">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">
            Product implication
          </p>
          <p className="mt-2 text-sm leading-relaxed text-ink">{implication}</p>
        </div>
      </div>
    </article>
  );
}

function PriorityColumn({ tier, items }) {
  return (
    <article className="rounded-3xl border border-accent/15 bg-surface p-6 shadow-sm">
      <h3 className="text-xl font-bold text-accent">{tier}</h3>

      <ul className="mt-5 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3">
            <span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-accent" />
            <span className="text-sm leading-relaxed text-muted">{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

function AlphaFindingCard({ area, finding, recommendation }) {
  return (
    <article className="rounded-3xl border border-accent/15 bg-surface p-6 shadow-sm">
      <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent">
        {area}
      </p>

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

function EventCategoryCard({ category, examples }) {
  return (
    <article className="rounded-2xl border border-accent/15 bg-surface p-5 shadow-sm">
      <h3 className="text-base font-bold text-ink">{category}</h3>

      <div className="mt-3 flex flex-wrap gap-2">
        {examples.map((example) => (
          <code
            key={example}
            className="rounded-full bg-accent/10 px-3 py-1 text-xs font-bold text-accent"
          >
            {example}
          </code>
        ))}
      </div>
    </article>
  );
}

function ScoreBar({ score }) {
  const width = `${Math.min(Math.max((score / 5) * 100, 0), 100)}%`;

  return (
    <div className="h-3 overflow-hidden rounded-full bg-accent/10">
      <div className="h-full rounded-full bg-accent" style={{ width }} />
    </div>
  );
}

function OverallMetricCard({ label, score, scale, interpretation }) {
  return (
    <article className="rounded-3xl border border-accent/15 bg-surface p-6 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-lg font-bold text-ink">{label}</h3>
        <p className="shrink-0 rounded-full bg-accent/10 px-3 py-1 text-sm font-bold text-accent">
          {score.toFixed(1)} / 5
        </p>
      </div>

      <div className="mt-4">
        <ScoreBar score={score} />
      </div>

      <p className="mt-3 text-xs font-semibold uppercase tracking-[0.14em] text-subtletext">
        {scale}
      </p>

      <p className="mt-4 text-sm leading-relaxed text-muted">
        {interpretation}
      </p>
    </article>
  );
}

function FeatureMetricRow({ label, score, status, meaning, scale }) {
  return (
    <div className="grid gap-3 rounded-2xl border border-accent/15 bg-surface p-4 shadow-sm md:grid-cols-[1fr_0.75fr_0.55fr] md:items-center">
      <div>
        <h3 className="text-sm font-bold text-ink">{label}</h3>
        <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-subtletext">
          {status}
        </p>
        <p className="mt-2 text-xs leading-relaxed text-muted">{scale}</p>
      </div>

      <ScoreBar score={score} />

      <div className="text-left md:text-right">
        <p className="text-lg font-bold text-accent">{score.toFixed(1)} / 5</p>
        <p className="mt-1 text-xs font-semibold leading-relaxed text-muted">
          {meaning}
        </p>
      </div>
    </div>
  );
}

function RecommendationCard({
  title,
  effort,
  return: expectedReturn,
  description,
}) {
  return (
    <article className="rounded-3xl border border-accent/15 bg-surface p-6 shadow-sm">
      <div className="flex flex-wrap gap-2">
        <span className="rounded-full border border-accent/20 px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-muted">
          {effort}
        </span>
        <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-accent">
          {expectedReturn}
        </span>
      </div>

      <h3 className="mt-4 text-xl font-bold text-ink">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted">{description}</p>
    </article>
  );
}

export default function ResearchObsPublicReleasePage() {
  return (
    <main className="min-h-screen bg-backgroundwhite text-ink">
      <section className="mx-auto max-w-7xl px-6 pb-8 pt-12">
        <p className="text-sm font-bold uppercase tracking-[0.22em] text-accent">
          ResearchObs | Public Release Strategy
        </p>

        <h1 className="mt-4 max-w-5xl text-4xl font-bold leading-tight text-ink md:text-6xl">
          Scaling a lab tool into a customizable research app
        </h1>

        <p className="mt-5 max-w-4xl text-lg leading-relaxed text-muted md:text-xl">
          After the original lab deployment succeeded, outside labs and
          institutions became interested in ResearchObs. I led the research
          program that defined how the app could move from a custom lab tool to
          a free public product with configurable workflows, personal cloud
          storage, cleaner exports, and stronger onboarding.
        </p>

        <div className="mt-7 flex flex-wrap gap-3">
          <a
            href="https://www.researchobs.org"
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-accent px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-accent/90"
          >
            Visit ResearchObs →
          </a>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {projectFacts.map((fact) => (
            <FactCard key={fact.label} {...fact} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8">
        <SectionHeader
          eyebrow="Impact Summary"
          title="What the research changed"
        >
          The research shifted ResearchObs away from custom app development and
          subscription-first thinking toward a free public release strategy
          focused on adoption, clean exports, personal cloud storage, and
          tutorial-led onboarding.
        </SectionHeader>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {impactStats.map((stat) => (
            <ImpactCard key={stat.label} {...stat} />
          ))}
        </div>
      </section>

      <section id="research-program" className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex items-center gap-4">
          <div className="h-px flex-1 bg-accent/20" />
          <p className="rounded-full border border-accent/20 bg-surface px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-accent shadow-sm">
            Research program
          </p>
          <div className="h-px flex-1 bg-accent/20" />
        </div>

        <p className="mx-auto mt-4 max-w-2xl text-center text-sm leading-relaxed text-muted">
          This was not a single usability study. It was a multi-phase product
          research program covering market strategy, alpha validation, analytics
          infrastructure, and beta release testing.
        </p>

        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {programPhases.map((phase, index) => (
            <PhaseCard key={phase.title} index={index} {...phase} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8">
        <SectionHeader
          eyebrow="Product framing"
          title="1. Why the public release needed research"
        >
          ResearchObs could not scale by becoming a separate custom app for
          every interested lab. The product needed a clear market position, a
          sustainable release model, and evidence about which features would
          matter most for adoption.
        </SectionHeader>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {problemThemes.map((theme) => (
            <SimpleCard key={theme.title} {...theme} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8">
        <SectionHeader
          eyebrow="Market strategy"
          title="2. What the competitor analysis revealed"
        >
          I identified three competitors and compared their revenue models,
          support status, data workflows, storage models, and analysis outputs
          to define where ResearchObs could realistically stand out.
        </SectionHeader>

        <div className="grid gap-5">
          {marketFindings.map((finding) => (
            <MarketFindingCard key={finding.title} {...finding} />
          ))}
        </div>

        <div className="mt-6 rounded-3xl border border-accent/15 bg-accent p-6 text-white shadow-sm md:p-8">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-white/75">
            Strategic recommendation
          </p>
          <h3 className="mt-3 text-2xl font-bold leading-tight md:text-3xl">
            Launch ResearchObs as a free public app instead of a paid-first or
            custom-build product.
          </h3>
          <p className="mt-4 text-base leading-relaxed text-white/85">
            The likely return was not direct subscription revenue from a small
            market. The stronger ROI was adoption, academic citations,
            peer-to-peer visibility, collaborations, and future professional
            opportunities created by the app’s use in research settings.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8">
        <SectionHeader
          eyebrow="Competitor-user interviews"
          title="3. What would make users switch"
        >
          I interviewed four users of the closest direct competitor using
          in-person walkthroughs and think-aloud protocols. The goal was to
          understand what kept users in existing workflows and what might make a
          switch worth the effort.
        </SectionHeader>

        <div className="grid gap-5 md:grid-cols-3">
          {competitorInterviewFindings.map((finding) => (
            <SimpleCard key={finding.title} {...finding} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8">
        <SectionHeader
          eyebrow="Launch scope"
          title="4. How the research prioritized features"
        >
          The market and competitor-user research helped separate
          launch-critical requirements from differentiators and longer-term
          features.
        </SectionHeader>

        <div className="grid gap-5 lg:grid-cols-3">
          {strategyPriorities.map((priority) => (
            <PriorityColumn key={priority.tier} {...priority} />
          ))}
        </div>

        <div className="mt-6 rounded-3xl border border-accent/15 bg-surface p-6 shadow-sm md:p-8">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent">
            Stakeholder outcome
          </p>
          <p className="mt-3 text-base leading-relaxed text-muted md:text-lg">
            Stakeholders accepted a refocused release scope: ResearchObs would
            prioritize a free app model, local-first storage, Dropbox and Google
            Drive support, cleaner CSV output, and a modern data-collection
            experience. Reports, SNA, and heatmaps stayed important, while
            projects and advanced access controls moved down the launch list.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8">
        <SectionHeader
          eyebrow="Alpha validation"
          title="5. What early MVP testing changed"
        >
          I then tested alpha versions of the app’s storage, data collection,
          settings, and home flows. Users completed tasks while thinking aloud,
          followed by post-test interviews focused on clarity, task support, and
          whether each page served its core purpose.
        </SectionHeader>

        <div className="grid gap-5">
          {alphaFindings.map((finding) => (
            <AlphaFindingCard key={finding.area} {...finding} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8">
        <SectionHeader
          eyebrow="Research ops"
          title="6. How I set up scalable beta analytics"
        >
          Before beta release, I defined a privacy-conscious analytics flow
          using Firebase, GA4, and BigQuery. The goal was to measure feature
          usefulness without collecting private user, institution, or precise
          identifying information.
        </SectionHeader>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {analyticsEvents.map((eventGroup) => (
            <EventCategoryCard key={eventGroup.category} {...eventGroup} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8">
        <SectionHeader
          eyebrow="Google Play beta"
          title="7. What beta testers reported"
        >
          I recruited 26 beta testers for a 12-day Google Play test. Half used
          the app organically, while half received navigation support and
          protocols. I compared questionnaire feedback with GA4/BigQuery usage
          patterns.
        </SectionHeader>

        <div className="grid gap-5 md:grid-cols-2">
          {betaOverallMetrics.map((metric) => (
            <OverallMetricCard key={metric.label} {...metric} />
          ))}
        </div>

        <div className="mt-8 rounded-3xl border border-accent/15 bg-surface p-5 shadow-sm md:p-6">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent">
            Feature-level results
          </p>

          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted">
            Scores use the relevant 1–5 survey scale for each feature area. N/A
            responses were treated as non-use and excluded from the feature
            averages.
          </p>

          <div className="mt-5 grid gap-3">
            {betaFeatureMetrics.map((metric) => (
              <FeatureMetricRow key={metric.label} {...metric} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8">
        <SectionHeader
          eyebrow="Beta synthesis"
          title="8. What worked and what still blocked adoption"
        >
          Beta results were positive overall, but they also showed that public
          release success would depend on onboarding support as much as feature
          quality.
        </SectionHeader>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {betaFindings.map((finding) => (
            <SimpleCard key={finding.title} {...finding} />
          ))}
        </div>

        <div className="mt-6 rounded-3xl border border-accent/15 bg-accent/5 p-6 md:p-8">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent">
            Analytics alignment
          </p>
          <p className="mt-3 text-base leading-relaxed text-muted md:text-lg">
            GA4 supported the survey pattern: users most often navigated through
            data collection, profile creation/editing, storage, and cloud sync.
            Lower-use areas such as projects, reports, SNA, and heatmaps needed
            clearer explanation before they could become adoption drivers.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 pt-8">
        <SectionHeader
          eyebrow="Recommendations"
          title="9. What I recommended for public release"
        >
          The final recommendation was not to keep adding features immediately.
          The core product was strong enough to release, but new users needed
          better support understanding setup, profiles, reports, and workflows.
        </SectionHeader>

        <div className="grid gap-5 md:grid-cols-2">
          {finalRecommendations.map((recommendation) => (
            <RecommendationCard
              key={recommendation.title}
              {...recommendation}
            />
          ))}
        </div>

        <div className="mt-6 rounded-3xl border border-accent/15 bg-surface p-6 shadow-sm md:p-8">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent">
            Final outcome
          </p>
          <p className="mt-3 text-lg leading-relaxed text-muted">
            ResearchObs moved forward with tutorial-led onboarding as the near
            term public-release support strategy, while a longer-term in-app
            walkthrough and animal-profile setup wizard were added to the
            product roadmap.
          </p>
        </div>
      </section>
    </main>
  );
}

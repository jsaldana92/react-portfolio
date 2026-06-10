// src/pages/seehbPage.jsx

import React from "react";

import seehbGHome from "../images/seehb/seehbGHome.png";
import seehbRHome from "../images/seehb/seehbRHome.png";
import seehbGMedia from "../images/seehb/seehbGMedia.png";
import seehbRMedia from "../images/seehb/seehbRMedia.png";
import seehbGSchedule from "../images/seehb/seehbGSchedule.png";
import seehbRSchedule from "../images/seehb/seehbRSchedule.png";

const projectFacts = [
  {
    label: "Role",
    value: "UX Researcher and Web Developer",
  },
  {
    label: "Methods",
    value:
      "Stakeholder briefing, attendee interviews, questionnaire, usability testing, click tracking, page-time analysis, A/B testing, market analysis, and conference-page review",
  },
  {
    label: "Participants",
    value: "SEEHB steering committee and 3 previous conference attendees",
  },
  {
    label: "Outcome",
    value:
      "Redesigned SEEHB into a lower-cost, easier-to-maintain React website with fewer errors and stronger attendee engagement",
  },
];

const impactStats = [
  {
    value: "0",
    label: "Reported bugs",
    detail: "Compared with an average of 6 reported bugs on the old site.",
  },
  {
    value: "87%",
    label: "Attendees used the site",
    detail: "Compared with 21% users on the previous website.",
  },
  {
    value: "+20%",
    label: "Conference activity submissions",
    detail:
      "After attendee-related submissions were moved into the redesigned website.",
  },
  {
    value: "+4%",
    label: "Organic attendees",
    detail:
      "Increase in attendees who found the conference through online search.",
  },
];

const redesignScreenshots = [
  {
    label: "Home page",
    oldImage: seehbGHome,
    newImage: seehbRHome,
    takeaway:
      "The redesign made the conference entry point feel more current, focused, and easier to understand at a glance.",
  },
  {
    label: "Media page",
    oldImage: seehbGMedia,
    newImage: seehbRMedia,
    takeaway:
      "The redesigned media experience gave attendees a clearer reason to return to the site after the conference.",
  },
  {
    label: "Schedule page",
    oldImage: seehbGSchedule,
    newImage: seehbRSchedule,
    takeaway:
      "The redesigned schedule supported the highest-priority attendee workflow: quickly finding where to go and what was happening next.",
  },
];

const problemThemes = [
  {
    title: "Navigation friction",
    description:
      "Attendees had difficulty finding important pages, especially the schedule and presentation abstracts.",
  },
  {
    title: "Outdated presentation",
    description:
      "The old site looked visually outdated and unmaintained, which risked creating a weak first impression for potential attendees.",
  },
  {
    title: "Bug-prone content",
    description:
      "Dead pages, incorrect abstracts, misdirected links, and outdated content made the site feel unreliable.",
  },
  {
    title: "Registration and schedule goals",
    description:
      "The steering committee wanted the redesign to support RSVP, subscription, schedule use, and abstract discovery more effectively.",
  },
];

const researchQuestions = [
  {
    title: "What errors are users running into?",
    description:
      "Identify the bugs, dead links, confusing pages, incorrect information, and navigation issues that made the old site unreliable.",
  },
  {
    title: "What makes a conference website feel modern?",
    description:
      "Review comparable academic conference websites to determine the layout, navigation, and interaction patterns attendees expect.",
  },
  {
    title: "How should RSVP and submissions be handled?",
    description:
      "Determine how the redesigned site should support registration, attendee-related submissions, and future conference workflows.",
  },
];

const marketFindings = [
  {
    title: "React was the best fit",
    description:
      "Market research showed that React offered an easy-to-learn, maintainable path with a strong community and useful libraries such as Tailwind CSS, GSAP, and Three.js.",
  },
  {
    title: "Low-cost hosting was feasible",
    description:
      "The recommended architecture used free GitHub Pages hosting, a low-cost yearly domain, and cloud-stored databases for registration and submission workflows.",
  },
  {
    title: "Comparable conference sites revealed core patterns",
    description:
      "Reviewing four similar conference pages showed that the redesigned site needed responsive navigation, consistent layouts, fewer pages, and collapsible content for dense information such as abstracts.",
  },
];

const discoveryFindings = [
  {
    title: "Dead pages and broken content reduced trust",
    finding:
      "Previous attendees noticed dead pages, incorrect abstracts, misdirected links, and information that appeared outdated.",
    recommendation:
      "Standardize the submission-to-website pipeline and add safeguards to reduce content-entry errors before publication.",
    quote:
      "We are going to push the website and need to fix all the issues to make a good appearance.",
    source: "Stakeholder",
  },
  {
    title: "The schedule needed to stay easy to access",
    finding:
      "The schedule was one of the most important pages, but users still experienced friction around finding and reading event information.",
    recommendation:
      "Keep schedule access prominent while making abstracts easier to scan and read without overwhelming the page.",
    quote:
      "I feel like I know where I am supposed to go... I would definitely consider using it in the future, especially over the printed out schedules.",
    source: "Previous attendee",
  },
  {
    title: "A modern presentation mattered",
    finding:
      "The steering committee wanted the website to feel more professional before sharing it with attendees, presenters, and interested visitors.",
    recommendation:
      "Use a cleaner React-based design with consistent layouts, responsive navigation, and selective animation to guide attention.",
    quote:
      "The revamped website looks great! Can't wait to send it out to others who have been asking for a link.",
    source: "Committee member",
  },
];

const processSteps = [
  {
    title: "Stakeholder briefing",
    description:
      "The steering committee identified the core issue: the website was difficult to navigate, visually outdated, prone to bugs, and not supporting RSVP, schedule use, or attendee-facing workflows well enough.",
    output:
      "I reframed the redesign brief into three research questions focused on user errors, modern conference-site expectations, and RSVP/submission handling.",
  },
  {
    title: "Market and conference-page analysis",
    description:
      "I researched low-cost hosting and modern front-end options, then reviewed four comparable academic conference websites to identify common layout and interaction patterns.",
    output:
      "The recommendation was a React-based website hosted through GitHub Pages with a low yearly domain cost and cloud-connected registration/submission workflows.",
  },
  {
    title: "Initial attendee discovery",
    description:
      "I interviewed 3 previous attendees and used questionnaire/usability testing to understand problems with layout, information, navigation, and general appeal.",
    output:
      "The research identified dead pages, incorrect abstracts, hard-to-reach schedule content, rarely used pages, and features that felt difficult to navigate or visually unappealing.",
  },
  {
    title: "Research-informed redesign",
    description:
      "The redesign used a responsive navigation system, fewer pages, consistent layouts, hidden/collapsible abstracts, and clearer routes to RSVP, schedules, media, and conference information.",
    output:
      "The research also informed workflow safeguards for the abstract submission-to-website pipeline, including content checks before publication.",
  },
  {
    title: "Post-launch validation",
    description:
      "After launch, I conducted end-user interviews, questionnaire testing, usability testing, click-tracking/page-time analysis, and A/B comparisons against the previous site.",
    output:
      "The redesigned site showed fewer bugs, stronger likelihood-to-use ratings, faster RSVP completion, improved abstract discovery, and increased website adoption.",
  },
];

const engagementMetrics = [
  {
    label: "Return for media",
    oldSite: 1.0,
    newSite: 5.0,
    takeaway:
      "The redesigned media experience made users much more likely to return to view conference pictures.",
  },
  {
    label: "Share website",
    oldSite: 2.0,
    newSite: 4.3,
    takeaway:
      "The redesign made attendees more likely to share the website with others.",
  },
  {
    label: "Use online schedule",
    oldSite: 2.3,
    newSite: 3.7,
    takeaway:
      "Users were more likely to use the online schedule after the redesign.",
  },
];

const speedMetrics = [
  {
    label: "Time to RSVP",
    oldValue: "5.3s",
    newValue: "1.3s",
    takeaway: "The redesigned flow made RSVP substantially faster.",
  },
  {
    label: "Time to read abstracts",
    oldValue: "20s",
    newValue: "15s",
    takeaway:
      "Abstract discovery improved after content was reorganized and made easier to scan.",
  },
  {
    label: "Time to reach schedule",
    oldValue: "2.0s",
    newValue: "2.5s",
    takeaway:
      "Schedule access remained fast, with the larger redesign improving the surrounding schedule and abstract experience.",
  },
];

const trafficBreakdown = [
  {
    value: "49%",
    label: "Main page traffic",
  },
  {
    value: "44%",
    label: "Schedule traffic",
  },
  {
    value: "7%",
    label: "Media page traffic",
  },
];

const recommendations = [
  {
    title: "Keep the site focused",
    description:
      "Use fewer pages and consistent layouts so attendees can quickly understand where to go.",
  },
  {
    title: "Protect the submission pipeline",
    description:
      "Standardize how abstracts and attendee submissions move into the website so future updates are less error-prone.",
  },
  {
    title: "Prioritize schedule and abstracts",
    description:
      "Keep the schedule highly accessible and make abstract content scannable without overwhelming users.",
  },
  {
    title: "Use animation selectively",
    description:
      "Use motion and interactive components to direct attention, not as decoration that competes with conference information.",
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

function LikertMetricCard({ label, oldSite, newSite, takeaway }) {
  const oldWidth = `${Math.max(oldSite * 20, 4)}%`;
  const newWidth = `${Math.max(newSite * 20, 4)}%`;
  const difference = newSite - oldSite;
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
            <span className="font-semibold text-muted">Old site</span>
            <span className="font-bold text-ink">{oldSite.toFixed(1)}</span>
          </div>

          <div className="h-3 overflow-hidden rounded-full bg-accent/10">
            <div
              className="h-full rounded-full bg-accent/35"
              style={{ width: oldWidth }}
            />
          </div>
        </div>

        <div>
          <div className="mb-2 flex items-center justify-between text-sm">
            <span className="font-semibold text-muted">React redesign</span>
            <span className="font-bold text-ink">{newSite.toFixed(1)}</span>
          </div>

          <div className="h-3 overflow-hidden rounded-full bg-accent/10">
            <div
              className="h-full rounded-full bg-accent"
              style={{ width: newWidth }}
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

function BeforeAfterPair({ label, oldImage, newImage, takeaway }) {
  return (
    <article className="mx-auto max-w-6xl border-b border-accent/15 py-8 last:border-b-0">
      <div className="mb-5">
        <h3 className="text-xl font-bold text-ink">{label}</h3>
        <p className="mt-1 max-w-3xl text-sm leading-relaxed text-muted">
          {takeaway}
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-[minmax(0,1fr)_1px_minmax(0,1fr)] md:items-start md:gap-6">
        <div>
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-subtletext">
            Previous site
          </p>
          <img
            src={oldImage}
            alt={`Previous SEEHB ${label}`}
            className="h-auto max-h-72 w-full rounded-xl border border-accent/20 bg-white object-contain object-top shadow-sm"
            loading="lazy"
          />
        </div>

        <div className="hidden h-full min-h-72 bg-accent/15 md:block" />

        <div>
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-accent">
            React redesign
          </p>
          <img
            src={newImage}
            alt={`Redesigned SEEHB ${label}`}
            className="h-auto max-h-72 w-full rounded-xl border border-accent/20 bg-white object-contain object-top shadow-sm"
            loading="lazy"
          />
        </div>
      </div>
    </article>
  );
}

function SpeedCard({ label, oldValue, newValue, takeaway }) {
  return (
    <article className="rounded-2xl border border-accent/15 bg-surface p-5 shadow-sm">
      <h3 className="text-lg font-bold text-ink">{label}</h3>

      <div className="mt-4 grid grid-cols-2 gap-4">
        <div className="rounded-2xl bg-accent/5 p-4">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-subtletext">
            Old site
          </p>
          <p className="mt-2 text-2xl font-bold text-ink">{oldValue}</p>
        </div>

        <div className="rounded-2xl bg-accent/10 p-4">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-subtletext">
            React redesign
          </p>
          <p className="mt-2 text-2xl font-bold text-accent">{newValue}</p>
        </div>
      </div>

      <p className="mt-4 text-sm leading-relaxed text-muted">{takeaway}</p>
    </article>
  );
}

export default function SeehbPage() {
  return (
    <main className="min-h-screen bg-backgroundwhite text-ink">
      <section className="mx-auto max-w-7xl px-6 pb-8 pt-12">
        <p className="text-sm font-bold uppercase tracking-[0.22em] text-accent">
          SEEHB | Website Redesign Research
        </p>

        <h1 className="mt-4 max-w-5xl text-4xl font-bold leading-tight text-ink md:text-6xl">
          Redesigning a conference website to reduce errors and improve attendee
          engagement
        </h1>

        <p className="mt-5 max-w-4xl text-lg leading-relaxed text-muted md:text-xl">
          The SEEHB steering committee wanted to replace an outdated,
          difficult-to-maintain conference website that was hard to navigate and
          prone to bugs. I led the UX research and React redesign to improve
          discoverability, RSVP flow, schedule use, abstract reading, and the
          overall impression of the conference.
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
          title="What the redesign achieved"
        >
          The redesigned React website reduced reported bugs, increased site
          adoption, and shifted more attendee-facing conference workflows onto
          the website.
        </SectionHeader>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {impactStats.map((stat) => (
            <ImpactCard key={stat.label} {...stat} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8">
        <div className="mb-6">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent">
            Redesign at a glance
          </p>

          <h2 className="mt-2 text-3xl font-bold leading-tight text-ink md:text-4xl">
            From outdated conference site to redesigned attendee hub
          </h2>

          <p className="mt-3 max-w-3xl text-base leading-relaxed text-muted md:text-lg">
            The screenshots below show the visual and structural shift from the
            previous website to the React redesign across the home, media, and
            schedule experiences.
          </p>

          <a
            href="https://www.seehb.org"
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex rounded-full bg-accent px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-accent/90"
          >
            Visit SEEHB →
          </a>

          <div className="mt-6 h-px w-full bg-accent/20" />
        </div>

        <div className="grid gap-6">
          {redesignScreenshots.map((screenshot) => (
            <BeforeAfterPair key={screenshot.label} {...screenshot} />
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
          stakeholder goals, attendee research, market analysis, and usability
          testing shaped the redesign.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8">
        <SectionHeader
          eyebrow="Problem framing"
          title="1. Why the SEEHB website needed to be redesigned"
        >
          The steering committee identified three connected issues: the website
          was difficult to navigate, visually outdated, and prone to bugs.
        </SectionHeader>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
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
          Before redesigning the site, I needed to identify which attendee
          workflows were breaking down and what evidence would show that the new
          website was easier to navigate, maintain, and use.
        </SectionHeader>

        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
          <div className="rounded-2xl border border-accent/15 bg-accent/5 p-5">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-subtletext">
              Research focus
            </p>

            <h3 className="mt-3 text-2xl font-bold leading-tight text-ink">
              Turn the redesign brief into testable website decisions.
            </h3>

            <p className="mt-4 text-sm leading-relaxed text-muted">
              This phase made the redesign measurable by connecting stakeholder
              concerns to user errors, modern website expectations, and
              registration or submission workflows.
            </p>
          </div>

          <div className="space-y-5">
            {researchQuestions.map((question, index) => (
              <article key={question.title} className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-white">
                  {index + 1}
                </div>

                <div className="border-b border-accent/15 pb-5 last:border-b-0 last:pb-0">
                  <h3 className="text-lg font-bold text-ink">
                    {question.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {question.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8">
        <SectionHeader
          eyebrow="Market and design analysis"
          title="3. What the redesign needed to support"
        >
          Market research and conference-page analysis helped define the
          technical approach and the interaction patterns needed for a modern
          academic conference website.
        </SectionHeader>

        <div className="grid gap-5 md:grid-cols-3">
          {marketFindings.map((finding) => (
            <SimpleCard key={finding.title} {...finding} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8">
        <SectionHeader
          eyebrow="Research process"
          title="4. How the research moved from discovery to launch"
        >
          Each research activity produced a specific output for the redesign:
          problem framing, technical direction, website structure, usability
          validation, or post-launch recommendations.
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
          title="5. The findings that shaped the website"
        >
          Initial attendee research and stakeholder feedback showed that the
          redesign needed to focus on reliability, schedule clarity, abstract
          discovery, and a more professional first impression.
        </SectionHeader>

        <div className="grid gap-5">
          {discoveryFindings.map((finding) => (
            <FindingCard key={finding.title} {...finding} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8">
        <SectionHeader
          eyebrow="Post-launch validation"
          title="6. How the redesign performed against the old website"
        >
          After launch, I compared the redesigned React website against the old
          website using interviews, questionnaire ratings, usability testing,
          click tracking, page-time analysis, and A/B testing.
        </SectionHeader>

        <div className="grid gap-5 lg:grid-cols-3">
          {engagementMetrics.map((metric) => (
            <LikertMetricCard key={metric.label} {...metric} />
          ))}
        </div>

        <div className="mt-6 grid gap-5 lg:grid-cols-3">
          {speedMetrics.map((metric) => (
            <SpeedCard key={metric.label} {...metric} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8">
        <SectionHeader
          eyebrow="Website adoption"
          title="7. What users did after the redesign"
        >
          Website usage increased after launch, with most traffic going to the
          main page and schedule page, which matched the committee’s priority to
          make conference information and scheduling easier to use.
        </SectionHeader>

        <div className="grid gap-5 lg:grid-cols-[1fr_1.2fr]">
          <article className="rounded-3xl border border-accent/15 bg-accent p-6 text-white shadow-sm md:p-8">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-white/75">
              Adoption result
            </p>

            <h3 className="mt-3 text-3xl font-bold leading-tight">
              Website use increased from 10 users on the old site to 47 users on
              the React redesign.
            </h3>

            <p className="mt-4 text-base leading-relaxed text-white/85">
              With a maximum attendance of 53, the redesigned site became a
              central conference resource rather than a lightly used companion
              page.
            </p>
          </article>

          <article className="rounded-3xl border border-accent/15 bg-surface p-6 shadow-sm md:p-8">
            <div className="grid gap-4 md:grid-cols-3">
              {trafficBreakdown.map((item) => (
                <div key={item.label} className="rounded-2xl bg-accent/5 p-5">
                  <p className="text-3xl font-bold text-accent">{item.value}</p>
                  <p className="mt-2 text-sm font-semibold text-muted">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-5 text-sm leading-relaxed text-muted">
              The schedule page accounting for 44% of site traffic confirmed
              that attendees were using the redesigned website for core
              conference planning.
            </p>
          </article>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 pt-8">
        <SectionHeader
          eyebrow="Recommendations"
          title="8. What the research recommended"
        >
          The final recommendations focused on keeping the site reliable,
          focused, easy to update, and centered on the attendee workflows that
          mattered most.
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

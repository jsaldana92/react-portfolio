// src/pages/homePage.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FiFileText } from "react-icons/fi";

import profileImg from "../images/profile.png";

const accent = "var(--color-accent)";

const skills = [
  {
    title: "Research Methods",
    items:
      "Mixed-methods research, usability testing, user interviews, surveys/questionnaires, card sorting, A/B testing, experimental design, behavioral analysis, thematic/affinity analysis, personas, journey mapping",
  },
  {
    title: "Quantitative Analysis",
    items:
      "R, Python, SQL, BigQuery, GA4/Google Analytics, SPSS; regression modeling, hypothesis testing, ANOVA, reliability/validity analysis, behavioral metrics, data-quality checks",
  },
  {
    title: "Research Tools & Workflows",
    items:
      "Qualtrics, Figma, Miro, Adobe Creative Cloud, VS Code, Microsoft Office, AI-assisted research workflows, Flutter/React familiarity",
  },
  {
    title: "Languages",
    items: "English, Spanish",
  },
];

const experiences = [
  {
    id: "research-scientist",
    title: "Senior Research Scientist",
    dates: "August 2019 – Present",
    organization: "Comparative Economics and Behavioral Sciences Laboratory",
    location: "Atlanta, GA",
    caseStudyPath: null,
    summary:
      "Led end-to-end behavioral and cognitive research on decision-making and perception, serving as lead researcher across study design, protocol development, recruitment, data collection, quantitative analysis, evidence reporting, grant-support materials, and mentorship for junior researchers in methodology, hypothesis testing, validation practices, and data-quality standards. Led development and validation of PrimateID, a CNN-based individual face-recognition research pipeline built with PyTorch, OpenCV, and scikit-learn to support subject identification, model evaluation, research reliability, traceability, and applied behavioral data collection.",
    tags: [
      "Statistical analysis",
      "Research design",
      "Presentation",
      "Junior staff mentoring",
      "Behavioral-cognitive research",
    ],
  },
  {
    id: "researchobs",
    title: "Senior User Experience Researcher",
    dates: "December 2023 – Present",
    organization: "ResearchObs",
    location: "Atlanta, GA",
    caseStudyPath: null,
    caseStudyLinks: [
      { label: "Lab Deployment Research →", to: "/ResearchObs" },
      {
        label: "Public Release Research →",
        to: "/ResearchObs/PublicRelease",
      },
    ],
    summary:
      "Led mixed-methods customer insights and product measurement research for a research-operations app, combining stakeholder interviews, end-user interviews, card sorting, A/B testing, competitive review, beta usability testing, GA4/Firebase analytics, and BigQuery requirements to identify workflow, data-quality, and adoption barriers. Translated findings into prioritized product and process recommendations, increasing usability from 2.4 to 4.3, reducing export errors by 50%+, and enabling funnel analysis, retention tracking, feature adoption measurement, and evidence-based product prioritization.",
    tags: [
      "Product research",
      "Market analysis",
      "Beta usability testing",
      "GA4/BigQuery analytics",
      "ResearchOps",
    ],
  },
  {
    id: "seehb",
    title: "User Experience Researcher",
    dates: "August 2023 – June 2026",
    organization: "Southeastern Evolutionary Human Behavior Meeting",
    location: "Atlanta, GA",
    caseStudyPath: null,
    caseStudyLinks: [{ label: "Website Redesign Research →", to: "/SEEHB" }],
    summary:
      "Led UX research and market analysis to support a full redesign of a conference website, combining attendee surveys, interviews, usability testing, and comparative analysis of peer academic conferences to evaluate information discoverability, positioning, and engagement. Drove substantial gains in likelihood to return from 1.0 to 5.0 and likelihood to share from 2.0 to 4.3 on a 5-point scale, reduced key task completion times by 50%, and supported the launch of a production website used annually by conference attendees.",
    tags: [
      "Website redesign",
      "Usability testing",
      "Market analysis",
      "Information architecture",
      "A/B testing",
    ],
  },
  {
    id: "cetloe",
    title: "User Experience Researcher Intern",
    dates: "January 2024 – August 2025",
    organization:
      "Center for Excellence in Teaching, Learning & Online Education",
    location: "Atlanta, GA",
    caseStudyPath: null,
    caseStudyLinks: [
      {
        label: "Hyperlink Engagement Research →",
        to: "/HyperlinkEngagement",
      },
      {
        label: "Teaching Experience Research →",
        to: "/GTAGradingExperience",
      },
    ],
    summary:
      "Conducted end-user interviews, engagement analysis, and content audits across three university departments. Synthesized findings through thematic analysis, personas, and journey maps to surface training gaps, inform policy and communication changes, support onboarding improvements, and identify that hyperlinking weekly announcements increased student engagement by 1.5x.",
    tags: [
      "Engagement analysis",
      "Linear regression",
      "Thematic analysis",
      "Journey mapping",
      "Training systems",
    ],
  },
  {
    id: "datapuller",
    title: "User Experience Researcher",
    dates: "January 2024 – April 2024",
    organization: "DataPuller",
    location: "Atlanta, GA",
    caseStudyPath: null,
    caseStudyLinks: [
      { label: "Workflow Optimization Research →", to: "/DataPuller" },
    ],
    summary:
      "Led iterative UX research for a desktop data-collection tool, using interviews, usability testing, and an MVP approach to test core workflow changes before full implementation. Reduced final data collection workflows by 90%, improved usability from 1.5 to 4.2 on a 5-point Likert scale, and supported adoption by 2 of 3 participating research teams.",
    tags: [
      "Workflow optimization",
      "MVP testing",
      "Usability testing",
      "Task-timing analysis",
      "Adoption research",
    ],
  },
  {
    id: "canine-brains",
    title: "Research Scientist",
    dates: "January 2018 – January 2019",
    organization: "The Canine Brains Project",
    location: "Atlanta, GA",
    caseStudyPath: null,
    summary:
      "Designed and deployed large-scale behavioral questionnaires with 3,000+ responses, supporting survey development, recruitment coordination, participant scheduling, data-quality controls, and analysis planning. Maintained standardized testing environments while balancing participant experience, protocol fidelity, and operational constraints.",
    tags: [
      "Scheduling",
      "Recruitment",
      "Protocol design",
      "Large-scale questionnaires",
      "In-person interviewing",
    ],
  },
];

function SectionHeader({ children }) {
  return (
    <div className="mb-5">
      <h2 className="text-2xl font-bold" style={{ color: accent }}>
        {children}
      </h2>
      <div className="mt-2 h-px w-full" style={{ backgroundColor: accent }} />
    </div>
  );
}

function HomePage() {
  return (
    <section className="min-h-screen bg-backgroundwhite text-ink">
      <section className="mx-auto max-w-7xl px-6 pb-10 pt-12">
        <div className="mb-10 w-full text-center">
          <h1 className="mx-auto max-w-7xl text-4xl font-bold leading-tight text-accent md:text-5xl lg:text-6xl">
            Jhonatan M. Saldana Santisteban, PhD.
          </h1>

          <p className="mx-auto mt-4 max-w-7xl text-xl font-semibold text-muted md:text-2xl">
            Quantitative & Mixed-Methods Research | Cognitive Science | Product
            Strategy
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-start">
          <div className="rounded-3xl border border-accent/20 bg-surface p-6 shadow-sm md:p-8">
            <div className="space-y-5 text-[1.03rem] leading-relaxed text-muted">
              <p>
                I am a Senior UX Researcher and cognitive science PhD with 9
                years of experience using mixed-methods research, quantitative
                analysis, and product strategy to improve digital products,
                research operations, and learning systems. My work combines
                discovery interviews, stakeholder research, usability testing,
                surveys, A/B testing, card sorting, behavioral analytics, and
                statistical modeling to understand user needs, product
                constraints, and adoption barriers.
              </p>

              <p>
                My strongest value is translating complex behavioral and
                workflow evidence into clear product direction. Across
                ResearchObs, DataPuller, SEEHB, and university training and
                engagement studies, I have led research from problem framing
                through MVP validation, market and competitive analysis,
                research ops, GA4/Firebase and BigQuery measurement planning,
                and stakeholder reporting.
              </p>

              <p>
                My work has produced measurable outcomes across academic,
                product, and web contexts: on a 5-point Likert scale,
                ResearchObs improved from 2.4 to 4.3 in overall app rating,
                moving from below midpoint to clearly positive, with public beta
                testing also showing strong ratings for cloud linking (4.8) and
                data collection pages (4.7). DataPuller reduced final data
                collection pages (4.7). DataPuller reduced final data collection
                workflows to 2–6 seconds, an 82%–94% drop from the original
                33-second workflow, and was adopted by 2 of 3 participating
                labs. Lastly, the SEEHB reached 0 reported bugs, 87% attendee
                site use, and higher submission activity after redesign. I bring
                the most value when teams need rigorous research turned into
                practical decisions about usability, adoption, data quality,
                engagement, onboarding, and product direction.
              </p>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative flex flex-col items-center gap-5">
              <img
                src={profileImg}
                alt="Jhonatan Saldana"
                className="relative w-80 rounded-[2rem] border border-accent/20 object-cover shadow-xl md:w-96 lg:w-[28rem]"
              />

              <div className="relative flex flex-wrap justify-center gap-3">
                <a
                  href="https://drive.google.com/file/d/1Ag33D8-jdyysqxay4hyyyHSyxF3oSW7R/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  <FiFileText className="text-xl" />
                  Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8">
        <SectionHeader>Skills</SectionHeader>

        <div className="grid gap-4 md:grid-cols-2">
          {skills.map((skill) => (
            <article
              key={skill.title}
              className="rounded-2xl border border-accent/15 bg-surface p-5 shadow-sm"
            >
              <h3 className="font-bold text-accent">{skill.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-softtext">
                {skill.items}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section id="experience" className="mx-auto max-w-7xl px-6 py-8">
        <SectionHeader>Experience</SectionHeader>

        <div className="space-y-5">
          {experiences.map((experience) => (
            <article
              id={experience.id}
              key={experience.id}
              className="scroll-mt-24 rounded-3xl border border-accent/15 bg-surface p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="flex flex-col gap-2 border-b border-accent/15 pb-4 md:flex-row md:items-start md:justify-between">
                <div>
                  <h3 className="text-xl font-bold text-ink">
                    {experience.title}
                  </h3>

                  <p className="font-medium text-accent">
                    {experience.organization}
                  </p>

                  {experience.tags?.length ? (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {experience.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-[#7A1E3A]/30 bg-[#F8E8EE] px-3 py-1 text-xs font-semibold text-[#5B142A]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  ) : null}
                </div>

                <div className="text-left text-sm text-subtletext md:text-right">
                  <p className="font-semibold">{experience.dates}</p>
                  <p>{experience.location}</p>
                </div>
              </div>

              <p className="mt-4 leading-relaxed text-muted">
                {experience.summary}
              </p>

              <div className="mt-5">
                {experience.caseStudyLinks?.length ? (
                  <div className="flex flex-wrap gap-4">
                    {experience.caseStudyLinks.map((link) => (
                      <Link
                        key={link.to}
                        to={link.to}
                        className="link-hover link font-semibold text-accent"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                ) : experience.caseStudyPath ? (
                  <Link
                    to={experience.caseStudyPath}
                    className="link-hover link font-semibold text-accent"
                  >
                    See Case Study →
                  </Link>
                ) : (
                  <span className="text-sm font-medium text-subtletext">
                    Case study page coming soon
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 pt-8">
        <SectionHeader>Education</SectionHeader>

        <article className="rounded-3xl border border-accent/15 bg-surface p-6 shadow-sm">
          <div className="flex flex-col gap-1 md:flex-row md:items-start md:justify-between">
            <div>
              <h3 className="text-xl font-bold text-ink">
                Georgia State University
              </h3>
              <p className="text-softtext">
                PhD, Psychology — Cognitive Science
              </p>
              <p className="text-softtext">
                M.A., Psychology — Cognitive Science
              </p>
            </div>

            <p className="font-medium text-subtletext">Atlanta, GA</p>
          </div>
        </article>
      </section>
    </section>
  );
}

export default HomePage;

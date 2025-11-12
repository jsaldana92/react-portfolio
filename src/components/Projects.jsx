// src/pages/Projects.jsx
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import researchObsCard from "../images/researchobs_card.png";
import dataPullerCard from "../images/datapuller_card.png";
import hyperlinkCard from "../images/hyperlink_card.png";
import gradingCard from "../images/grading_card.png";
import seehbCard from "../images/seehbcard.png";

function Metric({ children }) {
  return <span className="text-[#f27209] font-semibold">{children}</span>;
}

// selectable filter tags (top row) — tuned to match a typical UXR + dev skills section
const SKILLS = [
  // Qual & UX
  "User Interviews",
  "Contextual Inquiry",
  "Usability Testing",
  "Survey Design",
  "Thematic Analysis",
  "Personas",
  "Journey Mapping",
  "Stakeholder Interviews",
  // Quant & Analysis
  "Data Cleaning",
  "Statistical Modeling",
  "t-Test (RM)",
  "Linear Regression",
  "Model Comparison",
  // Product/IA & Delivery
  "Information Architecture",
  "Iterative Redesign",
  "Performance Optimization",
  // Eng stacks
  "Benchmarking",
  "A/B Testing",
  "Beta Testing",
];

function ToggleTag({ label, active, onClick }) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={[
        "text-xs md:text-sm px-3 py-1.5 rounded-full border transition",
        active
          ? "bg-white/90 text-black border-white"
          : "bg-[#5f5e5e] text-white/90 border-white/20 hover:bg-white/15",
      ].join(" ")}
    >
      {label}
    </button>
  );
}

function ProjectCard({ title, to, bg, methods = [], summary, bullets = [] }) {
  return (
    <div
      className="relative rounded-2xl overflow-hidden shadow-lg bg-black/70 bg-no-repeat bg-center bg-cover"
      style={{ backgroundImage: `url(${bg})` }}
      aria-label={title}
    >
      {/* darker + subtle blur for readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/80 to-black/50 backdrop-blur-[2px]" />
      <div className="relative p-4 flex flex-col h-[480px]">
        <div className="flex flex-wrap gap-2 mb-3">
          {methods.map((m, i) => (
            <span
              key={i}
              className="inline-block text-xs px-2 py-1 rounded-full bg-white/10 text-white/90 border border-white/20"
            >
              {m}
            </span>
          ))}
        </div>

        <h3 className="text-white text-xl font-bold leading-snug">{title}</h3>
        <p className="text-white/90 text-sm mt-2">{summary}</p>

        <ul className="mt-3 space-y-1.5 text-sm text-white/95">
          {bullets.map((b, i) => (
            <li key={i} className="leading-snug">
              • {b}
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-4 text-right">
          <Link
            to={to}
            className="text-blue-300 hover:text-blue-200 hover:underline font-medium"
          >
            Learn more &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const projects = useMemo(
    () => [
      {
        title: "Contextual Interviews → Behavioral Observation App",
        to: "/ResearchObs",
        bg: researchObsCard,
        methods: [
          "User Interviews",
          "Contextual Inquiry",
          "Usability Testing",
          "Thematic Analysis",
          "Stakeholder Interviews",
          "Beta Testing",
          "Information Architecture",
        ],
        summary:
          "Interviewed end-users, data manager, and PI to align workflows; validated changes through beta usability testing (5-pt Likert scale).",
        bullets: [
          <>
            Increased overall ratings to <Metric>4.3</Metric> vs{" "}
            <Metric>2.4</Metric>
          </>,
          <>
            Faster group switching: <Metric>4.8</Metric> vs <Metric>2.9</Metric>
          </>,
          <>
            Easier in-app editing: <Metric>4.0</Metric> vs <Metric>1.2</Metric>
          </>,
          <>
            Maintained familiarity at <Metric>3.8</Metric>
          </>,
        ],
      },
      {
        title: "Semi-Structured Interviews → GTA Grading Insights",
        to: "/GTAGradingExperience",
        bg: gradingCard,
        methods: [
          "User Interviews",
          "Personas",
          "Journey Mapping",
          "Survey Design",
          "Stakeholder Interviews",
        ],
        summary:
          "Interviewed 10 GTAs across three departments to map pain points and support gaps.",
        bullets: [
          <>Identified AI policy issues as the most frequent challenge</>,
          <>
            Recommended <Metric>standardized training</Metric> &{" "}
            <Metric>regular check-ins</Metric>
          </>,
          <>Findings presented to departments to inform training updates</>,
        ],
      },
      {
        title: "Conference Website → Faster Discovery & Sign-Ups",
        to: "/SEEHB",
        bg: seehbCard,
        methods: [
          "Usability Testing",
          "Survey Design",
          "Iterative Redesign",
          "Information Architecture",
          "Performance Optimization",
        ],
        summary:
          "Post-launch research guided navigation, layout consistency, and SPA improvements.",
        bullets: [
          <>
            RSVP speed: <Metric>5.3s → 1.3s</Metric>
          </>,
          <>
            Abstracts found faster: <Metric>20s → 15s</Metric>
          </>,
          <>
            Fewer bugs: <Metric>8 → 0</Metric>
          </>,
          <>Higher likelihood to return/share (qualitative + survey gains)</>,
        ],
      },
      {
        title: "Data Tooling → Faster Launch & Higher Adoption",
        to: "/DataPuller",
        bg: dataPullerCard,
        methods: [
          "Stakeholder Interviews",
          "Benchmarking",
          "A/B Testing",
          "Beta Testing",
          "Performance Optimization",
        ],
        summary:
          "Moved from Python prototype to Rust to match perceived speed needs and reduce friction (5-pt Likert scale).",
        bullets: [
          <>
            Launch time: <Metric>~12s → ~1s</Metric>
          </>,
          <>
            Data collection: <Metric>~33s → ~3s</Metric>
          </>,
          <>
            Satisfaction: <Metric>3.2 → 4.7</Metric>
          </>,
          <>
            Likelihood to use: <Metric>1.5 → 4.2</Metric>
          </>,
          <>
            Adoption: <Metric>2/3 labs</Metric>
          </>,
        ],
      },
      {
        title: "Online Learning → Engagement Experiment",
        to: "/HyperlinkEngagement",
        bg: hyperlinkCard,
        methods: [
          "Data Cleaning",
          "Statistical Modeling",
          "t-Test (RM)",
          "Linear Regression",
          "Model Comparison",
        ],
        summary:
          "Tested whether hyperlinking weekly announcements affects viewing behavior and grades.",
        bullets: [
          <>
            Engagement: <Metric>1.4×</Metric> more total views
          </>,
          <>More average views per lecture</>,
          <>Engagement positively associated with final grade</>,
          <>Hyperlinking did not directly change grades</>,
        ],
      },
    ],
    []
  );

  // Use resume skills (SKILLS) for the filter list, not dynamic from projects.
  const allTags = useMemo(() => SKILLS, []);

  const [selected, setSelected] = useState([]); // empty = show all

  const toggleTag = (tag) => {
    setSelected((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const clearFilters = () => setSelected([]);

  const filtered = useMemo(() => {
    if (selected.length === 0) return projects;
    // OR filter: show projects that match ANY selected tag
    return projects.filter((p) => p.methods.some((m) => selected.includes(m)));
  }, [projects, selected]);

  return (
    <main className="px-4 md:px-8 lg:px-12 py-10">
      {/* Tag Filter Row */}
      <div className="flex flex-wrap gap-2 items-center mb-6">
        {allTags.map((tag) => (
          <ToggleTag
            key={tag}
            label={tag}
            active={selected.includes(tag)}
            onClick={() => toggleTag(tag)}
          />
        ))}
        <button
          type="button"
          onClick={clearFilters}
          className="ml-1 text-xs md:text-sm px-3 py-1.5 rounded-full border bg-[#747474] border-white/20 text-white/80 hover:text-white hover:bg-white/10 transition"
        >
          Clear filters
        </button>
        <span className="ml-auto text-black/80 text-xs md:text-sm">
          Showing <span className="text-[#f27209]">{filtered.length}</span> of{" "}
          <span className="text-[#f27209]">{projects.length}</span>
        </span>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
        {filtered.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </main>
  );
}

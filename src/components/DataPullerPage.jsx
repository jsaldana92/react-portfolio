// src/components/DataPullerPage.jsx
import React, { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import DPPreliminary from "./DataPullerPreliminary";
import DataPullerImage from "./DataPullerImage";
import DataPullerImprovementSuggested from "./DataPullerImprovementSuggested";
import DataPullerImageZoom from "./DataPullerFigjam";
import RustPullerImage from "./RustPullerImage";
import RustPullerImprovementSuggested from "./RustPullerImprovementSuggested";
import DPPrelim from "./DPPrelim";
gsap.registerPlugin(ScrollTrigger);

export function DataPullerPage() {
  // lightbox state
  const [selectedImage, setSelectedImage] = useState(null);

  // which goals have been “flipped”
  const [revealed, setRevealed] = useState([true, true, true]);
  // refs for each goal card
  const cardRefs = [useRef(null), useRef(null), useRef(null)];
  const goalTexts = [
    "Determine Common Data Collection Timeline",
    "Determine an Optimal Solution for Rapid Data Collection",
    "Gauge Engagement",
  ];

  //moving arrow components
  const flowContainer = useRef(null);
  const flowBoxes = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];
  const arrowPathRef = useRef(null);

  useEffect(() => {
    if (!flowContainer.current) return;

    // get container top-left for coordinate conversions
    const cRect = flowContainer.current.getBoundingClientRect();

    // compute absolute center points of each box
    const pts = flowBoxes.map((r) => {
      const b = r.current.getBoundingClientRect();
      return [
        b.left - cRect.left + b.width / 2,
        b.top - cRect.top + b.height / 2,
      ];
    });

    // build an SVG path string: M x0,y0 L x1,y1 L x2,y2 …
    const d = pts.reduce(
      (acc, [x, y], i) => (i === 0 ? `M ${x} ${y}` : acc + ` L ${x} ${y}`),
      ""
    );
    const path = arrowPathRef.current;
    path.setAttribute("d", d);

    // measure total length for draw animation
    const total = path.getTotalLength();
    gsap.set(path, { strokeDasharray: total, strokeDashoffset: total });
    // draw when scrolled into view
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: flowContainer.current,
        start: "top 80%", // adjust as needed
        toggleActions: "play none none none",
        once: true,
      },
      defaults: { duration: 6, ease: "power1.inOut" },
    });
    tl.to(path, { strokeDashoffset: 0 });
  }, []);

  // ─── Animated stats setup ───────────────────────────────
  const statsSets = [
    {
      title: "Total Views Over 3 Lectures",
      data: [
        { label: "Hyperlinked", value: 120 },
        { label: "Not Hyperlinked", value: 70 },
      ],
    },
    {
      title: "Average Views per Lecture",
      data: [
        { label: "Hyperlinked", value: 40 },
        { label: "Not Hyperlinked", value: 23 },
      ],
    },
  ];
  const [statsIndex, setStatsIndex] = useState(0);
  const statsRef = useRef(null);

  // cycle through the two sets every 5 seconds

  // 1) cycling hook
  useEffect(() => {
    const id = setInterval(() => {
      setStatsIndex((i) => (i + 1) % statsSets.length);
    }, 5000); // change to 10000 for 10s
    return () => clearInterval(id);
  }, []);

  // 2) animation hook
  useEffect(() => {
    if (!statsRef.current) return;
    const elems = statsRef.current.querySelectorAll(".anim");
    gsap.fromTo(
      elems,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.1 }
    );
  }, [statsIndex]);
  // ───────────────────────────────────────────────────────────

  return (
    <div className="w-full">
      {/* ---- Intro + Research Approach + Project Goals (unchanged) ---- */}
      <section className="max-w-4xl mx-auto py-16 px-6 space-y-12">
        {/* Title */}
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-extrabold text-gray-900">
            DataPuller: Reducing Friction in Lab Data Collection
          </h1>
        </div>

        {/* Intro (centered box) */}
        <div className="relative flex justify-center">
          <div className="bg-white p-8 rounded-2xl shadow-lg max-w-3xl text-center cursor-auto">
            <p className="text-lg md:text-xl text-gray-800">
              I conducted user interviews and surveys with research staff to
              identify key friction points in the existing data collection
              workflow. This was followed by usability testing sessions during
              the beta phase of{" "}
              <span className="font-semibold">DataPuller</span> to evaluate the
              effectiveness of proposed solutions and measure key performance
              indicators such as{" "}
              <span className="font-semibold">usability</span>,
              <span className="font-semibold"> engagement</span>, and
              <span className="font-semibold"> task efficiency</span>.
              Post-launch, I facilitated follow-up interviews and surveys to
              validate the impact of implemented changes and generate insights
              to inform future iterations of the tool.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="flex justify-center py-4">
          <div className="w-2/3 h-1 bg-backgroundgrey rounded-full" />
        </div>

        {/* Research Approach */}
        <div className="relative flex justify-center">
          <div className="p-6 md:p-8 rounded-2xl w-full max-w-4xl cursor-auto">
            <h2 className="text-4xl font-extrabold text-center mb-4 text-gray-900">
              Research Approach
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-gray-800">
              {/* Workflow Audit & Requirements */}
              <div className="rounded-xl p-4 bg-gray-50">
                <p className="font-semibold mb-1">
                  Workflow Audit &amp; Requirements
                </p>
                <p className="text-sm">
                  Mapped cross-lab data pulling steps, constraints, and security
                  needs (non-cloud environments), surfacing bottlenecks like
                  manual file traversal and slow tool startup that impacted
                  perceived speed.
                </p>
              </div>
              {/* Mixed-Methods User Research */}
              <div className="rounded-xl p-4 bg-gray-50">
                <p className="font-semibold mb-1">
                  Mixed-Methods User Research
                </p>
                <p className="text-sm">
                  Interviews and surveys with research staff to prioritize pain
                  points; beta usability sessions to evaluate proposed changes
                  and track KPIs (usability, engagement, task time) against the
                  legacy workflow.
                </p>
              </div>
              {/* Build, Benchmark & Iterate */}
              <div className="rounded-xl p-4 bg-gray-50">
                <p className="font-semibold mb-1">
                  Build, Benchmark &amp; Iterate
                </p>
                <p className="text-sm">
                  Prototyped improvements, then rebuilt for performance (e.g.,
                  Rust implementation) and validated with beta tests;
                  post-launch interviews and surveys informed ongoing
                  refinements and future roadmap.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ---- Project Goals (unchanged) ---- */}
        <div className="flex justify-center">
          <div className="w-full mx-auto">
            <p className="text-4xl font-extrabold text-[#000000] text-center">
              Project Goals
            </p>
          </div>
        </div>

        {/* Goals Row — defaults to text, toggles to “Goal #” on click (UNCHANGED) */}
        <div className="flex justify-center">
          <div className="flex space-x-2 md:space-x-12">
            {goalTexts.map((text, i) => (
              <div
                key={i}
                ref={cardRefs[i]}
                onClick={() => {
                  setRevealed((prev) => {
                    const copy = [...prev];
                    copy[i] = !copy[i];
                    return copy;
                  });
                  const el = cardRefs[i].current;
                  if (!el) return;
                  gsap.fromTo(
                    el,
                    { scale: 0.9, opacity: 0 },
                    {
                      scale: 1,
                      opacity: 1,
                      duration: 0.4,
                      ease: "back.out(1.7)",
                    }
                  );
                }}
                className={`relative flex items-center justify-center box-content font-semibold rounded-2xl shadow-lg p-6 h-18 w-18 md:h-12 md:w-42 text-center cursor-pointer overflow-hidden ${
                  revealed[i]
                    ? "bg-white text-sm custom-shadow-sm text-gray-800"
                    : "bg-blue-950/80 text-white"
                }`}
              >
                {/* When revealed = true, show the goal text; when false, show “Goal #” */}
                <span
                  className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                    revealed[i] ? "opacity-100" : "opacity-0"
                  }`}
                >
                  {text}
                </span>
                <span
                  className={`block transition-opacity duration-300 ${
                    revealed[i] ? "opacity-0" : "opacity-100"
                  }`}
                >
                  Goal #{i + 1}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* discovery research */}
      <div className="w-full mx-auto px-6 py-8">
        <h2 className="text-4xl font-extrabold text-gray-900 text-center">
          Discovery Research
        </h2>

        <div className="flex justify-center py-4">
          <div className="w-2/3 h-1 bg-gradient-to-r from-blue-500 to-teal-400 rounded-full" />
        </div>
      </div>

      {/* ---- Methods---- */}

      <section className="max-w-4xl mx-auto px-6">
        <div className="w-full mx-auto">
          <h1 className="text-3xl font-extrabold custom-shadow-white text-[#000000] text-center">
            Methods
          </h1>
        </div>
        <div className="w-full mx-auto">
          <p className="text-lg text-center pt-1 text-gray-700 italic">
            6 Research Staff Members: Junior, Senior, and Primary Investigators
          </p>
        </div>
      </section>

      {/* goal card */}
      <section className="max-w-4xl mx-auto mt-8 px-6 flex justify-center">
        <div className="flex items-center">
          <div>
            <h3 className="text-2xl font-extrabold  text-backgroundred">
              Goal #1
            </h3>
            <hr className="w-16 border-backgroundgrey m-3 border-[2px]" />
            <div className=" bg-gradient-to-r from-[#1b2683] to-[#0987c6]  p-6 rounded-2xl shadow-lg w-full">
              <p className="text-lg font-semibold text-custom-shadow-sm text-white custom-shadow-white">
                {goalTexts[0]}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/*----Interview Methods----*/}
      <section className="max-w-4xl mx-auto px-6 mt-10 mb-8">
        <div className="flex flex-col md:flex-row items-start md:items-center md:space-x-12 space-y-8 md:space-y-0">
          {/* Left column*/}
          <div className="md:w-1/2 flex justify-center">
            <div className="bg-white p-6 rounded-2xl shadow-lg w-full mb-4">
              <p className="text-lg text-center md:text-start font-semibold text-gray-900 ">
                User Interviews and Surveys
              </p>
            </div>
          </div>

          {/* Right column */}
          <div className="md:w-1/2 flex justify-center">
            <div className="bg-white p-6 rounded-2xl shadow-lg w-full mb-4">
              <p className="text-lg text-center md:text-end font-semibold text-gray-900 ">
                Focus: Determine Data Collection Workflow and Pain Points
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto mb-10 mt-8 px-6">
        <div className="w-full mx-auto">
          <h1 className="text-3xl font-extrabold custom-shadow-white text-[#000000] text-center">
            Results
          </h1>
        </div>
        <div className="w-full mx-auto">
          <p className="text-lg text-center pt-1 text-gray-700 italic"></p>
        </div>
      </section>
      {/* Interview  */}
      {/* ---- Timeline & Questionnaire ---- */}
      <section>
        <DPPrelim />
      </section>

      {/* Insight card on top */}
      <section className="max-w-4xl mx-auto   mt-16 px-6">
        <div className="w-full mx-auto">
          <h1 className="text-3xl font-extrabold custom-shadow-white text-[#000000] text-center">
            Outline for Beta-App
          </h1>
        </div>
        <div className="w-full mx-auto">
          <p className="text-lg text-center pt-1 text-gray-700 italic">
            DataPuller Configuration
          </p>
        </div>
      </section>

      {/* goal card */}
      <section className="max-w-4xl mx-auto mt-8 px-6 flex justify-center">
        <div className="flex items-center">
          <div>
            <h3 className="text-2xl font-extrabold  text-backgroundred">
              Goal #2
            </h3>
            <hr className="w-16 border-backgroundgrey m-3 border-[2px]" />
            <div className=" bg-gradient-to-r from-[#1b2683] to-[#0987c6]  p-6 rounded-2xl shadow-lg w-full">
              <p className="text-lg font-semibold text-custom-shadow-sm text-white custom-shadow-white">
                {goalTexts[1]}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Preliminary Conclusion — Process Flow */}
      <section className="mx-auto w-[90vw] max-w-[1200px] px-6 mt-12 mb-6">
        <div className="bg-white rounded-2xl shadow-lg p-8 space-y-8">
          {/* Meta row */}
          <div className="flex flex-wrap gap-3">
            <span className="px-3 py-1 rounded-md bg-blue-50 text-blue-900 text-sm font-semibold">
              Python
            </span>
            <span className="px-3 py-1 rounded-md bg-teal-50 text-teal-900 text-sm font-semibold">
              Stand-alone (.exe)
            </span>
            <span className="px-3 py-1 rounded-md bg-slate-50 text-slate-900 text-sm">
              Pop-ups: errors & successes
            </span>
          </div>

          {/* Flow */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
            {/* Source */}
            <div className="rounded-xl border border-gray-200 p-6">
              <h3 className="text-sm font-semibold text-gray-600 mb-2">
                Source
              </h3>
              <p className="text-lg font-semibold text-gray-900">C:/Tasks/</p>
              <p className="text-sm text-gray-600 mt-2">
                Collect folders from local, non-cloud locations.
              </p>
            </div>

            {/* Filters */}
            <div className="relative">
              {/* connector arrow (hidden on small) */}
              <svg
                className="hidden lg:block absolute -left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-300"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M0 12h24M18 6l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
              <div className="rounded-xl border border-gray-200 p-6 h-full">
                <h3 className="text-sm font-semibold text-gray-600 mb-2">
                  Filters
                </h3>
                <ul className="text-gray-900 space-y-1">
                  <li>
                    <span className="font-semibold">Include:</span> .csv, .txt
                  </li>
                  <li>
                    <span className="font-semibold">Exclude:</span> “para”
                  </li>
                  <li>
                    <span className="font-semibold">Optional exclude:</span>{" "}
                    “monkey”, “block”
                  </li>
                </ul>
              </div>
            </div>

            {/* Destination */}
            <div className="relative">
              {/* connector arrow (hidden on small) */}
              <svg
                className="hidden lg:block absolute -left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-300"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M0 12h24M18 6l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
              <div className="rounded-xl border border-gray-200 p-6 h-full">
                <h3 className="text-sm font-semibold text-gray-600 mb-2">
                  Destination
                </h3>
                <p className="text-lg font-semibold text-gray-900">
                  D:/data_from_puller/
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  optional mirror: C:/Tasks/[last name]/[task name]/copied/
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-8 py-4">
          <div className="w-2/3 h-1 bg-backgroundgrey rounded-full" />
        </div>
      </section>

      {/*----Beta Interviews----*/}

      {/* Intro card and results title */}
      <section className="w-full mx-auto">
        <div className="px-6 py-8">
          <h2 className="text-4xl font-extrabold text-gray-900 text-center">
            Beta-App Research
          </h2>

          <div className="flex justify-center py-4">
            <div className="w-2/3 h-1 bg-gradient-to-r from-blue-500 to-teal-400 rounded-full" />
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto mt-4 px-6">
        <div className="w-full mx-auto">
          <h1 className="text-3xl font-extrabold custom-shadow-white text-[#000000] text-center">
            Methods
          </h1>
        </div>
        <div className="w-full mx-auto">
          <p className="text-lg text-center pt-1 text-gray-700 italic">
            4 Research Staff Members: Junior and Senior Researchers
          </p>
        </div>
      </section>

      {/* goal card */}
      <section className="max-w-4xl mx-auto mt-8 px-6 flex justify-center">
        <div className="flex items-center">
          <div>
            <h3 className="text-2xl font-extrabold  text-backgroundred">
              Goal #3
            </h3>
            <hr className="w-16 border-backgroundgrey m-3 border-[2px]" />
            <div className=" bg-gradient-to-r from-[#1b2683] to-[#0987c6]  p-6 rounded-2xl shadow-lg w-full">
              <p className="text-lg font-semibold text-custom-shadow-sm text-white custom-shadow-white">
                {goalTexts[2]}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/*----Interview Methods----*/}
      <section className="max-w-4xl mx-auto px-6 mt-12">
        <div className="flex flex-col md:flex-row items-start md:items-center md:space-x-12 space-y-8 md:space-y-0">
          {/* Left column */}
          <div className="md:w-1/2 flex justify-center">
            <div className="bg-white p-6 rounded-2xl shadow-lg w-full mb-4">
              <p className="text-lg text-center md:text-start font-semibold text-gray-900 ">
                User Interviews and Surveys
              </p>
            </div>
          </div>

          {/* Right column*/}
          <div className="md:w-1/2 flex justify-center">
            <div className="bg-white p-6 rounded-2xl shadow-lg w-full mb-4">
              <p className="text-lg text-center md:text-end font-semibold text-gray-900 ">
                Focus: Determine User Reception of Beta-App and Likelihood of
                Usage
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Insight card on top */}
      <section className="max-w-4xl mx-auto mt-12 px-6">
        <div className="w-full mx-auto">
          <h1 className="text-3xl font-extrabold custom-shadow-white text-[#000000] text-center">
            Results
          </h1>
        </div>
        <div className="w-full mx-auto">
          <p className="text-lg text-center pt-1 text-gray-700 italic"></p>
        </div>
      </section>
      {/* Results Section — stacked layout */}
      <section className="max-w-4xl mx-auto mt-4 mb-12 px-6">
        <div className="w-full mx-auto">
          <h1 className="text-2xl font-bold custom-shadow-white text-[#000000] text-center">
            While <span className="text-blue-200">DataPuller</span> demonstrated
            improved{" "}
            <span className="text-blue-200">data collection speed</span>{" "}
            compared to traditional methods, user feedback revealed concerns
            about the{" "}
            <span className="text-blue-200">12-second startup time</span>, which
            negatively influenced{" "}
            <span className="text-blue-200">overall adoption intent.</span>
          </h1>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 mt-2 space-y-10">
        {/* Top: Image component */}
        <div className="w-full">
          <DataPullerImprovementSuggested />
        </div>

        {/* Bottom: Improvement component */}
        <div className="w-full">
          <DataPullerImage />
        </div>
      </section>

      <section className="max-w-4xl mx-auto mt-4 mb-12 px-6">
        <div className="w-full mt-6 mx-auto">
          <h1 className="text-2xl font-bold custom-shadow-white text-[#000000] text-center">
            Because of{" "}
            <span className="text-blue-200">Python’s bundled interpreter</span>{" "}
            limitations affecting launch performance, recoding the app in a{" "}
            <span className="text-blue-200">faster language</span>, such as{" "}
            <span className="text-[#cc4100]">Rust</span>, is recommended to meet{" "}
            <span className="text-blue-200">user expectations</span> and enhance{" "}
            <span className="text-blue-200">perceived responsiveness.</span>
          </h1>
        </div>
        <div className="flex justify-center mb-2 mt-4 py-4">
          <div className="w-2/3 h-1 bg-backgroundgrey rounded-full" />
        </div>
      </section>

      {/*----Post Interviews----*/}
      {/* Intro card and results title */}
      <section className="w-full mx-auto">
        <div className="px-6 py-8">
          <h2 className="text-4xl font-extrabold text-gray-900 text-center">
            Post-Launch Research
          </h2>

          <div className="flex justify-center py-4">
            <div className="w-2/3 h-1 bg-gradient-to-r from-blue-500 to-teal-400 rounded-full" />
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto mt-4 px-6">
        <div className="w-full mx-auto">
          <h1 className="text-3xl font-extrabold custom-shadow-white text-[#000000] text-center">
            Methods
          </h1>
        </div>
        <div className="w-full mx-auto">
          <p className="text-lg text-center pt-1 text-gray-700 italic">
            4 Research Staff Members: Junior and Senior Researchers
          </p>
        </div>
      </section>

      {/* goal card */}
      <section className="max-w-4xl mx-auto mt-8 px-6 flex justify-center">
        <div className="flex items-center">
          <div>
            <h3 className="text-2xl font-extrabold  text-backgroundred">
              Goal #3 cont.
            </h3>
            <hr className="w-16 border-backgroundgrey m-3 border-[2px]" />
            <div className=" bg-gradient-to-r from-[#1b2683] to-[#0987c6]  p-6 rounded-2xl shadow-lg w-full">
              <p className="text-lg font-semibold text-custom-shadow-sm text-white custom-shadow-white">
                {goalTexts[2]}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/*----Interview Methods----*/}
      <section className="max-w-4xl mx-auto px-6 mt-12">
        <div className="flex flex-col md:flex-row items-start md:items-center md:space-x-12 space-y-8 md:space-y-0">
          {/* Left column */}
          <div className="md:w-1/2 flex justify-center">
            <div className="bg-white p-6 rounded-2xl shadow-lg w-full mb-4">
              <p className="text-lg text-center md:text-start font-semibold text-gray-900 ">
                Closed Question Questionnaire and Usability Testing
              </p>
            </div>
          </div>

          {/* Right column*/}
          <div className="md:w-1/2 flex justify-center">
            <div className="bg-white p-6 rounded-2xl shadow-lg w-full mb-4">
              <p className="text-lg text-center md:text-end font-semibold text-gray-900 ">
                Approximately 5-minute Interviews with Open Ended Questions
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Insight card on top */}
      <section className="max-w-4xl mx-auto mt-8 px-6">
        <div className="w-full mx-auto">
          <h1 className="text-3xl font-extrabold custom-shadow-white text-[#000000] text-center">
            Results
          </h1>
        </div>
        <div className="w-full mx-auto">
          <p className="text-lg text-center pt-1 text-gray-700 italic"></p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto mt-4 mb-12 px-6">
        <div className="w-full mx-auto">
          <h1 className="text-2xl font-bold custom-shadow-white text-[#000000] text-center">
            Rewriting the app in
            <span className="text-[#cc4100]"> Rust </span>
            reduced launch times from
            <span className="text-blue-200"> ~12 seconds </span>
            to just
            <span className="text-blue-200"> ~1 second, </span>
            resulting in a dramatic increase in
            <span className="text-blue-200"> user satisfaction </span>
            and overall
            <span className="text-blue-200"> engagement. </span>
            The new version received an average
            <span className="text-blue-200"> usability rating of 4.7/5 </span>
            compared to
            <span className="text-blue-200"> 3.2/5 </span>
            for the Python version, and
            <span className="text-blue-200"> likelihood to use </span>
            rose from
            <span className="text-blue-200"> 1.5/5 </span>
            to
            <span className="text-blue-200"> 4.2/5.</span>
            Two out of three participating labs agreed to
            <span className="text-blue-200"> implement DataPuller </span>
            as part of their data collection process.
          </h1>
        </div>
      </section>

      {/* Results Section — stacked layout */}
      <section className="max-w-6xl mx-auto px-6 mt-2 space-y-10">
        {/* Top: Image component */}
        <div className="w-full">
          <RustPullerImprovementSuggested />
        </div>

        {/* Bottom: Improvement component */}
        <div className="w-full">
          <RustPullerImage />
        </div>
      </section>

      <section className="max-w-4xl mx-auto mt-4 mb-12 px-6">
        <div className="flex justify-center mb-2 mt-4 py-4">
          <div className="w-2/3 h-1 bg-backgroundgrey rounded-full" />
        </div>
      </section>

      {/* Take Aways */}
      <section className="max-w-4xl mx-auto pt-4 pb-16 px-6">
        <div className="w-full">
          <h2 className="text-4xl leading-snug  font-extrabold text-center text-black">
            Impact
          </h2>

          <div className="flex justify-center mt-2 py-4">
            <div className="w-2/3 h-1 bg-gradient-to-r from-blue-500 to-teal-400 rounded-full" />
          </div>
        </div>
      </section>
      {/* ---- Outcomes from study ---- */}
      <section className="max-w-4xl mx-auto px-6 pt-4 pb-16">
        <div className="flex flex-col md:flex-row items-start md:items-center md:space-x-12 space-y-8 md:space-y-0">
          {/* Left column: title + result card */}
          <div className="flex flex-col items-start space-y-4 md:w-1/2">
            <h3 className="text-2xl font-extrabold text-backgroundred">
              Primary Considerations
            </h3>
            <hr className="w-16 border-backgroundgrey border-[2px]" />
            <div className="bg-white p-6 rounded-2xl shadow-lg w-full">
              <p className="text-lg font-semibold text-custom-shadow-sm text-gray-800">
                Improving data collection speed alone is{" "}
                <span className="underline">not enough</span> to over come
                anchor biases from users to continue using traditional
                practices.
              </p>
            </div>
          </div>

          {/* Right column: quote card */}
          <div className="flex flex-col items-end space-y-4 md:w-1/2">
            <h3 className="text-2xl font-extrabold text-backgroundred">
              Secondary Considerations
            </h3>
            <hr className="w-16 border-backgroundgrey border-[2px]" />
            <div className="bg-white p-6 rounded-2xl shadow-lg w-full">
              <p className="text-lg font-semibold text-custom-shadow-sm text-gray-800">
                Future updates should iterate on DataPuller without increasing
                launch speed to avoid user frustration and drop off.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* ---- Additional Insight for Goal 2 (stacked) ---- */}
      <section className="max-w-4xl mx-auto px-6">
        <div className="flex flex-col space-y-8 pb-16">
          {/* Insight card on top */}
          <div className="w-full mx-auto mb-8">
            <p className="text-4xl  font-bold custom-shadow-white text-[#000000] text-center">
              My research found a{" "}
              <span className="text-blue-200">
                solution to common frustrations
              </span>{" "}
              expressed by researchers and iterated on the beta-app to increase{" "}
              <span className="text-blue-200"> perception</span> and{" "}
              <span className="text-blue-200"> engagement</span> to overcome
              established anchor bias by presenting users alternatives that
              <span className="text-blue-200">
                {" "}
                save both time and increase efficiency
              </span>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Modal Overlay */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="relative max-w-4xl w-150 px-4">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-6 z-10 w-10 h-10 flex items-start justify-center text-white text-3xl font-bold rounded-full bg-black/60 shadow-lg backdrop-blur-sm hover:bg-black/80 transition"
            >
              &times;
            </button>
            <img
              src={selectedImage}
              alt="enlarged"
              className="w-full h-auto rounded-lg shadow-lg"
              onContextMenu={(e) => e.preventDefault()} //prevents right clicking
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default DataPullerPage;

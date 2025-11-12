// src/components/ResearchObsPage.jsx
import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import ROPreliminaryInterview from "./ROPrelimInterview";
import ROPrelimFigjam from "./ROPrelimFigjam";
import homeImg from "../images/researchobs/homescreen.png";
import storageImg from "../images/researchobs/storagepage.png";
import dataImg from "../images/researchobs/datapage.png";
import ROTimeline from "./ROTimeline";
import ROFlow from "./ROFlow";
import ROBetaResults from "./ROBetaResults";
import ROGrid from "./ROGrid";
import ROThemeCombined from "./ROThemeCombined";

gsap.registerPlugin(ScrollTrigger);

export function ResearchObsPage() {
  // Lightbox state
  const [selectedImage, setSelectedImage] = useState(null);

  // Goal flip state — default to shown text (like the sample page)
  const [revealed, setRevealed] = useState([true, true, true]);
  const cardRefs = [useRef(null), useRef(null), useRef(null)];
  const goalTexts = [
    "Determine Best Future Proof App Language",
    "Determine Current Issues with WhatsOb",
    "Gauge Effectiveness of Beta-App Solutions",
  ];

  // Thematic analysis (click-to-reveal) state
  const themeTexts = [
    "In-Observation Editing", // 1
    "Cross-tablet Profiles", // 2
    "Continuity with Legacy Data Structure", // 3
    "Customizable Groups", // 4
  ];
  const themeRefs = themeTexts.map(() => useRef(null));
  const [themesRevealed, setThemesRevealed] = useState(
    Array(themeTexts.length).fill(true)
  );

  // Optional GSAP path animation plumbing (kept but sandboxed)
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
    if (!flowContainer.current || !arrowPathRef.current) return;
    const cRect = flowContainer.current.getBoundingClientRect();
    const pts = flowBoxes.map((r) => {
      if (!r.current) return [0, 0];
      const b = r.current.getBoundingClientRect();
      return [
        b.left - cRect.left + b.width / 2,
        b.top - cRect.top + b.height / 2,
      ];
    });

    const d = pts.reduce(
      (acc, [x, y], i) => (i === 0 ? `M ${x} ${y}` : acc + ` L ${x} ${y}`),
      ""
    );
    const path = arrowPathRef.current;
    path.setAttribute("d", d);

    const total = path.getTotalLength();
    gsap.set(path, { strokeDasharray: total, strokeDashoffset: total });
    gsap
      .timeline({
        scrollTrigger: {
          trigger: flowContainer.current,
          start: "top 80%",
          toggleActions: "play none none none",
          once: true,
        },
        defaults: { duration: 6, ease: "power1.inOut" },
      })
      .to(path, { strokeDashoffset: 0 });
  }, []);

  return (
    <div className="w-full">
      {/* ---- Intro + Research Approach + Research Purposes ---- */}
      <section className="max-w-4xl mx-auto py-16 px-6 space-y-12">
        {/* Title (replaces gradient header + subtitle) */}
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-extrabold text-gray-900">
            ResearchObs: Redesigning CEBUS Lab’s Observation App
          </h1>
        </div>

        {/* Intro */}
        <div className="relative flex justify-center">
          <div className="bg-white p-8 rounded-2xl shadow-lg max-w-3xl text-center cursor-auto">
            <p className="text-lg md:text-xl text-gray-800">
              The CEBUS lab’s behavioral data tool (
              <span className="font-semibold">WhatsOb</span>) had become
              outdated and unsupported, creating inconsistent data practices and
              long-term maintenance risk. I led a UX research initiative to
              guide a ground-up redesign, then designed and developed a new app
              aligned with real lab workflows and sustainable maintenance.
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
              {/* Discovery & Analysis */}
              <div className="rounded-xl p-4 bg-gray-50">
                <p className="font-semibold mb-1">Discovery &amp; Analysis</p>
                <p className="text-sm">
                  Competitive analysis of behavioral data tools to assess rigid
                  platform constraints and the need for customizability suited
                  to research protocols.
                </p>
              </div>
              {/* User Research */}
              <div className="rounded-xl p-4 bg-gray-50">
                <p className="font-semibold mb-1">User Research</p>
                <p className="text-sm">
                  Exploratory interviews and contextual inquiry with data
                  collectors, stakeholder, and the data manager to identify pain
                  points, unmet needs, and workflow requirements.
                </p>
              </div>
              {/* Build & Evaluate */}
              <div className="rounded-xl p-4 bg-gray-50">
                <p className="font-semibold mb-1">Build &amp; Evaluate</p>
                <p className="text-sm">
                  Front- and back-end design decisions driven by findings; beta
                  usability testing to ensure the new app addressed prior
                  limitations.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Research Purposes (title) */}
        <div className="flex justify-center">
          <div className="w-full mx-auto">
            <p className="text-4xl font-extrabold text-[#000000] text-center">
              Project Goals
            </p>
          </div>
        </div>

        {/* Goals Row — defaults to text, toggles to “Goal #” on click */}
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

      {/* ---- Market Solution Research (Goal #1) ---- */}
      <section className="w-full mx-auto cursor-auto">
        <div className="px-6 py-8">
          <h2 className="text-4xl font-extrabold text-gray-900 text-center">
            Market Solution Research
          </h2>
          <div className="flex justify-center py-4">
            <div className="w-2/3 h-1 bg-gradient-to-r from-blue-500 to-teal-400 rounded-full" />
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 cursor-auto">
        <div className="w-full mx-auto">
          <h1 className="text-3xl font-extrabold custom-shadow-white text-[#000000] text-center">
            Competitor Analysis
          </h1>
        </div>
        <div className="w-full mx-auto">
          <p className="text-lg text-center pt-1 text-gray-700 italic">
            Determining Possible Solutions to Prevent Future Maintenance Issues
          </p>
        </div>
      </section>

      <section className="max-w-4xl mb-8 mx-auto mt-8 px-6 flex justify-center cursor-auto">
        <div className="flex items-center">
          <div>
            <h3 className="text-2xl font-extrabold text-backgroundred">
              Goal #1
            </h3>
            <hr className="w-16 border-backgroundgrey m-3 border-[2px]" />
            <div className="p-6 bg-gradient-to-r from-[#1b2683] to-[#0987c6] rounded-2xl shadow-lg w-full cursor-auto">
              <p className="text-lg font-semibold text-custom-shadow-sm text-white">
                {goalTexts[0]}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="cursor-auto">
        <ROGrid />
      </section>

      <div className="flex justify-center mb-2 mt-4 py-4 cursor-auto">
        <div className="w-1/2 h-1 bg-backgroundgrey rounded-full" />
      </div>

      {/* ---- Preliminary Research (Goal #2) ---- */}
      <section className="w-full mx-auto cursor-auto">
        <div className="px-6 py-8">
          <h2 className="text-4xl font-extrabold text-gray-900 text-center">
            Discover Research
          </h2>
          <div className="flex justify-center py-4">
            <div className="w-2/3 h-1 bg-gradient-to-r from-blue-500 to-teal-400 rounded-full" />
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 cursor-auto">
        <div className="w-full mx-auto">
          <h1 className="text-3xl font-extrabold custom-shadow-white text-[#000000] text-center">
            Interviews
          </h1>
        </div>
        <div className="w-full mx-auto">
          <p className="text-lg text-center pt-1 text-gray-700 italic">
            Current Issues
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto mt-8 px-6 flex justify-center cursor-auto">
        <div className="flex items-center">
          <div>
            <h3 className="text-2xl font-extrabold text-backgroundred">
              Goal #2
            </h3>
            <hr className="w-16 border-backgroundgrey m-3 border-[2px]" />
            <div className="bg-gradient-to-r from-[#1b2683] to-[#0987c6] p-6 rounded-2xl shadow-lg w-full cursor-auto">
              <p className="text-lg font-semibold text-custom-shadow-sm text-white">
                {goalTexts[1]}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 mt-10 mb-8 cursor-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center md:space-x-12 space-y-8 md:space-y-0">
          <div className="md:w-1/2 flex justify-center">
            <div className="bg-white p-6 rounded-2xl shadow-lg w-full mb-4 cursor-auto">
              <p className="text-lg text-center md:text-start font-semibold text-gray-900">
                Interviews with end-users (data collectors), plus stakeholder
                &amp; data manager
              </p>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="bg-white p-6 rounded-2xl shadow-lg w-full mb-4 cursor-auto">
              <p className="text-lg text-center md:text-end font-semibold text-gray-900">
                Focus: critical usability issues, recurring technical errors,
                and prioritizing feature requirements through a &lsquo;needs vs.
                nice-to-have&rsquo; framework
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Thematic / Preliminary Results title */}
      <section className="max-w-4xl mx-auto mb-10 mt-8 px-6 cursor-auto">
        <div className="w-full mx-auto">
          <h1 className="text-3xl font-extrabold custom-shadow-white text-[#000000] text-center">
            Results
          </h1>
        </div>
        <div className="w-full mx-auto">
          <p className="text-lg text-center pt-1 text-gray-700 italic"></p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto mt-4 mb-12 px-6 cursor-auto">
        <div className="w-full mx-auto">
          <h1 className="text-2xl font-bold custom-shadow-white text-[#000000] text-center">
            <span className="text-blue-500">ResearchObs</span> should add
            quality-of-life features for end-users (undo, quick group switching)
            and in-app management (edit groups, members, behaviors). Back-end
            should largely remain the same for continuity with legacy storage,
            while standardizing global inputs (date, location, weather) to
            reduce errors.
          </h1>
        </div>
      </section>

      <section className="max-w-4xl mx-auto mb-2 mt-8 px-6 cursor-auto">
        <div className="w-full mx-auto">
          <h2 className="text-2xl font-extrabold text-center mb-2">
            Thematic Analysis
          </h2>
        </div>
      </section>

      {/*columns for results */}
      <section className="max-w-4xl mx-auto px-6 mt-2 cursor-auto">
        <div className="w-full">
          <ROThemeCombined />
        </div>
      </section>

      <section className="max-w-4xl mx-auto p-4 cursor-auto">
        <ROPrelimFigjam />
        <div className="flex justify-center mb-2 mt-4 py-4">
          <div className="w-2/3 h-1 bg-backgroundgrey rounded-full" />
        </div>
      </section>

      {/* ---- Beta-App Research (Goal #3) ---- */}
      <section className="w-full mx-auto cursor-auto">
        <div className="px-6 py-8">
          <h2 className="text-4xl font-extrabold text-gray-900 text-center">
            Beta-App Research
          </h2>
          <div className="flex justify-center py-4">
            <div className="w-2/3 h-1 bg-gradient-to-r from-blue-500 to-teal-400 rounded-full" />
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 cursor-auto">
        <div className="w-full mx-auto">
          <h1 className="text-3xl font-extrabold custom-shadow-white text-[#000000] text-center">
            Interviews
          </h1>
        </div>
        <div className="w-full mx-auto">
          <p className="text-lg text-center pt-1 text-gray-700 italic">
            What Works and What Does Not
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto mt-8 px-6 flex justify-center cursor-auto">
        <div className="flex items-center">
          <div>
            <h3 className="text-2xl font-extrabold text-backgroundred">
              Goal #3
            </h3>
            <hr className="w-16 border-backgroundgrey m-3 border-[2px]" />
            <div className="bg-gradient-to-r from-[#1b2683] to-[#0987c6] p-6 rounded-2xl shadow-lg w-full cursor-auto">
              <p className="text-lg font-semibold text-custom-shadow-sm text-white">
                {goalTexts[2]}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto mt-8 px-6 cursor-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center md:space-x-12 space-y-8 md:space-y-0">
          <div className="md:w-1/2 flex justify-center">
            <div className="bg-white p-6 rounded-2xl shadow-lg w-full mb-4 cursor-auto">
              <p className="text-lg text-center md:text-start font-semibold text-gray-900">
                Usability testing with end-users + stakeholder presentation
              </p>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="bg-white p-6 rounded-2xl shadow-lg w-full mb-4 cursor-auto">
              <p className="text-lg text-center md:text-end font-semibold text-gray-900">
                Focus: did new features solve prior pain points?
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Beta results summary cards */}
      <section className="max-w-4xl mx-auto mt-8 px-6 cursor-auto">
        <div className="w-full mx-auto">
          <h1 className="text-3xl font-extrabold custom-shadow-white text-[#000000] text-center">
            Results
          </h1>
        </div>
        <div className="w-full mx-auto">
          <p className="text-lg text-center pt-1 text-gray-700 italic">
            Solutions based on preliminary research findings
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 mt-2 cursor-auto">
        <div className="w-full">
          <ROBetaResults />
        </div>
      </section>

      <section className="max-w-4xl mx-auto mt-8 mb-12 px-6">
        <div className="w-full mx-auto">
          <h1 className="text-2xl font-bold custom-shadow-white text-[#000000] text-center">
            The new features added were seen as an{" "}
            <span className="text-blue-500">improvement, </span> being rated
            <span className="text-blue-500"> positively </span>
            and without causing major impacts on
            <span className="text-blue-500"> familiarity </span> (a key point
            made by the PI).
          </h1>
          <h1 className="text-2xl font-bold custom-shadow-white text-[#000000] text-center pt-4">
            Remaining development time should be spent optimizing back-end
            development to incorporate
            <span className="text-blue-500"> safety features </span>
            that prevent accidental data loss. Additional care should be placed
            on
            <span className="text-blue-500"> standardizing the UI </span>
            to create a consistent experience to further
            <span className="text-blue-500"> improve familiarity. </span>
          </h1>
        </div>
        <div className="flex justify-center mb-2 mt-4 py-4">
          <div className="w-2/3 h-1 bg-backgroundgrey rounded-full" />
        </div>
      </section>

      {/* ---- App screenshots ---- */}
      <section className="max-w-4xl mx-auto pt-4 mb-8 px-6 cursor-auto">
        <div className="w-full">
          <h2 className="text-4xl leading-snug font-extrabold text-center text-black">
            ResearchObs Launch
          </h2>
          <div className="flex justify-center mt-2 py-4">
            <div className="w-2/3 h-1 bg-gradient-to-r from-blue-500 to-teal-400 rounded-full" />
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 mt-6 cursor-auto">
        <div className="flex items-center justify-center mb-6">
          <h3 className="text-3xl text-center font-extrabold">
            ResearchObs App
          </h3>
        </div>

        <section className="max-w-4xl mx-auto mt-8 mb-12 px-6">
          <div className="w-full mx-auto">
            <h1 className="text-2xl font-bold custom-shadow-white text-[#000000] text-center">
              The app launch was a{" "}
              <span className="text-blue-500">success, </span> due to it{" "}
              <span className="text-blue-500">
                addressing the needs of end-users{" "}
              </span>
              while
              <span className="text-blue-500">
                {" "}
                maintaining the legacy structure{" "}
              </span>{" "}
              which stakeholders were familiar with.
            </h1>
          </div>
        </section>

        {/* Quotes */}
        <section className="max-w-4xl mx-auto pt-4 pb-8 px-6 cursor-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center md:space-x-12 space-y-8 md:space-y-0">
            <div className="md:w-1/2 flex justify-center">
              <div className="bg-white p-6 rounded-2xl shadow-lg w-full mb-4 cursor-auto">
                <p className="text-lg font-semibold italic text-gray-900">
                  "I made an error last week and kept thinking ‘where is the
                  Undo button!’ I’m excited to use the new app."
                </p>
                <p className="text-md text-right italic text-gray-900">
                  - Senior Researcher
                </p>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="bg-white p-6 rounded-2xl shadow-lg w-full mb-4 cursor-auto">
                <p className="text-lg font-semibold italic text-gray-900">
                  "We had to skip data collection for one group because only one
                  tablet had updated members. This will let us resume."
                </p>
                <p className="text-md text-right italic text-gray-900">
                  - Junior Researcher
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Screens (clickable) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <img
            src={homeImg}
            alt="Home"
            className="w-full rounded-lg shadow-md cursor-pointer"
            onClick={() => setSelectedImage(homeImg)}
          />
          <img
            src={dataImg}
            alt="Data"
            className="w-full rounded-lg shadow-md cursor-pointer"
            onClick={() => setSelectedImage(dataImg)}
          />
          <img
            src={storageImg}
            alt="Storage"
            className="w-full rounded-lg shadow-md cursor-pointer"
            onClick={() => setSelectedImage(storageImg)}
          />
        </div>
        <div className="flex justify-center mb-2 mt-4 py-4">
          <div className="w-2/3 h-1 bg-backgroundgrey rounded-full" />
        </div>
      </section>

      {/* ---- Impact ---- */}
      <section className="max-w-4xl mx-auto pt-4 pb-16 px-6 mt-8 cursor-auto">
        <div className="w-full">
          <h2 className="text-4xl leading-snug font-extrabold text-center text-black">
            Impact
          </h2>
          <div className="flex justify-center mt-2 py-4">
            <div className="w-2/3 h-1 bg-gradient-to-r from-blue-500 to-teal-400 rounded-full" />
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 pt-4 pb-16 cursor-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center md:space-x-12 space-y-8 md:space-y-0">
          <div className="flex flex-col items-start space-y-4 md:w-1/2">
            <h3 className="text-2xl font-extrabold text-backgroundred">
              Primary Considerations
            </h3>
            <hr className="w-16 border-backgroundgrey border-[2px]" />
            <div className="bg-white p-6 rounded-2xl shadow-lg w-full cursor-auto">
              <p className="text-lg font-semibold text-custom-shadow-sm text-gray-800">
                Custom one-off apps risk maintenance gaps; maximize in-app
                editing to reduce code changes and preserve continuity.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-end space-y-4 md:w-1/2">
            <h3 className="text-2xl font-extrabold text-backgroundred">
              Secondary Considerations
            </h3>
            <hr className="w-16 border-backgroundgrey border-[2px]" />
            <div className="bg-white p-6 rounded-2xl shadow-lg w-full cursor-auto">
              <p className="text-lg font-semibold text-custom-shadow-sm text-gray-800">
                Preliminary UX research mitigates future data loss by surfacing
                long-tail maintenance risks before launch.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 cursor-auto">
        <div className="flex flex-col space-y-8 pb-16">
          <div className="w-full mx-auto mb-8">
            <p className="text-4xl font-bold custom-shadow-white text-[#000000] text-center">
              Key concerns around{" "}
              <span className="text-[#f28e0b]">usability</span> and{" "}
              <span className="text-[#f28e0b]">long-term maintainability</span>{" "}
              were addressed through targeted user research. Insights from this
              work directly informed the development of{" "}
              <span className="text-[#f28e0b]">ResearchObs</span>, resulting in
              higher <span className="text-[#f28e0b]">user satisfaction</span>{" "}
              compared to the previous tool, WhatsOb. The research also
              identified and resolved{" "}
              <span className="text-[#f28e0b]">sustainability concerns</span>{" "}
              raised by key stakeholders, ensuring the new app could support{" "}
              <span className="text-[#f28e0b]">future updates</span> and{" "}
              <span className="text-[#f28e0b]">evolving research needs</span>{" "}
              with minimal friction.
            </p>
          </div>
          <div className="flex justify-center mb-2 mt-4 py-4">
            <div className="w-2/3 h-1 bg-backgroundgrey rounded-full" />
          </div>
        </div>
      </section>

      {/* ---- Appendix ---- */}
      <section className="max-w-4xl mx-auto pt-4 pb-4 px-6 cursor-auto">
        <div className="w-full">
          <h2 className="text-4xl leading-snug font-extrabold text-center text-black">
            Appendix
          </h2>
          <div className="flex justify-center mt-2 py-4">
            <div className="w-2/3 h-1 bg-gradient-to-r from-blue-500 to-teal-400 rounded-full" />
          </div>
        </div>
      </section>

      {/* ---- Flow / Timeline (sandboxed below intro stack) ---- */}
      <section className="relative z-0 w-full mx-auto p-4 cursor-auto">
        <ROFlow />
      </section>
      <section className="relative z-0 w-full mx-auto p-4 cursor-auto">
        <ROTimeline />
      </section>

      {/* ---- Lightbox Modal ---- */}
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
              className="w-full bg-black p-4 h-auto rounded-lg shadow-lg select-none"
              onContextMenu={(e) => e.preventDefault()}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default ResearchObsPage;

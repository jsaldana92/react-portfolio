// src/components/HyperlinkPage.jsx
import React, { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { gsap } from "gsap";
import condensImg from "../images/condenslogo.png";
import InteractiveSteps from "./interactiveSteps";

import PersonaTemplate from "./PersonaTemplate";
import persona1 from "../images/gradingstudy/persona1.png";
import persona2 from "../images/gradingstudy/persona2.png";
import {
  FaArrowUp,
  FaArrowDown,
  FaUser,
  FaGraduationCap,
  FaAppleAlt,
  FaBook,
  FaRobot,
} from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { CgGym } from "react-icons/cg";
import { SiGoogleclassroom } from "react-icons/si";
import { MdGroups2 } from "react-icons/md";
import { RiEmotionUnhappyLine, RiEmotionHappyLine } from "react-icons/ri";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export function GTAGradingPage() {
  // which goals have been “flipped”
  const [revealed, setRevealed] = useState([true, true, true]);
  // refs for each goal card
  const cardRefs = [useRef(null), useRef(null), useRef(null)];
  const goalTexts = [
    "What is the most common grading issue GTAs experience?",
    "How do GTAs navigate grading issues?",
    "How do different departments support GTAs with grading issues?",
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

  const themeTexts = [
    "Description of Teaching Training Course", // Theme 1
    "Common Grading Issues", // Theme 2
    "AI Issues", // Theme 3
    "Departmental Support", // Theme 4
    "GTA-to-GTA support", // Theme 5
    "Support Wanted", // Theme 6
    "Previous Experience Teaching", // Theme 7
  ];
  // one ref + one boolean for each theme
  const themeRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];
  const [themesRevealed, setThemesRevealed] = useState(
    Array(themeTexts.length).fill(true)
  );

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
    // animate all theme boxes into view on initial load
    themeRefs.forEach((ref, i) => {
      if (!ref.current) return;
      gsap.fromTo(
        ref.current,
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.4,
          delay: 0.05 * i, // small stagger
          ease: "back.out(1.7)",
        }
      );
    });
  }, []);

  // ───────────────────────────────────────────────────────────

  return (
    <div className="w-full">
      {/* ---- Intro + Research Approach (GTA Grading) ---- */}
      <section className="max-w-4xl mx-auto py-16 px-6 space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-extrabold text-gray-900">
            GTA Grading: Uncovering Grading-Related Pain Points
          </h1>
        </div>

        {/* Intro (centered box) */}
        <div className="relative flex justify-center">
          <div className="bg-white p-8 rounded-2xl shadow-lg max-w-3xl text-center cursor-auto">
            <p className="text-lg md:text-xl text-gray-800">
              To uncover the most common{" "}
              <span className="font-semibold">grading-related pain points</span>
              , I conducted semi-structured interviews with GTAs across multiple
              departments. Each participant walked through recent grading tasks,
              highlighting moments of confusion, overload, or lack of support.
            </p>
            <p className="text-lg md:text-xl text-gray-800 mt-4">
              I then thematically coded the interviews to identify shared
              patterns—including academic integrity concerns, unclear
              expectations, and inconsistent guidance. These insights informed
              GTA personas and a grading journey map that shaped recommendations
              for improving{" "}
              <span className="font-semibold">
                training, communication, and departmental support.
              </span>
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
              {/* Recruitment & Design */}
              <div className="rounded-xl p-4 bg-gray-50">
                <p className="font-semibold mb-1">Recruitment &amp; Design</p>
                <p className="text-sm">
                  Interviewed GTAs from{" "}
                  <span className="font-semibold">multiple departments</span>,
                  each teaching different courses and formats, to capture a
                  broad range of grading pain points and support structures.
                </p>
              </div>
              {/* Interviews & Thematic Analysis */}
              <div className="rounded-xl p-4 bg-gray-50">
                <p className="font-semibold mb-1">
                  Interviews &amp; Thematic Analysis
                </p>
                <p className="text-sm">
                  Conducted instructor interviews and then thematically coded
                  responses to identify recurring issues like AI violations,
                  cheating, rubric ambiguity, and uneven faculty guidance.
                </p>
              </div>
              {/* Synthesis & Department Impact */}
              <div className="rounded-xl p-4 bg-gray-50">
                <p className="font-semibold mb-1">
                  Synthesis &amp; Department Impact
                </p>
                <p className="text-sm">
                  Built GTA personas and a grading journey map to highlight
                  where pain points cluster. Presented{" "}
                  <span className="font-semibold">
                    primary and secondary recommendations
                  </span>{" "}
                  to departments to refine training and policy communication
                  around grading issues.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ---- Research Purpose (unchanged) ---- */}
        <div className="flex justify-center">
          <div className="w-full mx-auto">
            <p className="text-4xl font-extrabold custom-shadow-white text-[#000000] text-center">
              Research Purpose
            </p>
          </div>
        </div>

        {/* Goals Row with onClick animation (UNCHANGED) */}
        <div className="flex justify-center">
          <div className="flex space-x-2 md:space-x-12">
            {goalTexts.map((text, i) => (
              <div
                key={i}
                ref={cardRefs[i]}
                onClick={() => {
                  // toggle only this card
                  setRevealed((prev) => {
                    const copy = [...prev];
                    copy[i] = !copy[i];
                    return copy;
                  });
                  // animate only the clicked card
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
                className={`relative flex items-center justify-center  box-content font-semibold rounded-2xl shadow-lg p-6 h-18 w-18 md:h-12 md:w-42 text-center cursor-pointer overflow-hidden ${
                  revealed[i]
                    ? "bg-white text-sm custom-shadow-sm text-gray-800"
                    : "bg-blue-950/80 text-white"
                }`}
              >
                <span
                  className={`block just transition-opacity duration-300 ${
                    revealed[i] ? "opacity-0" : "opacity-100"
                  }`}
                >
                  Goal #{i + 1}
                </span>
                <span
                  className={`absolute font-semibold inset-0 flex items-center justify-center transition-opacity duration-300 ${
                    revealed[i] ? "opacity-100" : "opacity-0"
                  }`}
                >
                  {text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intro card and results title */}
      <section className="w-full mx-auto">
        <div className="px-6 py-8">
          <h2 className="text-4xl font-extrabold text-gray-900 text-center">
            Methodology Overview
          </h2>

          <div className="flex justify-center py-4">
            <div className="w-2/3 h-1 bg-gradient-to-r from-blue-500 to-teal-400 rounded-full" />
          </div>
        </div>
      </section>

      <section
        ref={flowContainer}
        className="relative w-full max-w-4xl mx-auto px-6 py-16 min-h-[400px]"
      >
        {/* A) SVG arrow behind everything */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          <defs>
            <marker
              id="arrowhead"
              markerWidth="8"
              markerHeight="6"
              refX="8"
              refY="3"
              orient="auto"
            >
              <path d="M0,0 L8,3 L0,6" fill="#3b82f6" />
            </marker>
          </defs>
          <path
            ref={arrowPathRef}
            d="" // will be set by useEffect
            stroke="#3b82f6"
            strokeWidth="4"
            fill="none"
            markerEnd="url(#arrowhead)"
          />
        </svg>

        {/* B) Your 5 boxes, with a higher z-index so they sit on top of the arrow */}
        <div className="relative z-10 w-full grid grid-cols-3 grid-rows-3 gap-6">
          <div
            ref={flowBoxes[0]}
            className="col-start-1 row-start-1 bg-white p-1 md:p-6 w-full rounded shadow min-w-0 break-words text-sm md:text-lg font-semibold"
          >
            <p className="text-black">
              {" "}
              <span className="text-blue-500">Preliminary Contact</span> with
              Select GTAs to Develop Interview Script
            </p>
          </div>

          <div
            ref={flowBoxes[1]}
            className="col-start-3 row-start-1 bg-white p-1 md:p-6 w-full rounded shadow min-w-0 break-words text-end text-sm md:text-lg font-semibold"
          >
            <p>
              <span className="text-blue-500">Contact GTAs</span> from Different{" "}
              <span className="text-blue-500">Departments</span> to Interview
              Over Two Weeks
            </p>
          </div>

          <div
            ref={flowBoxes[2]}
            className="col-start-2 row-start-2 bg-white p-1 md:p-6 w-full rounded shadow min-w-0 break-words text-center text-sm md:text-lg font-semibold"
          >
            <p>
              <span className="text-blue-500">Thematic Analysis</span> of GTA
              Interviews | Develop{" "}
              <span className="text-blue-500">Personas</span>
            </p>
          </div>

          <div
            ref={flowBoxes[3]}
            className="col-start-1 row-start-3 bg-white p-1 md:p-6 w-full rounded shadow min-w-0 break-words text-sm md:text-lg font-semibold"
          >
            <p>
              Compile <span className="text-blue-500">Journey Map</span>: What
              Affects GTAs' Perception of Grading?
            </p>
          </div>

          <div
            ref={flowBoxes[4]}
            className="col-start-3 row-start-3 bg-white p-1 md:p-6 w-full rounded shadow min-w-0 break-words font-semibold text-end text-sm md:text-lg"
          >
            <p>
              Develop <span className="text-blue-500">Primary</span> and{" "}
              <span className="text-blue-500">Secondary</span> Considerations |{" "}
              <span className="text-blue-500">Impact</span>
            </p>
          </div>
        </div>
        {/* line page break */}
        <div className="flex justify-center mb-4 mt-6 py-4">
          <div className="w-full h-1 bg-backgroundgrey rounded-full" />
        </div>
      </section>

      {/* Intro card and results title */}
      <div className="w-full mx-auto px-6 py-8">
        <h2 className="text-4xl font-extrabold text-gray-900 text-center">
          Mock Results
        </h2>

        <div className="flex justify-center py-4">
          <div className="w-2/3 h-1 bg-gradient-to-r from-blue-500 to-teal-400 rounded-full" />
        </div>
      </div>

      {/* Disclaimer section */}
      <div className="w-full mx-auto mb-12 px-6 ">
        <h2 className="text-xl font-semibold text-gray-900 text-center">
          Due to the sensitive nature of this data, the actual results of this
          study cannot be shared online. Instead, this page uses a stand-in mock
          data set that was analyzed similarly to the real project to highlight
          the skills needed to complete the study.
        </h2>

        <div className="flex justify-center py-4">
          <div className="w-2/3 h-1 bg-backgroundgrey rounded-full" />
        </div>
      </div>

      {/* ---- Methods---- */}
      {/*----Interviews----*/}
      <section className="max-w-4xl mx-auto px-6">
        <div className="flex flex-col space-y-8">
          {/* Insight card on top */}
          <div className="w-full mx-auto">
            <p className="text-3xl font-extrabold custom-shadow-white text-[#000000] text-center">
              Interviews
            </p>
          </div>
        </div>
      </section>
      {/*----Interview Methods----*/}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row items-start md:items-center md:space-x-12 space-y-8 md:space-y-0">
          {/* Left column*/}
          <div className="md:w-1/2 flex justify-center">
            <div className="bg-white p-6 rounded-2xl shadow-lg w-full mb-4">
              <p className="text-lg text-center md:text-start font-semibold text-gray-900 ">
                Interviews with 10 GTAs from 3 departments
              </p>
            </div>
          </div>

          {/* Right column */}
          <div className="md:w-1/2 flex justify-center">
            <div className="bg-white p-6 rounded-2xl shadow-lg w-full mb-4">
              <p className="text-lg text-center md:text-end font-semibold text-gray-900 ">
                Focus: Personal experience with grading issues ranging from
                training provided by department to day-to-day pain points
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* ---- Interview Themes (4 + 3 centered) ---- */}
      <section className="max-w-4xl mx-auto px-2">
        <h2 className="text-3xl font-extrabold text-center mb-8">
          Themes from
        </h2>

        {/* Condens logo, centered, tight spacing */}
        <img
          src={condensImg}
          alt="Condens Logo"
          className="mx-auto mb-12 w-80 h-auto"
        />

        {/* parent flex so both rows are centered */}
        <div className="flex flex-col items-center space-y-6 font-semibold mb-6">
          {/* Top row: 4 boxes */}
          <div className="grid grid-cols-4 gap-2 md:gap-6">
            {themeTexts.slice(0, 4).map((txt, i) => (
              <div
                key={i}
                ref={themeRefs[i]}
                onClick={() => {
                  setThemesRevealed((prev) => {
                    const copy = [...prev];
                    copy[i] = !copy[i];
                    return copy;
                  });
                  const el = themeRefs[i].current;
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
                className={`
                  w-24 h-16 md:w-44 md:h-28
                  flex items-center justify-center
                  rounded-2xl shadow-lg p-4
                  cursor-pointer overflow-hidden
                  transition-transform text-center text-xs md:text-lg 
                  ${
                    themesRevealed[i]
                      ? "bg-white text-gray-800"
                      : "bg-blue-950/80 text-white hover:scale-105"
                  }
                `}
              >
                <span
                  className={`transition-opacity  duration-300 ${
                    themesRevealed[i] ? "opacity-0" : "opacity-100"
                  }`}
                >
                  Theme #{i + 1}
                </span>
                <span
                  className={`absolute inset-0 flex items-center justify-center px-3  text-center transition-opacity duration-300 ${
                    themesRevealed[i] ? "opacity-100" : "opacity-0"
                  }`}
                >
                  {txt}
                </span>
              </div>
            ))}
          </div>

          {/* Bottom row: 3 boxes */}
          <div className="grid grid-cols-3 gap-6">
            {themeTexts.slice(4).map((txt, idx) => {
              const i = idx + 4;
              return (
                <div
                  key={i}
                  ref={themeRefs[i]}
                  onClick={() => {
                    setThemesRevealed((prev) => {
                      const copy = [...prev];
                      copy[i] = !copy[i];
                      return copy;
                    });
                    const el = themeRefs[i].current;
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
                  className={`
                    w-24 h-16 md:w-44 md:h-28
                    flex items-center justify-center
                    rounded-2xl shadow-lg p-4
                    cursor-pointer overflow-hidden
                    transition-transform text-center text-xs md:text-lg 
                    ${
                      themesRevealed[i]
                        ? "bg-white text-gray-800"
                        : "bg-blue-950/80 text-white hover:scale-105"
                    }
                  `}
                >
                  <span
                    className={`transition-opacity duration-300 ${
                      themesRevealed[i] ? "opacity-0" : "opacity-100"
                    }`}
                  >
                    Theme #{i + 1}
                  </span>
                  <span
                    className={`absolute inset-0 flex items-center justify-center px-3 transition-opacity duration-300 ${
                      themesRevealed[i] ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    {txt}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex justify-center mb-2 py-4">
          <div className="w-2/3 h-1 bg-backgroundgrey rounded-full" />
        </div>
      </section>

      {/* ---- Outcomes for Goal #1 ---- */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row items-start md:items-end md:space-x-12 space-y-8 md:space-y-0">
          {/* Left column: title + result card */}
          <div className="flex flex-col items-start space-y-4 md:w-1/2">
            <h3 className="text-2xl font-extrabold text-backgroundred">
              Goal #1
            </h3>
            <hr className="w-16 border-backgroundgrey border-[2px]" />
            <div className="bg-gradient-to-r from-[#1b2683] to-[#0987c6] p-6 rounded-2xl shadow-lg w-full">
              <p className="text-lg font-semibold text-custom-shadow-sm text-white custom-shadow-white">
                {goalTexts[0]}
              </p>
            </div>
          </div>

          {/* Right column: quote card */}
          <div className="md:w-1/2 flex justify-center">
            <div className="bg-white p-6 rounded-2xl shadow-lg w-full">
              <p className="text-lg font-semibold italic text-gray-900 ">
                "I've taught 3 different course topics and there are always
                issue with a student trying to cheat here and there, but the
                usage of AI is getting to be a bit much."
              </p>
              <p className="text-md text-right italic text-gray-900">
                - GTA with formal training and monthly supervision
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Goal 1 results*/}
      <section className="max-w-4xl mx-auto px-6 py-8">
        <h2 className="text-3xl font-extrabold text-center mb-6">
          Interview Findings → Prioritized Opportunities
        </h2>
        <p className="text-center text-gray-700 mb-6">
          From interviews with <span className="font-semibold">10 GTAs</span>, I
          translated raw findings into opportunities scored by{" "}
          <span className="font-semibold">impact</span> and{" "}
          <span className="font-semibold">level of effort</span>.
        </p>

        <div className="space-y-4">
          {/* Row 1 */}
          <div className="bg-white p-5 rounded-2xl shadow-lg flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold">
                Standardize AI Policy & Communication
              </h3>
              <p className="text-gray-800 text-sm md:text-base mt-1">
                All <span className="font-semibold">10/10 GTAs</span> cited AI
                policy violations as a frequent grading pain point. Clear,
                shared language and examples would reduce confusion for both
                GTAs and students.
              </p>
            </div>
            <div className="flex flex-col items-start md:items-end gap-1">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800">
                High Impact
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-800">
                Low Effort
              </span>
            </div>
          </div>

          {/* Row 2 */}
          <div className="bg-white p-5 rounded-2xl shadow-lg flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold">
                Create an Academic Integrity Support Path
              </h3>
              <p className="text-gray-800 text-sm md:text-base mt-1">
                <span className="font-semibold">4/10 GTAs</span> described
                cheating cases (phones, unauthorized materials) as stressful and
                time-consuming. A clear escalation and support path would reduce
                emotional and administrative load.
              </p>
            </div>
            <div className="flex flex-col items-start md:items-end gap-1">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-800">
                High Impact
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-amber-50 text-amber-800">
                High Effort
              </span>
            </div>
          </div>

          {/* Row 3 */}
          <div className="bg-white p-5 rounded-2xl shadow-lg flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold">
                Provide a GTA Grading Starter Kit
              </h3>
              <p className="text-gray-800 text-sm md:text-base mt-1">
                Many GTAs reported uncertainty when grading for the first time.
                A short starter kit (rubric examples, sample feedback, policy
                summary) would smooth the onboarding process.
              </p>
            </div>
            <div className="flex flex-col items-start md:items-end gap-1">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-sky-100 text-sky-800">
                Moderate Impact
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-800">
                Low Effort
              </span>
            </div>
          </div>

          {/* Row 4 */}
          <div className="bg-white p-5 rounded-2xl shadow-lg flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold">
                Clarify Scantron Grading Workflow
              </h3>
              <p className="text-gray-800 text-sm md:text-base mt-1">
                Only <span className="font-semibold">2/10 GTAs</span> reported
                scantron-specific grading issues. A brief how-to or FAQ could
                help, but it is a lower-priority opportunity compared to AI and
                cheating.
              </p>
            </div>
            <div className="flex flex-col items-start md:items-end gap-1">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-800">
                Lower Impact
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-800">
                Low Effort
              </span>
            </div>
          </div>
        </div>

        <div className="flex justify-center py-4 pt-8">
          <div className="w-2/3 h-1 bg-backgroundgrey rounded-full" />
        </div>
      </section>

      {/* ---- Outcomes for Goal #2 ---- */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row items-start md:items-end md:space-x-12 space-y-8 md:space-y-0">
          {/* Left column: title + result card */}
          <div className="flex flex-col items-start space-y-4 md:w-1/2">
            <h3 className="text-2xl font-extrabold text-backgroundred">
              Goal #2
            </h3>
            <hr className="w-16 border-backgroundgrey border-[2px]" />
            <div className="bg-gradient-to-r from-[#1b2683] to-[#0987c6] p-6 rounded-2xl shadow-lg w-full">
              <p className="text-lg font-semibold text-custom-shadow-sm text-white custom-shadow-white">
                {goalTexts[1]}
              </p>
            </div>
          </div>

          {/* Right column: quote card */}
          <div className="md:w-1/2 flex justify-center">
            <div className="bg-white p-6 rounded-2xl shadow-lg w-full">
              <p className="text-lg font-semibold italic text-gray-900 ">
                "A faculty member is always there when you need them...
                eventually... but some semesters it feels like I've relied on
                other GTAs to make sure what I am doing is correct before even
                reaching out."
              </p>
              <p className="text-md text-right italic text-gray-900">
                - GTA with formal training and heavy supervision
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Goal 2 results*/}
      <section className="max-w-4xl mx-auto px-6 py-8">
        <h2 className="text-3xl font-extrabold text-center mb-6">
          Support & Escalation Opportunities
        </h2>
        <p className="text-center text-gray-700 mb-6">
          From interviews with <span className="font-semibold">10 GTAs</span>, I
          translated how they seek support for grading issues into opportunities
          scored by <span className="font-semibold">impact</span> and{" "}
          <span className="font-semibold">level of effort</span>.
        </p>

        <div className="space-y-4">
          {/* Row 1 */}
          <div className="bg-white p-5 rounded-2xl shadow-lg flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold">
                Formal Escalation Path for Cheating Cases
              </h3>
              <p className="text-gray-800 text-sm md:text-base mt-1">
                All <span className="font-semibold">10/10 GTAs</span> reported
                reaching out to a faculty advisor when cheating or serious
                academic integrity issues were involved. Making this escalation
                path explicit and visible would reduce uncertainty and emotional
                load during high-stakes cases.
              </p>
            </div>
            <div className="flex flex-col items-start md:items-end gap-1">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800">
                High Impact
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-amber-50 text-amber-800">
                Medium Effort
              </span>
            </div>
          </div>

          {/* Row 2 */}
          <div className="bg-white p-5 rounded-2xl shadow-lg flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold">
                Peer Support Channels for Routine Issues
              </h3>
              <p className="text-gray-800 text-sm md:text-base mt-1">
                <span className="font-semibold">5/10 GTAs</span> reported
                leaning on other GTAs for “everyday” questions (e.g., setting up
                online exams). A lightweight peer channel (Slack, Teams, or
                office-hours group) would make this support more accessible and
                less ad hoc.
              </p>
            </div>
            <div className="flex flex-col items-start md:items-end gap-1">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-sky-100 text-sky-800">
                Moderate Impact
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-800">
                Low Effort
              </span>
            </div>
          </div>

          {/* Row 3 */}
          <div className="bg-white p-5 rounded-2xl shadow-lg flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold">
                Clarify Faculty vs. GTA Responsibility Boundaries
              </h3>
              <p className="text-gray-800 text-sm md:text-base mt-1">
                <span className="font-semibold">3/10 GTAs</span> said they
                report nearly everything to their faculty advisor, who
                effectively handles all grading issues. Clearer guidelines
                around what GTAs should own vs. escalate could empower GTAs
                without overloading faculty.
              </p>
            </div>
            <div className="flex flex-col items-start md:items-end gap-1">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-800">
                High Impact
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-amber-50 text-amber-800">
                Medium Effort
              </span>
            </div>
          </div>
        </div>

        <div className="flex justify-center py-4 pt-8">
          <div className="w-2/3 h-1 bg-backgroundgrey rounded-full" />
        </div>
      </section>

      {/* ---- Outcomes for Goal #3 ---- */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row items-start md:items-end md:space-x-12 space-y-8 md:space-y-0">
          {/* Left column: title + result card */}
          <div className="flex flex-col items-start space-y-4 md:w-1/2">
            <h3 className="text-2xl font-extrabold text-backgroundred">
              Goal #3
            </h3>
            <hr className="w-16 border-backgroundgrey border-[2px]" />
            <div className="bg-gradient-to-r from-[#1b2683] to-[#0987c6] p-6 rounded-2xl shadow-lg w-full">
              <p className="text-lg font-semibold text-custom-shadow-sm text-white custom-shadow-white">
                {goalTexts[2]}
              </p>
            </div>
          </div>

          {/* Right column: quote card */}
          <div className="md:w-1/2 flex justify-center">
            <div className="bg-white p-6 rounded-2xl shadow-lg w-full">
              <p className="text-lg font-semibold italic text-gray-900 ">
                "I know that our department gives a lot of structured support,
                but talking to other graduate students, it seems like that is
                not every department... it's like the wild west when it comes to
                having proper help and training."
              </p>
              <p className="text-md text-right italic text-gray-900">
                - GTA with formal training and monthly supervision
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Goal 3 results*/}
      <section className="max-w-4xl mx-auto px-6 py-8">
        <h2 className="text-3xl font-extrabold text-center mb-6">
          Training & Onboarding Opportunities
        </h2>

        <p className="text-center text-gray-700 mb-6">
          GTA interviews revealed large variation in{" "}
          <span className="font-semibold">pre-teaching preparation</span> and
          <span className="font-semibold">ongoing instructional support</span>.
          Below, these findings are translated into opportunities organized by{" "}
          <span className="font-semibold">impact</span> and{" "}
          <span className="font-semibold">level of effort</span>.
        </p>

        <div className="space-y-4">
          {/* Row 1 */}
          <div className="bg-white p-5 rounded-2xl shadow-lg flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold">
                Standardize Pre-Teaching Foundations
              </h3>
              <p className="text-gray-800 text-sm md:text-base mt-1">
                <span className="font-semibold">4/10 GTAs</span> received a
                formal class before teaching, paired with{" "}
                <span className="font-semibold">
                  monthly virtual town-halls
                </span>{" "}
                for check-ins and questions. This model provides structure,
                early community-building, and predictable support—yet is not
                used department-wide. Offering a unified baseline course would
                equalize the starting point for new instructors.
              </p>
            </div>
            <div className="flex flex-col items-start md:items-end gap-1">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800">
                High Impact
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-amber-50 text-amber-800">
                Medium Effort
              </span>
            </div>
          </div>

          {/* Row 2 */}
          <div className="bg-white p-5 rounded-2xl shadow-lg flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold">
                Optimize Weekly Teaching Meetings
              </h3>
              <p className="text-gray-800 text-sm md:text-base mt-1">
                <span className="font-semibold">3/10 GTAs</span> experienced{" "}
                <span className="font-semibold">
                  intense weekly 2-hour mandatory training meetings
                </span>
                . GTAs reported that these were only{" "}
                <span className="font-semibold text-orange-500">
                  somewhat relevant
                </span>{" "}
                to actual teaching needs. Reworking these into shorter, focused,
                actionable sessions could dramatically increase usefulness while
                reducing burnout.
              </p>
            </div>
            <div className="flex flex-col items-start md:items-end gap-1">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-800">
                Moderate Impact
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-800">
                High Effort
              </span>
            </div>
          </div>

          {/* Row 3 */}
          <div className="bg-white p-5 rounded-2xl shadow-lg flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold">
                Guarantee Minimum Support for All GTAs
              </h3>
              <p className="text-gray-800 text-sm md:text-base mt-1">
                <span className="font-semibold">3/10 GTAs</span> reported
                receiving{" "}
                <span className="font-semibold text-orange-500">
                  no formal training
                </span>{" "}
                at all and having support that varied dramatically depending on
                their assigned faculty. This inconsistency results in{" "}
                <span className="font-semibold text-orange-500">
                  heavy or no supervision
                </span>
                , which affects grading quality and instructor confidence.
                Establishing a minimum support standard would eliminate these
                disparities.
              </p>
            </div>
            <div className="flex flex-col items-start md:items-end gap-1">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800">
                High Impact
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-800">
                Low Effort
              </span>
            </div>
          </div>
        </div>

        <div className="flex justify-center py-4 pt-8">
          <div className="w-2/3 h-1 bg-backgroundgrey rounded-full" />
        </div>
      </section>

      {/* ---- Pesona Section ---- */}
      <section className="max-w-4xl mx-auto pt-12 pb-8 px-6">
        <section className="max-w-4xl mx-auto mb-14 px-2">
          <h2 className="text-3xl font-extrabold text-center">Personas</h2>
        </section>
        <div
          className="flex flex-col md:flex-row 
                    items-center justify-center 
                    space-y-4 md:space-y-0 md:space-x-10"
        >
          <div className="w-90 md:w-140 overflow-hidden">
            <PersonaTemplate
              className="w-full h-auto text-sm"
              imageSrc={persona1}
              name="Jenny Acworth"
              age={29}
              quote='"Although the department certainly helps and is involved, we are the primary person handling how grading occurs."'
              LTIcon={FaUser}
              leftTopDem="Female"
              LBIcon={FaGraduationCap}
              leftBottomDem="PhD Track"
              RTIcon={FaBook}
              rightTopDem="5th Year Student"
              RBIcon={FaAppleAlt}
              rightBottomDem="2 years GTA"
              TLIcon={CgGym}
              TLBehavior="Standardized departmental training provided a baseline expectation for teaching and classroom resources"
              TRIcon={SlCalender}
              TRBehavior="Standardized semi-frequent check-ins with a faculty teaching mentor has resulted in a positive perception of support and mentoring"
              MLIcon={SiGoogleclassroom}
              MLBehavior="Primarily teaching online asynchronous classes"
              MRIcon={FaRobot}
              MRBehavior="AI policy violations is the most common grading issue followed by general cheating"
              BLIcon={MdGroups2}
              BLBehavior="Relies on faculty mentor's open-door policy and check-ins for support more than on other GTAs"
              BRIcon={RiEmotionHappyLine}
              BRBehavior="Enjoys teaching and is happy with the departmental support received and made available"
              suggestions={
                "Well structured training and effective departmental support require only minimal clarification of AI policy enforcement to improve the grading experience."
              }
            />
          </div>
          <div className="w-90 md:w-140 overflow-hidden">
            <PersonaTemplate
              className="w-full h-auto text-sm"
              imageSrc={persona2}
              name="Dan Kennesaw"
              age={29}
              quote='"I just go along with what the department tells me to do since we are not encouraged to resolve issues ourselves"'
              LTIcon={FaUser}
              leftTopDem="Male"
              LBIcon={FaGraduationCap}
              leftBottomDem="Master Track"
              RTIcon={FaBook}
              rightTopDem="2nd Year Student"
              RBIcon={FaAppleAlt}
              rightBottomDem="1 year GTA"
              TLIcon={CgGym}
              TLBehavior="Deparment does not standardize training resulting in none, some, or too much training on teaching a classes"
              TRIcon={SlCalender}
              TRBehavior="Faculty mentor check-ins are not standardized resulting swings between being micro-managed and given no guidance"
              MLIcon={SiGoogleclassroom}
              MLBehavior="Primarily teaches in person classes entry or mid-level classes"
              MRIcon={FaRobot}
              MRBehavior="AI policy violations are the most common grading issue but deal with a significant amount of general cheating"
              BLIcon={MdGroups2}
              BLBehavior="Often relies on other GTAs for support due to inconsistent training and mentoring"
              BRIcon={RiEmotionUnhappyLine}
              BRBehavior="Enjoys teaching but the department does not meet his expectations for training or support"
              suggestions={
                "Inconsistent training and support result in inconsistent grading experience. Developing guidelines for departments to follow would help improve instructors' experience."
              }
            />
          </div>
        </div>
        <div className="flex justify-center py-4 pt-8">
          <div className="w-2/3 h-1 bg-backgroundgrey rounded-full" />
        </div>
      </section>

      {/* ---- Journey Map ---- */}
      <section className="max-w-4xl mx-auto pt-8 pb-16 px-6">
        <section className="max-w-4xl mx-auto mb-1 px-2">
          <h2 className="text-3xl font-extrabold text-center">Journey Map</h2>
        </section>
        <section className="mb-8 max-w-4xl mx-auto px-2">
          <p className="text-lg  text-gray-700 italic text-center">
            Departmental training and support, alongside experience, impact how
            GTAs perceive grading issues
          </p>
        </section>
        {/* ---- Step #1 ---- */}
        {/*----Outcomes Step #1----*/}
        <section>
          <InteractiveSteps />
        </section>
        {/* line page break */}
        <div className="flex justify-center py-4 pt-8">
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
                Formal training, alongside brief regular check-ins, provide the
                highest valued type of support. This allows GTAs the resources
                and the experience to improve as professors and rely less of
                direct departmental support for minor issues.
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
                Experience is ultimately seen as the most relevant skill to
                mitigate grading issues, however, real-world experience is seen
                as more favorable than theoretical experience making training
                classrooms an unappealing option for GTAs once they have started
                teaching.
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
              My research helped show how GTAs{" "}
              <span className="text-blue-200">perceive </span> departmental
              training, support, and mentoring. It highlighted a need for{" "}
              <span className="text-blue-200">
                standardized training classes{" "}
              </span>{" "}
              for new GTAs which center on the{" "}
              <span className="text-blue-200">
                practical applications behind teaching
              </span>{" "}
              and not pedagogical theory.{" "}
              <span className="text-blue-200">Short</span> (~30 minutes) and{" "}
              <span className="text-blue-200">semi-regular check-ins</span>{" "}
              (once every two months) provide enough support to more experienced
              GTAs without taking away their ability to gain more personal
              experience. Together, these solutions were reported to departments
              as methods to <span className="text-blue-200"> help resolve</span>{" "}
              current grading issues and have been successfully employed across
              different classes.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default GTAGradingPage;

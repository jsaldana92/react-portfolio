// src/components/DataPullerPage.jsx
import React, { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import ROPreliminaryInterview from "./ROPrelimInterview";
import ROPrelimFigjam from "./ROPrelimFigjam";
import homeImg from "../images/researchobs/homescreen.png";
import storageImg from "../images/researchobs/storagepage.png";
import dataImg from "../images/researchobs/datapage.png";
import ROMarket from "./ROMarket";
import ROTimeline from "./ROTimeline";
import ROFlow from "./ROFlow";
import ROBetaResults from "./ROBetaResults";
gsap.registerPlugin(ScrollTrigger);

export function ResearchObsPage() {
  // lightbox state
  const [selectedImage, setSelectedImage] = useState(null);

  // which goals have been “flipped”
  const [revealed, setRevealed] = useState([false, false, false]);
  // refs for each goal card
  const cardRefs = [useRef(null), useRef(null), useRef(null)];
  const goalTexts = [
    "Determine Best Future Proof App Language",
    "Determine Current Issues with WhatsOb",
    "Gauge Effectiveness of Beta-App Solutions",
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
    "In-Observation Editing", // Theme 1
    "Cross-tablet Profiles", // Theme 2
    "Continuity with Legacy Data Structure", // Theme 3
    "Customizable Groups", // Theme 4
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
    Array(themeTexts.length).fill(false)
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
      {/* ---- Intro squares ---- */}
      <section className="max-w-4xl mx-auto py-16 px-6 space-y-16">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-extrabold">
            <span className="bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">
              Conducting Quantitative and Qualitative Research
            </span>{" "}
            to Improve{" "}
            <span className="bg-gradient-to-r from-[#e3a730] to-[#b55f5f] bg-clip-text text-transparent">
              Behavioral Data Collection and Management{" "}
            </span>
          </h1>
          <p className="text-xl text-gray-700 italic">
            The CEBUS lab's behavioral data collection app (WhatsOb) was no
            longer maintained or supported, therefore, they needed an updated
            app that would improve on its current iteration
          </p>
        </div>

        {/* Cards */}
        <div className="space-y-12">
          {/* Card 1: Left-aligned */}
          <div className="relative flex justify-start">
            <div className="absolute -top-8 -left-8 w-32 h-32 rounded-full -z-10" />
            <div className="bg-white p-8 rounded-2xl shadow-lg max-w-xl">
              <p className="text-lg md:text-xl text-gray-800">
                Many psychology labs use{" "}
                <strong className="text-blue-500">mobile</strong> or{" "}
                <strong className="text-blue-500">browser apps </strong> to
                collect behavioral data as it increases the{" "}
                <strong className="text-blue-500">reliability</strong> and{" "}
                <strong className="text-blue-500">consistency </strong> of their
                results
              </p>
            </div>
          </div>

          {/* Card 2: Right-aligned */}
          <div className="relative flex justify-end">
            <div className="absolute -top-8 -left-8 w-32 h-32  rounded-full -z-10" />
            <div className="bg-white text-right p-8 rounded-2xl shadow-lg max-w-xl">
              <p className="text-lg md:text-xl text-gray-800">
                <strong className="text-blue-500">Support </strong> and{" "}
                <strong className="text-blue-500">customizability</strong> for
                these apps is variable and can restrict labs to existing{" "}
                <strong className="text-blue-500">designs/ecosystems</strong>,
                therefore, some labs rely on individual graduate students to
                provide{" "}
                <strong className="text-blue-500">custom solutions</strong>
              </p>
            </div>
          </div>

          {/* Card 3: Left-aligned */}
          <div className="relative flex justify-start">
            <div className="absolute -top-8 -left-8 w-32 h-32  rounded-full -z-10" />
            <div className="bg-white p-8 rounded-2xl shadow-lg max-w-xl">
              <p className="text-lg md:text-xl text-gray-800">
                <strong className="text-blue-500">Custom solutions </strong> can
                become <strong className="text-blue-500">unsupported</strong>{" "}
                and{" "}
                <strong className="text-blue-500">
                  difficult to maintain/edit
                </strong>{" "}
                once the developer no longer works for the lab causing issues
                with <strong className="text-blue-500">data collection</strong>
              </p>
            </div>
          </div>

          {/* Card 4: center-aligned */}
          <div className="relative flex justify-center">
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-gradient-to-br from-red-600 to-red-300 rounded-full -z-10" />
            <div className="bg-white p-8 rounded-2xl shadow-lg max-w-xl text-center">
              <p className="text-lg md:text-xl font-semibold text-gray-800">
                {" "}
                I conducted
                <strong className="text-blue-500">
                  {" "}
                  exploratory and qualitative research{" "}
                </strong>{" "}
                to first determine end-user/data management issues related to
                the current app and to best lead the{" "}
                <strong className="text-blue-500">
                  front and back-end development
                </strong>{" "}
                of a new behavioral collection app. I also conducted{" "}
                <strong className="text-blue-500">
                  quantitative and qualitative research
                </strong>{" "}
                with the beta-app to verify that all initial concerns were
                addressed
              </p>
            </div>
          </div>

          {/* Card 4: Centered briefing */}
          <div className="flex justify-center">
            <div className="w-full mx-auto">
              <p className="text-4xl font-extrabold custom-shadow-white text-[#000000] text-center">
                Research Purpose
              </p>
            </div>
          </div>

          {/* Goals Row with onClick animation */}
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
        </div>
      </section>

      {/* Intro card and results title */}
      <div className="w-full mx-auto px-6 py-8">
        <h2 className="text-4xl font-extrabold text-gray-900 text-center">
          Market Solution Research
        </h2>

        <div className="flex justify-center py-4">
          <div className="w-2/3 h-1 bg-gradient-to-r from-blue-500 to-teal-400 rounded-full" />
        </div>
      </div>

      {/*----market----*/}
      <section className="max-w-4xl mx-auto px-6">
        <div className="flex flex-col">
          {/* Insight card on top */}
          <div className="w-full mx-auto">
            <h1 className="text-3xl font-extrabold custom-shadow-white text-[#000000] text-center">
              Market Analysis
            </h1>
          </div>
          <div className="w-full mx-auto">
            <p className="text-lg text-center pt-1 text-gray-700 italic">
              Determining Possible Solutions to Prevent Future Maintenance
              Issues
            </p>
          </div>
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
            <div className="p-6 bg-gradient-to-r from-[#1b2683] to-[#0987c6] rounded-2xl shadow-lg w-full">
              <p className="text-lg font-semibold text-custom-shadow-sm text-white">
                {goalTexts[0]}
              </p>
            </div>
          </div>

          {/* Right column: quote card */}
          <div className="md:w-1/2 flex justify-center">
            <div className="bg-white p-6 rounded-2xl shadow-lg w-full">
              <p className="text-lg font-semibold text-gray-900 ">
                Compared pros and cons of different coding languages and future
                cross-platform needs
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---- language research ---- */}
      <section>
        <ROMarket />
      </section>
      <div className="flex justify-center mb-2 mt-4 py-4">
        <div className="w-1/2 h-1 bg-backgroundgrey rounded-full" />
      </div>

      {/* preliminary title */}
      <div className="w-full mx-auto px-6 mt-12 py-8">
        <h2 className="text-4xl font-extrabold text-gray-900 text-center">
          Preliminary Research
        </h2>

        <div className="flex justify-center py-4">
          <div className="w-2/3 h-1 bg-gradient-to-r from-blue-500 to-teal-400 rounded-full" />
        </div>
      </div>
      {/*----end user interviews----*/}
      <section className="max-w-4xl mx-auto px-6">
        <div className="flex flex-col">
          {/* Insight card on top */}
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
            <div className=" bg-gradient-to-r from-[#1b2683] to-[#0987c6] p-6 rounded-2xl shadow-lg w-full">
              <p className="text-lg font-semibold text-custom-shadow-sm text-white">
                {goalTexts[1]}
              </p>
            </div>
          </div>

          {/* Right column: quote card */}
          <div className="md:w-1/2 flex justify-center">
            <div className="bg-white p-6 rounded-2xl shadow-lg w-full">
              <p className="text-lg font-semibold text-gray-900 ">
                10-minute interviews with 4 end-users (data collectors), data
                manager, and primary investigator (lead researcher) focused on
                current errors, bugs, and "needed" versus "would like" changes
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Insight card on top */}
      <section className="max-w-4xl mx-auto mt-12 mb-8 px-6">
        <div className="w-full mx-auto">
          <h1 className="text-3xl font-extrabold custom-shadow-white text-[#000000] text-center">
            Results
          </h1>
        </div>
        <div className="w-full mx-auto">
          <p className="text-lg text-center pt-1 text-gray-700 italic"></p>
        </div>
      </section>

      {/* ---- Interview Themes (4 + 3 centered) ---- */}
      <section className="max-w-4xl mx-auto px-2">
        <h2 className="text-2xl font-extrabold text-center mb-8">
          Thematic Analysis
        </h2>

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
        </div>
      </section>

      {/*columns for results */}
      <section className="max-w-4xl mx-auto px-6 mt-2">
        <div className="">
          {/* Component that shows improvement text with button */}
          <div className="w-full">
            <ROPreliminaryInterview />
          </div>
        </div>
      </section>
      <section className="max-w-4xl mx-auto mt-4 mb-12 px-6">
        <div className="w-full mx-auto">
          <h1 className="text-2xl font-bold custom-shadow-white text-[#000000] text-center">
            <span className="text-blue-500">ResearchObs</span> should provide
            new quality of life features for end-users
            <span className="text-blue-500">
              {" "}
              (undo button and quick group switching){" "}
            </span>
            and management
            <span className="text-blue-500">
              {" "}
              (in-app editing of groups, group members,and behaviors){" "}
            </span>{" "}
            in the
            <span className="text-blue-500"> front-end. </span>
            The
            <span className="text-blue-500"> back-end </span>
            should generally
            <span className="text-blue-500"> remain the same </span>
            to maintain continuity with
            <span className="text-blue-500">
              {" "}
              legacy data storage/structure.{" "}
            </span>
            However, the app should
            <span className="text-blue-500">
              {" "}
              standardize global data inputs{" "}
            </span>
            (day,location, weather, etc.) to minimize errors in stored data.
          </h1>
        </div>
      </section>

      <section className="max-w-4xl mx-auto p-4">
        <ROPrelimFigjam />
        <div className="flex justify-center mb-2 mt-4 py-4">
          <div className="w-2/3 h-1 bg-backgroundgrey rounded-full" />
        </div>
      </section>

      {/* BETA TITLE */}
      <div className="w-full mx-auto px-6 mt-12 py-8">
        <h2 className="text-4xl font-extrabold text-gray-900 text-center">
          Beta-App Research
        </h2>

        <div className="flex justify-center py-4">
          <div className="w-2/3 h-1 bg-gradient-to-r from-blue-500 to-teal-400 rounded-full" />
        </div>
      </div>
      {/*----end user interviews----*/}
      <section className="max-w-4xl mx-auto px-6">
        <div className="flex flex-col">
          {/* Insight card on top */}
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
              <p className="text-lg font-semibold text-custom-shadow-sm text-white">
                {goalTexts[2]}
              </p>
            </div>
          </div>

          {/* Right column: quote card */}
          <div className="md:w-1/2 flex justify-center">
            <div className="bg-white p-6 rounded-2xl shadow-lg w-full">
              <p className="text-lg font-semibold text-gray-900 ">
                Usability testing/interview with 4 end-users plus beta-app
                presentation to primary investigator focused on gauging the
                effectiveness of the new features
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Insight card on top */}
      <section className="max-w-4xl mx-auto mt- mb-8 px-6">
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

      {/*columns for results */}
      <section className="max-w-4xl mx-auto px-6 mt-2">
        <div className="">
          {/* Component that shows improvement text with button */}
          <div className="w-full">
            <ROBetaResults />
          </div>
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

      {/* ResearchObs Final */}
      <section className="max-w-4xl mx-auto pt-4 mb-8 px-6">
        <div className="w-full">
          <h2 className="text-4xl leading-snug  font-extrabold text-center text-black">
            ResearchObs Launch
          </h2>

          <div className="flex justify-center mt-2 py-4">
            <div className="w-2/3 h-1 bg-gradient-to-r from-blue-500 to-teal-400 rounded-full" />
          </div>
        </div>
      </section>
      {/*images */}
      <section className="max-w-4xl mx-auto px-6 mt-6">
        <div className="flex items-center justify-center mb-6">
          <h3 className="text-3xl text-center font-extrabold">
            ResearchObs App
          </h3>
        </div>

        {/* ---- Outcomes for Goal #3 ---- */}
        <section className="max-w-4xl mx-auto pt-4 pb-8 px-6">
          <div className="flex flex-col md:flex-row items-start md:items-center md:space-x-12 space-y-8 md:space-y-0">
            {/* Left column: title + result card */}
            <div className="md:w-1/2 flex justify-center">
              <div className="bg-white p-6 rounded-2xl shadow-lg w-full mb-4">
                <p className="text-lg font-semibold italic text-gray-900 ">
                  "I made an error [in an observation] last week and I was
                  thinking "ughhh where is the Undo button!" I'm excited to
                  finally use the new app."
                </p>
                <p className="text-md text-right italic text-gray-900">
                  - Senior Researcher
                </p>
              </div>
            </div>

            {/* Right column: quote card */}
            <div className="md:w-1/2 flex justify-center">
              <div className="bg-white p-6 rounded-2xl shadow-lg w-full mb-4">
                <p className="text-lg font-semibold italic text-gray-900 ">
                  "We've already had to skip data collection for one group
                  because only one tablet has the updated members list. It'll be
                  nice to resume data collection for them."
                </p>
                <p className="text-md text-right italic text-gray-900">
                  - Junior Researcher
                </p>
              </div>
            </div>
          </div>
        </section>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <img
            src={homeImg}
            alt="First"
            className="w-full rounded-lg shadow-md"
            onClick={() => setSelectedImage(homeImg)}
          />
          <img
            src={dataImg}
            alt="Second"
            className="w-full rounded-lg shadow-md"
            onClick={() => setSelectedImage(dataImg)}
          />
          <img
            src={storageImg}
            alt="Third"
            className="w-full rounded-lg shadow-md"
            onClick={() => setSelectedImage(storageImg)}
          />
        </div>
      </section>

      {/* Timeline*/}
      <section className="w-full mx-auto p-4">
        <ROFlow />
      </section>
      {/* Timeline*/}
      <section className="w-full mx-auto p-4">
        <ROTimeline />
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
                Custom one-off apps can cause issues with code maintenance once
                the developer leaves. These apps should allow for as much in-app
                editing to minimize code editing as possible.
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
                Preliminary UX research can mitigate data loss by reducing
                future maintenance issues as these will remain unsolved until
                the app is rewritten or the code is analyzed/updated.
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
              My research not only helped guide the development of ResearchObs,
              but it resulted in{" "}
              <span className="text-[#f28e0b]">
                users rating their experiences more positively{" "}
              </span>
              than when using WhatsOb. My research also helped{" "}
              <span className="text-[#f28e0b]">
                identify and address longevity concerns{" "}
              </span>
              from the PI and data manager so that future changes are easy to
              deploy.
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
              className="w-full bg-black p-4 h-auto rounded-lg shadow-lg"
              onContextMenu={(e) => e.preventDefault()} //prevents right clicking
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default ResearchObsPage;

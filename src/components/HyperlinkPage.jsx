// src/components/HyperlinkPage.jsx
import React, { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { gsap } from "gsap";
import MethodologyFlipCards from "./HyperlinkFlipCards";

import { FaArrowUp, FaArrowDown, FaCircle } from "react-icons/fa";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export function HyperlinkPage() {
  // which goals have been “flipped”
  const [revealed, setRevealed] = useState([true, true, true]);
  // refs for each goal card
  const cardRefs = [useRef(null), useRef(null), useRef(null)];
  const goalTexts = [
    "Does Hyperlinking Increase Lecture Engagement?",
    "Does Increased Engagement Increase Grades?",
    "Does Hyperlinking Increase Grades?",
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
      {/* ---- Intro + Research Approach (Hyperlink) ---- */}
      <section className="max-w-4xl mx-auto py-16 px-6 space-y-12">
        {/* Title */}
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-extrabold text-gray-900">
            Hyperlinking: Increasing Online Classroom Engagement
          </h1>
        </div>

        {/* Intro (centered box) */}
        <div className="relative flex justify-center">
          <div className="bg-white p-8 rounded-2xl shadow-lg max-w-3xl text-center cursor-auto">
            <p className="text-lg md:text-xl text-gray-800">
              I analyzed a large course dataset to test whether hyperlinking
              weekly announcements to lecture videos boosts engagement and
              relates to course performance. While hyperlinking did{" "}
              <span className="font-semibold">
                not directly increase final grades
              </span>
              , it reliably increased engagement—students showed{" "}
              <span className="font-semibold">≈1.4× more total views</span> and
              higher average views. Crucially, those engagement metrics were{" "}
              <span className="font-semibold">
                positively linked to academic performance
              </span>
              , indicating that hyperlinking acts as a low-effort catalyst for
              behaviors that support better outcomes.
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
              {/* Dataset & Design */}
              <div className="rounded-xl p-4 bg-gray-50">
                <p className="font-semibold mb-1">Dataset &amp; Design</p>
                <p className="text-sm">
                  Used an existing, de-identified course dataset (no
                  intervention) to avoid altering students’ learning
                  environment. Selected a course with a
                  <span className="font-semibold"> natural split</span> between
                  hyperlinked and non-hyperlinked course sections. Cleaned
                  records for consistent engagement and grade fields and applied
                  simple inclusion rules (complete term data; valid view logs).
                </p>
              </div>

              {/* Statistical Analysis */}
              <div className="rounded-xl p-4 bg-gray-50">
                <p className="font-semibold mb-1">Statistical Analysis</p>
                <p className="text-sm">
                  Repeated-measures comparisons for hyperlink vs. non-hyperlink
                  weeks; a{" "}
                  <span className="font-semibold">linear regression</span> to
                  relate engagement to final grade; and a
                  <span className="font-semibold"> chi-square</span> model check
                  to compare full vs. null specifications.
                </p>
              </div>

              {/* Outcomes */}
              <div className="rounded-xl p-4 bg-gray-50">
                <p className="font-semibold mb-1">Outcomes</p>
                <p className="text-sm">
                  Hyperlinking increased engagement (≈1.4× total views; higher
                  average views). Engagement was positively associated with
                  grades, while hyperlinking itself did not directly change
                  final grades.
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

      {/* Intro card and results title */}
      <div className="w-full mx-auto px-6 py-8">
        <h2 className="text-4xl font-extrabold text-gray-900 text-center">
          Methodology Overview
        </h2>

        <div className="flex justify-center py-4">
          <div className="w-2/3 h-1 bg-gradient-to-r from-blue-500 to-teal-400 rounded-full" />
        </div>
      </div>

      <section
        ref={flowContainer}
        className="relative w-full max-w-4xl mx-auto px-6 py-16 min-h-[400px]"
      >
        {/* A) SVG arrow behind everything (unchanged) */}
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
            d=""
            stroke="#3b82f6"
            strokeWidth="4"
            fill="none"
            markerEnd="url(#arrowhead)"
          />
        </svg>

        {/* B) Flippable cards — same grid positions, refs preserved */}
        <MethodologyFlipCards flowBoxes={flowBoxes} />

        {/* line page break */}
        <div className="flex justify-center mb-8 mt-6 py-4">
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
          the skills needed to complete the real study.
        </h2>

        <div className="flex justify-center py-4">
          <div className="w-2/3 h-1 bg-backgroundgrey rounded-full" />
        </div>
      </div>

      {/* ---- Outcomes for Goal #1 ---- */}

      {/*----Outcomes----*/}
      <section className="max-w-4xl mx-auto px-6 ">
        <div className="flex flex-col md:flex-row items-start md:items-center md:space-x-12 space-y-8 md:space-y-0">
          {/* Left column: title + result card */}
          <div className="flex flex-col items-start space-y-4 md:w-1/2">
            <h3 className="text-2xl font-extrabold text-backgroundred">
              Goal #1
            </h3>
            <hr className="w-16 border-backgroundgrey border-[2 px]" />
            <div className=" bg-gradient-to-r from-[#1b2683] to-[#0987c6]  p-6 rounded-2xl shadow-lg w-full">
              <p className="text-lg font-semibold text-custom-shadow-sm text-white custom-shadow-small">
                {goalTexts[0]}
              </p>
            </div>
          </div>

          {/* Right column: GSAP‐animated stats card */}
          <div className="md:w-1/2 flex justify-center">
            <div className="bg-white p-6 rounded-2xl shadow-lg w-full overflow-hidden">
              {/* wrapper for GSAP targeting */}
              <div ref={statsRef}>
                {/* only this <h4> will animate */}
                <h4 className="anim text-lg font-semibold text-gray-900 mb-4">
                  {statsSets[statsIndex].title}
                </h4>
                <div className="grid grid-cols-2 gap-8 text-center">
                  {statsSets[statsIndex].data.map((item) => (
                    <div key={item.label}>
                      {/* only this <p> will animate */}
                      <p className="anim text-3xl font-bold">{item.value}</p>
                      <div className="border-t-2 border-gray-300 my-2"></div>
                      {/* label stays static */}
                      <p className="text-gray-600 font-semibold">
                        {item.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*----Title----*/}
        <section className="max-w-4xl mx-auto mt-12 px-6">
          <div className="flex flex-col space-y-8">
            {/* Insight card on top */}
            <div className="w-full mx-auto">
              <p className="text-2xl font-bold custom-shadow-white text-[#000000] text-center">
                Hyperlinking video lectures to weekly announcements increased
                engagement
              </p>
            </div>
          </div>
        </section>
        {/* line page break */}
        <div className="flex justify-center mt-6 mb-8 py-4">
          <div className="w-full h-1 bg-backgroundgrey rounded-full" />
        </div>
      </section>

      {/* ---- Outcomes for Goal #2 ---- */}
      {/*----Outcomes----*/}
      <section className="max-w-4xl mx-auto px-6 mt-12">
        <div className="flex flex-col md:flex-row items-start md:items-center md:space-x-12 space-y-8 md:space-y-0">
          {/* Left column: title + result card */}
          <div className="flex flex-col items-start space-y-4 md:w-1/2">
            <h3 className="text-2xl font-extrabold text-backgroundred">
              Goal #2
            </h3>
            <hr className="w-16 border-backgroundgrey border-[2px]" />
            <div className=" bg-gradient-to-r from-[#1b2683] to-[#0987c6]  p-6 rounded-2xl shadow-lg w-full">
              <p className="text-lg font-semibold text-custom-shadow-sm text-white custom-shadow-small">
                {goalTexts[1]}
              </p>
            </div>
          </div>

          {/* Right column: quote card */}
          <div className="md:w-1/2 flex justify-center">
            <div className="bg-white p-6 rounded-2xl shadow-lg w-full mb-4">
              <p className="text-lg font-semibold text-gray-900">
                Regression model predict students’ grades better than random
                chance (F(7,567)=38.8, p &lt; .001) and accounted for
                approximately 39.4% of the variance within our data (R2 =
                0.394).
              </p>
            </div>
          </div>
        </div>
      </section>
      {/*----Title----*/}
      <section className="max-w-4xl mt-12 mb-12 mx-auto px-6">
        <div className="flex flex-col space-y-8">
          {/* Insight card on top */}
          <div className="w-full mx-auto">
            <p className="text-2xl font-bold custom-shadow-white text-[#000000] text-center">
              The linear model showed that engagement and final grades were
              linked
            </p>
          </div>
        </div>
      </section>
      {/* ---- Additional Insight for Goal 2 (stacked) ---- */}
      <section className="max-w-4xl mx-auto px-6">
        <div className="flex flex-col space-y-8">
          {/* linear regression models*/}
          <div className="space-y-2">
            <p className="flex items-center">
              <FaArrowUp className="mr-2 w-6 h-6 text-green-600" />
              <span className="text-xl md:text-2xl text-black text-semibold">
                Viewing a lecture increased final grade ~7 points per lecture
              </span>
            </p>
            <p className="flex items-center ">
              <FaArrowUp className="mr-2 w-6 h-6 text-green-600" />
              <span className="text-xl md:text-2xl  text-black text-semibold">
                Subsequent viewings of lectures increased final grade by ~2
                points
              </span>
            </p>
            <p className="flex items-center ">
              <FaArrowDown className="mr-2 w-7 h-7 text-red-600" />
              <span className="text-xl md:text-2xl text-black text-semibold">
                Regardless of viewing, loading a lecture more often decreased
                final grade by ~2 points
              </span>
            </p>
          </div>
        </div>
        {/* line page break */}
        <div className="flex justify-center mt-6 mb-8 py-4">
          <div className="w-full h-1 bg-backgroundgrey rounded-full" />
        </div>
      </section>

      {/* ---- Outcomes for Goal #3 ---- */}

      {/*----Outcomes----*/}
      <section className="max-w-4xl mx-auto px-6 mt-12">
        <div className="flex flex-col md:flex-row items-start md:items-end md:space-x-12 space-y-8 md:space-y-0">
          {/* Left column: title + result card */}
          <div className="flex flex-col items-start space-y-4 md:w-1/2">
            <h3 className="text-2xl font-extrabold text-backgroundred">
              Goal #3
            </h3>
            <hr className="w-16 border-backgroundgrey border-[2px]" />
            <div className="bg-gradient-to-r from-[#1b2683] to-[#0987c6] p-6 rounded-2xl shadow-lg w-full">
              <p className="text-lg font-semibold text-custom-shadow-sm text-white custom-shadow-small">
                {goalTexts[2]}
              </p>
            </div>
          </div>

          {/* Right column: quote card */}
          <div className="md:w-1/2 flex justify-center">
            <div className="bg-white p-6 rounded-2xl shadow-lg w-full mb-4 md:mb-0">
              <p className="text-lg font-semibold text-gray-900">
                Hyperlinking lecture was associated with a non-significant
                reduction in grades (b = -0.87, SE = 1.05, t(418) = -0.83, p =
                0.408).
              </p>
            </div>
          </div>
        </div>

        {/*----Title----*/}
        <section className="max-w-4xl mt-12 mx-auto px-6">
          <div className="flex flex-col space-y-8">
            {/* Insight card on top */}
            <div className="w-full mx-auto">
              <p className="text-2xl font-bold custom-shadow-white text-[#000000] text-center">
                Hyperlinking lectures to weekly announcement did not increase or
                decrease student grades
              </p>
            </div>
          </div>
        </section>
        {/* line page break */}
        <div className="flex justify-center mt-6 mb-8 py-4">
          <div className="w-full h-1 bg-backgroundgrey rounded-full" />
        </div>
      </section>

      {/* Take Aways */}
      <section>
        <div className="w-full mx-auto px-6 py-8">
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
          <div className="flex flex-col items-center md:items-start space-y-4 md:w-1/2">
            <h3 className="text-2xl font-extrabold text-backgroundred">
              Primary Considerations
            </h3>
            <hr className="w-16 border-backgroundgrey border-[2px]" />
            <div className="bg-white p-6 rounded-2xl shadow-lg w-full">
              <p className="text-lg font-semibold text-custom-shadow-sm text-gray-800">
                Hyperlinking increases student engagement with online classroom
                lectures and may indirectly lead to better classroom performance
              </p>
            </div>
          </div>

          {/* Right column: quote card */}
          <div className="flex flex-col items-center md:items-end space-y-4 md:w-1/2">
            <h3 className="text-2xl font-extrabold text-backgroundred">
              Secondary Considerations
            </h3>
            <hr className="w-16 border-backgroundgrey border-[2px]" />
            <div className="bg-white p-6 rounded-2xl shadow-lg w-full">
              <p className="text-lg font-semibold text-start md:text-end text-custom-shadow-sm text-gray-800">
                Improve early alerts or provide directed feedback for students
                with a high number of lectures loaded as they may be struggling
                with engagement
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
              My research quantified the{" "}
              <span className="text-blue-200">real-world impact </span>{" "}
              associated with an{" "}
              <span className="text-blue-200">easy-to-use methodology</span>{" "}
              that{" "}
              <span className="text-blue-200">
                increased student engagement.
              </span>{" "}
              Based on this, I recommend hyperlinking key class resources to
              increase engagement. More specifically, hyperlinking should be
              used by professors who expected lowered student engagement in
              classrooms with...
            </p>
          </div>
          {/* linear regression models */}
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
            <p className="text-2xl font-semibold text-center text-gray-800">
              Online sections
            </p>
            <p className="text-2xl font-semibold text-center text-gray-800">
              Large number of students
            </p>
            <p className="text-2xl font-semibold text-center text-gray-800">
              Difficult course material
            </p>
            <p className="text-2xl font-semibold text-center text-gray-800">
              High quantity of lectures
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HyperlinkPage;

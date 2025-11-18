// src/components/SEEHBpage.jsx
import React, { useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import { gsap } from "gsap";
import SEEHBtimeline from "./SEEHBtimeline";
import likelyToImg from "../images/seehb/likelyto.png";
import speedImg from "../images/seehb/speedgraph.png";
import seehbGHome from "../images/seehb/seehbGHome.png";
import seehbGSchedule from "../images/seehb/seehbGSchedule.png";
import seehbGMedia from "../images/seehb/seehbGMedia.png";
import seehbRHome from "../images/seehb/seehbRHome.png";
import seehbRSchedule from "../images/seehb/seehbRSchedule.png";
import seehbRMedia from "../images/seehb/seehbRMedia.png";
import ddFinal from "../images/seehb/ddfinal.png";
import abshome from "../images/seehb/abs1.png";
import absschedule from "../images/seehb/abs2.png";
import abs3 from "../images/seehb/abs3.png";

export function SEEHBpage() {
  const { pathname } = useLocation();

  // lightbox state
  const [selectedImage, setSelectedImage] = useState(null);

  // which goals have been “flipped”
  const [revealed, setRevealed] = useState([true, true, true]);
  // refs for each goal card
  const cardRefs = [useRef(null), useRef(null), useRef(null)];
  const goalTexts = [
    "Decrease User Frustration",
    "Improve Navigation",
    "Modernize",
  ];
  const outcomesTexts = [
    "Improved Likeliness to Use",
    "Faster Navigation Speed",
    "Updated UI with Consistent Layout",
  ];

  return (
    <div className="w-full">
      {/* ---- Intro squares ---- */}
      <section className="max-w-4xl mx-auto py-16 px-6 space-y-16">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-extrabold text-gray-900">
            Redesigning the SEEHB Conference Website
          </h1>
        </div>

        {/* Intro (centered box) */}
        <div className="relative flex justify-center">
          <div className="bg-white p-8 rounded-2xl shadow-lg max-w-3xl text-center cursor-auto">
            <p className="text-lg md:text-xl text-gray-800">
              The SEEHB conference website had been built with a no-code tool
              and was increasingly difficult to navigate, visually outdated, and
              prone to bugs. Pages felt{" "}
              <span className="font-semibold">confusing</span> and{" "}
              <span className="font-semibold">unmaintained</span>, which risked
              leaving a{" "}
              <span className="font-semibold">negative impression</span> on
              potential attendees.
            </p>
            <p className="text-lg md:text-xl text-gray-800 mt-4">
              To improve navigation, enjoyment, and overall impact, I led a UX
              research effort that combined{" "}
              <span className="font-semibold">end-user interviews</span>,{" "}
              <span className="font-semibold">click-tracking analysis</span>,
              and <span className="font-semibold">A/B testing</span>. These
              findings informed a modern, code-based redesign that better
              supports registration, program exploration, and sponsor visibility
              for future SEEHB meetings.
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
              {/* Discovery & Audit */}
              <div className="rounded-xl p-4 bg-gray-50">
                <p className="font-semibold mb-1">Discovery &amp; Audit</p>
                <p className="text-sm">
                  Reviewed the existing no-code site, mapped user flows, and
                  cataloged navigation issues, dead links, and visual
                  inconsistencies to define the baseline problems.
                </p>
              </div>

              {/* User Research & Analytics */}
              <div className="rounded-xl p-4 bg-gray-50">
                <p className="font-semibold mb-1">
                  User Research &amp; Analytics
                </p>
                <p className="text-sm">
                  Conducted interviews and remote usability tests with prior
                  attendees, then paired those insights with click-tracking data
                  to see where users dropped off or missed key actions like
                  registering or viewing the schedule.
                </p>
              </div>

              {/* Design, Test, & Iterate */}
              <div className="rounded-xl p-4 bg-gray-50">
                <p className="font-semibold mb-1">
                  Design, Test, &amp; Iterate
                </p>
                <p className="text-sm">
                  Prototyped new layouts, navigation patterns, and homepage
                  content, then ran A/B tests to validate changes before
                  implementing a performant, maintainable React-based site.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Card 4: Centered briefing (UNCHANGED) */}
        <div className="flex justify-center">
          <div className="w-full mx-auto">
            <p className="text-4xl font-extrabold custom-shadow-white text-[#000000] text-center">
              Client Briefing
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
                    ? "bg-white custom-shadow-sm text-gray-800"
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
      <div className="w-full mx-auto px-6 py-8">
        <h2 className="text-4xl font-extrabold text-gray-900 text-center">
          Market Solution Research
        </h2>

        <div className="flex justify-center py-4">
          <div className="w-2/3 h-1 bg-gradient-to-r from-blue-500 to-teal-400 rounded-full" />
        </div>

        {/* Double Diamond image */}
        <div className="flex justify-center mt-4">
          <img
            src={ddFinal}
            alt="Double Diamond framework summarizing market solution research"
            className="max-w-full md:max-w-7xl max-h-[70vh] rounded-2xl object-contain"
          />
        </div>
      </div>

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

      <section className="max-w-4xl mx-auto px-6">
        <div className="w-full mx-auto">
          <h1 className="text-3xl font-extrabold custom-shadow-white text-[#000000] text-center">
            Methods
          </h1>
        </div>
        <div className="w-full mx-auto">
          <p className="text-lg text-center pt-1 text-gray-700 italic">
            A|B testing and interviews with 5 conference attendees
          </p>
        </div>
      </section>

      {/*----Interview Methods----*/}
      <section className="max-w-4xl mx-auto px-6 mt-12">
        <div className="flex flex-col md:flex-row items-start md:items-center md:space-x-12 space-y-8 md:space-y-0">
          {/* Left column */}
          <div className="md:w-1/2 flex justify-center">
            <div className="bg-white p-6 rounded-2xl shadow-lg w-full mb-4">
              <p className="text-lg text-center md:text-start font-semibold text-gray-900 ">
                End User Interviews, Questionnaire, and Usability Testing
              </p>
            </div>
          </div>

          {/* Right column*/}
          <div className="md:w-1/2 flex justify-center">
            <div className="bg-white p-6 rounded-2xl shadow-lg w-full mb-4">
              <p className="text-lg text-center md:text-end font-semibold text-gray-900 ">
                Focus: Determining common issues faced by users regarding the
                website layout, information, navigation, and general appeal
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto mt-10 px-6">
        <div className="w-full mx-auto">
          <h1 className="text-3xl font-extrabold custom-shadow-white text-[#000000] text-center">
            Results
          </h1>
        </div>
        <div className="w-full mx-auto">
          <p className="text-lg text-center pt-1 text-gray-700 italic"></p>
        </div>
      </section>

      {/* ---- Outcomes for Goal #1 ---- */}
      <section className="max-w-4xl mx-auto px-6 mt-8 mb-8">
        <div className="flex flex-col md:flex-row items-start md:items-center md:space-x-12 space-y-8 md:space-y-0">
          {/* Left column: title + result card */}
          <div className="flex flex-col items-start mb-12 space-y-4 md:w-1/2">
            <h3 className="text-2xl font-extrabold text-backgroundred">
              Goal #1
            </h3>
            <hr className="w-16 border-backgroundgrey border-[2 px]" />
            <div className="bg-gradient-to-r from-[#1b2683] to-[#0987c6] p-6 rounded-2xl shadow-lg w-full">
              <p className="text-lg font-semibold text-custom-shadow-sm text-white custom-shadow-white">
                {goalTexts[0]}
              </p>
            </div>
          </div>

          {/* Right column: stats card */}
          <div className="md:w-1/2 flex justify-center">
            <div className="bg-white p-6 rounded-2xl shadow-lg w-full">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                Average Reported Bugs
              </h4>
              <div className="grid grid-cols-2 gap-8 text-center">
                <div>
                  <p className="text-3xl font-bold">0</p>
                  <div className="border-t-2 border-gray-300 my-2"></div>
                  <p className="text-gray-600 font-semibold">React</p>
                </div>
                <div>
                  <p className="text-3xl font-bold">6</p>
                  <div className="border-t-2 border-gray-300 my-2"></div>
                  <p className="text-gray-600 font-semibold">Google Sites</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ---- Additional Insight for Goal #1 (stacked) ---- */}
      <section className="max-w-4xl mx-auto px-6">
        <div className="flex flex-col space-y-8">
          {/* Insight card on top */}
          <div className="w-full mx-auto mb-8">
            <h1 className="text-4xl font-bold custom-shadow-white text-[#000000] text-center">
              Decreasing the number of bugs (dead links, misdirects, incorrect
              information) increased the likelihood to interact with the
              website.
            </h1>
            <p className="mt-2 text-xl text-center text-gray-700">
              <span className="italic font-semibold">
                "We are going to push the website and need to fix all the issues
                to make a good appearance"
              </span>{" "}
              - stakeholder
            </p>
          </div>
          {/* Illustration below */}
          <div className="flex justify-center">
            <img
              src={likelyToImg}
              alt="Increased Interaction Likelihood"
              className="bg-white p-6 max-w-full h-auto rounded-lg shadow-md cursor-pointer transition-transform duration-200 hover:scale-102"
              onClick={() => setSelectedImage(likelyToImg)}
            />
          </div>
        </div>
      </section>
      {/* line page break */}
      <section className="flex justify-center py-16">
        <div className="block w-3/4 h-[4px] bg-backgroundgrey "></div>
      </section>
      {/* ---- Outcomes for Goal #2 ---- */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row items-start md:items-center md:space-x-12 space-y-8 md:space-y-0">
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
            <div className="bg-white p-6 rounded-2xl shadow-lg w-full mb-4">
              <p className="text-lg font-semibold italic text-gray-900 ">
                "I feel like I know where I am supposed to go... I would
                definitely consider using it in the future, especially over the
                printed out schedules."
              </p>
              <p className="text-md text-right italic text-gray-900">
                - previous attendee interviewed
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* ---- Additional Insight for Goal 2 (stacked) ---- */}
      <section className="max-w-4xl mx-auto px-6">
        <div className="flex flex-col space-y-8">
          {/* Insight card on top */}
          <div className="w-full mx-auto mb-8">
            <p className="text-4xl font-bold custom-shadow-white text-[#000000] text-center">
              Consistent layouts, using a single-page app website, and
              incorporating animations increased accessibility to features and
              information.
            </p>
          </div>
          {/* Illustration below */}
          <div className="flex justify-center">
            <img
              src={speedImg}
              alt="Faster Navigation Speed"
              className="bg-white p-6 max-w-full h-auto rounded-lg shadow-md cursor-pointer transition-transform duration-200 hover:scale-102"
              onClick={() => setSelectedImage(speedImg)}
            />
          </div>
        </div>
      </section>
      {/* line page break */}
      <section className="flex justify-center py-16">
        <div className="block w-3/4 h-[4px] bg-backgroundgrey "></div>
      </section>

      {/* ---- Outcomes for Goal #3 ---- */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row items-start md:items-center md:space-x-12 space-y-8 md:space-y-0">
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
            <div className="bg-white p-6 rounded-2xl shadow-lg w-full mb-4">
              <p className="text-lg font-semibold italic text-gray-900 ">
                "The revamped website looks great! Can't wait to send it out to
                others who have been asking for a link."
              </p>
              <p className="text-md text-right italic text-gray-900">
                - committee member
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* ---- Website Previews ---- */}
      <section className="w-full max-w-4xl mx-auto px-6 py-16">
        {/* Intro card */}
        <div className="w-full mx-auto mb-8">
          <p className="text-4xl font-bold custom-shadow-white text-[#000000] text-center">
            See the improvements for yourself!
          </p>
        </div>

        {/* Google Sites row */}
        <div className="text-end p-6">
          <h1 className="text-2xl font-extrabold">Old Google Sites Website</h1>

          <section className="flex justify-end">
            <div className="block w-3/4 h-[4px] bg-backgroundgrey "></div>
          </section>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            {
              src: seehbGHome,
              href: "https://sites.google.com/view/seehbconference/",
              label: "Home",
            },
            {
              src: seehbGSchedule,
              href: "https://sites.google.com/view/seehbconference/schedule",
              label: "Schedule",
            },
            {
              src: seehbGMedia,
              href: "https://sites.google.com/view/seehbconference/media",
              label: "Media",
            },
          ].map(({ src, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer"
            >
              <img
                src={src}
                alt={label}
                className="w-full h-auto transition-transform duration-300 group-hover:scale-105 group-hover:blur-[1px]"
              />
              <div
                className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-80 
                            transition-opacity duration-300 flex items-center justify-center
                            pointer-events-none"
              >
                <span className="text-white text-2xl font-bold">{label}</span>
              </div>
            </a>
          ))}
        </div>

        {/* ABS Site Row*/}
        <div className="text-start p-6">
          <h1 className="text-2xl font-extrabold">
            Competitor Conference Website
          </h1>

          <section className="flex justify-start">
            <div className="block w-3/4 h-[4px] bg-backgroundgrey "></div>
          </section>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6  mb-12">
          {[
            {
              src: abshome,
              href: "https://www.animalbehaviorsociety.org/2025/index.php",
              label: "ABS",
            },
            {
              src: absschedule,
              href: "https://www.animalbehaviorsociety.org/2025/index.php",
              label: "ABS",
            },
            {
              src: abs3,
              href: "https://www.animalbehaviorsociety.org/2025/index.php",
              label: "ABS",
            },
          ].map(({ src, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer"
            >
              <img
                src={src}
                alt={label}
                className="w-full h-auto transition-transform duration-300 group-hover:scale-105 group-hover:blur-[1px]"
              />
              <div
                className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-80 
                            transition-opacity duration-300 flex items-center justify-center
                            pointer-events-none"
              >
                <span className="text-white text-2xl font-bold">{label}</span>
              </div>
            </a>
          ))}
        </div>

        {/* React Site row */}
        <div className="text-end p-6">
          <h1 className="text-2xl font-extrabold">
            Research Based React Website
          </h1>

          <section className="flex justify-end">
            <div className="block w-3/4 h-[4px] bg-backgroundgrey "></div>
          </section>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6  mb-12">
          {[
            { src: seehbRHome, href: "https://www.seehb.org/", label: "Home" },
            {
              src: seehbRSchedule,
              href: "https://www.seehb.org/#/schedule",
              label: "Schedule",
            },
            {
              src: seehbRMedia,
              href: "https://www.seehb.org/#/media",
              label: "Media",
            },
          ].map(({ src, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer"
            >
              <img
                src={src}
                alt={label}
                className="w-full h-auto transition-transform duration-300 group-hover:scale-105 group-hover:blur-[1px]"
              />
              <div
                className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-80 
                            transition-opacity duration-300 flex items-center justify-center
                            pointer-events-none"
              >
                <span className="text-white text-2xl font-bold">{label}</span>
              </div>
            </a>
          ))}
        </div>

        <div className="flex justify-center mt-6 mb-8 py-4">
          <div className="w-full h-1 bg-backgroundgrey rounded-full" />
        </div>
      </section>
      {/* Modal Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="relative max-w-4xl w-full px-4">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-6 z-10 w-10 h-10 flex items-start justify-center text-white text-3xl font-bold rounded-full bg-black/60 shadow-lg backdrop-blur-sm hover:bg-black/80 transition"
            >
              &times;
            </button>
            <img
              src={selectedImage}
              alt="Enlarged view"
              className="w-full p-4 bg-white h-auto rounded-lg shadow-lg"
              onContextMenu={(e) => e.preventDefault()}
            />
          </div>
        </div>
      )}

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
                Providing a bug and error free website is the most significant
                change that will increase future engagement
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
                Using designs, layouts, and animations can increase attention to
                key links and features. This can lead to improved RSVP and
                usability metrics.
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
            <p className="text-4xl font-bold custom-shadow-white text-[#000000] text-center">
              My research directly informed the front-end
              <span className="text-blue-200">
                {" "}
                redesign and development
              </span>{" "}
              of the SEEHB website, cutting reported issues from an average of{" "}
              <span className="text-blue-200 font-semibold">6 bugs to 0</span>.
              Post-launch testing showed that the new site{" "}
              <span className="text-blue-200">reduced user frustration</span>{" "}
              and <span className="text-blue-200">increased engagement</span> —
              attendees’ likelihood to{" "}
              <span className="text-blue-200 font-semibold">
                return to the site’s picture gallery
              </span>{" "}
              rose from{" "}
              <span className="text-blue-200 font-semibold">1.0 to 5.0</span> on
              a 5-point Likert scale, and their likelihood to{" "}
              <span className="text-blue-200 font-semibold">
                share the website
              </span>{" "}
              increased from{" "}
              <span className="text-blue-200 font-semibold">2.0 to 4.3</span> on
              the same scale. It also guided design decisions that{" "}
              <span className="text-blue-200">improved sign-up rates</span> by
              speeding up key tasks — time to RSVP dropped from{" "}
              <span className="text-blue-200 font-semibold">5.3s to 1.3s</span>,
              and time to find presentation abstracts decreased from{" "}
              <span className="text-blue-200 font-semibold">20s to 15s</span>,{" "}
              collectively boosting{" "}
              <span className="text-blue-200">overall usability.</span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SEEHBpage;

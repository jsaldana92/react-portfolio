// src/components/DataPullerPage.jsx
import React, { useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { gsap } from 'gsap';
import condensImg from '../images/condenslogo.png';
import InteractiveSteps from './interactiveSteps';

import PersonaTemplate from './PersonaTemplate';
import persona1 from '../images/gradingstudy/persona1.png';
import persona2 from '../images/gradingstudy/persona2.png';
import { FaArrowUp, FaArrowDown, FaUser, FaGraduationCap, FaAppleAlt, FaBook, FaRobot} from 'react-icons/fa';
import { SlCalender } from "react-icons/sl";
import { CgGym } from "react-icons/cg";
import { SiGoogleclassroom } from "react-icons/si";
import { MdGroups2 } from "react-icons/md";
import { RiEmotionUnhappyLine,RiEmotionHappyLine } from "react-icons/ri";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import DPPreliminary from './DataPullerPreliminary';
gsap.registerPlugin(ScrollTrigger);


export function DataPullerPage() {


  // which goals have been “flipped”
  const [revealed, setRevealed] = useState([false, false, false]);
  // refs for each goal card
  const cardRefs = [useRef(null), useRef(null), useRef(null)];
  const goalTexts = ['Determine Common Data Collection Timeline', "Determine an Optimal Solution", 'Gauge Engagement with Solution'];

  //moving arrow components
    const flowContainer = useRef(null);
    const flowBoxes    = [
      useRef(null),
      useRef(null),
      useRef(null),
      useRef(null),
      useRef(null),
    ];
    const arrowPathRef = useRef(null);




      const themeTexts = [
        "Description of Teaching Training Course",          // Theme 1
        "Common Grading Issues", // Theme 2
        "AI Issues",            // Theme 3
        "Departmental Support",        // Theme 4
        "GTA-to-GTA support",           // Theme 5
        "Support Wanted",       // Theme 6
        "Previous Experience Teaching"    // Theme 7
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
  const pts = flowBoxes.map(r => {
    const b = r.current.getBoundingClientRect();
    return [
      b.left - cRect.left + b.width  / 2,
      b.top  - cRect.top  + b.height / 2
    ];
  });

  // build an SVG path string: M x0,y0 L x1,y1 L x2,y2 …
  const d = pts.reduce((acc, [x,y], i) =>
    i === 0
      ? `M ${x} ${y}`
      : acc + ` L ${x} ${y}`, ''
  );
  const path = arrowPathRef.current;
  path.setAttribute('d', d);

  // measure total length for draw animation
  const total = path.getTotalLength();
  gsap.set(path, { strokeDasharray: total, strokeDashoffset: total });
  // draw when scrolled into view
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: flowContainer.current,
      start: 'top 80%',          // adjust as needed
      toggleActions: 'play none none none',
      once: true
    },
    defaults: { duration: 6, ease: 'power1.inOut' }
  });
  tl.to(path, { strokeDashoffset: 0 });
 }, []);

   // ─── Animated stats setup ───────────────────────────────
  const statsSets = [
    {
      title: 'Total Views Over 3 Lectures',
      data: [
        { label: 'Hyperlinked',     value: 120 },
        { label: 'Not Hyperlinked', value: 70  },
      ],
    },
    {
      title: 'Average Views per Lecture',
      data: [
        { label: 'Hyperlinked',     value: 40 },
        { label: 'Not Hyperlinked', value: 23 },
      ],
    },
  ];
  const [statsIndex, setStatsIndex] = useState(0);
  const statsRef = useRef(null);

  // cycle through the two sets every 5 seconds

// 1) cycling hook
  useEffect(() => {
    const id = setInterval(() => {
      setStatsIndex(i => (i + 1) % statsSets.length)
    }, 5000)   // change to 10000 for 10s
    return () => clearInterval(id)
  }, [])

  // 2) animation hook
  useEffect(() => {
    if (!statsRef.current) return
    const elems = statsRef.current.querySelectorAll('.anim')
    gsap.fromTo(
      elems,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.1 }
    )
  }, [statsIndex])
  // ───────────────────────────────────────────────────────────


  return (
    <div className="w-full">

      {/* ---- Intro squares ---- */}
      <section className="max-w-4xl mx-auto py-16 px-6 space-y-16">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-extrabold">
            <span className="bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">
              Conducting End-User Interviews
            </span>{' '}
             to Determine How to <span className="bg-gradient-to-r from-[#e3a730] to-[#b55f5f] bg-clip-text text-transparent"> Improve Data Collection Experience</span>
          </h1>
          <p className="text-xl text-gray-700 italic">
            Multiple researchers reported assistants having difficulty collecting data and also reported collection being ineffective and taking longer than expected 
          </p>
        </div>

        {/* Cards */}
        <div className="space-y-12">
          {/* Card 1: Left-aligned */}
          <div className="relative flex justify-start">
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-gradient-to-br from-blue-200 to-blue-50 rounded-full -z-10" />
            <div className="bg-white p-8 rounded-2xl shadow-lg max-w-xl">
                <p className="text-lg md:text-xl text-gray-800">
                Older research facilities often rely on non-cloud based local data storage to increase cyber security and therefore{' '}
                <strong className='text-blue-500'>manualy collect data</strong> across multiple systems
                </p>
            </div>
            </div>

          {/* Card 2: Right-aligned */}
          <div className="relative flex justify-end">
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-gradient-to-br from-blue-200 to-blue-50 rounded-full -z-10" />
            <div className="bg-white text-right p-8 rounded-2xl shadow-lg max-w-xl">
                <p className="text-lg md:text-xl text-gray-800">
                Although more "safe" this method can be highly{' '}
                <strong className='text-blue-500'>ineffective</strong> and cause{' '}
                <strong className='text-blue-500'>frustation</strong> and {' '}
                <strong className='text-blue-500'>needless time loss</strong>
                </p>
            </div>
          </div>

           {/* Card 4: center-aligned */}
          <div className="relative flex justify-center">
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br from-teal-200 to-teal-50 rounded-full -z-10" />
            <div className="bg-white p-8 rounded-2xl shadow-lg max-w-xl text-center">
              <p className="text-lg md:text-xl font-semibold text-gray-800">
              To determine a viable solution at decreasing frustation and time loss, I conducted 
              <strong className='text-blue-500'> preliminary interviews and questionnaires</strong> with research staff to determine the most common friction points in data collection. I then conducted{' '}   
              <strong className='text-blue-500'> beta-test interviews</strong> to verify my solution resonated well with staff and would actually be used. Lastly, I conducted{' '} 
              <strong className='text-blue-500'> post-launch interviews and questionnaires</strong> to determine what future solutions might increase engagement and productivity by decreasing frustration and time loss.
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
            <div className="flex space-x-6 md:space-x-12">
              {goalTexts.map((text, i) => (
                <div
                  key={i}
                  ref={cardRefs[i]}
                  onClick={() => {
                    // toggle only this card
                    setRevealed(prev => {
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
                      { scale: 1, opacity: 1, duration: 0.4, ease: 'back.out(1.7)' }
                    );
                  }}
                  className={`relative flex items-center justify-center  box-content font-semibold rounded-2xl shadow-lg p-6 h-18 w-18 md:h-12 md:w-42 text-center cursor-pointer overflow-hidden ${revealed[i] ? 'bg-white text-sm custom-shadow-sm text-gray-800' : 'bg-blue-950/80 text-white'}`}
                >
                  <span
                    className={`block just transition-opacity duration-300 ${revealed[i] ? 'opacity-0' : 'opacity-100'}`}>
                    Goal #{i + 1}
                  </span>
                  <span
                    className={`absolute font-semibold inset-0 flex items-center justify-center transition-opacity duration-300 ${revealed[i] ? 'opacity-100' : 'opacity-0'}`}>
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
            Results from Research Staff Interviews
          </h2>

          <div className="flex justify-center py-4">
            <div className="w-2/3 h-1 bg-gradient-to-r from-blue-500 to-teal-400 rounded-full" />
          </div>
        </div>
        


      {/* ---- Methods---- */}
      {/*----Interviews----*/}
      <section className="max-w-4xl mx-auto px-6">
        <div className="flex flex-col">
            {/* Insight card on top */}
            <div className="w-full mx-auto">
            <h1 className="text-3xl font-extrabold custom-shadow-white text-[#000000] text-center">
                Preliminary In-Person Interviews and Questionnaires
            </h1>
            </div>
            <div className="w-full mx-auto">
              <p className='text-lg text-center pt-1 text-gray-700 italic'>6 Research Staff Members: Junior, Senior, and Primary Investigators</p>
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
                Approximately 5-minute Interviews with Open Ended Questions
              </p>
            </div>
          </div>

          {/* Right column */}
          <div className="md:w-1/2 flex justify-center">
            <div className="bg-white p-6 rounded-2xl shadow-lg w-full mb-4">
              <p className="text-lg text-center md:text-end font-semibold text-gray-900 ">
                10 Closed Question Questionnaire per Researcher
              </p>
            </div>
          </div>
        </div>
      </section>

            {/* Interview  */}
      {/* ---- Timeline & Questionnaire ---- */}
      <section>
      <DPPreliminary />
      </section>

      <section className="max-w-4xl mx-auto   mt-16 px-6">
        {/* Insight card on top */}
            <div className="w-full mx-auto">
            <h1 className="text-3xl font-extrabold custom-shadow-white text-[#000000] text-center">
                Preliminary Conclusion
            </h1>
            </div>
            <div className="w-full mx-auto">
              <p className='text-lg text-center pt-1 text-gray-700 italic'>Plans for Beta-App</p>
            </div>
      </section>

{/*preliminary conclusion */}
<section className="max-w-4xl mx-auto px-6 mt-12 mb-6">
  <section className="max-w-4xl mx-auto px-6 mt-12 mb-4">
    <div className="pb-6 text-center">
      <h2 className="text-2xl font-extrabold">
        DataPuller Configuration
      </h2>
      <hr className="w-2/3 mx-auto border-backgroundgrey border-2 mt-2" />
    </div>
  </section>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {/* Code */}
    <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
      <h3 className="text-lg font-semibold text-gray-800">Code Language</h3>
      <p className="mt-2 text-gray-700">Python</p>
    </div>

    {/* Type */}
    <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
      <h3 className="text-lg font-semibold text-gray-800">App Type</h3>
      <p className="mt-2 text-gray-700">Stand alone (.exe)</p>
    </div>

    {/* Pulls from */}
    <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
      <h3 className="text-lg font-semibold text-gray-800">Collects Folders From</h3>
      <p className="mt-2 text-gray-700">C:/Tasks/</p>
    </div>

    {/* Sends to */}
    <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
      <h3 className="text-lg font-semibold text-gray-800">Data Sent To</h3>
      <p className="mt-2 text-gray-700">
        D:/data_from_puller/
        <br />
        <span className="text-sm text-gray-600">
          optional: C:/Tasks/[last name]/[task name]/copied/
        </span>
      </p>
    </div>

    {/* Supported Files */}
    <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
      <h3 className="text-lg font-semibold text-gray-800">Supported Files</h3>
      <p className="mt-2 text-gray-700">
        .csv
      </p>
       <p className="mt-2 text-gray-700">
        .txt (not “para”; optional: “monkey”, “block”)
        </p>
    </div>

    {/* Feedback */}
    <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
      <h3 className="text-lg font-semibold text-gray-800">Feedback</h3>
      <p className="mt-2 text-gray-700">Pop-ups for Errors and Successes</p>
    </div>
  </div>
  <div className="flex justify-center mb-2 mt-8 py-4">
    <div className="w-2/3 h-1 bg-backgroundgrey rounded-full" />
  </div>
</section>












{/* Take Aways */}
<section className="max-w-4xl mx-auto pt-4 pb-16 px-6">
  <div className="w-full">
    <h2 className="text-4xl leading-snug  font-extrabold text-center text-black">
      Take Aways
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
      <h3 className="text-2xl font-extrabold text-backgroundred">Primary Considerations</h3>
      <hr className="w-16 border-backgroundgrey border-[2px]" />
      <div className="bg-white p-6 rounded-2xl shadow-lg w-full">
        <p className="text-lg font-semibold text-custom-shadow-sm text-gray-800">
          Formal training, alongisde brief regular check-ins, provide the highest valued type of support. This allows GTAs the resources and the experience to imporve as lectures and rely less of direct departmental support for minor issues. 
          </p>
      </div>
    </div>

    {/* Right column: quote card */}
    <div className="flex flex-col items-end space-y-4 md:w-1/2">
      <h3 className="text-2xl font-extrabold text-backgroundred">Secondary Considerations</h3>
      <hr className="w-16 border-backgroundgrey border-[2px]" />
      <div className="bg-white p-6 rounded-2xl shadow-lg w-full">
        <p className="text-lg font-semibold text-custom-shadow-sm text-gray-800">
          Experience is ultimately the largest factor when GTAs deal with grading issues, therefore, regardless of training or departmental support and rated a low likihood to take further education towards teaching unless necessary.
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
      <p className="text-4xl  font-extrabold custom-shadow-white text-[#000000] text-center">
        Departments should consider providing{' '}
        <span className='text-[#f28e0b]'>formal training</span> as part of graduate school curiculum and provide{' '}
        <span className='underline text-[#f28e0b]'>brief</span> regular {' '}
        <span className='text-[#f28e0b]'>check-ins</span> to continously support GTAs deal with{' '}
        <span className='text-[#f28e0b]'>grading issues.</span> 
      </p>
      </div>
  </div>
</section>


  </div>
  );


}

export default DataPullerPage;

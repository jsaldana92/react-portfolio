// src/components/HyperlinkPage.jsx
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
gsap.registerPlugin(ScrollTrigger);


export function GTAGradingPage() {


  // which goals have been “flipped”
  const [revealed, setRevealed] = useState([false, false, false]);
  // refs for each goal card
  const cardRefs = [useRef(null), useRef(null), useRef(null)];
  const goalTexts = ['What is the most commong grading issue GTAs experience?', 'How do GTAs navigate grading issues?', 'How do different departments support GTAs with grading issues?'];

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
              Conducting Interviews
            </span>{' '}
             to Determine Most Common <span className="bg-gradient-to-r from-[#e3a730] to-[#b55f5f] bg-clip-text text-transparent"> Frustrating Aspect of Grading</span>
          </h1>
          <p className="text-xl text-gray-700 italic">
            Conducted a qualitative analyssis of the most comming issues graduate teaching assistants encounter while grading student work.
          </p>
        </div>

        {/* Cards */}
        <div className="space-y-12">
          {/* Card 1: Left-aligned */}
          <div className="relative flex justify-start">
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-gradient-to-br from-blue-200 to-blue-50 rounded-full -z-10" />
            <div className="bg-white p-8 rounded-2xl shadow-lg max-w-xl">
                <p className="text-lg md:text-xl text-gray-800">
                Higher-education institutions often rely on{' '}
                <strong className='text-blue-500'>Graduate Teaching Assistants (GTAs) </strong> to teach multiple undergraduate classes across{' '}
                <strong className='text-blue-500'>different departments</strong>
                </p>
            </div>
            </div>

          {/* Card 2: Right-aligned */}
          <div className="relative flex justify-end">
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-gradient-to-br from-blue-200 to-blue-50 rounded-full -z-10" />
            <div className="bg-white text-right p-8 rounded-2xl shadow-lg max-w-xl">
                <p className="text-lg md:text-xl text-gray-800">
                GTAs report issues with grading but it is{' '}
                <strong className='text-blue-500'>unkown the most common type of issues</strong> and{' '}
                <strong className='text-blue-500'>how these differ across departments</strong>
                </p>
            </div>
          </div>

           {/* Card 3: Right-aligned */}
          <div className="relative flex justify-center">
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br from-teal-200 to-teal-50 rounded-full -z-10" />
            <div className="bg-white p-8 rounded-2xl shadow-lg max-w-xl text-center">
              <p className="text-lg md:text-xl font-semibold text-gray-800">
              To determine the most 
              <strong className='text-blue-500'> themes</strong> with grading issues, I conducted{' '}   
              <strong className='text-blue-500'> interviews</strong> with GTAs from multiple departments to determine the most common factors leading to GTAs{' '} 
              <strong className='text-blue-500'> experiencing issues</strong> with {' '} 
              <strong className='text-blue-500'> grading</strong>
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
                  className={`relative flex items-center justify-center  box-content font-semibold rounded-2xl shadow-lg p-6 h-18 w-18 md:h-12 md:w-42 text-center cursor-pointer overflow-hidden ${revealed[i] ? 'bg-white custom-shadow-sm text-gray-800' : 'bg-blue-950/80 text-white'}`}
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
            Mock results from fake interviews of GTAs at a higher-education institution
          </h2>

          <div className="flex justify-center py-4">
            <div className="w-2/3 h-1 bg-gradient-to-r from-blue-500 to-teal-400 rounded-full" />
          </div>
        </div>
        
      {/* Disclaimer section */}
        <div className="w-full mx-auto px-6 ">
          <h2 className="text-xl font-semibold text-gray-900 text-center">
            Due to the sensitive nature of this data, the actual results of this study cannot be shared online. Instead, this page focuses on the process of completing the project and uses a stand-in data set to demonstrate skills similar to those used in the real project.
          </h2>

          <div className="flex justify-center mb-8 py-4">
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
                Approximately 20-minute Interviews with 10 GTAs from 3 departments
              </p>
            </div>
          </div>

          {/* Right column */}
          <div className="md:w-1/2 flex justify-center">
            <div className="bg-white p-6 rounded-2xl shadow-lg w-full mb-4">
              <p className="text-lg text-center md:text-end font-semibold text-gray-900 ">
                Totaled 220 minutes of interview reponses to thematically code
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
                  setThemesRevealed(prev => {
                    const copy = [...prev];
                    copy[i] = !copy[i];
                    return copy;
                  });
                  const el = themeRefs[i].current;
                  gsap.fromTo(el, { scale: 0.9, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.4, ease: 'back.out(1.7)' });
                }}
                className={`
                  w-24 h-16 md:w-44 md:h-28
                  flex items-center justify-center
                  rounded-2xl shadow-lg p-4
                  cursor-pointer overflow-hidden
                  transition-transform text-center text-xs md:text-lg 
                  ${themesRevealed[i]
                    ? 'bg-white text-gray-800'
                    : 'bg-blue-950/80 text-white hover:scale-105'}
                `}
              >
                <span className={`transition-opacity  duration-300 ${themesRevealed[i] ? 'opacity-0' : 'opacity-100'}`}>
                  Theme #{i + 1}
                </span>
                <span className={`absolute inset-0 flex items-center justify-center px-3  text-center transition-opacity duration-300 ${themesRevealed[i] ? 'opacity-100' : 'opacity-0'}`}>
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
                    setThemesRevealed(prev => {
                      const copy = [...prev];
                      copy[i] = !copy[i];
                      return copy;
                    });
                    const el = themeRefs[i].current;
                    gsap.fromTo(el, { scale: 0.9, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.4, ease: 'back.out(1.7)' });
                  }}
                  className={`
                    w-24 h-16 md:w-44 md:h-28
                    flex items-center justify-center
                    rounded-2xl shadow-lg p-4
                    cursor-pointer overflow-hidden
                    transition-transform text-center text-xs md:text-lg 
                    ${themesRevealed[i]
                      ? 'bg-white text-gray-800'
                      : 'bg-blue-950/80 text-white hover:scale-105'}
                  `}
                >
                  <span className={`transition-opacity duration-300 ${themesRevealed[i] ? 'opacity-0' : 'opacity-100'}`}>
                    Theme #{i + 1}
                  </span>
                  <span className={`absolute inset-0 flex items-center justify-center px-3 transition-opacity duration-300 ${themesRevealed[i] ? 'opacity-100' : 'opacity-0'}`}>
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

    {/* ---- Pesona Section ---- */}
    <section className="max-w-4xl mx-auto pt-12 pb-8 px-6">
      <section className="max-w-4xl mx-auto mb-14 px-2">
            <h2 className="text-3xl font-extrabold text-center">
              Personas
            </h2>
      </section>
      <div className="flex flex-col md:flex-row 
                    items-center justify-center 
                    space-y-4 md:space-y-0 md:space-x-10">
      <div className="w-90 md:w-140 overflow-hidden">
        <PersonaTemplate
            className="w-full h-auto text-sm" 
            imageSrc={persona1}
            name="Jenny Acworth"
            age={29}
            quote='"Although the department certainly helps and is involved, we are the primary person handling the reporting of AI usage."'

            LTIcon={FaUser}
            leftTopDem="Female"
            LBIcon={FaGraduationCap}
            leftBottomDem="PhD Track"
            RTIcon={FaBook}
            rightTopDem="5th Year Student"
            RBIcon={FaAppleAlt}
            rightBottomDem="2 years GTA"

            TLIcon={CgGym}
            TLBehavior="Standardized derpatmental training provided a baseline expectation for teaching and classroom resources"
            TRIcon={SlCalender }
            TRBehavior="Standardized check-ins with faculty mentor result in  in being micro-managed one semesters and receiving little support the next"
            MLIcon={SiGoogleclassroom}
            MLBehavior="Primarily teaching online asynchronous classes"
            MRIcon={FaRobot }
            MRBehavior="AI policy violations is the most common grading issue followed by general cheating"
            BLIcon={MdGroups2}
            BLBehavior="Relies on faculty mentor's open-door policy and check-ins for support more than on other GTAs"
            BRIcon={RiEmotionHappyLine}
            BRBehavior="Enjoys teaching and is happy with the departmental support received and made available"
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
            TLBehavior="Deparment does not standardize training resulting in either no, some, or too much training on how to teach a class"
            TRIcon={SlCalender }
            TRBehavior="Faculty mentor check-ins are not standardized resulting in being micro-managed one semesters and receiving little support the next"
            MLIcon={SiGoogleclassroom}
            MLBehavior="Primarily teaches in person classes entry or mid-level classes"
            MRIcon={FaRobot}
            MRBehavior="Dealing with cheating is the most commong grading issue he has, with AI policy violations being the most common"
            BLIcon={MdGroups2}
            BLBehavior="Often relies on other GTAs for support due to inconsistent training and mentoring"
            BRIcon={RiEmotionUnhappyLine}
            BRBehavior="Enjoys teaching but the department does not meet his expectations for training or suppor"
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
            <h2 className="text-3xl font-extrabold text-center">
              Journey Map
            </h2>
      </section>
      <section className='mb-14 max-w-4xl mx-auto px-2'>
        <p className='text-lg  text-gray-700 italic text-center'>
          Deparmental training and support, alongside experience, impact how GTAs perceive grading issues
          </p>
      </section>
      {/* ---- Step #1 ---- */}
      {/*----Outcomes Step #1----*/}
      <section>
        <InteractiveSteps/>
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

export default GTAGradingPage;

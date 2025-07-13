// src/components/HyperlinkPage.jsx
import React, { useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { gsap } from 'gsap';

import { FaArrowUp, FaArrowDown, FaCircle } from 'react-icons/fa';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);


export function HyperlinkPage() {




  // which goals have been “flipped”
  const [revealed, setRevealed] = useState([false, false, false]);
  // refs for each goal card
  const cardRefs = [useRef(null), useRef(null), useRef(null)];
  const goalTexts = ['Does Hyperlinking Increase Lecture Engagement?', 'Does Increased Engagement Increase Grades?', 'Does Hyperlinking Increase Grades?'];

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
              Using Hyperlinks
            </span>{' '}
            to Increase Online Classroom Engagement
          </h1>
          <p className="text-xl text-gray-700 italic">
            Conducted a quantitative analyssis with a large data set of student engagement metrics to determine if hyperlinking online lectures increase student engagement.
          </p>
        </div>

        {/* Cards */}
        <div className="space-y-12">
          {/* Card 1: Left-aligned */}
          <div className="relative flex justify-start">
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-gradient-to-br from-blue-200 to-blue-50 rounded-full -z-10" />
            <div className="bg-white p-8 rounded-2xl shadow-lg max-w-xl">
                <p className="text-lg md:text-xl text-gray-800">
                Research shows that students report{' '}
                <strong className='text-blue-500'>lower engagement</strong> in{' '}
                <strong className='text-blue-500'>online classrooms</strong>
                </p>
            </div>
            </div>

          {/* Card 2: Right-aligned */}
          <div className="relative flex justify-end">
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-gradient-to-br from-blue-200 to-blue-50 rounded-full -z-10" />
            <div className="bg-white text-right p-8 rounded-2xl shadow-lg max-w-xl">
                <p className="text-lg md:text-xl text-gray-800">
                Hyperlink studies show that they{' '}
                <strong className='text-blue-500'>highlight important information</strong> and{' '}
                <strong className='text-blue-500'>increase engagement</strong>
                </p>
            </div>
          </div>

           {/* Card 3: Right-aligned */}
          <div className="relative flex justify-center">
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br from-teal-200 to-teal-50 rounded-full -z-10" />
            <div className="bg-white p-8 rounded-2xl shadow-lg max-w-xl text-center">
              <p className="text-lg md:text-xl font-semibold text-gray-800">
              To determine if hyperlinking lectures (or not), in weekly online announcements increased student engagement and overall course grade, I{' '}  
              <strong className='text-blue-500'>compiled</strong> and {' '} 
              <strong className='text-blue-500'>cleaned up</strong> an internal dataset to conduct {' '} 
              <strong className='text-blue-500'>multiple comparative analysis</strong> and a {' '} 
              <strong className='text-blue-500'>linear regression model</strong>
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
      d=""                       // will be set by useEffect
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
      <p className='text-black'> <span className='text-blue-500'>Pull Data</span> | Split Hyperlink and Non-Hyperlinked Lectures</p>
    </div>

    <div
      ref={flowBoxes[1]}
      className="col-start-3 row-start-1 bg-white p-1 md:p-6 w-full rounded shadow min-w-0 break-words text-end text-sm md:text-lg font-semibold"
    >
      <p><span className='text-blue-500'>Encrypt</span> and <span  className='text-blue-500'>Deidentify</span> Sensitive Information</p>
    </div>

    <div
      ref={flowBoxes[2]}
      className="col-start-2 row-start-2 bg-white p-1 md:p-6 w-full rounded shadow min-w-0 break-words text-center text-sm md:text-lg font-semibold"
    >
      <p><span  className='text-blue-500'>Repeated Measures t-Test</span> to Compare Hyperlinking Impact</p>
    </div>

    <div
      ref={flowBoxes[3]}
      className="col-start-1 row-start-3 bg-white p-1 md:p-6 w-full rounded shadow min-w-0 break-words text-sm md:text-lg font-semibold"
    >
      <p><span  className='text-blue-500'>Linear Regression:</span> Hyperlink, Engagement, and Grades Relationship</p>
    </div>

    <div
      ref={flowBoxes[4]}
      className="col-start-3 row-start-3 bg-white p-1 md:p-6 w-full rounded shadow min-w-0 break-words font-semibold text-end text-sm md:text-lg"
    >
      <p><span  className='text-blue-500'>Chi-Square Comparison</span> Between Full and Null Model</p>
    </div>
  </div>
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
            Due to the sensitive nature of this data, the actual results of this study cannot be shared online. Instead, this page uses a stand-in mock data set that was analyzed similarly to the real project to highlight the skills needed to complete the study.
          </h2>

          <div className="flex justify-center py-4">
            <div className="w-2/3 h-1 bg-backgroundgrey rounded-full" />
          </div>
        </div>  

{/* ---- Outcomes for Goal #1 ---- */}
{/*----Title----*/}
<section className="max-w-4xl mx-auto  px-6">
  <div className="flex flex-col space-y-8">
      {/* Insight card on top */}
      <div className="w-full mx-auto">
      <p className="text-3xl font-extrabold custom-shadow-white text-[#000000] text-center">
          Hyperlinking video lectures to weekly announcements increased engagement
      </p>
      </div>
  </div>
  </section>


{/*----Outcomes----*/}
  <section className="max-w-4xl mx-auto px-6 py-16">
    <div className="flex flex-col md:flex-row items-start md:items-center md:space-x-12 space-y-8 md:space-y-0">
      {/* Left column: title + result card */}
    <div className="flex flex-col items-start space-y-4 md:w-1/2">
      <h3 className="text-2xl font-extrabold text-backgroundred">Goal #1</h3>
      <hr className="w-16 border-backgroundgrey border-[2 px]" />
      <div className="bg-white p-6 rounded-2xl shadow-lg w-full">
        <p className="text-lg font-semibold text-custom-shadow-sm text-gray-800">{goalTexts[0]}</p>
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
            {statsSets[statsIndex].data.map(item => (
              <div key={item.label}>
                {/* only this <p> will animate */}
                <p className="anim text-3xl font-bold">{item.value}</p>
                <div className="border-t-2 border-gray-300 my-2"></div>
                {/* label stays static */}
                <p className="text-gray-600 font-semibold">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
    {/* line page break */}
  <div className="flex justify-center mt-6 mb-8 py-4">
    <div className="w-full h-1 bg-backgroundgrey rounded-full" />
  </div>
</section>

{/* ---- Outcomes for Goal #2 ---- */}
{/*----Title----*/}
<section className="max-w-4xl mx-auto px-6">
  <div className="flex flex-col space-y-8">
      {/* Insight card on top */}
      <div className="w-full mx-auto">
      <p className="text-3xl font-extrabold custom-shadow-white text-[#000000] text-center">
          The linear model showed that engagement and final grades were linked
      </p>
      </div>
  </div>
</section>
{/*----Outcomes----*/}
<section className="max-w-4xl mx-auto px-6 py-16">
  <div className="flex flex-col md:flex-row items-start md:items-center md:space-x-12 space-y-8 md:space-y-0">
    {/* Left column: title + result card */}
    <div className="flex flex-col items-start space-y-4 md:w-1/2">
      <h3 className="text-2xl font-extrabold text-backgroundred">Goal #2</h3>
      <hr className="w-16 border-backgroundgrey border-[2px]" />
      <div className="bg-white p-6 rounded-2xl shadow-lg w-full">
        <p className="text-lg font-semibold text-custom-shadow-sm text-gray-800">{goalTexts[1]}</p>
      </div>
    </div>

    {/* Right column: quote card */}
    <div className="md:w-1/2 flex justify-center">
      <div className="bg-white p-6 rounded-2xl shadow-lg w-full mb-4">
        <p className="text-lg font-semibold text-gray-900 ">
          The linear regression model, which included grades, engagement metrics (e.g., number of views, percentage completed, average time completed, load count, etc.), and hyperlink-state, out performed a null model with no predictors
        </p>
      </div>
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
          <span className='text-xl md:text-2xl text-black text-semibold'>
          Viewing a lecture increased final grade ~7 points per lecture
          </span>
        </p>
        <p className="flex items-center ">
          <FaArrowUp className="mr-2 w-6 h-6 text-green-600"/>
          <span className='text-xl md:text-2xl  text-black text-semibold'>
          Subsequent viewings of lectures increased final grade by ~2 points
          </span>
        </p>
        <p className="flex items-center ">
          <FaArrowDown className="mr-2 w-7 h-7 text-red-600"/>
          <span className='text-xl md:text-2xl text-black text-semibold' >
          Regardless of viewing, loading a lecture more often decreased final grade by ~2 points
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
{/*----Title----*/}
<section className="max-w-4xl mx-auto px-6">
  <div className="flex flex-col space-y-8">
      {/* Insight card on top */}
      <div className="w-full mx-auto">
      <p className="text-3xl font-extrabold custom-shadow-white text-[#000000] text-center">
          Hyperlinking lectures to weekly announcement did not increase or decrease student grades
      </p>
      </div>
  </div>
</section>
{/*----Outcomes----*/}
<section className="max-w-4xl mx-auto px-6 py-16">
  <div className="flex flex-col md:flex-row items-start md:items-center md:space-x-12 space-y-8 md:space-y-0">
    {/* Left column: title + result card */}
    <div className="flex flex-col items-start space-y-4 md:w-1/2">
      <h3 className="text-2xl font-extrabold text-backgroundred">Goal #3</h3>
      <hr className="w-16 border-backgroundgrey border-[2px]" />
      <div className="bg-white p-6 rounded-2xl shadow-lg w-full">
        <p className="text-lg font-semibold text-custom-shadow-sm text-gray-800">{goalTexts[2]}</p>
      </div>
    </div>

    {/* Right column: quote card */}
    <div className="md:w-1/2 flex justify-center">
      <div className="bg-white p-6 rounded-2xl shadow-lg w-full mb-4">
        <p className="text-lg font-semibold text-gray-900 ">
          Hyperlinking lectures in weekly announcements did not directly relate to student grades. Individual differences with engagement among students better accounted for grades
        </p>
      </div>
    </div>
  </div>
        {/* line page break */}
  <div className="flex justify-center mt-6 mb-8 py-4">
    <div className="w-full h-1 bg-backgroundgrey rounded-full" />
  </div>
</section>


{/* Take Aways */}
<section>
  <div className="w-full mx-auto px-6 py-8">
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
    <div className="flex flex-col items-center md:items-start space-y-4 md:w-1/2">
      <h3 className="text-2xl font-extrabold text-backgroundred">Primary Considerations</h3>
      <hr className="w-16 border-backgroundgrey border-[2px]" />
      <div className="bg-white p-6 rounded-2xl shadow-lg w-full">
        <p className="text-lg font-semibold text-custom-shadow-sm text-gray-800">Hyperlinking increases student engagement with online classroom lectures and may indirectly lead to better classroom performance</p>
      </div>
    </div>

    {/* Right column: quote card */}
    <div className="flex flex-col items-center md:items-end space-y-4 md:w-1/2">
      <h3 className="text-2xl font-extrabold text-backgroundred">Secondary Considerations</h3>
      <hr className="w-16 border-backgroundgrey border-[2px]" />
      <div className="bg-white p-6 rounded-2xl shadow-lg w-full">
        <p className="text-lg font-semibold text-start md:text-end text-custom-shadow-sm text-gray-800">Improve early alerts or provide directed feedback for students with a high number of lectures loaded as they may be struggling with engagement</p>
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
        Professors should consider <span className='text-[#f28e0b]'>hyperlinking online lectures</span> in weekly announcements to <span className='text-[#f28e0b]'>increase engagement,</span> specifically for <span className='text-[#f28e0b]'>classes with expected lower engagement</span> metrics due to... 
      </p>
      </div>
    {/* linear regression models */}
    <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
      <p className="text-2xl font-semibold text-center text-gray-700">
        Online classrooms
      </p>
      <p className="text-2xl font-semibold text-center text-gray-700">
        Large number of students
      </p>
      <p className="text-2xl font-semibold text-center text-gray-700">
        Difficult course material
      </p>
      <p className="text-2xl font-semibold text-center text-gray-700">
        High quantity of lectures
      </p>
    </div>
  </div>
</section>


  </div>
  );


}

export default HyperlinkPage;

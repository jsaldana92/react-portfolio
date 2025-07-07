// src/components/GTAGradingPage.jsx
import React, { useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { gsap } from 'gsap';
import avgGraphImg from '../images/hyperlinkstudy/avgGraph.png';
import speedImg from '../images/seehb/speedgraph.png';
import seehbGHome     from '../images/seehb/seehbGHome.png';
import seehbGSchedule from '../images/seehb/seehbGSchedule.png';
import seehbGMedia    from '../images/seehb/seehbGMedia.png';
import seehbRHome     from '../images/seehb/seehbRHome.png';
import seehbRSchedule from '../images/seehb/seehbRSchedule.png';
import seehbRMedia    from '../images/seehb/seehbRMedia.png';


export function GTAGradingPage() {
  const { pathname } = useLocation();

  // lightbox state
  const [selectedImage, setSelectedImage] = useState(null);

  // which goals have been “flipped”
  const [revealed, setRevealed] = useState([false, false, false]);
  // refs for each goal card
  const cardRefs = [useRef(null), useRef(null), useRef(null)];
  const goalTexts = ['Does Hyperlinking Increase Lecture Engagement?', 'Does Hyperlinking Increase Grades?', 'Does Increase Engagement Increase Grades?'];

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
            <div className="flex space-x-6">
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
                  className={`relative font-semibold p-14 rounded-2xl shadow-lg max-w-md text-center cursor-pointer overflow-hidden ${revealed[i] ? 'bg-white custom-shadow-sm text-gray-800' : 'bg-blue-950/80 text-white'}`}
                >
                  <span
                    className={`block transition-opacity duration-300 ${revealed[i] ? 'opacity-0' : 'opacity-100'}`}>
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
            Results from the analysis of 71 students in an online asynchrnous class during one semester at a higher-education institution
          </h2>

          <div className="flex justify-center py-4">
            <div className="w-2/3 h-1 bg-gradient-to-r from-blue-500 to-teal-400 rounded-full" />
          </div>
        </div>
         
      {/* ---- Outcomes for Goal #1 ---- */}
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

          {/* Right column: stats card */}
          <div className="md:w-1/2 flex justify-center">
            <div className="bg-white p-6 rounded-2xl shadow-lg w-full">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Total Views per Lecture</h4>
              <div className="grid grid-cols-2 gap-8 text-center">
                <div>
                  <p className="text-3xl font-bold">85</p>
                  <div className="border-t-2 border-gray-300 my-2"></div>
                  <p className="text-gray-600 font-semibold">Hyperlinked</p>
                </div>
                <div>
                  <p className="text-3xl font-bold">62</p>
                  <div className="border-t-2 border-gray-300 my-2"></div>
                  <p className="text-gray-600 font-semibold">Not Hyperlinked</p>
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
            <p className="text-4xl font-extrabold custom-shadow-white text-[#000000] text-center">
                When lectures were hyperlinked inside of weekly announcements, students watched them more often
            </p>
            </div>
            {/* Illustration below */}
            <div className="flex justify-center">
            <img
              src={avgGraphImg}
              alt="Increased Interaction Likelihood"
              className="bg-white p-6 max-w-full h-auto rounded-lg shadow-md cursor-pointer transition-transform duration-200 hover:scale-105"
              onClick={() => setSelectedImage(avgGraphImg)}
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
            <h3 className="text-2xl font-extrabold text-backgroundred">Goal #2</h3>
            <hr className="w-16 border-backgroundgrey border-[2px]" />
            <div className="bg-white p-6 rounded-2xl shadow-lg w-full">
              <p className="text-lg font-semibold text-custom-shadow-sm text-gray-800">{goalTexts[1]}</p>
            </div>
          </div>

          {/* Right column: quote card */}
          <div className="md:w-1/2 flex justify-center">
            <div className="bg-white p-6 rounded-2xl shadow-lg w-full mb-4">
              <p className="text-lg font-semibold italic text-gray-900 ">
                "I feel like I know where I am suppose to go... I would definitely consider using it in future, specially over the printed out schedules."
              </p>
              <p className="text-md text-right italic text-gray-900">- previous attendee interviewed</p>
            </div>
          </div>
        </div>
      </section>
      {/* ---- Additional Insight for Goal 2 (stacked) ---- */}
        <section className="max-w-4xl mx-auto px-6">
        <div className="flex flex-col space-y-8">
            {/* Insight card on top */}
            <div className="w-full mx-auto mb-8">
            <p className="text-4xl font-extrabold custom-shadow-white text-[#000000] text-center">
                Consistent layouts, using a single-page-app website, and incorporating animations increased accessibility to features and information. 
            </p>
            </div>
            {/* Illustration below */}
            <div className="flex justify-center">
             <img
               src={speedImg}
               alt="Faster Navigation Speed"
               className="bg-white p-6 max-w-full h-auto rounded-lg shadow-md cursor-pointer transition-transform duration-200 hover:scale-105"
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
            <h3 className="text-2xl font-extrabold text-backgroundred">Goal #3</h3>
            <hr className="w-16 border-backgroundgrey border-[2px]" />
            <div className="bg-white p-6 rounded-2xl shadow-lg w-full">
              <p className="text-lg font-semibold text-custom-shadow-sm text-gray-800">{goalTexts[2]}</p>
            </div>
          </div>

          {/* Right column: quote card */}
          <div className="md:w-1/2 flex justify-center">
            <div className="bg-white p-6 rounded-2xl shadow-lg w-full mb-4">
              <p className="text-lg font-semibold italic text-gray-900 ">
                "The revamped website looks great! Can't wait to send it out to others who have been asking for a link."
              </p>
              <p className="text-md text-right italic text-gray-900">- committee member</p>
            </div>
          </div>
        </div>
      </section>
      {/* ---- Website Previews ---- */}
        <section className="w-full max-w-4xl mx-auto px-6 py-16">
        {/* Intro card */}
        <div className="w-full mx-auto mb-8">
            <p className="text-4xl font-extrabold custom-shadow-white text-[#000000] text-center">
            See the improvements for yourself!
            </p>
        </div>

        {/* React Site row */}
        <div className='text-start p-6'>
            <h1 className="text-2xl font-extrabold">
            <span className="bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">
              Research Based React
            </span>{' '}
             Website
          </h1>

            <section className="flex justify-start">
            <div className="block w-3/4 h-[4px] bg-backgroundgrey "></div>
            </section>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6  mb-12">
            {[
            { src: seehbRHome,     href: 'https://www.seehb.org/',           label: 'Home'     },
            { src: seehbRSchedule, href: 'https://www.seehb.org/#/schedule', label: 'Schedule' },
            { src: seehbRMedia,    href: 'https://www.seehb.org/#/media',    label: 'Media'    },
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

        {/* Google Sites row */}
        <div className='text-end p-6'>
            <h1 className="text-2xl font-extrabold">
            <span className="bg-gradient-to-r from-[#b55f5f] to-[#e3a730] bg-clip-text text-transparent">
              Old Google Sites
            </span>{' '}
             Website
          </h1>

            <section className="flex justify-end">
            <div className="block w-3/4 h-[4px] bg-backgroundgrey "></div>
            </section>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
            { src: seehbGHome,    href: 'https://sites.google.com/view/seehbconference/',     label: 'Home'     },
            { src: seehbGSchedule, href: 'https://sites.google.com/view/seehbconference/schedule', label: 'Schedule' },
            { src: seehbGMedia,    href: 'https://sites.google.com/view/seehbconference/media',    label: 'Media'    },
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
              onContextMenu={e => e.preventDefault()}
            />
          </div>
        </div>
      )}


    </div>
  );


}

export default GTAGradingPage;

// src/components/SEEHBpage.jsx
import React, { useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { gsap } from 'gsap';
import SEEHBtimeline from './SEEHBtimeline';
import likelyToImg from '../images/seehb/likelyto.png';
import speedImg from '../images/seehb/speedgraph.png';
import seehbGHome     from '../images/seehb/seehbGHome.png';
import seehbGSchedule from '../images/seehb/seehbGSchedule.png';
import seehbGMedia    from '../images/seehb/seehbGMedia.png';
import seehbRHome     from '../images/seehb/seehbRHome.png';
import seehbRSchedule from '../images/seehb/seehbRSchedule.png';
import seehbRMedia    from '../images/seehb/seehbRMedia.png';


export function SEEHBpage() {
  const { pathname } = useLocation();

  // which goals have been “flipped”
  const [revealed, setRevealed] = useState([false, false, false]);
  // refs for each goal card
  const cardRefs = [useRef(null), useRef(null), useRef(null)];
  const goalTexts = ['Decrease User Frustration', 'Improve Navigation', 'Modernize'];
  const outcomesTexts = ['Improved Likeliness to Use', 'Faster Navigation Speed', 'Updated UI with Consistent Layout'];

  return (
    <div className="w-full">

      {/* ---- Intro squares ---- */}
      <section className="max-w-4xl mx-auto py-16 px-6 space-y-16">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-extrabold">
            <span className="bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">
              Improving Navigation, Enjoyment, and Impact
            </span>{' '}
            on the SEEHB Conference Website
          </h1>
          <p className="text-xl text-gray-700 italic">
            Led UX research to improve conference site usability through user interviews and click-tracking.
          </p>
        </div>

        {/* Cards */}
        <div className="space-y-12">
          {/* Card 1: Left-aligned */}
          <div className="relative flex justify-start">
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-gradient-to-br from-blue-200 to-blue-50 rounded-full -z-10" />
            <div className="bg-white p-8 rounded-2xl shadow-lg max-w-xl">
                <p className="text-lg md:text-xl text-gray-800">
                The South Eastern Evolution and Human Behavior (SEEHB) group needed a revamped website with a{' '}
                <strong className='text-blue-500'>modernize the layout</strong> to{' '}
                <strong className='text-blue-500'>increase attendee interaction</strong> and {' '}
                <strong className='text-blue-500'>decrease existing issues</strong>.
                </p>
            </div>
            </div>

          {/* Card 2: Right-aligned */}
          <div className="relative flex justify-end">
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br from-teal-200 to-teal-50 rounded-full -z-10" />
            <div className="bg-white p-8 rounded-2xl shadow-lg max-w-xl text-right">
              <p className="text-lg md:text-xl text-gray-800">
                I led the UX research and front-end development.
              </p>
            </div>
          </div>

          {/* Card 3: Centered briefing */}
          <div className="flex justify-center">
            <div className="w-full mx-auto">
            <p className="text-4xl font-extrabold custom-shadow-white text-[#000000] text-center">
                Client Briefing
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
                  className={`relative font-semibold p-8 rounded-2xl shadow-lg max-w-md text-center cursor-pointer overflow-hidden ${revealed[i] ? 'bg-white custom-shadow-sm text-gray-800' : 'bg-blue-950/80 text-white'}`}
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

      {/* ---- GSAP timeline component ---- */}
      <SEEHBtimeline key={pathname} />


      {/* Intro card and results title */}
        <div className="w-full mx-auto px-6 py-8">
          <h2 className="text-4xl font-extrabold text-gray-900 text-center">
            Results from interviews with 5 previous conference attendees
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
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Average Reported Bugs</h4>
              <div className="grid grid-cols-2 gap-8 text-center">
                <div>
                  <p className="text-3xl font-bold">0</p>
                  <div className="border-t-2 border-gray-300 my-2"></div>
                  <p className="text-gray-600 font-semibold">React</p>
                </div>
                <div>
                  <p className="text-3xl font-bold">4</p>
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
            <p className="text-4xl font-extrabold custom-shadow-white text-[#000000] text-center">
                Decreasing the number of bugs (deadlinks, misdirects, incorrect information) increased the likeliness to interact with the website.
            </p>
            </div>
            {/* Illustration below */}
            <div className="flex justify-center">
            <img
                src={likelyToImg}
                alt="Increased Interaction Likelihood"
                className="bg-white p-6 max-w-full h-auto rounded-lg shadow-md"
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
                alt="Increased Interaction Likelihood"
                className="bg-white p-6 max-w-full h-auto rounded-lg shadow-md"
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
        <section className="max-w-4xl mx-auto px-6">
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


    </div>
  );
}

export default SEEHBpage;

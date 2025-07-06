// src/components/SEEHBpage.jsx
import React, { useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { gsap } from 'gsap';
import SEEHBtimeline from './SEEHBtimeline';

export function SEEHBpage() {
  const { pathname } = useLocation();

  // which goals have been “flipped”
  const [revealed, setRevealed] = useState([false, false, false]);
  // refs for each goal card
  const cardRefs = [useRef(null), useRef(null), useRef(null)];
  const goalTexts = ['Easy RSVP', 'Improve Navigation', 'Modernize'];

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
            Led UX research to improve conference site usability through committee and user interviews, click-tracking, and A/B testing.
          </p>
        </div>

        {/* Cards */}
        <div className="space-y-12">
          {/* Card 1: Left-aligned */}
          <div className="relative flex justify-start">
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-gradient-to-br from-blue-200 to-blue-50 rounded-full -z-10" />
            <div className="bg-white p-8 rounded-2xl shadow-lg max-w-xl">
              <p className="text-lg md:text-xl text-gray-800">
                The South Eastern Evolution and Human Behavior (SEEHB) group needed a revamped website to improve navigation, conference impact, information discovery, and media sharing for their attendees.
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
            <div className="bg-white p-8 rounded-2xl shadow-lg max-w-md text-center">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">Client Briefing</h2>
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
                  className={`relative p-8 rounded-2xl shadow-lg max-w-md text-center cursor-pointer overflow-hidden ${revealed[i] ? 'bg-white text-gray-800' : 'bg-blue-950/80 text-white'}`}
                >
                  <span
                    className={`block transition-opacity duration-300 ${revealed[i] ? 'opacity-0' : 'opacity-100'}`}>
                    Goal #{i + 1}
                  </span>
                  <span
                    className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${revealed[i] ? 'opacity-100' : 'opacity-0'}`}>
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

      {/* ---- Delivery square ---- */}
      <section className="py-16 bg-backgroundred">
        <div className="aspect-square w-64 border rounded-lg p-6 shadow-md mx-auto">
          <p className="font-semibold mb-2">Delivery:</p>
          <ul className="list-disc list-inside text-sm">
            <li>Less Bloat</li>
            <li>Easy Navigation</li>
            <li>Modern Layout and Animation</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default SEEHBpage;

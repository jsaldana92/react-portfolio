// src/components/SEEHBpage.jsx
import React from 'react';
import SEEHBtimeline from './SEEHBtimeline';

export function SEEHBpage() {
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
      {/* Decorative blob */}
      <div className="absolute -top-8 -left-8 w-32 h-32 bg-gradient-to-br from-blue-200 to-blue-50 rounded-full -z-10" />
      <div className="bg-white p-8 rounded-2xl shadow-lg max-w-xl">
        <p className="text-lg md:text-xl text-gray-800">
          The South Eastern Evolution and Human Behavior (SEEHB) group needed a revamped website to improve navigation, conference impact, information discovery, and media sharing for their attendees.
        </p>
      </div>
    </div>

    {/* Card 2: Right-aligned */}
    <div className="relative flex justify-end">
      {/* Decorative blob */}
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
        <ul className="list-disc list-inside text-lg text-gray-700 space-y-1">
          <li>Easy RSVP</li>
          <li>Improve Navigation</li>
          <li>Be Modern</li>
        </ul>
      </div>
    </div>
  </div>
</section>


      {/* ---- GSAP timeline component ---- */}
      <SEEHBtimeline />

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

// src/components/BubblesSection.jsx

import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const reviews = [
  {
    text: "SREB - State Doctoral Fellow.",
    author: "Southern Regional Education Board",
    role: "2020-2023",
  },
  {
    text: "Rumbuagh Grant-In-Aid Recipient",
    author: "Duane Rumbaugh Fellowship",
    role: "2024",
  },
  {
    text: "Jhonatan played a huge role in my success, and I’m incredibly grateful to have learned from him. Anyone who gets the chance to work with or for him is truly lucky.",
    author: "Kenzey Ahmed",
    role: "Advised Mentee",
  },
  {
    text: "A cognitive scientist with real-world impact.",
    author: "Rachel Kim",
    role: "PhD Candidate, Stanford",
  },
  {
    text: "Tools built with purpose and empathy.",
    author: "Michael Osei",
    role: "UX Strategist, IBM",
  },
  {
    text: "Elegant, practical, and deeply informed.",
    author: "Dr. Priya Natarajan",
    role: "Human Factors Lab, NASA",
  },
  {
    text: "The future of academic tool design.",
    author: "Samantha Yoon",
    role: "Educational Designer, edX",
  },
  {
    text: "Highly recommend for any research team.",
    author: "Dr. Omar Syed",
    role: "Neuropsychologist, UBC",
  },
];

const BubblesSection = () => {
  useGSAP(() => {
    const track = gsap.utils.toArray(".scrolling-track")[0];

    const tween = gsap.to(track, {
      xPercent: -50,
      duration: 100,
      ease: "none",
      repeat: -1,
    });

    return () => tween.kill();
  }, []);

  return (
    <section className="relative w-screen bg-backgroundgrey py-12 border-t border-white/10 overflow-hidden -mx-6">
      <h2 className="text-3xl font-bold text-white text-center mb-8">
        Awards and Comments
      </h2>

      <div className="relative overflow-hidden w-full">
        {/* Left and right gradient overlays */}
        <div className="absolute top-0 left-0 w-12 h-full bg-gradient-to-r from-backgroundgrey to-transparent z-20 pointer-events-none" />
        <div className="absolute top-0 right-0 w-12 h-full bg-gradient-to-l from-backgroundgrey to-transparent z-20 pointer-events-none" />

        {/* Scrolling content */}
        <div
          className="scrolling-track flex w-max gap-10 will-change-transform"
          onMouseEnter={() => gsap.globalTimeline.pause()}
          onMouseLeave={() => gsap.globalTimeline.resume()}
        >
          {[...reviews, ...reviews].map((review, index) => (
            <div
              key={index}
              className="relative inline-block min-w-[35rem] min-h-[10rem] max-w-[50rem] text-white border border-white/20 bg-gradient-to-r from-white/10 via-black/40 to-white/10 px-6 py-4 rounded-xl shadow-md"
            >
              <p className="text-xl italic pr-16">"{review.text}"</p>
              <p className="text-md text-blue-300 absolute bottom-3 right-4">
                – {review.author}, {review.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BubblesSection;

// src/components/PersonasSection.jsx
import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import femStudentOnline from '../images/fem_student_online.png';
import malStudentStress from '../images/mal_student_stress.png';
import femScientistBio from '../images/fem_scientist_bio.png';
import malScientist from '../images/male_scientist.png';

const snippets = {
  FemStudentOnline: [
    'Female',
    'Age: 28',
    'PhD Graduate Student',
    'Received Formal Training',
    'Monthly Check-Ins with Faculty Supervisor',
    'Primarily Teaches Online',
    'AI Usage is the Biggest Issue in my Class',
  ],
  MalStudentStress: [
    'Male',
    'Age: 31',
    'Masters Graduate Student',
    'Received Formal Training',
    'Weekly Check-Ins with Faculty Supervisor',
    'Primarily Teaches In-Person',
    'Faculty Members Handle Most Classroom Issues',
  ],
  FemScientistBio: [
    'Female',
    'Age: 27',
    'PhD Graduate Student',
    'Spends 1.5 Weekly Hours Collecting Behavioral Data',
    'Wishes App was Easier to Edit',
    '"An Undo Button Would Help So Much!"',
    'Interested in more Species',
  ],
  MaleScientist: [
    'Male',
    'Age: 26',
    'PhD Graduate Student',
    'Spends 2 Weekly Hours Collecting Data Files',
    'Expressed Concern Over the Amount of Time Lost Pulling Data',
    '"If it is Not Noticeably Faster, I Will Not Change my Behavior"',
    'I Do Not Like Using File Explorer',
  ],
};


const logos = [
  { name: 'FemStudentOnline', src: femStudentOnline },
  { name: 'MalStudentStress', src: malStudentStress },
  { name: 'FemScientistBio', src: femScientistBio },
  { name: 'MaleScientist', src: malScientist },
];




const PersonasSections = ({ isHovered }) => {
  const [current, setCurrent] = useState(0);
  const logoRef = useRef();
  const snippetRefs = useRef([]);
  const intervalRef = useRef(null);

    const animateToNext = () => {
        const tl = gsap.timeline({
            onComplete: () => {
            setCurrent((prev) => (prev + 1) % logos.length);
            },
        });

        tl.to([logoRef.current, ...snippetRefs.current], {
            x: '-100%',
            opacity: 0,
            duration: 0.6,
            ease: 'power2.inOut',
        });
    };

    const startAnimation = () => {
        if (intervalRef.current) return;

        // Fire immediately
        animateToNext();

        // Then run on interval
        intervalRef.current = setInterval(animateToNext, 2500);
    };


  const stopAnimation = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  useEffect(() => {
    if (isHovered) startAnimation();
    else stopAnimation();

    return () => stopAnimation(); // cleanup on unmount or unhover
  }, [isHovered]);

    useEffect(() => {
        gsap.set([logoRef.current, ...snippetRefs.current], {
            x: (i) => (i % 2 === 0 ? '100%' : '-100%'),
            opacity: 0,
        });

        gsap.to([logoRef.current, ...snippetRefs.current], {
            x: '0%',
            opacity: 1,
            duration: 0.6,
            ease: 'power2.out',
            stagger: 0.05, // small delay between each line
        });
    }, [current]);

  const { name, src } = logos[current];

  return (
    <div className="relative opacity-65 w-full h-full flex items-center justify-center overflow-hidden select-none pointer-events-none blur-[0.3px]">
      <img
        ref={logoRef}
        src={src}
        alt={name}
        className="absolute bottom-4 right-4 w-55 md:w-60 z-20 transition-transform duration-500 opacity-70"
      />
    <div className="absolute inset-0 z-10 grid place-items-center font-mono text-white/60 opacity-40 pointer-events-none select-none blur-[1.5px]">
        <div className="flex flex-col items-center space-y-3 text-sm md:text-md">
            {snippets[name].map((line, idx) => (
                <div
                key={idx}
                ref={(el) => (snippetRefs.current[idx] = el)}
                className="transition-all text-center"
                >
                    {line}
                </div>
            ))}
        </div>
    </div>
    </div>
  );
};

export default PersonasSections;

// src/components/CodingLanguages.jsx
import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import reactLogo from '../images/reactlogo.svg';
import pythonLogo from '../images/pythonlogo.svg';
import rLogo from '../images/rlogo.svg';
import flutterLogo from '../images/flutterlogo.svg';

const snippets = {
  React: [
    'useEffect(() => {}, []);',
    'return <div>Hello</div>;',
    'const [state, setState] = useState();',
    '<Component prop={value} />',
    'import { useState } from "react";',
    'useRef(null);',
    '<div className="className">Content</div>',
  ],
  Python: [
    'def my_func():',
    'print("Hello, world!")',
    'for i in range(10):',
    'if x > 5:',
    'return x * 2',
    'import pandas as pd',
    'class Dog:',
  ],
  R: [
    'lm(y ~ x, data = df)',
    'summary(model)',
    'df <- read.csv("file.csv")',
    'ggplot(df, aes(x, y)) + geom_point()',
    'filter(df, value > 10)',
    'mutate(df, z = x + y)',
    'install.packages("tidyverse")',
  ],
  Flutter: [
    'Scaffold(body: Center(...))',
    'setState(() { ... });',
    'Text("Hello")',
    'ListView.builder(...)',
    'GestureDetector(onTap: ...)',
    'FutureBuilder(future: ...)',
    'Container(color: Colors.blue)',
  ],
};


const logos = [
  { name: 'React', src: reactLogo },
  { name: 'Python', src: pythonLogo },
  { name: 'R', src: rLogo },
  { name: 'Flutter', src: flutterLogo },
];




const CodingLanguages = ({ isHovered }) => {
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
    <div className="relative opacity-65 w-full h-full flex items-center justify-center overflow-hidden select-none pointer-events-none blur-[0.5px]">
      <img
        ref={logoRef}
        src={src}
        alt={name}
        className="absolute w-40 md:w-36 z-20 transition-all duration-500"
      />
    <div className="absolute inset-0 z-10 grid place-items-center font-mono text-white/60 opacity-40 pointer-events-none select-none blur-[1.5px]">
        <div className="flex flex-col items-center space-y-3 text-md md:text-md">
            {snippets[name].map((line, idx) => (
                <div
                key={idx}
                ref={(el) => (snippetRefs.current[idx] = el)}
                className={`transition-all ${idx % 2 === 0 ? 'ml-3' : 'mr-3'}`}
                >
                    {line}
                </div>
            ))}
        </div>
    </div>
    </div>
  );
};

export default CodingLanguages;

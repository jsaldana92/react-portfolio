// src/App.jsx

import { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TopNav from './components/TopNav';
import { TfiAndroid } from "react-icons/tfi";
import { HiUserGroup } from "react-icons/hi2";
import { BsFillClipboard2DataFill } from "react-icons/bs";
import { FiTrendingUp } from "react-icons/fi";
import profileImg from './images/profile.png';
import ProjectCards from './components/ProjectCard';
//import BentoSection from './components/BentoSection';
import './index.css';
import CardSorting from './components/CardSorting';
import BubblesSection from './components/BubblesSection'
import { Suspense, lazy } from 'react';

const BentoSection = lazy(() => import('./components/BentoSection'));


gsap.registerPlugin(ScrollTrigger);

function App() {
  const [currentPage, setCurrentPage] = useState('Home');

  const aboutRef = useRef();
  const aboutTextRef = useRef();
  const imgRef = useRef();

  useGSAP(() => {
    if (currentPage !== 'Home') return;

    const ctx = gsap.context(() => {
      gsap.to(aboutTextRef.current, {
        opacity: 1,
        y: 0,
        duration: 2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: aboutTextRef.current,
          start: 'top 80%',
        },
      });

      gsap.to(imgRef.current, {
        opacity: 1,
        y: 0,
        duration: 2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: imgRef.current,
          start: 'top 80%',
        },
      });
    }, aboutRef);

    return () => ctx.revert();
  }, [currentPage]);

  const dynamicWrapperRef = useRef();
  const dynamicTextRef = useRef();

  useGSAP(() => {
    if (currentPage !== 'Home') return;

    const ctx = gsap.context(() => {
      gsap.to(dynamicTextRef.current, {
        opacity: 1,
        y: 0,
        duration: 2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: dynamicTextRef.current,
          start: 'top 80%',
        },
      });
    }, dynamicWrapperRef);

    return () => ctx.revert();
  }, [currentPage]);




  const dynamicWords = [
    <>
      <span className="inline-flex items-center justify-center rounded-full bg-blue-500  w-8 h-8 mr-0">
        <TfiAndroid className="text-green-500 text-2xl" />
      </span>
      <span className="ml-1">apps</span>
    </>, 
    <>
      <span className="inline-flex items-center justify-center rounded-full bg-blue-500  w-8 h-8 mr-0">
        <HiUserGroup className="text-yellow-300 text-2xl" />
      </span>
      <span className="ml-1">communities</span>
    </>, 
    <>
      <span className="inline-flex items-center justify-center rounded-full bg-blue-500 w-8 h-8 mr-0">
        <BsFillClipboard2DataFill className="text-white text-2xl" />
      </span>
      <span className="ml-1">data collection</span>
    </>, 
    <>
      <span className="inline-flex items-center justify-center rounded-full bg-blue-500 w-8 h-8 mr-0">
        <FiTrendingUp className="text-black text-2xl" />
      </span>
      <span className="ml-1">user engagement</span>
    </>];

  function DynamicText() {
    const [index, setIndex] = useState(0);
    const wordRef = useRef();

    // Rotate words
    useEffect(() => {
      const interval = setInterval(() => {
        setIndex((prev) => (prev + 1) % dynamicWords.length);
      }, 2500);
      return () => clearInterval(interval);
    }, []);

    // Animate transition on index change
    useGSAP(() => {
      if (wordRef.current) {
        gsap.fromTo(
          wordRef.current,
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }
        );
      }
    }, [index]);

    return (
      <div className="text-white mt-6 text-2xl leading-snug">
        {/* On small screens: stack lines. On md+: inline */}
        <span className="block md:inline">Bringing research-based progress to</span>
        <span className="block md:inline md:ml-3 font-semibold italic text-blue-400">
          <span ref={wordRef} className="inline-flex items-center gap-2">{dynamicWords[index]}</span>
        </span>
      </div>
    );
  }

  

  return (
    
    <div className="min-h-screen bg-black text-gray-800">
      <TopNav currentPage={currentPage} setCurrentPage={setCurrentPage} class = 'align-center'/>

      <main className="p-6">
        {currentPage === 'Home' && (
          <section className="space-y-2">
            {/* Centered Intro Block */}
            <div className="text-center space-y-1">
              <h1 className="text-4xl text-white font-bold">Jhonatan M. Saldaña Santisteban</h1>
              <p className="text-yellow-700 italic text-lg">
                UX Research Intern and Cognitive Psychologist, PhD Candidate
              </p>
            </div>

            {/* Main Body Content */}
            <section ref={aboutRef} className="relative w-screen bg-gradient-to-br from-[#201f1f] via-[#212020] to-backgroundgrey py-10 -mx-6 px-6 border-t border-b border-white/3 overflow-hidden">
              <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 max-w-5xl mx-auto text-white text-xl">
                <div ref={aboutTextRef} className="custom-shadow flex-1 space-y-4 text-justify opacity-0 translate-y-6 will-change-transform">
                  <p>
                    As a UX researcher, I focus on aligning project goals with user needs by selecting effective, context-driven methodologies. I've applied this approach to evaluate grading systems, course engagement, and community development at Georgia State University.
                  </p>
                  <p>
                    I bring this same mindset to building tools that have streamline data collection and transfer for researchers and also to my academic work which explores the evolution of heuristics to understand the roots of irrational decision-making and sequence preferences.
                  </p>
                </div>

                <div ref={imgRef}  className="relative z-10 flex-1 flex justify-center items-center opacity-0 translate-y-6 will-change-transform">
                  <img
                    src={profileImg}
                    alt="Jhonatan"
                    className="w-100 rounded-xl shadow-lg shadow-white/20"
                  />
                </div>
              </div>  
                {/* Light beams behind content */}
              <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute w-[10%] h-full bg-[#f1f1f1] opacity-8 blur-3xl rotate-[145deg] top-0 left-[-10%]"></div>
                <div className="absolute w-[2%] h-full bg-[#f1f1f1] opacity-10 blur-2xl rotate-[125deg] top-0 left-[30%]"></div>
                <div className="absolute w-[6.66%] h-full bg-[#f1f1f1] opacity-5 blur-2xl rotate-[20deg] top-0 left-[85%]"></div>
              </div>
            </section>

            <section ref={dynamicWrapperRef} className="mt-16 text-left max-w-7xl mx-auto">
              <div ref={dynamicTextRef} className="opacity-0 translate-y-6 will-change-transform">
                <DynamicText/> 
              </div>
            </section>

            {/*Carousel Section */}
            <section className="mt-10">
              <ProjectCards />
            </section>
            

            {/* Bento Section */}
            <section className="mt-10">
              <Suspense fallback={<div className="text-white text-center">Loading projects...</div>}>
                <BentoSection />
              </Suspense>
            </section>

            
            
          

          </section>
        )}


        {currentPage !== 'Home' && (
          <div className="bg-pulse-animated text-center text-2xl font-medium mt-20">Welcome to {currentPage}!</div>
        )}
      </main>
    </div>
  );
}

export default App;

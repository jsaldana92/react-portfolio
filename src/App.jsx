// src/App.jsx

import { useRef, useEffect, useState } from 'react';
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
import { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
const GTAGradingPage = lazy(() => import('./components/GTAGradingPage'));
const HyperlinkPage = lazy(() => import('./components/HyperlinkPage'));
const DataPullerPage = lazy(() => import('./components/DataPullerPage'));



const BentoSection = lazy(() => import('./components/BentoSection'));
const SEEHBpage    = lazy(() => import('./components/SEEHBpage')); 


gsap.registerPlugin(ScrollTrigger);

function App() {

  const aboutRef = useRef();
  const aboutTextRef = useRef();
  const imgRef = useRef();
  const location = useLocation();

  useGSAP(() => {
    // only run on Home route (`#/`)
    if (location.pathname !== '/') return;

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
  }, [ location.pathname ]);

  const dynamicWrapperRef = useRef();
  const dynamicTextRef = useRef();

  useGSAP(() => {
  // only run on Home route (`#/`)
  if (location.pathname !== '/') return;

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
  }, [ location.pathname ]);




  const dynamicWords = [
    <>
      <span className="inline-flex items-center justify-center rounded-full bg-[#158fcc]  w-8 h-8 mr-0">
        <TfiAndroid className="text-green-500 text-2xl" />
      </span>
      <span className="ml-1  custom-shadow-grey">apps</span>
    </>, 
    <>
      <span className="inline-flex items-center justify-center rounded-full bg-[#158fcc]  w-8 h-8 mr-0">
        <HiUserGroup className="text-yellow-300 text-2xl" />
      </span>
      <span className="ml-1 custom-shadow-grey">communities</span>
    </>, 
    <>
      <span className="inline-flex items-center justify-center rounded-full bg-[#158fcc] w-8 h-8 mr-0">
        <BsFillClipboard2DataFill className="text-white text-2xl" />
      </span>
      <span className="ml-1 custom-shadow-grey">data collection</span>
    </>, 
    <>
      <span className="inline-flex items-center justify-center rounded-full bg-[#158fcc] w-8 h-8 mr-0">
        <FiTrendingUp className="text-black text-2xl" />
      </span>
      <span className="ml-1  custom-shadow-grey">user engagement</span>
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
      <div className="text-white text-2xl leading-snug">
        {/* On small screens: stack lines. On md+: inline */}
        <span className="block md:inline custom-shadow-grey">Bringing research-based progress to</span>
        <span className="block md:inline md:ml-3 font-semibold italic text-[#158fcc]">
          <span ref={wordRef} className="inline-flex items-center gap-2">{dynamicWords[index]}</span>
        </span>
      </div>
    );
  }

  

  return (
    <div className="min-h-screen bg-backgroundwhite text-gray-800">
      <TopNav />
      <ScrollToTop /> 

      <main>
        <Routes>
          {/* Home at #/ */}
          <Route
            path="/"
            element={
              <section>
            {/* Centered Intro Block */}
            <div className="text-center py-6">
              <h1 className="text-4xl text-textblack font-bold">Jhonatan M. Saldaña Santisteban</h1>
              <p className="text-yellow-700 italic text-lg font-semibold">
                UX Research Intern and Cognitive Psychologist, PhD Candidate
              </p>
            </div>

            {/* Main Body Content */}
            <section ref={aboutRef} className="relative w-screen bg-backgroundred py-10 px-6 border-t border-b border-white/3 overflow-hidden"> 
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

            </section>

            <section ref={dynamicWrapperRef} className=" w-screen py-10 px-6 text-left bg-backgroundgreen">
              <div className="max-w-7xl mx-auto">
                <div ref={dynamicTextRef} className="opacity-0 translate-y-6 will-change-transform">
                  <DynamicText/>
                </div>
              </div>
            </section>

            {/*Carousel Section */}
            <section className="w-screen px-6 bg-backgroundgreen py-12">
              <div className="max-w-7xl mx-auto relative overflow-hidden">
                <ProjectCards />
                {/* Fading overlays */}
                <div className="absolute left-0 top-0 h-full w-4 bg-gradient-to-r from-backgroundgreen to-transparent pointer-events-none z-10" />
                <div className="absolute right-0 top-0 h-full w-4 bg-gradient-to-l from-backgroundgreen to-transparent pointer-events-none z-10" />
              </div>
            </section>
            

            {/* Bento Section */}
            <section className="w-screen px-6 bg-[#2E2E2E] py-12">
              <div className="max-w-7xl mx-auto">
                <Suspense fallback={<div className="text-white text-center">Loading projects...</div>}>
                  <BentoSection />
                </Suspense>
              </div>
            </section>

            
            
          

          </section>
            }
          />

          {/* SEEHB page at #/SEEHB */}
          <Route
            path="/SEEHB"
            element={
              <Suspense fallback={<div className="text-center py-20">Loading…</div>}>
                <SEEHBpage />
              </Suspense>
            }
          />

          {/* GTAGradingExperience page at #/GTAGradingPage */}
          <Route
            path="/GTAGradingExperience"
            element={
              <Suspense fallback={<div className="text-center py-20">Loading…</div>}>
                <GTAGradingPage />
              </Suspense>
            }
          />

          {/* HyperlinkPage page at #/HyperlinkPage */}
          <Route
            path="/HyperlinkEngagement"
            element={
              <Suspense fallback={<div className="text-center py-20">Loading…</div>}>
                <HyperlinkPage />
              </Suspense>
            }
          />

          {/* DataPuller page at #/DataPuller */}
          <Route
            path="/DataPuller"
            element={
              <Suspense fallback={<div className="text-center py-20">Loading…</div>}>
                <DataPullerPage />
              </Suspense>
            }
          />

          {/* Fallback to Home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;

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
import './index.css';

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
          <section className="space-y-0">
            {/* Centered Intro Block */}
            <div className="text-center space-y-1">
              <h1 className="text-4xl text-white font-bold">Jhonatan M. Saldaña Santisteban</h1>
              <p className="text-yellow-700 italic text-lg">
                UX Research Intern and Cognitive Psychologist, PhD Candidate
              </p>
            </div>

            {/* Main Body Content */}
            <section ref={aboutRef} className="w-screen bg-backgroundgrey py-10 -mx-6 px-6">
              <div className="flex flex-col md:flex-row items-center gap-8 max-w-5xl mx-auto text-white text-xl">
                <div ref={aboutTextRef} className="flex-1 space-y-4 text-justify opacity-0 translate-y-6">
                  <p>
                    As a UX researcher, I focus on aligning project goals with user needs by selecting effective, context-driven methodologies. I've applied this approach to evaluate grading systems, course engagement, and community development at Georgia State University.
                  </p>
                  <p>
                    I bring this same mindset to building tools that have streamline data collection and transfer for researchers and also to my academic work which explores the evolution of heuristics to understand the roots of irrational decision-making and sequence preferences.
                  </p>
                </div>

                <div ref={imgRef}  className="flex-1 flex justify-center items-center opacity-0 translate-y-6">
                  <img
                    src={profileImg}
                    alt="Jhonatan"
                    className="w-100 rounded-xl shadow-lg shadow-blue-500/20"
                  />
                </div>
              </div>  
            </section>

            <section ref={dynamicWrapperRef} className="mt-16 text-left max-w-7xl mx-auto">
              <div ref={dynamicTextRef} className="opacity-0 translate-y-6">
                <DynamicText/> 
              </div>
            </section>

            {/* Placeholder for Carousel Section */}
            <section className="mt-10">
              <ProjectCards />
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

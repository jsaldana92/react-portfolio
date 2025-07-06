// src/components/SEEHBtimeline.jsx
import React, { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLocation } from 'react-router-dom';

import dd1 from '../images/seehb/dd1.png';
import dd2 from '../images/seehb/dd2.png';
import dd3 from '../images/seehb/dd3.png';
import dd4 from '../images/seehb/dd4.png';
import dd5 from '../images/seehb/dd5.png';
import dd6 from '../images/seehb/dd6.png';
import dd7 from '../images/seehb/dd7.png';
import dd8 from '../images/seehb/dd8.png';
import dd9 from '../images/seehb/dd9.png';
import dd10 from '../images/seehb/dd10.png';
import dd11 from '../images/seehb/dd11.png';
import dd12 from '../images/seehb/dd12.png';
import ddFinal from '../images/seehb/ddfinal.png';

gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.normalizeScroll(true);

export default function SEEHBtimeline() {
  const { pathname } = useLocation();

  const firstRef = useRef(null);
  const secondRef = useRef(null);
  const finalSectionRef = useRef(null);
  const finalRef = useRef(null);
  const parts1 = Array.from({ length: 6 }, () => useRef(null));
  const parts2 = Array.from({ length: 6 }, () => useRef(null));

  useLayoutEffect(() => {
    // 1) Sync scroll to top
    window.scrollTo(0, 0);
    // 2) Refresh triggers so that pin positions reset
    ScrollTrigger.refresh();

    // 3) Delay building timelines until after scroll reset
    const timeoutId = setTimeout(() => {
      // First diamond
      const tl1 = gsap.timeline({
        scrollTrigger: {
          trigger: firstRef.current,
          start: 'top top',
          end: '+=1000%',
          scrub: 0.5,
          pin: true,
        }
      }).fromTo(
        parts1.map(r => r.current),
        { x: () => -window.innerWidth },
        { x: 0, stagger: 0.8 }
      );

      // Second diamond
      const tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: secondRef.current,
          start: 'top top',
          end: '+=1000%',
          scrub: 0.5,
          pin: true,
        }
      }).fromTo(
        parts2.map(r => r.current),
        { x: () => window.innerWidth },
        { x: 0, stagger: 0.8 }
      );

      // Final assembled image
      const tl3 = gsap.timeline({
        scrollTrigger: {
          trigger: finalSectionRef.current,
          start: 'top center',
          end: '+=50%',
          scrub: 0.5,
          pin: true,
        }
      }).fromTo(
        finalRef.current,
        { y: () => window.innerHeight, opacity: 0 },
        { y: 0, opacity: 1 }
      );

      // Store for cleanup
      timelines = [tl1, tl2, tl3];
    }, 50);

    let timelines = [];
    return () => {
      clearTimeout(timeoutId);
      timelines.forEach(tl => tl.kill());
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, [pathname]);

  const imgStyle =
    'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[700px] h-auto max-h-screen';
  const zClasses = ['z-50', 'z-40', 'z-30', 'z-20', 'z-10', 'z-0'];

  return (
    <div className="bg-backgroundgreen w-full">
      <section ref={firstRef} className="relative w-full h-screen overflow-hidden">
        {[dd1, dd2, dd3, dd4, dd5, dd6].map((src, i) => (
          <img
            key={i}
            ref={parts1[i]}
            src={src}
            alt={`part ${i + 1}`}
            className={`${imgStyle} ${zClasses[i]}`}
          />
        ))}
      </section>

      <section ref={secondRef} className="relative w-full h-screen overflow-hidden">
        {[dd7, dd8, dd9, dd10, dd11, dd12].map((src, i) => (
          <img
            key={i}
            ref={parts2[i]}
            src={src}
            alt={`part ${i + 7}`}
            className={`${imgStyle} ${zClasses[i]}`}
          />
        ))}
      </section>

      <section
        ref={finalSectionRef}
        className="hidden md:flex relative pb-32 w-full h-screen overflow-hidden items-center justify-center"
      >
        <img
          ref={finalRef}
          src={ddFinal}
          alt="full double diamond"
          className="max-w-full max-h-full"
        />
      </section>
    </div>
  );
}

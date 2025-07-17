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

export default function SEEHBtimeline() {
  const { pathname } = useLocation();

  const firstRef = useRef(null);
  const secondRef = useRef(null);
  const finalSectionRef = useRef(null);
  const finalRef = useRef(null);
  const parts1 = Array.from({ length: 6 }, () => useRef(null));
  const parts2 = Array.from({ length: 6 }, () => useRef(null));

  useLayoutEffect(() => {
    let timelines = [];

    const buildTimelines = () => {
      // Reset scroll and triggers
      window.scrollTo(0, 0);
      ScrollTrigger.getAll().forEach(st => st.kill());
      ScrollTrigger.refresh();

      // First diamond: animate parts 2–6, leave first static
      const tl1 = gsap.timeline({
        scrollTrigger: {
          trigger: firstRef.current,
          start: 'top top',
          end: '+=1000%',
          scrub: 0.5,
          pin: true,
          onRefresh: self => self.update(),
        }
      }).fromTo(
        parts1.slice(1).map(r => r.current),
        { x: () => -window.innerWidth },
        { x: 0, stagger: 0.8 }
      );

      // Second diamond: all parts
      const tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: secondRef.current,
          start: 'top top',
          end: '+=1000%',
          scrub: 0.5,
          pin: true,
          onRefresh: self => self.update(),
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
          onRefresh: self => self.update(),
        }
      }).fromTo(
        finalRef.current,
        { y: () => window.innerHeight, opacity: 0 },
        { y: 0, opacity: 1 }
      );

      timelines = [tl1, tl2, tl3];
    };

    // Wait for images then delay a bit longer to ensure layout stabilizes
    const waitForImages = () => {
      const imgs = [];
      if (firstRef.current) imgs.push(...firstRef.current.querySelectorAll('img'));
      if (secondRef.current) imgs.push(...secondRef.current.querySelectorAll('img'));
      if (finalSectionRef.current && finalRef.current) imgs.push(finalRef.current);

      const loadPromises = imgs.map(img =>
        new Promise(resolve => {
          if (img.complete) resolve();
          else img.addEventListener('load', resolve, { once: true });
        })
      );

      Promise.all(loadPromises).then(() => {
        // additional delay to cover navigation latency
        setTimeout(buildTimelines, 200);
      });
    };

    waitForImages();

    return () => {
      // Cleanup GSAP and ScrollTrigger
      timelines.forEach(tl => tl.kill());
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, [pathname]);

  const imgStyle = 'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[700px] h-auto max-h-screen';
  const zClasses = ['z-50', 'z-40', 'z-30', 'z-20', 'z-10', 'z-0'];

  return (
    <div className="bg-backgroundgreen w-full">
      <section ref={firstRef} className="relative w-full h-screen overflow-hidden">
        {/* First image static */}
        <img src={dd1} alt="part 1" className={`${imgStyle} ${zClasses[0]}`} />
        {/* Animated parts 2–6 */}
        {[dd2, dd3, dd4, dd5, dd6].map((src, i) => (
          <img
            key={i}
            ref={parts1[i + 1]}
            src={src}
            alt={`part ${i + 2}`}
            className={`${imgStyle} ${zClasses[i + 1]}`}
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

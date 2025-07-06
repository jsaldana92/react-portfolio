// src/components/seehbpresentation.jsx
import React, { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// import your twelve pieces…
import dd1  from '../images/seehb/dd1.png';
import dd2  from '../images/seehb/dd2.png';
import dd3  from '../images/seehb/dd3.png';
import dd4  from '../images/seehb/dd4.png';
import dd5  from '../images/seehb/dd5.png';
import dd6  from '../images/seehb/dd6.png';
import dd7  from '../images/seehb/dd7.png';
import dd8  from '../images/seehb/dd8.png';
import dd9  from '../images/seehb/dd9.png';
import dd10 from '../images/seehb/dd10.png';
import dd11 from '../images/seehb/dd11.png';
import dd12 from '../images/seehb/dd12.png';
// finally, your completed design—adjust filename if needed:
import ddFinal from '../images/seehb/ddfinal.png';

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.normalizeScroll(true);

export function SEEHBtimeline() {
  const firstRef  = useRef(null);
  const secondRef = useRef(null);
  const finalRef  = useRef(null);

  // refs for each piece
  const parts1 = [useRef(),useRef(),useRef(),useRef(),useRef(),useRef()];
  const parts2 = [useRef(),useRef(),useRef(),useRef(),useRef(),useRef()];

  useLayoutEffect(() => {
    // FIRST DIAMOND (dd1–dd6)
    gsap.timeline({
     scrollTrigger: {
       trigger: firstRef.current,
       start: 'top top',
       end: '+=1000%',        // six times the viewport
       scrub: true,
       pin: true,            // default pinSpacing:true will reserve space  
       // no pinSpacing:false here!
     }
   })
     .fromTo(
       parts1.map(r => r.current),
       { x: () => -window.innerWidth },
       { x: 0, stagger: 0.8 }    // slower entry spacing
     );

    // SECOND DIAMOND (dd7–dd12)
   gsap.timeline({
     scrollTrigger: {
       trigger: secondRef.current,
       start: 'top top',
       end: '+=1000%',
       scrub: 0.5,
       pin: true,            // reserve default spacing so it can un-pin
    
     }
   })
    .fromTo(
        parts2.map(r => r.current),
        { x: () => window.innerWidth },
        { x: 0, stagger: 0.8 }
    );

    // FINAL IMAGE
    gsap.fromTo(finalRef.current,
      { y: 200, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: finalRef.current,
          start: 'top 80%',
          end: 'top 50%',
          scrub: 0.5,
          // if you don’t want reverse, you can add: 
          toggleActions: "play none none none",
          pin: true,
        }
      }
    );

    // cleanup
    return () => ScrollTrigger.getAll().forEach(st => st.kill());
  }, []);

  const imgStyle = "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[700px] h-auto max-h-screen";

  return (
    <div className="bg-backgroundgreen w-full">
      {/* First diamond */}
      <section ref={firstRef} className="relative w-full h-screen overflow-hidden">
        {(() => {
            // pick from Tailwind’s z-indices
            const zClasses = ['z-50', 'z-40', 'z-30', 'z-20', 'z-10', 'z-0'];

            return [dd1, dd2, dd3, dd4, dd5, dd6].map((src, i) => (
            <img
                key={i}
                ref={parts1[i]}
                src={src}
                alt={`part ${i + 1}`}
                className={`${imgStyle} ${zClasses[i]}`}
            />
            ));
        })()}
      </section>

      {/* Second diamond */}
      <section ref={secondRef} className="relative w-full h-screen overflow-hidden">
        {(() => {
            // pick from Tailwind’s z-indices for dd7–dd12
            const zClasses2 = ['z-50', 'z-40', 'z-30', 'z-20', 'z-10', 'z-0'];

            return [dd7, dd8, dd9, dd10, dd11, dd12].map((src, i) => (
            <img
                key={i}
                ref={parts2[i]}
                src={src}
                alt={`part ${i + 7}`}
                className={`${imgStyle} ${zClasses2[i]}`}
            />
            ));
        })()}
      </section>

      {/* Final assembled image */}
      <section className="relative w-full h-screen flex items-center justify-center">
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
export default SEEHBtimeline;

// src/components/ArrowArcAnimation.jsx
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import arrow2 from '../images/arrow2.png';
import arc1 from '../images/arc1.png';
import arc2 from '../images/arc2.png'; 
import arc3 from '../images/arc3.png';
import arc4 from '../images/arc4.png';
import arc5 from '../images/arc5.png';

const ArrowArcAnimation = ({ isHovered }) => {
  const arrowRef = useRef();
  const arcRef = useRef();   // arc1
  const arc2Ref = useRef();
  const arc3Ref = useRef();
  const arc4Ref = useRef();
  const arc5Ref = useRef();
  const containerRef = useRef();
  const tlRef = useRef();

  const resetPositions = () => {
    const arrow = arrowRef.current;
    const arc = arcRef.current;
    const arc2 = arc2Ref.current;
    const arc3 = arc3Ref.current;
    const arc4 = arc4Ref.current;
    const arc5 = arc5Ref.current;

    if (!arrow || !arc || !arc2 || !arc3 || !arc4 || !arc5) return;

    const screenWidth = window.innerWidth;

    let arrowStartX = -290;
    let arrowEndX = -100;
    let arcStartX = 280;
    let arcEndX = -120;
    let arcSpeed = 80;
    let arrowSpeed = 10;
    let arc2Delay = 3.5;
    let arc3Delay = 7;
    let arc4Delay = 10.5;
    let arc5Delay = 14;
    let arrowWidth = 500;
    let arcWidth = 100;

    if (screenWidth >= 469 && screenWidth < 640) {
      // extra small (xs)
      arrowStartX = -340;
      arrowEndX = -100;
      arcStartX = 330;
      arcEndX = -130;
      arcSpeed = 90;
      arrowSpeed = 10.5;
      arc2Delay = 4.5;
      arc3Delay = 9;
      arc4Delay = 13.5;
      arc5Delay = 18;
      arrowWidth = 500;
      arcWidth = 120;

    } else if (screenWidth >= 640 && screenWidth < 768) {
      // small–medium
      arrowStartX = -440;
      arrowEndX = -80;
      arcStartX = 400;
      arcEndX = -200;
      arcSpeed = 90;
      arrowSpeed = 13.5;
      arc2Delay = 5;
      arc3Delay = 10;
      arc4Delay = 15;
      arc5Delay = 20
      arrowWidth = 500;
      arcWidth = 120;
    } else if (screenWidth >= 768 && screenWidth < 1024) {
      // medium
      arrowStartX = -550;
      arrowEndX = -180;
      arcStartX = 550;
      arcEndX = -250;
      arcSpeed = 120;
      arrowSpeed = 16.5;
      arc2Delay = 4;
      arc3Delay = 8;
      arc4Delay = 12;
      arc5Delay = 16
      arrowWidth = 500;
      arcWidth = 160;
    } else if (screenWidth >= 1024 && screenWidth < 1280) {
      // medium–large
      arrowStartX = -250;
      arrowEndX = -100;
      arcStartX = 240;
      arcEndX = -90;
      arcSpeed = 110;
      arrowSpeed = 12;
      arc2Delay = 2;
      arc3Delay = 4;
      arc4Delay = 6;
      arc5Delay = 8
      arrowWidth = 400;
      arcWidth = 100;
    } else if (screenWidth >= 1280) {
      // large
      arrowStartX = -300;
      arrowEndX = -60;
      arcStartX = 260;
      arcEndX = -150;
      arcSpeed = 100;
      arrowSpeed = 15;
      arc2Delay = 3;
      arc3Delay = 6;
      arc4Delay = 9;
      arc5Delay = 12
      arrowWidth = 300;
      arcWidth = 100;
    }


    const arcDistance = Math.abs(arcEndX - arcStartX);
    const arcDuration = arcDistance / arcSpeed;

    const arrowDistance = Math.abs(arrowEndX - arrowStartX);
    const arrowDuration = arrowDistance / arrowSpeed;

    const fadeDuration = 0.8;

    // Always reset positions and opacity
    gsap.set([arrow, arc, arc2, arc3, arc4, arc5], { opacity: 1 });
    gsap.set(arrow, { x: arrowStartX });
    gsap.set(arrow, { width: arrowWidth });
    gsap.set([arc, arc2, arc3, arc4, arc5], { width: arcWidth });
    gsap.set([arc, arc2, arc3, arc4, arc5], { x: arcStartX });
    

    if (isHovered) {
      tlRef.current = gsap.timeline({ repeat: -1, repeatDelay: 0.5 });

      // Arrow move
      tlRef.current.to(arrow, {
        x: arrowEndX,
        duration: arrowDuration,
        ease: 'power0.5.inOut',
      }, 0);

      // Arrow fade
      tlRef.current.to(arrow, {
        opacity: 0,
        duration: fadeDuration,
        ease: 'power1.out',
      }, arrowDuration - fadeDuration);

      // Arc 1
      tlRef.current.to(arc, {
        x: arcEndX,
        duration: arcDuration,
        ease: 'power0.5.inOut',
      }, 0);
      tlRef.current.to(arc, {
        opacity: 0,
        duration: fadeDuration,
        ease: 'power1.out',
      }, arcDuration - fadeDuration);

      // Arc 2
      tlRef.current.to(arc2, {
        x: arcEndX,
        duration: arcDuration,
        ease: 'power0.5.inOut',
      }, arc2Delay);
      tlRef.current.to(arc2, {
        opacity: 0,
        duration: fadeDuration,
        ease: 'power1.out',
      }, arc2Delay + arcDuration - fadeDuration);

      // Arc 3
      tlRef.current.to(arc3, {
        x: arcEndX,
        duration: arcDuration,
        ease: 'power0.5.inOut',
      }, arc3Delay);
      tlRef.current.to(arc3, {
        opacity: 0,
        duration: fadeDuration,
        ease: 'power1.out',
      }, arc3Delay + arcDuration - fadeDuration);

      // Arc 4
      tlRef.current.to(arc4, {
        x: arcEndX,
        duration: arcDuration,
        ease: 'power0.5.inOut',
      }, arc4Delay);
      tlRef.current.to(arc4, {
        opacity: 0,
        duration: fadeDuration,
        ease: 'power1.out',
      }, arc4Delay + arcDuration - fadeDuration);

      // Arc 5
      tlRef.current.to(arc5, {
        x: arcEndX,
        duration: arcDuration,
        ease: 'power0.5.inOut',
      }, arc5Delay);
      tlRef.current.to(arc5, {
        opacity: 0,
        duration: fadeDuration,
        ease: 'power1.out',
      }, arc5Delay + arcDuration - fadeDuration);
    }
  };

  useEffect(() => {
    resetPositions(); // always set positions & opacity

    if (!isHovered && tlRef.current) {
      tlRef.current.kill();
      tlRef.current = null;

      // Reset all opacities when hover ends
      gsap.set([
        arrowRef.current,
        arcRef.current,
        arc2Ref.current,
        arc3Ref.current,
        arc4Ref.current,
        arc5Ref.current,
      ], { opacity: 1 });
    }

    return () => {
      if (tlRef.current) {
        tlRef.current.kill();
        tlRef.current = null;
      }
    };
  }, [isHovered]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full overflow-hidden opacity-80 select-none pointer-events-none flex items-center justify-center"
    >
      <img
        ref={arrowRef}
        src={arrow2}
        alt="arrow"
        className="blur-[0.5px] absolute z-10"
      />
      <img ref={arcRef} src={arc1} alt="arc1" className="blur-[0.8px] absolute z-20" />
      <img ref={arc2Ref} src={arc2} alt="arc2" className="blur-[0.8px] absolute z-20" />
      <img ref={arc3Ref} src={arc3} alt="arc3" className="blur-[0.8px] absolute z-20" />
      <img ref={arc4Ref} src={arc4} alt="arc4" className="blur-[0.8px] absolute z-20" />
      <img ref={arc5Ref} src={arc5} alt="arc5" className="blur-[0.8px] absolute z-20" />
    </div>
  );
};

export default ArrowArcAnimation;

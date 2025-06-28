// src/components/ProjectCards.jsx

import { useState, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import researchObsLogo from '../images/researchobs_logo.png';
import researchObsCard from '../images/researchobs_card.png';
import dataPullerLogo from '../images/datapuller_logo.png';
import dataPullerCard from '../images/datapuller_card.png';
import gsuLogo from '../images/gsu_logo.png';
import hyperlinkCard from '../images/hyperlink_card.png';
import gradingCard from '../images/grading_card.png';



gsap.registerPlugin(ScrollTrigger);

function ProjectCard({ frontContent, backContent }) {
  const [flipped, setFlipped] = useState(false);
  const cardRef = useRef();
  const containerRef = useRef();

  useGSAP(() => {
    gsap.set(cardRef.current, { transformStyle: 'preserve-3d' });
    gsap.from(containerRef.current, {
      opacity: 0,
      y: 50,
      duration: 0.8,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
    });
  }, []);

  const handleFlip = () => {
    setFlipped(!flipped);
    gsap.to(cardRef.current, {
      rotateY: flipped ? 0 : 180,
      duration: 0.3,
      ease: 'power2.inOut',
    });
  };

  return (
    <div
      ref={containerRef}
      className="w-[320px] h-[480px] [perspective:1000px] cursor-pointer shrink-0 transition duration-300"
      onClick={handleFlip}
    >
      <div
        ref={cardRef}
        className="relative w-full h-full transition-transform duration-800 [transform-style:preserve-3d] will-change-transform"
      >
        <div
          className="absolute w-full h-full rounded-xl shadow-md overflow-visible"
          style={{
            backfaceVisibility: 'hidden',
          }}
        >
          <div className="bg-gradient-to-br from-backgroundgrey via-[#212020] to-[#201f1f] w-full h-full rounded-xl glow-hover">
            {frontContent}
          </div>
        </div>

        <div
          className="absolute w-full h-full text-white rounded-xl shadow-md overflow-visible"
          style={{
            transform: 'rotateY(180deg)',
            backfaceVisibility: 'hidden',
          }}
        >
          {/*bg-backgroundgrey here is the default but it can be overriden later on */}
          <div className="w-full h-full rounded-xl glow-hover overflow-hidden">
            <div className="w-full h-full rounded-xl glow-hover bg-backgroundgrey">
              {backContent}
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default function ProjectCarousel() {
  const containerRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const handleMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.pageX - containerRef.current.offsetLeft;
    scrollLeft.current = containerRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    isDragging.current = false;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    containerRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const cards = [
    {
      frontContent: (
        <div className="flex flex-col items-center justify-center h-full p-4 rounded-xl">
          <img src={researchObsLogo} alt="ResearchObs" className="w-16 h-16 mb-2" />
          <p className="text-xl font-semibold text-white">CEBUS-ResearchObs</p>
        </div>
      ),
      backContent: (
        <div
          className="p-4 flex flex-col justify-between h-full overflow-hidden bg-backgroundgrey bg-no-repeat bg-center bg-contain"
          style={{
            backgroundImage: `url(${researchObsCard})`,
          }}
        >
          <div className="flex-1 overflow-hidden">
            <h3 className="text-xl font-bold break-words text-white">CEBUS-ResearchObs</h3>
            <p className="text-sm mt-2 break-words whitespace-normal">
              Created behavioral observation collection app based on graduate student, PI, and lab manager interviews.
            </p>
          </div>
          <div className="flex justify-end mt-2">
            <a href="#" className="text-blue-400 hover:underline whitespace-nowrap">
              Learn more &rarr;
            </a>
          </div>

        
        </div>
      ),
    },
    {
      frontContent: (
        <div className="flex flex-col items-center justify-center h-full p-4 rounded-xl">
          <img src={dataPullerLogo} alt="DataPuller Logo" className="w-40 h-16 mb-2" />
          <p className="text-xl font-semibold text-white">DataPuller</p>
        </div>
      ),
      backContent: (
        <div
          className="p-4 flex flex-col justify-between h-full overflow-hidden bg-backgroundgrey bg-no-repeat bg-center bg-contain"
          style={{
            backgroundImage: `url(${dataPullerCard})`,
          }}
        >
          <div className="flex-1 overflow-hidden">
            <h3 className="text-xl font-bold break-words text-white">DataPuller</h3>
            <p className="text-sm mt-2 break-words whitespace-normal">
              Developed app based on researcher interviews to increase lab efficiency by allowing rapid collection and transfering of data.
            </p>
          </div>
          <div className="flex justify-end mt-2">
            <a href="#" className="text-blue-400 hover:underline whitespace-nowrap">
              Learn more &rarr;
            </a>
          </div>

        
        </div>
      ),
    },
    {
      frontContent: (
        <div className="flex flex-col items-center justify-center h-full p-4 rounded-xl">
          <img src={gsuLogo} alt="GSU Logo" className="w-16 h-16 mb-2" />
          <p className="text-xl font-semibold text-white">Hyperlink Engagement</p>
        </div>
      ),
      backContent: (
        <div
          className="p-4 flex flex-col justify-between h-full overflow-hidden bg-backgroundgrey bg-no-repeat bg-center bg-contain"
          style={{
            backgroundImage: `url(${hyperlinkCard})`,
          }}
        >
          <div className="flex-1 overflow-hidden">
            <h3 className="text-xl font-bold break-words text-white">Hyperlink Engagement</h3>
            <p className="text-sm mt-2 break-words whitespace-normal">
              Analyzed large dataset to determine the effect hyperlinks in weekly announcement had on online classrom engagement.
            </p>
          </div>
          <div className="flex justify-end mt-2">
            <a href="#" className="text-blue-400 hover:underline whitespace-nowrap">
              Learn more &rarr;
            </a>
          </div>

        
        </div>
      ),
    },
    {
      frontContent: (
        <div className="flex flex-col items-center justify-center h-full p-4 rounded-xl">
          <img src={gsuLogo} alt="GSU Logo" className="w-16 h-16 mb-2" />
          <p className="text-xl font-semibold text-white">GTA Grading Experience</p>
        </div>
      ),
      backContent: (
        <div
          className="p-4 flex flex-col justify-between h-full overflow-hidden bg-backgroundgrey bg-no-repeat bg-center bg-contain"
          style={{
            backgroundImage: `url(${gradingCard})`,
          }}
        >
          <div className="flex-1 overflow-hidden">
            <h3 className="text-xl font-bold break-words text-white">GTA Grading Experience</h3>
            <p className="text-sm mt-2 break-words whitespace-normal">
              Interviewed graduate teaching assistants to determine most common issues with grading to help inform university wide training policy.
            </p>
          </div>
          <div className="flex justify-end mt-2">
            <a href="#" className="text-blue-400 hover:underline whitespace-nowrap">
              Learn more &rarr;
            </a>
          </div>

        
        </div>
      ),
    },
    
  ];

  return (
    <section
      className="overflow-x-auto whitespace-nowrap py-8 cursor-grab active:cursor-grabbing select-none"
      style={{ WebkitOverflowScrolling: 'touch' }}
      ref={containerRef}
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
      <div className="flex gap-6 px-4 w-max">
        {cards.map((card, i) => (
          <ProjectCard
            key={i}
            frontContent={card.frontContent}
            backContent={card.backContent}
          />
        ))}
      </div>
    </section>
  );
}

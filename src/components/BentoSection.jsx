// src/components/BentoSection.jsx

import figroLogo from '../images/figro_logo.png';
import gsuLogo from '../images/gsu_logo.png';
import datapullerLogo from '../images/datapuller_logo.png';
import researchobsLogo from '../images/researchobs_logo.png';
import React, { useRef, useState, useEffect } from 'react';
import CardSorter3D from './CardSorter3d';
import SpeechAnimation from './SpeechAnimation';
import CodingLanguages from './CodingLanguages';
import PersonasSections from './PersonasSection';
import CodingSection from './CodingSection';
import ArrowArcAnimation from './ArrowArcAnimation';



const BentoBox = ({
  imageSrc,
  imageStyle,
  title,
  description,
  className,
  content,
  bgClass = 'bg-black',
  borderClass = 'border-bentobackground/5',
  backgroundContent,
}) => {
  const [isHovered, setIsHovered] = useState(false);
 

  return (
    <div
      className={`relative h-full border ${borderClass} rounded-xl overflow-hidden p-4 ${bgClass} hover:bg-black transition ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Component for the speech bubbles */}
      {backgroundContent && (
        <div className="absolute inset-0 z-0 pointer-events-none">
          {typeof backgroundContent === 'function' ? backgroundContent(isHovered) : backgroundContent}
        </div>
      )}


      {imageSrc && (
        <img
          src={imageSrc}
          alt=""
          className={`absolute pointer-events-none ${imageStyle}`}
        />
      )}

      <div className="custom-shadow-white relative z-10 text-white space-y-2">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-sm">{description}</p>
      </div>

      {content && (
        <div className="relative z-20 mt-4">
          {typeof content === 'function' ? content(isHovered) : content}
        </div>
      )}
    </div>
  );
};




const BentoSection = () => {
  const boxes = [
    {
      //imageSrc: gsuLogo,
      //imageStyle: 'top-4 left-4 w-1/3 opacity-30',
      title: 'Data Analysis',
      bgClass: 'bg-black/80',
      description: 'Large data clean up, mutation, and a slew of different statistical analysis.',
      className: 'col-span-12 md:col-span-12 lg:col-span-8 min-h-[300px]',
      backgroundContent: (isHovered) => <CodingSection isHovered={isHovered} />,
      //borderClass: 'border-none',
    },
    {
      /* imageSrc: interviewImage, this image no longer exist - upload new one*/
      imageStyle: 'top-[55%] left-1/2 w-2/3 opacity-65 -translate-x-1/2 -translate-y-1/2 min-h-[200px]',
      title: 'Interviews',
      bgClass: 'bg-black/80',
      description: 'Cognitive bias experiments.',
      className: 'col-span-12 md:col-span-6 lg:col-span-4 min-h-[300px]',
      backgroundContent: <SpeechAnimation />,
    },
    {
      imageSrc: figroLogo,
      imageStyle: 'top-[55%] left-1/2 w-2/3 opacity-65 -translate-x-1/2 -translate-y-1/2 min-h-[200px] blur-[1px]',
      title: 'Collaborations',
      bgClass: 'bg-black/80',
      description: 'Proficient in common collaborative platforms.',
      className: 'col-span-12 md:col-span-6 lg:col-span-4 min-h-[300px]',
    },
    {
      title: 'Card Sorting',
      description: 'User-generated groupings to increase intuative layouts.',
      bgClass: 'bg-black/80',
      className: ' col-span-12 md:col-span-12 lg:col-span-8 min-h-[300px]',
     backgroundContent: (isHovered) => <CardSorter3D isHovered={isHovered} />,
    },
    {
      //imageSrc: researchobsLogo,
      imageStyle: 'bottom-2 left-2 w-1/4 opacity-25',
      title: 'Coding Languages',
      description: 'Different languages to meet different needs.',
      bgClass: 'bg-black/80',
      className: 'col-span-12 md:col-span-6 lg:col-span-4 min-h-[300px]',
      backgroundContent: (isHovered) => <CodingLanguages isHovered={isHovered} />,
    },
    {
      //imageSrc: researchobsLogo,
      imageStyle: 'bottom-2 left-2 w-1/4 opacity-25',
      title: 'Personas',
      description: 'Better understanding a "prototype" user.',
      bgClass: 'bg-black/80',
      className: 'col-span-12 md:col-span-6 lg:col-span-4 min-h-[300px]',
      backgroundContent: (isHovered) => <PersonasSections isHovered={isHovered} />,
    },
    {
      //imageSrc: researchobsLogo,
      imageStyle: 'bottom-2 left-2 w-1/4 opacity-25',
      title: 'Journey Maps/Arcs',
      description: 'Observation apps for research teams.',
      bgClass: 'bg-black/80',
      className: 'col-span-12 md:col-span-12 lg:col-span-4 min-h-[300px]',
      backgroundContent: (isHovered) => <ArrowArcAnimation isHovered={isHovered} />,
    },
  ];

    return (
    <div className="px-6 max-w-screen-xl mx-auto">
      <h2 className="custom-shadow-white text-gray-900  font-semibold py-6 text-2xl leading-snug text-right">Selected skills from recent projects</h2>

      <section className="grid grid-cols-12 gap-6 ">
        {boxes.map((box, index) => (
          <BentoBox key={index} {...box} />
        ))}
      </section>
    </div>
  );
};
export default BentoSection;

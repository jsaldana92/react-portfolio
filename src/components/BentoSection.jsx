import gsuLogo from '../images/gsu_logo.png';
import datapullerLogo from '../images/datapuller_logo.png';
import researchobsLogo from '../images/researchobs_logo.png';
import dataVideo from '../videos/data_video.mp4';
import React, { useRef, useState, useEffect } from 'react';

const BentoBox = ({ imageSrc, imageStyle, videoSrc, videoClassName, title, description, className }) => {
  const [videoReady, setVideoReady] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.7; // adjust as needed (0.5 = half speed, 1 = normal)
    }
  }, [videoReady]);

  return (
    <div className={`relative h-full border border-white/5 rounded-xl overflow-hidden p-4 bg-black/20 hover:bg-white/5 transition ${className}`}>
      
      {/* Video Background (if provided) */}
      {videoSrc && (
        <>
          <video
            ref={videoRef}
            src={videoSrc}
            autoPlay
            loop
            muted
            playsInline
            onCanPlayThrough={() => setVideoReady(true)}
            className={`absolute top-0 left-0 object-cover w-full h-full transition-opacity duration-1000 z-0 ${videoClassName} ${videoReady ? 'opacity-30' : 'opacity-0'}`}
          />
          {/* Optional subtle gradient overlay to soften contrast */}
          <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-l from-black via-black/70 via-80% to-black/0" />
        </>
      )}

      {/* Background Image (optional) */}
      {imageSrc && (
        <img
          src={imageSrc}
          alt=""
          className={`absolute pointer-events-none ${imageStyle}`}
        />
      )}

      {/* Text Overlay */}
      <div className="relative z-20 text-white space-y-2">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
};



const BentoSection = () => {
  const boxes = [
    {
      videoSrc: dataVideo,
      videoClassName: 'w-full h-full',  // customize size per box here
      // imageSrc: gsuLogo, //un-comment to add the img above the video
      imageStyle: 'top-4 left-4 w-1/3 opacity-30',
      title: 'Data Analysis',
      description: 'Tools for data collection and analysis.',
      className: 'col-span-12 md:col-span-12 lg:col-span-8 min-h-[300px]',
    },
    {
      imageSrc: datapullerLogo,
      imageStyle: 'bottom-4 right-4 w-1/2 opacity-20',
      title: 'Interviews',
      description: 'Cognitive bias experiments.',
      className: 'col-span-12 md:col-span-6 lg:col-span-4 min-h-[300px]',
    },
    {
      imageSrc: researchobsLogo,
      imageStyle: 'top-1/2 left-1/2 w-2/3 opacity-15 -translate-x-1/2 -translate-y-1/2 min-h-[200px]',
      title: 'Card Sorting',
      description: 'User testing protocols.',
      className: 'col-span-12 md:col-span-6 lg:col-span-4 min-h-[300px]',
    },
    {
      imageSrc: datapullerLogo,
      imageStyle: 'top-2 right-2 w-1/3 opacity-10',
      title: 'Collaborations',
      description: 'Automated reporting and metrics.',
      className: 'col-span-12 md:col-span-12 lg:col-span-8 min-h-[300px]',
    },
    {
      imageSrc: researchobsLogo,
      imageStyle: 'bottom-2 left-2 w-1/4 opacity-25',
      title: 'Coding Languages',
      description: 'Observation apps for research teams.',
      className: 'col-span-12 md:col-span-6 lg:col-span-4 min-h-[300px]',
    },
    {
      imageSrc: researchobsLogo,
      imageStyle: 'bottom-2 left-2 w-1/4 opacity-25',
      title: 'Personas',
      description: 'Observation apps for research teams.',
      className: 'col-span-12 md:col-span-6 lg:col-span-4 min-h-[300px]',
    },
    {
      imageSrc: researchobsLogo,
      imageStyle: 'bottom-2 left-2 w-1/4 opacity-25',
      title: 'Journey Maps/Arcs',
      description: 'Observation apps for research teams.',
      className: 'col-span-12 md:col-span-12 lg:col-span-4 min-h-[300px]',
    },
  ];

    return (
    <div className="px-6 max-w-screen-xl mx-auto">
      <h2 className="text-white mt-6 text-2xl leading-snug text-right">Selected skills from recent projects</h2>

      <section className="grid grid-cols-12 gap-6 py-10">
        {boxes.map((box, index) => (
          <BentoBox key={index} {...box} />
        ))}
      </section>
    </div>
  );
};
export default BentoSection;

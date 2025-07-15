import { useRef } from 'react';
import researchObsCard from '../images/researchobs_card.png';
import dataPullerCard from '../images/datapuller_card.png';
import hyperlinkCard from '../images/hyperlink_card.png';
import gradingCard from '../images/grading_card.png';
import seehbCard from '../images/seehbcard.png';
import { Link } from 'react-router-dom';

function ProjectCard({ backContent }) {
  return (
    <div className="w-[320px] h-[480px]  shrink-0 transition duration-300 glow-hover">
      {backContent}
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
  const handleMouseLeave = () => { isDragging.current = false; };
  const handleMouseUp    = () => { isDragging.current = false; };
  const handleMouseMove  = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    containerRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const cards = [
    {
      backContent: (
        <div
          className="p-4 flex flex-col justify-between h-full overflow-hidden  bg-black/70 bg-no-repeat bg-center bg-contain rounded-xl"
          style={{ backgroundImage: `url(${researchObsCard})` }}
        >
          <div className="flex-1 overflow-hidden">
            <h3 className="text-xl font-bold break-words text-white">ResearchObs</h3>
            <p className="text-sm mt-2 break-words whitespace-normal text-white">
              Created behavioral observation collection app based on graduate student, PI, and lab manager interviews.
            </p>
          </div>
          <div className="flex justify-end mt-2">
            <Link to="/ResearchObs" className="text-blue-400 hover:underline whitespace-nowrap">
              Learn more &rarr;
            </Link>
          </div>
        </div>
      ),
    },
    {
      backContent: (
        <div
          className="p-4 flex flex-col justify-between h-full overflow-hidden  bg-black/70 bg-no-repeat bg-center bg-contain rounded-xl"
          style={{ backgroundImage: `url(${dataPullerCard})` }}
        >
          <div className="flex-1 overflow-hidden">
            <h3 className="text-xl font-bold break-words text-white">DataPuller</h3>
            <p className="text-sm mt-2 break-words whitespace-normal text-white">
              Developed app based on researcher interviews to increase lab efficiency by allowing rapid collection and transfering of data.
            </p>
          </div>
          <div className="flex justify-end mt-2">
            <Link to="/DataPuller" className="text-blue-400 hover:underline whitespace-nowrap">
              Learn more &rarr;
            </Link>
          </div>
        </div>
      ),
    },
    {
      backContent: (
        <div
          className="p-4 flex flex-col justify-between h-full overflow-hidden bg-black/70 backdrop-blur-md bg-no-repeat bg-center bg-contain rounded-xl"
          style={{ backgroundImage: `url(${hyperlinkCard})` }}
        >
          <div className="flex-1 overflow-hidden">
            <h3 className="text-xl font-bold break-words text-white">Hyperlink Engagement</h3>
            <p className="text-sm mt-2 break-words whitespace-normal text-white">
              Analyzed large dataset to determine the effect hyperlinks in weekly announcements had on online classroom engagement.
            </p>
          </div>
          <div className="flex justify-end mt-2">
            <Link to="/HyperlinkEngagement" className="text-blue-400 hover:underline whitespace-nowrap">
              Learn more &rarr;
            </Link>
          </div>
        </div>
      ),
    },
    {
      backContent: (
        <div
          className="p-4 flex flex-col justify-between h-full overflow-hidden  bg-black/70 bg-no-repeat bg-center bg-contain rounded-xl"
          style={{ backgroundImage: `url(${gradingCard})` }}
        >
          <div className="flex-1 overflow-hidden">
            <h3 className="text-xl font-bold break-words text-white">GTA Grading Experience</h3>
            <p className="text-sm mt-2 break-words whitespace-normal text-white">
              Interviewed graduate teaching assistants to determine most common issues with grading to help inform university-wide training policy.
            </p>
          </div>
          <div className="flex justify-end mt-2">
            <Link to="/GTAGradingExperience" className="text-blue-400 hover:underline whitespace-nowrap">
              Learn more &rarr;
            </Link>
          </div>
        </div>
      ),
    },
    {
      backContent: (
        <div
          className="p-4 flex flex-col justify-between h-full overflow-hidden  bg-black/70 bg-no-repeat bg-center bg-contain rounded-xl"
          style={{ backgroundImage: `url(${seehbCard})` }}
        >
          <div className="flex-1 overflow-hidden">
            <h3 className="text-xl font-bold break-words text-white">SEEHB Website</h3>
            <p className="text-sm mt-2 break-words whitespace-normal text-white">
              Conducted market research, developed and deployed website end-to-end, and adjusted based on user feedback.
            </p>
          </div>
          <div className="flex justify-end mt-2">
            <Link to="/SEEHB" className="text-blue-400 hover:underline whitespace-nowrap">
              Learn more &rarr;
            </Link>
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
      <div className="flex gap-6 px-0 w-max">
        {cards.map((card, i) => (
          <ProjectCard key={i} backContent={card.backContent} />
        ))}
      </div>
    </section>
  );
}

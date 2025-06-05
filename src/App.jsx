import React, { useState, useEffect } from 'react';
import TopNav from './components/TopNav';
import profileImg from './images/profile.png';

function App() {
  const [currentPage, setCurrentPage] = useState('Home');

  const dynamicWords = ['apps', 'communities', 'data collection', 'user engagement'];

  function DynamicText() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setIndex((prev) => (prev + 1) % dynamicWords.length);
      }, 2500); // change word every 2.5 seconds
      return () => clearInterval(interval);
    }, []);

    return (
      <p className="text-center text-lg text-white mt-4">
        Bringing research-based progress to{' '}
        <span className="font-semibold italic text-blue-400 transition-opacity duration-500">
          {dynamicWords[index]}.
        </span>
      </p>
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
              <h1 className="text-3xl text-white font-bold">Jhonatan M. Saldaña Santisteban</h1>
              <p className="text-yellow-700 italic">
                UX Research Intern and Cognitive Psychology, PhD Candidate
              </p>
            </div>

            {/* Main Body Content */}
            <div className=" text-white flex flex-col md:flex-row items-center gap-8 max-w-5xl mx-auto mt-8">
              <div className="flex-1 space-y-4 text-justify">
                {/* Match paragraph alignment but style differently */}
                <div className="text-white font-medium italic">
                  <DynamicText />
                </div>

                <p>
                  As a researcher, my main goal is to balance the time and needs of a project by determining the most effective methodology geared towards improving the end users' experience and meeting the needs of the project. I have used this approach when assessing Georgia State University students and instructors' experiences in grading, course engagement and community development.
                </p>
                <p>
                  I have applied this same ethos when developing applications geared towards improving researchers' experience with data collection and transfer. As well as in my academic endeavors, where my research focuses on the evolutionary development of heuristics to better understand the origin of irrational decisions and the development of sequence preferences, among other topics.
                </p>
              </div>

              <div className="flex-1 flex justify-center items-center">
                <img
                  src={profileImg}
                  alt="Jhonatan"
                  className="w-60 rounded-xl shadow-md center"
                />
              </div>
              
            </div>
          </section>
        )}


        {currentPage !== 'Home' && (
          <div className="text-center text-xl font-medium mt-20">Welcome to {currentPage}!</div>
        )}
      </main>
    </div>
  );
}

export default App;

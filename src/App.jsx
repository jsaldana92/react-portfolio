import React, { useState } from 'react';
import TopNav from './components/TopNav';
import profileImg from './images/profile.png';

function App() {
  const [currentPage, setCurrentPage] = useState('Home');

  return (
    <div className="min-h-screen bg-black text-gray-800">
      <TopNav currentPage={currentPage} setCurrentPage={setCurrentPage} class = 'align-center'/>

      <main className="p-6">
        {currentPage === 'Home' && (
          <section className="space-y-12">
            <h1 className="text-3xl font-bold text-center">Jhonatan M. Saldaña Santisteban</h1>
            <p className="text-center text-gray-600">
              UX Research Intern and Cognitive Psychology, PhD Candidate
            </p>
            <div className="flex flex-col md:flex-row items-center gap-8 max-w-5xl mx-auto mt-8">
              <div className="flex-1 space-y-4 text-justify">
                <p>As a researcher, my main goal is to balance time and needs...</p>
                <p>I have applied this same ethos when developing apps...</p>
              </div>
              <img src={profileImg} alt="Jhonatan" className="w-60 rounded-xl shadow-md" />
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

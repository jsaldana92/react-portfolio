// src/components/SpeechAnimation.jsx
import React from 'react';


const SpeechAnimation = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      <div className="animate-bubble absolute top-5 right-5 w-fit max-w-[75%] px-4 py-2 bg-blue-500 rounded-2xl shadow-md blur-[1px]">
        <span className="text-white blur-[3px] select-none">
          Hello! Are you ready for your interview?
        </span>
      </div>

      <div className="animate-bubble delay-1 absolute top-24 left-5 w-fit max-w-[75%] px-4 py-2 bg-white/50 rounded-2xl shadow-md blur-[1px]">
        <span className="text-white blur-[3px] select-none">
          Yes! Do you have a webroom ready?
        </span>
      </div>

      <div className="animate-bubble delay-2 absolute top-40 right-5 w-fit max-w-[75%] px-4 py-2 bg-blue-500 rounded-2xl shadow-md blur-[1px]">
        <span className="text-white blur-[3px] select-none">
          I do. The link should be in my last email you received yesterday at noon.
        </span>
      </div>

      <div className="animate-bubble delay-3 absolute top-66 left-5 w-fit max-w-[75%] px-4 py-2 bg-white/50 rounded-2xl shadow-md blur-[1px]">
        <span className="text-white blur-[3px] select-none">
          Ok great, I'll look for it and see you in 5 minutes.
        </span>
      </div>
    </div>
  );
};

export default SpeechAnimation;




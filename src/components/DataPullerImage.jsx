// src/components/DataPullerImage.jsx
import React from "react";
import speedImg from "../images/datapuller/betatime.png";
import enjoymentImg from "../images/datapuller/betaperceptionllikelihood.png";

export default function DataPullerImage() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Speed Column */}
        <div className="text-center">
          <h3 className="text-2xl font-extrabold mb-4">
            DataPuller Becomes More Efficient as More Data Is Needed from
            Different Projects
          </h3>
          <img
            src={speedImg}
            alt="DataPuller Efficiency Chart"
            className="mx-auto bg-white p-2 max-w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Enjoyment / Usage Column */}
        <div className="text-center">
          <h3 className="text-2xl font-extrabold mb-4">
            DataPuller Is Not Seen as an Improvement and Is Unlikely to Be Used
          </h3>
          <img
            src={enjoymentImg}
            alt="DataPuller Perception and Likelihood Chart"
            className="mx-auto bg-white p-2 max-w-full h-auto rounded-lg shadow-md"
          />
        </div>
      </div>
    </section>
  );
}

// src/components/RustPullerImage.jsx
import React from "react";
import rustSpeedImg from "../images/datapuller/rusttime.png";
import rustEnjoymentImg from "../images/datapuller/rustperceptionllikelihood.png";

export default function RustPullerImage() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Speed Column */}
        <div className="text-center">
          <h3 className="text-2xl font-extrabold mb-4">
            Rust-DataPuller Launch Is At Least ~20x Faster Than Other Options
          </h3>
          <img
            src={rustSpeedImg}
            alt="Rust DataPuller speed comparison chart"
            className="mx-auto bg-white p-2 max-w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Enjoyment / Usage Column */}
        <div className="text-center">
          <h3 className="text-2xl font-extrabold mb-4">
            Rust-DataPuller Is Seen as an Improvement and Is Likely to Be Used
          </h3>
          <img
            src={rustEnjoymentImg}
            alt="Rust DataPuller perception and likelihood chart"
            className="mx-auto bg-white p-2 max-w-full h-auto rounded-lg shadow-md"
          />
        </div>
      </div>
    </section>
  );
}

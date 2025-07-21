import React, { useState } from "react";
import rustSpeedImg from "../images/datapuller/rusttime.png";
import rustEnjoymentImg from "../images/datapuller/rustperceptionllikelihood.png";

export default function RustPullerImage() {
  // lightbox state
  const [selectedImage, setSelectedImage] = useState(null);

  const tabs = ["Speed", "Enjoyment/Usage"];
  const [selectedTab, setSelectedTab] = useState("Speed");

  const titles = {
    Speed: "Rust-DataPuller Launch Is At Least ~20x Faster Than Other Options",
    "Enjoyment/Usage":
      "Rust-DataPuller Is Seen as an Improvement and Is Likely to Be Used",
  };

  const getImage = () => {
    return selectedTab === "Enjoyment/Usage" ? rustEnjoymentImg : rustSpeedImg;
  };

  return (
    <section className="max-w-4xl mx-auto px-6 py-8">
      {/* Tab buttons */}
      <div className="flex justify-center space-x-4 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setSelectedTab(tab)}
            className={`px-4 py-2 rounded-2xl font-semibold transition-colors cursor-pointer duration-200
              ${
                selectedTab === tab
                  ? "bg-blue-500 text-white"
                  : "bg-gray-300 text-gray-800 hover:bg-gray-400"
              }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content area */}
      <div className="text-center">
        <h3 className="text-2xl font-extrabold mb-6">{titles[selectedTab]}</h3>
        <img
          src={getImage()}
          alt={`${selectedTab} chart`}
          className="mx-auto bg-white p-2 max-w-full h-auto rounded-lg shadow-md cursor-pointer"
          onClick={() => setSelectedImage(getImage())}
        />
      </div>
      {/* Modal Overlay */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="relative max-w-4xl w-150 px-4">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-6 z-10 w-10 h-10 flex items-start justify-center text-white text-3xl font-bold rounded-full bg-black/60 shadow-lg backdrop-blur-sm hover:bg-black/80 transition"
            >
              &times;
            </button>
            <img
              src={selectedImage}
              alt="enlarged"
              className="w-full h-auto bg-white rounded-lg shadow-lg"
              onContextMenu={(e) => e.preventDefault()} //prevents right clicking
            />
          </div>
        </div>
      )}
    </section>
  );
}

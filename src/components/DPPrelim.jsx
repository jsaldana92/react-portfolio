// src/components/DPPrelim.jsx
import React from "react";

export default function DPPrelim() {
  const timelineSteps = [
    "Turn on individuals computers and insert USB drive",
    "Open project folder",
    "Copy all relevant data into USB",
    'Move original data into a "copied" folder',
    "Repeat steps 2-4 until all data has been copied",
    "Safely eject USB drive and turn off laptop",
  ];

  const timelineColors = [
    "bg-[#EC7063]",
    "bg-[#F5B041]",
    "bg-[#F4D03F]",
    "bg-[#48C9B0]",
    "bg-[#7FB3D5]",
    "bg-[#AEB6BF]",
  ];

  const userMostOften = [
    {
      title: "Data Formats Included",
      text: ".csv and .txt",
      quote: { text: "“I only use .csv files.”", author: "Junior Researcher" },
    },
    {
      title: "Most Common Worry",
      text: "Other files might be transferred by mistake",
      quote: {
        text: "“It would be nice to quickly check that files are being correctly transferred.”",
        author: "Senior Researcher",
      },
    },
    {
      title: "Most Wanted Feature",
      text: "Transfer log",
      quote: {
        text: "“A log of what was copied would help confirm the transfer had no errors.”",
        author: "Senior Researcher",
      },
    },
    {
      title: "More Likely to Use If",
      text: "Data pulling is significantly faster",
      quote: {
        text: "“If it’s faster and reduces mistakes for junior researchers, I’m all for it.”",
        author: "Primary Investigator",
      },
    },
  ];

  return (
    <section className="mx-auto mb-12 space-y-12 w-[90vw] max-w-[1400px]">
      {/* Row 1: Timeline */}
      <div className="w-full">
        <h2 className="text-3xl font-extrabold text-center mb-6">Timeline</h2>

        {/* Arrow only when single row (xl+) */}
        <div className="relative">
          {/* Arrow (hidden below xl when boxes wrap) */}
          <svg
            className="hidden xl:block absolute left-0 top-1/2 -translate-y-1/2 w-full h-16 pointer-events-none -z-0"
            viewBox="0 0 1000 100"
            preserveAspectRatio="none"
          >
            <defs>
              <marker
                id="arrowhead"
                markerWidth="10"
                markerHeight="10"
                refX="8"
                refY="3"
                orient="auto"
              >
                <path d="M0,0 L0,6 L9,3 z" className="fill-gray-300" />
              </marker>
            </defs>
            <line
              x1="0"
              y1="50"
              x2="980"
              y2="50"
              className="stroke-gray-300"
              strokeWidth="6"
              markerEnd="url(#arrowhead)"
            />
          </svg>

          {/* Responsive grid: 6 in one row (xl), wraps to 3/2/1 as needed */}
          <div
            className="relative z-10 grid gap-4 md:gap-5 py-6
                          grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6"
          >
            {timelineSteps.map((step, i) => (
              <div
                key={i}
                className={`${timelineColors[i]} rounded-2xl shadow-lg flex items-center gap-3
                            p-3 text-sm md:p-4 md:text-base`}
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white/90 flex items-center justify-center font-bold text-gray-800">
                  {i + 1}
                </div>
                <p className="font-semibold text-gray-900">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Row 2: User Most Often… */}
      <div className="w-full">
        <h2 className="text-3xl font-extrabold text-center mb-6">
          User Most Often…
        </h2>

        {/* Responsive grid: 4 across on lg+, wraps to 2/1 below */}
        <div className="grid gap-4 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {userMostOften.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-5 md:p-6 rounded-2xl shadow-lg"
            >
              <h4 className="text-lg md:text-xl font-semibold">{item.title}</h4>
              <p className="mt-1 text-gray-800 text-sm md:text-base">
                {item.text}
              </p>

              <div className="mt-3">
                <div className="bg-gray-100 p-3 md:p-4 rounded shadow-inner text-sm md:text-base">
                  {item.quote.text}
                </div>
                <div className="text-right italic text-xs md:text-sm mt-1">
                  – {item.quote.author}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

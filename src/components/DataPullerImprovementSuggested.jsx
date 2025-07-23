import React, { useState } from "react";

export default function DataPullerImprovementSuggested() {
  const tabs = [
    "General Feedback",
    "Most Common Suggested Feature",
    "Most Wanted Improvement",
  ];
  const [selectedTab, setSelectedTab] = useState("General Feedback");

  const improvementQuotes = [
    {
      text: "“The start up times is really slow and should improve.”",
      author: "Junior Researcher",
    },
    {
      text: "“It takes too long to launch the app, it should be faster.”",
      author: "Senior Researcher",
    },
  ];

  const featureQuotes = [
    {
      text: "“I can't really think of any features I could suggest.”",
      author: "Junior Researcher",
    },
    {
      text: "“Safely ejecting the USB drive would be great.”",
      author: "Senior Researcher",
    },
  ];

  const generalFeedbackQuotes = [
    {
      text: "“The launch time was super long and made it not fun waiting for the app to launch, I would much rather just click around and get to the one folder I need since I would rather not just sit there.”",
      author: "Junior Researcher",
    },
    {
      text: "“I only really pull data from one or two projects at a time, so the long start up time makes it seem not necessary to use the app.”",
      author: "Senior Researcher",
    },
    {
      text: "“I certainly feel it being faster but the long start up time is a major downfall.”",
      author: "Senior Researcher",
    },
  ];

  const renderQuotes = (quotes) => (
    <div className="grid grid-cols-1 gap-6">
      {quotes.map((q, i) => (
        <div key={i} className="bg-white p-6 rounded-2xl shadow-lg">
          <p className="text-gray-800">{q.text}</p>
          <div className="text-right italic text-sm mt-2">– {q.author}</div>
        </div>
      ))}
    </div>
  );

  return (
    <section className="max-w-4xl mx-auto px-6 py-8">
      {/* Tab buttons */}
      <div className="flex justify-center space-x-4 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setSelectedTab(tab)}
            className={`px-4 py-2 rounded-2xl font-semibold transition-colors duration-200 cursor-pointer
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
      {selectedTab === "Most Wanted Improvement" &&
        renderQuotes(improvementQuotes)}
      {selectedTab === "Most Common Suggested Feature" &&
        renderQuotes(featureQuotes)}
      {selectedTab === "General Feedback" &&
        renderQuotes(generalFeedbackQuotes)}
    </section>
  );
}

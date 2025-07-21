import React, { useState } from "react";

export default function RustPullerImprovementSuggested() {
  const tabs = [
    "General Feedback",
    "Most Common Suggested Feature",
    "Most Wanted Improvement",
  ];
  const [selectedTab, setSelectedTab] = useState("General Feedback");

  const improvementQuotes = [
    {
      text: "“Nothing really comes to mind for improvements, the launch speed was the biggest hang up I had.”",
      author: "Junior Researcher",
    },
    {
      text: "“I can not think of any improvement to current features.”",
      author: "Senior Researcher",
    },
  ];

  const featureQuotes = [
    {
      text: "“It would be nice if this could also pull data from copied folder when selected.”",
      author: "Junior Researcher",
    },
    {
      text: "“Maybe a launcher app that handles installing new programs? Those can be a bit tricky and take a long time. Otherwise, no suggestions!”",
      author: "Senior Researcher",
    },
  ];

  const generalFeedbackQuotes = [
    {
      text: "“The fact that the launch times is like a second makes this so much better, I will definitely try it out later in the week.”",
      author: "Junior Researcher",
    },
    {
      text: "“The super quick load time makes this an actual viable solution.”",
      author: "Senior Researcher",
    },
    {
      text: "“This is an actual app that I can see myself using now that it does not take so long to start.”",
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

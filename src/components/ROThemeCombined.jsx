// src/components/ROThemeCombined.jsx
import React, { useState } from "react";

export default function ROThemeCombined() {
  const tabs = [
    "In-Observation Editing",
    "Cross-tablet Profiles",
    "Continuity with Legacy Data Structure",
    "Customizable Groups",
  ];
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  // --- Quotes reorganized by theme ---
  const inObsEditingQuotes = [
    {
      text: `"It is annoying not being able to edit the [observation] as I am [entering data]. If I want to edit it after the [observation] is complete, I might forget what I needed to change."`,
      author: "Junior Researcher",
    },
    {
      text: `"An undo button would be really nice and would take care of tedious editing."`,
      author: "Senior Researcher",
    },
  ];

  const crossTabletQuotes = [
    {
      text: `"The tablets lose charge really quickly and each group pretty much has only one tablet assigned to it, which makes data collection difficult since we cannot freely switch between the tablets as needed."`,
      author: "Senior Researcher",
    },
    {
      text: `"Being able to not have to worry about which tablets are charged will be great for data continuity."`,
      author: "Senior Researcher",
    },
  ];

  const continuityQuotes = [
    {
      text: `"Standardizing the [global] data would be super helpful since researchers often make mistakes."`,
      author: "Lab Manager",
    },
    {
      text: `"The output file needs to be the same so that the R code which runs the analysis does not also need updating."`,
      author: "Lab Manager",
    },
    {
      text: `"It is very important to keep the Dropbox feature included."`,
      author: "Stakeholder",
    },
  ];

  const customizableGroupsQuotes = [
    {
      text: `"Ideally, I should be able to edit groups and group members without having to edit any code, the same for editing behaviors."`,
      author: "Stakeholder",
    },
    {
      text: `"[Group members] have changed in the past and being able to quickly change groups would be very helpful."`,
      author: "Lab Manager",
    },
  ];

  const byTab = {
    "In-Observation Editing": inObsEditingQuotes,
    "Cross-tablet Profiles": crossTabletQuotes,
    "Continuity with Legacy Data Structure": continuityQuotes,
    "Customizable Groups": customizableGroupsQuotes,
  };

  // --- helper: pick background color by role ---
  const getBgColor = (author) => {
    if (author.toLowerCase().includes("researcher"))
      return "bg-blue-100 border-l-4 border-blue-500";
    if (author.toLowerCase().includes("lab manager"))
      return "bg-teal-100 border-l-4 border-teal-500";
    if (author.toLowerCase().includes("stakeholder"))
      return "bg-amber-100 border-l-4 border-amber-500";
    return "bg-gray-100 border-l-4 border-gray-300";
  };

  const renderQuotes = (quotes) => (
    <div className="grid grid-cols-1 gap-6">
      {quotes.map((q, i) => (
        <div
          key={i}
          className={`p-6 rounded-2xl shadow-lg ${getBgColor(q.author)}`}
        >
          <p className="text-gray-800">{q.text}</p>
          <div className="text-right italic text-sm mt-2">– {q.author}</div>
        </div>
      ))}
    </div>
  );

  return (
    <section className="max-w-4xl mx-auto px-6 py-8">
      {/* Tab buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
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
      {renderQuotes(byTab[selectedTab])}
    </section>
  );
}

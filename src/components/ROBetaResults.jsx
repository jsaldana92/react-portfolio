import React, { useState } from "react";
import undoImg from "../images/researchobs/undoscore.png";
import switchImg from "../images/researchobs/switchscore.png";
import editImg from "../images/researchobs/editscore.png";
import famImg from "../images/researchobs/famscore.png";

export default function ROBetaResults() {
  const tabs = [
    "Ease of Editing",
    "Ease of Switching Between Groups",
    "Editing Group Details",
    "Familiarity",
  ];
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  const renderContent = () => {
    switch (selectedTab) {
      case "Ease of Editing":
        return (
          <section className="max-w-4xl mt-4 mx-auto px-2">
            <h2 className="w-full text-center text-2xl font-semibold mb-4">
              Rated More Positively in Ease of Editing
            </h2>
            <div className="flex justify-center">
              <img
                src={undoImg}
                alt="Ease of Editing"
                className="bg-white p-4 rounded-lg shadow-md transition-transform duration-200 hover:scale-102"
              />
            </div>
          </section>
        );
      case "Ease of Switching Between Groups":
        return (
          <section className="max-w-4xl mt-4 mx-auto px-2">
            <h2 className="w-full text-center text-2xl font-semibold mb-4">
              Ease of Switching Between Groups
            </h2>
            <div className="flex justify-center">
              <img
                src={switchImg}
                alt="Ease of Switching"
                className="bg-white p-4 rounded-lg shadow-md transition-transform duration-200 hover:scale-102"
              />
            </div>
          </section>
        );
      case "Editing Group Details":
        return (
          <section className="max-w-4xl mt-4 mx-auto px-2">
            <h2 className="w-full text-center text-2xl font-semibold mb-4">
              Easier to Edit Group Names, Members, and Behaviors
            </h2>
            <div className="flex justify-center">
              <img
                src={editImg}
                alt="Edit Group Details"
                className="bg-white p-4 rounded-lg shadow-md transition-transform duration-200 hover:scale-102"
              />
            </div>
          </section>
        );
      case "Familiarity":
        return (
          <section className="max-w-4xl mt-4 mx-auto px-2">
            <h2 className="w-full text-center text-2xl font-semibold mb-4">
              Remained Familiar to Users
            </h2>
            <div className="flex justify-center">
              <img
                src={famImg}
                alt="Familiarity"
                className="bg-white p-4 rounded-lg shadow-md transition-transform duration-200 hover:scale-102"
              />
            </div>
          </section>
        );
      default:
        return null;
    }
  };

  return (
    <div className="py-8">
      <div className="flex justify-center space-x-4 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setSelectedTab(tab)}
            className={`px-4 py-2 rounded-2xl font-semibold transition-colors duration-200 cursor-pointer ${
              selectedTab === tab
                ? "bg-blue-500 text-white"
                : "bg-gray-300 text-gray-800 hover:bg-gray-400"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      {renderContent()}
    </div>
  );
}

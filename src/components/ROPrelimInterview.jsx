import React, { useState } from 'react';

export default function ROPreliminaryInterview() {
  const tabs = ['End Users', 'Lab Manager', 'Primary Investigator'];
  const [selectedTab, setSelectedTab] = useState('End Users');

  const endUserQuotes = [
    { text: '"It is annoying not being able to edit the [observation] as I am [entering data]. If I want to edit it after the [observation] is complete, I might forget what I needed to change."', author: 'Junior Researcher' },
    { text: '"The tablets lose charge really quickly and it each groups pretty much has only one tablet assigned to it, which makes data collection difficult since we cannot freely switch between the tablets as needed."', author: 'Senior Researcher' },
    { text: '"An undo button would be really nice and would take care of tedious editing."', author: 'Senior Researcher' },
  ];

  const labManagerQuotes = [
    { text: '"Standardizing the [global] data would be super helpful since researchers often make mistakes."', author: 'Lab Manager' },
    { text: '"The output file needs to be the same so that the R code which runs the analysis does not also need updating."', author: 'Lab Manager' },
  ];

  const piQuotes = [
    { text: '"Ideally, I should be able to edit groups and group members without having to edit any code, the same for editing behaviors."', author: 'Primary Investigator' },
    { text: '"It is very important to keep the Dropbox feature included."', author: 'Primary Investigator' },
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
        {tabs.map(tab => (
          <button
            key={tab}
            onClick={() => setSelectedTab(tab)}
            className={`px-4 py-2 rounded-2xl font-semibold transition-colors duration-200 cursor-pointer
              ${selectedTab === tab
                ? 'bg-blue-500 text-white'
                : 'bg-gray-300 text-gray-800 hover:bg-gray-400'
              }`
            }
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content area */}
      {selectedTab === 'Primary Investigator' && renderQuotes(piQuotes)}
      {selectedTab === 'Lab Manager' && renderQuotes(labManagerQuotes)}
      {selectedTab === 'End Users' && renderQuotes(endUserQuotes)}
    </section>
  );
}

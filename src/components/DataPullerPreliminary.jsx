import React, { useState } from 'react';

export default function DPPreliminary() {
   // default to the first questionnaire item
  const [selectedQ, setSelectedQ] = useState(0);

  const timelineSteps = [
    'Turn on individuals computers and insert USB drive',
    'Open C:/Tasks/[Researcher Last Name]/[Project]',
    'Copy all relevant data into USB',
    'Move original data into a "copied" folder within [Project]',
    'Repeat steps 2-4 until all data has been copied',
    'Safely eject USB drive and turn off laptop'
  ];

  const timelineColors = [
    'bg-[#EC7063]',
    'bg-[#F5B041]',
    'bg-[#F4D03F]',
    'bg-[#48C9B0]',
    'bg-[#7FB3D5]',
    'bg-[#AEB6BF]'
  ];

  // Now include two quotes per item
  const questionnaire = [
    {
      title: 'Most Common Data Format',
      text: '.csv and .txt',
      quotes: [
        { text: '“I only use .csv files.”', author: 'Junior Researcher' },
        { text: '“I use .txt only, but I know that a lot of my students use .csv too.”', author: 'Primary Investigator' }
      ]
    },
    {
      title: 'Most Common Worry',
      text: 'Worried that other files will be transferred',
      quotes: [
        { text: '“I would be a bit weary that not every files is being transferred.”', author: 'Junior Researcher' },
        { text: '“It would be nice to be able to check quick files are being transferred.”', author: 'Senior Researcher' }
      ]
    },
    {
      title: 'Most Wanted Feature',
      text: 'Transfer log',
      quotes: [
        { text: '“A transfered log of what was copied would be great to make sure the transfer had no errors.”', author: 'Senior Researcher' },
        { text: '“I think that people would not use this without a transfer log since.”', author: 'Primary Investigator' }
      ]
    },
    {
      title: 'Most Likely to Use App If',
      text: 'Greatly reduces data collection speed',
      quotes: [
        { text: '“Pulling data would need to be significantly faster to make learning a new way worth it.”', author: 'Senior Researcher' },
        { text: '“If it is faster and helps junior researchers not make mistakes then I am all for it.”', author: 'Primary Investigator' }
      ]
    }
  ];

  return (
    <section className="max-w-4xl mx-auto px-6 mb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* Left column: Timeline */}
        <div>
          <h2 className="text-3xl  font-extrabold text-center mb-6">Timeline</h2>
          <div className="flex flex-col space-y-4">
            {timelineSteps.map((step, i) => (
              <div
                key={i}
                className={`
                  ${timelineColors[i]}
                  p-6 rounded-2xl shadow-lg
                  flex justify-center md:justify-start
                  items-center md:items-start
                  text-center md:text-start font-semibold
                `}
              >
                <p className="text-lg text-gray-800">
                  <span className="font-bold">{i + 1}.</span> {step}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right column: Questionnaire */}
        <div>
          <h2 className="text-3xl font-extrabold text-center mb-6">Questionnaire</h2>
          <div className="flex flex-col space-y-4">
            {questionnaire.map((q, i) => {
              const isSelected = selectedQ === i;
              return (
                <div
                  key={i}
                  onClick={() => setSelectedQ(prev => (prev === i ? null : i))}
                  className={`
                    bg-white
                    p-6
                    rounded-2xl
                    shadow-lg
                    cursor-pointer
                    transition-all
                    duration-200
                    ${isSelected
                      ? 'ring-4 ring-blue-300 ring-opacity-50'
                      : 'ring-0'
                    }
                  `}
                >
                  <h4 className="text-xl font-semibold">{q.title}</h4>
                  <p className="mt-2 text-gray-700">{q.text}</p>

                  {isSelected && (
                    <div className="mt-4 space-y-4">
                      {q.quotes.map((quote, j) => (
                        <div key={j}>
                          <div className="bg-gray-100 p-4 rounded shadow-inner">
                            {quote.text}
                          </div>
                          <div className="text-right italic text-sm mt-1">
                            – {quote.author}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}

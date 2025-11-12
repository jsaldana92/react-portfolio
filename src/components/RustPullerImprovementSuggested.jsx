// src/components/RustPullerImprovementSuggested.jsx
import React from "react";

export default function RustPullerImprovementSuggested() {
  const topics = [
    {
      title: "General Feedback",
      quote: {
        text: "“The super quick load time makes this an actual viable solution.”",
        author: "Senior Researcher",
      },
    },
    {
      title: "Most Common Suggested Feature",
      quote: {
        text: "“It would be nice if this could also pull data from the copied folder when selected.”",
        author: "Junior Researcher",
      },
    },
    {
      title: "Most Wanted Improvement",
      quote: {
        text: "“Nothing really comes to mind for improvements — the launch speed was the biggest hang-up I had.”",
        author: "Junior Researcher",
      },
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {topics.map((t, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl shadow-lg">
            <h3 className="text-lg font-semibold text-gray-800">{t.title}</h3>
            <div className="mt-3 bg-gray-100 p-4 rounded shadow-inner">
              {t.quote.text}
            </div>
            <div className="text-right italic text-sm mt-2">
              – {t.quote.author}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

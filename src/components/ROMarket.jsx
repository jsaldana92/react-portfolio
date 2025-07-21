import React, { useState } from "react";
// make sure these paths point to your actual logo files:
import flutterLogo from "../images/flutterlogo.svg";
import kotlinLogo from "../images/kotlinlogo.svg";
import javaLogo from "../images/javalogo.svg";

export default function ROMarket() {
  // default to the first item open
  const [selectedQ, setSelectedQ] = useState(0);
  // state for result reveal
  const [resultOpen, setResultOpen] = useState(false);

  const questionnaire = [
    {
      title: "Flutter",
      text: "Build one app that runs on phones, tablets, and more",
      img: flutterLogo,
      bullets: [
        "Instant preview: see your changes the moment you save",
        "No juggling different design files - everything’s written together",
        "One codebase works on Android, iOS, web, and desktop",
        "Huge, friendly community with loads of help and tutorials",
      ],
    },
    {
      title: "Kotlin",
      text: "Google’s modern language for Android apps",
      img: kotlinLogo,
      bullets: [
        "Cleaner, shorter code than older options - fewer chances for mistakes",
        "Design your screen layouts right next to your code (no extra files)",
        "Built right into Android Studio with live previews as you work",
        "Plays nicely with existing Android tools and libraries",
      ],
    },
    {
      title: "Java",
      text: "The classic, time-tested choice for Android",
      img: javaLogo,
      bullets: [
        "Widely used; almost every Android guide assumes Java",
        "Tons of help available, but more setup needed before seeing results",
        "You manage separate design files and boilerplate code",
        "Great for deep, large-scale projects but steeper to get started quickly",
      ],
    },
  ];

  const result = {
    title: "Chosen Language",
    revealTitle: "Flutter",
    img: flutterLogo,
    bullets: [
      "Friendliness to beginners is optimal to allow future beginner developers to iterate on the existing code",
      "Easier time-to-launch allows for more time given to develop longevity-focused features",
      "Cross-platform ability allows future transfer into iOS (allows lab to standardize the type of tablet)",
    ],
  };

  return (
    <section className="max-w-2xl mx-auto px-6 mb-8">
      <div className="gap-8">
        {/* Header */}
        <section className="text-center mb-6">
          <h2 className="text-3xl font-extrabold">Language Analysis</h2>
          <p className="text-lg italic mt-1">
            Must be an Android app compatible with Amazon Fire HD tablets
          </p>
        </section>

        {/* Cards */}
        <div className="flex flex-col space-y-4">
          {questionnaire.map((q, i) => {
            const isSelected = selectedQ === i;
            return (
              <div
                key={q.title}
                onClick={() => setSelectedQ((prev) => (prev === i ? null : i))}
                className={`
                  flex items-start
                  bg-white p-6 rounded-2xl shadow-lg
                  cursor-pointer transition-all duration-200
                  ${
                    isSelected
                      ? "ring-4 ring-blue-300 ring-opacity-50"
                      : "ring-0"
                  }
                `}
              >
                {/* Logo */}
                <img
                  src={q.img}
                  alt={`${q.title} logo`}
                  className="w-12 h-12 mr-4 flex-shrink-0"
                />

                {/* Content */}
                <div className="flex-1">
                  <h4 className="text-xl font-semibold">{q.title}</h4>
                  <p className="mt-2 text-gray-700">{q.text}</p>

                  {/* Bullet list */}
                  {isSelected && (
                    <ul className="list-disc list-inside mt-4 space-y-1 text-gray-700">
                      {q.bullets.map((b, j) => (
                        <li key={j}>{b}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Result Section as reveal box */}
        <section className="mt-12">
          <div
            onClick={() => setResultOpen((prev) => !prev)}
            className={`
              bg-white p-6 rounded-2xl shadow-lg
              cursor-pointer transition-all duration-200
              ${resultOpen ? "ring-4 ring-blue-300 ring-opacity-50" : "ring-0"}
            `}
          >
            <h3 className="text-2xl font-extrabold text-center">
              {result.title}
            </h3>

            {resultOpen && (
              <div className="mt-4 flex flex-col items-center">
                <img
                  src={result.img}
                  alt={`${result.revealTitle} logo`}
                  className="w-16 h-16 mb-2"
                />
                <h4 className="text-xl font-semibold mb-2">
                  {result.revealTitle}
                </h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  {result.bullets.map((b, j) => (
                    <li key={j}>{b}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>
      </div>
    </section>
  );
}

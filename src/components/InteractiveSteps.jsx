// src/components/InteractiveSteps.jsx
import React, { useState } from "react";

// Import your step images below
import img1 from "../images/gradingstudy/preliminary.png";
import img2 from "../images/gradingstudy/gradingissue.png";
import img3 from "../images/gradingstudy/assessment.png";
import img4 from "../images/gradingstudy/action.png";
import img5 from "../images/gradingstudy/resolution.png";

// Default data for each step; override via `steps` prop if needed
const defaultSteps = [
  {
    id: 1,
    img: img1,
    caption: "Preliminary",
    headerTitle: "Preliminary: Before a Grading Issue is Recognized",
    headerSubtitle:
      "GTAs’ confidence is based on the training they received and the teaching experience they've had",
    quotes: {
      A: '"It was definitely nice to get a feel for how some of these things worked, especially with the syllabus."',
      B: '"There was shadowing…you just have an idea of how [teaching] works."',
    },
    sources: {
      A: "GTA with formal training and monthly supervision",
      B: "GTA with minimum training and no supervision",
    },
  },
  {
    id: 2,
    img: img2,
    caption: "Grading",
    headerTitle: "Grading: GTA recognized a Grading Issue from a Student",
    headerSubtitle: "Formal Training Helps GTAs Identify Policy Violations",
    quotes: {
      A: '"The teaching class helped me prepare and look out for signs of cheating, especially to rry and detect AI usage.”',
      B: "“I knew cheating was always going to happen, but I was unsure how I should even go about catching it.”",
    },
    sources: {
      A: "GTA with formal training and monthly supervision",
      B: "GTA with some training and no supervision",
    },
  },
  {
    id: 3,
    img: img3,
    caption: "Assessment",
    headerTitle: "Assessment: GTA Determines the Best Course of Action",
    headerSubtitle:
      "Self-confidence in teaching plus course/department policy will guide the actions taken by the GTA",
    quotes: {
      A: '"The monthly check-ins with other GTAs and our supervisor have been a great resource to figure out what options I have when trying to deal with cheating.”',
      B: '"Our long weekly meetings mean that I just have to wait until then to report any issues I have... it takes all the guessing work out of having to deal with cheating.”',
    },
    sources: {
      A: "GTA with formal training and monthly supervision",
      B: "GTA wth no formal training and heavy supervision",
    },
  },
  {
    id: 4,
    img: img4,
    caption: "Department",
    headerTitle:
      "Department: Grading Issues are Assessed at the Departmental Level",
    headerSubtitle:
      "When required or asked for, departments will help GTAs take action",
    quotes: {
      A: '"It is nice to know that [my department] trust that I will handle general issues by myself but will step in as required or needed".”',
      B: '"The department pretty much handles all cases of cheating right away since they set the syllabus and policies... I just enforce them”',
    },
    sources: {
      A: "GTA with formal training and monthly supervision",
      B: "GTA with formal training and heavy supervision",
    },
  },
  {
    id: 5,
    img: img5,
    caption: "Resolution",
    headerTitle:
      "Resolution: Grading Issue is Resolved Between the GTA and Student",
    headerSubtitle:
      "GTA's future grading confidence is based on the outcome and mentoring/support given or gained",
    quotes: {
      A: '"I fell confident that in the future I can handle a lot of the reporting process on my own since either way [my advisor] will be there to help me.”',
      B: '"I cannot say that I feel confident handling serious AI issues since I was never really in a position to make those decisions.”',
    },
    sources: {
      A: "GTA with formal training and monthly supervision",
      B: "GTA with no formal training and variable supervision",
    },
  },
];

/**
 * InteractiveSteps component displays a horizontal row of step cards, each
 * containing an image and caption. Clicking a step darkens, blurs, and adds a
 * soft glow to its image, revealing a custom header and two quote boxes below.
 * The first step is selected by default.
 *
 * Props:
 * - steps (array): override defaultSteps
 */
export default function InteractiveSteps({ steps = defaultSteps }) {
  // default to first step selected
  const [selectedStep, setSelectedStep] = useState(steps[0].id);
  const current = steps.find((s) => s.id === selectedStep);

  return (
    <section className="section-wrapper px-6 max-w-4xl mx-auto">
      {/* everything here scrolls together */}
      <div className="overflow-x-auto py-8 px-6">
        {/* wrapper that is exactly as wide as the cards, so arrow = cards-width */}
        <div className="relative w-max mx-auto pr-8">
          {/* arrow sits behind the cards */}
          <div className="absolute inset-0 flex items-center z-0 pointer-events-none">
            <div className="flex-1 h-2 bg-[#0a2863]"></div>
            <div
              className="w-0 h-0
                        border-t-[12px] border-t-transparent
                        border-b-[12px] border-b-transparent
                        border-l-[24px] border-l-[#0a2863]
                        -ml-0.5"
            ></div>
          </div>

          {/* step cards */}
          <div className="flex space-x-6 md:space-x-8 relative z-10">
            {steps.map((step) => (
              <div
                key={step.id}
                onClick={() =>
                  setSelectedStep((prev) => (prev === step.id ? null : step.id))
                }
                className="
            flex-shrink-0     
            w-24               
            flex flex-col 
            items-center 
            cursor-pointer
            "
              >
                <img
                  src={step.img}
                  alt={step.caption}
                  className={`w-24 h-24 object-cover rounded transition-filter duration-200 ${
                    selectedStep === step.id
                      ? "filter brightness-100 blur-[0px] drop-shadow-[0_0_10px_rgba(251,201,59,1)]"
                      : "filter brightness-100 blur-0"
                  }`}
                />
                <p className="mt-2 text-center text-xs md:text-sm font-semibold text-gray-700 truncate">
                  {step.caption}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* popup content for selected step */}
      {current && (
        <>
          {/* header above quotes */}
          <div className="flex flex-col items-center space-y-1 mb-4">
            <h2 className="text-2xl font-bold text-backgroundred">
              {current.headerTitle}
            </h2>
            <h3 className="text-lg text-gray-600">{current.headerSubtitle}</h3>
          </div>

          {/* quotes */}
          <div className="flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0">
            {Object.entries(current.quotes).map(([key, quote]) => (
              <div
                key={key}
                className="flex-1 bg-white p-6 rounded-2xl shadow-lg flex flex-col justify-between"
              >
                <p className="text-lg font-semibold italic text-gray-900">
                  {quote}
                </p>
                <p className="text-md text-right italic text-gray-900 mt-4">
                  {`– ${current.sources[key]}`}
                </p>
              </div>
            ))}
          </div>
        </>
      )}
    </section>
  );
}

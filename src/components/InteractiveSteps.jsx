// src/components/InteractiveSteps.jsx
import React, { useState } from "react";

// Import your step images below
import img1 from "../images/gradingstudy/preliminary.png";
import img2 from "../images/gradingstudy/gradingissue.png";
import img3 from "../images/gradingstudy/assessment.png";
import img4 from "../images/gradingstudy/action.png";
import img5 from "../images/gradingstudy/resolution.png";

// Persona images
import persona1 from "../images/gradingstudy/persona1.png"; // Jenny
import persona2 from "../images/gradingstudy/persona2.png"; // Dan

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
    jennyText:
      "The formal training and first-hand experiences resolving grading issues has led Jenny to feel confident in being able to solve most grading issues.",
    danText:
      "With no formal training and little experience resolving grading issues, Dan feels like his only real solution is to have a faculty member solve his problems.",
    keyTakeaway:
      "Positive experience is the largest factor in determining instructors' confidence, however, new instructors rely on formal directed training to mitigate for a lack of experience.",
  },
  {
    id: 2,
    img: img2,
    caption: "Grading",
    headerTitle: "Grading: GTA Recognizes a Grading Issue from a Student",
    headerSubtitle: "Formal training helps GTAs identify policy violations",
    quotes: {
      A: "“The teaching class helped me prepare and look out for signs of cheating, especially to try and detect AI usage.”",
      B: "“I knew cheating was always going to happen, but I was unsure how I should even go about catching it.”",
    },
    sources: {
      A: "GTA with formal training and monthly supervision",
      B: "GTA with some training and no supervision",
    },
    jennyText:
      "Past first-hand experiences make it easier for Jenny to detect abnormal behavior and spot policy violations quickly.",
    danText:
      "Having never directly resolved grading issues, Dan is more likely to miss warning signs or second-guess whether a situation counts as cheating.",
    keyTakeaway:
      "Formal training is particularly helpful for newer instructors to identify policy violations, however, veteran instructors also rely on personal experience to detect abnormal behavior.",
  },
  {
    id: 3,
    img: img3,
    caption: "Assessment",
    headerTitle: "Assessment: GTA Determines the Best Course of Action",
    headerSubtitle:
      "Self-confidence in teaching plus course/department policy guide the actions taken by the GTA",
    quotes: {
      A: '"The monthly check-ins with other GTAs and our supervisor have been a great resource to figure out what options I have when trying to deal with cheating.”',
      B: '"Our long weekly meetings mean that I just have to wait until then to report any issues I have... it takes all the guessing work out of having to deal with cheating.”',
    },
    sources: {
      A: "GTA with formal training and monthly supervision",
      B: "GTA with no formal training and heavy supervision",
    },
    jennyText:
      "Higher self-confidence from first-hand experience and clear policy knowledge leads Jenny to collect relevant information and narrow down options before looping in a supervisor.",
    danText:
      "Lower self-confidence and limited practice lead Dan to escalate even minor issues or escalate with incomplete information, increasing faculty load and slowing resolution.",
    keyTakeaway:
      "Without personally resolving previous policy violations, instructors lack the confidence to determine the best course of action and relies more heavily on the department to solve all issues within their classrooms.",
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
      A: '"It is nice to know that [my department] trust that I will handle general issues by myself but will step in as required or needed.”',
      B: '"The department pretty much handles all cases of cheating right away since they set the syllabus and policies... I just enforce them.”',
    },
    sources: {
      A: "GTA with formal training and monthly supervision",
      B: "GTA with formal training and heavy supervision",
    },
    jennyText:
      "Jenny’s department provides guidance while trusting her judgment, which encourages her to take the lead in conflict resolution.",
    danText:
      "Dan’s department takes over almost all academic issues, which limits his opportunities to build conflict-resolution skills over time.",
    keyTakeaway:
      "Departments that provide a supporting role give instructors the highest chance to gain more experience, meanwhile, departments which simply take over the entire process deny instructors the experience which later benefits their self-confidence.",
  },
  {
    id: 5,
    img: img5,
    caption: "Resolution",
    headerTitle:
      "Resolution: Grading Issue is Resolved Between the GTA and Student",
    headerSubtitle:
      "Future grading confidence is based on the outcome and mentoring/support given or gained",
    quotes: {
      A: '"I feel confident that in the future I can handle a lot of the reporting process on my own since either way [my advisor] will be there to help me.”',
      B: '"I cannot say that I feel confident handling serious AI issues since I was never really in a position to make those decisions.”',
    },
    sources: {
      A: "GTA with formal training and monthly supervision",
      B: "GTA with no formal training and variable supervision",
    },
    jennyText:
      "Having actively participated in resolving the issue, Jenny walks away with more experience, higher self-confidence, and clearer mental models for what to do next time.",
    danText:
      "Because the department handled most of the process, Dan gains little new experience, remains unsure how to proceed in the future, and continues to rely on others for resolution.",
    keyTakeaway:
      "Instructors who handle policy violations from start to finish walk away with a more comprehensive experience and higher self-confidence in their own problem solving skills. In contrast, instructors that only reported policy violations will repeatedly rely on their departments even when facing similar issues in the future.",
  },
];

/**
 * InteractiveSteps component displays a horizontal row of step cards, each
 * containing an image and caption. Clicking a step darkens, blurs, and adds a
 * soft glow to its image, revealing a custom header and two persona boxes plus
 * a per-step Key Takeaway underneath.
 *
 * Props:
 * - steps (array): override defaultSteps
 */
export default function InteractiveSteps({ steps = defaultSteps }) {
  // default to first step selected
  const [selectedStep, setSelectedStep] = useState(steps[0].id);
  const current = steps.find((s) => s.id === selectedStep);

  // Fallback to previous quote text if explicit per-step text isn't provided
  const jennyText = current?.jennyText || current?.quotes?.A || "";
  const danText = current?.danText || current?.quotes?.B || "";

  // Automatically strip starting/ending quotation marks if any
  const clean = (str) => (str ? str.replace(/^"+|"+$/g, "") : "");

  const jennyClean = clean(jennyText);
  const danClean = clean(danText);

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

      {/* content for selected step */}
      {current && (
        <>
          {/* header above personas */}
          <div className="flex flex-col items-center space-y-1 mb-4">
            <h2 className="text-2xl font-bold text-backgroundred">
              {current.headerTitle}
            </h2>
            <h3 className="text-lg text-gray-600">{current.headerSubtitle}</h3>
          </div>

          {/* persona comparison row */}
          <div className="flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0">
            {/* Jenny card */}
            <div className="flex-1 bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center">
              <img
                src={persona1}
                alt="Jenny Acworth"
                className="w-16 h-16 rounded-full object-cover mb-3"
              />
              <p className="text-lg font-semibold text-gray-900">
                Jenny Acworth
              </p>
              <p className="text-sm text-gray-600 mb-4 text-center">
                <span className="font-semibold">Training:</span> Formal |{" "}
                <span className="font-semibold">Dpt. Support:</span> Happy
              </p>
              <p className="text-md text-gray-900 text-center">{jennyClean}</p>
            </div>

            {/* Dan card */}
            <div className="flex-1 bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center">
              <img
                src={persona2}
                alt="Dan Kennesaw"
                className="w-16 h-16 rounded-full object-cover mb-3"
              />
              <p className="text-lg font-semibold text-gray-900">
                Dan Kennesaw
              </p>
              <p className="text-sm text-gray-600 mb-4 text-center">
                <span className="font-semibold">Training:</span> Informal |{" "}
                <span className="font-semibold">Dpt. Support:</span> Unhappy
              </p>
              <p className="text-md text-gray-900 text-center">{danClean}</p>
            </div>
          </div>

          {/* Key Takeaway Section — per step */}
          <div className="mt-8 text-center">
            <h3 className="text-3xl font-extrabold text-gray-900 mb-3">
              Key Takeaway
            </h3>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              {current.keyTakeaway ||
                "Add a key takeaway for this stage of the grading journey to summarize the contrast between personas and highlight the design insight."}
            </p>
          </div>
        </>
      )}
    </section>
  );
}

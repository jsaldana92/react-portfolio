// src/components/MethodologyFlipCards.jsx
import React, { useEffect, useMemo, useState } from "react";

export default function MethodologyFlipCards({ flowBoxes }) {
  // Card content (front/back) and grid placement / text alignment
  const cards = useMemo(
    () => [
      {
        gridClass: "col-start-1 row-start-1 text-sm md:text-lg font-semibold",
        front: (
          <>
            <span className="text-blue-500">Pull Data</span> | Split Hyperlink
            and Non-Hyperlinked Lectures
          </>
        ),
        back: (
          <>
            Split the data into two groups: weeks with links vs. weeks without.
          </>
        ),
      },
      {
        gridClass:
          "col-start-3 row-start-1 text-end text-sm md:text-lg font-semibold",
        front: (
          <>
            <span className="text-blue-500">Encrypt</span> and{" "}
            <span className="text-blue-500">De-identify</span> Sensitive
            Information
          </>
        ),
        back: (
          <>Remove names/IDs and keep only the fields needed for analysis.</>
        ),
      },
      {
        gridClass:
          "col-start-2 row-start-2 text-center text-sm md:text-lg font-semibold",
        front: (
          <>
            <span className="text-blue-500">Repeated Measures t-Test</span> to
            Compare Hyperlinking Impact
          </>
        ),
        back: <>Compare students' average linked vs. not-linked engagement.</>,
      },
      {
        gridClass: "col-start-1 row-start-3 text-sm md:text-lg font-semibold",
        front: (
          <>
            <span className="text-blue-500">Linear Regression:</span> Hyperlink,
            Engagement, and Grades Relationship
          </>
        ),
        back: (
          <>
            Check how class behavior and engagement metrics relate to final
            grades.
          </>
        ),
      },
      {
        gridClass:
          "col-start-3 row-start-3 text-end text-sm md:text-lg font-semibold",
        front: (
          <>
            <span className="text-blue-500">Chi-Square Comparison</span> Between
            Full and Null Model
          </>
        ),
        back: (
          <>
            Verify that variables actually predict final grades better than
            chance.
          </>
        ),
      },
    ],
    []
  );

  // true = front, false = back
  const [isFront, setIsFront] = useState(() => Array(cards.length).fill(true));

  // Global target orientation (random start), toggles every 5s
  const [targetFront, setTargetFront] = useState(() => Math.random() < 0.5);

  // Scheduled flip every 5 seconds
  useEffect(() => {
    const id = setInterval(() => {
      // Flip only cards whose current side matches the target
      setIsFront((prev) =>
        prev.map((face) => (face === targetFront ? !face : face))
      );
      setTargetFront((t) => !t);
    }, 5000);
    return () => clearInterval(id);
  }, [targetFront]);

  // User flip (per-card)
  const handleFlip = (idx) => {
    setIsFront((prev) => {
      const next = [...prev];
      next[idx] = !next[idx];
      return next;
    });
  };

  return (
    <div className="relative z-10 w-full grid grid-cols-3 grid-rows-3 gap-6">
      {cards.map((card, i) => (
        <div
          key={i}
          ref={flowBoxes?.[i] || null}
          onClick={() => handleFlip(i)}
          className={`bg-white p-1 md:p-6 w-full rounded shadow min-w-0 break-words ${card.gridClass} cursor-pointer`}
        >
          {/* Wrapper so height is driven by whichever side is visible */}
          <div className="relative w-full">
            {/* FRONT SIDE */}
            <p
              className={`text-black transition-opacity duration-300 ${
                isFront[i] ? "opacity-100 static" : "opacity-0 absolute inset-0"
              }`}
            >
              {card.front}
            </p>

            {/* BACK SIDE */}
            <p
              className={`text-black transition-opacity duration-300 ${
                isFront[i] ? "opacity-0 absolute inset-0" : "opacity-100 static"
              }`}
            >
              {card.back}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

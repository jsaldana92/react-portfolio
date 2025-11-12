// src/components/ROGrid.jsx
import React from "react";
import flutterLogo from "../images/flutterlogo.svg";
import kotlinLogo from "../images/kotlinlogo.svg";
import javaLogo from "../images/javalogo.svg";

// ✅ check icon
const Check = () => (
  <svg
    className="w-5 h-5 inline-block align-middle text-green-600"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M16.707 5.293a1 1 0 010 1.414l-7.25 7.25a1 1 0 01-1.414 0L3.293 9.957a1 1 0 011.414-1.414l3.043 3.043 6.543-6.543a1 1 0 011.414 0z"
      clipRule="evenodd"
    />
  </svg>
);

// ❌ X icon
const XMark = () => (
  <svg
    className="w-5 h-5 inline-block align-middle text-red-500"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
      clipRule="evenodd"
    />
  </svg>
);

// Grid cell helper
const Cell = ({ children, className = "" }) => (
  <div className={`p-3 md:p-4 border-b border-gray-200 ${className}`}>
    {children}
  </div>
);

export default function ROGrid() {
  const rows = [
    {
      req: "Beginner Friendly",
      java: false,
      kotlin: true,
      flutter: true,
    },
    {
      req: "Multi Platform (Android + iOS)",
      java: false,
      kotlin: false,
      flutter: true,
    },
    {
      req: "Ease of Editing",
      java: false,
      kotlin: true,
      flutter: true,
    },
    {
      req: "Output .txt Files",
      java: true,
      kotlin: true,
      flutter: true,
    },
  ];

  return (
    <section className="max-w-4xl mx-auto px-6 mb-8 cursor-auto">
      <header className="text-center mb-6">
        <h2 className="text-3xl font-extrabold">Stakeholder Requirements</h2>
      </header>

      {/* Grid table */}
      <div
        role="table"
        className="grid grid-cols-1 md:grid-cols-4 bg-white rounded-2xl shadow-lg overflow-hidden"
      >
        {/* Header row */}
        <div
          role="row"
          className="hidden md:contents bg-gray-50 text-sm font-semibold text-gray-700"
        >
          <Cell role="columnheader">Requirements</Cell>
          <Cell role="columnheader" className="flex items-center gap-2">
            <img src={javaLogo} alt="Java" className="w-6 h-6" />
            <span>Java</span>
          </Cell>
          <Cell role="columnheader" className="flex items-center gap-2">
            <img src={kotlinLogo} alt="Kotlin" className="w-6 h-6" />
            <span>Kotlin</span>
          </Cell>
          <Cell role="columnheader" className="flex items-center gap-2">
            <img src={flutterLogo} alt="Flutter" className="w-6 h-6" />
            <span>Flutter</span>
          </Cell>
        </div>

        {/* Mobile stacked header */}
        <div className="md:hidden p-3 border-b border-gray-200 bg-gray-50 text-sm font-semibold text-gray-700">
          Requirements / Java / Kotlin / Flutter
        </div>

        {/* Rows */}
        {rows.map((r) => (
          <React.Fragment key={r.req}>
            <Cell className="font-medium text-gray-900">{r.req}</Cell>

            <Cell>{r.java ? <Check /> : <XMark />}</Cell>
            <Cell>{r.kotlin ? <Check /> : <XMark />}</Cell>
            <Cell>{r.flutter ? <Check /> : <XMark />}</Cell>
          </React.Fragment>
        ))}
      </div>

      <p className="mt-3 text-xs text-gray-500 text-center">
        ✅ = Meets requirement  ❌ = Does not meet requirement
      </p>
    </section>
  );
}

// src/components/TopNav.jsx
import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const pages = [
  { label: "Home", to: "/" },
  { label: "ResearchObs", to: "/ResearchObs" },
  { label: "DataPuller", to: "/DataPuller" },
  { label: "Hyperlink Engagement", to: "/HyperlinkEngagement" },
  { label: "GTA Grading Experience", to: "/GTAGradingExperience" },
  { label: "SEEHB Website", to: "/SEEHB" },
];

export default function TopNav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        {/* Desktop Nav */}
        <div className="hidden md:flex h-16 items-center justify-center">
          <ul className="flex justify-center space-x-8 py-2 w-full">
            {pages.map((page) => (
              <li key={page.to} className="relative">
                <NavLink
                  to={page.to}
                  end
                  className={({ isActive }) =>
                    `px-4 py-1 transition ${
                      isActive
                        ? "text-blue-600 font-semibold"
                        : "text-gray-800 font-medium"
                    }`
                  }
                >
                  {page.label}
                </NavLink>
                {pathname === page.to && (
                  <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2">
                    <span className="block w-6 h-0.5 bg-gradient-to-r from-blue-500 to-teal-400 rounded-full" />
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Nav */}
        <div className="flex md:hidden h-16 items-center justify-between">
          <span className="text-lg font-bold text-gray-800">
            {pages.find((p) => p.to === pathname)?.label || "Home"}
          </span>
          <button
            onClick={() => setMenuOpen((o) => !o)}
            className="p-2 text-gray-800 hover:text-blue-600 transition"
            aria-label="Toggle menu"
          >
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg">
            <ul className="flex flex-col">
              {pages.map((page) => (
                <li key={page.to}>
                  <NavLink
                    to={page.to}
                    end
                    onClick={() => setMenuOpen(false)}
                    className="block w-full text-left px-6 py-3 text-gray-800 hover:bg-gray-100 transition"
                  >
                    {page.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

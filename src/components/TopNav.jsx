// src/components/TopNav.jsx
import React, { useRef, useEffect, useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const pages = [
  'Home',
  'CEBUS-ResearchObs',
  'DataPuller',
  'Hyperlink Engagement',
  'GTA Grading Experience',
  'SEEHB Website'
];

export default function TopNav({ currentPage, setCurrentPage }) {
  const scrollRef = useRef(null);
  const [itemWidths, setItemWidths] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);

  // Measure items for auto-centering
  useEffect(() => {
    if (!scrollRef.current) return;
    const widths = Array.from(scrollRef.current.children).map(el => el.offsetWidth + 32);
    setItemWidths(widths);
  }, []);

  // Center the current page in the scroll area
  useEffect(() => {
    if (!scrollRef.current || itemWidths.length !== pages.length) return;
    const idx = pages.indexOf(currentPage);
    const offset = itemWidths.slice(0, idx).reduce((a, w) => a + w, 0);
    const center = scrollRef.current.clientWidth / 2 - itemWidths[idx] / 2;
    scrollRef.current.scrollTo({ left: offset - center, behavior: 'smooth' });
  }, [currentPage, itemWidths]);

  // Fade levels based on distance from active
  const getNavItemClass = i => {
    const distance = Math.abs(i - pages.indexOf(currentPage));
    const level = Math.min(distance, 4);
    return [
      'text-blue-600 font-semibold',    // active
      'text-gray-800/90',
      'text-gray-800/70',
      'text-gray-800/50',
      'text-gray-800/30'
    ][level];
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        {/* Desktop */}
        <div className="hidden md:flex h-16 items-center">
          <ul
            ref={scrollRef}
            className="flex space-x-8 overflow-x-auto no-scrollbar py-2"
          >
            {pages.map((page, i) => (
              <li key={page} className="relative">
                <button
                  onClick={() => setCurrentPage(page)}
                  className={`px-4 py-1 transition ${getNavItemClass(i)}`}
                >
                  {page}
                </button>
                {currentPage === page && (
                  <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2">
                    <span className="block w-6 h-0.5 bg-gradient-to-r from-blue-500 to-teal-400 rounded-full" />
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile */}
        <div className="flex md:hidden h-16 items-center justify-between">
          <span className="text-lg font-bold text-gray-800">
            {currentPage}
          </span>
          <button
            onClick={() => setMenuOpen(o => !o)}
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
              {pages.map(page => (
                <li key={page}>
                  <button
                    onClick={() => {
                      setCurrentPage(page);
                      setMenuOpen(false);
                    }}
                    className="w-full text-left px-6 py-3 text-gray-800 hover:bg-gray-100 transition"
                  >
                    {page}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

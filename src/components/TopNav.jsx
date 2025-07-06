// src/components/TopNav.jsx
import React, { useRef, useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

const pages = [
  { label: 'Home', to: '/' },
  { label: 'CEBUS-ResearchObs', to: '/CEBUS-ResearchObs' },
  { label: 'DataPuller', to: '/DataPuller' },
  { label: 'Hyperlink Engagement', to: '/Hyperlink Engagement' },
  { label: 'GTA Grading Experience', to: '/GTA Grading Experience' },
  { label: 'SEEHB Website', to: '/SEEHB' },
];

export default function TopNav() {
  const scrollRef = useRef(null);
  const [itemWidths, setItemWidths] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;

  // Measure each nav-item width + padding for centering
  useEffect(() => {
    const ul = scrollRef.current;
    if (!ul) return;
    const widths = Array.from(ul.children).map(el => el.offsetWidth + 32);
    setItemWidths(widths);
  }, []);

  // Center the active item in the scroll area
  useEffect(() => {
    const ul = scrollRef.current;
    if (!ul || itemWidths.length !== pages.length) return;
    const idx = pages.findIndex(p => p.to === currentPath);
    if (idx < 0) return;
    const offset = itemWidths.slice(0, idx).reduce((a, w) => a + w, 0);
    const center = ul.clientWidth / 2 - itemWidths[idx] / 2;
    ul.scrollTo({ left: offset - center, behavior: 'smooth' });
  }, [currentPath, itemWidths]);

  // Fade levels based on distance from the active index
  const getNavItemClass = i => {
    const idx = pages.findIndex(p => p.to === currentPath);
    const distance = Math.abs(i - idx);
    const level = Math.min(distance, 4);
    return [
      'text-blue-600 font-semibold',   // active
      'text-gray-800/90',
      'text-gray-800/70',
      'text-gray-800/50',
      'text-gray-800/30',
    ][level];
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        {/* Desktop Nav */}
        <div className="hidden md:flex h-16 items-center">
          <ul
            ref={scrollRef}
            className="flex space-x-8 overflow-x-auto no-scrollbar py-2"
          >
            {pages.map((page, i) => (
              <li key={page.to} className="relative">
                <NavLink
                  to={page.to}
                  end
                  className={`px-4 py-1 transition ${getNavItemClass(i)}`}
                >
                  {page.label}
                </NavLink>
                {currentPath === page.to && (
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
            {pages.find(p => p.to === currentPath)?.label || 'Home'}
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

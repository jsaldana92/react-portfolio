//./src/components/TopNav.jsx
import React, { useRef, useEffect, useState } from 'react';

const pages = ['Home', 'Example1', 'Example2', 'Example3', 'Example4'];

function TopNav({ currentPage, setCurrentPage }) {
    const scrollRef = useRef(null);
    const [itemWidths, setItemWidths] = useState([]);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        if (scrollRef.current) {
            const widths = Array.from(scrollRef.current.children).map(
                (el) => el.offsetWidth + 16
            );
            setItemWidths(widths);
        }
    }, 
    []);

    useEffect(() => {
        const el = scrollRef.current;
        if (el && itemWidths.length === pages.length) {
            const currentIdx = pages.indexOf(currentPage);
            const scrollTo =
                itemWidths.slice(0, currentIdx).reduce((acc, w) => acc + w, 0) -
                (el.clientWidth / 2 - itemWidths[currentIdx] / 2);
            el.scrollTo({ left: scrollTo, behavior: 'smooth' });
        }
    }, [currentPage, itemWidths]);

    const getFadeClass = (index) => {
        const currentIdx = pages.indexOf(currentPage);
        const maxDistance = 4;
        const distance = Math.abs(index - currentIdx);
        const fadeLevel = Math.min(distance, maxDistance);

        const shadeByLevel = {
        0: 'text-white font-bold',
        1: 'text-gray-600',
        2: 'text-gray-700',
        3: 'text-gray-800',
        4: 'text-gray-900',
        };

        return shadeByLevel[fadeLevel];
    };

    return (
        <nav className=" bg-black">
            {/* Desktop Nav (md and up) */}
            <div className="hidden md:flex justify-center">
                <ul
                    ref={scrollRef}
                    className="flex gap-4 px-6 py-3 overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar whitespace-nowrap"
                    >
                    {pages.map((page, i) => (
                        <li
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className={`cursor-pointer snap-center px-4 py-2 ${getFadeClass(i)} transition-colors duration-300`}
                        >
                        {page}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Mobile Nav (below md) */}
            <div className="flex md:hidden justify-between items-center px-4 py-3">
                <span className="text-white font-bold text-lg">{currentPage}</span>
                <button
                    className="text-white text-2xl focus:outline-none"
                    onClick={() => setMenuOpen(!menuOpen)}
                    >
                    ☰
                </button>
            </div>

            {/* Mobile Dropdown */}
            {menuOpen && (
                <div className="md:hidden absolute top-14 right-4 z-50 bg-black rounded-lg shadow-lg p-2">
                    <ul className="flex flex-col gap-1 min-w-[150px]">
                        {pages.map((page) => (
                            <li
                            key={page}
                            onClick={() => {
                                setCurrentPage(page);
                                setMenuOpen(false);
                            }}
                            className="text-white px-4 py-2 hover:bg-gray-800 rounded cursor-pointer transition"
                            >
                                {page}
                            </li>
                        ))}
                    </ul>
                </div>
            )}

        </nav>
    );
}

export default TopNav;

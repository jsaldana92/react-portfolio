import React, { useRef, useEffect, useState } from 'react';

const pages = ['Home', 'Example1', 'Example2', 'Example3', 'Example4'];

function TopNav({ currentPage, setCurrentPage }) {
    const scrollRef = useRef(null);
    const [itemWidths, setItemWidths] = useState([]);

    useEffect(() => {
        if (scrollRef.current) {
            const widths = Array.from(scrollRef.current.children).map(el => el.offsetWidth + 16);
            setItemWidths(widths);
        }
    }, 
    []);

    useEffect(() => {
        const el = scrollRef.current;
        if (el && itemWidths.length === pages.length) {
            const currentIdx = pages.indexOf(currentPage);
            const scrollTo = itemWidths
            .slice(0, currentIdx)
            .reduce((acc, w) => acc + w, 0) - (el.clientWidth / 2 - itemWidths[currentIdx] / 2);
            el.scrollTo({ left: scrollTo, behavior: 'smooth' });
        }
    }, [currentPage, itemWidths]);

    const getFadeClass = (index) => {
        const currentIdx = pages.indexOf(currentPage);
        const maxDistance = 4; // how many steps away before max fade

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
        <nav className="border-b border-gray-300 bg-black">
            <div className="flex justify-center">
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
        </nav>
    );
}

export default TopNav;

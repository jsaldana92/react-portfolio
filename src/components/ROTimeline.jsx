import React, { useState, useEffect } from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import timelineImg from "../images/researchobs/ROTimeline.png";

export default function ROTimeline() {
  // detect mobile width for responsive behavior
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' ? window.innerWidth < 768 : false
  );

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="w-full mx-auto p-6">
      {/* Title */}
      <div className="flex items-center justify-center mb-6">
        <h3 className="text-3xl text-center font-extrabold">Research and Development Timeline</h3>
      </div>

      <div className="border border-gray-200 rounded-lg shadow-lg bg-white">
        <TransformWrapper
          initialScale={isMobile ? 5 : 2.5}
          minScale={1}
          maxScale={10}
          initialPositionX={0}
          centerOnInit={false}
          wheel={{ step: 0.1 }}
          pinch={{ step: 5 }}
          doubleClick={{ disabled: true }}
          pan={{ disabled: false, lockAxisX: false, lockAxisY: false }}
        >
          {({ zoomIn, zoomOut, resetTransform }) => (
            <>
              {/* Controls bar */}
              <div className="flex justify-center space-x-2 p-2 border-b border-gray-200">
                <button
                  type="button"
                  onClick={() => zoomIn()}
                  className="cursor-pointer px-3 py-1 bg-gray-200 rounded shadow hover:bg-gray-300"
                >
                  ＋
                </button>
                <button
                  type="button"
                  onClick={() => zoomOut()}
                  className="cursor-pointer px-3 py-1 bg-gray-200 rounded shadow hover:bg-gray-300"
                >
                  －
                </button>
                <button
                  type="button"
                  onClick={() => resetTransform()}
                  className="cursor-pointer px-3 py-1 bg-gray-200 rounded shadow hover:bg-gray-300"
                >
                  Reset
                </button>
              </div>

              {/* Scrollable zoom area with responsive height */}
              <div
                className="overflow-auto touch-pan-y h-[200px] md:h-[300px]"
                style={{ touchAction: "pan-y pinch-zoom" }}
              >
                <TransformComponent wrapperStyle={{ height: '100%', width: 'auto' }}>
                  <div className="cursor-grab active:cursor-grabbing h-full flex items-center">
                    <img
                      src={timelineImg}
                      alt="Development timeline"
                      className="h-full w-auto"
                    />
                  </div>
                </TransformComponent>
              </div>
            </>
          )}
        </TransformWrapper>
      </div>
    </section>
  );
}

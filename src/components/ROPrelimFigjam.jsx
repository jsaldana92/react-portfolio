import React from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import flowImg from "../images/researchobs/ROPrelimFig.png";
import figmaLogo from "../images/datapuller/figma_logo.png";

export default function ROPrelimFigjam() {
  return (
    <section className="max-w-4xl mx-auto p-6">
      {/* Title with Figma and Rust logos */}
      <div className="flex items-center justify-center mb-6">
        <h3 className="text-3xl font-extrabold flex items-center">
          Journey Map
        </h3>
      </div>

      {/* Full border on all sides, white background */}
      <div className="border border-gray-200 rounded-lg shadow-lg bg-white">
        <TransformWrapper
          initialScale={0.4}
          wheel={{ step: 0.1 }}
          pinch={{ step: 5 }}
          doubleClick={{ disabled: true }}
          /* 👇 prevent snap-back */
          limitToBounds={false}
          centerOnInit={false}
          centerZoomedOut={false}
          /* 👇 correct prop name + keep free panning */
          panning={{
            disabled: false,
            lockAxisX: false,
            lockAxisY: false,
            velocityDisabled: true,
          }}
        >
          {({ zoomIn, zoomOut, resetTransform }) => (
            <>
              {/* Controls bar with bottom border */}
              <div className="flex justify-center space-x-2 p-2 border-b border-gray-200">
                <button
                  onClick={() => zoomIn()}
                  className="px-3 py-1 bg-gray-200 rounded shadow hover:bg-gray-300"
                >
                  ＋
                </button>
                <button
                  onClick={() => zoomOut()}
                  className="px-3 py-1 bg-gray-200 rounded shadow hover:bg-gray-300"
                >
                  －
                </button>
                <button
                  onClick={() => resetTransform()}
                  className="px-3 py-1 bg-gray-200 rounded shadow hover:bg-gray-300"
                >
                  Reset
                </button>
              </div>

              {/* Taller scrollable zoom area */}
              <div
                className="overflow-auto touch-pan-y h-[600px] select-none"
                style={{ touchAction: "pan-y pinch-zoom" }}
              >
                <TransformComponent
                  wrapperClass="!w-full !h-full"
                  contentClass="!w-auto !h-full"
                >
                  <div className="cursor-grab active:cursor-grabbing">
                    <img
                      src={flowImg}
                      alt="Speed chart"
                      className="block h-full max-w-none"
                      draggable={false}
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

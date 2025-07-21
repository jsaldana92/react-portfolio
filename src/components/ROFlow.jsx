import React from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import finalFlowImg from "../images/researchobs/ROFlow.png";
import figmaLogo from "../images/datapuller/figma_logo.png";

export default function ROFlow() {
  return (
    <section className="max-w-4xl mx-auto p-6">
      {/* Title with Figma and Rust logos */}
      <div className="flex items-center justify-center mb-6">
        <img src={figmaLogo} alt="Figma logo" className="w-6 h-8 mr-2" />
        <h3 className="text-3xl font-extrabold flex items-center">
          FigJam Flow Chart Initial Development
        </h3>
      </div>

      {/* Full border on all sides, white background */}
      <div className="border border-gray-200 rounded-lg shadow-lg bg-white">
        <TransformWrapper
          initialScale={1}
          wheel={{ step: 0.1 }}
          pinch={{ step: 5 }}
          doubleClick={{ disabled: true }}
          pan={{ disabled: false, lockAxisX: false, lockAxisY: false }}
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
              {/* Scrollable zoom area */}
              <div
                className="overflow-auto touch-pan-y max-h-[600px]"
                style={{ touchAction: "pan-y pinch-zoom" }}
              >
                <TransformComponent>
                  <div className="cursor-grab active:cursor-grabbing">
                    <img
                      src={finalFlowImg}
                      alt="Speed chart"
                      className="w-full h-auto"
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

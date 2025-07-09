// src/components/PersonaTemplate.jsx
import React from 'react';

export default function PersonaTemplate({
  // Top
  imageSrc,
  name,
  age,
  quote,

  // Demographics section
  leftTopDem,
  leftBottomDem,
  rightTopDem,
  rightBottomDem,
  LTIcon: LeftTopIcon,
  LBIcon: LeftBottomIcon,
  RTIcon: RightTopIcon,
  RBIcon: RightBottomIcon,

  // Behavioral Identities section
  TLBehavior,
  MLBehavior,
  BLBehavior,
  TRBehavior,
  MRBehavior,
  BRBehavior,
  TLIcon: TopLeftIcon,
  MLIcon: MiddleLeftIcon,
  BLIcon: BottomLeftIcon,
  TRIcon: TopRightIcon,
  MRIcon: MiddleRightIcon,
  BRIcon: BottomRightIcon,
}) {
  // Tailwind classes for a fixed, consistent icon size
  const iconClass = "w-3 h-3 md:w-4 md:h-4 flex-shrink-0";

  return (
    <div className="max-w-md bg-white rounded-2xl shadow-lg overflow-hidden mx-auto">
      {/* Top: Image + Name/Age */}
      <div className="mt-2">
        <img
          src={imageSrc}
          alt={`${name}`}
          className="w-24 h-24 rounded-full mx-auto object-cover"
        />
        <p className="text-center text-lg md:text-xl font-semibold">
          {name} – {age}
        </p>
      </div>
      <div className='mb-4 px-4'>
        <p className='text-center text-md md:text-lg italic'>
          {quote}
        </p>
      </div>

      {/* line page break */}
      <div className="flex justify-center mb-4">
        <div className="w-4/5 h-1 bg-backgroundgrey rounded-full" />
      </div>

      {/* Middle: Demographics */}
      <div className="px-4 pb-8">
        <h3 className="text-lg md:text-xl font-semibold text-center mb-4">
          Demographics
        </h3>
        <div className="grid  text-sm md:text-md grid-cols-2 gap-4">
          <div className="flex items-center  space-x-2">
            {LeftTopIcon && <LeftTopIcon className={iconClass} />}
            <span className="font-semibold">{leftTopDem}</span>
          </div>
          <div className="flex items-center space-x-2">
            {RightTopIcon && <RightTopIcon className={iconClass} />}
            <span className="font-semibold">{rightTopDem}</span>
          </div>
          <div className="flex items-center space-x-2">
            {LeftBottomIcon && <LeftBottomIcon className={iconClass} />}
            <span className="font-semibold">{leftBottomDem}</span>
          </div>
          <div className="flex items-center space-x-2">
            {RightBottomIcon && <RightBottomIcon className={iconClass} />}
            <span className="font-semibold">{rightBottomDem}</span>
          </div>
        </div>
      </div>

      {/* line page break */}
      <div className="flex justify-center py-4">
        <div className="w-4/5 h-1 bg-backgroundgrey rounded-full" />
      </div>

      {/* Bottom: Behavioral Identities */}
      <div className="px-4 pb-8">
        <h3 className="text-lg md:text-xl font-semibold text-center mb-4">
          Behavioral Identities
        </h3>
        <div className="grid text-sm md:text-md grid-cols-2 grid-rows-3 gap-4">
          <div className="flex items-center space-x-2">
            {TopLeftIcon && <TopLeftIcon className={iconClass} />}
            <span className="font-semibold">{TLBehavior}</span>
          </div>
          <div className="flex items-center space-x-2">
            {TopRightIcon && <TopRightIcon className={iconClass} />}
            <span className="font-semibold">{TRBehavior}</span>
          </div>
          <div className="flex items-center space-x-2">
            {MiddleLeftIcon && <MiddleLeftIcon className={iconClass} />}
            <span className="font-semibold">{MLBehavior}</span>
          </div>
          <div className="flex items-center space-x-2">
            {MiddleRightIcon && <MiddleRightIcon className={iconClass} />}
            <span className="font-semibold">{MRBehavior}</span>
          </div>
          <div className="flex items-center space-x-2">
            {BottomLeftIcon && <BottomLeftIcon className={iconClass} />}
            <span className="font-semibold">{BLBehavior}</span>
          </div>
          <div className="flex items-center space-x-2">
            {BottomRightIcon && <BottomRightIcon className={iconClass} />}
            <span className="font-semibold">{BRBehavior}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

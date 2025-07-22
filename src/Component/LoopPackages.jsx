import React, { useState } from "react";
import data from "../DataStore/ActivatePackage.json";
import PackageActivate from "./Cards/PackageActivate";

export default function LoopPackages() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsToShow = 3; 

  // Calculate max index for sliding
  const maxIndex = data.length - itemsToShow;

  // Dots navigation
  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="w-full max-w-6xl">
      {/* Slider container */}
      <div className="relative overflow-hidden">
        {/* Slider items container */}
        <div
          className="flex gap-20 transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${(100 / itemsToShow) * currentIndex}%)`,
            width: `${(100 / itemsToShow) * data.length}%`,
          }}
        >
          {data.map((e, index) => (
            <div
              key={index}
              className="flex-shrink-0 gap-3"
              style={{ width: `${100 / data.length}%`, padding: "0 8px" }}
            >
              <PackageActivate
                imageUrl={e.imageUrl}
                packageName={e.packageName}
                theme={e.theme}
                duration={e.duration}
                inclusion={e.inclusion}
                price={e.price}
                onActivate={""}
                onDeactivate={""}
              />
            </div>
          ))}
        </div>

        {/* Prev and Next buttons */}
       
      </div>

      {/* Dots navigation */}
      <div className="flex justify-center  mt-4 gap-2">
        {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => handleDotClick(idx)}
            className={`h-3 w-3 cursor-pointer rounded-full ${
              idx === currentIndex ? "bg-gray-800" : "bg-gray-400"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

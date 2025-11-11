// File: src/components/Carousel.jsx
import React, { useState, useEffect, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { MoveRight } from "lucide-react";

const carouselItems = [
  {
    id: "1",
    title: "Chemical Oscillators",
    description:
      "Tutorial on modling chemical systems in which the concentrations of one or more reactants undergoes periodic changes.",
    link: "https://moose.ncbs.res.in/readthedocs/user/py/tutorials/ChemicalOscillators.html",
  },
  {
    id: "2",
    title: "Chemical Bistable Systems",
    description: "Tutorials on modelling bistable chemical systems",
    link: "https://moose.ncbs.res.in/readthedocs/user/py/tutorials/ChemicalBistables.html",
  },
  {
    id: "3",
    title: "Squid Giant Axon",
    description:
      "Graphical tool for simulating Hodgkin and Huxley's classic experiments on the squid giant axon",
    link: "https://moose.ncbs.res.in/readthedocs/user/py/tutorials/Squid.html",
  },
];

// Add a client-side only wrapper to avoid SSR issues
function ClientOnly({ children, fallback = null }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return fallback;
  }

  return children;
}

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleSlides, setVisibleSlides] = useState(2);
  const intervalRef = useRef(null);
  const touchStartX = useRef(null);

  // Calculate maxIndex based on the current visibleSlides
  const maxIndex = Math.max(0, carouselItems.length - visibleSlides);

  const handleResize = useCallback(() => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 640) {
        setVisibleSlides(1);
      } else {
        setVisibleSlides(2);
      }
    }
  }, []);

  const startAutoPlay = useCallback(() => {
    if (maxIndex > 0 && typeof window !== "undefined") {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
      }, 5000);
    }
  }, [maxIndex]);

  const stopAutoPlay = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    stopAutoPlay();
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (Math.abs(diff) > 50) {
      setCurrentIndex((i) =>
        diff > 0 ? Math.min(i + 1, maxIndex) : Math.max(i - 1, 0)
      );
    }

    touchStartX.current = null;
    startAutoPlay();
  };

  // Handle click events explicitly
  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => Math.max(0, prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => Math.min(maxIndex, prevIndex + 1));
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      handleResize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, [handleResize]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleKeyDown = (e) => {
        if (e.key === "ArrowLeft") setCurrentIndex((i) => Math.max(0, i - 1));
        else if (e.key === "MoveRight")
          setCurrentIndex((i) => Math.min(maxIndex, i + 1));
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }
  }, [maxIndex]);

  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay();
  }, [startAutoPlay, stopAutoPlay]);

  return (
    <ClientOnly
      fallback={<div className="text-center text-5xl">Loading carousel...</div>}
    >
      <h2 className="text-4xl font-semibold text-black text-center m-2 p-4 sm:mt-10 lg:mt-10">
        Tutorials
      </h2>
      <div className="bg-gradient-to-b from-brand-primary to-brand-tertiary text-white">
        <div className="container mx-auto px-4 py-10">
          <div
            className="relative overflow-hidden"
            onMouseEnter={stopAutoPlay}
            onMouseLeave={startAutoPlay}
          >
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${
                  currentIndex * (100 / visibleSlides)
                }%)`,
              }}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              {carouselItems.map((item) => (
                <div
                  key={item.id}
                  className="flex-shrink-0 p-2"
                  style={{ width: `${100 / visibleSlides}%` }}
                >
                  <div className="h-full flex flex-col rounded-xl overflow-hidden bg-bg-section text-text-primary p-8">
                    <div className="flex-1">
                      <h2 className="text-2xl md:text-3xl font-bold mb-3">
                        {item.title}
                      </h2>
                      <p className="text-text-subtle font-normal text-l mb-6">
                        {item.description}
                      </p>
                    </div>
                    {item.link && (
                      <a
                        href={item.link}
                        className="inline-flex w-fit items-center bg-bg-base font-medium text-highlight-neon hover:border-b-2 border-indigo-500 shadow-sm transition-shadow px-2 py-2.5 mb-3 me-2 group"
                      >
                        <span className="mr-2 text-base">Read More</span>
                        <MoveRight
                          size={20}
                          className="group-hover:translate-x-1 transition-transform text-3xl"
                        />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between mt-8">
              <div className="flex gap-2">
                {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                  <button
                    key={i}
                    className={`w-2 h-2 p-2 rounded-full transition-all ${
                      i === currentIndex
                        ? "bg-white w-6"
                        : "bg-gray-600 hover:bg-gray-500"
                    }`}
                    onClick={() => handleDotClick(i)}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 disabled:opacity-50"
                  onClick={handlePrevClick}
                  disabled={currentIndex === 0}
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  type="button"
                  className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 disabled:opacity-50"
                  onClick={handleNextClick}
                  disabled={currentIndex === maxIndex}
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ClientOnly>
  );
}

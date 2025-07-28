"use client";

import CaseStudyCard from "@/components/ui/CaseStudyCard";
import { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";

interface CaseStudy {
  title: string;
  category: string;
  description: string;
  imageSrc: string;
}

const CaseStudiesCarousel = ({ caseStudies }: { caseStudies: CaseStudy[] }) => {
  const totalSlides = caseStudies.length;
  const [currentSlide, setCurrentSlide] = useState(3);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const [isAutoSliding, setIsAutoSliding] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);
  const swipeThreshold = 50;

  const extendedCaseStudies = [
    ...caseStudies.slice(-3),
    ...caseStudies,
    ...caseStudies.slice(0, 3),
  ];

  const startAutoSlide = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      if (isAutoSliding) {
        setCurrentSlide((prev) => prev + 1);
      }
    }, 6000);
  }, [isAutoSliding]);

  const stopAutoSlide = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  const restartAutoSlideAfterSwipe = () => {
    setIsAutoSliding(false);
    stopAutoSlide();
    setTimeout(() => {
      setIsAutoSliding(true);
      startAutoSlide();
    }, 6000);
  };

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, [isAutoSliding, startAutoSlide, stopAutoSlide]);

  useEffect(() => {
    if (currentSlide === totalSlides + 3) {
      setTimeout(() => {
        setTransitionEnabled(false);
        setCurrentSlide(3);
      }, 500);
    } else if (currentSlide === 0) {
      setTimeout(() => {
        setTransitionEnabled(false);
        setCurrentSlide(totalSlides);
      }, 500);
    } else {
      setTransitionEnabled(true);
    }
  }, [currentSlide, totalSlides]);

  useEffect(() => {
    if (!transitionEnabled) {
      const id = setTimeout(() => setTransitionEnabled(true), 20);
      return () => clearTimeout(id);
    }
  }, [transitionEnabled]);

  const getActiveDot = () => {
    let idx = currentSlide - 3;
    if (idx < 0) idx = totalSlides - 1;
    if (idx >= totalSlides) idx = 0;
    return idx;
  };

  const getSlideWidth = () => {
    if (typeof window === "undefined") return 100 / 3;
    if (window.innerWidth < 640) return 100;
    if (window.innerWidth < 768) return 100 / 2;
    return 100 / 3;
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;

    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > swipeThreshold;
    const isRightSwipe = distance < -swipeThreshold;

    if (isLeftSwipe) {
      setCurrentSlide((prev) => prev + 1);
      restartAutoSlideAfterSwipe();
    } else if (isRightSwipe) {
      setCurrentSlide((prev) => prev - 1);
      restartAutoSlideAfterSwipe();
    }

    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  return (
    <>
      <div className="w-full max-w-7xl overflow-x-clip ">
        <motion.div
          className="flex flex-nowrap"
          animate={{ x: `-${currentSlide * getSlideWidth()}%` }}
          transition={
            transitionEnabled
              ? { duration: 1, ease: "easeInOut" }
              : { duration: 0 }
          }
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {extendedCaseStudies.map((study, index) => (
            <div
              key={index}
              className="flex-shrink-0 px-1 sm:px-2 w-full sm:w-1/2 md:w-1/3 flex justify-center hover:cursor-pointer"
            >
              <CaseStudyCard
                title={study.title}
                category={study.category}
                description={study.description}
                imageSrc={study.imageSrc}
              />
            </div>
          ))}
        </motion.div>
      </div>
      <div className="flex items-center gap-1 mt-4">
        {caseStudies.map((_, index) => (
          <div
            key={index}
            className={`w-6 sm:w-7 md:w-8 h-0.5 rounded-full ${
              getActiveDot() === index
                ? "bg-[var(--color-gray)]"
                : "bg-[var(--color-gainsboro)]"
            }`}
          />
        ))}
      </div>
    </>
  );
};

export default CaseStudiesCarousel;

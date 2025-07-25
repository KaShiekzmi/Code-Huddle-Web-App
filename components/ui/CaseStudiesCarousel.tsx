"use client";

import CaseStudyCard from "@/components/ui/CaseStudyCard";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface CaseStudy {
  title: string;
  category: string;
  description: string;
  imageSrc: string;
}

const CaseStudiesCarousel = ({ caseStudies }: { caseStudies: CaseStudy[] }) => {
  const totalSlides = caseStudies.length;
  const [currentSlide, setCurrentSlide] = useState(1);
  const [transitionEnabled, setTransitionEnabled] = useState(true);

  const extendedCaseStudies = [
    ...caseStudies.slice(-3),
    ...caseStudies,
    ...caseStudies.slice(0, 3),
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => prev + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

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

  return (
    <>
      <div className="w-full max-w-6xl overflow-hidden">
        <motion.div
          className="flex flex-nowrap"
          animate={{ x: `-${currentSlide * getSlideWidth()}%` }}
          transition={
            transitionEnabled
              ? { duration: 0.5, ease: "easeInOut" }
              : { duration: 0 }
          }
        >
          {extendedCaseStudies.map((study, index) => (
            <div
              key={index}
              className="flex-shrink-0 px-1 sm:px-2 w-full sm:w-1/2 md:w-1/3 flex justify-center"
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

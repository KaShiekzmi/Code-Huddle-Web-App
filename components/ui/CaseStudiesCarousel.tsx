"use client";

import CaseStudyCard from "@/components/ui/CaseStudyCard";
import { motion } from "framer-motion";
import { useCarousel } from "@/hooks/useCarousel";

interface CaseStudy {
  title: string;
  category: string;
  description: string;
  imageSrc: string;
}

const CaseStudiesCarousel = ({ caseStudies }: { caseStudies: CaseStudy[] }) => {
  const {
    currentIndex,
    extendedIndex,
    isTransitioning,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
    goToSlide,
  } = useCarousel({
    totalItems: caseStudies.length,
    itemsPerSlide: (windowWidth) => {
      if (windowWidth < 640) return 1;
      if (windowWidth < 768) return 2;
      return 3;
    },
    infinite: true,
    paddingItems: 3,
    autoSlideInterval: 6000,
  });

  const extendedCaseStudies = [
    ...caseStudies.slice(-3),
    ...caseStudies,
    ...caseStudies.slice(0, 3),
  ];

  const getActiveDot = () => {
    let idx = currentIndex - 3;
    if (idx < 0) idx = caseStudies.length - 1;
    if (idx >= caseStudies.length) idx = 0;
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
      <div className="w-full max-w-7xl overflow-x-clip">
        <motion.div
          className="flex flex-nowrap"
          animate={{ x: `-${extendedIndex * getSlideWidth()}%` }}
          transition={
            isTransitioning
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
          <button
            key={index}
            onClick={() => goToSlide(index + 3)}
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

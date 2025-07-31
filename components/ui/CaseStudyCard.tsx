"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CaseStudy } from "@/types/case-study";
import { useState, useRef } from "react";

const CaseStudyCard = ({ title, category, description, images }: CaseStudy) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (images.length > 1) {
      intervalRef.current = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
      }, 1200);
    }
  };

  const handleMouseLeave = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    if (images.length > 1) {
      setCurrentImageIndex(0);
    }
  };

  return (
    <motion.div
      className={`w-full max-w-[352px] sm:max-w-[400px] lg:max-w-[320px] xl:max-w-[360px] rounded-lg flex flex-col h-[400px] lg:h-[470px] bg-[var(--color-white)] shadow-[0_1px_4px_rgba(12,12,13,0.1),0_1px_4px_rgba(12,12,13,0.05)] transition-all duration-300 ease-in-out scale-100 hover:scale-103 hover:shadow-2xl`}
      transition={{ duration: 0.3 }}
      role="article"
      aria-label={`Case study: ${title}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative w-full h-[280px] sm:h-[263px] md:h-[250px] lg:h-[287px] rounded-t-lg overflow-hidden">
        {images.map((imageSrc, index) => (
          <Image
            key={index}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
            width={352}
            height={340}
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 30vw"
            alt={`${title} image ${index + 1}`}
            src={imageSrc}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

        {images.length > 1 && (
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1 z-10">
            {images.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentImageIndex
                    ? "bg-white opacity-100"
                    : "bg-white opacity-50"
                }`}
              />
            ))}
          </div>
        )}
      </div>
      <div className="rounded-b-lg bg-[var(--color-white)] flex flex-col flex-1 py-3 sm:py-4 px-3 sm:px-4 gap-3 sm:gap-4">
        <div className="flex items-center justify-between flex-col md:flex-col md:items-start lg:flex-row lg:items-center md:gap-2">
          <span className="font-medium text-sm sm:text-base">{title}</span>
          <span className="text-xs sm:text-sm font-medium md:text-left text-[var(--color-dimgray)]">
            {category}
          </span>
        </div>
        <p className="text-xs sm:text-sm md:text-base text-left max-w-full line-clamp-3 md:line-clamp-3 lg:line-clamp-3 xl:line-clamp-3 ">
          {description}
        </p>
        <div className="flex justify-start">
          <button className="flex items-center gap-2 text-sm sm:text-base text-[var(--color-royalblue)] hover:underline transition-all duration-300">
            <span className="tracking-[0.01em] font-medium cursor-pointer">
              View Details
            </span>
            <svg
              width="32"
              height="12"
              viewBox="0 0 37 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 sm:w-9"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M35.8095 7.94307C36.1977 7.55487 36.1998 6.92484 35.813 6.53381L30.1965 0.846549L30.1922 0.842307C29.8033 0.453398 29.174 0.451984 28.7823 0.838064C28.3891 1.22556 28.3849 1.85913 28.7738 2.25228L32.6791 6.20713L0.999854 6.20642C0.446896 6.20642 -0.000703803 6.65402 3.31592e-06 7.20627C-0.000703792 7.48275 0.111727 7.73236 0.292746 7.91337C0.473765 8.09439 0.723375 8.20682 0.999854 8.20612L32.7209 8.20612L28.7773 12.1567C28.387 12.547 28.3877 13.1799 28.778 13.5702L28.7787 13.5709C29.1691 13.9613 29.8026 13.9598 30.1929 13.5695L35.8095 7.94307Z"
                fill="#2970FF"
              />
            </svg>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default CaseStudyCard;

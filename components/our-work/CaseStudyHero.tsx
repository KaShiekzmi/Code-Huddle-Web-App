"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { CaseStudy } from "@/types/case-study";

interface CaseStudyHeroProps {
  caseStudy: CaseStudy;
}

const CaseStudyHero = ({ caseStudy }: CaseStudyHeroProps) => {
  return (
    <section className="bg-[var(--color-black)] relative h-[50vh] sm:h-[60vh] md:h-[65vh] lg:h-[70vh] min-h-[300px] sm:min-h-[350px] md:min-h-[400px] overflow-hidden">
      <div className="absolute inset-0 mt-12 sm:mt-16 md:mt-18">
        <Image
          src={caseStudy.visualAssets.coverImage}
          alt={caseStudy.projectTitle}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/60" />

        <div className="absolute inset-0 flex items-center justify-end opacity-10 pr-4 sm:pr-6 md:pr-8">
          <Image
            src="/assets/images/company/watermark.svg"
            alt="Code Huddle Watermark"
            width={200}
            height={200}
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-contain rotate-45"
          />
        </div>
      </div>

      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center text-white px-4 sm:px-6 md:px-8 max-w-[90vw] sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto">
          <motion.div
            className="inline-block bg-white/10 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="text-xs sm:text-sm font-medium">
              {caseStudy.projectCategory}
            </span>
          </motion.div>

          <motion.h1
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold mb-6 sm:mb-8 hover:tracking-[0.05em] transition-all duration-300 hover:cursor-pointer"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {caseStudy.projectTitle}
          </motion.h1>

          <motion.div
            className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm md:text-base"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {caseStudy.projectMetadata.clientName && (
              <div className="flex items-center gap-1.5 sm:gap-2 bg-white/20 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full">
                <svg
                  className="w-3.5 h-3.5 sm:w-4 sm:h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span>{caseStudy.projectMetadata.clientName}</span>
              </div>
            )}
            {caseStudy.projectMetadata.projectDuration && (
              <div className="flex items-center gap-1.5 sm:gap-2 bg-white/20 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full">
                <svg
                  className="w-3.5 h-3.5 sm:w-4 sm:h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>{caseStudy.projectMetadata.projectDuration}</span>
              </div>
            )}
            {caseStudy.projectMetadata.technologyStack &&
              caseStudy.projectMetadata.technologyStack.length > 0 && (
                <div className="flex items-center gap-1.5 sm:gap-2 bg-white/20 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full">
                  <svg
                    className="w-3.5 h-3.5 sm:w-4 sm:h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  </svg>
                  <span>
                    {caseStudy.projectMetadata.technologyStack.length}{" "}
                    technologies
                  </span>
                </div>
              )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyHero;

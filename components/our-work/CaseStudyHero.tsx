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
    <section className="bg-[var(--color-black)] relative h-[70vh] min-h-[400px] overflow-hidden">
      <div className="absolute inset-0 mt-18">
        <Image
          src={caseStudy.visualAssets.coverImage}
          alt={caseStudy.projectTitle}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/60" />

        <div className="absolute inset-0 flex items-center justify-end opacity-10 pr-8">
          <Image
            src="/assets/images/company/watermark.svg"
            alt="Code Huddle Watermark"
            width={400}
            height={400}
            className="w-80 h-80 sm:w-96 sm:h-96 object-contain rotate-45"
          />
        </div>
      </div>

      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center text-white px-4 sm:px-6 md:px-8 max-w-4xl mx-auto">
          <motion.div
            className="inline-block bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="text-sm font-medium">
              {caseStudy.projectCategory}
            </span>
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 hover:tracking-[0.05em] transition-all duration-300 hover:cursor-pointer"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {caseStudy.projectTitle}
          </motion.h1>

          <motion.div
            className="flex flex-wrap justify-center gap-6 text-sm sm:text-base"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {caseStudy.projectMetadata.clientName && (
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <svg
                  className="w-4 h-4"
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
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <svg
                  className="w-4 h-4"
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
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                  <svg
                    className="w-4 h-4"
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

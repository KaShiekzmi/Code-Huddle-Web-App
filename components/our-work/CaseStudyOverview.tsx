"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { CaseStudy } from "@/types/case-study";

interface CaseStudyOverviewProps {
  caseStudy: CaseStudy;
}

const CaseStudyOverview = ({ caseStudy }: CaseStudyOverviewProps) => {
  return (
    <section className="py-6 sm:py-8 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 bg-gray-50">
      <div className="w-full max-w-[95vw] sm:max-w-3xl md:max-w-5xl lg:max-w-7xl mx-auto">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Our Work", href: "/our-work" },
            { label: caseStudy.projectTitle },
          ]}
        />

        <motion.div
          className="mt-6 sm:mt-8 flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 sm:gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {caseStudy.projectMetadata.technologyStack &&
            caseStudy.projectMetadata.technologyStack.length > 0 && (
              <div className="flex-1">
                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-purple-600"
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
                  </div>
                  <h3 className="text-base sm:text-lg md:text-lg font-semibold text-gray-900">
                    Technologies & Tools
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {caseStudy.projectMetadata.technologyStack.map(
                    (tech, index) => (
                      <motion.span
                        key={index}
                        className="bg-white border border-gray-200 text-gray-700 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium hover:border-purple-300 hover:text-purple-700 hover:bg-purple-50 transition-all duration-200"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        viewport={{ once: true }}
                      >
                        {tech}
                      </motion.span>
                    )
                  )}
                </div>
              </div>
            )}

          {caseStudy.visualAssets.projectLogo && (
            <motion.div
              className="flex items-start justify-center lg:justify-end"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 relative">
                <Image
                  src={caseStudy.visualAssets.projectLogo}
                  alt={`${caseStudy.projectTitle} logo`}
                  fill
                  className="object-contain object-top"
                />
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudyOverview;

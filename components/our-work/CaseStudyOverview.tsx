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
    <section className="py-8 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Our Work", href: "/our-work" },
            { label: caseStudy.projectTitle },
          ]}
        />

        <motion.div
          className="mt-8 flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {caseStudy.projectMetadata.technologyStack &&
            caseStudy.projectMetadata.technologyStack.length > 0 && (
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-purple-600"
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
                  <h3 className="text-lg font-semibold text-gray-900">
                    Technologies & Tools
                  </h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {caseStudy.projectMetadata.technologyStack.map(
                    (tech, index) => (
                      <motion.span
                        key={index}
                        className="bg-white border border-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:border-purple-300 hover:text-purple-700 hover:bg-purple-50 transition-all duration-200"
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
              className="flex items-start"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-24 h-24 sm:w-32 sm:h-32 relative">
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

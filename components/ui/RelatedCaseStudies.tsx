"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useCaseStudies } from "@/hooks/useCaseStudies";
import CaseStudyCard from "@/components/ui/CaseStudyCard";
import LoadingSpinner from "@/components/ui/LoadingSpinner";

interface RelatedCaseStudiesProps {
  currentCaseStudySlug: string;
  maxItems?: number;
}

const RelatedCaseStudies = ({
  currentCaseStudySlug,
  maxItems = 3,
}: RelatedCaseStudiesProps) => {
  const { data, isLoading, error } = useCaseStudies();

  if (isLoading) {
    return (
      <section className="py-12 sm:py-14 md:py-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 bg-gray-50">
        <div className="w-full max-w-[95vw] sm:max-w-3xl md:max-w-5xl lg:max-w-7xl mx-auto">
          <div className="flex justify-center">
            <LoadingSpinner />
          </div>
        </div>
      </section>
    );
  }

  if (error || !data?.caseStudies) {
    return null;
  }

  const relatedCaseStudies = data.caseStudies
    .filter((cs) => cs.slug !== currentCaseStudySlug)
    .slice(0, maxItems);

  if (relatedCaseStudies.length === 0) {
    return null;
  }

  return (
    <section className="py-12 sm:py-14 md:py-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 bg-gray-50">
      <div className="w-full max-w-[95vw] sm:max-w-3xl md:max-w-5xl lg:max-w-7xl mx-auto">
        <motion.h2
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-8 sm:mb-10 md:mb-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          More Case Studies
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 justify-items-center">
          {relatedCaseStudies.map((caseStudy, index) => (
            <motion.div
              key={caseStudy.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <CaseStudyCard {...caseStudy} />
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-8 sm:mt-10 md:mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Link
            href="/our-work"
            className="inline-flex items-center px-6 sm:px-8 py-2 sm:py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm sm:text-base"
          >
            View All Case Studies
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 ml-1.5 sm:ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default RelatedCaseStudies;

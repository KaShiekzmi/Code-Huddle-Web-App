"use client";

import React from "react";
import CaseStudyCard from "@/components/ui/CaseStudyCard";
import { useCaseStudies } from "@/hooks/useCaseStudies";
import LoadingSpinner from "@/components/ui/LoadingSpinner";

const CaseStudiesGrid = () => {
  const { data, isLoading, error } = useCaseStudies();

  if (isLoading) {
    return (
      <section className="w-full py-8 sm:pt-0 sm:pb-10 md:pt-0 md:pb-10 lg:py-14 lg:pt-2 lg:pb-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="w-full max-w-7xl mx-auto flex justify-center items-center min-h-[400px]">
          <LoadingSpinner />
        </div>
      </section>
    );
  }

  if (error || !data) {
    return (
      <section className="w-full py-8 sm:pt-0 sm:pb-10 md:pt-0 md:pb-10 lg:py-14 lg:pt-2 lg:pb-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="w-full max-w-7xl mx-auto">
          <p className="text-center text-gray-600">
            Failed to load case studies.
          </p>
        </div>
      </section>
    );
  }
  return (
    <section className="w-full py-8 sm:pt-0 sm:pb-10 md:pt-0 md:pb-10 lg:py-14 lg:pt-2 lg:pb-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-10 justify-items-center sm:justify-items-start">
          {data.caseStudies.map((caseStudy) => (
            <CaseStudyCard key={caseStudy.id} {...caseStudy} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesGrid;

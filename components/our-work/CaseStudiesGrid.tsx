"use client";

import React from "react";
import CaseStudyCard from "@/components/ui/CaseStudyCard";
import { caseStudies } from "@/data/case-studies";

const CaseStudiesGrid = () => {
  return (
    <section className="w-full py-8 sm:pt-0 sm:pb-10 md:pt-0 md:pb-10 lg:py-14 lg:pt-2 lg:pb-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-10 justify-items-center sm:justify-items-start">
          {caseStudies.map((caseStudy, index) => (
            <CaseStudyCard
              key={index}
              title={caseStudy.title}
              category={caseStudy.category}
              description={caseStudy.description}
              images={caseStudy.images}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesGrid;

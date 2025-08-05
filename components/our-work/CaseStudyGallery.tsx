"use client";

import React from "react";
import { motion } from "framer-motion";
import CaseStudyGalleryGrid from "@/components/ui/CaseStudyGallery";
import { CaseStudy } from "@/types/case-study";

interface CaseStudyGalleryProps {
  caseStudy: CaseStudy;
  onMediaClick: (media: { src: string; type: "image" | "video" }) => void;
}

const CaseStudyGallery = ({
  caseStudy,
  onMediaClick,
}: CaseStudyGalleryProps) => {
  if (
    !caseStudy.detailedContent?.mediaGallery ||
    caseStudy.detailedContent.mediaGallery.length === 0
  ) {
    return null;
  }

  const galleryMedia = caseStudy.detailedContent.mediaGallery;

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 bg-gray-50">
      <div className="w-full max-w-[95vw] sm:max-w-3xl md:max-w-5xl lg:max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12 sm:mb-14 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Project Gallery
          </h2>
          <p className="text-base sm:text-lg md:text-lg text-gray-600 max-w-lg sm:max-w-xl md:max-w-2xl mx-auto">
            Explore more visuals and insights from this project
          </p>
        </motion.div>

        <CaseStudyGalleryGrid
          media={galleryMedia.map((item) => ({
            src: item.mediaSource,
            type: item.mediaType,
            alt: item.mediaAltText,
          }))}
          onMediaClick={onMediaClick}
        />
      </div>
    </section>
  );
};

export default CaseStudyGallery;

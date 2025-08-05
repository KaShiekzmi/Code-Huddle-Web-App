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
    <section className="py-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Project Gallery
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
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

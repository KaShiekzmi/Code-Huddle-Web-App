"use client";

import React, { useState } from "react";
import { useParams } from "next/navigation";
import MediaModal from "@/components/ui/MediaModal";
import LoadingSpinner from "@/components/ui/LoadingSpinner";
import RelatedCaseStudies from "@/components/ui/RelatedCaseStudies";
import { useCaseStudy } from "@/hooks/useCaseStudies";
import { notFound } from "next/navigation";
import CaseStudyHero from "@/components/our-work/CaseStudyHero";
import CaseStudyOverview from "@/components/our-work/CaseStudyOverview";
import CaseStudyContent from "@/components/our-work/CaseStudyContent";
import CaseStudyGallery from "@/components/our-work/CaseStudyGallery";

const CaseStudyDetailPage = () => {
  const params = useParams();
  const slug = params.slug as string;
  const [selectedMediaIndex, setSelectedMediaIndex] = useState<number | null>(
    null
  );

  const { data, isLoading, error } = useCaseStudy(slug);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <LoadingSpinner />
        </div>
      </div>
    );
  }

  if (error || !data?.caseStudy) {
    notFound();
  }

  const caseStudy = data.caseStudy;

  const handleMediaClick = (media: {
    src: string;
    type: "image" | "video";
  }) => {
    const index = caseStudy.detailedContent?.mediaGallery?.findIndex(
      (item) => item.mediaSource === media.src && item.mediaType === media.type
    );
    if (index !== undefined && index !== -1) {
      setSelectedMediaIndex(index);
    }
  };

  const closeModal = () => {
    setSelectedMediaIndex(null);
  };

  const handleNavigate = (index: number) => {
    setSelectedMediaIndex(index);
  };

  return (
    <div className="min-h-screen bg-white">
      <CaseStudyHero caseStudy={caseStudy} />

      <main className="relative z-20 bg-white">
        <CaseStudyOverview caseStudy={caseStudy} />

        <CaseStudyContent
          caseStudy={caseStudy}
          onMediaClick={handleMediaClick}
        />

        <CaseStudyGallery
          caseStudy={caseStudy}
          onMediaClick={handleMediaClick}
        />
      </main>

      <RelatedCaseStudies currentCaseStudySlug={caseStudy.slug} />

      {selectedMediaIndex !== null &&
        caseStudy.detailedContent?.mediaGallery && (
          <MediaModal
            media={caseStudy.detailedContent.mediaGallery.map((item) => ({
              src: item.mediaSource,
              type: item.mediaType,
              alt: item.mediaAltText,
            }))}
            currentIndex={selectedMediaIndex}
            onClose={closeModal}
            onNavigate={handleNavigate}
          />
        )}
    </div>
  );
};

export default CaseStudyDetailPage;

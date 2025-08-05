"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { CaseStudy } from "@/types/case-study";

interface CaseStudyContentProps {
  caseStudy: CaseStudy;
  onMediaClick: (media: { src: string; type: "image" | "video" }) => void;
}

const CaseStudyContent = ({
  caseStudy,
  onMediaClick,
}: CaseStudyContentProps) => {
  if (
    !caseStudy.detailedContent?.contentSections ||
    !caseStudy.detailedContent?.mediaGallery
  ) {
    return null;
  }

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
      <div className="w-full max-w-[95vw] sm:max-w-3xl md:max-w-5xl lg:max-w-7xl mx-auto">
        <div className="space-y-16 sm:space-y-20 md:space-y-24">
          {caseStudy.detailedContent.contentSections.map((section, index) => {
            const mediaIndex = Math.floor(
              (index * caseStudy.detailedContent!.mediaGallery.length) /
                (caseStudy.detailedContent?.contentSections.length || 1)
            );
            const media = caseStudy.detailedContent!.mediaGallery[mediaIndex];

            return (
              <motion.article
                key={index}
                className={`flex flex-col lg:flex-row gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex-1 space-y-4 sm:space-y-6">
                  <div className="space-y-3 sm:space-y-4">
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
                      {section.sectionTitle}
                    </h2>
                    <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
                  </div>
                  <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
                    {section.sectionContent}
                  </p>
                </div>

                {media && (
                  <div className="flex-1 w-full max-w-[600px]">
                    <div
                      className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 aspect-[3/2]"
                      onClick={() =>
                        onMediaClick({
                          src: media.mediaSource,
                          type: media.mediaType,
                        })
                      }
                    >
                      {media.mediaType === "image" ? (
                        <Image
                          src={media.mediaSource}
                          alt={
                            media.mediaAltText ||
                            `${caseStudy.projectTitle} - ${section.sectionTitle}`
                          }
                          width={600}
                          height={400}
                          sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, (max-width: 1024px) 50vw, 600px"
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                      ) : (
                        <div className="relative w-full h-full">
                          <video
                            src={media.mediaSource}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            muted
                            loop
                            onMouseEnter={(e) =>
                              (e.target as HTMLVideoElement).play()
                            }
                            onMouseLeave={(e) =>
                              (e.target as HTMLVideoElement).pause()
                            }
                          />
                          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="bg-white/90 rounded-full p-3 sm:p-4 group-hover:bg-white transition-colors duration-300">
                              <svg
                                className="w-6 h-6 sm:w-8 sm:h-8 text-gray-800"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path d="M8 5v10l8-5-8-5z" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>
                )}
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CaseStudyContent;

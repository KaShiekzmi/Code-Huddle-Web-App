"use client";

import { useState } from "react";
import CultureMedia from "@/components/ui/CultureMedia";
import CultureButton from "@/components/ui/CultureButton";
import Modal from "@/components/ui/ImageModal";
import { mediaItems } from "@/data/culture";

interface MediaItem {
  src: string;
  type: "image" | "video";
}

const Culture = () => {
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);

  const openModal = (item: MediaItem) => {
    setSelectedMedia(item);
  };

  const closeModal = () => {
    setSelectedMedia(null);
  };

  return (
    <div className="w-full flex flex-col items-center py-6 md:py-8 lg:py-12 px-4 sm:px-8 md:px-12 lg:px-24 gap-6 md:gap-8 lg:gap-10 text-center text-base md:text-lg text-[var(--color-gray)] font-lexend bg-[var(--color-white)]">
      <div className="max-w-7xl flex flex-col items-center gap-4 md:gap-5 lg:gap-6 px-4 sm:px-8 md:px-12 lg:px-24">
        <div className="rounded-lg bg-[var(--color-royalblue-200)] flex items-center py-2 px-3 gap-2">
          <div className="w-6 h-6 rounded-full bg-[var(--color-royalblue)] border-[var(--color-lavender)] border-4" />
          <span className="font-medium">Our Culture</span>
        </div>
        <b className="text-xl md:text-2xl w-full sm:w-[500px] md:w-[550px] lg:w-[650px]">
          Celebrating Collaboration, Innovation, and Growth
        </b>
        <p className="text-sm sm:text-base">
          Experience the vibrant culture at Code Huddle through photos and
          videos that showcase our teamwork, creativity, and shared values. See
          how we foster an environment where innovation thrives and ideas come
          to life.
        </p>
      </div>
      <div className="flex flex-col sm:flex-col lg:flex-row gap-3 sm:gap-4 md:gap-5 lg:gap-5">
        <div className="flex-1 h-auto lg:h-[690px] flex flex-col gap-3 sm:gap-4 md:gap-5">
          {mediaItems.slice(0, 2).map((item, index) => (
            <div
              key={index}
              className={`w-full ${
                index === 0
                  ? "h-[250px] lg:h-[370px]"
                  : "h-[200px] lg:h-[300px]"
              } rounded-2xl overflow-hidden`}
            >
              <CultureMedia
                src={item.src}
                type={item.type as "image" | "video"}
                onClick={() => openModal(item as MediaItem)}
              />
            </div>
          ))}
        </div>
        <div className="flex-1 h-auto lg:h-[690px] flex flex-col gap-3 sm:gap-[14px] md:gap-[16px] lg:gap-[18px]">
          {mediaItems.slice(2, 4).map((item, index) => (
            <div
              key={index}
              className={`w-full ${
                index === 0
                  ? "h-[220px] lg:h-[307px]"
                  : "h-[260px] lg:h-[365px]"
              } rounded-2xl overflow-hidden`}
            >
              <CultureMedia
                src={item.src}
                type={item.type as "image" | "video"}
                onClick={() => openModal(item as MediaItem)}
              />
            </div>
          ))}
        </div>
        <div className="flex-1 h-auto lg:h-[690px] flex flex-col gap-3 sm:gap-[14px] md:gap-[16px] lg:gap-[18px]">
          {mediaItems.slice(4, 6).map((item, index) => (
            <div
              key={index}
              className={`w-full ${
                index === 0
                  ? "h-[220px] lg:h-[307px]"
                  : "h-[180px] lg:h-[237px]"
              } rounded-2xl overflow-hidden`}
            >
              <CultureMedia
                src={item.src}
                type={item.type as "image" | "video"}
                onClick={() => openModal(item as MediaItem)}
              />
            </div>
          ))}
          <div className="w-full h-[100px] sm:h-[110px] md:h-[110px] lg:h-[120px]">
            <CultureButton />
          </div>
        </div>
      </div>
      {selectedMedia && (
        <Modal
          src={selectedMedia.src}
          type={selectedMedia.type as "image" | "video"}
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default Culture;

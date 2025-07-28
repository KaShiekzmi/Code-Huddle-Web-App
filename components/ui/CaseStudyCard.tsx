"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface CaseStudyCardProps {
  title: string;
  category: string;
  description: string;
  imageSrc: string;
}

const CaseStudyCard = ({
  title,
  category,
  description,
  imageSrc,
}: CaseStudyCardProps) => {
  return (
    <motion.div
      className={`w-full max-w-[352px] sm:max-w-[400px] lg:max-w-[320px] xl:max-w-[360px] rounded-lg flex flex-col h-[435px] lg:h-[520px] bg-[var(--color-white)] shadow-[0_1px_4px_rgba(12,12,13,0.1),0_1px_4px_rgba(12,12,13,0.05)] transition-all duration-300 ease-in-out scale-100 hover:scale-103 hover:shadow-2xl"
      }`}
      // whileHover={{ y: -5, rotateX: 5, rotateY: 5 }}
      transition={{ duration: 0.3 }}
      role="article"
      aria-label={`Case study: ${title}`}
    >
      <div className="relative w-full h-[280px] sm:h-[263px] md:h-[250px] lg:h-[287px] rounded-t-lg overflow-hidden ">
        <Image
          className="w-full h-full object-cover"
          width={352}
          height={340}
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 30vw"
          alt={`${title} image`}
          src={imageSrc}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
      </div>
      <div className="rounded-b-lg bg-[var(--color-white)] flex flex-col flex-1 py-3 sm:py-4 px-3 sm:px-4 gap-3 sm:gap-4">
        <div className="flex items-center justify-between flex-col md:flex-col md:items-start lg:flex-row lg:items-center md:gap-2">
          <span className="font-medium text-sm sm:text-base">{title}</span>
          <span className="text-xs sm:text-sm font-medium md:text-left text-[var(--color-dimgray)]">
            {category}
          </span>
        </div>
        <p className="text-xs sm:text-sm md:text-base text-left max-w-full sm:max-w-[320px] md:max-w-[320px] flex-1 line-clamp-2 md:line-clamp-2 lg:line-clamp-5 xl:line-clamp-6">
          {description}
        </p>
        <div className="flex justify-start">
          <button className="flex items-center gap-2 text-sm sm:text-base text-[var(--color-royalblue)] hover:underline transition-all duration-300">
            <span className="tracking-[0.01em] font-medium cursor-pointer">
              View Details
            </span>
            <svg
              width="32"
              height="12"
              viewBox="0 0 37 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 sm:w-9"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M35.8095 7.94307C36.1977 7.55487 36.1998 6.92484 35.813 6.53381L30.1965 0.846549L30.1922 0.842307C29.8033 0.453398 29.174 0.451984 28.7823 0.838064C28.3891 1.22556 28.3849 1.85913 28.7738 2.25228L32.6791 6.20713L0.999854 6.20642C0.446896 6.20642 -0.000703803 6.65402 3.31592e-06 7.20627C-0.000703792 7.48275 0.111727 7.73236 0.292746 7.91337C0.473765 8.09439 0.723375 8.20682 0.999854 8.20612L32.7209 8.20612L28.7773 12.1567C28.387 12.547 28.3877 13.1799 28.778 13.5702L28.7787 13.5709C29.1691 13.9613 29.8026 13.9598 30.1929 13.5695L35.8095 7.94307Z"
                fill="#2970FF"
              />
            </svg>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default CaseStudyCard;

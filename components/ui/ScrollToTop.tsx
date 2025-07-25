"use client";

import { useState, useEffect } from "react";

const ScrollToTop = () => {
  const [dashOffset, setDashOffset] = useState(223.8);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollFraction = docHeight > 0 ? scrollTop / docHeight : 0;

      setIsVisible(scrollTop > 100);

      const circumference = isMobile ? 188.5 : 223.8;
      const newDashOffset = circumference * (1 - scrollFraction);
      setDashOffset(newDashOffset);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMobile]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className={`fixed bottom-6 right-6 w-16 md:w-20 h-16 md:h-20 transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      } cursor-pointer`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <svg
        width={isMobile ? 64 : 80}
        height={isMobile ? 64 : 80}
        viewBox="0 0 108 108"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_dd_3_3198)">
          <circle
            cx="54"
            cy="54"
            r={isMobile ? 30 : 37.5}
            fill="var(--color-white)"
          />
          <circle
            cx="54"
            cy="54"
            r={isMobile ? 28.125 : 35.625}
            stroke="var(--color-white)"
            strokeWidth="3.75"
          />
          <circle
            cx="54"
            cy="54"
            r={isMobile ? 28.125 : 35.625}
            stroke="var(--color-royalblue)"
            strokeWidth="3.75"
            strokeDasharray={isMobile ? 188.5 : 223.8}
            strokeDashoffset={dashOffset}
            transform="rotate(90 54 54)"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d={
              isMobile
                ? "M55.0296 37.1586C54.4871 36.6161 53.6067 36.6132 53.0603 37.1536L45.1132 45.0019L45.1073 45.0079C44.5639 45.5513 44.5619 46.4307 45.1014 46.9781C45.6428 47.5275 46.5282 47.5334 47.0775 46.9899L52.6038 41.5328L52.6029 57.8529C52.6029 58.6255 53.2283 59.251 54 59.25C54.3863 59.251 54.7351 59.0939 54.9881 58.8409C55.241 58.588 55.3981 58.2392 55.3971 57.8529L55.3971 41.4745L60.9175 46.985C61.4629 47.5304 62.3473 47.5294 62.8927 46.984L62.8937 46.983C63.4391 46.4376 63.4371 45.5523 62.8917 45.0069L55.0296 37.1586Z"
                : "M55.0296 43.1586C54.4871 42.6161 53.6067 42.6132 53.0603 43.1536L45.1132 51.0019L45.1073 51.0079C44.5639 51.5513 44.5619 52.4307 45.1014 52.9781C45.6428 53.5275 46.5282 53.5334 47.0775 52.9899L52.6038 47.5328L52.6029 63.8529C52.6029 64.6255 53.2283 65.251 54 65.25C54.3863 65.251 54.7351 65.0939 54.9881 64.8409C55.241 64.588 55.3981 64.2392 55.3971 63.8529L55.3971 47.4745L60.9175 52.985C61.4629 53.5304 62.3473 53.5294 62.8927 52.984L62.8937 52.983C63.4391 52.4376 63.4371 51.5523 62.8917 51.0069L55.0296 43.1586Z"
            }
            fill="var(--color-gray)"
          />
        </g>
        <defs>
          <filter
            id="filter0_dd_3_3198"
            x="0"
            y="0"
            width="108"
            height="108"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feMorphology
              radius="1"
              operator="dilate"
              in="SourceAlpha"
              result="effect1_dropShadow_3_3198"
            />
            <feOffset />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_3_3198"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="6" />
            <feGaussianBlur stdDeviation="12" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
            />
            <feBlend
              mode="normal"
              in2="effect1_dropShadow_3_3198"
              result="effect2_dropShadow_3_3198"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect2_dropShadow_3_3198"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
};

export default ScrollToTop;

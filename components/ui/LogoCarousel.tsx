"use client";

import Image from "next/image";

const logos = [
  "/assets/images/case-studies/gymyg/gymyg.svg",
  "/assets/images/case-studies/honest-dog/honestdog.svg",
  "/assets/images/case-studies/we-step-together/we-step-together.svg",
  "/assets/images/case-studies/autoiq/autoiq.svg",
];

const LogoCarousel = () => {
  const repeatedLogos = Array.from({ length: 6 }, (_, setIndex) =>
    logos.map((src, logoIndex) => ({
      src,
      key: `${setIndex}-${logoIndex}`,
    }))
  ).flat();

  return (
    <div className="w-full ">
      <div className="flex items-left gap-6 sm:gap-8 md:gap-12 animate-[scroll-logo-carousel_20s_linear_infinite] min-w-[600%] flex-nowrap">
        {repeatedLogos.map(({ src, key }) => (
          <Image
            key={key}
            className="w-16 sm:w-20 md:w-24 h-8 sm:h-9 md:h-10 object-contain flex-shrink-0"
            width={96}
            height={40}
            sizes="(max-width: 640px) 64px, (max-width: 768px) 80px, 96px"
            alt=""
            src={src}
          />
        ))}
      </div>
    </div>
  );
};

export default LogoCarousel;

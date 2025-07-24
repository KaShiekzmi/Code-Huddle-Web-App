"use client";

import Image from "next/image";

const logos = [
  "/images/logo/projects/gymyg.svg",
  "/images/logo/projects/honestdog.svg",
  "/images/logo/projects/we-step-together.svg",
  "/images/logo/projects/autoiq.svg",
];

const LogoCarousel = () => {
  const repeatedLogos = Array.from({ length: 6 }, (_, setIndex) =>
    logos.map((src, logoIndex) => ({
      src,
      key: `${setIndex}-${logoIndex}`,
    }))
  ).flat();

  return (
    <div className="w-full overflow-hidden">
      <div className="flex items-center gap-6 sm:gap-8 md:gap-12 animate-[scroll-logo-carousel_30s_linear_infinite] min-w-[600%] flex-nowrap">
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

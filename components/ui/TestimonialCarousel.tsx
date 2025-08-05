"use client";

import { motion } from "framer-motion";
import TestimonialCard from "@/components/ui/TestimonialCard";
import { testimonials } from "@/data/testimonials";
import { useCarousel } from "@/hooks/useCarousel";

interface TestimonialCarouselProps {
  testimonials: typeof testimonials;
}

const TestimonialCarousel = ({ testimonials }: TestimonialCarouselProps) => {
  const {
    currentIndex,
    isTransitioning,
    itemsPerSlide,
    totalSlides,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
    goToSlide,
    swipeDirection,
  } = useCarousel({
    totalItems: testimonials.length,
    itemsPerSlide: (windowWidth) => {
      if (windowWidth < 640) return 1;
      if (windowWidth < 1024) return 2;
      return 5;
    },
    autoSlideInterval: 5000,
  });

  const getCurrentSlideItems = () => {
    const startIndex = currentIndex * itemsPerSlide;
    return testimonials.slice(startIndex, startIndex + itemsPerSlide);
  };

  const getDelayClass = (index: number) => {
    if (isTransitioning) return "no-transition-delay";
    return `delay-${index * 100}`;
  };

  return (
    <div
      className="w-full max-w-8xl relative m-4 overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="px-4 sm:px-8 md:px-16">
        {itemsPerSlide === 5 ? (
          <div className="flex flex-col gap-4 sm:gap-6">
            <div className="flex justify-center gap-4 sm:gap-6">
              {getCurrentSlideItems()
                .slice(0, 2)
                .map((testimonial, index) => (
                  <motion.div
                    key={`${currentIndex}-${index}`}
                    className={`transition-all duration-600 ease-in-out ${getDelayClass(
                      index
                    )}`}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <TestimonialCard
                      quote={testimonial.quote}
                      name={testimonial.name}
                      title={testimonial.title}
                      location={testimonial.location}
                      avatarSrc={testimonial.avatarSrc}
                      stars={testimonial.stars}
                    />
                  </motion.div>
                ))}
            </div>
            <div className="flex justify-center gap-4 sm:gap-6">
              {getCurrentSlideItems()
                .slice(2, 5)
                .map((testimonial, index) => (
                  <motion.div
                    key={`${currentIndex}-${index + 2}`}
                    className={`transition-all duration-600 ease-in-out ${getDelayClass(
                      index + 2
                    )}`}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.6,
                      delay: (index + 2) * 0.1,
                    }}
                  >
                    <TestimonialCard
                      quote={testimonial.quote}
                      name={testimonial.name}
                      title={testimonial.title}
                      location={testimonial.location}
                      avatarSrc={testimonial.avatarSrc}
                      stars={testimonial.stars}
                    />
                  </motion.div>
                ))}
            </div>
          </div>
        ) : (
          <motion.div
            className={`
              ${
                itemsPerSlide === 1
                  ? "grid grid-cols-1"
                  : "grid grid-cols-1 lg:grid-cols-2"
              }
              gap-4 sm:gap-6
            `}
            initial={{
              x:
                swipeDirection === "left"
                  ? "100%"
                  : swipeDirection === "right"
                    ? "-100%"
                    : "0%",
            }}
            animate={{
              x:
                isTransitioning && swipeDirection
                  ? swipeDirection === "left"
                    ? "-100%"
                    : "100%"
                  : "0%",
            }}
            transition={
              isTransitioning && swipeDirection
                ? { duration: 0.6, ease: "easeInOut" }
                : { duration: 0 }
            }
          >
            {getCurrentSlideItems().map((testimonial, index) => (
              <motion.div
                key={`${currentIndex}-${index}`}
                className={`transition-all duration-600 ease-in-out mx-auto ${
                  itemsPerSlide === 1 ? "w-full flex justify-center" : ""
                } ${getDelayClass(index)}`}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <TestimonialCard
                  quote={testimonial.quote}
                  name={testimonial.name}
                  title={testimonial.title}
                  location={testimonial.location}
                  avatarSrc={testimonial.avatarSrc}
                  stars={testimonial.stars}
                />
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>

      <div className="flex justify-center gap-2 mt-6 sm:mt-8">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`
              cursor-pointer w-2 sm:w-3 h-2 sm:h-3 rounded-full 
              transition-all duration-300 ease-out transform
              hover:scale-125 active:scale-90
              ${
                index === currentIndex
                  ? "bg-[var(--color-royalblue)] shadow-lg shadow-blue-200"
                  : "bg-gray-300 hover:bg-gray-400 hover:shadow-md"
              }
            `}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;

"use client";

import { useState, useEffect } from "react";
import TestimonialCard from "@/components/ui/TestimonialCard";
import { testimonials } from "@/data/testimonials";

const Testimonials = () => {
  const getItemsPerSlide = () => {
    if (typeof window === "undefined") return 5;
    if (window.innerWidth < 640) return 1;
    if (window.innerWidth < 1024) return 2;
    return 5;
  };

  const [itemsPerSlide, setItemsPerSlide] = useState(getItemsPerSlide());
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const totalSlides = Math.ceil(testimonials.length / itemsPerSlide);

  useEffect(() => {
    const handleResize = () => {
      setItemsPerSlide(getItemsPerSlide());
      setCurrentIndex(0);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % totalSlides);
        setIsTransitioning(false);
      }, 600);
    }, 5000);

    return () => clearInterval(interval);
  }, [totalSlides]);

  const getCurrentSlideItems = () => {
    const startIndex = currentIndex * itemsPerSlide;
    return testimonials.slice(startIndex, startIndex + itemsPerSlide);
  };

  const goToSlide = (index: number) => {
    if (index !== currentIndex) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex(index);
        setIsTransitioning(false);
      }, 600);
    }
  };

  const getDelayClass = (index: number) => {
    if (isTransitioning) return "no-transition-delay";
    return `delay-${index * 100}`;
  };

  return (
    <div className="w-full bg-[var(--color-whitesmoke)] flex flex-col items-center py-8 sm:py-10 md:py-12 gap-6 sm:gap-8 text-center text-sm sm:text-base md:text-lg text-[var(--color-gray)] font-lexend">
      <div className="max-w-4xl sm:max-w-5xl md:max-w-7xl flex flex-col items-center gap-4 sm:gap-6 px-4 sm:px-8 md:px-24">
        <div className="rounded-lg bg-[var(--color-royalblue-200)] flex items-center py-2 px-3 gap-2">
          <div className="w-5 sm:w-6 h-5 sm:h-6 rounded-full bg-[var(--color-royalblue)] border-[var(--color-lavender)] border-4" />
          <span className="font-medium text-sm sm:text-base">Testimonials</span>
        </div>
        <b className="text-xl sm:text-2xl md:text-3xl max-w-80 sm:max-w-96">
          Our Happy Customers Reviews
        </b>
        <p className="text-xs sm:text-sm md:text-base">
          The absolute blend of skilled engineers, robust ideas and top-notch
          expertise. This is what Code Huddle is all about! The company aims to
          digitally transform early-stage startups and SMEs through our robust
          expertise in custom software development. We&apos;ll huddle to
          understand your problem, code our way through your problem, and
          present you with a software solution you can&apos;t refuse.
        </p>
      </div>

      <div className="w-full max-w-8xl relative m-4 overflow-hidden">
        <div className="px-4 sm:px-8 md:px-16">
          <div
            className={`
              ${
                itemsPerSlide === 1
                  ? "grid grid-cols-1"
                  : itemsPerSlide === 2
                  ? "grid grid-cols-1 lg:grid-cols-2"
                  : "flex flex-col gap-4 sm:gap-6"
              }
              gap-4 sm:gap-6
              transition-all duration-600 ease-in-out 
              ${
                isTransitioning
                  ? "opacity-0 translate-x-16 scale-95"
                  : "opacity-100 translate-x-0 scale-100"
              }
            `}
          >
            {itemsPerSlide === 5 ? (
              <>
                <div className="flex justify-center gap-4 sm:gap-6">
                  {getCurrentSlideItems()
                    .slice(0, 2)
                    .map((testimonial, index) => (
                      <div
                        key={`${currentIndex}-${index}`}
                        className={`
                        transition-all duration-600 ease-in-out
                        ${
                          isTransitioning
                            ? "opacity-0 translate-x-16"
                            : "opacity-100 translate-x-0"
                        }
                        ${getDelayClass(index)}
                      `}
                      >
                        <TestimonialCard
                          quote={testimonial.quote}
                          name={testimonial.name}
                          title={testimonial.title}
                          location={testimonial.location}
                          avatarSrc={testimonial.avatarSrc}
                          stars={testimonial.stars}
                        />
                      </div>
                    ))}
                </div>
                <div className="flex justify-center gap-4 sm:gap-6">
                  {getCurrentSlideItems()
                    .slice(2, 5)
                    .map((testimonial, index) => (
                      <div
                        key={`${currentIndex}-${index + 2}`}
                        className={`
                        transition-all duration-600 ease-in-out
                        ${
                          isTransitioning
                            ? "opacity-0 translate-x-16"
                            : "opacity-100 translate-x-0"
                        }
                        ${getDelayClass(index + 2)}
                      `}
                      >
                        <TestimonialCard
                          quote={testimonial.quote}
                          name={testimonial.name}
                          title={testimonial.title}
                          location={testimonial.location}
                          avatarSrc={testimonial.avatarSrc}
                          stars={testimonial.stars}
                        />
                      </div>
                    ))}
                </div>
              </>
            ) : (
              getCurrentSlideItems().map((testimonial, index) => (
                <div
                  key={`${currentIndex}-${index}`}
                  className={`
                    transition-all duration-600 ease-in-out mx-auto
                    ${
                      isTransitioning
                        ? "opacity-0 translate-x-16"
                        : "opacity-100 translate-x-0"
                    }
                    ${itemsPerSlide === 1 ? "w-full flex justify-center" : ""}
                    ${getDelayClass(index)}
                  `}
                >
                  <TestimonialCard
                    quote={testimonial.quote}
                    name={testimonial.name}
                    title={testimonial.title}
                    location={testimonial.location}
                    avatarSrc={testimonial.avatarSrc}
                    stars={testimonial.stars}
                  />
                </div>
              ))
            )}
          </div>
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
    </div>
  );
};

export default Testimonials;

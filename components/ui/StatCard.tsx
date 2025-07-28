"use client";

import { useEffect, useState } from "react";

interface StatCardProps {
  value: string;
  description: string;
}

const StatCard = ({ value, description }: StatCardProps) => {
  const [animatedValue, setAnimatedValue] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById(`stat-${value}`);
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, [value]);

  useEffect(() => {
    if (isVisible) {
      const numericValue = parseInt(value.replace(/[^0-9]/g, ""));
      if (!isNaN(numericValue)) {
        const duration = 2000;
        const startTime = Date.now();

        const animate = () => {
          const elapsed = Date.now() - startTime;
          const progress = Math.min(elapsed / duration, 1);

          const easeOut = 1 - Math.pow(1 - progress, 3);
          const current = Math.floor(easeOut * numericValue);

          setAnimatedValue(current);

          if (progress < 1) {
            requestAnimationFrame(animate);
          } else {
            setAnimatedValue(numericValue);
          }
        };

        requestAnimationFrame(animate);
      }
    }
  }, [isVisible, value]);

  const displayValue = () => {
    const numericValue = parseInt(value.replace(/[^0-9]/g, ""));
    if (!isNaN(numericValue)) {
      return value.replace(numericValue.toString(), animatedValue.toString());
    }
    return value;
  };

  return (
    <div
      id={`stat-${value}`}
      className="w-full sm:w-60 md:w-72 rounded-xl bg-[var(--color-white)] flex flex-col items-center p-3 sm:p-4 gap-3 sm:gap-4 shadow-md text-center"
    >
      <b className="text-xl sm:text-2xl text-[var(--color-gray)]">
        {displayValue()}
      </b>
      <p className="text-sm sm:text-base text-[var(--color-gray)]">
        {description}
      </p>
    </div>
  );
};

export default StatCard;

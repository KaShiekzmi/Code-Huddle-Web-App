"use client";

import { useState, useEffect, useRef, useCallback } from "react";

interface CarouselOptions {
  totalItems: number;
  itemsPerSlide?: number | ((windowWidth: number) => number);
  autoSlideInterval?: number;
  swipeThreshold?: number;
  transitionDuration?: number;
  infinite?: boolean;
  paddingItems?: number;
}

interface CarouselState {
  currentIndex: number;
  extendedIndex: number;
  isTransitioning: boolean;
  isAutoSliding: boolean;
  swipeDirection: "left" | "right" | null;
  totalSlides: number;
  itemsPerSlide: number;
  handleTouchStart: (e: React.TouchEvent) => void;
  handleTouchMove: (e: React.TouchEvent) => void;
  handleTouchEnd: () => void;
  goToSlide: (index: number) => void;
  stopAutoSlide: () => void;
  startAutoSlide: () => void;
}

export const useCarousel = ({
  totalItems,
  itemsPerSlide = 1,
  autoSlideInterval = 4000,
  swipeThreshold = 50,
  transitionDuration = 600,
  infinite = false,
  paddingItems = 3,
}: CarouselOptions): CarouselState => {
  const getItemsPerSlide = useCallback(() => {
    if (typeof itemsPerSlide === "function") {
      return itemsPerSlide(
        typeof window === "undefined" ? 0 : window.innerWidth
      );
    }
    return itemsPerSlide;
  }, [itemsPerSlide]);

  const [itemsPerSlideState, setItemsPerSlide] = useState(getItemsPerSlide());
  const [currentIndex, setCurrentIndex] = useState(infinite ? paddingItems : 0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isAutoSliding, setIsAutoSliding] = useState(true);
  const [swipeDirection, setSwipeDirection] = useState<"left" | "right" | null>(
    null
  );
  const totalSlides = infinite
    ? totalItems + paddingItems * 2
    : Math.ceil(totalItems / itemsPerSlideState);
  const extendedIndex = infinite
    ? currentIndex
    : currentIndex * itemsPerSlideState;
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startAutoSlide = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      if (isAutoSliding) {
        setIsTransitioning(true);
        setSwipeDirection(null);
        setTimeout(() => {
          setCurrentIndex((prev) => {
            if (infinite && prev === totalItems + paddingItems) {
              setIsTransitioning(false);
              return paddingItems;
            }
            return infinite ? prev + 1 : (prev + 1) % totalSlides;
          });
          if (!infinite) {
            setIsTransitioning(false);
          }
        }, transitionDuration);
      }
    }, autoSlideInterval);
  }, [
    isAutoSliding,
    totalSlides,
    infinite,
    totalItems,
    paddingItems,
    autoSlideInterval,
    transitionDuration,
  ]);

  const stopAutoSlide = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  const restartAutoSlideAfterSwipe = useCallback(() => {
    setIsAutoSliding(false);
    stopAutoSlide();
    setTimeout(() => {
      setIsAutoSliding(true);
      startAutoSlide();
    }, autoSlideInterval);
  }, [autoSlideInterval, startAutoSlide, stopAutoSlide]);

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, [startAutoSlide, stopAutoSlide]);

  useEffect(() => {
    const handleResize = () => {
      setItemsPerSlide(getItemsPerSlide());
      setCurrentIndex(infinite ? paddingItems : 0);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [getItemsPerSlide, infinite, paddingItems]);

  useEffect(() => {
    if (infinite && currentIndex === totalItems + paddingItems) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(paddingItems);
      }, transitionDuration);
    } else if (infinite && currentIndex === paddingItems - 1) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(totalItems);
      }, transitionDuration);
    }
  }, [currentIndex, infinite, totalItems, paddingItems, transitionDuration]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;

    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > swipeThreshold;
    const isRightSwipe = distance < -swipeThreshold;

    if (isLeftSwipe) {
      setIsTransitioning(true);
      setSwipeDirection("left");
      setTimeout(() => {
        setCurrentIndex((prev) => {
          if (infinite && prev === totalItems + paddingItems) {
            setIsTransitioning(false);
            return paddingItems;
          }
          return infinite ? prev + 1 : (prev + 1) % totalSlides;
        });
        if (!infinite) {
          setIsTransitioning(false);
        }
      }, transitionDuration);
      restartAutoSlideAfterSwipe(); // Added for left swipe
    } else if (isRightSwipe) {
      setIsTransitioning(true);
      setSwipeDirection("right");
      setTimeout(() => {
        setCurrentIndex((prev) => {
          if (infinite && prev === paddingItems - 1) {
            setIsTransitioning(false);
            return totalItems;
          }
          return infinite ? prev - 1 : (prev - 1 + totalSlides) % totalSlides;
        });
        if (!infinite) {
          setIsTransitioning(false);
        }
      }, transitionDuration);
      restartAutoSlideAfterSwipe(); // Added for right swipe
    }

    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  const goToSlide = (index: number) => {
    if (index !== currentIndex) {
      setIsTransitioning(true);
      setSwipeDirection(null);
      setTimeout(() => {
        setCurrentIndex(infinite ? index : index);
        setIsTransitioning(false);
      }, transitionDuration);
      restartAutoSlideAfterSwipe(); // Added for manual slide navigation
    }
  };

  return {
    currentIndex,
    extendedIndex,
    isTransitioning,
    isAutoSliding,
    swipeDirection,
    totalSlides,
    itemsPerSlide: itemsPerSlideState,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
    goToSlide,
    stopAutoSlide,
    startAutoSlide,
  };
};

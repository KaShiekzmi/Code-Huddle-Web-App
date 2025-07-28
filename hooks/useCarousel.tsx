// useCarousel: A custom React hook for carousel/slider logic with support for infinite looping, auto-slide, swipe gestures, and responsive items per slide.
//
// Usage: Call useCarousel with options to manage carousel state and handlers in your component.

"use client";

import { useState, useEffect, useRef, useCallback } from "react";

// Options for configuring the carousel behavior
interface CarouselOptions {
  totalItems: number; // Total number of items in the carousel
  itemsPerSlide?: number | ((windowWidth: number) => number); // Items per slide or a function for responsive count
  autoSlideInterval?: number; // Time (ms) between auto slides
  swipeThreshold?: number; // Minimum px distance for swipe to trigger
  transitionDuration?: number; // Transition animation duration (ms)
  infinite?: boolean; // Enable infinite looping
  paddingItems?: number; // Number of padding items for infinite mode
}

// State and handlers returned by the hook
interface CarouselState {
  currentIndex: number; // Current slide index (may include padding in infinite mode)
  extendedIndex: number; // Index for rendering (accounts for itemsPerSlide)
  isTransitioning: boolean; // If a slide transition is in progress
  isAutoSliding: boolean; // If auto-slide is currently active
  swipeDirection: "left" | "right" | null; // Last swipe direction
  totalSlides: number; // Total number of slides (may include padding)
  itemsPerSlide: number; // Items per slide (resolved if responsive)
  handleTouchStart: (e: React.TouchEvent) => void; // Touch start handler
  handleTouchMove: (e: React.TouchEvent) => void; // Touch move handler
  handleTouchEnd: () => void; // Touch end handler
  goToSlide: (index: number) => void; // Go to a specific slide
  stopAutoSlide: () => void; // Stop auto-slide
  startAutoSlide: () => void; // Start auto-slide
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
  // Helper to get items per slide (supports responsive function)
  const getItemsPerSlide = useCallback(() => {
    if (typeof itemsPerSlide === "function") {
      return itemsPerSlide(
        typeof window === "undefined" ? 0 : window.innerWidth
      );
    }
    return itemsPerSlide;
  }, [itemsPerSlide]);

  // State for items per slide (responsive)
  const [itemsPerSlideState, setItemsPerSlide] = useState(getItemsPerSlide());
  // Current index (starts at padding in infinite mode)
  const [currentIndex, setCurrentIndex] = useState(infinite ? paddingItems : 0);
  // If a transition is happening
  const [isTransitioning, setIsTransitioning] = useState(false);
  // If auto-slide is active
  const [isAutoSliding, setIsAutoSliding] = useState(true);
  // Last swipe direction
  const [swipeDirection, setSwipeDirection] = useState<"left" | "right" | null>(
    null
  );
  // Total slides (with padding for infinite mode)
  const totalSlides = infinite
    ? totalItems + paddingItems * 2
    : Math.ceil(totalItems / itemsPerSlideState);
  // Index for rendering (accounts for itemsPerSlide)
  const extendedIndex = infinite
    ? currentIndex
    : currentIndex * itemsPerSlideState;
  // Touch positions for swipe detection
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);
  // Ref for auto-slide interval
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Start auto-slide interval
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
            // Loop to start if at end in infinite mode
            if (infinite && prev === totalItems + paddingItems) {
              setIsTransitioning(false);
              return paddingItems;
            }
            // Advance to next slide
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

  // Stop auto-slide interval
  const stopAutoSlide = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  // Restart auto-slide after a swipe (pause briefly)
  const restartAutoSlideAfterSwipe = useCallback(() => {
    setIsAutoSliding(false);
    stopAutoSlide();
    setTimeout(() => {
      setIsAutoSliding(true);
      startAutoSlide();
    }, autoSlideInterval);
  }, [autoSlideInterval, startAutoSlide, stopAutoSlide]);

  // Start auto-slide on mount, clean up on unmount
  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, [startAutoSlide, stopAutoSlide]);

  // Update items per slide on window resize (for responsive carousels)
  useEffect(() => {
    const handleResize = () => {
      setItemsPerSlide(getItemsPerSlide());
      setCurrentIndex(infinite ? paddingItems : 0);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [getItemsPerSlide, infinite, paddingItems]);

  // Handle edge cases for infinite looping (jump to real slide after transition)
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

  // Touch event handlers for swipe gestures
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
      // Swipe left: go to next slide
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
      restartAutoSlideAfterSwipe();
    } else if (isRightSwipe) {
      // Swipe right: go to previous slide
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
      restartAutoSlideAfterSwipe();
    }

    // Reset touch positions
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  // Go to a specific slide (by index)
  const goToSlide = (index: number) => {
    if (index !== currentIndex) {
      setIsTransitioning(true);
      setSwipeDirection(null);
      setTimeout(() => {
        setCurrentIndex(infinite ? index : index);
        setIsTransitioning(false);
      }, transitionDuration);
      restartAutoSlideAfterSwipe();
    }
  };

  // Return state and handlers for use in carousel component
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

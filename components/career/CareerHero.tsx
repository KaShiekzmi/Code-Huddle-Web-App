"use client";

import Image from "next/image";
import { motion, useInView, Variants } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const texts = [
  "Apply Now",
  "Search Jobs",
  "Join Our Team",
  "Start Your Journey",
];

const CareerHero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const currentText = texts[textIndex];

    if (!isDeleting) {
      if (displayText.length < currentText.length) {
        const timeout = setTimeout(() => {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        }, 150);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 2000);
        return () => clearTimeout(timeout);
      }
    } else {
      if (displayText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 100);
        return () => clearTimeout(timeout);
      } else {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % texts.length);
      }
    }
  }, [displayText, isDeleting, textIndex]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section
      ref={ref}
      className="relative min-h-[100vh] pt-10 flex items-center justify-center bg-[var(--color-whitesmoke)] overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[var(--color-royalblue-200)] rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[var(--color-mediumblue)] rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[var(--color-royalblue-200)] rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          <motion.div
            className="flex-1 space-y-8 text-center lg:text-left"
            variants={itemVariants}
          >
            <motion.div
              className="inline-flex items-center gap-2 bg-[var(--color-royalblue-200)] border border-[var(--color-royalblue)] text-[var(--color-royalblue)] px-4 py-2 rounded-full text-sm font-medium"
              variants={itemVariants}
            >
              <div className="w-2 h-2 bg-[var(--color-royalblue)] rounded-full"></div>
              We&apos;re Hiring
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--color-gray)] leading-tight"
              variants={itemVariants}
            >
              Join Our{" "}
              <span className="text-[var(--color-royalblue)]">
                Amazing Team
              </span>
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl text-[var(--color-dimgray)] leading-relaxed max-w-2xl mx-auto lg:mx-0"
              variants={itemVariants}
            >
              Be part of a dynamic team that&apos;s shaping the future of
              technology. Work on cutting-edge projects, grow your skills, and
              make a real impact in an innovative environment.
            </motion.p>

            <motion.div
              className="flex justify-center lg:justify-start "
              variants={itemVariants}
            >
              <div className="text-2xl font-bold text-[var(--color-royalblue)] min-h-[2rem] flex items-center">
                <span>{displayText}</span>
                <span className="animate-pulse">|</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex-1 relative flex justify-center lg:justify-end items-center p-4 lg:p-8"
            variants={imageVariants}
          >
            <div className="relative flex items-center justify-center w-[400px]">
              <Image
                className="w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl h-[400px] drop-shadow-2xl"
                width={300}
                height={300}
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 70vw, (max-width: 1024px) 40vw, 300px"
                alt="Career opportunities illustration"
                src="/assets/images/illustrations/careerhero.svg"
                priority
              />

              <motion.div
                className="absolute -top-3 -right-3 bg-white rounded-full p-2 shadow-lg"
                animate={{ y: [-5, 5, -5] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <svg
                  className="w-8 h-8 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </motion.div>

              <motion.div
                className="absolute -bottom-3 -left-3 bg-white rounded-full p-2 shadow-lg"
                animate={{ y: [5, -5, 5] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <svg
                  className="w-8 h-8 text-[var(--color-royalblue)]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  />
                </svg>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-6 h-10 border-2 border-[var(--color-dimgray)] rounded-full flex justify-center">
          <div className="w-1 h-3 bg-[var(--color-dimgray)] rounded-full mt-2"></div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default CareerHero;

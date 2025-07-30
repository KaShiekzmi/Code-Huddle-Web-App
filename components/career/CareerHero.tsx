"use client";

import Image from "next/image";
import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";

const CareerHero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className="w-full min-h-[calc(100vh-80px)] mt-5 flex flex-col items-center justify-center py-10 px-4 sm:px-6 lg:pt-25 md:pt-10 md:px-8 lg:px-12 xl:px-16 bg-[var(--color-whitesmoke)] text-[var(--color-gray)] font-lexend"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <div className="w-full max-w-[1400px] lg:mt-15 flex flex-col items-center gap-6 sm:gap-8 md:gap-10">
        <motion.div
          className="w-full flex flex-col items-center gap-4 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16"
          variants={itemVariants}
        >
          <motion.b
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl"
            variants={itemVariants}
          >
            Join Our Team
          </motion.b>
          <motion.p
            className="text-sm sm:text-base md:text-lg lg:text-xl text-[var(--color-dimgray)] text-center leading-relaxed max-w-3xl"
            variants={itemVariants}
          >
            Explore exciting career opportunities in our innovative software
            company. Be part of a team that solves challenges, drives growth,
            and creates impactful solutions. Your next big step starts here!
          </motion.p>
        </motion.div>
        <motion.div variants={itemVariants}>
          <Image
            className="w-full max-w-[300px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-[450px] h-auto hover:scale-105 transition-transform duration-300"
            width={450}
            height={464}
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, (max-width: 1024px) 60vw, 450px"
            alt="Career opportunities illustration"
            src="/images/illustration/careerhero.svg"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CareerHero;

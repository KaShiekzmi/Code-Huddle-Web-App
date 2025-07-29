"use client";

import Image from "next/image";
import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";

const CareerHero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

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
      className="w-full min-h-[calc(100vh-100px)] mt-20 flex flex-col items-center justify-center py-14 px-4 sm:px-8 md:px-16 lg:px-24 bg-[var(--color-whitesmoke)] text-[var(--color-gray)] font-lexend"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <div className="max-w-7xl w-full flex flex-col items-center gap-8">
        <motion.div
          className="w-full flex flex-col items-center gap-4 px-4 sm:px-8 md:px-12 lg:px-16"
          variants={itemVariants}
        >
          <motion.b
            className="text-2xl sm:text-3xl md:text-4xl"
            variants={itemVariants}
          >
            Join Our Team
          </motion.b>
          <motion.p
            className="text-base sm:text-lg text-[var(--color-dimgray)] text-center leading-relaxed"
            variants={itemVariants}
          >
            Explore exciting career opportunities in our innovative software
            company. Be part of a team that solves challenges, drives growth,
            and creates impactful solutions. Your next big step starts here!
          </motion.p>
        </motion.div>
        <motion.div variants={itemVariants}>
          <Image
            className="w-full sm:w-4/5 md:w-[268.7px] h-[277.5px] hover:scale-105 transition-transform duration-300"
            width={268.7}
            height={277.5}
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, 268.7px"
            alt="Career opportunities illustration"
            src="/images/illustration/careerhero.svg"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CareerHero;

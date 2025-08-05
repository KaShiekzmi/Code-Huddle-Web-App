"use client";

import CareerHero from "@/components/career/CareerHero";
import JobOpenings from "@/components/career/JobOpenings";
import JobOpeningsLoading from "@/components/career/JobOpeningsLoading";
import React, { Suspense } from "react";

const page = () => {
  return (
    <div>
      <main>
        <CareerHero />
        <Suspense fallback={<JobOpeningsLoading />}>
          <JobOpenings />
        </Suspense>
      </main>
    </div>
  );
};

export default page;

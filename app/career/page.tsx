import CareerHero from "@/components/career/CareerHero";
import JobOpenings from "@/components/career/JobOpenings";
import React from "react";

const page = () => {
  return (
    <div>
      <main>
        <CareerHero />
        <JobOpenings />
      </main>
    </div>
  );
};

export default page;

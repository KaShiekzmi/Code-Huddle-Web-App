"use client";

import { useState } from "react";
import JobCard from "@/components/ui/JobCard";
import { jobs } from "@/data/jobs";
import SearchFilters from "./SearchFilters";
import { filterJobs } from "@/utils/filterJobs ";
import DataNotFound from "../ui/DataNotFound";
import { Job, FilterValues } from "@/types/job";

const JobOpenings = () => {
  const [filteredJobs, setFilteredJobs] = useState<Job[]>(jobs);

  const handleFilterChange = (filters: FilterValues) => {
    const filtered = filterJobs(jobs, filters);
    setFilteredJobs(filtered);
  };

  return (
    <div className="w-full flex flex-col items-center py-10 px-4 sm:px-8 md:px-16 lg:px-24 bg-[var(--color-white)] text-[var(--color-gray)] font-lexend">
      <div className="max-w-7xl w-full flex flex-col items-center gap-5">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-[var(--color-black)]">
          Job Openings
        </h2>
        <SearchFilters onFilterChange={handleFilterChange} />
        {filteredJobs.length > 0 ? (
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredJobs.map((job) => (
              <JobCard
                key={job.id}
                id={job.id}
                level={job.level}
                date={job.date}
                title={job.title}
                description={job.description}
                location={job.location}
                employmentType={job.employmentType}
              />
            ))}
          </div>
        ) : (
          <DataNotFound
            title="No Jobs Found"
            description="It looks like there are no job openings matching your criteria. Try adjusting your filters!"
          />
        )}
      </div>
    </div>
  );
};

export default JobOpenings;

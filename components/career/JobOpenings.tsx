"use client";

import { useState } from "react";
import JobCard from "@/components/ui/JobCard";
import SearchFilters from "./SearchFilters";
import DataNotFound from "@/components/ui/DataNotFound";
import { Job, FilterValues } from "@/types/job";
import { useJobs, JobsApiResponse, JobFilters } from "@/hooks/useJobs";
import LoadingSpinner from "@/components/ui/LoadingSpinner";

const perPageOptions = [12, 24, 36];

const JobOpenings = () => {
  const [filters, setFilters] = useState<FilterValues>({
    search: "",
    location: [],
    employmentType: [],
    experienceLevel: [],
  });
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(perPageOptions[0]);

  const { data, isLoading, isError } = useJobs({
    filters: filters as JobFilters,
    page,
    perPage,
  });
  const jobs = (data as JobsApiResponse | undefined)?.jobs || [];
  const totalPages = (data as JobsApiResponse | undefined)?.totalPages || 1;
  const totalJobs = (data as JobsApiResponse | undefined)?.total || 0;

  const handleFilterChange = (newFilters: FilterValues) => {
    setFilters(newFilters);
    setPage(1);
  };

  return (
    <div className="w-full flex flex-col items-center py-10 px-4 sm:px-8 md:px-16 lg:px-24 bg-[var(--color-white)] text-[var(--color-gray)] font-lexend">
      <div className="max-w-7xl w-full flex flex-col items-center gap-5">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-[var(--color-black)]">
          Job Openings
        </h2>
        <SearchFilters onFilterChange={handleFilterChange} />
        {isLoading ? (
          <div className="w-full flex justify-center py-10">
            <LoadingSpinner description="Loading jobs..." />
          </div>
        ) : isError ? (
          <DataNotFound title="Error" description="Failed to load jobs." />
        ) : jobs.length > 0 ? (
          <>
            <div className="w-full flex justify-end mb-2">
              <span className="text-sm font-medium">
                Total Jobs: <span className="font-bold">{totalJobs}</span>
              </span>
            </div>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {jobs.map((job: Job) => (
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
            <div className="w-full flex flex-col sm:flex-row justify-between items-center mt-8 gap-4">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">Jobs per page:</span>
                <select
                  value={perPage}
                  onChange={(e) => {
                    setPerPage(Number(e.target.value));
                    setPage(1);
                  }}
                  className="border border-[var(--color-gray-light)] rounded px-3 py-1 bg-white text-[var(--color-gray)] transition cursor-pointer"
                >
                  {perPageOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  disabled={page === 1}
                  className="cursor-pointer px-4 py-1 rounded border border-[var(--color-primary)] text-[var(--color-primary)] bg-white font-semibold transition  disabled:cursor-not-allowed"
                >
                  Prev
                </button>
                <span className="text-sm font-medium">
                  Page <span className="font-bold">{page}</span> of{" "}
                  <span className="font-bold">{totalPages}</span>
                </span>
                <button
                  onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                  disabled={page === totalPages}
                  className="cursor-pointer px-4 py-1 rounded border border-[var(--color-primary)] text-[var(--color-primary)] bg-white font-semibold transition  disabled:cursor-not-allowed "
                >
                  Next
                </button>
              </div>
            </div>
          </>
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

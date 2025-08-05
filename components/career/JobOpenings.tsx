"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import JobCard from "@/components/ui/JobCard";
import SearchFilters from "./SearchFilters";
import DataNotFound from "@/components/ui/DataNotFound";
import { Job, FilterValues } from "@/types/job";
import { useJobs, JobsApiResponse, JobFilters } from "@/hooks/useJobs";
import LoadingSpinner from "@/components/ui/LoadingSpinner";

const perPageOptions = [12, 24, 36];

const JobOpenings = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const getInitialFilters = (): FilterValues => {
    try {
      const search = searchParams?.get("search") || "";
      const location = searchParams?.getAll("location").filter(Boolean) || [];
      const employmentType =
        searchParams?.getAll("employmentType").filter(Boolean) || [];
      const experienceLevel =
        searchParams?.getAll("experienceLevel").filter(Boolean) || [];

      return {
        search,
        location,
        employmentType,
        experienceLevel,
      };
    } catch (error) {
      console.error("Error parsing search parameters:", error);
      return {
        search: "",
        location: [],
        employmentType: [],
        experienceLevel: [],
      };
    }
  };

  const [filters, setFilters] = useState<FilterValues>(getInitialFilters);
  const [page, setPage] = useState(
    parseInt(searchParams?.get("page") || "1", 10)
  );
  const [perPage, setPerPage] = useState(
    parseInt(searchParams?.get("perPage") || perPageOptions[0].toString(), 10)
  );

  const { data, isLoading, isError, error } = useJobs({
    filters: filters as JobFilters,
    page,
    perPage,
  });

  const jobs = (data as JobsApiResponse | undefined)?.jobs || [];
  const totalPages = (data as JobsApiResponse | undefined)?.totalPages || 1;
  const totalJobs = (data as JobsApiResponse | undefined)?.total || 0;

  const updateURL = (
    newFilters: FilterValues,
    newPage: number,
    newPerPage: number
  ) => {
    const params = new URLSearchParams();

    if (newFilters.search) {
      params.set("search", newFilters.search);
    }
    newFilters.location.forEach((loc) => params.append("location", loc));
    newFilters.employmentType.forEach((type) =>
      params.append("employmentType", type)
    );
    newFilters.experienceLevel.forEach((level) =>
      params.append("experienceLevel", level)
    );

    if (newPage > 1) {
      params.set("page", newPage.toString());
    }
    if (newPerPage !== perPageOptions[0]) {
      params.set("perPage", newPerPage.toString());
    }

    const newURL = params.toString() ? `?${params.toString()}` : "/career";
    router.push(newURL, { scroll: false });
  };

  const handleFilterChange = (newFilters: FilterValues) => {
    setFilters(newFilters);
    setPage(1);
    updateURL(newFilters, 1, perPage);
  };

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
    updateURL(filters, newPage, perPage);
  };

  const handlePerPageChange = (newPerPage: number) => {
    setPerPage(newPerPage);
    setPage(1);
    updateURL(filters, 1, newPerPage);
  };

  useEffect(() => {
    try {
      const getInitialFilters = (): FilterValues => {
        const search = searchParams?.get("search") || "";
        const location = searchParams?.getAll("location").filter(Boolean) || [];
        const employmentType =
          searchParams?.getAll("employmentType").filter(Boolean) || [];
        const experienceLevel =
          searchParams?.getAll("experienceLevel").filter(Boolean) || [];

        return {
          search,
          location,
          employmentType,
          experienceLevel,
        };
      };

      const newFilters = getInitialFilters();
      const newPage = parseInt(searchParams?.get("page") || "1", 10);
      const newPerPage = parseInt(
        searchParams?.get("perPage") || perPageOptions[0].toString(),
        10
      );

      setFilters(newFilters);
      setPage(newPage);
      setPerPage(newPerPage);
    } catch (error) {
      console.error("Error updating filters from search params:", error);
    }
  }, [searchParams]);

  // Add error boundary for searchParams after all hooks
  if (!searchParams) {
    return (
      <div className="w-full flex flex-col items-center py-8 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 bg-[var(--color-white)] text-[var(--color-gray)] font-lexend">
        <div className="w-full max-w-[1400px] flex flex-col items-center gap-4 sm:gap-6 md:gap-8">
          <DataNotFound
            title="Error"
            description="Unable to load search parameters."
          />
        </div>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col items-center py-8 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 bg-[var(--color-white)] text-[var(--color-gray)] font-lexend">
      <div className="w-full max-w-[1400px] flex flex-col items-center gap-4 sm:gap-6 md:gap-8">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-center text-[var(--color-black)]">
          Job Openings
        </h2>
        <SearchFilters
          onFilterChange={handleFilterChange}
          totalJobs={totalJobs}
          initialFilters={filters}
        />

        {isLoading ? (
          <div className="w-full flex justify-center py-8 sm:py-10">
            <LoadingSpinner />
          </div>
        ) : isError ? (
          <DataNotFound
            title="Error"
            description={`Failed to load jobs. ${error instanceof Error ? error.message : "Please try again later."}`}
          />
        ) : jobs.length > 0 ? (
          <>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
              {jobs.map((job: Job) => (
                <JobCard
                  key={job.id}
                  slug={job.slug}
                  experienceLevel={job.experienceLevel}
                  postedDate={job.postedDate}
                  title={job.title}
                  description={job.description}
                  location={job.location}
                  employmentType={job.employmentType}
                />
              ))}
            </div>
            <div className="w-full flex flex-col sm:flex-row justify-between items-center mt-6 sm:mt-8 gap-4">
              <div className="flex items-center justify-end w-full sm:w-auto gap-2">
                <span className="text-xs sm:text-sm font-medium">
                  Jobs per page:
                </span>
                <select
                  value={perPage}
                  onChange={(e) => handlePerPageChange(Number(e.target.value))}
                  className="border border-[var(--color-gray-light)] rounded px-2 sm:px-3 py-1 bg-white text-[var(--color-gray)] text-xs sm:text-sm transition cursor-pointer"
                >
                  {perPageOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex items-center w-full justify-between sm:w-auto gap-3 sm:gap-4">
                <button
                  onClick={() => handlePageChange(Math.max(1, page - 1))}
                  disabled={page === 1}
                  className="cursor-pointer px-3 sm:px-4 py-1 rounded border border-[var(--color-primary)] text-[var(--color-primary)] bg-white font-semibold text-xs sm:text-sm transition disabled:cursor-not-allowed"
                >
                  Prev
                </button>
                <span className="text-xs sm:text-sm font-medium">
                  Page <span className="font-bold">{page}</span> of{" "}
                  <span className="font-bold">{totalPages}</span>
                </span>
                <button
                  onClick={() =>
                    handlePageChange(Math.min(totalPages, page + 1))
                  }
                  disabled={page === totalPages}
                  className="cursor-pointer px-3 sm:px-4 py-1 rounded border border-[var(--color-primary)] text-[var(--color-primary)] bg-white font-semibold text-xs sm:text-sm transition disabled:cursor-not-allowed"
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

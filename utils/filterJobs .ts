import { Job, FilterValues } from "../types/job";

export const filterJobs = (jobs: Job[], filters: FilterValues): Job[] => {
  return jobs.filter((job) => {
    // Search filter
    if (filters.search) {
      const searchTerm = filters.search.toLowerCase();
      const jobText =
        `${job.title} ${job.description} ${job.level} ${job.location} ${job.employmentType}`.toLowerCase();
      if (!jobText.includes(searchTerm)) return false;
    }

    // Location filter
    if (
      filters.location.length > 0 &&
      !filters.location.includes(job.location)
    ) {
      return false;
    }

    // Employment type filter
    if (
      filters.employmentType.length > 0 &&
      !filters.employmentType.includes(job.employmentType)
    ) {
      return false;
    }

    // Experience level filter
    if (
      filters.experienceLevel.length > 0 &&
      !filters.experienceLevel.includes(job.level)
    ) {
      return false;
    }

    return true;
  });
};

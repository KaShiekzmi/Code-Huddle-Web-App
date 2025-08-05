import { useQuery } from "@tanstack/react-query";
import { apiClient } from "../lib/apiclient";
import { Job } from "@/types/job";

export interface JobFilters {
  search?: string;
  location?: string[];
  employmentType?: string[];
  experienceLevel?: string[];
  [key: string]: string | number | boolean | string[] | undefined;
}

export interface JobsApiResponse {
  jobs: Job[];
  total: number;
  page: number;
  perPage: number;
  totalPages: number;
}

export interface JobApiResponse {
  job: Job;
}

export function useJobs({
  filters,
  page = 1,
  perPage = 10,
}: {
  filters: JobFilters;
  page?: number;
  perPage?: number;
}) {
  return useQuery<JobsApiResponse>({
    queryKey: ["jobs", filters, page, perPage],
    queryFn: () =>
      apiClient<JobsApiResponse>("/api/jobs", {
        params: {
          ...filters,
          page,
          perPage,
        },
      }),
    // @ts-expect-error: keepPreviousData is a valid option in recent versions of react-query
    keepPreviousData: true,
    retry: 3,
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
  });
}

export function useJob(slugOrId: string | number) {
  return useQuery<JobApiResponse>({
    queryKey: ["job", slugOrId],
    queryFn: () =>
      apiClient<JobApiResponse>("/api/jobs", {
        params: { slug: slugOrId },
      }),
    enabled: !!slugOrId,
  });
}

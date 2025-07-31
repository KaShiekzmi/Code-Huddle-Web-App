import { useQuery } from "@tanstack/react-query";
import { apiClient } from "../lib/apiclient";
import { CaseStudy } from "@/types/case-study";

export interface CaseStudiesApiResponse {
  caseStudies: CaseStudy[];
  total: number;
}

export interface CaseStudyApiResponse {
  caseStudy: CaseStudy;
}

export function useCaseStudies() {
  return useQuery<CaseStudiesApiResponse>({
    queryKey: ["case-studies"],
    queryFn: () =>
      apiClient<CaseStudiesApiResponse>("/api/case-studies"),
  });
}

export function useCaseStudy(id: string | number) {
  return useQuery<CaseStudyApiResponse>({
    queryKey: ["case-study", id],
    queryFn: () =>
      apiClient<CaseStudyApiResponse>("/api/case-studies", {
        params: { id },
      }),
    enabled: !!id,
  });
} 
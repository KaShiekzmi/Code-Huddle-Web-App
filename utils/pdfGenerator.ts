import { Job } from "@/types/job";

interface ApplicationData {
  personalInfo: {
    firstName: string;
    lastName: string;
    email: string;
    headline: string;
    phone: string;
    countryCode: string;
    address: string;
  };
  education: Array<{
    id: string;
    school: string;
    fieldOfStudy: string;
    degree: string;
    startDate: string;
    endDate: string;
    isCurrent: boolean;
  }>;
  experience: Array<{
    id: string;
    title: string;
    company: string;
    industry: string;
    summary: string;
    startDate: string;
    endDate: string;
    isCurrent: boolean;
  }>;
  summary: string;
  documents: File[];
  coverLetter: string;
}

// Export the types for use in client components
export type { ApplicationData };

// This function will be called from a client component
export function getPDFFileName(
  applicationData: ApplicationData,
  job: Job
): string {
  return `${applicationData.personalInfo.firstName}_${
    applicationData.personalInfo.lastName
  }_Application_${job.title.replace(/[^a-zA-Z0-9]/g, "_")}.pdf`;
}

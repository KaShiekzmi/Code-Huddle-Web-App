export interface PersonalInfo {
  firstName: string;
  lastName: string;
  email: string;
  headline: string;
  phone: string;
  countryCode: string;
  address: string;
}

export interface Education {
  id: string;
  school: string;
  fieldOfStudy: string;
  degree: string;
  startDate: string;
  endDate: string;
  isCurrent: boolean;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  industry: string;
  summary: string;
  startDate: string;
  endDate: string;
  isCurrent: boolean;
}

import { Job } from "@/types/job";

export interface ApplicationData {
  personalInfo: PersonalInfo;
  education: Education[];
  experience: Experience[];
  summary: string;
  documents: File[];
  coverLetter: string;
}

export interface JobApplicationFormProps {
  job: Job;
} 
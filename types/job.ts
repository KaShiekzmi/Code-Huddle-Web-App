export interface Job {
  id: number;
  level: string;
  title: string;
  description: string;
  location: string;
  employmentType: string;
  requiredSkills: string[];
  requiredExperience?: string;
  applicationDeadline: string;
  jobPostingDate: string;
  applicationRequirements?: string[];
  detailedDescription?: {
    jobResponsibilities?: string[];
    jobRequirements?: string[];
    benefits?: string[];
    note?: string;
  };
}

export interface FilterValues {
  search: string;
  location: string[];
  employmentType: string[];
  experienceLevel: string[];
}

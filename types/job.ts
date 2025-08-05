export interface Job {
  // Basic Information
  slug: string;
  id: number;
  title: string;
  description: string;

  // Job Classification
  experienceLevel: string;
  employmentType: string;
  location: string;

  // Requirements
  requiredSkills: string[];
  requiredExperience: string;

  // Application Details
  applicationRequirements: string[];

  // Timestamps
  postedDate: string;
  deadlineDate: string;

  // Detailed Information
  responsibilities: string[];
  requirements: string[];
  benefits: string[];
  additionalNotes: string;
}

export interface FilterValues {
  search: string;
  location: string[];
  employmentType: string[];
  experienceLevel: string[];
}

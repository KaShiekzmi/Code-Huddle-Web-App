export interface Job {
  id: number;
  level: string;
  date: string;
  title: string;
  description: string;
  location: string;
  employmentType: string;
}

export interface FilterValues {
  search: string;
  location: string[];
  employmentType: string[];
  experienceLevel: string[];
}

import { ApplicationData } from "../job-application";
import { Job } from "../job";

export interface EmailTemplateProps {
  applicationData: ApplicationData;
  job: Job;
}

export interface EmailServiceConfig {
  service: string;
  auth: {
    user: string;
    pass: string;
  };
}

export interface EmailOptions {
  from: string;
  to: string;
  subject: string;
  html: string;
}

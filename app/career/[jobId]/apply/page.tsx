"use client";

import { notFound } from "next/navigation";
import { useParams } from "next/navigation";
import Link from "next/link";
import { useJob } from "@/hooks/useJobs";
import LoadingSpinner from "@/components/ui/LoadingSpinner";
import DataNotFound from "@/components/ui/DataNotFound";
import JobApplicationForm from "@/components/career/apply/JobApplicationForm";

export default function JobApplicationPage() {
  const { jobId } = useParams();
  const { data, isLoading, error } = useJob(jobId as string);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-gray-50">
        <LoadingSpinner />
      </div>
    );
  }

  if (error || !data?.job) {
    notFound();
  }

  const job = data.job;
  const isDeadlinePassed = new Date(job.applicationDeadline) < new Date();

  // Show DataNotFound if deadline has passed
  if (isDeadlinePassed) {
    return (
      <div className="min-h-screen mt-12 sm:mt-16 md:mt-20 bg-gradient-to-br from-white to-gray-50">
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pt-4 sm:pt-6 md:pt-8">
          <div className="mb-3 sm:mb-4 md:mb-6">
            <Link
              href={`/career/${jobId}`}
              className="hover:pl-[2px] transition-all duration-200 text-royalblue hover:text-royalblue-200 flex items-center space-x-1.5 sm:space-x-2 text-xs sm:text-sm md:text-base"
            >
              <svg
                className="w-3.5 sm:w-4 md:w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              <span>Back to Job Details</span>
            </Link>
          </div>
        </div>
        <DataNotFound
          title="Application Deadline Passed"
          description="The application deadline for this position has passed. Please check our careers page for other available opportunities."
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen mt-12 sm:mt-16 md:mt-20 bg-gradient-to-br from-white to-gray-50">
      <div className="bg-white">
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pt-4 sm:pt-6 md:pt-8">
          <div className="mb-3 sm:mb-4 md:mb-6">
            <Link
              href={`/career/${jobId}`}
              className="hover:pl-[2px] transition-all duration-200 text-royalblue hover:text-royalblue-200 flex items-center space-x-1.5 sm:space-x-2 text-xs sm:text-sm md:text-base"
            >
              <svg
                className="w-3.5 sm:w-4 md:w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              <span>Back to Job Details</span>
            </Link>

            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 md:gap-3 mb-1.5 sm:mb-2 md:mb-3">
              <span className="inline-flex items-center px-1.5 sm:px-2 md:px-3 py-0.5 sm:py-1 rounded-full text-xs sm:text-sm font-medium bg-royalblue-200 text-royalblue">
                {job.level}
              </span>
              <span className="inline-flex items-center px-1.5 sm:px-2 md:px-3 py-0.5 sm:py-1 rounded-full text-xs sm:text-sm font-medium bg-green-100 text-green-800">
                {job.employmentType}
              </span>
              <span className="inline-flex items-center px-1.5 sm:px-2 md:px-3 py-0.5 sm:py-1 rounded-full text-xs sm:text-sm font-medium bg-purple-100 text-purple-800">
                {job.location}
              </span>
            </div>
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-1 sm:mb-1.5 md:mb-2">
              Apply for {job.title}
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600">
              Complete your application below
            </p>
          </div>
        </div>
      </div>

      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pb-6 sm:pb-8 md:pb-10 lg:pb-12 pt-3 sm:pt-4 md:pt-5">
        <JobApplicationForm job={job} />
      </div>
    </div>
  );
}

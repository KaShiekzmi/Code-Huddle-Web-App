"use client";

import { notFound } from "next/navigation";
import { useParams } from "next/navigation";
import { useJob } from "@/hooks/useJobs";
import LoadingSpinner from "@/components/ui/LoadingSpinner";
import Link from "next/link";
import JobApplicationForm from "@/components/career/apply/JobApplicationForm";

export default function JobApplicationPage() {
  const { slug } = useParams();
  const { data, isLoading, error } = useJob(slug as string);

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
  const isDeadlinePassed = new Date(job.deadlineDate) < new Date();

  if (isDeadlinePassed) {
    return (
      <div className="min-h-screen mt-14 sm:mt-20 bg-gradient-to-br from-white to-gray-50">
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8 sm:py-12">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sm:p-8 md:p-10 text-center">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-red-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
              Application Closed
            </h1>
            <p className="text-gray-600 mb-6">
              The application deadline for this position has passed. We&apos;re
              no longer accepting applications.
            </p>
            <Link
              href="/career"
              className="inline-flex items-center px-4 py-2 bg-royalblue text-white rounded-lg hover:bg-royalblue-600 transition-colors duration-200"
            >
              <svg
                className="w-4 h-4 mr-2"
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
              Back to Careers
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen mt-14 sm:mt-20 bg-gradient-to-br from-white to-gray-50">
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8 sm:py-12">
        <div className="mb-6 sm:mb-8">
          <Link
            href={`/career/${slug}`}
            className="hover:pl-[2px] transition-all duration-200 text-royalblue hover:text-royalblue-200 flex items-center space-x-2 text-sm sm:text-base"
          >
            <svg
              className="w-4 h-4 sm:w-5"
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

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sm:p-8 md:p-10">
          <div className="mb-6 sm:mb-8">
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <span className="inline-flex items-center px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs sm:text-sm font-medium bg-royalblue-200 text-royalblue">
                {job.experienceLevel}
              </span>
              <span className="inline-flex items-center px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs sm:text-sm font-medium bg-green-100 text-green-800">
                {job.employmentType}
              </span>
              <span className="inline-flex items-center px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs sm:text-sm font-medium bg-purple-100 text-purple-800">
                {job.location}
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              Apply for {job.title}
            </h1>
            <p className="text-gray-600 text-base sm:text-lg">
              {job.description}
            </p>
          </div>

          <JobApplicationForm job={job} />
        </div>
      </div>
    </div>
  );
}

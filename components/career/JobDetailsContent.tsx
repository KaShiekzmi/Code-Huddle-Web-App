import { Job } from "@/types/job";
import { hasContent } from "@/utils/hasContent";

interface JobDetailsContentProps {
  job: Job;
}

export default function JobDetailsContent({ job }: JobDetailsContentProps) {
  return (
    <div className="space-y-6 sm:space-y-8">
      {hasContent(job.detailedDescription.jobResponsibilities) && (
        <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6 md:p-8">
          <div className="flex items-center space-x-2 sm:space-x-3 mb-4 sm:mb-6">
            <div className="w-8 sm:w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
              <svg
                className="w-5 sm:w-6 h-6 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                />
              </svg>
            </div>
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">
              Job Responsibilities
            </h2>
          </div>
          <ul className="space-y-2 sm:space-y-3">
            {job.detailedDescription.jobResponsibilities.map(
              (responsibility: string, index: number) => (
                <li
                  key={index}
                  className="flex items-start space-x-2 sm:space-x-3"
                >
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                  <span className="text-sm sm:text-base lg:text-base text-gray-700">
                    {responsibility}
                  </span>
                </li>
              )
            )}
          </ul>
        </section>
      )}

      {hasContent(job.detailedDescription.jobRequirements) && (
        <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6 md:p-8">
          <div className="flex items-center space-x-2 sm:space-x-3 mb-4 sm:mb-6">
            <div className="w-8 sm:w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
              <svg
                className="w-5 sm:w-6 h-6 text-orange-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">
              Job Requirements
            </h2>
          </div>
          <ul className="space-y-2 sm:space-y-3">
            {job.detailedDescription.jobRequirements.map(
              (requirement: string, index: number) => (
                <li
                  key={index}
                  className="flex items-start space-x-2 sm:space-x-3"
                >
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                  <span className="text-sm sm:text-base lg:text-base text-gray-700">
                    {requirement}
                  </span>
                </li>
              )
            )}
          </ul>
        </section>
      )}

      {hasContent(job.detailedDescription.benefits) && (
        <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6 md:p-8">
          <div className="flex items-center space-x-2 sm:space-x-3 mb-4 sm:mb-6">
            <div className="w-8 sm:w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
              <svg
                className="w-5 sm:w-6 h-6 text-purple-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                />
              </svg>
            </div>
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">
              Benefits & Perks
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {job.detailedDescription.benefits.map(
              (benefit: string, index: number) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 sm:space-x-3 p-2 sm:p-3 bg-gray-50 rounded-lg"
                >
                  <svg
                    className="w-4 sm:w-5 h-5 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-sm sm:text-base lg:text-base text-gray-700">
                    {benefit}
                  </span>
                </div>
              )
            )}
          </div>
        </section>
      )}

      {hasContent(job.applicationRequirements) && (
        <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6 md:p-8">
          <div className="flex items-center space-x-2 sm:space-x-3 mb-4 sm:mb-6">
            <div className="w-8 sm:w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <svg
                className="w-5 sm:w-6 h-6 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">
              Application Requirements
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {job.applicationRequirements.map(
              (requirement: string, index: number) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 sm:space-x-3 p-2 sm:p-3 bg-blue-50 rounded-lg"
                >
                  <svg
                    className="w-4 sm:w-5 h-5 text-blue-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-sm sm:text-base lg:text-base text-gray-700">
                    {requirement}
                  </span>
                </div>
              )
            )}
          </div>
        </section>
      )}

      {hasContent(job.detailedDescription.note) && (
        <section className="bg-gradient-to-r from-royalblue-50 to-blue-50 rounded-xl border border-royalblue-200 p-4 sm:p-6 md:p-8">
          <div className="flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
            <div className="w-8 sm:w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center">
              <svg
                className="w-5 sm:w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h2 className="text-base sm:text-lg md:text-xl lg:text-xl font-semibold text-gray-900">
              Important Note
            </h2>
          </div>
          <p className="text-sm sm:text-base lg:text-base text-gray-700 leading-relaxed">
            {job.detailedDescription.note}
          </p>
        </section>
      )}
    </div>
  );
}

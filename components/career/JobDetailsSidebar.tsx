import { formatUtcDate } from "@/utils/formatUtcDate";
import { hasContent } from "@/utils/hasContent";
import { Job } from "@/types/job";

interface JobDetailsSidebarProps {
  job: Job;
}

export default function JobDetailsSidebar({ job }: JobDetailsSidebarProps) {
  const isDeadlinePassed = new Date(job.applicationDeadline) < new Date();

  const colors = [
    "bg-blue-100 text-blue-800",
    "bg-green-100 text-green-800",
    "bg-purple-100 text-purple-800",
    "bg-orange-100 text-orange-800",
    "bg-pink-100 text-pink-800",
    "bg-indigo-100 text-indigo-800",
  ];

  const getColorClass = (index: number) => {
    return colors[index % colors.length];
  };

  return (
    <div className="space-y-4 sm:space-y-6">
      {hasContent(job.applicationDeadline) && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6">
          <div className="text-center mb-4 sm:mb-6">
            <h3 className="text-base sm:text-lg md:text-lg font-semibold text-gray-900 mb-1 sm:mb-2">
              Ready to Apply?
            </h3>
            <p className="text-xs sm:text-sm md:text-sm text-gray-600">
              Join our team and make an impact
            </p>
          </div>

          <div className="mb-3 sm:mb-4 p-2 sm:p-3 bg-gray-50 rounded-lg">
            <div className="flex items-center justify-between text-xs sm:text-sm">
              <span className="text-gray-600">Application Deadline:</span>
              <span
                className={`font-medium ${
                  isDeadlinePassed ? "text-red-600" : "text-gray-900"
                }`}
              >
                {formatUtcDate(job.applicationDeadline)}
              </span>
            </div>
          </div>

          {!isDeadlinePassed ? (
            <button className="w-full bg-[var(--color-black)] hover:bg-[var(--color-gray)] cursor-pointer text-white font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-1 sm:space-x-2">
              <svg
                className="w-4 sm:w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
              <span className="text-sm sm:text-base">Apply Now</span>
            </button>
          ) : (
            <button
              disabled
              className="w-full bg-gray-300 text-gray-500 font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-lg cursor-not-allowed flex items-center justify-center space-x-1 sm:space-x-2"
            >
              <svg
                className="w-4 sm:w-5 h-5"
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
              <span className="text-sm sm:text-base">Application Closed</span>
            </button>
          )}
        </div>
      )}

      {(hasContent(job.level) ||
        hasContent(job.employmentType) ||
        hasContent(job.location) ||
        (job.requiredExperience && hasContent(job.requiredExperience)) ||
        hasContent(job.jobPostingDate)) && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6">
          <h3 className="text-base sm:text-lg md:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">
            Job Details
          </h3>
          <div className="space-y-3 sm:space-y-4">
            {hasContent(job.level) && (
              <div className="flex items-center justify-between text-xs sm:text-sm">
                <span className="text-gray-600">Experience Level:</span>
                <span className="font-medium text-gray-900">{job.level}</span>
              </div>
            )}
            {hasContent(job.employmentType) && (
              <div className="flex items-center justify-between text-xs sm:text-sm">
                <span className="text-gray-600">Employment Type:</span>
                <span className="font-medium text-gray-900">
                  {job.employmentType}
                </span>
              </div>
            )}
            {hasContent(job.location) && (
              <div className="flex items-center justify-between text-xs sm:text-sm">
                <span className="text-gray-600">Location:</span>
                <span className="font-medium text-gray-900">
                  {job.location}
                </span>
              </div>
            )}
            {job.requiredExperience && hasContent(job.requiredExperience) && (
              <div className="flex items-center justify-between text-xs sm:text-sm">
                <span className="text-gray-600">Experience:</span>
                <span className="font-medium text-gray-900">
                  {job.requiredExperience}
                </span>
              </div>
            )}
            {hasContent(job.jobPostingDate) && (
              <div className="flex items-center justify-between text-xs sm:text-sm">
                <span className="text-gray-600">Posted:</span>
                <span className="font-medium text-gray-900">
                  {formatUtcDate(job.jobPostingDate)}
                </span>
              </div>
            )}
          </div>
        </div>
      )}

      {hasContent(job.requiredSkills) && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6">
          <h3 className="text-base sm:text-lg md:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">
            Required Skills
          </h3>
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {job.requiredSkills.map((skill: string, index: number) => {
              return (
                <span
                  key={index}
                  className={`inline-flex items-center px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs sm:text-sm font-medium ${getColorClass(
                    index
                  )}`}
                >
                  {skill}
                </span>
              );
            })}
          </div>
        </div>
      )}

      <div className="bg-gradient-to-br from-royalblue-50 to-blue-50 rounded-xl border border-royalblue-200 p-4 sm:p-6">
        <div className="flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
          <div className="w-8 sm:w-10 h-10 bg-royalblue rounded-lg flex items-center justify-center">
            <svg
              className="w-5 sm:w-6 h-6 text-black"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
              />
            </svg>
          </div>
          <h3 className="text-base sm:text-lg md:text-lg font-semibold text-gray-900">
            About Code Huddle
          </h3>
        </div>
        <p className="text-xs sm:text-sm md:text-sm text-gray-700 leading-relaxed mb-3 sm:mb-4">
          We&apos;re a dynamic technology company focused on creating innovative
          solutions that drive business growth and user satisfaction.
        </p>
        <div className="space-y-2 sm:space-y-3">
          <div className="flex items-center space-x-1.5 sm:space-x-2 text-xs sm:text-sm">
            <svg
              className="w-3.5 sm:w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <span>Remote & Onsite Opportunities</span>
          </div>
          <div className="flex items-center space-x-1.5 sm:space-x-2 text-xs sm:text-sm">
            <svg
              className="w-3.5 sm:w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Flexible Work Hours</span>
          </div>
          <div className="flex items-center space-x-1.5 sm:space-x-2 text-xs sm:text-sm">
            <svg
              className="w-3.5 sm:w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
              />
            </svg>
            <span>Innovation-Driven Culture</span>
          </div>
        </div>
      </div>
    </div>
  );
}

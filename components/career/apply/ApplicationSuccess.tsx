"use client";

import { useState } from "react";
import { Job } from "@/types/job";
import { ApplicationData } from "@/types/job-application";
import { generateApplicationPDF } from "./PDFGenerator";

interface ApplicationSuccessProps {
  job: Job;
  applicationData: ApplicationData;
  onBackToForm: () => void;
}

export default function ApplicationSuccess({
  job,
  applicationData,
  onBackToForm,
}: ApplicationSuccessProps) {
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);

  const handleDownloadPDF = async () => {
    setIsGeneratingPDF(true);
    try {
      await generateApplicationPDF(applicationData, job);
    } catch (error) {
      console.error("Error generating PDF:", error);
      alert("Error generating PDF. Please try again.");
    } finally {
      setIsGeneratingPDF(false);
    }
  };

  return (
    <div className="w-full max-w-[95vw] sm:max-w-3xl md:max-w-4xl mx-auto px-2 sm:px-4">
      {/* Header */}
      <div className="mb-4 sm:mb-6">
        <button
          onClick={onBackToForm}
          className="hover:pl-[2px] transition-all duration-200 text-royalblue hover:text-royalblue-200 flex items-center space-x-1.5 sm:space-x-2 text-xs sm:text-sm md:text-base cursor-pointer"
        >
          <svg
            className="w-3.5 h-3.5 sm:w-4 md:w-5"
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
          <span>Back to Application Form</span>
        </button>
      </div>

      {/* Success Message */}
      <div className="bg-green-50 border border-green-200 rounded-lg p-4 sm:p-6 mb-6 sm:mb-8">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <svg
              className="h-6 w-6 sm:h-8 sm:w-8 text-green-400"
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
          <div className="ml-2 sm:ml-3">
            <h3 className="text-base sm:text-lg font-medium text-green-800">
              Application Submitted Successfully!
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-green-700">
              Your application for <strong>{job.title}</strong> has been
              submitted. We&apos;ll review your application and get back to you
              soon.
            </p>
          </div>
        </div>
      </div>

      {/* Email Confirmation */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 sm:p-6 mb-6 sm:mb-8">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <svg
              className="h-6 w-6 sm:h-8 sm:w-8 text-blue-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </div>
          <div className="ml-2 sm:ml-3">
            <h3 className="text-base sm:text-lg font-medium text-blue-800">
              Confirmation Email Sent!
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-blue-700">
              We&apos;ve sent a confirmation email to{" "}
              <strong>{applicationData.personalInfo.email}</strong> with your
              application details and next steps.
            </p>
          </div>
        </div>
      </div>

      {/* Download PDF Button */}
      <div className="flex justify-center mb-6 sm:mb-8">
        <button
          onClick={handleDownloadPDF}
          disabled={isGeneratingPDF}
          className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 text-white rounded-lg font-medium transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer bg-[var(--color-royalblue)] text-xs sm:text-sm"
        >
          {isGeneratingPDF ? (
            <>
              <svg
                className="animate-spin -ml-1 mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Generating PDF...
            </>
          ) : (
            <>
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 mr-1.5 sm:mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Download Application PDF
            </>
          )}
        </button>
      </div>

      {/* Application Details */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mb-4 sm:mb-6">
          Application Details
        </h2>

        {/* Personal Information */}
        <div className="mb-6 sm:mb-8">
          <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">
            Personal Information
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-500">
                Full Name
              </label>
              <p className="text-gray-900 text-xs sm:text-sm">
                {applicationData.personalInfo.firstName}{" "}
                {applicationData.personalInfo.lastName}
              </p>
            </div>
            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-500">
                Email
              </label>
              <p className="text-gray-900 text-xs sm:text-sm">
                {applicationData.personalInfo.email}
              </p>
            </div>
            {applicationData.personalInfo.headline && (
              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-500">
                  Headline
                </label>
                <p className="text-gray-900 text-xs sm:text-sm">
                  {applicationData.personalInfo.headline}
                </p>
              </div>
            )}
            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-500">
                Phone
              </label>
              <p className="text-gray-900 text-xs sm:text-sm">
                {applicationData.personalInfo.countryCode}{" "}
                {applicationData.personalInfo.phone}
              </p>
            </div>
            <div className="sm:col-span-2">
              <label className="block text-xs sm:text-sm font-medium text-gray-500">
                Address
              </label>
              <p className="text-gray-900 text-xs sm:text-sm">
                {applicationData.personalInfo.address}
              </p>
            </div>
          </div>
        </div>

        {/* Education */}
        {applicationData.education.some((edu) => edu.school.trim()) && (
          <div className="mb-6 sm:mb-8">
            <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">
              Education
            </h3>
            {applicationData.education.map(
              (edu) =>
                edu.school.trim() && (
                  <div
                    key={edu.id}
                    className="border-l-4 border-royalblue pl-3 sm:pl-4 mb-3 sm:mb-4"
                  >
                    <h4 className="font-semibold text-gray-900 text-sm sm:text-base">
                      {edu.school}
                    </h4>
                    {edu.degree && (
                      <p className="text-gray-700 text-xs sm:text-sm">
                        {edu.degree}
                      </p>
                    )}
                    {edu.fieldOfStudy && (
                      <p className="text-gray-700 text-xs sm:text-sm">
                        {edu.fieldOfStudy}
                      </p>
                    )}
                    <p className="text-xs sm:text-sm text-gray-500">
                      {edu.startDate} -{" "}
                      {edu.isCurrent ? "Present" : edu.endDate}
                    </p>
                  </div>
                )
            )}
          </div>
        )}

        {/* Experience */}
        {applicationData.experience.some((exp) => exp.title.trim()) && (
          <div className="mb-6 sm:mb-8">
            <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">
              Experience
            </h3>
            {applicationData.experience.map(
              (exp) =>
                exp.title.trim() && (
                  <div
                    key={exp.id}
                    className="border-l-4 border-royalblue pl-3 sm:pl-4 mb-3 sm:mb-4"
                  >
                    <h4 className="font-semibold text-gray-900 text-sm sm:text-base">
                      {exp.title}
                    </h4>
                    {exp.company && (
                      <p className="text-gray-700 text-xs sm:text-sm">
                        {exp.company}
                      </p>
                    )}
                    {exp.industry && (
                      <p className="text-gray-700 text-xs sm:text-sm">
                        {exp.industry}
                      </p>
                    )}
                    <p className="text-xs sm:text-sm text-gray-500">
                      {exp.startDate} -{" "}
                      {exp.isCurrent ? "Present" : exp.endDate}
                    </p>
                    {exp.summary && (
                      <p className="text-gray-700 text-xs sm:text-sm mt-1 sm:mt-2">
                        {exp.summary}
                      </p>
                    )}
                  </div>
                )
            )}
          </div>
        )}

        {/* Summary */}
        {applicationData.summary && (
          <div className="mb-6 sm:mb-8">
            <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">
              Professional Summary
            </h3>
            <p className="text-gray-700 text-xs sm:text-sm">
              {applicationData.summary}
            </p>
          </div>
        )}

        {/* Cover Letter */}
        {applicationData.coverLetter && (
          <div className="mb-6 sm:mb-8">
            <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">
              Cover Letter
            </h3>
            <p className="text-gray-700 text-xs sm:text-sm whitespace-pre-wrap">
              {applicationData.coverLetter}
            </p>
          </div>
        )}

        {/* Documents */}
        {applicationData.documents.length > 0 && (
          <div>
            <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">
              Uploaded Documents
            </h3>
            <ul className="space-y-1.5 sm:space-y-2">
              {applicationData.documents.map((doc, index) => (
                <li
                  key={index}
                  className="flex items-center text-gray-700 text-xs sm:text-sm"
                >
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 mr-1.5 sm:mr-2 text-gray-400"
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
                  {doc.name}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

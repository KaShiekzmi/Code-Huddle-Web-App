"use client";

import { notFound } from "next/navigation";
import JobDetailsContent from "@/components/career/JobDetailsContent";
import JobDetailsSidebar from "@/components/career/JobDetailsSidebar";
import LoadingSpinner from "@/components/ui/LoadingSpinner";
import { useParams } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useJob } from "@/hooks/useJobs";

export default function JobDetailsPage() {
  const { jobId } = useParams();
  const { data, isLoading, error } = useJob(jobId as string);
  const [isShareMenuOpen, setIsShareMenuOpen] = useState(false);
  const shareMenuRef = useRef<HTMLDivElement>(null);
  const [showCopied, setShowCopied] = useState(false);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        shareMenuRef.current &&
        !shareMenuRef.current.contains(event.target as Node)
      ) {
        setIsShareMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
  const currentUrl = typeof window !== "undefined" ? window.location.href : "";

  const handleCopyJob = async () => {
    const jobUrl = currentUrl;
    const jobTitle = job.title;
    const jobLevel = job.level;
    const jobLocation = job.location;
    const jobType = job.employmentType;

    const shareText = `🚀 Exciting Job Opportunity at Code Huddle!
  
${jobTitle}
 📍 Location: ${jobLocation}
 💼 Level: ${jobLevel}
 ⏰ Type: ${jobType}
  
Check out this amazing opportunity and apply now! 👇
${jobUrl}
  
#JobOpportunity #CodeHuddle #TechJobs`;

    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(shareText);
        setShowCopied(true);
        setTimeout(() => {
          setShowCopied(false);
          setIsShareMenuOpen(false);
        }, 2000);
        return;
      }

      const textArea = document.createElement("textarea");
      textArea.value = shareText;

      textArea.style.position = "fixed";
      textArea.style.left = "-999999px";
      textArea.style.top = "-999999px";
      textArea.style.opacity = "0";
      textArea.style.pointerEvents = "none";
      textArea.tabIndex = -1;

      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();

      textArea.setSelectionRange(0, shareText.length);

      const successful = document.execCommand("copy");
      document.body.removeChild(textArea);

      if (successful) {
        setShowCopied(true);
        setTimeout(() => {
          setShowCopied(false);
          setIsShareMenuOpen(false);
        }, 2000);
      } else {
        throw new Error("Copy command failed");
      }
    } catch (error) {
      console.log("Error copying job details:", error);
      setIsShareMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen mt-14 sm:mt-20 bg-gradient-to-br from-white to-gray-50">
      <div className="bg-white">
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 sm:mb-6">
            <div className="flex items-center align-middle justify-between w-full">
              <Link
                href="/career"
                className="hover:pl-[2px] transition-all duration-200 text-royalblue hover:text-royalblue-200 flex items-center space-x-2 text-sm sm:text-base"
              >
                <svg
                  className="w-4 h-4 sm:w-5 "
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
                <span>Back to Careers</span>
              </Link>

              <div className="relative sm:mt-0" ref={shareMenuRef}>
                <button
                  onClick={() => setIsShareMenuOpen(!isShareMenuOpen)}
                  className="cursor-pointer p-2 text-gray-600 hover:text-royalblue hover:bg-royalblue-50 rounded-lg transition-colors duration-200"
                  aria-label="Share job"
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
                      d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
                    />
                  </svg>
                </button>

                {isShareMenuOpen && (
                  <div className="absolute right-0 top-full mt-2 w-44 sm:w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                    <button
                      onClick={() => !showCopied && handleCopyJob()}
                      disabled={showCopied}
                      className={`w-full px-3 sm:px-4 py-2 text-left text-xs sm:text-sm flex items-center space-x-2 sm:space-x-3 ${
                        showCopied
                          ? "text-green-600 bg-green-50"
                          : "text-gray-700 hover:bg-gray-50 cursor-pointer"
                      }`}
                    >
                      <svg
                        className={`w-3.5 h-3.5 sm:w-4 ${
                          showCopied ? "text-green-600" : "text-gray-600"
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        {showCopied ? (
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        ) : (
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                          />
                        )}
                      </svg>
                      <span>{showCopied ? "Copied!" : "Copy Job"}</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="mb-4 sm:mb-6">
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
              <span className="inline-flex items-center px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs sm:text-sm font-medium bg-royalblue-200 text-royalblue">
                {job.level}
              </span>
              <span className="inline-flex items-center px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs sm:text-sm font-medium bg-green-100 text-green-800">
                {job.employmentType}
              </span>
              <span className="inline-flex items-center px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs sm:text-sm font-medium bg-purple-100 text-purple-800">
                {job.location}
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-1 sm:mb-2">
              {job.title}
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600">
              {job.description}
            </p>
          </div>
        </div>
      </div>

      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pb-8 sm:pb-12 pt-4 sm:pt-5">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
          <div className="lg:col-span-2">
            <JobDetailsContent job={job} />
          </div>

          <div className="lg:col-span-1">
            <JobDetailsSidebar job={job} />
          </div>
        </div>
      </div>
    </div>
  );
}

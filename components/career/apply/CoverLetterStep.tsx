"use client";

import { ApplicationData } from "@/types/job-application";

interface CoverLetterStepProps {
  formData: ApplicationData;
  setFormData: (data: ApplicationData) => void;
}

export default function CoverLetterStep({
  formData,
  setFormData,
}: CoverLetterStepProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6">
      <h2 className="text-lg sm:text-xl md:text-xl lg:text-xl font-semibold text-gray-900 mb-4 sm:mb-6">
        Cover Letter (Optional)
      </h2>
      <textarea
        value={formData.coverLetter}
        onChange={(e) =>
          setFormData({ ...formData, coverLetter: e.target.value })
        }
        rows={12}
        className="w-full px-2 sm:px-3 py-1.5 sm:py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-royalblue focus:border-transparent text-xs sm:text-sm"
        placeholder="Write a cover letter explaining why you're interested in this position and how your skills and experience make you a great fit..."
      />
    </div>
  );
}

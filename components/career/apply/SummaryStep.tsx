"use client";

import { ApplicationData } from "@/types/job-application";

interface SummaryStepProps {
  formData: ApplicationData;
  setFormData: (data: ApplicationData) => void;
}

export default function SummaryStep({
  formData,
  setFormData,
}: SummaryStepProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6">
      <h2 className="text-lg sm:text-xl md:text-xl lg:text-xl font-semibold text-gray-900 mb-4 sm:mb-6">
        Professional Summary (Optional)
      </h2>
      <textarea
        value={formData.summary}
        onChange={(e) => setFormData({ ...formData, summary: e.target.value })}
        rows={12}
        className="w-full px-2 sm:px-3 py-1.5 sm:py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-royalblue focus:border-transparent text-xs sm:text-sm"
        placeholder="Tell us about yourself, your career goals, and why you're interested in this position..."
      />
    </div>
  );
}

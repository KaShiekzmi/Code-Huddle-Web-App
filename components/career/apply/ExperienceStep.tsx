"use client";

import { ApplicationData, Experience } from "@/types/job-application";

interface ExperienceStepProps {
  formData: ApplicationData;
  setFormData: (data: ApplicationData) => void;
  errors: Record<string, string>;
  setErrors: (errors: Record<string, string>) => void;
}

export default function ExperienceStep({
  formData,
  setFormData,
  errors,
  setErrors,
}: ExperienceStepProps) {
  const addExperience = () => {
    const newId = (formData.experience.length + 1).toString();
    setFormData({
      ...formData,
      experience: [
        ...formData.experience,
        {
          id: newId,
          title: "",
          company: "",
          industry: "",
          summary: "",
          startDate: "",
          endDate: "",
          isCurrent: false,
        },
      ],
    });
  };

  const removeExperience = (id: string) => {
    if (formData.experience.length > 1) {
      setFormData({
        ...formData,
        experience: formData.experience.filter((exp) => exp.id !== id),
      });
    }
  };

  const updateExperience = (
    id: string,
    field: keyof Experience,
    value: string | boolean
  ) => {
    setFormData({
      ...formData,
      experience: formData.experience.map((exp) =>
        exp.id === id
          ? {
              ...exp,
              [field]: value,
              // Reset end date when isCurrent is set to true
              ...(field === "isCurrent" && value === true
                ? { endDate: "" }
                : {}),
            }
          : exp
      ),
    });
  };

  const validateDateRange = (startDate: string, endDate: string): boolean => {
    if (!startDate || !endDate) return true;
    return new Date(startDate) < new Date(endDate);
  };

  const validateDateNotFuture = (date: string): boolean => {
    if (!date) return true;
    return new Date(date) <= new Date();
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6">
      <div className="flex items-center justify-between mb-4 sm:mb-6">
        <h2 className="text-lg sm:text-xl md:text-xl lg:text-xl font-semibold text-gray-900">
          Experience (Optional)
        </h2>
        <button
          type="button"
          onClick={addExperience}
          className="px-3 sm:px-4 py-1.5 sm:py-2 text-white rounded-lg transition-colors duration-200 cursor-pointer bg-[var(--color-royalblue)] text-xs sm:text-sm"
        >
          Add Experience
        </button>
      </div>

      {formData.experience.map((exp, index) => (
        <div
          key={exp.id}
          className="border border-gray-200 rounded-lg p-3 sm:p-4 mb-3 sm:mb-4"
        >
          <div className="flex items-center justify-between mb-3 sm:mb-4">
            <h3 className="text-base sm:text-lg font-medium text-gray-900">
              Experience #{index + 1}
            </h3>
            {formData.experience.length > 1 && (
              <button
                type="button"
                onClick={() => removeExperience(exp.id)}
                className="cursor-pointer text-red-600 hover:text-red-800 text-xs sm:text-sm"
              >
                Remove
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                Job Title
              </label>
              <input
                type="text"
                value={exp.title}
                onChange={(e) =>
                  updateExperience(exp.id, "title", e.target.value)
                }
                className="w-full px-2 sm:px-3 py-1.5 sm:py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-royalblue focus:border-transparent text-xs sm:text-sm"
                placeholder="e.g., Senior Developer"
              />
            </div>

            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                Company (Optional)
              </label>
              <input
                type="text"
                value={exp.company}
                onChange={(e) =>
                  updateExperience(exp.id, "company", e.target.value)
                }
                className="w-full px-2 sm:px-3 py-1.5 sm:py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-royalblue focus:border-transparent text-xs sm:text-sm"
                placeholder="Enter company name"
              />
            </div>

            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                Industry (Optional)
              </label>
              <input
                type="text"
                value={exp.industry}
                onChange={(e) =>
                  updateExperience(exp.id, "industry", e.target.value)
                }
                className="w-full px-2 sm:px-3 py-1.5 sm:py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-royalblue focus:border-transparent text-xs sm:text-sm"
                placeholder="e.g., Technology"
              />
            </div>

            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                Start Date
              </label>
              <input
                type="date"
                value={exp.startDate}
                onChange={(e) => {
                  updateExperience(exp.id, "startDate", e.target.value);
                  // Clear error when user selects a date
                  if (errors[`experience-${index}-startDate`]) {
                    setErrors({
                      ...errors,
                      [`experience-${index}-startDate`]: "",
                    });
                  }
                }}
                max={new Date().toISOString().split("T")[0]}
                className={`w-full px-2 sm:px-3 py-1.5 sm:py-2 border rounded-lg focus:ring-2 focus:ring-royalblue focus:border-transparent text-xs sm:text-sm ${
                  errors[`experience-${index}-startDate`]
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
              />
              {errors[`experience-${index}-startDate`] && (
                <p className="mt-1 text-xs sm:text-sm text-red-600">
                  {errors[`experience-${index}-startDate`]}
                </p>
              )}
              {!validateDateNotFuture(exp.startDate) && (
                <p className="mt-1 text-xs sm:text-sm text-red-600">
                  Start date cannot be in the future
                </p>
              )}
            </div>

            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                End Date
              </label>
              <input
                type="date"
                value={exp.endDate}
                onChange={(e) => {
                  updateExperience(exp.id, "endDate", e.target.value);
                  // Clear error when user selects a date
                  if (errors[`experience-${index}-endDate`]) {
                    setErrors({
                      ...errors,
                      [`experience-${index}-endDate`]: "",
                    });
                  }
                }}
                disabled={exp.isCurrent}
                min={exp.startDate || undefined}
                max={new Date().toISOString().split("T")[0]}
                className={`w-full px-2 sm:px-3 py-1.5 sm:py-2 border rounded-lg focus:ring-2 focus:ring-royalblue focus:border-transparent text-xs sm:text-sm ${
                  errors[`experience-${index}-endDate`]
                    ? "border-red-500"
                    : "border-gray-300"
                } ${exp.isCurrent ? "bg-gray-100" : ""}`}
              />
              {errors[`experience-${index}-endDate`] && (
                <p className="mt-1 text-xs sm:text-sm text-red-600">
                  {errors[`experience-${index}-endDate`]}
                </p>
              )}
              {!validateDateNotFuture(exp.endDate) && (
                <p className="mt-1 text-xs sm:text-sm text-red-600">
                  End date cannot be in the future
                </p>
              )}
              {!validateDateRange(exp.startDate, exp.endDate) && (
                <p className="mt-1 text-xs sm:text-sm text-red-600">
                  End date must be after start date
                </p>
              )}
            </div>

            <div className="sm:col-span-2">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={exp.isCurrent}
                  onChange={(e) =>
                    updateExperience(exp.id, "isCurrent", e.target.checked)
                  }
                  className="mr-2 h-4 w-4 sm:h-5 sm:w-5"
                />
                <span className="text-xs sm:text-sm text-gray-700">
                  I currently work here
                </span>
              </label>
            </div>

            <div className="sm:col-span-2">
              <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                Summary (Optional)
              </label>
              <textarea
                value={exp.summary}
                onChange={(e) =>
                  updateExperience(exp.id, "summary", e.target.value)
                }
                rows={3}
                className="w-full px-2 sm:px-3 py-1.5 sm:py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-royalblue focus:border-transparent text-xs sm:text-sm"
                placeholder="Brief description of your role and achievements"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

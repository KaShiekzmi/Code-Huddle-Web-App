"use client";

import { ApplicationData, Education } from "@/types/job-application";

interface EducationStepProps {
  formData: ApplicationData;
  setFormData: (data: ApplicationData) => void;
  errors: Record<string, string>;
  setErrors: (errors: Record<string, string>) => void;
}

export default function EducationStep({
  formData,
  setFormData,
  errors,
  setErrors,
}: EducationStepProps) {
  const addEducation = () => {
    const newId = (formData.education.length + 1).toString();
    setFormData({
      ...formData,
      education: [
        ...formData.education,
        {
          id: newId,
          school: "",
          fieldOfStudy: "",
          degree: "",
          startDate: "",
          endDate: "",
          isCurrent: false,
        },
      ],
    });
  };

  const removeEducation = (id: string) => {
    if (formData.education.length > 1) {
      setFormData({
        ...formData,
        education: formData.education.filter((edu) => edu.id !== id),
      });
    }
  };

  const updateEducation = (
    id: string,
    field: keyof Education,
    value: string | boolean
  ) => {
    setFormData({
      ...formData,
      education: formData.education.map((edu) =>
        edu.id === id
          ? {
              ...edu,
              [field]: value,
              // Reset end date when isCurrent is set to true
              ...(field === "isCurrent" && value === true
                ? { endDate: "" }
                : {}),
            }
          : edu
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
          Education (Optional)
        </h2>
        <button
          type="button"
          onClick={addEducation}
          className="px-3 sm:px-4 py-1.5 sm:py-2 text-white rounded-lg transition-colors duration-200 cursor-pointer bg-[var(--color-royalblue)] text-xs sm:text-sm"
        >
          Add Education
        </button>
      </div>

      {formData.education.map((edu, index) => (
        <div
          key={edu.id}
          className="border border-gray-200 rounded-lg p-3 sm:p-4 mb-3 sm:mb-4"
        >
          <div className="flex items-center justify-between mb-3 sm:mb-4">
            <h3 className="text-base sm:text-lg font-medium text-gray-900">
              Education #{index + 1}
            </h3>
            {formData.education.length > 1 && (
              <button
                type="button"
                onClick={() => removeEducation(edu.id)}
                className="cursor-pointer text-red-600 hover:text-red-800 text-xs sm:text-sm"
              >
                Remove
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                School/University
              </label>
              <input
                type="text"
                value={edu.school}
                onChange={(e) =>
                  updateEducation(edu.id, "school", e.target.value)
                }
                className="w-full px-2 sm:px-3 py-1.5 sm:py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-royalblue focus:border-transparent text-xs sm:text-sm"
                placeholder="Enter school name"
              />
            </div>

            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                Field of Study (Optional)
              </label>
              <input
                type="text"
                value={edu.fieldOfStudy}
                onChange={(e) =>
                  updateEducation(edu.id, "fieldOfStudy", e.target.value)
                }
                className="w-full px-2 sm:px-3 py-1.5 sm:py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-royalblue focus:border-transparent text-xs sm:text-sm"
                placeholder="e.g., Computer Science"
              />
            </div>

            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                Degree (Optional)
              </label>
              <input
                type="text"
                value={edu.degree}
                onChange={(e) =>
                  updateEducation(edu.id, "degree", e.target.value)
                }
                className="w-full px-2 sm:px-3 py-1.5 sm:py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-royalblue focus:border-transparent text-xs sm:text-sm"
                placeholder="e.g., Bachelor's"
              />
            </div>

            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                Start Date
              </label>
              <input
                type="date"
                value={edu.startDate}
                onChange={(e) => {
                  updateEducation(edu.id, "startDate", e.target.value);
                  // Clear error when user selects a date
                  if (errors[`education-${index}-startDate`]) {
                    setErrors({
                      ...errors,
                      [`education-${index}-startDate`]: "",
                    });
                  }
                }}
                max={new Date().toISOString().split("T")[0]}
                className={`w-full px-2 sm:px-3 py-1.5 sm:py-2 border rounded-lg focus:ring-2 focus:ring-royalblue focus:border-transparent text-xs sm:text-sm ${
                  errors[`education-${index}-startDate`]
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
              />
              {errors[`education-${index}-startDate`] && (
                <p className="mt-1 text-xs sm:text-sm text-red-600">
                  {errors[`education-${index}-startDate`]}
                </p>
              )}
              {!validateDateNotFuture(edu.startDate) && (
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
                value={edu.endDate}
                onChange={(e) => {
                  updateEducation(edu.id, "endDate", e.target.value);
                  // Clear error when user selects a date
                  if (errors[`education-${index}-endDate`]) {
                    setErrors({
                      ...errors,
                      [`education-${index}-endDate`]: "",
                    });
                  }
                }}
                disabled={edu.isCurrent}
                min={edu.startDate || undefined}
                max={new Date().toISOString().split("T")[0]}
                className={`w-full px-2 sm:px-3 py-1.5 sm:py-2 border rounded-lg focus:ring-2 focus:ring-royalblue focus:border-transparent text-xs sm:text-sm ${
                  errors[`education-${index}-endDate`]
                    ? "border-red-500"
                    : "border-gray-300"
                } ${edu.isCurrent ? "bg-gray-100" : ""}`}
              />
              {errors[`education-${index}-endDate`] && (
                <p className="mt-1 text-xs sm:text-sm text-red-600">
                  {errors[`education-${index}-endDate`]}
                </p>
              )}
              {!validateDateNotFuture(edu.endDate) && (
                <p className="mt-1 text-xs sm:text-sm text-red-600">
                  End date cannot be in the future
                </p>
              )}
              {!validateDateRange(edu.startDate, edu.endDate) && (
                <p className="mt-1 text-xs sm:text-sm text-red-600">
                  End date must be after start date
                </p>
              )}
            </div>

            <div className="sm:col-span-2">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={edu.isCurrent}
                  onChange={(e) =>
                    updateEducation(edu.id, "isCurrent", e.target.checked)
                  }
                  className="mr-2 h-4 w-4 sm:h-5 sm:w-5"
                />
                <span className="text-xs sm:text-sm text-gray-700">
                  Currently studying here
                </span>
              </label>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

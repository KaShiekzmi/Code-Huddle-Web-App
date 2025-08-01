"use client";

import { useState, useMemo } from "react";
import Select from "react-select";
import countryList from "react-select-country-list";
import { ApplicationData, PersonalInfo } from "@/types/job-application";

interface PersonalInfoStepProps {
  formData: ApplicationData;
  setFormData: (data: ApplicationData) => void;
  errors: Record<string, string>;
  setErrors: (errors: Record<string, string>) => void;
}

export default function PersonalInfoStep({
  formData,
  setFormData,
  errors,
  setErrors,
}: PersonalInfoStepProps) {
  const options = useMemo(() => countryList().getData(), []);
  const [selectedCountry, setSelectedCountry] = useState(() => {
    return formData.personalInfo.countryCode
      ? options.find(
          (option) => option.value === formData.personalInfo.countryCode
        ) || null
      : null;
  });

  const handlePersonalInfoChange = (
    field: keyof PersonalInfo,
    value: string
  ) => {
    setFormData({
      ...formData,
      personalInfo: {
        ...formData.personalInfo,
        [field]: value,
      },
    });
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors({ ...errors, [field]: "" });
    }
  };

  const handleCountryChange = (
    selectedOption: { value: string; label: string } | null
  ) => {
    setSelectedCountry(selectedOption);
    if (selectedOption) {
      handlePersonalInfoChange("countryCode", selectedOption.value);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6">
      <h2 className="text-lg sm:text-xl md:text-xl lg:text-xl font-semibold text-gray-900 mb-4 sm:mb-6">
        Personal Information
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        <div>
          <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
            First Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={formData.personalInfo.firstName}
            onChange={(e) =>
              handlePersonalInfoChange("firstName", e.target.value)
            }
            className={`w-full px-2 sm:px-3 py-1.5 sm:py-2 border rounded-lg focus:ring-2 focus:ring-royalblue focus:border-transparent text-xs sm:text-sm ${
              errors.firstName ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Enter your first name"
          />
          {errors.firstName && (
            <p className="mt-1 text-xs sm:text-sm text-red-600">
              {errors.firstName}
            </p>
          )}
        </div>

        <div>
          <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
            Last Name (Optional)
          </label>
          <input
            type="text"
            value={formData.personalInfo.lastName}
            onChange={(e) =>
              handlePersonalInfoChange("lastName", e.target.value)
            }
            className={`w-full px-2 sm:px-3 py-1.5 sm:py-2 border rounded-lg focus:ring-2 focus:ring-royalblue focus:border-transparent text-xs sm:text-sm ${
              errors.lastName ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Enter your last name"
          />
          {errors.lastName && (
            <p className="mt-1 text-xs sm:text-sm text-red-600">
              {errors.lastName}
            </p>
          )}
        </div>

        <div>
          <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            value={formData.personalInfo.email}
            onChange={(e) => handlePersonalInfoChange("email", e.target.value)}
            className={`w-full px-2 sm:px-3 py-1.5 sm:py-2 border rounded-lg focus:ring-2 focus:ring-royalblue focus:border-transparent text-xs sm:text-sm ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Enter your email address"
          />
          {errors.email && (
            <p className="mt-1 text-xs sm:text-sm text-red-600">
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
            Headline (Optional)
          </label>
          <input
            type="text"
            value={formData.personalInfo.headline}
            onChange={(e) =>
              handlePersonalInfoChange("headline", e.target.value)
            }
            className="w-full px-2 sm:px-3 py-1.5 sm:py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-royalblue focus:border-transparent text-xs sm:text-sm"
            placeholder="e.g., Senior Frontend Developer"
          />
        </div>

        <div>
          <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
            Country Code <span className="text-red-500">*</span>
          </label>
          <Select
            options={options}
            value={selectedCountry}
            onChange={handleCountryChange}
            placeholder="Select country"
            className="text-xs sm:text-sm"
            classNamePrefix="select"
            styles={{
              control: (provided, state) => ({
                ...provided,
                borderColor: errors.countryCode ? "#ef4444" : "#d1d5db",
                borderRadius: "0.5rem",
                minHeight: "38px sm:42px",
                "&:hover": {
                  borderColor: errors.countryCode ? "#ef4444" : "#3b82f6",
                },
                boxShadow: state.isFocused
                  ? "0 0 0 2px rgba(59, 130, 246, 0.5)"
                  : "none",
              }),
              option: (provided, state) => ({
                ...provided,
                backgroundColor: state.isSelected
                  ? "#3b82f6"
                  : state.isFocused
                    ? "#f3f4f6"
                    : "white",
                color: state.isSelected ? "white" : "#374151",
                "&:hover": {
                  backgroundColor: state.isSelected ? "#3b82f6" : "#f3f4f6",
                },
              }),
            }}
          />
          {errors.countryCode && (
            <p className="mt-1 text-xs sm:text-sm text-red-600">
              {errors.countryCode}
            </p>
          )}
        </div>

        <div>
          <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            value={formData.personalInfo.phone}
            onChange={(e) => handlePersonalInfoChange("phone", e.target.value)}
            className={`w-full px-2 sm:px-3 py-1.5 sm:py-2 border rounded-lg focus:ring-2 focus:ring-royalblue focus:border-transparent text-xs sm:text-sm ${
              errors.phone ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Enter your phone number"
          />
          {errors.phone && (
            <p className="mt-1 text-xs sm:text-sm text-red-600">
              {errors.phone}
            </p>
          )}
        </div>

        <div className="sm:col-span-2">
          <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
            Address <span className="text-red-500">*</span>
          </label>
          <textarea
            value={formData.personalInfo.address}
            onChange={(e) =>
              handlePersonalInfoChange("address", e.target.value)
            }
            rows={3}
            className={`w-full px-2 sm:px-3 py-1.5 sm:py-2 border rounded-lg focus:ring-2 focus:ring-royalblue focus:border-transparent text-xs sm:text-sm ${
              errors.address ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Enter your full address"
          />
          {errors.address && (
            <p className="mt-1 text-xs sm:text-sm text-red-600">
              {errors.address}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

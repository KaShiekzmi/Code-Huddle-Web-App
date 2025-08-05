"use client";

import { ApplicationData } from "@/types/job-application";
import { validateFileType } from "@/utils/yupValidation";

interface DocumentsStepProps {
  formData: ApplicationData;
  setFormData: (data: ApplicationData) => void;
  errors: Record<string, string>;
  setErrors: (errors: Record<string, string>) => void;
}

export default function DocumentsStep({
  formData,
  setFormData,
  errors,
  setErrors,
}: DocumentsStepProps) {
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    const validFiles = files.filter((file) => validateFileType(file));

    if (validFiles.length !== files.length) {
      setErrors({
        ...errors,
        documents: "Only PDF and Word documents are allowed",
      });
      return;
    }

    setFormData({
      ...formData,
      documents: [...formData.documents, ...validFiles],
    });
    setErrors({ ...errors, documents: "" });
  };

  const removeDocument = (index: number) => {
    setFormData({
      ...formData,
      documents: formData.documents.filter((_, i) => i !== index),
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6">
      <h2 className="text-lg sm:text-xl md:text-xl lg:text-xl font-semibold text-gray-900 mb-4 sm:mb-6">
        Upload Documents
      </h2>
      <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">
        Please upload your resume/CV and any other relevant documents. Only PDF
        and Word documents are accepted.
      </p>

      <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 sm:p-6 text-center">
        <input
          type="file"
          multiple
          accept=".pdf,.doc,.docx"
          onChange={handleFileUpload}
          className="hidden"
          id="file-upload"
        />
        <label
          htmlFor="file-upload"
          className="cursor-pointer inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 text-white rounded-lg transition-colors duration-200 bg-[var(--color-royalblue)] text-xs sm:text-sm"
        >
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
              d="M12 4v16m8-8H4"
            />
          </svg>
          Choose Files
        </label>
        <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-gray-500">
          PDF, DOC, or DOCX files only
        </p>
      </div>

      {errors.documents && (
        <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-red-600">
          {errors.documents}
        </p>
      )}

      {formData.documents.length > 0 && (
        <div className="mt-4 sm:mt-6">
          <h3 className="text-base sm:text-lg font-medium text-gray-900 mb-3 sm:mb-4">
            Uploaded Files:
          </h3>
          <div className="space-y-1.5 sm:space-y-2">
            {formData.documents.map((file, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-2 sm:p-3 bg-gray-50 rounded-lg"
              >
                <div className="flex items-center">
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 mr-1.5 sm:mr-2"
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
                  <span className="text-xs sm:text-sm text-gray-700">
                    {file.name}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => removeDocument(index)}
                  className="cursor-pointer text-red-600 hover:text-red-800 text-xs sm:text-sm"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

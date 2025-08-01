"use client";

import { useState } from "react";
import {
  ApplicationData,
  JobApplicationFormProps,
} from "@/types/job-application";
import {
  validatePersonalInfo,
  validateEducation,
  validateExperience,
  validateDocuments,
} from "@/utils/yupValidation";
import StepIndicator from "./StepIndicator";
import PersonalInfoStep from "./PersonalInfoStep";
import EducationStep from "./EducationStep";
import ExperienceStep from "./ExperienceStep";
import SummaryStep from "./SummaryStep";
import DocumentsStep from "./DocumentsStep";
import CoverLetterStep from "./CoverLetterStep";
import ApplicationSuccess from "./ApplicationSuccess";
import ModalBlank from "@/components/ui/ModalBlank";

export default function JobApplicationForm({ job }: JobApplicationFormProps) {
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [formData, setFormData] = useState<ApplicationData>({
    personalInfo: {
      firstName: "",
      lastName: "",
      email: "",
      headline: "",
      phone: "",
      countryCode: "",
      address: "",
    },
    education: [
      {
        id: "1",
        school: "",
        fieldOfStudy: "",
        degree: "",
        startDate: "",
        endDate: "",
        isCurrent: false,
      },
    ],
    experience: [
      {
        id: "1",
        title: "",
        company: "",
        industry: "",
        summary: "",
        startDate: "",
        endDate: "",
        isCurrent: false,
      },
    ],
    summary: "",
    documents: [],
    coverLetter: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const totalSteps = 6;

  const validateStep = async (step: number) => {
    const newErrors: Record<string, string> = {};

    try {
      switch (step) {
        case 1: // Personal Information
          await validatePersonalInfo(formData.personalInfo);
          break;

        case 2: // Education
          await validateEducation(formData.education);
          break;

        case 3: // Experience
          await validateExperience(formData.experience);
          break;

        case 4: // Summary (optional)
          break;

        case 5: // Documents
          await validateDocuments(formData.documents);
          break;

        case 6: // Cover Letter (optional)
          break;
      }
    } catch (error) {
      if (error instanceof Error && "inner" in error) {
        // Yup validation error
        const yupError = error as {
          inner: Array<{ path: string; message: string }>;
        };
        yupError.inner.forEach((err) => {
          newErrors[err.path] = err.message;
        });
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = async () => {
    const isValid = await validateStep(currentStep);
    if (isValid) {
      setCurrentStep(Math.min(currentStep + 1, totalSteps));
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  const handlePrevious = () => {
    setCurrentStep(Math.max(currentStep - 1, 1));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Show confirmation modal instead of submitting directly
    setShowConfirmModal(true);
  };

  const handleConfirmSubmit = async () => {
    const isValid = await validateStep(currentStep);
    if (!isValid) {
      setShowConfirmModal(false);
      return;
    }

    setIsSubmitting(true);
    setShowConfirmModal(false);

    try {
      // Log the application data
      console.log("Job Application Data:", {
        jobId: job.id,
        jobTitle: job.title,
        ...formData,
      });

      // Send confirmation email
      const emailResponse = await fetch("/api/send-application-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          applicationData: formData,
          job: job,
        }),
      });

      if (!emailResponse.ok) {
        throw new Error("Failed to send confirmation email");
      }

      // Simulate additional processing time
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Show success component
      setIsSubmitted(true);
    } catch (error) {
      console.error("Error submitting application:", error);
      alert(
        "There was an error submitting your application. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <PersonalInfoStep
            formData={formData}
            setFormData={setFormData}
            errors={errors}
            setErrors={setErrors}
          />
        );
      case 2:
        return (
          <EducationStep
            formData={formData}
            setFormData={setFormData}
            errors={errors}
            setErrors={setErrors}
          />
        );
      case 3:
        return (
          <ExperienceStep
            formData={formData}
            setFormData={setFormData}
            errors={errors}
            setErrors={setErrors}
          />
        );
      case 4:
        return <SummaryStep formData={formData} setFormData={setFormData} />;
      case 5:
        return (
          <DocumentsStep
            formData={formData}
            setFormData={setFormData}
            errors={errors}
            setErrors={setErrors}
          />
        );
      case 6:
        return (
          <CoverLetterStep formData={formData} setFormData={setFormData} />
        );
      default:
        return null;
    }
  };

  const handleBackToForm = () => {
    setIsSubmitted(false);
    setCurrentStep(1);
    setFormData({
      personalInfo: {
        firstName: "",
        lastName: "",
        email: "",
        headline: "",
        phone: "",
        countryCode: "",
        address: "",
      },
      education: [
        {
          id: "1",
          school: "",
          fieldOfStudy: "",
          degree: "",
          startDate: "",
          endDate: "",
          isCurrent: false,
        },
      ],
      experience: [
        {
          id: "1",
          title: "",
          company: "",
          industry: "",
          summary: "",
          startDate: "",
          endDate: "",
          isCurrent: false,
        },
      ],
      summary: "",
      documents: [],
      coverLetter: "",
    });
    setErrors({});
  };

  if (isSubmitted) {
    return (
      <ApplicationSuccess
        job={job}
        applicationData={formData}
        onBackToForm={handleBackToForm}
      />
    );
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-3xl sm:max-w-4xl mx-auto px-4 sm:px-0"
      >
        <StepIndicator currentStep={currentStep} totalSteps={totalSteps} />

        {renderStepContent()}

        <div className="flex flex-col sm:flex-row justify-between mt-6 sm:mt-8 gap-3 sm:gap-4">
          <button
            type="button"
            onClick={handlePrevious}
            disabled={currentStep === 1}
            className={`cursor-pointer px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition-colors duration-200 text-sm sm:text-base ${
              currentStep === 1
                ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                : "bg-gray-600 text-white hover:bg-gray-700"
            }`}
          >
            Previous
          </button>

          {currentStep < totalSteps ? (
            <button
              type="button"
              onClick={handleNext}
              className="cursor-pointer px-4 sm:px-6 py-2 sm:py-3 text-white rounded-lg font-medium transition-colors duration-200 bg-[var(--color-royalblue)] text-sm sm:text-base"
            >
              Next
            </button>
          ) : (
            <button
              type="button"
              onClick={handleSubmit}
              disabled={isSubmitting}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition-colors duration-200 text-sm sm:text-base ${
                isSubmitting
                  ? "bg-green-400 text-white cursor-not-allowed"
                  : "bg-green-600 text-white hover:bg-green-700 cursor-pointer"
              }`}
            >
              {isSubmitting ? "Submitting..." : "Submit Application"}
            </button>
          )}
        </div>
      </form>

      {/* Confirmation Modal */}
      <ModalBlank
        isOpen={showConfirmModal}
        onClose={() => setShowConfirmModal(false)}
        title="Confirm Submission"
        confirmText="Submit Application"
        cancelText="Cancel"
        onConfirm={handleConfirmSubmit}
        confirmButtonStyle="success"
        isLoading={isSubmitting}
      >
        <p className="text-gray-600 text-sm sm:text-base md:text-base">
          Are you sure you want to submit your job application? You won&apos;t
          be able to make changes after submission.
        </p>
      </ModalBlank>
    </>
  );
}

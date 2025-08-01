interface StepIndicatorProps {
  currentStep: number;
  totalSteps: number;
}

export default function StepIndicator({
  currentStep,
  totalSteps,
}: StepIndicatorProps) {
  return (
    <div className="mb-4 sm:mb-6 md:mb-8">
      <div className="flex items-center justify-between">
        {Array.from({ length: totalSteps }, (_, index) => (
          <div key={index} className="flex items-center">
            <div
              className={`w-5 sm:w-6 md:w-7 lg:w-8 h-5 sm:h-6 md:h-7 lg:h-8 rounded-full flex items-center justify-center text-xs sm:text-sm font-medium ${
                index + 1 < currentStep
                  ? "bg-green-500 text-white"
                  : index + 1 === currentStep
                    ? "text-white"
                    : "bg-gray-200 text-gray-600"
              }
                ${index + 1 === currentStep ? "bg-[var(--color-royalblue)]" : ""}`}
            >
              {index + 1 < currentStep ? "✓" : index + 1}
            </div>
            {index < totalSteps - 1 && (
              <div
                className={`w-6 sm:w-8 md:w-10 lg:w-12 h-0.5 sm:h-1 mx-0.5 sm:mx-1 md:mx-1.5 lg:mx-2 ${
                  index + 1 < currentStep ? "bg-green-500" : "bg-gray-200"
                }`}
              />
            )}
          </div>
        ))}
      </div>
      <div className="hidden sm:flex justify-between mt-1 sm:mt-1.5 md:mt-2 text-[0.6rem] sm:text-[0.65rem] md:text-xs text-gray-600">
        <div className="flex flex-col items-center w-5 sm:w-6 md:w-7 lg:w-8">
          <span>Personal</span>
          <span>Info</span>
        </div>
        <div className="flex flex-col items-center w-5 sm:w-6 md:w-7 lg:w-8">
          <span>Education</span>
        </div>
        <div className="flex flex-col items-center w-5 sm:w-6 md:w-7 lg:w-8">
          <span>Experience</span>
        </div>
        <div className="flex flex-col items-center w-5 sm:w-6 md:w-7 lg:w-8">
          <span>Summary</span>
        </div>
        <div className="flex flex-col items-center w-5 sm:w-6 md:w-7 lg:w-8">
          <span>Documents</span>
        </div>
        <div className="flex flex-col items-center w-5 sm:w-6 md:w-7 lg:w-8">
          <span>Cover</span>
          <span>Letter</span>
        </div>
      </div>
    </div>
  );
}

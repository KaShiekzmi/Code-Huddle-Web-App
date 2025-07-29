import React from "react";

interface LoadingSpinnerProps {
  description?: string;
  className?: string;
}

const LoadingSpinner = ({
  description,
  className = "",
}: LoadingSpinnerProps) => {
  return (
    <div
      className={`flex flex-col items-center justify-center w-full h-full py-8 ${className}`}
    >
      <div className="flex items-center justify-center">
        <span
          className="inline-block w-12 h-12 border-4 border-solid border-[rgba(41,112,255,0.2)] border-t-[#2970ff] rounded-full animate-spin"
          aria-label="Loading"
        />
      </div>
      {description && (
        <p className="mt-4 text-gray-600 text-base text-center">
          {description}
        </p>
      )}
    </div>
  );
};

export default LoadingSpinner;

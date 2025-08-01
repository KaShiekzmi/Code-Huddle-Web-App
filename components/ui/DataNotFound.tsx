import React from "react";

interface DataNotFoundProps {
  title: string;
  description: string;
}

const DataNotFound = ({ title, description }: DataNotFoundProps) => {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-6 py-12">
      <svg
        width="120"
        height="120"
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-[var(--color-gainsboro)]"
      >
        <circle
          cx="60"
          cy="60"
          r="50"
          stroke="currentColor"
          strokeWidth="4"
          fill="none"
        />
        <path
          d="M45 55C45 52.2386 47.2386 50 50 50C52.7614 50 55 52.2386 55 55C55 57.7614 52.7614 60 50 60C47.2386 60 45 57.7614 45 55Z"
          fill="currentColor"
        />
        <path
          d="M65 55C65 52.2386 67.2386 50 70 50C72.7614 50 75 52.2386 75 55C75 57.7614 72.7614 60 70 60C67.2386 60 65 57.7614 65 55Z"
          fill="currentColor"
        />
        <path
          d="M40 75C40 70.0294 48.9543 65 60 65C71.0457 65 80 70.0294 80 75"
          stroke="currentColor"
          strokeWidth="4"
          fill="none"
        />
      </svg>
      <h3 className="text-xl sm:text-2xl font-semibold text-[var(--color-black)]">
        {title}
      </h3>
      <p className="text-sm sm:text-base text-[var(--color-gray)] text-center max-w-md">
        {description}
      </p>
    </div>
  );
};

export default DataNotFound;

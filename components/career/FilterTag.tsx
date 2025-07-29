"use client";

interface FilterTagProps {
  type: "search" | "location" | "employmentType" | "experienceLevel";
  value: string;
  onRemove: () => void;
}

const FilterTag = ({ type, value, onRemove }: FilterTagProps) => {
  const displayValue = type === "search" ? `Search: "${value}"` : value;

  const tagStyle = {
    search: "bg-blue-100 text-blue-800 hover:bg-blue-200",
    location: "bg-green-100 text-green-800 hover:bg-green-200",
    employmentType: "bg-purple-100 text-purple-800 hover:bg-purple-200",
    experienceLevel: "bg-orange-100 text-orange-800 hover:bg-orange-200",
  }[type];

  const hoverBgColor = {
    search: "hover:bg-blue-200",
    location: "hover:bg-green-200",
    employmentType: "hover:bg-purple-200",
    experienceLevel: "hover:bg-orange-200",
  }[type];

  return (
    <div
      className={`flex items-center px-3 py-1 rounded-full text-sm ${tagStyle}`}
    >
      <span>{displayValue}</span>
      <button
        onClick={onRemove}
        className={`ml-2 rounded-full p-0.5 transition-colors cursor-pointer bg-transparent ${hoverBgColor}`}
      >
        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
};

export default FilterTag;

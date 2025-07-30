"use client";

interface DropdownFilterProps {
  label: string;
  value: string[];
  onChange: (value: string[]) => void;
  options: string[];
  isOpen: boolean;
  onToggle: () => void;
}

const DropdownFilter = ({
  label,
  value,
  onChange,
  options,
  isOpen,
  onToggle,
}: DropdownFilterProps) => {
  const toggleOption = (option: string) => {
    if (value.includes(option)) {
      onChange(value.filter((item) => item !== option));
    } else {
      onChange([...value, option]);
    }
  };

  const displayText = value.length > 0 ? value.join(", ") : label;

  return (
    <div className="relative w-full sm:w-[200px] md:w-[220px] lg:w-[250px]">
      <div
        className="w-full rounded-lg bg-white border border-gray-200 flex items-center justify-between py-2 sm:py-2.5 px-3 sm:px-4 cursor-pointer hover:bg-gray-50 transition-colors duration-200"
        onClick={onToggle}
      >
        <span className="text-xs sm:text-sm text-gray-600 truncate">
          {displayText}
        </span>
        <svg
          className={`w-3 h-3 sm:w-4 sm:h-4 transform transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
      {isOpen && (
        <div className="absolute top-full left-0 z-10 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-48 sm:max-h-60 overflow-y-auto">
          {options.map((option) => (
            <label
              key={option}
              className="flex items-center px-3 sm:px-4 py-1.5 sm:py-2 hover:bg-gray-50 cursor-pointer transition-colors duration-200"
            >
              <input
                type="checkbox"
                checked={value.includes(option)}
                onChange={() => toggleOption(option)}
                className="cursor-pointer w-3 h-3 sm:w-4 sm:h-4 rounded border-gray-300"
              />
              <span className="ml-2 text-xs sm:text-sm text-gray-700">
                {option}
              </span>
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownFilter;

"use client";

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const SearchInput = ({ value, onChange, placeholder }: SearchInputProps) => {
  return (
    <div className="w-full sm:w-[600px]">
      <label className="w-full rounded-lg bg-white border border-gray-200 flex items-center justify-between py-2.5 px-4 gap-2.5 hover:bg-gray-50 transition-colors duration-200">
        <input
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="flex-1 text-sm text-gray-600 bg-transparent outline-none"
        />
        <svg
          width="20"
          height="20"
          viewBox="0 0 22 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.58333 10.5037C4.58333 7.47049 7.05008 5.00374 10.0833 5.00374C13.1166 5.00374 15.5833 7.47049 15.5833 10.5037C15.5833 13.537 13.1166 16.0037 10.0833 16.0037C7.05008 16.0037 4.58333 13.537 4.58333 10.5037ZM18.9814 18.1057L15.8693 14.9927C16.8346 13.7515 17.4167 12.1959 17.4167 10.5037C17.4167 6.46033 14.1267 3.17041 10.0833 3.17041C6.03992 3.17041 2.75 6.46033 2.75 10.5037C2.75 14.5472 6.03992 17.8371 10.0833 17.8371C11.7755 17.8371 13.3311 17.255 14.5723 16.2897L17.6852 19.4018C17.864 19.5806 18.0987 19.6704 18.3333 19.6704C18.568 19.6704 18.8027 19.5806 18.9814 19.4018C19.3398 19.0434 19.3398 18.4641 18.9814 18.1057Z"
            fill="#6B7280"
          />
        </svg>
      </label>
    </div>
  );
};

export default SearchInput;

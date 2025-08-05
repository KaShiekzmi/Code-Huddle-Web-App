"use client";

import { useState, useRef, useEffect } from "react";
import { FilterValues } from "@/types/job";
import SearchInput from "@/components/ui/SearchInput";
import DropdownFilter from "@/components/ui/DropdownFilter";
import ActiveFilters from "./ActiveFilters";

interface SearchFiltersProps {
  onFilterChange: (filters: FilterValues) => void;
  totalJobs: number;
  initialFilters?: FilterValues;
}

const SearchFilters = ({
  onFilterChange,
  totalJobs,
  initialFilters,
}: SearchFiltersProps) => {
  const [filters, setFilters] = useState<FilterValues>(
    initialFilters || {
      search: "",
      location: [],
      employmentType: [],
      experienceLevel: [],
    }
  );

  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const filtersRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (initialFilters) {
      setFilters(initialFilters);
    }
  }, [initialFilters]);

  useEffect(() => {
    if (!openDropdown) return;
    function handleClickOutside(event: MouseEvent) {
      if (
        filtersRef.current &&
        !filtersRef.current.contains(event.target as Node)
      ) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openDropdown]);

  const updateFilter = (key: keyof FilterValues, value: string | string[]) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const toggleDropdown = (dropdownName: string) => {
    setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
  };

  const removeFilter = (key: keyof FilterValues, value: string) => {
    if (key === "search") {
      updateFilter(key, "");
    } else {
      const currentValues = filters[key] as string[];
      updateFilter(
        key,
        currentValues.filter((item) => item !== value)
      );
    }
  };

  const clearAllFilters = () => {
    const clearedFilters = {
      search: "",
      location: [],
      employmentType: [],
      experienceLevel: [],
    };
    setFilters(clearedFilters);
    onFilterChange(clearedFilters);
    setOpenDropdown(null);
  };

  const locations = ["Remote", "Onsite", "Hybrid"];
  const employmentTypes = ["Full-Time", "Part-Time", "Intern"];
  const experienceLevels = [
    "Senior-Level",
    "Mid-Level",
    "Junior-Level",
    "Entry-Level",
  ];

  return (
    <div
      ref={filtersRef}
      className="w-full space-y-3 sm:space-y-4 mt-4 sm:mt-5"
    >
      <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row items-start justify-center gap-2 sm:gap-3 md:gap-4 ">
        <SearchInput
          value={filters.search}
          onChange={(value) => updateFilter("search", value)}
          placeholder="Search for a job..."
        />
        <div className="flex flex-wrap sm:flex-nowrap gap-2 sm:gap-3 md:gap-4 w-full sm:w-auto">
          <DropdownFilter
            label="Location"
            value={filters.location}
            onChange={(value) => updateFilter("location", value)}
            options={locations}
            isOpen={openDropdown === "location"}
            onToggle={() => toggleDropdown("location")}
          />
          <DropdownFilter
            label="Employment Type"
            value={filters.employmentType}
            onChange={(value) => updateFilter("employmentType", value)}
            options={employmentTypes}
            isOpen={openDropdown === "employmentType"}
            onToggle={() => toggleDropdown("employmentType")}
          />
          <DropdownFilter
            label="Experience Level"
            value={filters.experienceLevel}
            onChange={(value) => updateFilter("experienceLevel", value)}
            options={experienceLevels}
            isOpen={openDropdown === "experienceLevel"}
            onToggle={() => toggleDropdown("experienceLevel")}
          />
        </div>
      </div>

      <div className="flex items-center justify-between text-xs sm:text-sm text-[var(--color-gray)]">
        <div className="flex-1">
          <ActiveFilters
            filters={filters}
            onRemoveFilter={removeFilter}
            onClearAll={clearAllFilters}
          />
        </div>
        <span>
          {totalJobs} {totalJobs === 1 ? "job" : "jobs"} found
        </span>
      </div>
    </div>
  );
};

export default SearchFilters;

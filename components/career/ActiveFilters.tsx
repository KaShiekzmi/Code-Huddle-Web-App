"use client";

import { FilterValues } from "@/types/job";
import FilterTag from "./FilterTag";

interface ActiveFiltersProps {
  filters: FilterValues;
  onRemoveFilter: (key: keyof FilterValues, value: string) => void;
  onClearAll: () => void;
}

const ActiveFilters = ({
  filters,
  onRemoveFilter,
  onClearAll,
}: ActiveFiltersProps) => {
  const hasActiveFilters =
    filters.search ||
    filters.location.length > 0 ||
    filters.employmentType.length > 0 ||
    filters.experienceLevel.length > 0;

  if (!hasActiveFilters) return null;

  return (
    <div className="flex flex-wrap items-center justify-start gap-1.5 sm:gap-2">
      {filters.search && (
        <FilterTag
          type="search"
          value={filters.search}
          onRemove={() => onRemoveFilter("search", filters.search)}
        />
      )}
      {filters.location.map((location) => (
        <FilterTag
          key={location}
          type="location"
          value={location}
          onRemove={() => onRemoveFilter("location", location)}
        />
      ))}
      {filters.employmentType.map((type) => (
        <FilterTag
          key={type}
          type="employmentType"
          value={type}
          onRemove={() => onRemoveFilter("employmentType", type)}
        />
      ))}
      {filters.experienceLevel.map((level) => (
        <FilterTag
          key={level}
          type="experienceLevel"
          value={level}
          onRemove={() => onRemoveFilter("experienceLevel", level)}
        />
      ))}
      <button
        onClick={onClearAll}
        className="flex items-center bg-gray-100 text-gray-700 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs sm:text-sm hover:bg-gray-200 transition-colors cursor-pointer"
      >
        Clear all
      </button>
    </div>
  );
};

export default ActiveFilters;

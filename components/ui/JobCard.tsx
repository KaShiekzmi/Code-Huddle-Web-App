import { formatUtcDate } from "@/utils/formatUtcDate";
import { Job } from "@/types/job";
import Link from "next/link";

interface JobCardProps {
  id: number;
  level: string;
  jobPostingDate: string;
  title: string;
  description: string;
  location: string;
  employmentType: string;
}

const JobCard = ({
  id,
  level,
  jobPostingDate,
  title,
  description,
}: JobCardProps) => {
  return (
    <Link href={`/career/${id}`} className="block">
      <div className="w-full sm:w-auto shadow-[0_6px_24px_rgba(0,0,0,0.05),0_0_0_1px_rgba(0,0,0,0.08)] rounded-lg bg-[var(--color-white)] flex flex-col items-start justify-start p-4 gap-5 border border-transparent hover:border-[var(--color-royalblue)] hover:bg-[var(--color-royalblue-200)] hover:shadow-lg transition-all duration-300">
        <div className="w-full flex flex-row items-start justify-between text-sm text-[var(--color-dimgray)]">
          <span>{level}</span>
          <span>{formatUtcDate(jobPostingDate)}</span>
        </div>
        <div className="w-full flex flex-col items-start gap-2 text-[var(--color-gray-200)]">
          <h3 className="w-full text-base font-medium tracking-tight text-[var(--color-black)]">
            {title}
          </h3>
          <p className="w-full text-sm text-[var(--color-dimgray)] leading-relaxed line-clamp-3">
            {description}
          </p>
        </div>
        <div className="rounded-xl flex flex-row items-center justify-center gap-2 text-[var(--color-royalblue)] hover:underline transition-all duration-300">
          <span className="text-base font-medium tracking-tight">
            View Details
          </span>
          <svg
            width="32"
            height="12"
            viewBox="0 0 37 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 sm:w-9"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M35.8095 7.94307C36.1977 7.55487 36.1998 6.92484 35.813 6.53381L30.1965 0.846549L30.1922 0.842307C29.8033 0.453398 29.174 0.451984 28.7823 0.838064C28.3891 1.22556 28.3849 1.85913 28.7738 2.25228L32.6791 6.20713L0.999854 6.20642C0.446896 6.20642 -0.000703803 6.65402 3.31592e-06 7.20627C-0.000703792 7.48275 0.111727 7.73236 0.292746 7.91337C0.473765 8.09439 0.723375 8.20682 0.999854 8.20612L32.7209 8.20612L28.7773 12.1567C28.387 12.547 28.3877 13.1799 28.778 13.5702L28.7787 13.5709C29.1691 13.9613 29.8026 13.9598 30.1929 13.5695L35.8095 7.94307Z"
              fill="#2970FF"
            />
          </svg>
        </div>
      </div>
    </Link>
  );
};

export default JobCard;

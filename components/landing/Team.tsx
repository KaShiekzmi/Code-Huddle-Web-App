"use client";

import { useState } from "react";
import Image from "next/image";
import TeamMemberCard from "@/components/ui/TeamMemberCard";
import { teamMembers } from "@/data/team-members";

const Team = () => {
  const [visibleCount, setVisibleCount] = useState(3);

  const handleViewMore = () => {
    setVisibleCount((prev) => Math.min(prev + 3, teamMembers.length));
  };

  return (
    <div className="w-full flex flex-col items-center py-8 sm:py-10 md:py-12 px-4 sm:px-8 md:px-16 lg:px-24 gap-6 sm:gap-8 md:gap-10 text-center text-sm sm:text-base text-[var(--color-gray)] font-lexend bg-[var(--color-white)]">
      <div className="max-w-4xl sm:max-w-5xl md:max-w-7xl flex flex-col items-center gap-3 sm:gap-4">
        <div className="flex items-center gap-2">
          <Image
            className="w-6 sm:w-7 md:w-8 h-6 sm:h-7 md:h-8"
            width={32}
            height={32}
            sizes="(max-width: 640px) 24px, (max-width: 768px) 28px, 32px"
            alt="Star icon"
            src="/assets/images/team/star-icon.svg"
          />
          <span className="tracking-[0.01em] font-medium text-sm sm:text-base">
            Meet Our Team
          </span>
        </div>
        <b className="text-xl sm:text-2xl md:text-3xl">
          People Behind Our Success
        </b>
        <p className="text-xs sm:text-sm md:text-base">
          Our talented team of innovators, problem-solvers, and experts is the
          driving force behind Code Huddle’s success. Get to know the
          professionals who bring your ideas to life with passion and expertise.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-10 lg:gap-16">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className={index < visibleCount ? "" : "hidden md:flex"}
          >
            <TeamMemberCard
              name={member.name}
              role={member.role}
              imageSrc={member.imageSrc}
            />
          </div>
        ))}
      </div>
      {visibleCount < teamMembers.length && (
        <button
          onClick={handleViewMore}
          className="md:hidden underline font-lexend font-medium flex items-center gap-2 text-sm sm:text-base text-[var(--color-royalblue)] hover:underline transition-all duration-300"
          aria-label="View more team members"
        >
          View More
        </button>
      )}
    </div>
  );
};

export default Team;

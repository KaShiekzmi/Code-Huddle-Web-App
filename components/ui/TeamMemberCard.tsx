import Image from "next/image";

interface TeamMemberCardProps {
  name: string;
  role: string;
  imageSrc: string;
}

const TeamMemberCard = ({ name, role, imageSrc }: TeamMemberCardProps) => {
  return (
    <div className="w-40 sm:w-44 md:w-48 flex flex-col items-center">
      <Image
        className="w-40 sm:w-44 md:w-48 rounded-[80px] sm:rounded-[88px] md:rounded-[96px] h-56 sm:h-64 md:h-68 object-cover"
        width={192}
        height={272}
        sizes="(max-width: 640px) 160px, (max-width: 768px) 176px, 192px"
        alt={`${name} profile`}
        src={imageSrc}
      />
      <div className="w-36 sm:w-40 md:w-44 rounded-full bg-[var(--color-white)] flex flex-col items-center py-2 px-3 sm:px-4 -mt-6 sm:-mt-7 md:-mt-8 shadow-sm">
        <span className="tracking-[0.01em] font-medium text-sm sm:text-base">
          {name}
        </span>
        <p className="text-xs sm:text-sm">{role}</p>
      </div>
    </div>
  );
};

export default TeamMemberCard;

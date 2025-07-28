import Image from "next/image";

interface ServiceCardProps {
  title: string;
  description: string;
  iconSrc: string;
}

const ServiceCard = ({ title, description, iconSrc }: ServiceCardProps) => {
  return (
    <div className="w-full h-full bg-[var(--color-white)] flex flex-col md:flex-row items-center justify-between p-4 sm:p-6 gap-3 sm:gap-4 hover:bg-[#F4F8FF] hover:shadow-[-10px_10px_20px_rgba(0,0,0,0.2)] hover:cursor-pointer hover:-translate-y-0.5 transition-all duration-300 ease-in-out border-2 border-[#F5F5F5]">
      <div className="flex flex-col mb-2 md:flex-row items-center gap-3 sm:gap-4 w-full">
        <Image
          className="w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24"
          width={80}
          height={80}
          sizes="(max-width: 640px) 64px, (max-width: 768px) 80px, 96px"
          alt={`${title} icon`}
          src={iconSrc}
        />
        <div className="flex flex-col gap-2 sm:gap-4">
          <h3 className="font-medium text-center md:text-left text-base sm:text-lg">
            {title}
          </h3>
          <p className="text-xs sm:text-sm md:text-base text-center md:text-left">
            {description}
          </p>
        </div>
      </div>
      <svg
        width="12"
        height="12"
        viewBox="0 0 13 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.5653 12.407C12.1143 12.407 12.5613 11.963 12.5643 11.413L12.6143 3.42001L12.6143 3.41401C12.6143 2.86401 12.1703 2.41801 11.6203 2.41401C11.0683 2.41001 10.6173 2.85501 10.6143 3.40801L10.5793 8.96601L2.32126 0.707004C1.93026 0.316004 1.29726 0.316004 0.907257 0.707004C0.711257 0.902004 0.614257 1.158 0.614256 1.414C0.614256 1.67 0.711257 1.926 0.907257 2.121L9.19525 10.409L3.61325 10.414C3.06125 10.414 2.61425 10.862 2.61425 11.414L2.61426 11.415C2.61426 11.967 3.06326 12.414 3.61526 12.414L11.5653 12.407Z"
          fill="black"
          transform="rotate(-90 6.5 6.5)"
        />
      </svg>
    </div>
  );
};

export default ServiceCard;

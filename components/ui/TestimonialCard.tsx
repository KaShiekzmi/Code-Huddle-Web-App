import Image from "next/image";

interface TestimonialCardProps {
  quote: string;
  name: string;
  title: string;
  location: string;
  avatarSrc: string;
  stars: number;
}

const TestimonialCard = ({
  quote,
  name,
  title,
  location,
  avatarSrc,
  stars,
}: TestimonialCardProps) => {
  return (
    <div className="w-full max-w-[384px] sm:max-w-[448px] h-48 sm:h-52 snap-start rounded-xl bg-[var(--color-white)] flex flex-col p-3 sm:p-4 gap-3 sm:gap-4 shadow-md">
      <div className="flex justify-end gap-2">
        <Image
          className="w-6 sm:w-8 h-5 sm:h-6"
          width={32}
          height={24}
          sizes="(max-width: 640px) 24px, 32px"
          alt="Testimonial icon"
          src="/images/testimonial-icon.svg"
        />
      </div>
      <div className="flex flex-col gap-3 sm:gap-4 flex-1">
        <p className="text-xs sm:text-sm text-left flex-1 overflow-hidden line-clamp-3">
          {quote}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 sm:gap-3">
            <Image
              className="w-10 sm:w-12 h-10 sm:h-12 rounded-full"
              width={48}
              height={48}
              sizes="(max-width: 640px) 40px, 48px"
              alt={`${name} avatar`}
              src={avatarSrc}
            />
            <div className="w-32 sm:w-40 text-left flex flex-col gap-1">
              <span className="font-medium text-xs sm:text-sm">{name}</span>
              <div className="text-[10px] sm:text-xs text-[var(--color-dimgray)]">
                <p className="m-0">{title}</p>
                <p className="m-0">{location}</p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className="w-3 sm:w-4 h-3 sm:h-4"
                viewBox="0 0 24 24"
                fill={i < stars ? "#FFD700" : "#E5E7EB"}
                fillRule="evenodd"
                clipRule="evenodd"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;

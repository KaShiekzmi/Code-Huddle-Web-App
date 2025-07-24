interface StatCardProps {
  title: string;
  description: string;
}

const StatCard = ({ title, description }: StatCardProps) => {
  return (
    <div className="w-full sm:w-60 md:w-72 rounded-xl bg-[var(--color-white)] flex flex-col items-center p-3 sm:p-4 gap-3 sm:gap-4 shadow-md text-center">
      <b className="text-xl sm:text-2xl text-[var(--color-gray)]">{title}</b>
      <p className="text-sm sm:text-base text-[var(--color-gray)]">
        {description}
      </p>
    </div>
  );
};

export default StatCard;

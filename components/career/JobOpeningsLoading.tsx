import LoadingSpinner from "@/components/ui/LoadingSpinner";

const JobOpeningsLoading = () => {
  return (
    <div className="w-full flex flex-col items-center py-8 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 bg-[var(--color-white)] text-[var(--color-gray)] font-lexend">
      <div className="w-full max-w-[1400px] flex flex-col items-center gap-4 sm:gap-6 md:gap-8">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-center text-[var(--color-black)]">
          Job Openings
        </h2>
        <div className="w-full flex justify-center py-8 sm:py-10">
          <LoadingSpinner />
        </div>
      </div>
    </div>
  );
};

export default JobOpeningsLoading;

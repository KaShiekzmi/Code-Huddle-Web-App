const CaseStudiesIntro = () => {
  return (
    <div className="mt-16 sm:mt-20 w-full flex flex-col items-center py-8 sm:py-10 md:py-12 lg:py-14 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 bg-[var(--color-white)] text-[var(--color-gray)] font-lexend">
      <div className="w-full max-w-[1400px] flex flex-col items-center gap-4 sm:gap-6 md:gap-8">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center">
          Real-World Solutions, Proven Results
        </h2>
        <p className="text-sm sm:text-base md:text-lg lg:text-lg text-[var(--color-dimgray)] text-center leading-relaxed max-w-6xl">
          Explore our portfolio of successful projects. Each case study
          highlights our approach, challenges faced, and the innovative
          solutions we delivered to help businesses succeed.
        </p>
      </div>
    </div>
  );
};

export default CaseStudiesIntro;

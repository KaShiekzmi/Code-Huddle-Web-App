import CaseStudiesCarousel from "@/components/ui/CaseStudiesCarousel";
import { caseStudies } from "@/data/case-studies";

const CaseStudies = () => {
  return (
    <div className="w-full flex flex-col items-center py-8 sm:py-10 md:py-12 px-4 sm:px-8 md:px-16 lg:px-24 gap-6 sm:gap-8 md:gap-10 text-center text-sm sm:text-base md:text-lg text-[var(--color-gray)] font-lexend bg-[var(--color-whitesmoke)]">
      <div className="max-w-4xl sm:max-w-5xl md:max-w-7xl flex flex-col items-center gap-4 sm:gap-6 px-4 sm:px-8 md:px-12 lg:px-24">
        <div className="rounded-lg bg-[var(--color-royalblue-200)] flex items-center py-2 px-3 gap-2">
          <div className="w-5 sm:w-6 h-5 sm:h-6 rounded-full bg-[var(--color-royalblue)] border-[var(--color-lavender)] border-4" />
          <span className="font-medium text-sm sm:text-base">Case Studies</span>
        </div>
        <b className="text-xl sm:text-2xl md:text-3xl">
          Real-World Solutions, Proven Results
        </b>
        <p className="text-xs sm:text-sm md:text-base">
          Explore our portfolio of successful projects. Each case study
          highlights our approach, challenges faced, and the innovative
          solutions we delivered to help businesses succeed.
        </p>
      </div>
      <CaseStudiesCarousel caseStudies={caseStudies} />
    </div>
  );
};

export default CaseStudies;

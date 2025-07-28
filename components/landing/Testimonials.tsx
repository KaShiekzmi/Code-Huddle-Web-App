import { testimonials } from "@/data/testimonials";
import TestimonialCarousel from "@/components/ui/TestimonialCarousel";

const Testimonials = () => {
  return (
    <div className="w-full bg-[var(--color-whitesmoke)] flex flex-col items-center py-8 sm:py-10 md:py-12 gap-6 sm:gap-8 text-center text-sm sm:text-base md:text-lg text-[var(--color-gray)] font-lexend">
      <div className="max-w-4xl sm:max-w-5xl md:max-w-7xl flex flex-col items-center gap-4 sm:gap-6 px-4 sm:px-8 md:px-24">
        <div className="rounded-lg bg-[var(--color-royalblue-200)] flex items-center py-2 px-3 gap-2">
          <div className="w-5 sm:w-6 h-5 sm:h-6 rounded-full bg-[var(--color-royalblue)] border-[var(--color-lavender)] border-4" />
          <span className="font-medium text-sm sm:text-base">Testimonials</span>
        </div>
        <b className="text-xl sm:text-2xl md:text-3xl max-w-80 sm:max-w-96">
          Our Happy Customers Reviews
        </b>
        <p className="text-xs sm:text-sm md:text-base">
          The absolute blend of skilled engineers, robust ideas and top-notch
          expertise. This is what Code Huddle is all about! The company aims to
          digitally transform early-stage startups and SMEs through our robust
          expertise in custom software development. We&apos;ll huddle to
          understand your problem, code our way through your problem, and
          present you with a software solution you can&apos;t refuse.
        </p>
      </div>
      <TestimonialCarousel testimonials={testimonials} />
    </div>
  );
};

export default Testimonials;

import ServiceCard from "@/components/ui/ServiceCard";
import { services } from "@/data/services";

const Services = () => {
  return (
    <div className="w-full bg-[var(--color-whitesmoke)] flex flex-col items-center py-8 sm:py-10 md:py-12 px-4 sm:px-8 md:px-16 lg:px-24 gap-6 sm:gap-8 md:gap-10 text-center text-base sm:text-lg text-[var(--color-gray)] font-lexend">
      <div className="max-w-4xl sm:max-w-5xl md:max-w-7xl flex flex-col items-center gap-4 sm:gap-6">
        <div className="rounded-lg bg-[var(--color-royalblue-200)] flex items-center py-2 px-3 gap-2">
          <div className="w-5 sm:w-6 h-5 sm:h-6 rounded-full bg-[var(--color-royalblue)] border-[var(--color-lavender)] border-4" />
          <span className="font-medium text-sm sm:text-base">Services</span>
        </div>
        <b className="text-xl sm:text-2xl md:text-3xl">
          Empowering Your Vision with Cutting-Edge Solutions
        </b>
        <p className="text-sm sm:text-base md:text-lg">
          At Code Huddle, we combine innovation, expertise, and collaboration to
          deliver custom solutions tailored to your unique business needs.
        </p>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-y-[1px] gap-x-4 sm:gap-x-6">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            iconSrc={service.iconSrc}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;

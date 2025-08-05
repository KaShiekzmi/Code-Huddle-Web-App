import LogoCarousel from "@/components/ui/LogoCarousel";
import StatCard from "@/components/ui/StatCard";

const Hero = () => {
  return (
    <section className="relative overflow-hidden radial-blue-dark pt-30 sm:pt-45 md:pt-45 pb-16 sm:pb-24 md:pb-35 px-4 sm:px-6 md:px-8 flex flex-col items-center gap-6 sm:gap-8 text-center font-lexend">
      <div className="absolute top-0 right-0 w-1/3 sm:w-1/4 md:w-1/3 h-full opacity-20">
        <div className="flex flex-wrap h-full">
          {Array.from({ length: 60 }).map((_, index) => (
            <div
              key={index}
              className="w-12 sm:w-16 md:w-20 h-12 sm:h-16 md:h-20 border-r border-b border-white/30 clip-path-polygon"
            />
          ))}
        </div>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 rounded-full bg-[var(--color-royalblue)] blur-[200px] sm:blur-[300px] md:blur-[400px]" />

      <div className="flex flex-col items-center gap-8 sm:gap-10 md:gap-12 z-10 w-full px-2 sm:px-4">
        <div className="flex flex-col items-center gap-4 sm:gap-6">
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-ligconsolata text-white">
              Let&apos;s{" "}
              <span className="text-[var(--color-royalblue)]">Solve</span>
            </h1>
            <h1 className="m-2 text-3xl sm:text-4xl md:text-5xl font-bold font-lexend text-white">
              Your Business Problems
            </h1>
          </div>
          <p className="text-sm sm:text-base md:text-lg text-white max-w-3xl sm:max-w-4xl md:max-w-6xl">
            Code Huddle combines skilled engineers, innovative ideas, and top
            expertise to transform startups and SMEs through custom software
            development. We huddle to solve your challenges and deliver software
            solutions that exceed expectations.
          </p>
        </div>
        <div className="flex flex-col items-center gap-6 sm:gap-8 w-full">
          <LogoCarousel />
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            <StatCard value="50+" description="Successful Projects Delivered" />
            <StatCard value="30+" description="Happy Clients Worldwide" />
            <StatCard value="98%" description="Client Satisfaction Rate" />
            <StatCard value="4+" description="Years of Innovation" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

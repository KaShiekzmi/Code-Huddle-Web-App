import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Team from "@/components/sections/Team";
import CaseStudies from "@/components/sections/CaseStudies";
import Testimonials from "@/components/sections/Testimonials";
import Culture from "@/components/sections/Culture";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Team />
      <CaseStudies />
      <Testimonials />
      <Culture />
    </main>
  );
}

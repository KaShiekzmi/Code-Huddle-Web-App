import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import Team from "@/components/landing/Team";
import CaseStudies from "@/components/landing/CaseStudies";
import Testimonials from "@/components/landing/Testimonials";
import Culture from "@/components/landing/Culture";

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

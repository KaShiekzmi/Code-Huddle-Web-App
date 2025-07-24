import Hero from "./landing/components/Hero";
import Services from "./landing/components/Services";
import Team from "./landing/components/Team";
import CaseStudies from "./landing/components/CaseStudies";
import Testimonials from "./landing/components/Testimonials";
import Culture from "./landing/components/Culture";

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

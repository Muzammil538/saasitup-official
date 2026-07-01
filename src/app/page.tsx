import Hero from "~/components/sections/Hero";
import TrustSection from "~/components/sections/TrustSection";
import ServicesSection from "~/components/sections/ServicesSection";
import WhyUsSection from "~/components/sections/WhyUsSection";
import ProcessSection from "~/components/sections/ProcessSection";
import AIAutomationShowcase from "~/components/sections/AIAutomationShowcase";
import ProjectsSection from "~/components/sections/ProjectsSection";
import TestimonialsSection from "~/components/sections/TestimonialsSection";
import FAQSection from "~/components/sections/FAQSection";
import FinalCTA from "~/components/sections/FinalCTA";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <TrustSection />
      <ServicesSection />
      <WhyUsSection />
      <ProcessSection />
      <AIAutomationShowcase />
      <ProjectsSection />
      <TestimonialsSection />
      <FAQSection />
      <FinalCTA />
    </main>
  );
}
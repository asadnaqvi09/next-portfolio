import HeroSection from "@/components/landing/Hero/HeroSection";
import CapabilitiesSection from "@/components/landing/Capabilities/CapabilitiesSection";
import ProcessSection from "@/components/landing/Process/ProcessSection";
import WorkSection from "@/components/landing/Work/WorkSection";
import StackSection from "@/components/landing/Stack/StackSection";
import FaqSection from "@/components/landing/Faq/FaqSection";
import ContactSection from "@/components/landing/Contact/ContactSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CapabilitiesSection />
      <ProcessSection />
      <WorkSection />
      <StackSection />
      <FaqSection />
      <ContactSection />
    </>
  );
}

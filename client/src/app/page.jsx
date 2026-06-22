import HeroSection from "@/components/landing/Hero/HeroSection";
import AboutSection from "@/components/landing/About/AboutSection";
import ServicesSection from "@/components/landing/Services/ServicesSection";
import FeaturedSection from "@/components/landing/FeaturedProducts/FeaturedSection";
import ContactSection from "@/components/landing/Contact/ContactSection";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-16">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <FeaturedSection />
      <ContactSection />
    </div>
  );
}

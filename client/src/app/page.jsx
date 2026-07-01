import HeroSection from "@/components/landing/Hero/HeroSection";
import AboutSection from "@/components/landing/About/AboutSection";
import ServicesSection from "@/components/landing/Services/ServicesSection";
import FeaturedWorkSection from "@/components/landing/FeaturedWork/FeaturedWorkSection";
import ContactSection from "@/components/landing/Contact/ContactSection";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-16">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <FeaturedWorkSection />
      <ContactSection />
    </div>
  );
}

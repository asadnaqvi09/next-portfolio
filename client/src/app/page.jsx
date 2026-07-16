import HeroSection from "@/components/landing/Hero/HeroSection";
import MarqueeSection from "@/components/landing/Marquee/MarqueeSection";
import AboutSection from "@/components/landing/About/AboutSection";
import SkillsSection from "@/components/landing/Skills/SkillsSection";
import ExperienceSection from "@/components/landing/Experience/ExperienceSection";
import WorkSection from "@/components/landing/Work/WorkSection";
import ContactSection from "@/components/landing/Contact/ContactSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <WorkSection />
      <ContactSection />
    </>
  );
}

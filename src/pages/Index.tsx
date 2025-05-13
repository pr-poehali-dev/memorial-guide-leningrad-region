import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import DistrictsSection from "@/components/home/DistrictsSection";
import FeaturedMemorialsSection from "@/components/home/FeaturedMemorialsSection";
import CallToActionSection from "@/components/home/CallToActionSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#F1FAEE]">
      <HeroSection />
      <AboutSection />
      <DistrictsSection />
      <FeaturedMemorialsSection />
      <CallToActionSection />
    </div>
  );
};

export default Index;

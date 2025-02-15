import { HeroSection } from "@/components/HeroSection";
import { IntroSection } from "@/components/IntroSection";
import { ProjectShowcase } from "@/components/ProjectShowcase";
import { NewsSection } from "@/components/NewsSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <IntroSection />
      <ProjectShowcase limit={3} />
      <NewsSection />
    </div>
  );
};

export default Index;
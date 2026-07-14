import BentoGrid from "./BentoGrid/BentoGrid";
import FeaturesSection from "./components/Features/FeaturesSection";
import HeroBanner from "./components/HeroBanner/HeroBanner";
import HowItWorksSection from "./components/HowItWorksSection/HowItWorksSection";

export default function Home() {
  return (
    <div>
      <HeroBanner />
      <HowItWorksSection />
      <FeaturesSection />
      <BentoGrid />
    </div>
  );
}

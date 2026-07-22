import BentoGrid from "./components/BentoGrid/BentoGrid";
import FeaturesSection from "./components/Features/FeaturesSection";
import HeroBanner from "./components/HeroBanner/HeroBanner";
import HowItWorksSection from "./components/HowItWorksSection/HowItWorksSection";
import UseCasesSection from "./components/UseCasesSection/UseCasesSection";
import WhyQikmoveSection from "./components/WhyQikmoveSection/WhyQikmoveSection";
import Footer from "./components/Footer/Footer";

export default function Home() {
  return (
    <div>
      <HeroBanner />
      <HowItWorksSection />
      {/* <FeaturesSection />
      <BentoGrid />
      <WhyQikmoveSection />
      <UseCasesSection />
      <Footer /> */}
    </div>
  );
}

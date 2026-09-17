import BentoGrid from "./components/BentoGrid/BentoGrid";
import FeaturesSection from "./components/Features/FeaturesSection";
import HeroBanner from "./components/HeroBanner/HeroBanner";
import HowItWorksSection from "./components/HowItWorksSection/HowItWorksSection";
import UseCasesSection from "./components/UseCasesSection/UseCasesSection";
import WhyQikmoveSection from "./components/WhyQikmoveSection/WhyQikmoveSection";
import CtaSection from "./components/CtaSection/CtaSection";
import ContactSection from "./contact-us/components/ContactSection/ContactSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <HeroBanner />
      <HowItWorksSection />
      <FeaturesSection />
      <BentoGrid />
      <WhyQikmoveSection />
      <UseCasesSection />
      <CtaSection />
      <Footer />
    </div>
  );
}

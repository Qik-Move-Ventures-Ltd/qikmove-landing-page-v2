import PoweringBusinessSection from "./PoweringBusinessSection";
import SimpleDeliverySection from "./SimpleDeliverySection";

export default function BentoGrid() {
  return (
    <div className="flex items-center gap-x-3 p-12 bg-[#FBF9F4] w-full">
      <PoweringBusinessSection />
      <SimpleDeliverySection />
    </div>
  );
}

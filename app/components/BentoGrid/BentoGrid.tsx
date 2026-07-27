import PoweringBusinessSection from "./PoweringBusinessSection";
import SimpleDeliverySection from "./SimpleDeliverySection";

export default function BentoGrid() {
  return (
    <div
      className="flex flex-col min-[986px]:flex-row gap-y-4 min-[345px]:gap-y-8 min-[986px]:gap-y-0 items-center 
    justify-center gap-x-3 p-4 min-[345px]:p-6 min-[568px]:p-12 bg-[#FBF9F4] w-full"
    >
      <PoweringBusinessSection />
      <SimpleDeliverySection />
    </div>
  );
}

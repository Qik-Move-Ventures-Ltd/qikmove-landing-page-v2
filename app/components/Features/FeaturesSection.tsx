import FeaturesItem from "./FeaturesItem";
import BoltIcon from "../icons/BoltIcon";
import DollarIcon from "../icons/DollarIcon";
import HeadphoneIcon from "../icons/HeadphoneIcon";
import MultiPackageIcon from "../icons/MultiPackageIcon";
import ShieldIcon from "../icons/ShieldIcon";
import TrackerIcon from "../icons/TrackerIcon";

export default function FeaturesSection() {
  return (
    <div className="bg-[#F6F6FF] py-20 px-[52px]">
      <h2 className="text-[#5A687C] text-xs font-semibold">FEATURES</h2>
      <div className="mt-[9px] text-[#0B111E] text-5xl font-bold mb-[35px]">
        <h1>Built for speed.</h1>
        <h1>Engineered for trust.</h1>
      </div>
      <div className="grid grid-cols-3 gap-x-5 gap-y-[35px]">
        <FeaturesItem
          heading="Real-time tracking"
          description="Watch your package move from pickup to drop-off, live"
          Icon={TrackerIcon}
        />
        <FeaturesItem
          heading="Multi-stop deliveries"
          description="Add several drop-offs in a single trip and save."
          Icon={MultiPackageIcon}
        />
        <FeaturesItem
          heading="Code-based securities"
          description="No SMS OTP. A unique code confirms every handover."
          Icon={ShieldIcon}
        />
        <FeaturesItem
          heading="Affordable pricing"
          description="Transparent rates calculated by distance and stops."
          Icon={DollarIcon}
        />
        <FeaturesItem
          heading="Instant mover matching"
          description="Average pickup time under 8 minutes citywide."
          Icon={BoltIcon}
        />
        <FeaturesItem
          heading="Always-on support"
          description="Real humans ready to help, on every delivery."
          Icon={HeadphoneIcon}
        />
      </div>
    </div>
  );
}

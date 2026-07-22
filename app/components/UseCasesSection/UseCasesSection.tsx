import CulinaryIcon from "../icons/CulinaryIcon";
import HeartIcon from "../icons/HeartIcon";
import OfficeBuildingIcon from "../icons/OfficeBuildingIcon";
import PaperBagIcon from "../icons/PaperBagIcon";
import UseCasesItem from "./UseCasesItem";

export default function UseCasesSection() {
  return (
    <div className="py-20 px-12 bg-[#FBF9F4]">
      <h2 className="text-xs mb-4 text-[#5A687C] tracking-[1.2px] font-semibold font-inter">
        USE CASES
      </h2>
      <h1 className="text-[#0B111E] tracking-[-2.4px] font-bold text-5xl">
        Whatever you need moved.
      </h1>
      <div className="grid grid-cols-4 gap-5 mt-8">
        <UseCasesItem
          heading="Friends & family"
          description="Forget something? Send it across town in one tap"
          Icon={HeartIcon}
        />
        <UseCasesItem
          heading="E-commerce"
          description="Same day fulfillment for instagram & online stores."
          Icon={PaperBagIcon}
        />
        <UseCasesItem
          heading="Office logistics"
          description="Documents, samples, and supplies moved fast."
          Icon={OfficeBuildingIcon}
        />
        <UseCasesItem
          heading="Food & small parcels"
          description="Hot, fresh and on time. Every single trip."
          Icon={CulinaryIcon}
        />
      </div>
    </div>
  );
}

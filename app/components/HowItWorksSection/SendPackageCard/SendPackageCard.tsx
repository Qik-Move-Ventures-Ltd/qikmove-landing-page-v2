import Image from "next/image";
import StepItem from "./StepItem";
import LocationIcon from "../../icons/LocationIcon";
import PersonWithCheckmarkIcon from "../../icons/PersonWithCheckmarkIcon";
import PackageIcon from "../../icons/PackageIcon";

type StepListType = {
  step: number;
  heading: string;
  desc: string;
  Icon: React.ComponentType<{ className: string }>;
};

const stepList: StepListType[] = [
  {
    step: 1,
    heading: "Set pickup & drop-off",
    desc: "Pin both locations in seconds",
    Icon: LocationIcon,
  },
  {
    step: 2,
    heading: "Add recipient details",
    desc: "Name, phone, and any notes.",
    Icon: PersonWithCheckmarkIcon,
  },
  {
    step: 3,
    heading: "Mover picks up & delivers",
    desc: "Track every move in real time.",
    Icon: PackageIcon,
  },
];

export default function SendPackageCard() {
  return (
    <div className="flex flex-col min-[1080px]:flex-row justify-between items-start min-[1080px]:items-center w-full bg-[#FBF9F4] rounded-3xl px-6 min-[1204px]:px-10">
      <div className="py-10">
        <h3 className="text-[#5A687C] mb-2 text-[10px] min-[386px]:text-xs font-semibold">
          SEND IN 4 STEPS
        </h3>
        <h1
          className="text-[#0B111E] text-xl min-[386px]:text-2xl min-[477px]:text-3xl font-bold 
        mb-6 min-[386px]:mb-10"
        >
          Send packages with ease
        </h1>
        <div className="flex flex-col gap-y-6 min-[1109px]:gap-y-8 min-[1158px]:gap-y-10">
          {stepList.map((item) => (
            <StepItem
              key={item.step}
              heading={item.heading}
              desc={item.desc}
              step={item.step}
              Icon={item.Icon}
            />
          ))}
        </div>
      </div>
      <div>
        <Image
          src="/images/person-holding-phone.png"
          alt="Image of person holding a phone"
          width={898}
          height={479.7}
          className=""
        />
      </div>
    </div>
  );
}

import Image from "next/image";
import BellIcon from "../../icons/BellIcon";
import ArrowHeadIcon from "../../icons/ArrowHeadIcon";
import WalletIcon from "../../icons/WalletIcon";
import ForMoversStepItem from "./ForMoversStepItem";

const stepList = [
  {
    heading: "Accept a job",
    desc: "See nearby requests instantly.",
    Icon: BellIcon,
  },
  {
    heading: "Navigate easily",
    desc: "Optimized routes for pickup & drop-off.",
    Icon: ArrowHeadIcon,
  },
  {
    heading: "Get paid fast",
    desc: "Earnings credited per trip.",
    Icon: WalletIcon,
  },
];

export default function ForMovers() {
  return (
    <div className="mt-4 flex justify-between bg-[#0D0D2F] rounded-3xl mb-2">
      <div className="p-10 text-[#D9D9FB]">
        <h3 className="text-xs font-semibold">EARN ON YOUR TERMS</h3>
        <h2 className="text-4xl font-bold mt-2 mb-10">For Movers</h2>
        <div className="flex flex-col gap-y-10">
          {stepList.map((item, idx) => (
            <ForMoversStepItem
              key={idx}
              step={idx + 1}
              heading={item.heading}
              desc={item.desc}
              Icon={item.Icon}
            />
          ))}
        </div>
      </div>
      <div>
        <Image
          src={"/images/hand-holding-andriod-phone.png"}
          alt="A hand holding an andriod phone"
          width={615}
          height={499}
        />
      </div>
    </div>
  );
}

import Image from "next/image";
import MetricsCard from "./MetricsCard";
import WhyQikmoveTextSection from "./WhyQikmoveTextSection";

export default function WhyQikmoveSection() {
  return (
    <div
      className="px-5 min-[431px]:px-10 min-[557px]:pl-15 min-[557px]:pr-30 pt-[42.7px] pb-15
       min-[431px]:pb-25 flex flex-col min-[995px]:flex-row items-start min-[995px]:items-center gap-x-8"
    >
      <div className="relative ">
        <Image
          src="/images/dispatch-rider.png"
          alt="A dispatch rider"
          width={633}
          height={713}
          className="rounded-lg"
        />
        <MetricsCard />
      </div>
      <WhyQikmoveTextSection />
    </div>
  );
}

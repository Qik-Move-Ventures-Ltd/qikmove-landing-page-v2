import Image from "next/image";
import MetricsCard from "./MetricsCard";
import WhyQikmoveTextSection from "./WhyQikmoveTextSection";

export default function WhyQikmoveSection() {
  return (
    <div className="pl-15 pr-30 pt-[42.7px] pb-25 flex items-center gap-x-8">
      <div className="relative">
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

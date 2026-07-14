import ForMovers from "./ForMovers/ForMovers";
import SendPackageCard from "./SendPackageCard/SendPackageCard";

export default function HowItWorksSection() {
  return (
    <section className="pt-3 px-[22px] bg-white">
      <h3 className="text-[#5A687C] text-xs font-semibold">HOW IT WORKS</h3>
      {/* Section Heading */}
      <h1 className="mt-[15px] mb-[46px] text-[#0B111E] text-5xl font-bold">
        Two sides. One smooth flow.
      </h1>
      <div>
        <SendPackageCard />
        <ForMovers />
      </div>
    </section>
  );
}

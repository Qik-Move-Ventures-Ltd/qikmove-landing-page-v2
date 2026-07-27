import ForMovers from "./ForMovers/ForMovers";
import SendPackageCard from "./SendPackageCard/SendPackageCard";

export default function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="pt-3 scroll-mt-20 px-[18px] min-[365px]:px-[22px] bg-white"
    >
      <h3 className="text-[#5A687C] text-xs font-semibold">HOW IT WORKS</h3>
      {/* Section Heading */}
      <h1
        className="mt-[15px]  mb-6 min-[528px]:mb-[46px] text-[#0B111E] text-3xl min-[528px]:text-4xl 
      min-[1080px]:text-5xl font-bold"
      >
        Two sides. One smooth flow.
      </h1>
      <div>
        <SendPackageCard />
        <ForMovers />
      </div>
    </section>
  );
}

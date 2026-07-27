import WhyQikmoveItem from "./WhyQikmoveItem";

export default function WhyQikmoveTextSection() {
  return (
    <div className="w-full min-[995px]:w-[43.6%] mt-[90px] min-[995px]:mt-0">
      <h2 className="text-[#5A687C] mb-[11px] font-semibold text-xs font-inter tracking-[1.2px]">
        WHY QIKMOVE
      </h2>
      <h1 className="font-bold text-4xl min-[1076px]:text-5xl tracking-[-2.4px]">
        Local logistics that actually work.
      </h1>
      <p className="mt-5 min-[1076px]:mt-[31px] text-[#5A687C] text-lg tracking-[0%]">
        We rebuilt intra-city delivery from the ground up — with the mover, the
        sender, and the receiver all in mind
      </p>
      <div className="mt-[18px] min-[431px]:mt-[37px] flex flex-col gap-y-5">
        <WhyQikmoveItem
          heading="Vetted, reliable movers"
          description="Every mover is verified, rated and trained on safe handling."
        />
        <WhyQikmoveItem
          heading="Code, not OTP"
          description="Our verifcation system works without phone signal at the door."
        />
        <WhyQikmoveItem
          heading="Built for local realities"
          description="Design for traffic, addresses and pace of African cities."
        />
        <WhyQikmoveItem
          heading="For people and businesses"
          description="From a single parcel to hundreds of daily orders."
        />
      </div>
    </div>
  );
}

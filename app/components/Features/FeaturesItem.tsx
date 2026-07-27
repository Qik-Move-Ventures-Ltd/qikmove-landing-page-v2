export default function FeaturesItem({
  heading,
  description,
  Icon,
}: {
  heading: string;
  description: string;
  Icon: React.ComponentType<{ className: string }>;
}) {
  return (
    <div
      className="h-fit min-[352px]:h-[215px] max-w-[480px] rounded-3xl bg-white border border-[#E7EAEE99] p-5 min-[335px]:p-7 flex 
    flex-col gap-y-2 min-[352px]:gap-y-0 min-[352px]:justify-evenly"
    >
      <div className="flex items-center justify-center bg-[#DBDBF8] rounded-2xl h-12 w-12 ">
        <Icon className="w-6 h-6 text-[#0B111E]" />
      </div>
      <h1 className="text-[#0B111E] font-semibold text-lg min-[335px]:text-xl">
        {heading}
      </h1>
      <p className="text-[#5A687C] text-sm min-[335px]:text-base ">
        {description}
      </p>
    </div>
  );
}

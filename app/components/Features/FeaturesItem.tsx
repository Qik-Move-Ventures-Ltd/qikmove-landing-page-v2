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
      className="h-[213.6px] rounded-3xl bg-white border border-[#E7EAEE99] p-7 flex 
    flex-col justify-evenly"
    >
      <div className="flex items-center justify-center bg-[#DBDBF8] rounded-2xl h-12 w-12 ">
        <Icon className="w-6 h-6 text-[#0B111E]" />
      </div>
      <h1 className="text-[#0B111E] font-semibold text-xl">{heading}</h1>
      <p className="text-[#5A687C]">{description}</p>
    </div>
  );
}

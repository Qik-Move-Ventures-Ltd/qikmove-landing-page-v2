import CheckmarkIcon from "../icons/CheckmarkIcon";

export default function WhyQikmoveItem({
  heading,
  description,
}: {
  heading: string;
  description: string;
}) {
  return (
    <div className="flex items-baseline gap-x-4">
      <span className="w-5 h-5 rounded-full bg-[#BDEE2B] flex items-center justify-center">
        <CheckmarkIcon className="w-[6px] h-1 text-[#0B111E]" />
      </span>
      <div className="flex-1">
        <h2 className="text-[#0B111E] font-semibold text-lg ">{heading}</h2>
        <p className="text-[#5A687C]">{description}</p>
      </div>
    </div>
  );
}

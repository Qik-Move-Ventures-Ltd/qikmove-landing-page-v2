import HeartIcon from "../icons/HeartIcon";

export default function UseCasesItem({
  Icon,
  heading,
  description,
}: {
  Icon: React.ComponentType<{ className: string }>;
  heading: string;
  description: string;
}) {
  return (
    <div className="bg-white rounded-3xl py-4 px-[29px] flex flex-col gap-y-[34px]">
      <span>
        <Icon className="w-8 h-8 text-[#0B111E]" />
      </span>

      <div className="flex flex-col gap-y-1">
        <h2 className="text-[#0B111E] tracking-[-0.45px] text-lg font-bold">
          {heading}
        </h2>
        <p className="text-[#5A687C]">{description}</p>
      </div>
    </div>
  );
}

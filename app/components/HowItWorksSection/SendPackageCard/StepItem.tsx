import React from "react";

export default function StepItem({
  Icon,
  step,
  heading,
  desc,
}: {
  Icon: React.ComponentType<{ className: string }>;
  step: number;
  heading: string;
  desc: string;
}) {
  return (
    <div className="flex items-center gap-x-4">
      <div className="bg-[#0B111E] w-10 min-[338px]:w-12 h-10 min-[338px]:h-12 rounded-2xl flex items-center justify-center">
        <Icon className="text-[#C4F042] h-4 min-[386px]:h-5 w-4 min-[386px]:w-5" />
      </div>
      <div className="flex flex-col gap-y-[3px]">
        <h3 className="text-[#5A687C] font-semibold text-[10px] min-[386px]:text-xs">
          STEP {step}
        </h3>
        <h2
          className="text-[#0B111E] text-base min-[386px]:text-lg 
        font-semibold"
        >
          {heading}
        </h2>
        <p className="text-[#5A687C] text-xs min-[386px]:text-sm">{desc}</p>
      </div>
    </div>
  );
}

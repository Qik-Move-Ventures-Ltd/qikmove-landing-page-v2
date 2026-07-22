import BicycleRiderIcon from "../icons/BicycleRiderIcon";

export default function FloatingNotificationCard() {
  return (
    <div
      className="p-4 flex items-center gap-x-2 min-[523px]:gap-x-4 absolute 
    -left-1 min-[528px]:-left-5 min-[758px]:-left-10 top-20 min-[367px]:top-30 bg-white rounded-2xl"
    >
      <div className="h-8 min-[367px]:h-10 w-8 min-[367px]:w-10 bg-[#BDEE2B33] rounded-full flex items-center justify-center">
        <BicycleRiderIcon className="w-4 min-[367px]:h-5 w-4 min-[367px]:w-5 text-[#0B111E]" />
      </div>
      <div>
        <h2 className="text-[#5A687C] text-[10px] min-[367px]:text-xs ">
          Mover arriving
        </h2>
        <p className="text-[#0B111E] font-semibold text-xs min-[367px]:text-sm">
          3 min away
        </p>
      </div>
    </div>
  );
}

import BicycleRiderIcon from "../icons/BicycleRiderIcon";

export default function FloatingNotificationCard() {
  return (
    <div className="p-4 flex items-center gap-x-4 absolute -left-10 top-30 bg-white rounded-2xl">
      <div className="h-10 w-10 bg-[#BDEE2B33] rounded-full flex items-center justify-center">
        <BicycleRiderIcon className="h-5 w-5 text-[#0B111E]" />
      </div>
      <div>
        <h2 className="text-[#5A687C] text-xs ">Mover arriving</h2>
        <p className="text-[#0B111E] font-semibold text-sm">3 min away</p>
      </div>
    </div>
  );
}

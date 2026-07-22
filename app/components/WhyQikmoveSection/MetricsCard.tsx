export default function MetricsCard() {
  return (
    <div
      className="absolute -bottom-[70px] right-4 z-30 bg-white py-4 pl-4 pr-13
         grid grid-cols-2 gap-x-4 gap-y-3 shadow-xl rounded-2xl"
    >
      <div className="flex flex-col items-start justify-center">
        <h2 className="text-[#0B111E] font-bold text-2xl ">8min</h2>
        <p className="text-[#5A687C] text-xs">Avg pickup</p>
      </div>
      <div className="flex flex-col items-start justify-center">
        <h2 className="text-[#0B111E] font-bold text-2xl ">98%</h2>
        <p className="text-[#5A687C] text-xs">On-time rate</p>
      </div>
      <div className="flex flex-col items-start justify-center">
        <h2 className="text-[#0B111E] font-bold text-2xl ">12k+</h2>
        <p className="text-[#5A687C] text-xs">Active users</p>
      </div>
      <div className="flex flex-col items-start justify-center">
        <h2 className="text-[#0B111E] font-bold text-2xl ">4.9★</h2>
        <p className="text-[#5A687C] text-xs">Mover rating</p>
      </div>
    </div>
  );
}

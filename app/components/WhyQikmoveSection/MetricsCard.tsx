export default function MetricsCard() {
  return (
    <div
      className="absolute -bottom-[50px] min-[555px]:-bottom-[70px] right-4 z-30 bg-white py-3 min-[593px]:py-4 px-3 min-[593px]:pl-4 min-[593px]:pr-5 min-[625px]:pr-13
         grid grid-cols-2 gap-1 min-[454px]:gap-x-2 min-[593px]:gap-x-4 min-[454px]:gap-y-2 min-[593px]:gap-y-3 shadow-xl 
         rounded-2xl"
    >
      <div className="flex flex-col items-start justify-center">
        <h2 className="text-[#0B111E] font-bold text-base min-[454px]:text-lg min-[593px]:text-xl min-[669px]:text-2xl ">
          8min
        </h2>
        <p className="text-[#5A687C] text-xs">Avg pickup</p>
      </div>
      <div className="flex flex-col items-start justify-center">
        <h2 className="text-[#0B111E] font-bold text-base min-[454px]:text-lg min-[593px]:text-xl min-[669px]:text-2xl ">
          98%
        </h2>
        <p className="text-[#5A687C] text-xs">On-time rate</p>
      </div>
      <div className="flex flex-col items-start justify-center">
        <h2 className="text-[#0B111E] font-bold text-base min-[454px]:text-lg min-[593px]:text-xl min-[669px]:text-2xl ">
          12k+
        </h2>
        <p className="text-[#5A687C] text-xs">Active users</p>
      </div>
      <div className="flex flex-col items-start justify-center">
        <h2 className="text-[#0B111E] font-bold text-base min-[454px]:text-lg min-[593px]:text-xl min-[669px]:text-2xl ">
          4.9★
        </h2>
        <p className="text-[#5A687C] text-xs">Mover rating</p>
      </div>
    </div>
  );
}

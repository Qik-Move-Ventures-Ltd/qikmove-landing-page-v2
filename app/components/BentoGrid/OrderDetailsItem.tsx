export default function OrderDetailsItem({
  deliveryId,
  status,
  origin,
  destination,
}: {
  deliveryId: string;
  status: string;
  origin: string;
  destination: string;
}) {
  return (
    <div
      className="p-[11.8px] rounded-xl border border-[#C4F0421A] flex items-center justify-between 
    w-full bg-[#C4F0420D]"
    >
      {/* First flex item */}
      <div className=" flex items-center gap-x-3">
        {/* Dot */}
        <div className="h-2 w-2 bg-[#BDEE2B] rounded-full" />
        {/* ======================== */}
        <div>
          <h1 className="text-[#C4F042] font-inter text-sm font-semibold">
            {deliveryId}
          </h1>
          <p className="text-[#C4F04299] text-xs">
            {origin} &rarr; {destination}
          </p>
        </div>
      </div>
      {/* Status */}
      <p className="w-20 text-[#BDEE2B] tracking-[0.5px] font-semibold text-[10px]">
        {status}
      </p>
    </div>
  );
}

export default function LiveStatusBadge() {
  return (
    <div
      className="flex items-center w-fit gap-x-2 py-[6px] px-3 bg-white border border-[#E7EAEE] 
        rounded-full text-xs font-medium text-[#0B111E]"
    >
      <div className="w-2 h-2 rounded-full bg-[#26AA5E]"></div>
      <div>Live across the city - 2400+ deliveries today</div>
    </div>
  );
}

export default function ForMoversStepItem({
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
    <div className="flex items-center gap-x-3 min-[381px]:gap-x-4">
      <div className="w-10 min-[381px]:w-12 h-10 min-[381px]:h-12 bg-[#D9D9FB] rounded-xl min-[381px]:rounded-2xl flex items-center justify-center">
        <Icon className="text-[#0D0D2F] h-4 min-[381px]:h-5 w-4 min-[381px]:w-5" />
      </div>
      <div className="flex flex-col gap-y-[3px] flex-1">
        <h2 className="text-xs font-semibold">STEP {step}</h2>
        <h1 className="text-white text-base min-[381px]:text-lg font-semibold">
          {heading}
        </h1>
        <p className="text-sm">{desc}</p>
      </div>
    </div>
  );
}

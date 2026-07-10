import Image from "next/image";

export default function SendPackageCard() {
  return (
    <div className="flex items-center justify-between w-full bg-[#FBF9F4] rounded-3xl px-10">
      <div>
        <h3 className="text-[#5A687C] text-xs font-semibold">
          SEND IN 4 STEPS
        </h3>
        <h1 className="text-[#0B111E] ">Send packages with ease</h1>
      </div>
      <div>
        <Image
          src="/images/person-holding-phone.png"
          alt="Image of person holding a phone"
          width={898}
          height={479.7}
        />
      </div>
    </div>
  );
}

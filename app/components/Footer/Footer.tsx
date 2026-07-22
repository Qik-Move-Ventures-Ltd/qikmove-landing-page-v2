import Image from "next/image";

export default function Footer() {
  return (
    <div className="bg-white text-white pb-8 px-12">
      <div className="pt-20 pb-14 bg-[#2D2D9D] rounded-3xl flex flex-col items-center justify-center">
        <h2 className="mb-[15px] text-6xl font-bold tracking-[-3px]">
          Start sending packages today
        </h2>
        <p className="text-lg tracking-[0%] leading-7">
          Join thousands moving smarter across the city.
        </p>
        <p className="text-lg tracking-[0%] leading-7">
          Download the app or sign up as a mover.
        </p>
        <div className="mt-6">
          <div className="flex items-center gap-x-[11px]">
            <Image
              src="/icons/Google_Play_Store_badge_EN.svg"
              alt="Google playstore badge"
              width={148.5}
              height={44}
            />
            <Image
              src="/icons/App_store_badge_dark.svg"
              alt="Apple app store badge"
              width={132}
              height={44}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

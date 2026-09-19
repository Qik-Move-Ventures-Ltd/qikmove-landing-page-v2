import Image from "next/image";
import Link from "next/link";

export default function CtaSection() {
  return (
    <div className="bg-white text-white pb-8 px-3 min-[386px]:px-5 min-[417px]:px-8 min-[636px]:px-12">
      <div
        className="pt-10 min-[465px]:pt-20 pb-14  px-[14px] min-[386px]:px-2 min-[417px]:px-6 text-center bg-[#2D2D9D] 
      rounded-3xl flex flex-col items-center justify-center"
      >
        <h2 className="mb-[5px] min-[417px]:mb-[15px] text-xl min-[417px]:text-2xl min-[465px]:text-3xl min-[558px]:text-4xl min-[851px]:text-5xl min-[1025px]:text-6xl font-bold tracking-normal min-[558px]:tracking-[-3px]">
          Start sending packages today
        </h2>
        <p className=" text-sm min-[417px]:text-md min-[465px]:text-base min-[558px]:text-lg tracking-[0%] leading-7">
          Join thousands moving smarter across the city.
        </p>
        <p className="text-sm min-[417px]:text-md min-[465px]:text-base min-[558px]:text-lg tracking-[0%] leading-7">
          Download the app or sign up as a mover.
        </p>
        <div className="mt-3 min-[417px]:mt-6">
          <div className="flex items-center gap-x-[11px]">
            <a
              href="https://play.google.com/store/apps/details?id=com.qikmove.app"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
            >
              <Image
                src="/icons/Google_Play_Store_badge_EN.svg"
                alt="Google playstore badge"
                width={148.5}
                height={44}
                className="h-auto w-[110px] min-[330px]:w-[130px]  min-[755px]:w-[148.5px]"
              />
            </a>
            <Image
              src="/icons/App_store_badge_dark.svg"
              alt="Apple app store badge"
              width={132}
              height={44}
              className="h-auto w-[100px] min-[330px]:w-[120px]  min-[755px]:w-[132px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

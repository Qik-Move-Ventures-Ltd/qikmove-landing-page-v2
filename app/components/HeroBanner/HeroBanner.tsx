import Image from "next/image";
import Link from "next/link";
import FloatingNotificationCard from "./FloatingNotificationCard";
import LiveStatusBadge from "./LiveStatusBadge";

export default function HeroBanner() {
  return (
    <section
      className=" mt-20 pl-[20px] min-[522px]:pl-[50px] min-[1107px]:pl-[60px] box-border
      bg-linear-to-tr from-[#FBF9F4] from-50% to-[#3838C557] flex flex-col 
      min-[1000px]:flex-row items-center min-[1000px]:items-start justify-between"
    >
      {/* Hero Content */}
      <div className="mt-10 min-[665px]:mt-20 pt-5 w-full">
        {/* Live status badge */}
        <LiveStatusBadge />
        {/* Hero Heading */}
        <h1
          className="text-[#0B111E] font-bold text-3xl min-[522px]:text-4xl min-[653px]:text-5xl 
          min-[1360px]:text-6xl min-[1507px]:text-7xl
         mt-6 min-[1059px]:mt-8 pr-15 min-[502px]:pr-30 min-[621px]:pr-50"
        >
          Send packages across the city{" "}
          <span className="underline decoration-5 decoration-[#3838C5]">
            in minutes.
          </span>
        </h1>
        {/* Hero Description */}
        <p
          className="mt-4 min-[1059px]:mt-6 min-[1360px]:mt-8 pr-15 min-[502px]:pr-30 min-[621px]:pr-50 text-[#5A687C] 
        text-base min-[653px]:text-lg min-[1164px]:text-xl "
        >
          Qikmove connects you with trusted dispatch riders for fast, secure
          intra-city deliveries. Track in real time.
        </p>
        {/* App store badges */}
        <div className="mt-3 min-[1059px]:mt-5 flex items-center gap-x-2">
          <Link href="" className="cursor-pointer">
            <Image
              src="/icons/google-play-store-badge.svg"
              alt="Google play store badge"
              width={148.5}
              height={44}
              className="w-[130px] min-[375px]:w-[148.5px] h-auto"
            />
          </Link>
          <Link href="" className="cursor-pointer">
            <Image
              src="/icons/apple-app-store-badge.svg"
              alt="Apple App Store badge"
              width={132}
              height={44}
              className="w-[110px] min-[375px]:w-[132px] h-auto"
            />
          </Link>
        </div>
      </div>
      {/* Hero Image */}
      <div className="relative w-fit">
        {/* <div className="absolute bottom-0 right-0 w-full h-full  bg-linear-to-tl from-[#FBF9F4] from-1% to-transparent z-30"></div> */}
        <div
          className="absolute inset-x-0 bottom-0 h-[300px] bg-gradient-to-b from-transparent 
        from-1% to-white"
        ></div>
        <FloatingNotificationCard />
        <Image
          src="/images/mockup-of-female-hand-holding-iPhone-14-pro.png"
          alt="Hero image"
          className="object-cover pt-10 min-[1000px]:pt-20"
          width={642}
          height={640}
          priority
        />
      </div>
    </section>
  );
}

import Image from "next/image";

export default function SimpleDeliverySection() {
  return (
    <div
      className="flex-1 max-w-[560px] flex flex-col box-border justify-between bg-white h-[600px]
     rounded-[20px] p-5 min-[370px]:p-6 min-[430px]:p-8"
    >
      <div
        className="bg-[#D9D9FB] rounded-[20px] flex items-end justify-center h-fit min-[464px]:h-[410px] pt-6 min-[486px]:pt-2 min-[1100px]:pt-5 
      min-[1308px]:pt-[46.7px] px-5 min-[1109px]:px-8 box-border"
      >
        <Image
          src="/images/half-edited-phone(1).png"
          alt="A phone opened to the send package section of the Qikmove app."
          width={330.22}
          height={363.3}
          className="rounded-[20px]"
        />
      </div>
      <div className="flex flex-col mt-2 min-[420px]:mt-1 gap-y-0 min-[1308px]:gap-y-2 justify-between">
        <h2 className="text-[#0B111E] tracking-[-2px] font-bold text-[28px] min-[1440px]:text-[32px]">
          Simple delivery for every day needs
        </h2>
        <p className="text-[#5A687C]">
          Send one or muliple packages with ease, track every delivery in
          real-time, and enjoy secure, hassle-free drop-offs.{" "}
        </p>
      </div>
    </div>
  );
}

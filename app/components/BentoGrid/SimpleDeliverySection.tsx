import Image from "next/image";

export default function SimpleDeliverySection() {
  return (
    <div className="flex-1 flex flex-col box-border gap-y-8 bg-white h-[600px] rounded-[20px] p-8">
      <div className="bg-[#D9D9FB] rounded-[20px] flex items-end justify-center h-[410px]">
        <Image
          src="/images/half-edited-phone(1).png"
          alt="A phone opened to the send package section of the Qikmove app."
          width={330.22}
          height={363.3}
        />
      </div>
      <div className="flex flex-col gap-y-2 justify-between">
        <h2 className="text-[#0B111E] tracking-[-2px] font-bold text-[32px]">
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

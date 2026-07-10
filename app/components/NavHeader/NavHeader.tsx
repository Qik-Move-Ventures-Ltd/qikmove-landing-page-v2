import Image from "next/image";
import LinkItem from "./LinkItem";
import Link from "next/link";

export default function NavHeader() {
  return (
    <header className=" fixed inset-0 bg-white z-1000 h-20 w-full px-12 py-5 shadow-md flex items-center justify-between">
      <Image
        src="/icons/qikmove-brand-logo.svg"
        alt="Qikmove Logo"
        width={181.51}
        height={31.83}
      />
      <nav className="flex items-center gap-x-8">
        <LinkItem link="" navItemTitle="How it works" />
        <LinkItem link="" navItemTitle="Features" />
        <LinkItem link="" navItemTitle="For movers" />
      </nav>

      <div className="flex items-center gap-x-[11px]">
        <Link href="" className="cursor-pointer">
          <Image
            src="/icons/google-play-store-badge.svg"
            alt="Google Playstore badge"
            width={135}
            height={40}
          />
        </Link>
        <Link href="" className="cursor-pointer">
          <Image
            src="/icons/apple-app-store-badge.svg"
            alt="Apple App Store badge"
            width={120}
            height={40}
          />
        </Link>
      </div>
    </header>
  );
}

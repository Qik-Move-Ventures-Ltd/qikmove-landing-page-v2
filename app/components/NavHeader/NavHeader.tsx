import Image from "next/image";
import LinkItem from "./LinkItem";
import Link from "next/link";
import MobileNav from "./MobileNav";

export default function NavHeader() {
  return (
    <>
      <header
        className="hidden min-[960px]:flex fixed inset-0 bg-white z-[100] h-20 w-full px-12 py-5 shadow-md  
    items-center justify-between"
      >
        <Link href="/#hero">
          <Image
            src="/icons/qikmove-brand-logo.svg"
            alt="Qikmove Logo"
            width={181.51}
            height={31.83}
            priority
          />
        </Link>
        <nav className="flex items-center gap-x-8">
          <LinkItem link="/#how-it-works" navItemTitle="How it works" />
          <LinkItem link="/#features" navItemTitle="Features" />
          <LinkItem link="/#use-cases" navItemTitle="Use cases" />
          <LinkItem link="/contact-us" navItemTitle="Contact us" />
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

      {/* Mobile Nav */}
      <MobileNav />
    </>
  );
}

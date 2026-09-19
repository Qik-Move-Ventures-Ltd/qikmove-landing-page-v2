"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import LinkItem from "./LinkItem";
import XIcon from "../icons/XIcon";

export default function SideNavOverlay({
  onSetIsOpen,
}: {
  onSetIsOpen: (val: boolean) => void;
}) {
  return (
    <>
      <motion.div
        className="fixed inset-0 bg-black/25 cursor-pointer "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        onClick={() => onSetIsOpen(false)}
      />
      <motion.nav className="fixed inset-y-0 right-0 bg-white w-[80%] min-[378px]:w-[75%] min-[456px]:w-[65%] flex flex-col gap-y-5 px-10 py-8 z-[200]">
        <div className="w-full flex items-center justify-end">
          <XIcon
            className="w-6 min-[560px]:w-8 h-6 min-[560px]:h-8 text-[#0B111E] cursor-pointer"
            onClick={() => onSetIsOpen(false)}
          />
        </div>
        <ul className="w-full flex flex-col items-start gap-y-5">
          <LinkItem link="/#how-it-works" navItemTitle="How it works" />
          <LinkItem link="/#features" navItemTitle="Features" />
          <LinkItem link="/#use-cases" navItemTitle="Use cases" />
          <LinkItem link="/contact-us" navItemTitle="Contact us" />
          <a
            href="https://play.google.com/store/apps/details?id=com.qikmove.app"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer"
          >
            <Image
              src="/icons/Google_Play_Store_badge_EN.svg"
              alt="Google Playstore badge"
              width={135}
              height={40}
            />
          </a>
          <Link href="" className="cursor-pointer">
            <Image
              src="/icons/apple-app-store-badge.svg"
              alt="Apple App Store badge"
              width={120}
              height={40}
            />
          </Link>
        </ul>
      </motion.nav>
    </>
  );
}

"use client";
import Image from "next/image";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import BurgerMenuButton from "../ui/BurgerMenuButton";
import SideNavOverlay from "./SideNavOverlay";
import Link from "next/link";

export default function MobileNav() {
  const [IsOpen, setIsOpen] = useState(false);

  return (
    <div
      className=" flex min-[960px]:hidden fixed inset-0 bg-white z-[100] h-20 w-full px-4 min-[375px]:px-6 min-[565px]:px-8 min-[735px]:px-12 py-5 shadow-md flex 
    items-center justify-between"
    >
      <Link href="#hero">
        <Image
          src="/icons/qikmove-brand-logo.svg"
          alt="Qikmove Logo"
          width={181.51}
          height={31.83}
          className="aspect-[181.51/31.83] w-[140px] min-[375px]:w-[160px] min-[420px]:w-[181.51px] h-auto"
          priority
        />
      </Link>

      <BurgerMenuButton
        className="w-8 min-[375px]:w-10 min-[400px]:w-12 min-[565px]:w-14 h-8 min-[375px]:h-10 min-[400px]:h-12 min-[565px]:h-14 fill-[#0B111E] cursor-pointer"
        onClick={() => setIsOpen(true)}
      />
      <AnimatePresence>
        {IsOpen && <SideNavOverlay onSetIsOpen={setIsOpen} />}
      </AnimatePresence>
    </div>
  );
}

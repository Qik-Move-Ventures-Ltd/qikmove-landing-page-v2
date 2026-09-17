import Link from "next/link";

export default function Footer() {
  return (
    <div className="mx-auto px-12 pb-8 pt-15 text-[#5A687C]">
      <div className="flex flex-col items-center justify-center gap-2 text-xs">
        <p>© 2026 QikMove. All rights reserved.</p>
        <p>Enugu State, Nigeria</p>
        <Link
          href="/privacy"
          className="hover:text-[#0B111E] cursor-Linkointer"
        >
          Privacy Policy
        </Link>
      </div>
    </div>
  );
}

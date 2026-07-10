import Link from "next/link";

export default function LinkItem({
  link,
  navItemTitle,
}: {
  link: string;
  navItemTitle: string;
}) {
  return (
    <Link
      href={link}
      className="font-medium text-base text-[#5A687C] hover:text-[#3838C557]"
    >
      {navItemTitle}
    </Link>
  );
}

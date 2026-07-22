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
      className="font-medium text-lg min-[492px]:text-xl min-[960px]:text-base text-[#5A687C] hover:text-[#3838C557]"
    >
      {navItemTitle}
    </Link>
  );
}

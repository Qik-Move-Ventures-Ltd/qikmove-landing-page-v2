import React from "react";

export default function SocialCard({
  socialBgColor,
  socialNetwork,
  username,
  socialIcon,
  link,
}: {
  socialBgColor: string;
  socialNetwork: string;
  username: string;
  socialIcon: React.ReactNode;
  link: string;
}) {
  return (
    <div className="py-3 px-2 border border-[#E4E4E7] rounded-xl flex items-center gap-3">
      <div
        className={`w-10 h-10 rounded-full ${socialBgColor} flex items-center justify-center`}
      >
        {socialIcon}
      </div>
      <div>
        <p className="text-[#17171C] text-sm">{socialNetwork}</p>
        <a
          href={`${link}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#6D6D78] text-xs cursor-pointer"
        >
          {username}
        </a>
      </div>
    </div>
  );
}

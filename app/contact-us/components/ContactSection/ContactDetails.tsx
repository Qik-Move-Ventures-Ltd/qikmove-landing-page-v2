import EmailIcon from "../../../components/icons/EmailIcon";
import InstagramIcon from "../../../components/icons/InstagramIcon";
import { LinkedInIcon } from "../../../components/icons/LinkedInIcon";
import TiktokIcon from "../../../components/icons/TiktokIcon";
import TwitterIcon from "../../../components/icons/TwitterIcon";
import SocialCard from "./SocialCard";

export default function ContactDetails() {
  return (
    <div className="">
      <div className="mb-12">
        <h2 className="mb-3 text-[#1D1F1E] text-2xl min-[420px]:text-3xl min-[545px]:text-5xl font-semibold">
          Contact us
        </h2>
        <p className="text-[#646A69] text-lg">
          We are here to help you make a first move to greener choice.
        </p>
      </div>
      <p className="flex gap-2 items-center">
        <span>
          <EmailIcon className="w-5 h-5 text-[#022C22]" />
        </span>
        <span className="text-[#0B111E]">support@qikmove.app</span>
      </p>
      <div className="grid grid-cols-1 min-[360px]:grid-cols-2 min-[510px]:grid-cols-3 min-[654px]:grid-cols-4 mt-12 gap-3">
        <SocialCard
          socialIcon={<TwitterIcon className="w-5 h-5 text-[#0284C7]" />}
          socialBgColor="bg-[#F0F9FF]"
          socialNetwork="Twitter / X"
          link="https://x.com/qikmove_?s=11"
          username="@qikmove_"
        />
        <SocialCard
          socialIcon={<InstagramIcon className="w-5 h-5 text-[#DB2777]" />}
          socialBgColor="bg-[#FDF2F8]"
          socialNetwork="Instagram"
          link=" https://www.instagram.com/qikmove_?igsh=YXcxYm84N21uNWZh&utm_source=qr"
          username="@qikmove_"
        />
        <SocialCard
          socialIcon={<TiktokIcon className="text-[#363538] w-5 h-5" />}
          socialBgColor="bg-[#EFF6FF]"
          socialNetwork="Tiktok"
          link=" https://www.tiktok.com/@qikmove_?_r=1&_t=ZS-97byJh01T5E"
          username="qikmove_"
        />
        <SocialCard
          socialIcon={<LinkedInIcon className="text-[#4F46E5] w-5 h-5" />}
          socialBgColor="bg-[#EEF2FF]"
          socialNetwork="LinkedIn"
          link=" https://www.linkedin.com/company/qikmove/?viewAsMember=true"
          username="QikMove"
        />
      </div>
    </div>
  );
}

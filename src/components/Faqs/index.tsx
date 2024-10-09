import React from "react";
import Image from "next/image";
import bgleft from "@/public/images/bgleftfaq.png";
import bgright from "@/public/images/bgrightfaq.png";
import arrowback from "@/public/images/arrowback.svg";
import intsa from "@/public/images/insta.svg";
import email from "@/public/images/email.svg";
import Questions from "./Questions";
const Faqs = () => {
  return (
    <div className="flex justify-center px-5">
      <div className="w-full max-w-[1328px] relative my-20 min-h-[500px]">
        <Image
          className="absolute z-0 lefto-0 top-0"
          src={bgleft}
          alt=""
          width={468}
          height={753.68}
        />
        <Image
          className="absolute z-0 right-0 bottom-0"
          src={bgright}
          alt=""
          width={468}
          height={673.68}
        />
        <div className="w-full p-10 relative z-10">
          <button className="w-[68px] h-[29px] flex  items-center justify-center text-[#888888] text-[14px] font-sofiapro gap-[6px] border-[1px] border-[#888888] rounded-[4px]">
            <Image src={arrowback} alt="" /> Back
          </button>
          <h1 className="text-[32px] font-foghe font-normal text-graish  leading-[38.4px] mt-6 mb-4">
          Get in touch
          </h1>

          <div className="flex flex-wrap justify-between items-center px-5 h-[60px] border-[1px] border-[#888888] rounded-[4px] w-full ">
            <p className="text-[14px] text-center font-sofiapro font-normal text-[#888888]">
            Don&apos;t hesitate to reach out if you have any questions.
            </p>
            <div className=" flex  gap-[16px]">
              <div className="border-[1px] border-[#3D3D3D] rounded-[4px] flex items-center justify-center gap-[6px] px-2 py-1">
                <Image src={intsa} alt="" width={14} height={14} />
                <p className="text-[14px] text-graish font-sofiapro font-normal">
                  crumbs.fund
                </p>
              </div>
              <div className="border-[1px] border-[#3D3D3D] rounded-[4px] flex items-center justify-center gap-[6px] px-2 py-1">
                <Image src={email} alt="" width={14} height={14} />
                <p className="text-[14px] text-graish font-sofiapro font-normal">
                crumbs.team01@gmail.com
                </p>
              </div>
            </div>


          </div>

          <div className="gradient-line my-12"></div>

<Questions/>
        </div>
      </div>
    </div>
  );
};

export default Faqs;

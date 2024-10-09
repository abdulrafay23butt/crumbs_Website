import React from "react";
import Image from "next/image";
import bgleft from "@/public/images/leftbg.png";
import bgright from "@/public/images/rightgadient.png";
import star from "@/public/images/star.svg";
import thunder from "@/public/images/thunder.svg";
import pencil from "@/public/images/pencil.svg";
// import MarqueeFirst from "../Marquee/MarqueeFirst";
import CustomMarquee from "../Marquee/MarqueeFirst";
const Hero = () => {
  return (
    <>
      <hr className="h-[0.5px] opacity-20 bg-[#F6F6F6]" />

      <div className="flex justify-center px-5">
        <div className="w-full max-w-[1328px] relative my-20 min-h-[500px]">
          <Image
            className="absolute lefto-0 top-0 opacity-50"
            src={bgleft}
            alt=""
            width={508}
            height={262}
          />
          <Image
            className="absolute right-0 bottom-0 opacity-50"
            src={bgright}
            alt=""
            width={508}
            height={262}
          />
          <div className="flex flex-wrap relative items-center justify-between  z-10 h-full">
            <div className="flex-col pl-10 mob:pl-2">
              <h1 className="text-[56px] font-foghe font-normal text-graish max-w-[459px] leading-[67.2px]">
                The First Step For Every Innovator
              </h1>
              <p className="text-[18px] font-sofiapro font-normal text-[#888888]  mt-4 mb-6">
                Share every step of your journey and inspire others to support
                your vision
              </p>

              <div className="flex gap-[6px]">
                <Image src={star} alt="star" width={20} height={20} />
                <p className="text-[24px] font-sofiapro font-normal text-[#F6F6F6]  ">
                  Share your journey through social content
                </p>
              </div>
              <div className="flex gap-[6px]">
                <Image src={thunder} alt="star" width={20} height={20} />
                <p className="text-[24px] font-sofiapro font-normal text-[#F6F6F6] ">
                  Inspire new people to support you
                </p>
              </div>
              <div className="flex gap-[6px]">
                <Image src={pencil} alt="star" width={20} height={20} />
                <p className="text-[24px] font-sofiapro font-normal text-[#F6F6F6] ">
                  Turn your ideas into reality
                </p>
              </div>
            </div>

            <div className="flex-col mob:hidden">
              <div className="flex max-w-[200px]">
                <CustomMarquee
                  height="500px"
                  width="100%"
                  speed={50}
                  direction="up"
                >
                  {/* Items inside the marquee as children */}
                  <div className="bg-gray-200 p-4 text-center w-full">
                    Item 1
                  </div>
                  <div className="bg-gray-200 p-4 text-center w-full">
                    Item 2
                  </div>
                  <div className="bg-gray-200 p-4 text-center w-full">
                    Item 3
                  </div>
                  <div className="bg-gray-200 p-4 text-center w-full">
                    Item 4
                  </div>
                  <div className="bg-gray-200 p-4 text-center w-full">
                    Item 5
                  </div>
                  <div className="bg-gray-200 p-4 text-center w-full">
                    Item 1
                  </div>
                  <div className="bg-gray-200 p-4 text-center w-full">
                    Item 2
                  </div>
                  <div className="bg-gray-200 p-4 text-center w-full">
                    Item 3
                  </div>
                  <div className="bg-gray-200 p-4 text-center w-full">
                    Item 4
                  </div>
                </CustomMarquee>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;

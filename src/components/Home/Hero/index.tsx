import React from "react";
import Image from "next/image";
import bgleft from "@/public/images/leftbg.png";
import bgright from "@/public/images/rightgadient.png";
import star from "@/public/images/star.svg";
import thunder from "@/public/images/thunder.svg";
import pencil from "@/public/images/pencil.svg";
import mob1 from "@/public/images/mob1.png";
// import MarqueeFirst from "../Marquee/MarqueeFirst";
import CustomMarquee from "../Marquee/MarqueeFirst";
const Hero = () => {
  return (
    <>
      <hr className="h-[0.5px] opacity-20 bg-[#3D3D3D]" />

      <div className="flex justify-center px-5 mob:px-3">
        <div className="w-full max-w-[1328px] relative my-20 min-h-[500px] overflow-hidden">
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
          <div className="flex flex-wrap  items-center justify-between  z-10 h-full ">
            <div className="flex-col pl-10 mob:px-3 mob:py-4 relative z-10">
              <h1 className="text-[56px] mob:text-[50px] font-foghe font-normal text-graish max-w-[459px] leading-[67.2px] mob:leading-[60.2px]">
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

            <div className="flex-col tab:hidden">
          <div className="gradient-line absolute right-0 top-[42px] max-w-[400px]"></div>
          <div className="gradient-line absolute right-0 bottom-[35px] max-w-[400px]"></div>
              
              <div className="flex absolute left-[50%] w-[800px] top-5 ">

                <CustomMarquee
                  height="440px"
               width="800px"
                  speed={50}
                  direction="up"
                >
                  {/* Items inside the marquee as children */}
                  <Image
                    className="m-28 relative w-[200px]"
                    src={mob1}
                    alt=""
                    width={200}
                    height={412}
                  />
                  <Image
                    className="m-28 relative w-[200px]"
                    src={mob1}
                    alt=""
                    width={200}
                    height={412}
                  />
                  <Image
                    className="m-28 relative w-[200px]"
                    src={mob1}
                    alt=""
                    width={200}
                    height={412}
                  />
                </CustomMarquee>
              </div>
              <div className="flex absolute left-[67%] w-[800px] top-5">
                <CustomMarquee
                  height="440px"
                  width="800px"
                  speed={50}
                  direction="down"
                >
                  {/* Items inside the marquee as children */}
                  <Image
                    className="m-28 relative w-[200px]"
                    src={mob1}
                    alt=""
                    width={200}
                    height={412}
                  />
                  <Image
                    className="m-28 relative w-[200px]"
                    src={mob1}
                    alt=""
                    width={200}
                    height={412}
                  />
                  <Image
                    className="m-28 relative w-[200px]"
                    src={mob1}
                    alt=""
                    width={200}
                    height={412}
                  />
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

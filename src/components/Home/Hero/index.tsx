import React from "react";
import Image from "next/image";
import bgleft from "@/public/images/leftbg.png";
import bgright from "@/public/images/rightgadient.png";
import star from "@/public/images/star.svg";
import thunder from "@/public/images/thunder.svg";
import pencil from "@/public/images/pencil.svg";
import mob1 from "@/public/images/Item.png";
import mob2 from "@/public/images/Item (1).png";
import mob3 from "@/public/images/Item (2).png";
import mob4 from "@/public/images/Item (3).png";
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
              <h1 className="text-[40px] mob:text-[50px] font-foghe font-normal text-graish max-w-[459px] leading-[67.2px] mob:leading-[60.2px]">
              Crumbs combines the best features of Kickstarter and Tik Tok
              </h1>
              <div className="flex gap-[6px]">
                <Image src={star} alt="star" width={20} height={20} />
                <p className="text-[20px] font-sofiapro font-normal text-[#F6F6F6]  ">
                Create Your Campaign:
                </p>
              </div>
              <div className="flex gap-[6px]">
                <p className="text-[16px] font-sofiapro font-normal text-[#F6F6F6]  ">
                Easily set up your page, share your story, and define your funding goals and rewards.
                </p>
              </div>
              <div className="flex gap-[6px]">
                <Image src={thunder} alt="star" width={20} height={20} />
                <p className="text-[20px] font-sofiapro font-normal text-[#F6F6F6] ">
                Engage Your Audience:
                </p>
              </div>
              <div className="flex gap-[6px]">
                <p className="text-[14px] font-sofiapro font-normal text-[#F6F6F6]  ">
                Use Crumbs integrated social media features to connect with supporters, share updates, and grow excitement.
                </p>
              </div>
              <div className="flex gap-[6px]">
                <Image src={pencil} alt="star" width={20} height={20} />
                <p className="text-[20px] font-sofiapro font-normal text-[#F6F6F6] ">
                Turn Support into Momentum:
                </p>
              </div>
              <div className="flex gap-[6px]">
                <p className="text-[14px] font-sofiapro font-normal text-[#F6F6F6]  ">
                Build social proof through comments, shares, and real-time engagement to attract new backers and build your community.
                </p>
              </div>
              <div className="flex gap-[6px]">
                <Image src={star} alt="star" width={20} height={20} />
                <p className="text-[20px] font-sofiapro font-normal text-[#F6F6F6] ">
                Fund Your Dream:
                </p>
              </div>
              <div className="flex gap-[6px]">
                <p className="text-[14px] font-sofiapro font-normal text-[#F6F6F6]  ">
                Watch your community grow, reach your funding goal, and bring your idea to life!
                </p>
              </div>
            </div>

            <div className="flex-col tab:hidden">
          <div className="gradient-line absolute right-0 top-[42px] max-w-[400px]"></div>
          <div className="gradient-line absolute right-0 bottom-[35px] max-w-[400px]"></div>
              <div className="flex absolute left-[49%] w-[800px] top-5 ">
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
                    src={mob2}
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
                    src={mob2}
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
                    src={mob3}
                    alt=""
                    width={200}
                    height={412}
                  />
                  <Image
                    className="m-28 relative w-[200px]"
                    src={mob4}
                    alt=""
                    width={200}
                    height={412}
                  />
                  <Image
                    className="m-28 relative w-[200px]"
                    src={mob3}
                    alt=""
                    width={200}
                    height={412}
                  />
                  <Image
                    className="m-28 relative w-[200px]"
                    src={mob4}
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

import React from "react";
import Image from "next/image";
import bgleft from "@/public/images/leftbg.png";
import bgright from "@/public/images/rightgadient.png";
const Hero = () => {
  return (
    <>
      <hr className="h-[0.5px] opacity-20 bg-[#F6F6F6]" />

      <div className="flex justify-center">
        <div className="w-full max-w-[1328px] relative my-20">
            <Image src={bgleft} alt="" width={608} height={362} />
            <Image src={bgleft} alt="" width={608} height={362} />
        </div>
      </div>
    </>
  );
};

export default Hero;

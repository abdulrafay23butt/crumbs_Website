import React from "react";

const JoinCommunity = () => {
  return (
    <>
      <h1 className="text-[32px] text-center font-foghe font-normal text-graish">
        Launch a campaign or support new ideas
      </h1>
      <p className="text-[16px] text-center font-sofiapro font-normal text-[#888888] mob:px-4">
        drop your email below to join our community. Our app is going live soon!
      </p>
      <div className="flex justify-center gap-[8px] mt-8 mb-12">
        <input
          className="w-full max-w-[239px] h-[40px] px-3 border-[1px] text-[#888888] bg-[#1C1C1C] border-[#888888]/90 rounded-[3px] placeholder:text-[#888888] placeholder:text-[14px] placeholder:font-foghe"
          type="text"
          placeholder="enter your email address"
        />
        <button className="bg-[#00FFE1] w-[98px] h-[41.2px] rounded-[4px] text-[#121212] font-sofiapro font-normal text-[14px] ">
          Sign up
        </button>
      </div>
    </>
  );
};

export default JoinCommunity;

import React from "react";
import image from "../Assets/Rectangle 6gtpix.png";
const Hero = () => {
  return (
    <div className="w-full h-full z-20 py-[4rem] space-y-8 space-x-14">
      <div className="left-[3.6rem] absolute w-[1240px] h-[540px]">
        <img
          src={image}
          alt="/"
          className=" w-full h-full object-cover mix-blend-overla"
        />
      </div>

      <div className="text-white pl-10 relative py-6">
        <div className="">
          <p className="text-[56px] w-[42rem] py-4">
            A world of great photo contests and awards, in one place.
          </p>
          <div>
            <p className="text-[24px] w-[30rem]">
              Enter contests to get your work seen around the world and win
              prizes.
            </p>
          </div>
        </div>

        {/* button */}
        <div className="py-10 flex space-y-5 space-x-20">
          <button className="px-20 py-4 bg-[#FFD523]  text-sm text-[#171717] rounded-[6px]">
            Create a photo contest
          </button>

          <div className="space-x-4 pl-[6rem]">
            <button className="rounded-full w-[24px] h-[24px] bg-white"></button>
            <button className="rounded-full w-[24px] h-[24px] border"></button>
            <button className="rounded-full w-[24px] h-[24px] border"></button>
            <button className="rounded-full w-[24px] h-[24px] border"></button>
          </div>
        </div>
      </div>

      {/*  */}
      <div className="">
        <p className="h-[1px] bg-[#171717] w-[1240px]" />
      </div>
    </div>
  );
};

export default Hero;

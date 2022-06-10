import React from "react";
import image from "../Assets/Rectangle 6gtpix.png";
const Hero = () => {
  return (
    <div className="py-[3.1rem]">
      <div className="px-4 sm:space-y-10 space-y-8">
        {/*  */}

        <div className="w-full relative py-2">
          <img
            src={image}
            alt="/"
            className="w-full sm:h-[546px] h-[18.3rem] object-cover mix-blend-overlay"
          />
        </div>

        {/*  */}

        <div className="absolute top-[12%] text-white space-y-6 px-8">
          <div className="">
            <h1 className="sm:text-[56px] sm:w-[42rem] ">
              A world of great photo contests and awards, in one place.
            </h1>
            <p className="text-base sm:text-[24px] sm:w-[30rem] ">
              Enter contests to get your work seen around the world and win
              prizes.
            </p>
          </div>

          {/* button */}

          <div className="sm:flex sm:py-12 justify-between items-center ">
            <button className=" md:px-8 md:py-3 py-2 px-4 bg-[#FFD523] text-sm text-[#171717] rounded-[6px]">
              Create a photo contest
            </button>

            {/*  */}

            <div className=" md:space-x-4 space-x-2 text-center py-4">
              <button className="rounded-full w-[14px] h-[14px] md:w-[24px] md:h-[24px] bg-white"></button>
              <button className="rounded-full w-[14px] h-[14px] md:w-[24px] md:h-[24px] border border-white"></button>
              <button className="rounded-full w-[14px] h-[14px] md:w-[24px] md:h-[24px] border border-white"></button>
              <button className="rounded-full w-[14px] h-[14px] md:w-[24px] md:h-[24px] border border-white"></button>
            </div>
          </div>
        </div>

        {/*  */}

        <div className="pt-6">
          <p className="h-[1px] border border-[#171717] w-full" />
        </div>
      </div>
    </div>
  );
};
export default Hero;


import React from "react";
import Image from "../Assets/Rectangle 5.jpg";

const Story = () => {
    return (
      <div className="lg:flex md:flex sm:flex lg:px-4 justify-around lg:justify-around lg:py-6 py-10 ">
        <div className="">
          <img src={Image} alt="/" className=" w-full h-[521px]" />
        </div>

        <div className="py-10 space-y-10">
          <h1 className="text-2xl font-bold">Our Story</h1>
          <div>
            <p className="lg:text -xl lg:w-[539.58px] md:w-[290px] sm:w-[230px] w-full md:h-[355px]">
              Join millions of other creatives across the world in sharing your
              finest photographs and collaborating. ViewBug is a community for
              photographers of all abilities. Whether you shoot portraiture,
              travel, lifestyle, or landscapes, ViewBug is the place for you.
              Follow your favorite photographers, enter the greatest contests,
              and start your own hallenges to celebrate creativity and be
              inspired. Welcome to the new home for your photographs, and thank
              you for being a member of the most rewarding community.
            </p>
          </div>
        </div>
      </div>
    );
};

export default Story;
import React from "react";
import Image from "../Assets/Ellipse 5.jpg";
import Image1 from "../Assets/Ellipse 6.jpg";
import Image2 from "../Assets/Ellipse 7.png";

const CustomersReviews = () => {
  return (
    <div className="px-4">
      <div className="text-center ">
        <h1 className="sm:text-4xl font-bold">Customers Reviews</h1>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 py-10 mx-auto gap-3">
        <div className="border bg-[#2C2E43] text-white w-full h-[460px] lg:px-3 md:px-[1.5rem] px-[2rem] py-12  rounded-[20px]">
          {/* IMAGE */}
          <div className="flex space-x-10 space-y-12">
            <img src={Image} alt="" className="rounded-full " />
            <div className="">
              <p>Ben Parker</p>
            </div>
          </div>

          {/* CONTENT */}

          <div className="w-[325px] mx-auto h-[220px]">
            <p className="text-xl text-center pt-12">
              Join millions of other creatives across the world in sharing your
              finest photographs and collaborating. ViewBug is a community for
              photographers of all abilities. Whether you shoot portraiture,
              trav
            </p>
          </div>
        </div>
        <div className="border bg-[#2C2E43] text-white w-full h-[460px] lg:px-3 md:px-[1.5rem] px-[2rem] py-12  rounded-[20px]">
          {/* IMAGE */}
          <div className="flex space-x-10 space-y-12">
            <img src={Image1} alt="" className="rounded-full " />
            <div className="">
              <p>Michael Dam</p>
            </div>
          </div>

          {/* CONTENT */}

          <div className="w-[325px] mx-auto h-[220px]">
            <p className="text-xl text-center pt-12">
              Join millions of other creatives across the world in sharing your
              finest photographs and collaborating. ViewBug is a community for
              photographers of all abilities. Whether you shoot portraiture,
              trav
            </p>
          </div>
        </div>
        <div className="border bg-[#2C2E43] text-white w-full h-[460px] lg:px-3 md:px-[1.5rem] px-[2rem] py-12  rounded-[20px]">
          {/* IMAGE */}
          <div className="flex space-x-10 space-y-12">
            <img src={Image2} alt="" className="rounded-full " />
            <div className="">
              <p>Prince Akachi</p>
            </div>
          </div>

          {/* CONTENT */}

          <div className="w-[325px] mx-auto h-[220px]">
            <p className="text-xl text-center pt-12">
              Join millions of other creatives across the world in sharing your
              finest photographs and collaborating. ViewBug is a community for
              photographers of all abilities. Whether you shoot portraiture,
              trav
            </p>
          </div>
        </div>
      </div>

      {/*  */}
      <div className="space-x-4 text-center py-6">
        <button className="rounded-full w-[24px] h-[24px] bg-[#2C2E43]"></button>
        <button className="rounded-full w-[24px] h-[24px] border border-[#2C2E43]"></button>
        <button className="rounded-full w-[24px] h-[24px] border border-[#2C2E43]"></button>
        <button className="rounded-full w-[24px] h-[24px] border border-[#2C2E43]"></button>
      </div>

      {/*  */}
      <div className="py-8">
        <p className="h-[1px] border border-[#171717] w-full" />
      </div>
    </div>
  );
};

export default CustomersReviews;

  
 

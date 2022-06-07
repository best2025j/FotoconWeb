import React from "react";
import Image from "../Assets/Ellipse 5.jpg";
import Image1 from "../Assets/Ellipse 6.jpg";
import Image2 from "../Assets/Ellipse 7.png";

const CustomersReviews = () => {
  return (
    <div className="px-[3.3rem] w-full">
      <h1 className="text-center text-4xl">Customers Reviews</h1>
      {/* GRID */}
      <div className="grid grid-cols-3 py-12 space-x-3">
        <div className="border bg-[#2C2E43] text-white w-[400px] h-[500px] px-[2.6rem] py-12  rounded-[20px]">
          {/* IMAGE */}
          <div className="flex space-x-10 space-y-12">
            <img src={Image} alt="" className="rounded-full h" />
            <div className="">
              <p>Ben Parker</p>
            </div>
          </div>
          {/* CONTENT */}
          <div className="w-[325px] h-[220px]">
            <p className="text-xl text-center pt-12">
              Join millions of other creatives across the world in sharing your
              finest photographs and collaborating. ViewBug is a community for
              photographers of all abilities. Whether you shoot portraiture,
              trav
            </p>
          </div>
        </div>

        {/*  */}

        <div className="border bg-[#2C2E43] text-white w-[400px] h-[500px] px-10 py-12  rounded-[20px]">
          {/* IMAGE */}
          <div className="flex space-x-10 space-y-12">
            <img src={Image1} alt="" className="rounded-full h" />
            <div className="">
              <p>Michael Dam</p>
            </div>
          </div>
          {/* CONTENT */}
          <div className="w-[325px] h-[220px]">
            <p className="text-xl text-center pt-12">
              Join millions of other creatives across the world in sharing your
              finest photographs and collaborating. ViewBug is a community for
              photographers of all abilities. Whether you shoot portraiture,
              trav
            </p>
          </div>
        </div>

        {/*  */}

        <div className="border bg-[#2C2E43] text-white w-[400px] h-[500px] px-10 py-12  rounded-[20px]">
          {/* IMAGE */}
          <div className="flex space-x-10 space-y-12">
            <img src={Image2} alt="" className="rounded-full h" />
            <div className="">
              <p>Prince Akachi</p>
            </div>
          </div>
          {/* CONTENT */}
          <div className="w-[325px] h-[220px]">
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
      <div className="space-x-4 text-center py-10">
        <button className="rounded-full w-[24px] h-[24px] bg-[#2C2E43]"></button>
        <button className="rounded-full w-[24px] h-[24px] border border-[#2C2E43]"></button>
        <button className="rounded-full w-[24px] h-[24px] border border-[#2C2E43]"></button>
        <button className="rounded-full w-[24px] h-[24px] border border-[#2C2E43]"></button>
      </div>
      {/*  */}
      <div className="py-10">
        <p className="h-[1px] bg-[#171717] w-[1248px]" />
      </div>
    </div>
  );
};

export default CustomersReviews;

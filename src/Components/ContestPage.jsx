import React from "react";
import Navbar from "./Navbar";
import image from "../Assets/Rectangle 7.jpg";
import image2 from "../Assets/Rectangle 12.png";
import image3 from "../Assets/Rectangle 12(1).png";
import FacebookIcon from "../svg/FacebookIcon";
import GoogleIcon from "../svg/GoogleIcon";
import InstagramIcon from "../svg/InstagramIcon";
import TwitterIcon from "../svg/TwitterIcon";

const ContestPage = () => {
  return (
    <div className="">
      <Navbar />
      <div className="sm:py-[5rem] py-[3.4rem] px-4 space-y-10">
        <h1 className="text-center sm:font-medium sm:text-3xl font-bold">
          Contest
        </h1>

        {/*  */}
        <div className="sm:flex sm:py-6 py-2">
          <div>
            <img src={image} alt="" className="" />
          </div>

          {/* FLEX 2   */}
          <div className="sm:px-[4rem] space-y-4">
            <div className="space-y-2 py-2">
              <h1 className="text-base">Photography</h1>
              <h2 className="text-4xl">Best Photographer</h2>
            </div>

            {/*  */}
            <h6>1 week, 2 days left to enter</h6>
            <h6>3,998 photos entered</h6>
            <h6>2,440 photographers</h6>
            <h6>Created by Destiny Destiny</h6>

            {/*  */}
            <div className="">
              <div className="flex ">
                {/*  */}
                {/* WHITE START */}
                <svg
                  width="24"
                  height="22"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.363 2L15.9636 8.97115L23.6098 10.2918L18.1888 15.9208L19.3139 23.7082L12.363 20.216L5.41205 23.7082L6.53711 15.9208L1.11614 10.2918L8.76239 8.97115L12.363 2Z"
                    stroke="#2C2E43"
                  />
                </svg>{" "}
                {/* WHITE START */}
                <svg
                  width="24"
                  height="22"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.363 2L15.9636 8.97115L23.6098 10.2918L18.1888 15.9208L19.3139 23.7082L12.363 20.216L5.41205 23.7082L6.53711 15.9208L1.11614 10.2918L8.76239 8.97115L12.363 2Z"
                    stroke="#2C2E43"
                  />
                </svg>{" "}
                {/* WHITE START */}
                <svg
                  width="24"
                  height="22"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.363 2L15.9636 8.97115L23.6098 10.2918L18.1888 15.9208L19.3139 23.7082L12.363 20.216L5.41205 23.7082L6.53711 15.9208L1.11614 10.2918L8.76239 8.97115L12.363 2Z"
                    stroke="#2C2E43"
                  />
                </svg>{" "}
                {/* WHITE START */}
                <svg
                  width="24"
                  height="22"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.363 2L15.9636 8.97115L23.6098 10.2918L18.1888 15.9208L19.3139 23.7082L12.363 20.216L5.41205 23.7082L6.53711 15.9208L1.11614 10.2918L8.76239 8.97115L12.363 2Z"
                    stroke="#2C2E43"
                  />
                </svg>{" "}
                {/* WHITE START */}
                <svg
                  width="24"
                  height="22"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.363 2L15.9636 8.97115L23.6098 10.2918L18.1888 15.9208L19.3139 23.7082L12.363 20.216L5.41205 23.7082L6.53711 15.9208L1.11614 10.2918L8.76239 8.97115L12.363 2Z"
                    stroke="#2C2E43"
                  />
                </svg>
              </div>
              <p>Rate this contest</p>
            </div>

            {/*  */}
            <div className="sm:w-[460px]">
              <p className="text-[20px]">
                Join millions of other creatives across the world in sharing
                your finest photographs and collaborating.{" "}
              </p>
            </div>

            {/*  */}
            <div>
              <button className=" md:px-8 md:py-3 py-2 px-4 bg-[#FFD523] text-sm text-[#171717] rounded-[6px]">
                Upload photo
              </button>
            </div>

            {/*  */}
            <div className="flex ">
              <div className="text-sm">
                <p>Share</p>
              </div>

              {/*  */}

              <GoogleIcon />
              <FacebookIcon />
              <InstagramIcon />
              <TwitterIcon />
            </div>
          </div>
        </div>

        {/*  */}
        <div className="flex space-x-4 sm:pl-20 py-4 ">
          <img src={image2} alt="" className="w-[155px]"/>
          <img src={image3} alt="" className="w-[155px]" />
        </div>

        {/*  */}
        <div>
          <p className="h-[1px] mt-3 bg-[#171717] w-full"></p>
        </div>

        {/*  */}
        <div className="space-y-5">
          <div className="flex space-x-9">
            <div className="font-bold">Brief</div>
            <div className="font-medium">Prize details</div>
            <div className="font-medium">How it works</div>
          </div>

          {/*  */}
          <div className="sm:flex justify-between">
            <p className="sm:w-[720px]">
              Join millions of other creatives across the world in sharing your
              finest photographs and collaborating. ViewBug is a community for
              photographers of all abilities. Whether you shoot portraiture,
              travel, lifestyle, or landscapes, ViewBug is the place for you.
              Follow your favorite photographers, enter the greatest contests,
              and start your own hallenges to celebrate creativity and be
              inspired. Welcome to the new home for your photographs, and thank
              you for being a member of the most rewarding community.
            </p>

            {/*  */}
            <div className="space-y-3 py-4">
              <p>4,020 ratings so far</p>
              <p>Photo limited contest</p>
              <p>100 photos entered</p>
              <p>Created by Destiny Destiny</p>

              {/*  */}
              <button className=" md:px-8 md:py-3 py-2 px-4 bg-[#FFD523] text-sm text-[#171717] rounded-[6px]">
                Rate this contest
              </button>
            </div>

            {/*  */}
            <div></div>
            {/*  */}
            <div>
              <p className="h-[1px] mt-3 bg-[#171717] w-full"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContestPage;

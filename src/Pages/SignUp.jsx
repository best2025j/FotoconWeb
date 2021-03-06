import React from "react";
import image from "../Assets/stephanie-harvey-OTUahHcqs0Y-unsplash 1.png";
import FacebookIcon from "../svg/FacebookIcon";
import GoogleIcon from "../svg/GoogleIcon";
import InstagramIcon from "../svg/InstagramIcon";
import TwitterIcon from "../svg/TwitterIcon";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="flex">
      <div className="bg-[#2C2E43] text-[#fafafa] md:w-[910px] w-full max-h-full md:h-screen rounded-tr-3xl md:px-8 px-3 py-6 md:flex md:space-x-10 ">
        {/* flex 1 */}
        <div className="space-y-7">
          <p className="text-[24px]">Create account</p>
          <div className="space-y-4">
            <form action="" className="space-y-4">
              <div>
                <input
                  type="text"
                  className=" placeholder-[#171717] text-black py-3 sm:w-[386px] w-full rounded "
                  placeholder=" Username"
                />
              </div>
              {/* EMAIL INPUT */}
              <div>
                <input
                  type="text"
                  className="placeholder-[#171717] text-black py-3 sm:w-[386px] w-full rounded "
                  placeholder=" Email"
                />
               
              </div>
              {/* PASSWORD INPUT */}
              <div>
                <input
                  type="password"
                  className="placeholder-[#171717] text-black py-3 sm:w-[386px] w-full rounded "
                  placeholder=" Password"
                />
              </div>
              {/* PASSWORD CONFIRMATION INPUT */}
              <div>
                <input
                  type="password"
                  className="placeholder-[#171717] text-black py-3 sm:w-[386px] w-full rounded "
                  placeholder=" Confirm Password"
                />
              </div>
              <div className="flex space-x-1">
                <input type="checkbox" />
                <p>I agree to the terms and conditions</p>
              </div>
              <div className="flex justify-center w-full">
                <button
                  type="button"
                  className="px-20 py-4 bg-[#FFD523] text-[#171717] rounded-[6px]"
                >
                  Sign up
                </button>
              </div>
            </form>
          </div>
          {/* issue section */}
          <div className="space-y-8">
            <div className="flex justify-center space-x-2">
              <p className="h-[1px] mt-3 bg-[#FFFFFF] w-[6.8rem]"></p>
              <p className=""> or sign up with</p>
              <p className="h-[1px] bg-[#FFFFFF] w-[6.8rem] mt-3"></p>
            </div>

            <div className="flex justify-center w-full space-x-6 ">
              <GoogleIcon />
              <FacebookIcon />
              <InstagramIcon />
              <TwitterIcon />
            </div>

            <div>
              <p className="h-[3px] mt-3 bg-[#FFFFFF] w-full"></p>
            </div>
          </div>
        </div>

        
        {/* flex 2 */}
        <div className="w-full py-4">
          <div className="space-y-2">
            <div className="text-base float-right font-bold sm:pl-44">Sign in</div>
            <div className="pt-[4rem] text-lg">Join us now</div>
            <div className="w-[18rem]">
              <h1 className="sm:text-4xl text-4xl sm:w-[20rem] w-[16rem]">
                Create an account with us to learn more about us
              </h1>
            </div>

            <div className="sm:w-[293px]">
              <p className="text-base py-6 ">
                Do you already have an account with us? Please use the Login
                form
                {/* LINK TO SIGNUP FORM  */}
                <span className="text-[#FFD523] underline px-1">
                  <Link to="/signin">Login form</Link>
                </span>
              </p>
            </div>
          </div>
        </div>{" "}
      </div>

      <div>
        <img
          src={image}
          alt=""
          className="sm:block hidden w-[34.2rem] h-screen"
        />
      </div>
    </div>
  );
};

export default SignUp;

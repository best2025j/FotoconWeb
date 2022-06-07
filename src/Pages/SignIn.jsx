import React from "react";
import image from "../Assets/stephanie-harvey-OTUahHcqs0Y-unsplash 1.png";
import FacebookIcon from "../svg/FacebookIcon";
import GoogleIcon from "../svg/GoogleIcon";
import InstagramIcon from "../svg/InstagramIcon";
import TwitterIcon from "../svg/TwitterIcon";

const SignIn = () => {
  return (
    <div class="flex">
      {/*  */}
      <div className="w-[910px] h-screen flex bg-[#2C2E43] text-[#FFFFFF] px-16 rounded-tr-3xl space-x-14">
        <div className="w-full space-y-10 py-[6.3rem]">
          <p className="text-[24px]">Login</p>
          {/*  */}
          <div className="space-y-4">
            <form action="" className="space-y-5">
              <div>
                <input
                  type="text"
                  className="placeholder-[#171717] text-black py-3 w-[386px] rounded "
                  placeholder=" Email/username"
                />
              </div>

              {/* PASSWORD INPUT */}

              <div>
                <input
                  type="password"
                  className="placeholder-[#171717] text-black py-3 w-[386px] rounded "
                  placeholder=" Password"
                />
              </div>
            </form>

            {/* CHECKBOX INPUT */}

            <div className="flex justify-between">
              <div>
                <input type="checkbox" /> Remember me
              </div>
              <a href="/">Forget password?</a>
            </div>
          </div>

          {/* BUTTON */}
          <div className="text-center">
            <button
              type="button"
              className="px-20 py-4 bg-[#FFD523] text-sm text-[#171717] rounded-[6px]"
            >
              Sign in
            </button>
          </div>

          {/*  */}

          <div className="space-y-8">
            <div className="flex justify-center space-x-5">
              <p className="h-[1px] mt-3 bg-[#FFFFFF] w-28"></p>
              <p className="text-center">Or sign up with</p>
              <p className="h-[1px] bg-[#FFFFFF] w-28 mt-3"></p>
            </div>

            {/* SOCIAL MEDIA */}

            <div className="flex space-x-6 justify-center cursor-pointer">
              <GoogleIcon />
              <FacebookIcon />
              <InstagramIcon />
              <TwitterIcon />
            </div>
            <div className="h-[2px] w-full bg-[#E5E5E5]"></div>
          </div>
        </div>
                       
        {/* FLEX 2 */}

        <div className="w-full py-10">
          <div className="space-y-2">
            <div className="text-[12px] pl-44">Sign Up</div>
            <div className="pt-[4rem] text-[18px]">Welcome back</div>
            <div className="w-[18rem]">
              <h1 className="text-[30px] w-[14rem]">
                A world of great photo contests and awards, in one place
              </h1>
            </div>
            <div className="w-[290px]">
              <p className="text-[18px] py-6 ">
                New to Fotocon?
                {/* LINK TO SIGNUP FORM  */}
                <span className="text-[#FFD523] underline px-1">
                  <a href="/SignUp">Join now </a>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* IMAGE  */}

      <div>
        <img src={image} alt="" className=" w-[34.2rem] h-screen" />
      </div>
    </div>
  );
};

export default SignIn;

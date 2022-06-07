import React from "react";
import image from "../Assets/stephanie-harvey-OTUahHcqs0Y-unsplash 1.png";
import FacebookIcon from "../svg/FacebookIcon";
import GoogleIcon from "../svg/GoogleIcon";
import InstagramIcon from "../svg/InstagramIcon";
import TwitterIcon from "../svg/TwitterIcon";

const SignUp = () => {
  return (
    <div class="flex">
      {/*  */}
      <div className="w-[910px] min-h-screen h-auto flex bg-[#2C2E43] text-[#FFFFFF] py-4 rounded-tr-3xl px-16  space-x-16">
        <div className="w-full space-y-7">
          <p className="text-[24px]">Create account</p>
          {/*  */}
          <div className="space-y-4">
            <form action="" className="space-y-6">
              <div>
                <input
                  type="text"
                  className=" placeholder-[#171717] text-black py-3 w-[386px] rounded "
                  placeholder=" Username"
                />
              </div>

              {/* EMAIL INPUT */}

              <div>
                <input
                  type="text"
                  className="placeholder-[#171717] text-black py-3 w-[386px] rounded "
                  placeholder=" Email"
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

              {/* PASSWORD CONFIRMATION INPUT */}

              <div>
                <input
                  type="password"
                  className="placeholder-[#171717] text-black py-3 w-[386px] rounded "
                  placeholder=" Confirm Password"
                />
              </div>
            </form>

            {/* CHECKBOX INPUT */}

            <div className="mt-[16px]">
              <input type="checkbox" /> I agree to the terms and conditions
            </div>
          </div>

          {/* BUTTON */}
          <div className="text-center">
            <button
              type="button"
              className="px-20 py-4 bg-[#FFD523] text-[#171717] rounded-[6px]"
            >
              Sign up
            </button>
          </div>

          {/*  */}

          <div className="space-y-8">
            <div className="flex justify-center space-x-5">
              <p className="h-[1px] mt-3 bg-[#FFFFFF] w-28" />
              <p className="text-center">Or sign up with</p>
              <p className="h-[1px] bg-[#FFFFFF] w-28 mt-3" />
            </div>

            {/* SOCIAL MEDIA */}

            <div className="flex space-x-6 justify-center cursor-pointer">
              <GoogleIcon />
              <FacebookIcon />
              <InstagramIcon />
              <TwitterIcon />
            </div>
            <div className="h-[2px] w-full bg-[#E5E5E5]" />
          </div>
        </div>

        {/* FLEX 2 */}

        <div className="w-full space-y-2 py-5">
          <div className="font-[inter] text-[12px] pl-44">Sign in</div>
          <div className="pt-[60px] ">Join us now</div>
          <div className="w-[18rem] h-[190px]">
            <h1 className="text-[32px] font-[inter]">
              Create an account with us to learn more about us
            </h1>
          </div>

          <div className="w-[290px]">
            <p className="text-[18px] py-4 ">
              Do you already have an account with us? Please use the
              {/* LINK TO SIGNIN FORM */}
              <span className="text-[#FFD523] underline  px-1">
                <a href="/signin">Login form</a>
              </span>
            </p>
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

export default SignUp;

// return (
//   <div className="flex ">
//     <div className="bg-[#2C2E43] text w-[910px] min-h-screen h-auto rounded-tr-3xl px-16 py-16 flex space-x-10 ">
//       {/* flex 1 */}
//       <div className="space-y-7">
//         <p className="text-[24px]">Create account</p>

// form input
//         <div className="space-y-4">
//           <form action="" className="space-y-5">
//             <div>
//               <input
//                 type="text"
//                 className=" placeholder-[#171717] text-black py-2 w-[386px] rounded "
//                 placeholder="Username"
//               />
//             </div>
//             {/* EMAIL INPUT */}
//             <div>
//               <input
//                 type="text"
//                 className="placeholder-[#171717] text-black py-2 w-[386px] rounded "
//                 placeholder="Email"
//               />
//             </div>
//             {/* PASSWORD INPUT */}
//             <div>
//               <input
//                 type="password"
//                 className="placeholder-[#171717] text-black py-2 w-[386px] rounded "
//                 placeholder="Password"
//               />
//             </div>
//             {/* PASSWORD CONFIRMATION INPUT */}
//             <div>
//               <input
//                 type="password"
//                 className="placeholder-[#171717] text-black py-2 w-[386px] rounded "
//                 placeholder="Confirm Password"
//               />
//             </div>
//             <div className="flex space-x-1">
//               <input type="checkbox" />
//               <p>I agree to the terms and conditions</p>
//             </div>
//             <div className="flex justify-center w-full">
//               <button
//                 type="button"
//                 className="px-20 py-4 bg-[#FFD523] text-[#171717] rounded-[6px]"
//               >
//                 Sign up
//               </button>
//             </div>
//           </form>
//         </div>

//         {/* issue section */}
//         <div className="space-y-6">
//           <div className="flex justify-center space-x-2">
//             <p className="h-[1px] mt-3 bg-[#FFFFFF] w-20"></p>
//             <p className=""> or sign up with</p>
//             <p className="h-[1px] bg-[#FFFFFF] w-20 mt-3"></p>
//           </div>

//           <div className="flex justify-center w-full space-x-5 ">
//             <GoogleIcon />
//             <FacebookIcon />
//             <InstagramIcon />
//             <TwitterIcon />
//           </div>

//           <div>
//             <p className="h-[3px] mt-3 bg-gray-600 w-full"></p>
//           </div>
//         </div>
//       </div>
//       {/* flex 2 */}
//       <div>2425</div>
//     </div>

//     <div>
//       <img src={image} alt="" className=" w-[34.2rem] max-h-[739px]" />
//     </div>
//   </div>
// );

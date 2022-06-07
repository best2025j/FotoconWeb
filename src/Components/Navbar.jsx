import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="w-full h-[60px] z-10 bg-stone-50 fixed px-10 ">
        <div className="px-4 flex justify-between items-center w-full h-full">
          <h1 className="text-2xl">LOGO</h1>

          {/* Items */}
          <div className="">
            <ul className="flex">
              <li className="p-4">
                <a href="Home">Home</a>
              </li>
              <li className="p-4">
                <a href="About">Contest</a>
              </li>
              <li className="p-4">
                <a href="Support">Blog</a>
              </li>
              <li className="p-4">
                <a href="Platform">Publisher</a>
              </li>
            </ul>
          </div>

          {/* FORM BUTTON*/}

          <div className="space-x-2">
            <button className="px-8 text-base rounded-md border-2 py-2">
              <Link to="/SignUp">Join</Link>
            </button>
            <button className="rounded-md text-base bg-[#FFD523] px-5 py-2 text-black">
              <Link to="/SignIn"> Sign in</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  // OPEN MENU
  const handClick = () => setNav(!nav);
  // CLOSE MENU
  const handleClose = () => setNav(!nav);

  return (
    <div className="fixed w-full z-10 md:h-[5rem] h-[3rem] bg-stone-100">
      <div className="flex justify-between px-4 md:py-5 py-[8px] items-center">
        <h1 className="md:text-2xl  font-bold">LOGO</h1>

        {/* LIST */}
        <ul className="md:flex hidden space-x-8 cursor-pointer">
          <li>
            <Link to="home">Home</Link>
          </li>
          <li>
            <Link to="/contextpage">Contest</Link>
          </li>
          <li>
            <Link to="blogs">Blog</Link>
          </li>
          <li>
            <Link to="publisher">Publisher</Link>
          </li>
        </ul>

        {/* BUTTON */}
        <div className="space-x-2 hidden md:flex cursor-pointer">
          <button className="text-base px-8 py-2 rounded-md bg-[#FFD523]">
            <a href="/signup">Join</a>
          </button>
          <button className="text-base px-6 py-2 rounded-md bg-[#FFD523]">
            <a href="/signin">Sign-in</a>
          </button>
        </div>

        {/* MENU */}
        <div className="md:hidden cursor-pointer" onClick={handClick}>
          {nav === false ? (
            <MenuIcon className="w-8 rounded hover:bg-slate-200 p-1" />
          ) : (
            <XIcon className="w-8 rounded hover:bg-slate-200 p-1" />
          )}
        </div>
      </div>

      {/* MOBILE SCREEN */}

      <ul
        className={
          nav === false
            ? "hidden"
            : "absolute bg-gray-50 h-screen w-full xl:hidden md:px-8 px-4 py-3   space-y-3"
        }
      >
        <li>
          <Link to="home" onClick={handleClose}>
            Home
          </Link>
        </li>
        <li>
          <Link to="contest" onClick={handleClose}>
            Contest
          </Link>
        </li>
        <li>
          <Link to="blogs" onClick={handleClose}>
            Blog
          </Link>
        </li>
        <li>
          <Link to="publisher" onClick={handleClose}>
            Publisher
          </Link>
        </li>

        {/* SMALL SCREEN BUTTON */}

        <div className="flex flex-col space-y-1 ">
          {/* BUTTON */}
          <button className="text-base px-8 py-2  rounded-md bg-[#FFD523]">
            <a href="/signup">Join</a>
          </button>
          <button className="text-base px-8 py-2 rounded-md bg-[#FFD523]">
            <a href="/signin">Sign-in</a>
          </button>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;

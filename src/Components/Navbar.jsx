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
    <div className="fixed w-full z-10 md:h-[5rem] h-[54px] bg-stone-50">
      <div className="flex justify-between px-4 md:py-5 py-[10px] items-center">
        <h1 className="md:text-2xl">LOGO</h1>

        {/* LIST */}
        <ul className="md:flex hidden space-x-8 cursor-pointer">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contestpage">Contest</Link>
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
            <Link to="/signup">Join</Link>
          </button>
          <button className="text-base px-6 py-2 rounded-md bg-[#FFD523]">
            <Link to="/signin">Sign-in</Link>
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
            : "absolute bg-gray-50 h-screen w-full xl:hidden md:px-8 px-4 py-3 space-y-5"
        }
      >
        <li>
          <Link to="/" onClick={handleClose}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/contestpage" onClick={handleClose}>
            Contest
          </Link>
        </li>
        <li>
          <Link to="" onClick={handleClose}>
            Blog
          </Link>
        </li>
        <li>
          <Link to="" onClick={handleClose}>
            Publisher
          </Link>
        </li>

        {/* SMALL SCREEN BUTTON */}

        <div className="flex flex-col space-y-2 ">
          {/* BUTTON */}
          <button className="text-base px-8 py-2  rounded-md bg-[#FFD523]">
            <Link to="/signup">Join</Link>
          </button>
          <button className="text-base px-8 py-2 rounded-md bg-[#FFD523]">
            <Link to="/signin">Sign-in</Link>
          </button>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;

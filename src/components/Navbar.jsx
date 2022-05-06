import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-scroll";

function Navbar() {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="bg-black/80 sticky top-0 z-50">
      <div className="flex justify-between items-center py-[20px] max-w-[1240px] mx-auto px-4 text-white">
        <h1 className="text-3xl font-bold text-[#00df9a] cursor-pointer">
          LOGIK.
        </h1>
        <ul className="md:flex hidden flex-nowrap ">
          <Link to="hero" smooth={true} offset={-100} duration={500}>
            <li className="px-4 py-2 cursor-pointer hover:text-gray-400">Home</li>
          </Link>
          <Link to="About" smooth={true} offset={-100} duration={500}>
            <li className="px-4 py-2 cursor-pointer hover:text-gray-400">
              About
            </li>
          </Link>
          <Link to="Cards" smooth={true} offset={30} duration={500}>
            <li className="px-4 py-2 cursor-pointer hover:text-gray-400">
              Pricing
            </li>
          </Link>
          <li className="px-4 font-semibold rounded-lg ml-2 text- py-2 bg-white text-black hover:bg-gray-200 flex cursor-pointer">
            Get Started
          </li>
        </ul>
        <div
          onClick={handleNav}
          className="block md:hidden cursor-pointer mb-5 mt-5 ease-in-out duration-500"
        >
          {!nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
        </div>
        <div
          className={
            !nav
              ? "fixed md:hidden px-4 flex flex-col items-start right-0 top-0 h-full w-[50%] md:w-[30%] bg-[#0a0a0a] ease-in-out duration-[150ms] z-50"
              : "fixed right-[-100%]"
          }
        >
          <div
            onClick={handleNav}
            className="cursor-pointer mb-5 ml-2 mt-[38px] ease-in-out duration-400 z-50"
          >
            {!nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
          </div>
          <ul className=" uppercase w-full">
            <li className="px-4 my-6 cursor-pointer hover:text-gray-400">Home</li>
            <li className="px-4 my-6 cursor-pointer hover:text-gray-400">
              Company
            </li>
            <li className="px-4 my-6 cursor-pointer hover:text-gray-400">
              Resources
            </li>
            <li className="px-4 my-6 cursor-pointer hover:text-gray-400">
              Pricing
            </li>
            <li className="px-4 my-6 cursor-pointer hover:text-gray-400">
              Documentation
            </li>
            <li className="px-4 my-6 cursor-pointer hover:text-gray-400">
              Guides
            </li>
            <li className="px-4 my-6 cursor-pointer hover:text-gray-400">
              API Status
            </li>
            <li className="px-4 my-6 cursor-pointer hover:text-gray-400">
              About
            </li>
            <li className="px-4 my-6 cursor-pointer hover:text-gray-400">Blog</li>
            <li className="px-4 my-6 cursor-pointer hover:text-gray-400">
              Career
            </li>
            <li className="px-4 my-6 cursor-pointer hover:text-gray-400">
              Press
            </li>
            <li className="px-4 my-6 cursor-pointer hover:text-gray-400">
              Contact
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

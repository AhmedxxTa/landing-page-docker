import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <nav className="bg-gradient-to-b from-[rgba(0,0,0,0.8)] to-[rgba(0,0,0,0.2)] bg-cover bg-fixed bg-center w-full h-20 flex justify-between items-center mx-auto p-8 font-bold fixed duration-1000">
      
      <div onClick={handleNav} >
        {!nav ? (
          <FaBars size={30} className="block absolute top-0 left-0 text-white cursor-pointer translate-x-2/4 translate-y-3/4 font-bold text-[2rem]" />
        ) : (
          <MdOutlineClose size={30} className="block absolute top-0 left-0 text-white cursor-pointer translate-x-2/4 translate-y-3/4 font-bold text-[2rem]" />
        )}
      </div>

      {/* sidebar */}
      <div className={nav ? "w-[450px] h-screen bg-black text-white absolute top-[5px] left-0 flex justify-center items-center text-start duration-500 ease-in-out -z-20" : "w-[450px] h-screen text-white absolute flex justify-center items-center text-start -left-full top-[-5px] duration-500 ease-in"}>
          <ul>
            <li className="text-2xl opacity-80 hover:opacity-100 cursor-pointer"><a href="#about">About Us</a></li>
            <li className="text-2xl opacity-80 hover:opacity-100 cursor-pointer"><a href="#staff">Staff</a></li>
            <li className="text-2xl opacity-80 hover:opacity-100 cursor-pointer"><a href="#ourwork">Our Work</a></li>
            <li className="text-2xl opacity-80 hover:opacity-100 cursor-pointer"><a href="#contact">Contact</a></li>
            <button className="mt-6 text-xl text-white py-3 px-7 mb-10 bg-[#f76d28] border-[2px] border-[#f76d28] rounded-lg transition-[0.2s] ease-in-out hover:bg-[#f76d28] hover:scale-105 active:scale-95 ">Book Now</button>
          </ul>
        </div>

      <div className="text-[2rem] text-white hidden md:flex justify-center items-center px-4 lg:translate-x-1/4">
        <a href="/">
          <h1>Shutter &amp; Shoot Studio</h1>
        </a>
      </div>
      
      <div className="text-lg text-white hidden lg:flex items-center justify-center gap-4">
          <ul className="flex text-white items-center cursor-pointer">
            <li className="opacity-80 hover:opacity-100 mr-2"><a href="#about">About Us</a></li>
            <li className="opacity-80 hover:opacity-100 mr-2"><a href="#staff">Staff</a></li>
            <li className="opacity-80 hover:opacity-100 mr-2"><a href="#ourwork">Our Work</a></li>
            <li className="opacity-80 hover:opacity-100 mr-2"><a href="#contact">Contact</a></li>
          </ul>
      </div>
    </nav>
  );
};

export default Navbar;

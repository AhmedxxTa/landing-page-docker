import React from "react";
import Female1 from "../images/Female1.jpg";
import Female2 from "../images/Female2.jpg";
import male1 from "../images/Men1.jpg";
import male2 from "../images/Men2.jpg";
import children from "../images/Children.jpeg";
import { Fade, Roll } from "react-reveal";

const Ourwork = () => {
  return (
    <div className="max-w-[1000px]md:h-screen flex flex-col justify-center items-center relative py-20 px-auto mx-auto bg-[#150f0f] text-white -z-10" id="ourwork">
      <Fade right>
        <h1 className="text-[2rem] text-center mb-20 font-bold border-b-4 border-[#f76d28]">
          Our Work
        </h1>
      </Fade>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 my-0 mx-auto gap-8">
        <Roll left>
          <div className="my-0 mx-8 w-[250px] md:w-[300px] leading-loose">
            <img
              className="w-[auto] mx-auto h-[250px] shadow-md shadow-[#645454] hover:scale-105 ease-in-out duration-500 hover:rotate-3"
              src={Female1}
              alt="female"
            />
          </div>
        </Roll>
        <Roll top>
          <div className="my-0 mx-8 w-[250px] md:w-[300px] leading-loose">
            <img
              className="w-[auto] mx-auto h-[250px] shadow-md shadow-[#645454] hover:scale-105 ease-in-out duration-500 hover:rotate-3"
              src={Female2}
              alt="female"
            />
          </div>
        </Roll>
        <Roll right>
          <div className="my-0 mx-8 w-[250px] md:w-[300px] leading-loose">
            <img
              className="w-[auto] mx-auto h-[250px] shadow-md shadow-[#645454] hover:scale-105 ease-in-out duration-500 hover:rotate-3"
              src={male1}
              alt="male"
            />
          </div>
        </Roll>
        <Roll left>
          <div className="my-0 mx-8 w-[250px] md:w-[300px] leading-loose">
            <img
              className="w-[auto] mx-auto h-[250px] shadow-md shadow-[#645454] hover:scale-105 ease-in-out duration-500 hover:rotate-3"
              src={male2}
              alt="male"
            />
          </div>
        </Roll>
        <Roll bottom>
          <div className="my-0 mx-8 w-[250px] md:w-[300px] leading-loose">
            <img
              className="w-[auto] mx-auto h-[250px] shadow-md shadow-[#645454] hover:scale-105 ease-in-out duration-500 hover:rotate-3"
              src={children}
              alt="children"
            />
          </div>
        </Roll>
      </div>
    </div>
  );
};

export default Ourwork;

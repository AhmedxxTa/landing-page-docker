import React from "react";
import { Bounce, Slide } from "react-reveal";
import aboutImg from "../images/About.jpg";

const Aboutus = () => {
  return (
    <div name="about" className="w-full h-screen relative text-white" id="about">
      <div className="max-w-[1000px]">
        <img
          className="absolute bg-fixed bg-no-repeat bg-cover h-screen 2xl:h-auto object-cover  -z-10"
          src={aboutImg}
          alt=""
        />
      </div>
      <div className="flex flex-col justify-center items-center w-full h-full">
        <Slide left>
          <div className="max-w-[1000px] w-full flex justify-center items-center gap-8">
            <div className="text-center pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-[#f76d28]">
                  About Us
                </p>
            </div>
          </div>
        </Slide>
        <Bounce bottom>
          <div className="max-w-[1000px] w-full flex flex-col items-center justify-center gap-8 px-4">
            <div className="text-lg text-left mb-8">
              <p>
                Shutter &amp; Shoot Studio Started 20 years ago with an ambition
                to become one of the best Photography studio's in the world, it
                Started Only with a few Photographer but over time we hired some
                of the best Photographers in the world!
              </p>
            </div>
          </div>
        </Bounce>
      </div>
    </div>
  );
};

export default Aboutus;

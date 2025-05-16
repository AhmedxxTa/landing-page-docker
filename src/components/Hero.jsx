import React from "react";
import heroImg from "../images/video-lighting.jpg";

const Hero = () => {
  return (
    <div className="h-screen">
      <div>
        <img
          className="object-cover h-full w-full absolute -z-10"
          src={heroImg}
          alt="heroImg"
        />
      </div>

      <div className="w-full max-w-[650px] h-[100%] flex flex-col justify-center items-start text-center text-white px-12">
        <h1 className="text-[2rem] font-bold">Shutter &amp; Shoot</h1>
        <p className="text-lg text-left mb-8">
          A Professional Studio For more than 20 years. Featuring One of the
          Most Famous Camera Staff In the world. 24/7 service. Ready to Shoot
          you whenever you wish.
        </p>
        <button className="text-2xl text-white py-4 px-8 mb-10 bg-[#f76d28] border-[2px] border-[#f76d28] rounded-lg transition-[0.2s] ease-in-out hover:bg-[#f76d28] hover:scale-105 active:scale-95 ">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default Hero;

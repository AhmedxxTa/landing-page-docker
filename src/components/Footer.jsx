import React from "react";

const Footer = () => {
  return (
    <div className="min-h-[70px] max-w-[100vw] bg-[#0d0909] text-white flex justify-center items-start">
      <div className="py-[16px] px-[24px] flex flex-col justify-center items-center my-0 mx-auto">
        <h4 className="text-sm md:text-xl border-b-2 border-primaryBlue mt-4">Social Media</h4>
        <ul className="mt-[5px]">
          <li>Facebook</li>
          <li>Instagram</li>
          <li>Telegram</li>
          <li>Linkedin</li>
        </ul>
      </div>
      <div className="py-[16px] px-[24px] flex flex-col justify-center items-center my-0 mx-auto">
        <h4 className="text-sm md:text-xl border-b-2 border-primaryBlue mt-4">About</h4>
        <ul className="mt-[5px]">
          <li>Contact us</li>
          <li>Careers</li>
        </ul>
      </div>
      <div className="py-[16px] px-[24px] flex flex-col justify-center items-center my-0 mx-auto">
        <h4 className="text-sm md:text-xl border-b-2 border-primaryBlue mt-4">Location</h4>
        <ul className="mt-[5px]">
          <li>Canada</li>
          <li>Georgia</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;

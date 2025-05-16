import React from 'react';
import { Rotate } from 'react-reveal';

const Contact = () => {
  return (
    <div className="w-full h-screen bg-[#150f0f] flex justify-center items-center p-4" id="contact">
      <form className="flex flex-col max-w-[600px] w-full">
        <div className="pb-8 flex flex-col justify-center items-center">
          <p className="text-4xl font-bold inline border-b-4 border-[#f76d28] text-white">Contact</p>
          <p className="text-gray-300 py-4"> Submit the form below to rate us!</p>
        </div>
        <input className="p-2 bg-[#f6e9cc]" type="text" placeholder="Name" name="name" />
        <input className="my-4 p-2 bg-[#f6e9cc]" type="email" placeholder="Email" name="email" />
        <textarea className="p-2 bg-[#f6e9cc]" name="message" rows="10" placeholder="Your Review And Rating"></textarea>
        <Rotate  bottom left>
          <button className="text-white border-[2px] border-[#f76d28] rounded-lg px-4 py-3 my-8 mx-auto flex items-center bg-[#f76d28] transition-[0.2s] ease-in-out hover:bg-[#f76d28] hover:scale-105 active:scale-95">Rate Us</button>
        </Rotate>
      </form>
    </div>
  )
};

export default Contact;
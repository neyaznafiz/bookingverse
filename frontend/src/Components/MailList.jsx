import React from "react";

export const MailList = () => {
  return (
    <div className="w-full mt-12 bg-primary text-white flex flex-col items-center gap-5 p-12">
      <h1 className="text-5xl">Save Time, Save Money !</h1>
      <p className="tracking-wide">Sign Up and we'll send the best deals to you</p>
      <div className="flex items-center gap-x-2">
        <input type="text" placeholder="Your E-mail" className="w-72 h-8 p-2 outline-none rounded-sm text-gray-800 "/>
        <button className="bg-white h-8 text-primary px-2 rounded-sm">Subscribe</button>
      </div>
    </div>
  );
};

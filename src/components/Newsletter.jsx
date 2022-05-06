import React from "react";

function Newsletter() {
  return (
    <div className="text-white pt-20 pb-20 lg:pt-20 lg:pb-0 px-4">
      <div className="max-w-[1240px] mx-auto h-[300px] md:h-[200px] flex flex-col items-center md:grid justify-center md:items-start md:grid-cols-3 md:grid-cols-2">
        <div className="md:col-span-2 flex flex-col ">
          <p className="font-bold text-3xl py-3 text-center md:text-left text-[40px] mb-[10px]">
          Not finding the right Data?
          </p>
          <p className="text-center md:text-left text-lg font-medium">
            Sign up to our newsletter and stay up to date.
          </p>
        </div>
        <div className="flex flex-col mt-8 md:mt-0">
          <div className="flex flex-col lg:flex-row lg:items-center">
            <input type="text" placeholder="Enter your email" className="py-3 outline-none text-black rounded-md mr-2 lg:grow px-2"/>
            <button type="submit" className="bg-[#00df9a] w-[150px] rounded-md font-medium mt-2 mb-3 md:mb-2 lg:my-0 self-center md:self-start flex-nowrap shrink-0 py-3 px-2 text-black hover:bg-[#74f9cf]">
              Notify me
            </button>
          </div>
          <p className="flex flex-col items-center md:items-start lg: mt-5">
            We care about the protection of your data.{" "}
            <span className="block">
              <a href="" className="text-[#00df9a] underline">
                Read our Privacy Policy.
              </a>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;

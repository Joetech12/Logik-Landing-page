import React from "react";
import Laptop from "../assets/laptop.jpg";

function Analytics() {
  return (
    <div name="About" className="w-full bg-white pt-16 pb-20 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img src={Laptop} alt="laptop" className="w-full mb-7" />
        <div className="flex flex-col justify-center items-center md:items-start">
          <p className="font-semibold text-[#00df9a] text-[24px]">
          Find, Share and Publish
          </p>
          <h1 className="font-bold text-3xl py-3 text-center md:text-left text-[40px] mb-[10px]">
          Quality Data with LOGIK
          </h1>
          <p className="text-center md:text-left">
          At LOGIK, we have over thousands of datasets for free and a Premium Data Service for additional or customised data with guaranteed updates.
          </p>
          <button className="bg-black hover:bg-[#1e1e1e] w-[200px] rounded-md font-medium py-3 text-[#00df9a] mt-10">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default Analytics;

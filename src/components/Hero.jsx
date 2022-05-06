import React from "react";
import Typed from "react-typed";
import Video from "../assets/video.mp4";

function Hero() {
  return (
    <div name="hero" className="text-white">
      <div className="w-full h-screen mx-auto relative">
        {/* <div className="h-full w-full bg-gray-100"></div> */}
        <div className="w-full h-full relative  z-[-1]">
          <div className=" bg-[#000300]/50 object-cover h-full absolute z-10 w-full top-0"></div>
          <video
            className=" bg-gray-900 bg-blend-multiply object-cover h-full w-full absolute top-0"
            src={Video}
            autoPlay
            loop
            muted
          />
        </div>
        <div className="flex flex-col justify-center items-center z-20 w-full h-full absolute top-0">
          {/* <p className="text-[#00df9a] font-bold md:text-2xl italic">
            No. 1 Data Hub in Nigeria
          </p> */}
          <h1 className="md:text-7xl text-6xl font-bold md:py-6 py-4">
            Grow with Data
          </h1>
          <p className="md:text-5xl  text-3xl font-bold">
            A Data & AI Platform for{" "}
            <span>
              <Typed
                strings={["BTB", "BTC", "SASG"]}
                typeSpeed={120}
                backSpeed={140}
                loop
              />
            </span>
          </p>
          <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black mt-10 hover:bg-[#74f9cf]">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;

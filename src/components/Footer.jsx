import React from "react";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
  FaGithubSquare,
  FaDribbbleSquare,
} from "react-icons/fa";

function Footer() {
  return (
    <div className="text-white pb-10 pt-20 px-4">
      <div className="max-w-[1240px] mx-auto h-[300px] md:h-[200px] flex flex-col items-center">
        <div className="flex flex-col md:flex-row">
          <div className="flex flex-col md:items-start items-center mb-[50px] md:mb-0">
            <p className="text-2xl font-bold text-[#00df9a] cursor-pointer">
              LOGIK.
            </p>
            <p className="max-w-[400px] my-5 text-center md:text-left max-w-[370px]">
            We have decades of experience building data systems for clients large and small. Our team of talented developers and managers can help you to design, build or enhance your data project.
            </p>
            <div className="flex justify-even">
              <FaFacebookSquare size={30} className="mr-3 cursor-pointer" />
              <FaInstagramSquare size={30} className="mr-3 cursor-pointer" />
              <FaTwitterSquare size={30} className="mr-3 cursor-pointer" />
              <FaGithubSquare size={30} className="mr-3 cursor-pointer" />
              <FaDribbbleSquare size={30} className="mr-3 cursor-pointer" />
            </div>
          </div>
          <div className="grow flex mx-5">
            <div className="grow px-10">
              <p className="mb-4 font-bold">Solutions</p>
              <p className="mb-2 cursor-pointer hover:text-gray-400">
                Analytics
              </p>
              <p className="mb-2 cursor-pointer hover:text-gray-400">
                Marketing
              </p>
              <p className="mb-2 cursor-pointer hover:text-gray-400">
                Commerce
              </p>
              <p className="mb-2 cursor-pointer hover:text-gray-400">
                Insights
              </p>
            </div>
            <div className="grow px-10">
              <p className="mb-4 font-bold">Support</p>
              <p className="mb-2 cursor-pointer hover:text-gray-400">Pricing</p>
              <p className="mb-2 cursor-pointer hover:text-gray-400">
                Documentation
              </p>
              <p className="mb-2 cursor-pointer hover:text-gray-400">Guides</p>
              <p className="mb-2 cursor-pointer hover:text-gray-400">
                API Status
              </p>
            </div>
            <div className="grow px-10">
              <p className="mb-4 font-bold">Company</p>
              <p className="mb-2 cursor-pointer hover:text-gray-400 hover:text-gray-400">
                About Us
              </p>
              <p className="mb-2 cursor-pointer hover:text-gray-400 hover:text-gray-400">
                Blog
              </p>
              <p className="mb-2 cursor-pointer hover:text-gray-400 hover:text-gray-400">
                Jobs
              </p>
              <p className="mb-2 cursor-pointer hover:text-gray-400 hover:text-gray-400">
                Press
              </p>
            </div>
          </div>
        </div>

        <p className="mt-10 py-10">Copyright (c) 2022 - Ifeanyi Umeh</p>
      </div>
    </div>
  );
}

export default Footer;

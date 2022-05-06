import React from "react";
import Single from "../assets/single.png";
import Double from "../assets/double.png";
import Triple from "../assets/triple.png";
import Card from "./Card";

function Cards() {
  return (
    <div name="Cards" className="w-full py-[5rem] md:py-[10rem]  px-4 bg-white">
      <div className="max-w-[1240px] mx-auto text-center justify-center flex flex-col items-center md:flex-row ">
        <Card
          image={Single}
          user="Single User"
          price="$100"
          color="bg-white/90"
          feature1="200GB Storage"
          feature2="1 Granted User"
          feature3="Send up to 2GB"
          btncolor="bg-[#00df9a]"
          btnhover="hover:bg-[#74f9cf]"
          btntext="text-black"
        />
        <Card
          image={Double}
          user="Multi User"
          price="$150"
          color="bg-white"
          feature1="500GB Storage"
          feature2="5 Granted User"
          feature3="Send up to 7GB"
          btncolor="bg-black"
          btnhover="hover:bg-[#1e1e1e]"
          btntext="text-[#00df9a]"
        />
        <Card
          image={Triple}
          user="Premium User"
          price="$250"
          color="bg-white/90"
          feature1="1TB Storage"
          feature2="25 Granted User"
          feature3="Send up to 15GB"
          btncolor="bg-[#00df9a]"
          btnhover="hover:bg-[#74f9cf]"
          btntext="text-black"
        />
      </div>
    </div>
  );
}

export default Cards;

import React from "react";
import Single from "../assets/single.png";
import Double from "../assets/double.png";
import Triple from "../assets/triple.png";

function Card({ image, color, user, price, feature1, feature2, feature3, btncolor, btnhover, btntext }) {
  return (
    <div className={`my-10 md:my-0 mx-20 md:mx-3 lg:mx-5 px-5 min-w-[240px] shadow-xl flex flex-col  justify-center items-center rounded-lg hover:scale-105 duration-300 ${color} h-[600px]`}>
      <img className="w-20 mx-auto mt-[-3rem]" src={image} alt="/" />
      <h2 className="text-2xl font-bold text-center py-8">{user}</h2>
      <p className="text-center text-4xl font-bold">{price}</p>
      <div className="text-center font-medium">
        <p className="py-2 border-b mx-8 mt-8">{feature1}</p>
        <p className="py-2 border-b mx-8">{feature2}</p>
        <p className="py-2 border-b mx-8">{feature3}</p>
      </div>
      <button className={`${btncolor} ${btnhover} w-[200px] rounded-md font-medium mx-auto py-3 ${btntext} mt-10`}>
        Start Trial
      </button>
    </div>
  );
}

export default Card;

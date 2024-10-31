import React from "react";
import Mobilehbg from "../assets/mobile-h-bgimage.png";

function CardTop() {
  return (
    <div className="relative w-full flex justify-center items-center flex-col">
      <h1 className=" w-80 h-28 relative  flex ">
        <img className="w-[198px] h-[103px]" src={Mobilehbg} alt="" />
        <span className="absolute top-3 left-7 text-[48px] text-white font-bold">
          Mobile
        </span>
        <span className="absolute top-3 left-52  text-[48px] font-bold text-[#388FCB]">
          Stock
        </span>
      </h1>
      <p
        className="text-[20px] w-[80%] flex justify-center items-center  text-center text-[#333333
] mt-5"
      >
        We stay upto date with latest technology trends and offer innovative
        solutions. that help you stay ahead in competetion
      </p>
    </div>
  );
}

export default CardTop;

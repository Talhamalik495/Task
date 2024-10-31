import React from "react";
import iphone from "../assets/Iphone-14-pro-1.png";
import "../App.css";
function Card() {
  return (
    <div className="border-gradient  w-[100%] h-[223px] font-poppins outline-none mt-8">
      <div className=" content w-[3%] h-[223px]   py-[29px] px-[27px] rounded-xl  border-2 flex justify-center items-center flex-col">
        <img src={iphone} alt="iphone" />
        <h1 className="text-xl text-[rgba(51,51,51,1)]">Iphone 14 Pro Max</h1>
        <p className="text-[12px] text-[rgba(136,136,136,1)]">
          Apple iphone 14 Pro 512GB Gold (MQ233)
        </p>
      </div>
    </div>
  );
}

export default Card;

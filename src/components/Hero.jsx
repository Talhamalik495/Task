import React from "react";
import iphonebg from "../assets/iphonebg.png";
import facebookicon from "../assets/facebook-icon.png";
import linkdeinicon from "../assets/linkdein-icon.png";
import instagramicon from "../assets/instagram-icon.png";
import usericon from "../assets/usericon.png";
import twiteericon from "../assets/twiter-icon.png";
import herosectionbacgound from "../assets/herosectionbacgound.png";
import arrowright from "../assets/uil_arrow-right.png";
import arrowbutton from "../assets/uil_arrow-right-button.png";
import meassagicon from "../assets/meassagicon.png";
import firstline from "../assets/firstline.png";
import secondline from "../assets/secondline.png";
import iphone from "../assets/iphon-14-pro-right.png";

function CardTop() {
  return (
    <div className="hero w-full flex justify-center items-center pt-20">
      <img
        className=" absolute top-32 left-3 rotate-45  w-[100px] rounded-full  h-[127px] "
        src={herosectionbacgound}
        alt="leftlayer"
      />
      <img
        className=" absolute top-60 left-28  w-[200px] rounded-full  h-[127px]  "
        src={herosectionbacgound}
        alt="leftlayer"
      />
      <div className="left w-[596px] flex flex-col  gap-[24px] ml-5 ">
        <h1 className="herotext text-[48px] font-bold">
          Largest <span className="text-[#388FCB]font-bold">Wholesalers</span>
        </h1>
        <h1 className="herotext text-[48px] font-bold">
          of <span className="text-[#388FCB] font-bold">Mobile Phones</span>
        </h1>
        <p>
          Supply that meets Demand. Get the best wholesale prices of used and
          refurbished Mobile Stocks
        </p>
        <h1 className="flex  items-center gap-3 text-xl text-[#388FCB]">
          Learn More <img src={arrowright} alt="Arrow Right" />
        </h1>
        <div className="input flex gap-[15px] ">
          <div className="relative">
            <img
              className="absolute top-5 left-3 right-3"
              src={meassagicon}
              alt="meassagicon"
            />
            <input
              className="border-[1px] border-[#7CC140] py-[17px] px-[35px] rounded-[40px]"
              type="email"
              placeholder="Email"
            />
          </div>
          <div className="flex gap-3">
            <button className="rounded-[32.94px] h-[59.29px] w-[158px] bg-[#7CC140] text-white text-[17.13px] flex justify-center items-center gap-2">
              Subscribe
              <img className="text-white" src={arrowbutton} alt="Arrow Right" />
            </button>
            <button className="rounded-[32.94px] h-[59.29px] w-[158px] bg-[#388FCB] text-white text-[17.13px] flex justify-center items-center gap-2">
              <img
                className="text-white rotate-90"
                src={arrowbutton}
                alt="Arrow Right"
              />
              Stok List
            </button>
          </div>
          <div className="setline absolute top-[700px] bottom-[60px] left-0 flex flex-col gap-3">
            <img className="w-[80%] h-3" src={firstline} alt="firstline" />
            <img className=" w-[90%] h-3" src={secondline} alt="secondline" />
          </div>
        </div>
        <div className="setlink w-full flex gap-[7px] items-center pt-10">
          <div className="flex gap-[6px]">
            <img src={instagramicon} alt="instagram" />
            <img src={facebookicon} alt="facebook" />
            <img src={linkdeinicon} alt="linkdein" />
            <img src={linkdeinicon} alt="linkdein" />
            <img src={twiteericon} alt="twiteer" />
          </div>
          <div className="flex gap-[6px] w-[256px] text-[16px] font-bold items-center">
            <img src={usericon} alt="" />
            <h1 className="text-[#7CC140]">400k people Registered</h1>
          </div>
        </div>
      </div>
      <div className="hide w-[50%] flex justify-center items-center ">
        <img
          className="hide w-36 h-36 absolute top-20 right-20"
          src={iphonebg}
          alt=""
        />
        <img
          className="hide rotate-45 w-36 h-36 absolute top-20 right-20"
          src={iphonebg}
          alt=""
        />
        <img className="hide absolute top-64" src={iphonebg} alt="" />
        <img className="hide absolute top-64 rotate-45" src={iphonebg} alt="" />
        <img
          className="hide absolute top-48"
          src={iphone}
          alt="iphone-bg-image"
        />
      </div>
    </div>
  );
}

export default CardTop;

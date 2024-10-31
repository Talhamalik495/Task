import React from "react";
import iphoneshot from "../assets/iphone-mokup.png";
import coldbootle from "../assets/coldbottle.png";
import headphone from "../assets/headphone.png";
function Mokup() {
  return (
    <div className="setmokup w-full py-16 flex justify-center items-center relative mt-24 ">
      <div className="w-full flex justify-center items-center gap-[35px] absolute flex-wrap">
        <img src={iphoneshot} alt="iphoneshot" />
        <img src={coldbootle} alt="coldbootle" />
        <img src={headphone} alt="headphone" />
        <img src={iphoneshot} alt="iphoneshot" />
        <img src={coldbootle} alt="coldbootle" />
        <img src={headphone} alt="headphone" />
        <img src={iphoneshot} alt="iphoneshot" />
        <img src={coldbootle} alt="coldbootle" />
        <img src={headphone} alt="headphone" />
        <img src={iphoneshot} alt="iphoneshot" />
        <img src={coldbootle} alt="coldbootle" />
        <img src={headphone} alt="headphone" />
        <img src={iphoneshot} alt="iphoneshot" />
        <img src={coldbootle} alt="coldbootle" />
        <img src={headphone} alt="" />
        <img src={iphoneshot} alt="iphoneshot" />
        <img src={coldbootle} alt="coldbootle" />
      </div>
    </div>
  );
}

export default Mokup;

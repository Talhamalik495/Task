import React from "react";
import headerlogo from "../assets/header-logo.png";
import wifiicon from "../assets/wifi.png";
function Header() {
  return (
    <div className="text-set-header w-full flex justify-center items-center gap-10 h-24 text-[18px] text-[#333333]">
      <img
        className="hide absolute top-2 left-[52.3%]"
        src={wifiicon}
        alt="wifiicon"
      />
      <div className="flex gap-6 cursor-pointer">
        <h1 className="border-b-[2px] border-[#7CC140]">
          <span>Home</span>
        </h1>
        <h1>About Us</h1>
        <h1>Wholesale</h1>
      </div>
      <div className="none flex cursor-pointer relative ">
        <img
          className="logonone w-[80px] h-[40px]"
          src={headerlogo}
          alt="header-logo"
        />
        {/* </h1> */}
      </div>
      <div style={{ zIndex: 10 }} className="flex gap-6 cursor-pointer">
        <h1>Services</h1>
        <h1>News</h1>
        <h1>How it Works</h1>
      </div>
    </div>
  );
}

export default Header;

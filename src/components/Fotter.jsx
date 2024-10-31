import React from "react";
import dot from "../assets/dot.png";
import lessthan from "../assets/lessthan.png";
import greaterthan from "../assets/graterthan.png";
import dotreactangle from "../assets/dot-angle.png";
function Fotter() {
  return (
    <div className="w-full flex justify-center items-center gap-[16px]">
      <img src={lessthan} alt="lessthan" />
      <div className="w-[100px] flex justify-center items-center gap-[8px]">
        <img src={dotreactangle} alt="dotreactangle" />
        <img src={dot} alt="dot" />
        <img src={dot} alt="dot" />
        <img src={dot} alt="dot" />
      </div>
      <img src={greaterthan} alt="greaterthan" />
    </div>
  );
}

export default Fotter;

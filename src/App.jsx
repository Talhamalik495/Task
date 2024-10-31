import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import layer from "./assets/bottom-layer.png";
import herosectionbacgound from "./assets/herosectionbacgound.png";
import Card from "./components/Card";
import Fotter from "./components/Fotter";
import Header from "./components/Header";
import CardTop from "./components/CardTop";
import Mokup from "./components/Mokup";
import Hero from "./components/Hero";
import firstdot from "./assets/first-dot.png";
import seconddot from "./assets/second-dot.png";
function App() {
  return (
    <div className="w-full font-poppins overflow-hidden">
      <img
        className="hide w-[760px] h-[950px] absolute top-[-50px] left-[589px]"
        src={herosectionbacgound}
        alt="herosectionbacgound"
      />
      <img
        className="  absolute top-[590px] "
        src={firstdot}
        alt="herosectionbacgound"
      />
      <img
        className="  absolute top-[930px] "
        src={seconddot}
        alt="herosectionbacgound"
      />
      <div className="w-full">
        <Header />
      </div>
      <div className="w-full">
        <Hero />
      </div>
      <div className="w-full">
        <Mokup />
      </div>
      <img src={layer} alt="layer" />
      <div className=" w-full flex  flex-col gap-[30px] pb-5 ">
        <CardTop />

        <div className="card w-ful flex items-center  gap-[12px]  px-10">
          <div className="cardset w-[50%] flex gap-3">
            <Card />
            <Card />
          </div>

          <div className="cardset w-[50%] flex gap-3">
            <Card />
            <Card />
          </div>
        </div>
        <div className="w-full">
          <Fotter />
        </div>
      </div>
    </div>
  );
}

export default App;

import React from "react";
import Buttonn from "./button";
import Home from "../media/img/home-ilustration.svg";

const Hero = () => {
  return (
    <div className="grid-container py-40">
      <div className="container flex items-center gap-2">
        <div className="">
          <h1 className="text-6xl font-semibold max-w-lg py-5">
            Order Products Faster Easier
          </h1>
          <p className="max-w-xs text-xl  py-5 text-gray-500">
            Order your favorite foods at any time and we will deliver them right
            to where you are.
          </p>
          <Buttonn name="Get Started" />
        </div>
        <img className="w-3/5" src={Home} alt="homeimage" />
      </div>
    </div>
  );
};

export default Hero;

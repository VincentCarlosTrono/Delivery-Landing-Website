import React from "react";
import Buttonn from "./button";
import Home from "../media/img/home-ilustration.svg";

const Hero = () => {
  return (
    <div className="grid-container md:py-40 py-8">
      <div className="container block md:flex items-center gap-2">
        <div className="flex justify-center">
          <img
            className="md:w-3/5 w-5/6 block md:hidden md:py-2"
            src={Home}
            alt="homeimage"
          />
        </div>

        <div className="">
          <h1 className="md:text-6xl text-4xl font-semibold max-w-sm md:max-w-lg md:py-5 pt-16">
            Order Products Faster Easier
          </h1>
          <p className="md:max-w-xs max-w-sm text-md md:text-xl  py-5 text-gray-500">
            Order your favorite foods at any time and we will deliver them right
            to where you are.
          </p>
          <Buttonn name="Get Started" />
        </div>
        <img className="w-3/5 md:block hidden" src={Home} alt="homeimage" />
      </div>
    </div>
  );
};

export default Hero;

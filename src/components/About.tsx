import React from "react";
import AboutImg from "../media/img/about-ilustration.svg";

const About = () => {
  return (
    <div className="grid-container py-20 md:py-40">
      <div className="container block md:flex justify-center md:justify-between items-center">
        <img className="w-3/6 md:block hidden" src={AboutImg} alt="homeimage" />
        <div className="text-center">
          <h1 className="md:text-5xl text-3xl  font-semibold  md:max-w-lg py-5">
            Find Out A Little More About Us
          </h1>
          <p className="md:max-w-sm text-sm px-5  md:text-xl py-3  md:py-5 text-gray-500">
            we are a company dedicated to the distribution of products by
            delivery to your home or to the place where you are, with the best
            quality of delivery.
          </p>
        </div>
        <div className="flex justify-center md:hidden">
          <img className=" w-2/3" src={AboutImg} alt="homeimage" />
        </div>
      </div>
    </div>
  );
};

export default About;

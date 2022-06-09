import React from "react";
import AboutImg from "../media/img/about-ilustration.svg";

const About = () => {
  return (
    <div className="grid-container py-36">
      <div className="container flex justify-between items-center">
        <img className="w-3/6" src={AboutImg} alt="homeimage" />
        <div className="">
          <h1 className="text-5xl  max-w-lg py-5">
            Find out a little more about us
          </h1>
          <p className="max-w-sm tex-xl  py-5 text-gray-500">
            we are a company dedicated to the distribution of products by
            delivery to your home or to the place where you are, with the best
            quality of delivery.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

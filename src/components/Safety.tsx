import React from "react";
import Security from "../media/img/security-ilustration.svg";

const Safety = () => {
  return (
    <div className="grid-container py-14 md:py-36">
      <div className="container md:flex items-center gap-2">
        <div className="text-center md:text-left px-5 md:px-0 ">
          <h1 className="md:text-6xl text-4xl  font-semibold md:max-w-lg py-5 dark:text-white">
            Your Safety Is Important
          </h1>
          <p className="md:max-w-sm text-sm md:text-xl  py-5 text-gray-400">
            When your order reaches you, we have the health safety protocol, so
            that you are protected from any disease. Watch the video of how the
            delivery made.
          </p>
        </div>

        <img
          className="md:w-3/5 px-16 flex justify-center"
          src={Security}
          alt="homeimage"
        />
      </div>
    </div>
  );
};

export default Safety;

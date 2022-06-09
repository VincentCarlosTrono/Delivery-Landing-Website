import React from "react";
import Security from "../media/img/security-ilustration.svg";

const Safety = () => {
  return (
    <div className="grid-container py-36">
      <div className="container flex items-center gap-2">
        <div className="">
          <h1 className="text-6xl  max-w-lg py-5">Your Safety Is Important</h1>
          <p className="max-w-sm text-xl  py-5 text-gray-500">
            When your order reaches you, we have the health safety protocol, so
            that you are protected from any disease. Watch the video of how the
            delivery made.
          </p>
        </div>
        <img className="w-3/5" src={Security} alt="homeimage" />
      </div>
    </div>
  );
};

export default Safety;

import React from "react";
import Apps from "../media/img/app-ilustration.svg";
import Button from "./button";

const Watch = () => {
  return (
    <div className="grid-container py-16 md:py-40">
      <div className="container md:flex justify-center gap-10 items-center">
        <img className="w-2/5 hidden md:block" src={Apps} alt="appimage" />
        <div className=" items-center md:text-left text-center">
          <h1 className="md:text-5xl text-3xl font-semibold py-5">
            Watch Your Delivery At Any Time
          </h1>
          <p className="md:max-w-sm  text-sm md:text-xl  py-3 md:py-5 text-gray-500">
            With our app you can view the route of your order, from our local
            headquarters to the place where you are. Look for the app now
          </p>
          <div className="flex gap-3 pt-3 text-sm md:text-lg md:justify-start justify-center">
            <Button
              icon={<box-icon name="apple" type="logo"></box-icon>}
              name={"App Store"}
            />
            <Button
              icon={<box-icon name="play-store" type="logo"></box-icon>}
              name={"Play Store"}
            />
          </div>
        </div>
        <div className="flex justify-center md:hidden ">
          <img className="w-3/4 p-10" src={Apps} alt="appimage" />
        </div>
      </div>
    </div>
  );
};

export default Watch;

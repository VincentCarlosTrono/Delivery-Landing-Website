import React from "react";
import Apps from "../media/img/app-ilustration.svg";
import Button from "./button";

const Watch = () => {
  return (
    <div className="grid-container py-40">
      <div className="container flex justify-center gap-10 items-center">
        <img className="w-2/5" src={Apps} alt="appimage" />
        <div className="">
          <h1 className="text-5xl  max-w-lg py-5">
            Watch Your Delivery At Any Time
          </h1>
          <p className="max-w-sm text-xl  py-5 text-gray-500">
            With our app you can view the route of your order, from our local
            headquarters to the place where you are. Look for the app now
          </p>
          <div className="flex gap-3">
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
      </div>
    </div>
  );
};

export default Watch;

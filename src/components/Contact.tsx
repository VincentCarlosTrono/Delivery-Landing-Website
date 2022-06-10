import React from "react";
import Button from "./button";
import { ContactInterface } from "src/types";

const Contact = () => {
  const contactinfos = [
    {
      device: "Telephone:",
      contact: "999-888-777",
    },
    {
      device: "Email:",
      contact: "delivery@email.com",
    },
    {
      device: "Location:",
      contact: "Lima-Peru",
    },
  ];

  return (
    <div className="grid-container py-5 md:py-24" id="contact">
      <div className="container  md:flex">
        <div className="md:w-1/2 text-center md:px-0 px-2">
          <h1 className="md:text-5xl text-3xl md:text-left  md:max-w-md font-semibold py-0 md:py-5 dark:text-white">
            Contact Us From Here
          </h1>
          <p className="md:max-w-lg md:px-0 md:text-lg md:text-left text-gray-400 md:py-0 py-10 ">
            You can contact us from here, you can write to us, call us or visit
            our service center, we will gladly assist you.
          </p>
        </div>

        <div className="md:w-1/2 md:flex items-center md:justify-evenly">
          <div className="py-5 md:py-0">
            {contactinfos.map((contactInfo: ContactInterface) => {
              const { device, contact } = contactInfo;
              return (
                <div className="flex gap-2 py-2">
                  <p className="font-semibold dark:text-white">{device}</p>
                  <p className="text-gray-400">{contact}</p>
                </div>
              );
            })}
          </div>
          <Button name={"Contact Us"} />
        </div>
      </div>
    </div>
  );
};

export default Contact;

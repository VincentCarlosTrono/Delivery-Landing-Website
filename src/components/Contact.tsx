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
    <div className="grid-container py-24">
      <div className="container  flex">
        <div className="w-1/2 ">
          <h1 className="text-5xl max-w-md font-semibold py-5">
            Contact Us From Here
          </h1>
          <p className="max-w-lg text-lg text-gray-500">
            You can contact us from here, you can write to us, call us or visit
            our service center, we will gladly assist you.
          </p>
        </div>

        <div className="w-1/2 flex items-center justify-evenly">
          <div>
            {contactinfos.map((props: ContactInterface) => {
              const { device, contact } = props;
              return (
                <div className="flex gap-2 py-2">
                  <p className="font-semibold">{device}</p>
                  <p className="text-gray-500">{contact}</p>
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

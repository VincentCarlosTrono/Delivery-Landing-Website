import React from "react";
import { ServiceDataInterface } from "src/types";
import Service1 from "../media/img/services1-ilustration.svg";
import Service2 from "../media/img/services2-ilustration.svg";
import Service3 from "../media/img/services3-ilustration.svg";

const Services = () => {
  const services = [
    {
      title: "Payment Done",
      image: Service1,
      description: "Pay with a visa or PayPal card and without much ado.",
      more: "Learn more",
    },
    {
      title: "Find Your Product",
      image: Service2,
      description: "We offer Sale of products through the internet.",
      more: "Learn more",
    },
    {
      title: "Product Receive",
      image: Service3,
      description: "In our app you can see the delay time for your order.",
      more: "Learn more",
    },
  ];

  return (
    <div className="grid-container py-3 md:py-14">
      <div className="container">
        <div className="flex justify-center px-10">
          <h1 className="text-center font-semibold text-3xl md:text-5xl  md:max-w-lg py-10 dark:text-white">
            Some Services We Offer
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 justify-center items-center text-center gap-10 md:p-0 px-5 ">
          {services.map((service: ServiceDataInterface) => {
            const { title, image, description, more } = service;
            return (
              <div className="shadow-xl dark:shadow-zinc-900 rounded-xl p-3">
                <h2 className="text-xl font-semibold p-3 dark:text-white">
                  {title}
                </h2>
                <div className="flex justify-center">
                  <img className="w-48 h-48" src={image} alt="serviceImages" />
                </div>
                <p className="text-gray-400 py-3 "> {description}</p>

                <p className="font-semibold text-md py-5 dark:text-white">
                  {more}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;

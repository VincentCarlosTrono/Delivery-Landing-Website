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
    <div className="grid-container py-14">
      <div className="container">
        <div className="flex justify-center">
          <h1 className="text-center font-semibold text-5xl max-w-lg py-20">
            Some Services We Offer
          </h1>
        </div>
        <div className="flex justify-center items-center text-center gap-10 ">
          {services.map((props: ServiceDataInterface) => {
            const { title, image, description, more } = props;
            return (
              <div className="shadow-xl rounded-xl">
                <h2 className="text-xl font-semibold p-3">{title}</h2>
                <div className="flex justify-center">
                  <img className="w-48 h-52" src={image} alt="serviceImages" />
                </div>
                <p className="text-gray-500 py-3 px-14"> {description}</p>

                <p className="font-semibold text-md py-5">{more}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;

import React, { useContext } from "react";
import { FooterInfoInterface } from "src/types";
import { ThemeContext } from "./ThemeContext";

const Footer = () => {
  const { darkmode } = useContext(ThemeContext);
  const services = [
    {
      service1: "Pricing",
    },
    {
      service1: "Discounts",
    },
    {
      service1: "Report a bug",
    },
    {
      service1: "Terms of Service",
    },
  ];

  const footerInfos = [
    {
      title: "Our Company",
      info1: "Blog",
      info2: "Our mission",
      info3: "Get in touch",
    },
    {
      title: "Community",
      info1: "Support ",
      info2: "Questions",
      info3: "Customer help",
    },
  ];

  return (
    <div className="grid-container py-24  dark:bg-lightblack bg-orange">
      <div className="container ">
        <div className="md:flex justify-between">
          <div className=" py-3">
            <h1 className="text-lg font-semibold dark:text-white">Delivery</h1>
            <p className="text-gray-400">Order Products Faster And Easier</p>
          </div>

          <div className="py-3">
            <h1 className="text-lg font-semibold dark:text-white">
              Our Services
            </h1>
            {services.map((props) => {
              const { service1 } = props;
              return <p className="text-gray-400">{service1}</p>;
            })}
          </div>

          {footerInfos.map((footerinfo: FooterInfoInterface) => {
            const { title, info1, info2, info3 } = footerinfo;
            return (
              <div className="py-3">
                <div>
                  <h1 className="text-lg font-semibold dark:text-white">
                    {title}
                  </h1>
                  <p className="text-gray-400">{info1}</p>
                  <p className="text-gray-400">{info2}</p>
                  <p className="text-gray-400">{info3}</p>
                </div>
              </div>
            );
          })}

          <div className=" flex gap-1">
            <p className="hover:cursor-pointer hover:opacity-50 hover:-translate-y-1">
              <box-icon
                color={darkmode ? "white" : "black"}
                name="facebook-square"
                type="logo"
              ></box-icon>
            </p>
            <p className="hover:cursor-pointer hover:opacity-50 hover:-translate-y-1">
              <box-icon
                color={darkmode ? "white" : "black"}
                name="twitter"
                type="logo"
              ></box-icon>
            </p>
            <p className="hover:cursor-pointer hover:opacity-50 hover:-translate-y-1">
              <box-icon
                color={darkmode ? "white" : "black"}
                name="instagram-alt"
                type="logo"
              ></box-icon>
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center pt-32">
          <box-icon color="gray" name="copyright"></box-icon>
          <h1 className="text-gray-500">Vince. All rights reserved</h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;

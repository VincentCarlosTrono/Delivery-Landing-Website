import React from "react";

const Footer = () => {
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

  const footerInfo = [
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
    <div className="grid-container py-24 bg-orange">
      <div className="container flex justify-between">
        <div className="">
          <h1 className="text-lg font-semibold">Delivery</h1>
          <p>Order Products Faster And Easier</p>
        </div>

        <div>
          <h1 className="text-lg font-semibold">Our Services</h1>
          {services.map((props) => {
            const { service1 } = props;
            return <p>{service1}</p>;
          })}
        </div>

        {footerInfo.map((props) => {
          const { title, info1, info2, info3 } = props;
          return (
            <div>
              <h1 className="text-lg font-semibold">{title}</h1>
              <p>{info1}</p>
              <p>{info2}</p>
              <p>{info3}</p>
            </div>
          );
        })}

        <div className=" flex gap-1">
          <p className="hover:cursor-pointer hover:opacity-50 hover:-translate-y-1">
            <box-icon name="facebook-square" type="logo"></box-icon>
          </p>
          <p className="hover:cursor-pointer hover:opacity-50 hover:-translate-y-1">
            <box-icon name="twitter" type="logo"></box-icon>
          </p>
          <p className="hover:cursor-pointer hover:opacity-50 hover:-translate-y-1">
            <box-icon name="instagram-alt" type="logo"></box-icon>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

import React, { useEffect, useState } from "react";
import Button from "./button";

const Header = () => {
  const headerlists = [
    {
      header: "Home",
    },
    {
      header: "About us",
    },
    {
      header: "Services",
    },
    {
      header: "Contact us",
    },
  ];

  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      setScroll(window.scrollY);
    });
  }, []);

  return (
    <div
      className={`grid-container sticky top-0 bg-white ${
        scroll && `shadow-lg ease-in duration-500`
      }`}
    >
      <div className="container flex justify-between items-center py-5 font-semibold text-black">
        <h1>Delivery</h1>
        <div className="flex justify-between gap-5">
          <ul>
            <li className="flex justify-between gap-14">
              {headerlists.map((headerlist: any) => {
                const { header } = headerlist;
                return (
                  <div>
                    <h1>{header}</h1>
                  </div>
                );
              })}
            </li>
          </ul>
          <box-icon name="moon"></box-icon>
        </div>
        <Button name="Button!" />
      </div>
    </div>
  );
};

export default Header;

import React, { useEffect, useState } from "react";
import Button from "./button";

const Header = () => {
  const [menu, setMenu] = useState(false);

  console.log(menu);

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
      className={`grid-container sticky top-0 bg-white w-full ${
        scroll && `shadow-lg ease-in duration-500`
      }`}
    >
      <div className="container flex justify-between items-center py-5 font-semibold text-black">
        <h1>Delivery</h1>
        <div>
          <div className="flex justify-between items-center gap-5">
            <ul>
              <li className=" hidden md:flex justify-between  gap-14 ">
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
            <div className="md:block hidden">
              <box-icon name="moon"></box-icon>
            </div>
            <div className="md:block hidden">
              <Button name="Button!" />
            </div>
          </div>

          <button
            className="md:hidden block p-2"
            onClick={() => {
              setMenu(!menu);
            }}
          >
            <box-icon name="chevron-down-square"></box-icon>
          </button>

          {menu && (
            <ul className="">
              <li className=" md:hidden absolute right-0 top-20 bg-gray-200  w-full rounded-xl">
                <div className="absolute right-24 top-0 p-2">
                  <box-icon name="moon"></box-icon>
                </div>

                {headerlists.map((headerlist: any) => {
                  const { header } = headerlist;
                  return (
                    <div className=" text-center py-5 ">
                      <h1 className="">{header}</h1>
                    </div>
                  );
                })}
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;

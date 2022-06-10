import React, { useContext, useEffect, useState } from "react";
import { HeaderListInterface } from "src/types";
import Button from "./button";
import { ThemeContext } from "./ThemeContext";

const Header = () => {
  const { darkmode, setDarkmode } = useContext(ThemeContext);

  const [menu, setMenu] = useState(false);

  console.log(menu);

  const headerlists = [
    {
      header: "Home",
      link: "#",
    },
    {
      header: "About us",
      link: "#about",
    },
    {
      header: "Services",
      link: "#service",
    },
    {
      header: "Contact us",
      link: "#contact",
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
      className={`grid-container sticky top-0 dark:bg-black bg-white w-full ${
        scroll && `shadow-lg dark:shadow-gray-900 ease-in duration-500`
      }`}
    >
      <div className="container flex justify-between items-center py-5 font-semibold dark:text-white text-black">
        <a href="#">
          <h1 className="hover:text-yellow">Delivery</h1>
        </a>

        <div>
          <div className="flex justify-between items-center gap-5">
            <ul className=" hidden md:flex justify-between  gap-14 ">
              {headerlists.map((headerlist: HeaderListInterface) => {
                const { header, link } = headerlist;
                return (
                  <div>
                    <a href={link}>
                      <li className="">
                        <h1 className="hover:text-yellow">{header}</h1>
                      </li>
                    </a>
                  </div>
                );
              })}
            </ul>
            <button
              className="hidden md:block"
              onClick={() => {
                setDarkmode(!darkmode);
              }}
            >
              {darkmode ? (
                <box-icon color="white" name="sun"></box-icon>
              ) : (
                <box-icon name="moon"></box-icon>
              )}
            </button>
            <div className="md:block hidden">
              <Button name="Button!" />
            </div>
          </div>

          <button
            className="md:hidden block p-2 "
            onClick={() => {
              setMenu(!menu);
            }}
          >
            <box-icon
              color={darkmode ? "white" : "black"}
              name="chevron-down-square"
            ></box-icon>
          </button>
          <div className="">
            {menu && (
              <ul className="">
                <li className="md:hidden absolute  transition-500 right-0 top-20 dark:bg-lightblack bg-gray-200  w-full rounded-xl">
                  <div className="absolute right-24 top-0 p-2">
                    <button
                      onClick={() => {
                        setDarkmode(!darkmode);
                      }}
                    >
                      {darkmode ? (
                        <box-icon
                          color={darkmode ? "white" : "black"}
                          name="sun"
                        ></box-icon>
                      ) : (
                        <box-icon name="moon"></box-icon>
                      )}
                    </button>
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
    </div>
  );
};

export default Header;

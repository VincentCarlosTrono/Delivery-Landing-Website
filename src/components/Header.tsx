import React, { useContext, useEffect, useState } from "react";
import Button from "./button";
import Menu from "./Menu";
import { ThemeContext } from "../ContextAPI/ThemeContext";
import { HeaderListInterface, HeaderLists } from "src/types";

export const headerlists: HeaderLists = [
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

const Header = () => {
  const { darkmode, setDarkmode } = useContext(ThemeContext);
  const [menu, setMenu] = useState(false);
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
        <a href="/">
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
              <Button name="Order Now!" />
            </div>
          </div>

          <button
            className="md:hidden block p-2 "
            onClick={() => {
              setMenu(!menu);
            }}
          >
            {menu ? (
              <box-icon
                name="chevron-up-square"
                color={darkmode ? "white" : "black"}
              />
            ) : (
              <box-icon
                color={darkmode ? "white" : "black"}
                name="chevron-down-square"
              />
            )}
          </button>
          <div>{menu && <Menu menu={menu} setMenu={setMenu} />}</div>
        </div>
      </div>
    </div>
  );
};

export default Header;

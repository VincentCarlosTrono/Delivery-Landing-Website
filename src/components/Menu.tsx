import React, { useContext } from "react";
import { headerlists } from "./Header";
import { ThemeContext } from "../ContextAPI/ThemeContext";
import { HeaderListInterface, MenuPropsInterface } from "src/types";

const Menu = (props: MenuPropsInterface) => {
  const { menu, setMenu } = props;
  const { darkmode, setDarkmode } = useContext(ThemeContext);

  return (
    <ul>
      <li className="md:hidden absolute  transition-500 right-0 top-20 dark:bg-lightblack bg-gray-200  w-full">
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

        {headerlists.map((headerlist: HeaderListInterface) => {
          const { header, link } = headerlist;
          return (
            <div className=" text-center py-5 ">
              <a href={link}>
                <li
                  onClick={() => {
                    setMenu(!menu);
                  }}
                >
                  {header}
                </li>
              </a>
            </div>
          );
        })}
      </li>
    </ul>
  );
};

export default Menu;

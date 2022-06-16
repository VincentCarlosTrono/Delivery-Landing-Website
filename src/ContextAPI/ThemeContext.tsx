import React, { createContext, useState } from "react";

export const ThemeContext = createContext<any>("");

export const ThemeProvider = (props) => {
  const [darkmode, setDarkmode] = useState(false);
  return (
    <div>
      <ThemeContext.Provider value={{ darkmode, setDarkmode }}>
        {props.children}
      </ThemeContext.Provider>
    </div>
  );
};

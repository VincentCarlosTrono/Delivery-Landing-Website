import React from "react";
import { ButtonPropsInterface } from "src/types";

const button = (props: ButtonPropsInterface) => {
  const { name, icon } = props;
  return (
    <div>
      <button className="py-2 px-8 rounded-full bg-yellow hover:bg-darkenyellow flex items-center gap-2 ">
        <div>{icon}</div>
        {name}
      </button>
    </div>
  );
};

export default button;

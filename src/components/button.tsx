import React from "react";

interface ButtonPropsInterface {
  name: String;
  icon?: any;
}

const button = (props: ButtonPropsInterface) => {
  return (
    <div>
      <button className="py-3 px-8 rounded-full bg-yellow hover:bg-darkenyellow ">
        {props.name}
        <div>{props.icon}</div>
      </button>
    </div>
  );
};

export default button;

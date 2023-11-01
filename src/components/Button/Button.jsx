import React from "react";

const Button = ({id, text, }) => {
  return (
    <div>
      <button className="bg-orange-500 text-white px-8 rounded-md py-2" id={id} >{text}</button>
    </div>
  );
};

export default Button;

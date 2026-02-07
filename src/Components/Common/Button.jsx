import React from "react";
import arrow from "../../assets/Arrow.svg";

const Button = ({ text, link, bgColor, textColor }) => {
  return (
    <a
      href={link}
      className={`${bgColor} ${textColor} py-4 px-8 text-sm rounded-full 
      inline-flex items-center gap-2 cursor-pointer`}
    >
      <span>{text}</span>

      <img
        src={arrow}
        alt="arrow"
        className="h-[1.6em] w-[0.8em] align-middle mr-2"
      />
    </a>
  );
};

export default Button;

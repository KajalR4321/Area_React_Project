import React from "react";
import arrow from "../../assets/Arrow.svg";

const Button = ({ text, link, bgColor, textColor }) => {
  return (
    <a
      href={link}
      className={`${bgColor} ${textColor} w-max py-2 px-4 sm:py-2 sm:px-7 text-xs sm:text-sm rounded-full 
      flex justify-center items-center gap-2 cursor-pointer`}
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

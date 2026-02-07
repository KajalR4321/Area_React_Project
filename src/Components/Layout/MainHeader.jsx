import React from "react";
import menu from "../../Data/Menu";
import Button from "../Common/Button";

const MainHeader = () => {
  return (
    // I use tailwind  first i give class name
    <header className="py-4 flex justify-between items-center font-dm_sans">
      <div>
        <h1 className="text-3xl font-bold">Area</h1>
      </div>

      <nav className=" sm:block">
        <ul className="flex gap-5 font-bold text-sm " >
            {/* acces data with the help of map method */}
          {menu?.map((item) => (
            <li key={item.id}>
              <a href={item.link}>{item.title}</a>
            </li>
          ))}
        </ul>
      </nav>

      <div>
        <Button
          text="Learn More"
          link="#Contact"
          bgColor="bg-accent1"
          textColor="text-white"
        />
      </div>
    </header>
  );
};

export default MainHeader;

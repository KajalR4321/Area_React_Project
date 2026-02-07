import React, { useState } from "react";
import menu from "../../Data/Menu";
import Button from "../Common/Button";

const MainHeader = () => {
  const [open, setOpen] = useState(false)
  return (
    // I use tailwind  first i give class name
    <header className="py-4 flex justify-between items-center font-dm_sans">
      <div>
        <h1 className="text-3xl font-bold">Area</h1>
      </div>

      <nav className={`fixed ${open ? 'top-0' : '-top-[200%]'} left-0 max-sm:bg-black/20 backdrop-blur-xl z-999 w-full flex flex-col justify-center align-center h-screen sm:h-auto sm:relative`}>
        <ul className="flex flex-col sm:flex-row gap-5 font-bold text-sm w-max mx-auto  " >
          {/* acces data with the help of map method */}
          {menu?.map((item) => (
            <li key={item.id}>
              <a href={item.link}>{item.title}</a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="flex gap-4 items-center">
        <Button
          text="Learn More"
          link="#Contact"
          bgColor="bg-accent1"
          textColor="text-white"
        />

        <div className="sm:hidden z-1000">
          <button onClick={() => setOpen(prev => prev === true ? false : true)}>
            {open ? 'C' : 'M'}
          </button>
        </div>
      </div>

    </header>
  );
};

export default MainHeader;

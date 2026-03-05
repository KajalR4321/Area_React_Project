import React from "react";
import menu from "../../data/Menu";
import logo from "../../assets/Logo.jpg";

const MainFooter = () => {
    return (
        <footer className="flex flex-col px-2">
            <hr />
            <div className="flex flex-col gap-20 my-10">
                <nav>
                    <ul className="flex flex-col gap-4 font-bold text-sm sm:flex-row">
                        {menu.map((item) => {
                            return (
                                <li key={item.id}>
                                    <a href={item.link}>{item.title}</a>

                                </li>

                            )
                        })}
                    </ul>
                </nav>
                <div className="flex gap-10 text-accent1 items-end justify-between">
                    <div className="flex items-end gap-15">

                        <img src={logo} alt="icon image" />
                        <div className="flex gap-8">

                            <p className="text-sm">c Area .  </p>
                            <p className="text-sm"> 2025</p>
                        </div>

                    </div>

                    <p className="text-sm">All Rights Reserved</p>



                </div>
            </div>

        </footer>
    )
}
export default MainFooter;


import CtaData from "../../Data/Cta";
import React from 'react';

function Cta() {
    return (
        <div className="max-w-7xl mx-auto px-4 py-12">
            {/* The "flex" and "gap" classes create the row layout */}
            <ul className="flex flex-col md:flex-row gap-6 justify-center ml-9" >
                {CtaData?.map((item) => (
                    <li
                        key={item.id}
                        className="flex-1 bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow flex flex-col items-start"
                    >
                        {/* Logo/Icon */}
                        <img
                            src={item.logo}
                            alt={item.title}
                            className="w-6 h-7 mb-4 object-contain"
                        />

                        {/* Heading */}
                        <h3 className="text-xs font-bold text-gray-800 mb-2">
                            {item.title}
                        </h3>

                        {/* Description */}
                        <p className="text-gray-600 leading-relaxed text-sm">
                            {item.description}
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Cta;


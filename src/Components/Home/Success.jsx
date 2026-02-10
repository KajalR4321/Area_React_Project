import React from "react";
import SuccessData from "../../Data/Success";

const Success = () => {
    return (
        <section className="py-10 px-6 max-w-7xl mx-auto">
            <div>
                {/* Top line */}
                <hr className="border-gray-200" />

                <div className="flex justify-between items-center py-12">
                    <p className="font-medium text-4xl font-crimson_text">Map Your Success</p>
                    <button className="bg-[#D9F2D0] hover:bg-[#c8e6bc] transition-colors px-8 py-3 rounded-full text-sm font-medium whitespace-nowrap">
                        Discover Now
                    </button>
                </div>

                {/* Line between header and content */}
                <hr className="border-gray-200" />
            </div>

            <div className="flex gap-10">
                {SuccessData.map((item) => {
                    return (
                        <div key={item.id} className="flex-1"> {/* Fixed key and added flex-1 */}
                            <div className="flex flex-col gap-12 justify-center py-12">
                                {/* Increased ID size */}
                                <p className="text-5xl text-gray-300 font-normal">{item.id}</p>

                                <div className="flex flex-col gap-8">
                                    {/* Fixed property names from p1/p2 to title/desc */}
                                    <p className="font-crimson_text text-xl font-bold  text-gray-800">{item.title}</p>
                                    <p className="font-dm_sans text-gray-600 text-sm font-normal">{item.desc}</p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

export default Success;
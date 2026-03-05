import BigData from "../../Data/BigData";
import Sofa from "../../assets/sofa.png";

const BigPicture = () => {
    return (
        <section className="max-w-7xl mx-auto px-6 py-12 md:py-20">
            <div className="flex flex-col md:flex-row items-center justify-between gap-10">

                {/* Left Side: Content */}

                <div className="w-full md:w-1/2 space-y-6">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                        See the Big Picture
                    </h1>
                    <p className="text-lg text-gray-600 md:text-sm">
                        Area turns your data into clear, vibrant visuals that show you exactly
                        what's happening in each region.
                    </p>


                    {/* Optional: Mapping the BigData list items */}
                    <div className="space-y-4 pt-4">
                        {BigData.map((item) => (
                            <div key={item.id} className="flex gap-4">
                                <span className="font-bold text-gray-600">{item.id}.</span>
                                <p className="text-gray-700">{item.des}</p>
                            </div>
                        ))}
                    </div>
                    {/* --- ADDED BUTTON HERE --- */}
                    <button className="bg-[#E9E9E9] text-black px-8 py-3 rounded-full font-medium hover:bg-gray-800 hover:text-accent2 transition-all duration-300 transform hover:scale-105 mt-1.5">
                        Discover More
                    </button>

                </div>

                {/* Right Side: Image */}
                <div className="w-full md:w-1/2 flex justify-center">
                    <img
                        src={Sofa}
                        alt="Sofa Visualization"
                        className="w-full max-w-md md:max-w-full h-auto object-contain rounded-lg shadow-xl"
                    />
                </div>

            </div>
            <hr className="mt-35 text-accent3 " ></hr>

        </section>
    );
};

export default BigPicture;
import RockImg from "../../assets/Rock.png";

const RockPortion = () => {
    return (
        <section className="flex flex-col md:flex-row items-stretch w-full max-w-6xl mx-auto overflow-hidden  ml-10">

            {/* Left Side: Fixed at 40% width */}
            <div className="md:basis-2/5 w-full">
                <img
                    src={RockImg}
                    alt="Rock"
                    className="w-full h-full object-cover"
                    style={{ minHeight: "400px" }} // Ensures the image doesn't collapse
                />
            </div>

            {/* Right Side: Fixed at 60% width */}
            <div className="md:basis-3/5 w-full p-16 md:p-25 flex flex-col">
                <h2 className="text-xl md:text-2xl font-serif  text-gray-800">
                    “I was skeptical, but Area has completely transformed the way I manage mybusiness.
                    The data visualizations are so clear and intuitive, and the platform is so easy to use.”
                </h2>

                {/* Pushes to bottom */}
                <div className="mt-auto pt-8">
                    <h3 className="text-sm font-bold text-gray-700">John Smith</h3>
                    <p className="text-gray-500 text-xs tracking-widest font-semibold mt-1.5">
                        Head Of Data
                    </p>
                </div>
            </div>
        </section>
    );
}

export default RockPortion;
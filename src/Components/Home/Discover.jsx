import Mountain from "../../assets/mountain.png";

const Discover = () => {
    return (
        <>
            <section >
                {/* 1. Container: Use mx-auto to center the div itself */}
                <div className=" justify-center items-center px-4">

                    {/* 2. Image: Use a defined width and h-auto to keep proportions */}
                    <img
                        src={Mountain}
                        alt="mountain"
                        className="w-full h-[300px] md:h-[600px]   object-contain"
                    />

                </div>
            </section>
        </>
    );
};

export default Discover;
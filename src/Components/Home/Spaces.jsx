const Spaces = () => {
    return (
        <>
            {/* py-20 gives it vertical space, bg-[#E9E9E9] is your custom color */}
            <section className=" flex flex-col items-center justify-center text-center px-6 py-20 min-h-[400px]   ">

                <div className="max-w-2xl mb-">
                    {/* Small Size Heading */}
                    <h3 className="text-sm font-semibold  tracking-widest text-gray-500 mb-2">
                        Spaces
                    </h3>

                    {/* Large Size Heading */}
                    <h1 className="text-3xl md:text-5xl font-bold text-black-600 mb-6">
                        Why Choose Area?
                    </h1>

                    {/* Small Text Paragraph */}
                    <p className="text-sm md:text-base text-gray-600 mb-8 leading-relaxed">
                        You need a solution that keeps up. That’s why we developed Area. <br className="hidden md:block" />
                        A developer-friendly approach to streamline your business.
                    </p>
                </div>

                {/* Styled Button */}
                <button className=" bg-gray-300 text-black px-8 py-3 rounded-full font-medium hover:bg-gray-800 hover:text-white transition-all active:scale-95">
                    Discover More
                </button>


            </section>

        </>
    )
}

export default Spaces;
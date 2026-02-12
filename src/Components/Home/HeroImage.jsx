import Hero2 from "../../assets/Image.png";

const HeroImage = () => {
    return (
        <section className="w-full px-4 py-10 my-12 flex justify-center items-center">
            <div className="w-full max-w-[1080px]"> {/* Limits the max width so it doesn't get TOO big */}
                <img
                    src={Hero2}
                    alt="Hero Image 2"
                    className="rounded-[20px] 
                    object-cover 
                    shadow-xl
                    /* Mobile: 90% of screen width */
                    w-[100%] 
                    /* Tablet: 85% of screen width */
                    md:w-[85%] 
                    /* Desktop: 80% of screen width, maxed out at 1200px */
                    lg:w-[90%] 
                    max-w-[1200px] 
                    /* Height: auto ensures it stays proportional */
                    h-auto
                    mb-8
                "                />
            </div>
        </section>
    );
}

export default HeroImage;
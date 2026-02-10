import Hero2 from "../../assets/Image.png"
const HeroImage = () => {
    return (
        <>
            < div className="py-10 my-10 justify-center items-center text-center flex">
                <img src={Hero2}
                    className="w-70 h-40 rounded-[20px] flex  object-fill md:w-150  h-80 lg:w-270 h-130"

                    alt="Hero Image 2" />
            </div>
        </>
    )
}
export default HeroImage;
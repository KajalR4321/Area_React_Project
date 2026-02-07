import Ipad from "../../assets/Ipad.png";
import Iphone from "../../assets/iphone.png";

const Banner = () => {
  return (
    <section className="my-12 mb-6 space-y-8">
      <div>
        <h1 className="font-crmison_text text-4xl sm:text-8xl lg:text-[7rem] text-center">
          Browse everything.
        </h1>
      </div>

      <div className="relative flex justify-center">
        {/* Light green background */}
        <div
          className="absolute bottom-0 w-[90%] min-h-[35vh] lg:min-h-[45vh] 
          rounded-3xl bg-accent3 z-0"
        />

        {/* iPad image */}
        <img
          src={Ipad}
          alt="Ipad"
          loading="eager"
          fetchPriority="high"
          className="max-w-[70%] z-10 hidden sm:block"
        />

        {/* iPhone image */}
        <img
          src={Iphone}
          alt="Iphone"
          loading="eager"
          fetchPriority="high"
          className="max-w-[70%] z-10 sm:hidden"
        />
      </div>
    </section>
  );
};

export default Banner;

import Button from "../../Components/Common/Button";

const ConnectSection = () => {

    return (
        <section className="flex flex-col my-15 lg:px-60 md:px-25 text-center gap-10 justify-center items-center ">
            <p className="text-bold text-5xl font-medium text-accent4 font-crimson_text">Connect with us</p>
            <p className="text-text">Schedule a quick call to learn how Area can turn your
                regional data into powerful advantage.
            </p>
            <div className="w-full justify-center flex ">
                <Button
                    text="Learn More"
                    link="#contact"
                    bgColor="bg-accent1"
                    textColor="text-primary"


                />
            </div>
        </section>
    )

}
export default ConnectSection;
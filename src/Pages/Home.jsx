import React from "react";
import Banner from "../Components/Home/Banner"
import Client from "../Components/Home/Client";
import Benifits from "../Components/Home/Bennifits";
import Cta from "../Components/Home/Cta";


const Home = () => {
  return (
    <>

      <Banner />
      <Client />
      <Benifits />
      <Cta />

      <hr className="text-[#e9e9e9]" />
    </>
  );
};

export default Home;
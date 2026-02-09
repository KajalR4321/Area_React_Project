import React from "react";
import Banner from "../Components/Home/Banner"
import Client from "../Components/Home/Client";
import Benifits from "../Components/Home/Bennifits";
import Cta from "../Components/Home/Cta";
import Discover from "../Components/Home/Discover";
import BigPicture from "../Components/Home/BigPicture";
import Spaces from "../Components/Home/Spaces";
import RockPortion from "../Components/Home/Rock";
import Success from "../Components/Home/Success";




const Home = () => {
  return (
    <>

      <Banner />
      <Client />
      <Benifits />
      <Cta />
      <Discover />
      <BigPicture />
      <Spaces />
      <RockPortion />
      <Success />





      <hr className="text-[#e9e9e9]" />
    </>
  );
};

export default Home;
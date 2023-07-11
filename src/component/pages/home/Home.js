import React, { useContext } from "react";
import HeroSection from "./HeroSection";
import NewWayHome from "./NewWayHome";
import Properties from "./Properties";
import EasyTanent from "./EasyTanent";
import SpamPromise from "./SpamPromise";
import Footer from "../../shared/Footer";

const Home = () => {
  return (
    <div>
      <HeroSection></HeroSection>
      <NewWayHome></NewWayHome>
      <Properties></Properties>
      <EasyTanent></EasyTanent>
      <SpamPromise></SpamPromise>
      <Footer></Footer>
    </div>
  );
};

export default Home;

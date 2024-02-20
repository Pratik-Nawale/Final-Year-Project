import React from "react";
import Navbar from "./Navbar/Navbar";
import Header from "./Header/Header";
import Pricing from "./Pricing/Pricing";
import Features from "./Features/Features"
import Footer from "./Footer/Footer"
import AboutUs from "./AboutUs/AboutUs";

const LandingPage = () => {
  return (
    <>
    {/* Pratik */}
      <Navbar />
      <Header/>

      {/* Sadiya  */}
      <Features/>

      {/* Yuvraj  */}
      <Pricing/>

      <AboutUs/>

      {/* Yashfin  */}
      <Footer/>
    </>
  );
};

export default LandingPage;

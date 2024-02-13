import React from "react";
import Navbar from "./Navbar/Navbar";
import Header from "./Header/Header";
import Pricing from "./Pricing/Pricing";
import Features from "./Features/Features"
import Footer from "./Footer/Footer"

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

      {/* Yashfin  */}
      <Footer/>
    </>
  );
};

export default LandingPage;

import React from "react";
import About from "../components/About";
import Banner from "../components/Banner";
import Services from "../components/Services";
import Footer from "../../src/components/Footer/Footer.jsx";
import { BrowserRouter as Router } from "react-router-dom";


export default function Home() {
  return (
    <div>
       <Router>
      <Banner />
      <About />
      <Services />
      <Footer/>
      </Router>
    </div>
  );
}
